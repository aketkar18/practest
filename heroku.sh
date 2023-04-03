#!/bin/zsh

function deploy_client() {
  echo "Deploying client..."
  heroku git:remote -a practest
  git subtree push --prefix client heroku main
}

function deploy_server() {
  echo "Deploying server..."
  heroku git:remote -a practest-server
  git subtree push --prefix server heroku main
}

if [[ $# -eq 0 ]]; then
  echo "Please provide a flag: -c, -s, or -a"
  exit 1
fi

for arg in "$@"
do
  case $arg in
    -c)
      deploy_client
      shift
      ;;
    -s)
      deploy_server
      shift
      ;;
    -a)
      deploy_client
      deploy_server
      shift
      ;;
    *)
      echo "Unknown flag: $arg. Please provide a valid flag: -c, -s, or -a"
      exit 1
      ;;
  esac
done

echo "Deployment completed!"
