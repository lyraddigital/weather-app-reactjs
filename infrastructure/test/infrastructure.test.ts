import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import { WebsiteStack } from '../lib/website-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new WebsiteStack(app, 'WebsiteStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
