# Emoji

>一个emoji库

可对系统识别，判断是否支持显示，不需要长期正则维护

![Image text](./assets/demo.png)

## Install

```
yarn add emoji-sift

// or

npm installl emoji-sift
```

## Usage

```javascript
import Emoji from 'emoji-sift'

const emoji = new Emoji();

console.log(emoji.libs);

=>  // 支持渲染emoji
"{
  "grinning": {
    "keywords": ["face", "smile", "happy", "joy", ":D", "grin"],
    "char": "😀",
    "fitzpatrick_scale": false,
    "category": "people"
  },
  ....
}"  

emoji.fitzpatrick_scale_modifiers
=> // 可选肤色 
[ '🏻', '🏼', '🏽', '🏾', '🏿' ]

> emoji.lib.v.fitzpatrick_scale
true
> emoji.lib.turtle.fitzpatrick_scale
false
=> emoji.libs.v.char + emoji.fitzpatrick_scale_modifiers[4]
'✌🏿'
```
根据关键字获取

```javascript
const emoji = new Emoji();

emoji.search('face');

=>  // 'face'相关emoji

```

根据类别区分获取

```javascript
const emoji = new Emoji();

emoji.classify;

=>  // 全部类别emoji

```
指定类别
```javascript
const emoji = new Emoji();

emoji.category(['people', 'food_and_drink']);
=>  // people 与 food_and_drink 类别emoji
```


自定义过滤条件
```javascript
  const validator = item => item.category === 'people';
  const emoji = new Emoji(validator);
  console.log(emoji.libs)
  => //过滤后内容
```
```javascript


```
一般来说使用自定义过滤条件可加快生成emoji库的速度

### Preview

```
yarn global add parcel

yarn star 

```








