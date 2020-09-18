#!/bin/bash

function genEnv {
  # rm shDev/gen$2.sh
  sh shDev/gen$1.sh home page
  # sh shDev/genInitEnv.sh 
}

PS3="Please choose the template language that you want to use:"
select option in "html" "pug"
do
  case $option in
    "html")
      genEnv HTML PUG
      break ;;
    "pug")
      genEnv PUG HTML
      break ;;
    *)
      echo "Please type 1 or 2";;
  esac

  
done

exit


