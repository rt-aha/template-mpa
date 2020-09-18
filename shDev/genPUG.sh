templateString='
doctype html\n
html(lang="en")\n
\thead\n
\t\tmeta(charset="UTF-8")\n
\t\tmeta(name="viewport", content="width=device-width, initial-scale=1.0")\n
\t\ttitle Document\n
\t
\tbody\n
'

echo "Check is file name conflict ..."

echo "--- Start generate .pug template "

echo $templateString >> src/template/$1.pug
echo $templateString >> src/template/$2.pug

echo "--- Created template(s) success "