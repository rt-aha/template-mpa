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


echo "Check is file name conflict ..."

# 沒有參數直接離開
if [ "$#" = "0" ]
then
  exit
fi

echo "--- Start generate .html template"

# 產生files
for i in $@
  do
    echo $templateString >> src/template/$i.html
    touch src/js/$i.js
  done

echo "--- Created template(s) success "