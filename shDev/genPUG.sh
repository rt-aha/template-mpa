echo "Check is file name conflict ..."

echo "--- Start generate .pug template "

touch src/template/$1.pug
touch src/template/$2.pug

echo "--- Created template(s) success "