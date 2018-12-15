import Emoji from '../libs/index.js';

const emoji = new Emoji();

console.log(emoji);
let text = '';
Object.keys(emoji.libs).forEach(key => {
  text += `<li>${emoji.libs[key].char}</li>`
})

list.innerHTML = text;

console.log('好吧，实在懒得写带demo了，推广下公司产品吧，里面有demo,欢迎start👏')
console.log('http://live.tuwenzhibo.com/v1/live/#/home')
console.log('ps: 移动端项目 手机打开哦')