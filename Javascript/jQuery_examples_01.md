# 例1:ドロワーメニューの表示・非表示

メニュー表示ボタンを押したらメニューがスッと表示されるようにしたい。

## 仕様の確認

1.メニューボタンを押したら、以下が行われる。
- メニューボタンを消す。
- ウェブページの内容のところはマスクで隠す。
- ドロワーが表示させる。
- ドロワーを閉じるボタンが表示させる。

2.ドロワーを閉じるボタンを押したら、以下が行われる。
- ドロワーを閉じるボタンを消す。
- ドロワーを隠す。
- ウェブページの内容のところに重なっているマスクを消す。
- メニューボタンを隠す。

## アニメーション無し

`.show` をつけると表示される。

#### HTML ([jQuery_examples_01/example_01/index.html](jQuery_examples_01/example_01/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery_examples/example_01</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="page">
<div class="page__container">

  <main class="main">
  <div class="main__container">
    ここにウェブページの内容が入ります。<a href="#">リンク</a>
  </div>
  </main>

</div>

<div id="page-mask" class="mask"></div>

<a id="drawer-open-btn" class="drawer-btn open show" href="#"><img src="assets/images/open.png" alt=""></a>

<a id="drawer-close-btn" class="drawer-btn close" href="#"><img src="assets/images/close.png" alt=""></a>

<nav id="page-drawer" class="drawer">
  <ul class="drawer-list">
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
  </ul>
</nav>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
</body>

</html>
````

#### CSS ([jQuery_examples_01/example_01/example_01/assets/css/style.css](jQuery_examples_01/example_01/example_01/assets/css/style.css))

````css
body {
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 1.0);
}

.main__container {
  padding: 32px 96px;
}

.drawer-btn {
  position: absolute;
  display: none;
  width: 48px;
  height: 48px;
  z-index: 9;
  background: rgb(244,244,244,1.0);
  border-radius: 4px;
}

.drawer-btn.open {
  top: 16px;
  left: 16px;
}

.drawer-btn.open.show {
  display: block;
}

.drawer-btn.close {
  top: 16px;
  right: 16px;
}

.drawer-btn.close.show {
  display: block;
}

.drawer-btn img {
  width: 100%;
  height: auto;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  background: rgba(0,0,0,0.8);
  z-index: 2;
}

.mask.show {
  display: block;
}

.drawer {
  position: absolute;
  width: 240px;
  height: 100%;
  top: 0px;
  left: 0px;
  display: none;
  background:rgba(250, 250, 250, 0.95);
  z-index: 10;
  overflow: hidden;
}

.drawer.show {
  display: block;
}
````

#### JavaScript ([jQuery_examples_01/example_01/example_01/assets/js/main.js](jQuery_examples_01/example_01/example_01/assets/js/main.js))

````js
$('#drawer-open-btn').on('click', function(){
  $('#drawer-open-btn').removeClass('show');
  $("#page-mask").addClass('show');
  $("#page-drawer").addClass('show');
  $("#drawer-close-btn").addClass('show');
});

$('#drawer-close-btn').on('click', function(){
  $('#drawer-close-btn').removeClass('show');
  $('#page-mask').removeClass('show');
  $("#page-drawer").removeClass('show');
  $('#drawer-open-btn').addClass('show');
});
````

### アニメーション付き

`.on` をつけると `display:block` になり、`.show` をつけるとアニメーションが始まる。

#### HTML ([jQuery_examples_01/example_02/index.html](jQuery_examples_01/example_02/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>jQuery_examples/example_01</title>
<link rel="stylesheet" href="assets/css/style.css">
</head>

<body class="page">
<div class="page__container">

  <main class="main">
  <div class="main__container">
    ここにウェブページの内容が入ります。<a href="#">リンク</a>
  </div>
  </main>

</div>

<div id="page-mask" class="mask"></div>

<a id="drawer-open-btn" class="drawer-btn open on show" href="#"><img src="assets/images/open.png" alt=""></a>

<a id="drawer-close-btn" class="drawer-btn close" href="#"><img src="assets/images/close.png" alt=""></a>

<nav id="page-drawer" class="drawer">
  <ul class="drawer-list">
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
    <li><a class="drawer-list__link" href="#">メニュー項目</a></li>
  </ul>
</nav>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
</body>

</html>
````

#### CSS ([jQuery_examples_01/example_01/example_02/assets/css/style.css](jQuery_examples_01/example_01/example_02/assets/css/style.css))

````css
body {
  padding: 0;
  margin: 0;
  background: rgba(255, 255, 255, 1.0);
}

.page {}

.page__container {}

.main {}

.main__container {
  padding: 32px 96px;
}

.drawer-btn {
  position: absolute;
  display: none;
  width: 48px;
  height: 48px;
  z-index: 9;
  background: rgb(244,244,244,1.0);
  border-radius: 4px;
}

.drawer-btn.open {
  top: 16px;
  left: -64px;
  transition: left 300ms ease;
}

.drawer-btn.open.on {
  display: block;
}

.drawer-btn.open.show {
  left: 16px;
}

.drawer-btn.close {
  top: 16px;
  right: 16px;
  display: none;
}

.drawer-btn.close.on {
  display: block;
}

.drawer-btn img {
  width: 100%;
  height: auto;
}

.mask {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  opacity: 0;
  background: rgba(0,0,0,0.8);
  transition: opacity 300ms ease;
  z-index: 2;
}

.mask.on {
  display: block;
}

.mask.on.show {
  opacity: 1.0;
}

.drawer {
  position: absolute;
  width: 240px;
  height: 100%;
  top: 0px;
  left: -280px;
  display: none;
  opacity: 0;
  background:rgba(250, 250, 250, 0.95);
  z-index: 10;
  overflow: hidden;
  transition: left 300ms ease;
}

.drawer.on {
  display: block;
  opacity: 1.0;
}

.drawer.on.show {
  left: 0;
}

````

#### JavaScript ([jQuery_examples_01/example_01/example_02/assets/js/main.js](jQuery_examples_01/example_01/example_02/assets/js/main.js))

````js
$('#drawer-open-btn').on('click', function(){
  $('#drawer-open-btn').removeClass('show');
  $('#drawer-open-btn').removeClass('on');

  $("#page-mask").addClass('on');

  setTimeout(function(){
    $("#page-mask").addClass('show');
  },10);
  
  $("#page-drawer").addClass('on');

  setTimeout(function(){
    $("#page-drawer").addClass('show');
  },10);
  
  $("#drawer-close-btn").addClass('on');
  $("#drawer-close-btn").addClass('show');

});

$('#drawer-close-btn').on('click', function(){
  $('#drawer-close-btn').removeClass('show');
  $('#drawer-close-btn').removeClass('on');

  $("#page-mask").removeClass('show');

  setTimeout(function(){
    $("#page-mask").removeClass('on');
  },300);
  
  $("#page-drawer").removeClass('show');
  setTimeout(function(){
    $("#page-drawer").removeClass('on');
  },300);

  $('#drawer-open-btn').addClass('on');
  $('#drawer-open-btn').addClass('show');
});
````