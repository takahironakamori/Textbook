# Introduction

## JavaScriptとは

- ブラウザで動くプログラム言語。
  - ファイルの拡張子は、`.js` 。
  - HTML（ウェブページの文書構造）、CSS（装飾）、JavaScript（振る舞い）。
  - 最近のウェブページではほぼ必須。
  - JavaScriptが書ける人 ... フロントエンドエンジニア
  - JavaScriptが書けない人（HTML,CSSのみ）... マークアップエンジニア、コーダー
  - 最近ではJavaScriptだけでウェブページを作るケースもある（Angular,Vue.js,React)。
- さらに最近では、ブラウザ以外でも動かしている。
  - サーバーサイド（Node.js）
  - npm、gulp等、PCの中で動作する開発ツール（Node.js）
  - スマホアプリ（React Native, Titanium等）
  - デスクトップアプリ（Electron）

まずは、ブラウザで動くJavaScriptから学ぶのがいい。

## 書き方

- HTMLファイル内に書く方法もあるが、最近は自作のJavaScriptファイルを作成し、そのファイルを読み込む形式で `script` タグを設定している。
- `script` タグはHTMLファイル内のどこにでも設置することができるが、 `head` 終了タグの直前や `body`終了タグの直前に設置する場合が多い。最近は特に `body`終了タグの直前に設置する場合が多い。
- 自作のJavaScriptファイルは　`assets` や `common` ディレクトリに `js` ディレクトリを作成して保存する。

## 設置例

````html
<body>
 ...
 ...
 ...
<script src="assets/js/main.js"></script>
</body>
````