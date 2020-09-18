templateString='
doctype html\n
html(lang="en")\n
\thead\n
\t\tmeta(charset="UTF-8")\n
\t\tmeta(name="viewport", content="width=device-width, initial-scale=1.0")\n
\t\ttitle Document\n
\tbody\n
'


echo "----- Start generate .pug template"

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

      if [ "$arg" = "$filename" ]
      then
        
        isExist=t
      fi
    done

  if [ "$isExist" = "f" ]
  then

    jsTemplateString="
    import '@/template/$arg.pug';\n
    import '@/styles/preset/index.scss';\n
    import '@/styles/$arg.scss';\n
    "

    echo $templateString >> src/template/$arg.pug
    echo $jsTemplateString >> src/js/$arg.js
    touch src/styles/${arg}.scss
    echo "-INFO: create $arg.pug, $arg.scss, $arg.js success!"
  else
    echo "-WARN: $arg is already existed, please check it"
  fi

  done

echo "-----  FINISHED\n"
