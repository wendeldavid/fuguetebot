#!/bin/bash

# 1. Define the AWS CLI environment variables
export AWS_ACCESS_KEY_ID=<access_key>
export AWS_SECRET_ACCESS_KEY=<secret_key>
export AWS_DEFAULT_REGION=us-east-1


# 4. Update the Lambda function
aws lambda update-function-code \
--function-name primotelmobot \
--zip-file fileb://primo.zip

# 6. Clean up
rm lambda_function.zip