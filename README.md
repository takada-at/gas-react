Google Apps ScriptでReactを使用するサンプル。

## Setup
claspのインストールとログイン。
```
npm i @google/clasp -g
clasp login
```

Spreadsheet作成
```
clasp create --title "GasReact" --type sheets --rootDir deploy/development
```
→ SpreadsheetのURLを控えておく。

npmライブラリインストール
```
npm install
```

ビルドとアップロード
```
npm run upload
```

上記のスプレッドシートURLにアクセス。


