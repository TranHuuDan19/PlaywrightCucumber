#cucumber tag
tag=$1

#run cucumber test & on failure run postcucumber
yarn run cucumber --profile $tag ||  yarn run postcucumber