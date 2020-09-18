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

echo "--- Start generate .html template"

echo $templateString >> src/template/$1.html
echo $templateString >> src/template/$2.html

echo "--- Created template(s) success "