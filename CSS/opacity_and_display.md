# opacity:0とdisplay:none

## 結論

- `opacity:0` ... 透明なっているだけ（要素はある）。
- `display:none` ... 要素はない。

## 確認

灰色と赤の2つの四角が重なっている。
灰色の四角の中には `リンク` がある。

#### HTML ([opacity_and_display/example_01/index.html](opacity_and_display/example_01/index.html))

````html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>opacity_and_display example_01</title>
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
  <div class="box-01"><a href="#">リンク</a></div>
  <div class="box-02"></div>
</body>
</html>
````

#### CSS ([opacity_and_display/example_01/assets/css/style.css](opacity_and_display/example_01/assets/css/style.css))

````css
.box-01 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(200, 200, 200, 1.0);
}

.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 1.0);
}
````

## 1. `.box-02` に `opacity:0` を追加

`リンク` にマウスが重なってもカーソルは変わらない。押せない。

#### CSS ([opacity_and_display/example_02/assets/css/style.css](opacity_and_display/example_02/assets/css/style.css))

````css
.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 1.0);
  opacity: 0;
}
````

## 2. `.box-02` に `display:none` を追加

`リンク` にマウスが重なったらカーソルが変わる。押せる。

#### CSS ([opacity_and_display/example_03/assets/css/style.css](opacity_and_display/example_03/assets/css/style.css))

````css
.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 1.0);
  display: none;
}
````

## 3. だんだん消えるアニメーション

- `opacity` ... 値が数値なので少しずつ減らすことが可能。下の要素が押せない。
- `display` ... `display:block` ←→ `display:none` の切り替えのみ。アニメーション不可。

- `opacity:1.0` をで少しずつ減らしていき、 `opacity:0.0` になったら `display:none` にするのが理想。