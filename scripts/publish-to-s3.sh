BUCKET=$1

cmd="aws s3 sync build $BUCKET"
echo "> $cmd"
eval $cmd
