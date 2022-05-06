# CSSアニメーション

ウェブページで要素にアニメーションを付ける方法として、__CSS Transition__ と __CSS Animation__ の2つの機能がある。

- __CSS Transition__ ... 簡単（大体の場合はこっちで十分）
- __CSS Animation__ ... 複雑（通常のウェブページでは滅多に使わない）

## CSS Transition

__スタイルに変化があった場合__ に、一定時間でプロパティを変化させる機能。

単純な動きのアニメーションを実装する時に利用する。

__スタイルに変化があった場合__ だけアニメーションが実行される。戻る場合もアニメーションが適用される。

### プロパティ

- transition-property ... 何を動かしたいのか
- transition-duration ... 動かし始めてから終わるまでの時間
- transition-delay ... 動かすまで待つ時間
- transition-timing-function ... 動かし具合（例：最初ゆっくり、終わりは早く等）
- transition ... 上のプロパティをまとめて指定する場合、または複数指定する場合。

### 例1 アニメーションがない場合

四角にマウスが重なったら幅と色が変わる。

これは `.box` だけ適用される状態から `.box:hover` が適用される状態に変わる。

#### HTML 

````
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>animation sample_01</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div class="box"></div>
</body>
</html>
````
[animation/sample_01/index.html](animation/sample_01/index.html)

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
}

.box:hover {
  background: rgba(200, 200, 200, 1.0);
  width: 300px;
}
````

#### アニメーションをつける（1）

`transition-xxx` は動かす前の要素につける。

例（animation/sample_02/）

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
  transition-property: all;
  transition-duration: 300ms;
  transition-delay: 0s;
  transition-timing-function: ease;
}

.box:hover {
  background: rgba(200, 200, 200, 1.0);
  width: 300px;
}
````

#### アニメーションをつける（2）

例（animation/sample_03/）

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
  transition: all 300ms 0s ease;
}

.box:hover {
  background:  rgba(200, 200, 200, 1.0);
  width: 300px;
}
````

### transition-property

`all` を指定すると、全てのプロパティにアニメーションを適用する。
`CSS` のプロパティを指定することができる。
しかし、まとめているプロパティは避けた方がいい。

OKの例

````
transition-property: background-color;
````

大丈夫だが避けたい例

````
transition-property: background;
````


例（animation/sample_04/）

背景はアニメーションするが、幅はアニメーションせずに変わる。

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
  transition-property: background-color;
  transition-duration: 300ms;
  transition-delay: 0s;
  transition-timing-function: ease;
}

.box:hover {
  background:  rgba(200, 200, 200, 1.0);
  width: 300px;
}
````

例（animation/sample_05/）

複数のプロパティに固有のアニメーションをつけたい場合は、` transition` に2組書く。

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
  transition: background-color 1000ms 0s ease, width 10000ms 0s ease;
}

.box:hover {
  background:  rgba(200, 200, 200, 1.0);
  width: 300px;
}
````


## CSS Animation

キーフレームアニメーションを適用できる機能。
細かい動きのアニメーションを実装する時に利用する。

### プロパティ

- animation-name ... 要素に適用するキーフレームアニメーションを指定
- animation-duration ... 動かし始めてから終わるまでの時間
- animation-timing-function ... 動かし具合（例：最初ゆっくり、終わりは早く等）
- animation-delay ... 動かすまで待つ時間
- animation-iteration-count ... 繰り返す回数
- animation-direction ... アニメーションの再生方向を指定
- animation-fill-mode ... キーフレームアニメーションで指定したプロパティをアニメーション開始前、終了後に適用するかどうかを指定
- animation-play-state ... アニメーションを再生中か一時停止にする
- animation ... 上のプロパティをまとめて指定

### 例

例（animation/sample_01/）

HTML
````
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>animation sample_01</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div class="box"></div>
</body>
</html>
````

CSS
````
.box {
  width: 100px;
  height: 100px;
  background: rgba(0, 0, 0, 1.0);
  animation-name: rotation;
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-fill-mode: none;
  animation-play-state: running;
  /* animation: rotation 2s ease 0s infinite alternate none running; */
}

@keyframes rotation {
  0% {
    transform: scale(.3);
  }

  50% {
    transform: scale(.6) rotate(-45deg);
    background: rgba(255, 0, 0, 1.0);
  }

  100% {
    transform: scale(1) rotate(180deg);
    background: rgba(0, 0, 255, 1.0);
  }
}
````