BUCKET=$1

# Build project.
cmd="npm run build"
echo "> $cmd"
eval $cmd

# Publish to S3.
cmd="aws s3 sync build $BUCKET"
echo "> $cmd"
eval $cmd
