## 初始化專案

指令: `sh sh/init.sh`

1. 生成選項 html還是pug，依據所選，自動生成`home.html`, `home.scss`, `home.js`中，並刪除sh資料夾中非對應生成模板的`.sh`
2. 產`.env`檔寫入此專案使用的模板

## 生成頁面

指令: `sh sh/genHTML.sh [檔名]`或`sh sh/genPUG.sh [檔名]`
eg: `sh sh/genHTML page1 page2`

1. 判斷是否有相同檔案，若有暫停生成，並報錯
2. 生成`[檔名].html`或`[檔名].pug`到template資料夾
3. 生成`[檔名].js`到js資料夾
3. 生成`[檔名].scss`到scss資料夾

### src/assets

放圖片等靜態資源

### src/js

對應頁面的js，會與template中名稱一樣

### src/lib

套件放的位置

### src/styles

CSS放的位置

### src/template

模板存放地

### src/testFiles

做這個專案boilplate的測試資料

