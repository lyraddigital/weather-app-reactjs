import { Construct } from 'constructs';
import { IBucket } from 'aws-cdk-lib/aws-s3';
import {
  CloudFrontWebDistribution,
  IDistribution,
  OriginAccessIdentity,
  SecurityPolicyProtocol,
  SSLMethod,
  ViewerCertificate,
} from 'aws-cdk-lib/aws-cloudfront';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import {
  CertificateValidation,
  DnsValidatedCertificate,
} from 'aws-cdk-lib/aws-certificatemanager';

import { DomainProps } from '../props/domain-props';

export interface SiteDistributionProps extends DomainProps {
  siteBucket: IBucket;
}

export class SiteDistribution extends Construct {
  public instance: IDistribution;

  constructor(parent: Construct, id: string, props: SiteDistributionProps) {
    super(parent, id);

    const zone = HostedZone.fromLookup(this, 'Zone', {
      domainName: props.rootDomain,
    });
    const domainName = props.subDomain
      ? `${props.subDomain}.${props.rootDomain}`
      : props.rootDomain;

    const certificate = new DnsValidatedCertificate(
      this,
      'WebsiteCertificate',
      {
        domainName: domainName,
        validation: CertificateValidation.fromDns(),
        // subjectAlternativeNames: [domainName],
        hostedZone: zone,
        region: 'us-east-1',
      },
    );

    const originIdentity = new OriginAccessIdentity(
      this,
      'WebsiteDistributionOriginIdentity',
    );
    props.siteBucket.grantRead(originIdentity);

    this.instance = new CloudFrontWebDistribution(this, 'WebsiteDistribution', {
      viewerCertificate: ViewerCertificate.fromAcmCertificate(certificate, {
        sslMethod: SSLMethod.SNI,
        securityPolicy: SecurityPolicyProtocol.TLS_V1_2_2021,
      }),
      errorConfigurations: [
        {
          errorCode: 404,
          responseCode: 200,
          responsePagePath: '/index.html',
        },
      ],
      originConfigs: [
        {
          s3OriginSource: {
            s3BucketSource: props.siteBucket,
            originAccessIdentity: originIdentity,
          },

          behaviors: [{ isDefaultBehavior: true }],
        },
      ],
    });
  }
}
