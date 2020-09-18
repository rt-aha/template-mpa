# #!/bin/sh

for arg in $@
  do

  isExist=f
  for dir in $(ls folder)  
    do
      filename="${dir%.*}"
      echo "$arg $filename"

      if [ "$arg" = "$filename" ]
      then
        
        isExist=t
      fi
    done

  echo "???, $isExist"
  if [ "$isExist" = "f" ]
  then
    echo "info: create $arg.html and $arg.js success!"
  else
    echo "warn: $arg is already existed, please check it"
  fi

  done


