import { Construct } from 'constructs';
import { CfnParameter, Stack, StackProps } from 'aws-cdk-lib';

import {
  DNSRecord,
  SiteBucket,
  SiteDeployment,
  SiteDistribution,
} from './constructs';

export class WebsiteStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const subDomainName = new CfnParameter(this, 'subDomainName', {
      type: 'String',
      description:
        'The name of the sub domain that will be set as an alias record in Route53 and be used by Cloudfront',
    });

    const zoneName = new CfnParameter(this, 'zoneName', {
      type: 'String',
      description: 'The name of the zone in Route53',
    });

    const rootDomain = zoneName.valueAsString;
    const subDomain = subDomainName.valueAsString;
    const domainProps = { rootDomain, subDomain };

    const siteBucket = new SiteBucket(this, 'SiteBucket', domainProps);
    const distribution = new SiteDistribution(this, 'SiteDistribution', {
      ...domainProps,
      siteBucket: siteBucket.instance,
    });

    new DNSRecord(this, 'SiteDNSRecord', {
      ...domainProps,
      distribution: distribution.instance,
    });

    new SiteDeployment(this, 'SiteDeployment', {
      bucket: siteBucket.instance,
      sourceCodeFolder: '../application-code', // sourceCodeFolder.valueAsString,
      distribution: distribution.instance,
    });
  }
}
