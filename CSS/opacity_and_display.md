# opacity:0　と　display:none

## 結論

- `opacity:0` ... 透明なっているだけ（要素はある）。
- `display:none` ... 要素はない。

## ベース

2つの四角が重なっている。

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
  <div class="box-01"></div>
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
  background: rgba(9, 90, 186, 0.5);
}

.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 0.5);
}
````

## 1. `.box-02` に `opacity:0` を追加

`リンク` にマウスが重なってもカーソルは変わらない。押せない。

#### CSS ([opacity_and_display/example_02/assets/css/style.css](opacity_and_display/example_02/assets/css/style.css))

````css
.box-01 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(9, 90, 186, 0.5);
}

.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 0.5);
  opacity: 0;
}
````

## 2. `.box-02` に `display:none` 　を追加

`リンク` にマウスが重なったらカーソルが変わる。押せる。

#### CSS ([opacity_and_display/example_03/assets/css/style.css](opacity_and_display/example_03/assets/css/style.css))

````css
.box-01 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(9, 90, 186, 0.5);
}

.box-02 {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgba(187, 18, 26, 0.5);
  display: none;
}
````
