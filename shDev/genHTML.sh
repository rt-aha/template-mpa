templateString='
<!DOCTYPE html>\n
<html lang="en">\n
\t<head>\n
\t\t<meta charset="UTF-8">\n
\t\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n
\t\t<title>Document</title>\n
\t</head>\n
\t<body>\n
\t</body>\n
</html>\n
'

echo "----- Start generate .html template"

# 沒有參數直接離開
if [ "$#" = "0" ]
then
  echo "-WARN: please enter at least a argument"
  echo "EXIT"
  exit
fi


for arg in $@
  do
  isExist=f
  for dir in $(ls ./src/js)  
    do
      filename="${dir%.*}"
      echo "$arg $filename"

      if [ "$arg" = "$filename" ]
      then
        
        isExist=t
      fi
    done

  if [ "$isExist" = "f" ]
  then
    echo $templateString >> src/template/$arg.html
    touch src/js/$arg.js
    echo "-INFO: create $arg.html and $arg.js success!"
  else
    echo "-WARN: $arg is already existed, please check it"
  fi

  done

echo "-----  FINISHED"