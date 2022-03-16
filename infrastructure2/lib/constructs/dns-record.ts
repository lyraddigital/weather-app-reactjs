import { Construct } from 'constructs';
import { IDistribution } from 'aws-cdk-lib/aws-cloudfront';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';

import { DomainProps } from '../props/domain-props';

export interface DNSRecordProps extends DomainProps {
  distribution: IDistribution;
}

export class DNSRecord extends Construct {
  constructor(parent: Construct, id: string, props: DNSRecordProps) {
    super(parent, id);

    const zone = HostedZone.fromLookup(this, 'Zone', {
      domainName: props.rootDomain,
    });
    const domainName = props.subDomain
      ? `${props.subDomain}.${props.rootDomain}`
      : props.rootDomain;

    new ARecord(this, 'WebiteAliasRecord', {
      recordName: domainName,
      target: RecordTarget.fromAlias(new CloudFrontTarget(props.distribution)),
      zone,
    });
  }
}
