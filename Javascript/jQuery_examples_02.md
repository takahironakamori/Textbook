# 例2:ページ内リンク

リンクをクリックしたら同じページ内の特定の箇所に移動する。

## 手順

1. 移動先のhtmlへ id をつける。
2. a タグの href 属性に #{1.でつけたid} を指定する。
3. jQuery の animate() をつかって移動させるプログラムを書く。

## サンプル

#### HTML ([jQuery_examples_02/example_01/index.html](jQuery_examples_02/example_01/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery_examples_02/example_01</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="page">
<div class="page__container">

  <main class="main">
  <div class="main__container">
    
    <nav class="nav">
      <a class="nav__link" href="#section-01">Section-01</a> 
      <a class="nav__link" href="#section-02">Section-02</a> 
      <a class="nav__link" href="#section-03">Section-03</a>
      <a class="nav__link" href="#section-04">Section-04</a>
    </nav>

    <section id="section-01" class="section">Section-01</section>
    <section id="section-02" class="section">Section-02</section>
    <section id="section-03" class="section">Section-03</section>
    <section id="section-04" class="section">Section-04</section>
  </div>
  </main>

</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
</body>

</html>
````

#### CSS ([jQuery_examples_02/example_01/assets/css/style.css](jQuery_examples_02/example_01/assets/css/style.css))

````css
body {
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 1.0);
}

.main__container {
  position: relative;
}

.nav {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 64px;
  background: rgba(200, 200, 200, 0.7);
}

.nav__link {
  display: inline-block;
  padding: 0 16px;
}

.section {
  height: 1000px;
  padding-top: 80px;
}
````

## 実装するJavaScript

#### JavaScript ([jQuery_examples_02/example_01/example_01/assets/js/main.js](jQuery_examples_02/example_01/example_01/assets/js/main.js))

````js
$('a[href^="#"]').click(function(){
  var duration = 1000;
  var href= $(this).attr("href");
  var target = $(href);
  var position = target.offset().top;
  $('body,html').animate({scrollTop:position}, duration, 'swing');
  return false;
});
````

- `$('a[href^="#"]')` ... `a` タグで `href` 属性に `#` がついているもの。通常のリンクを除外している。
- `duration` ... 移動する時間(ms)
- `href` ... `a` タグで `href` 属性の値
- `target` ... 移動先
- `position` ... 移動先の上の位置
- `.aminate()` ... [こちら](https://api.jquery.com/animate/)


## ナビゲーションを重なる場合

- 移動後にナビゲーションが重ならないように調整する。
    - CSS の `padding-top` で調整。
    - JavaScript の `position` で調整。