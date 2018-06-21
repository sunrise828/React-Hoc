// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017-2018 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
var aws_app_analytics = 'enable';
var aws_cognito_identity_pool_id = 'Your_pool_id';
var aws_cognito_region = 'us-east-1';
var aws_content_delivery = 'enable';
var aws_content_delivery_bucket = 'your_bucket_name';
var aws_content_delivery_bucket_region = 'us-east-1';
var aws_content_delivery_cloudfront = 'enable';
var aws_content_delivery_cloudfront_domain = 'your_cloudfront_domain';
var aws_mobile_analytics_app_id = 'your_app_id';
var aws_mobile_analytics_app_region = 'us-east-1';
var aws_project_id = 'your_project_id';
var aws_project_name = 'your_project_name';
var aws_project_region = 'us-east-1';
var aws_resource_name_prefix = 'your_prefix';
var aws_sign_in_enabled = 'enable';
var aws_user_files = 'enable';
var aws_user_files_s3_bucket = 'your_aws_s3_bucket_name';
var aws_user_files_s3_bucket_region = 'us-east-1';
var aws_user_pools = 'enable';
var aws_user_pools_id = 'your_user_pool_id';
var aws_user_pools_mfa_type = 'ON';
var aws_user_pools_web_client_id = 'your_client_id';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
  });
AWS.config.update({customUserAgent: 'MobileHub v0.1'});