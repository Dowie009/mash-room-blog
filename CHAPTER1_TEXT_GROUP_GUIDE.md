# チャプター1のテキストグループ調整ガイド

## ファイル
`src/components/HorizontalScroll.astro`

## 変更箇所

**39行目**の`style`属性を変更するだけです：

```html
<div class="tategaki-box flex flex-col justify-start chapter1-text-group" style="--text-scale: 2.5; --text-offset-x: 0px; --text-offset-y: 0px;">
```

## 調整方法

### サイズを変更する
`--text-scale`の値を変更：

```html
<!-- 現在（2.5倍） -->
style="--text-scale: 2.5; --text-offset-x: 0px; --text-offset-y: 0px;"

<!-- 3倍に -->
style="--text-scale: 3; --text-offset-x: 0px; --text-offset-y: 0px;"

<!-- 2倍に -->
style="--text-scale: 2; --text-offset-x: 0px; --text-offset-y: 0px;"
```

### 位置を変更する
`--text-offset-x`（横方向）と`--text-offset-y`（縦方向）の値を変更：

```html
<!-- 右に50px移動 -->
style="--text-scale: 2.5; --text-offset-x: 50px; --text-offset-y: 0px;"

<!-- 下に30px移動 -->
style="--text-scale: 2.5; --text-offset-x: 0px; --text-offset-y: 30px;"

<!-- 右に50px、下に30px移動 -->
style="--text-scale: 2.5; --text-offset-x: 50px; --text-offset-y: 30px;"
```

### マイナス値も使えます
```html
<!-- 左に移動 -->
style="--text-scale: 2.5; --text-offset-x: -50px; --text-offset-y: 0px;"

<!-- 上に移動 -->
style="--text-scale: 2.5; --text-offset-x: 0px; --text-offset-y: -30px;"
```

## まとめ

**39行目**の`style`属性の3つの値を変更するだけ：
- `--text-scale`: サイズ（1 = 元のサイズ、2.5 = 2.5倍）
- `--text-offset-x`: 横方向の位置（px単位、右がプラス）
- `--text-offset-y`: 縦方向の位置（px単位、下がプラス）

これで、CHAPTER 01、物語の積み重ね、説明文が一塊として一括でサイズと位置を調整できます！
