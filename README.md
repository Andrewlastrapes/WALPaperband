# WALPaperband

npm run build
aws s3 sync dist/ s3://andrewlastrapes.com --delete
aws cloudfront create-invalidation --distribution-id ETY7T2HGL5CBE --paths "/*"