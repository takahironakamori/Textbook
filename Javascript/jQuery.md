# jQuery

- みんながよく使うライブラリ。
- クロスブラウザ対策済み。
- よく使う機能を使いやすくしてくれる。
  - セレクタ、DOM操作、イベント、CSS、非同期通信等

## 例
変更前 : `<h1 id="title">ナカモリ</h1>`<br>
変更後 : `<h1 id="title">中森</h1>`

### jQueryを使わない場合

    document.getElementById("title").innerHTML = "中森";

### jQueryを使う場合

    $("#title").html("中森");


## jQueryについて調べるとき

- 公式サイト [https://jquery.com/]
- 公式ドキュメント [https://api.jquery.com/]
  - 公式情報以外の情報は古い情報があり注意が必要。

## 使い方

### 直リンクで読み込む

公式リリース情報 [https://releases.jquery.com/] からリンクを取得する。


````
<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
````

  直リンクできるサイトは公式サイト以外にも Google や Microsoft 等たくさんある。どこをつかっても大差ない。

### ダウンロードして読み込む

 - 公式ダウンロード [https://jquery.com/download/] からjQueryをダウンロードしてFTPサーバへアップロードする。


## 設置方法

次の順番で設置する。順番が違うと思ったように動かない場合がある。

1. jQuery
2. プラグインのJavaScript
3. 自作のJavascript


### 例

    <body>
    ...
    ...
    ...
    <!-- 1.jQuery -->
    <script src="assets/library/jquery/jquery-3.6.0.min.js"></script>

    <!-- 2.プラグインのJavaScript -->
    <script src="assets/library/slick/slick.min.js"></script>

    <!-- 3.自作のJavaScript -->
    <script src="assets/js/main.js"></script>
    </body>
