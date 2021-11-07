import { Construct } from '@aws-cdk/core';
import { RecordTarget, ARecord, HostedZone } from '@aws-cdk/aws-route53';
import { CloudFrontTarget } from '@aws-cdk/aws-route53-targets'
import { CloudFrontWebDistribution } from "@aws-cdk/aws-cloudfront";

import { DomainProps } from '../props/domain-props';

export interface DNSRecordProps extends DomainProps {
    distribution: CloudFrontWebDistribution
}

export class DNSRecord extends Construct {
    constructor(parent: Construct, id: string, props: DNSRecordProps) {
        super(parent, id);

        const zone = HostedZone.fromLookup(this, 'Zone', { domainName: props.rootDomain });
        const domainName = props.subDomain ? `${props.subDomain}.${props.rootDomain}`: props.rootDomain;
        
        new ARecord(this, 'WebiteAliasRecord', {
            recordName: domainName,
            target: RecordTarget.fromAlias(new CloudFrontTarget(props.distribution)),
            zone
        });
    }
}