# 例3:スライドショー（ライブラリを使う場合）

## 手順

- [slick](https://kenwheeler.github.io/slick/) を使う。


1. slick をダウンロードする（直リンクしない場合）。
2. html に `slick.css` と `slick.min.js` を読み込む（※2）。
3. html にスライダー部分を実装する（※3）。
4. `main.js` にスライダーの設定を実装する。
5. CSS で見た目を調整する。

## サンプル

#### HTML ([jQuery_examples_03/example_01/index.html](jQuery_examples_03/example_01/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery_examples_03/example_01</title>

<!-- ※2 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>

<link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="page">
<div class="page__container">

  <main class="main">
  <div class="main__container">

    <!-- ※3 -->
    <section id="slider" class="section">
      <div><img src="assets/img/pic_01.png"></div>
      <div><img src="assets/img/pic_02.png"></div>
      <div><img src="assets/img/pic_03.png"></div>
      <div><img src="assets/img/pic_04.png"></div>
      <div><img src="assets/img/pic_05.png"></div>
    </section>

  </div>
  </main>

</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>

<!-- ※2 -->
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>

<script src="assets/js/main.js"></script>
</body>

</html>
````

#### JavaScript ([jQuery_examples_03/example_01/example_01/assets/js/main.js](jQuery_examples_03/example_01/example_01/assets/js/main.js))

````js
$('#slider').slick({
  autoplay: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<div class="slider__btn prev">前へ</div>',
  nextArrow: '<div class="slider__btn next">次へ</div>',
  dots: true
});
````

#### CSS ([jQuery_examples_03/example_01/example_01/assets/css/style.css](jQuery_examples_03/example_01/example_01/assets/css/style.css))

````css
body {
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 1.0);
}

.main__container {
  position: relative;
}

.slider{
  width: 640px;
  margin: 64px auto;
  position: relative;
}

.slider__btn {
  position: absolute;
  top: 50%;
  margin-top: -32px;
  width: 64px;
  height: 64px;
  background: rgba(200, 200, 200, 0.9);
  z-index: 1000;
}

.slider__btn.next {
  right: 0;
}
````