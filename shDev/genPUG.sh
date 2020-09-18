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

# 沒有參數直接離開
if [ "$#" = "0" ]
then
  exit
fi

echo "--- Start generate .pug template"

# 產生files
for i in $@
  do
    echo $templateString >> src/template/$i.pug
    touch src/js/$i.js
  done

echo "--- Created template(s) success "