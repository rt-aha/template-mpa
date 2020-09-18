echo "Check is file name conflict ..."

echo "--- Start generate .html template"

touch src/template/$1.html
touch src/template/$2.html

echo "--- Created template(s) success "