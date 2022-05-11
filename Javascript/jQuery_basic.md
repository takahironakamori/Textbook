# jQueryの使い方　-セレクタ、イベント、処理-

## 基本文法

「 __A__ が発生したら __B__ を行う。」と書くイメージを持つ。

__A__ のことを __イベント__ と言い、__B__ のことを __処理__ と呼ぶ。

すなわち、JavaScriptが行う振る舞いとは、「 __イベント__ が発生したら __処理__ を行うこと」である。

__イベント__ はjQueryで用意されているものを使う場合が多く、__処理__ は自分で書く場合が多い。

## 用意されているイベントの例

- 画面を読み込んでいる時（読み込み始めた時）
- 画面をスクロールした時
- ある要素(例:idがlink01のaタグ)をクリックした時

また、用意されている　__イベント__ は 「 __何か__ を○○した時」という形式が多い。

jQueryでは特に __何か__ を指定するものを __セレクタ__ と呼ぶ。

## セレクタ

対象を指定するときJavaScriptでは、何をキーに対象を指定するか（タグ名、id、class等）によって `document.getElementById` などメソッドが用意されている。

しかし、対象の指定はよく使うので、jQueryでは __セレクタ__ として簡単なルールに置き換えている。

### 共通ルール

先頭に `$（ドルマーク）` をつけて対象を `(  )` で挟む。

````js
$(対象)
````

対象の書き方は代表的なものとして次の4つがある。

2〜4は、CSS で対象を指定する方法に近い。


### 1. __画面__ を指定したいとき

`window` と指定する。

よく使うが用途は限られている。

`window` はウェブページで1つだけなので、わかりやすい。

````js
$(window)
````

### 2. __タグ__ を指定したいとき

`'タグ名'` と指定する。

あまり使わない。

タグは1ページ内で複数回使う場合があるので、特定が難しい。

````js
$('body')
````

### 3. __id__ で指定したいとき

`'#id名'` と指定する。

非常によく使う。

id は基本的にページ内に1箇所だけなので、わかりやすい。

````js
$('#logo')
````

### 4. __class__ で指定したいとき

`'.class名'` と指定する。

たまに使う。

タグは1ページ内で複数回使う場合があるが、意図的にまとめている場合もある。

````js
$('.link')
````

ほかにもセレクタにはたくさんの記法があるが、それは必要になったときに調べてればいい。


## イベント

イベントは用意されているものもあれば、自分で作る場合もある。

通常のウェブページの場合は用意されているもの、特にjQueryが用意してくれているものが使えれば十分。

### ウェブページでよく使うイベント

#### 画面を読み込んでいる時（読み込み始めた時）

````js
$(function(){
  // ここに処理を書く。
});
````

#### 画面の読み込みが終わった時

````js
$(window).on('load', function(){
  // ここに処理を書く。
});
````

#### ある要素をクリックした時

````js
$('ある要素').on('click', function(){
  // ここに処理を書く。
});
````

#### ある要素にマウスが重なった時、外れた時

````js
$('ある要素').on('mouseenter', function(){
  // ここにマウスが重なった時の処理を書く。
});
$('ある要素').on('mouseleave', function(){
  // ここにマウスが外れた時の処理を書く。
});
````

#### ある要素をタッチした時、外れた時

````js
$('ある要素').on('touchstart', function(){
  // ここにタッチした時の処理を書く。
});
$('ある要素').on('touchend', function(){
  // ここにタッチが外れた時の処理を書く。
});
````

#### マウスが移動した時

````js
$(window).on('mousemove', function(){
  // ここに処理を書く。
});
````

#### ある要素（入力フォーム）に文字が入力された時

````js
$('ある要素').on('input', function(){
  // ここに処理を書く。
});
````

#### 画面をスクロールした時

````js
$(window).on('scroll', function(){
  // ここに処理を書く。
});
````

#### 画面サイズが変わった時

````js
$(window).on('resize', function(){
  // ここに処理を書く。
});
````

#### 時間が経った時（例:1秒（1000ms）経ったとき）

````js
setTimeout(function(){
  // ここに処理を書く。
}, 1000);
````


## 処理

__処理__ は自分で書く場合が多いが、よく使う __処理__ から使えるようになったらいい。

### 処理の例 class をつける

ある要素をクリックした時に `onClick` クラスをつけるという処理は以下のようになる。


#### html ([jQuery_basic/example_01/index.html](jQuery_basic/example_01/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>jQuery_basic sample_01</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div id="target-box" class="box"></div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="assets/js/main.js"></script>
</body>
</html>
````

#### JavaScript ([jQuery_basic/example_01/assets/js/main.js](jQuery_basic/example_01/assets/js/main.js))
````js
$('#target-box').on('click', function(){
  $(this).addClass('onClick');
});
````

上記のJavaScript内 `$(this)` はイベントの対象（今回の場合は `$('#target-box')`）と考えていい。

`addClass()` は `( )` 内に指定したクラス名を加えるというjQueryが用意したメソッド。 

上記の処理は

「`$(this)` 、すなわちイベントの対象（今回の場合は `$('#target-box')`）」に「`onClick`」 というクラスを加えてなさいという処理になる。

jQueryでは処理でも使えるメソッドが他にもあります。

### jQueryが用意しているメソッド（よく使うもの)

#### 指定したクラスを削除する ... removeClass

````js
$('#target-box').on('click', function(){
  $(this).removeClass('onClick');
});
````

#### 指定したクラスの有無を調べる ... hasClass

````js
if($('#target-box').hasClass('onClick')) {
  $(this).removeClass('onClick');
}
````

#### 指定したクラスがなければ加え、ある場合は削除する ... toggleClass

````js
$('#target-box').on('click', function(){
  $(this).toggleClass('onClick');
});
````