#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { WebsiteStack } from '../lib/website-stack';

const app = new cdk.App();
const env = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

new WebsiteStack(app, 'ReactWeatherStack-Development', { env });
new WebsiteStack(app, 'ReactWeatherStack-Staging', { env });
new WebsiteStack(app, 'ReactWeatherStack-Production', { env });
