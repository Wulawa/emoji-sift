// import ordered from './orderd';
import libary from './emoji';
import assertEmoji from './assertEmoji';

class EmojiLib {
  constructor(validator) {
    this.validator = validator;
    // this.ordered = ordered;
    this.fitzpatrick_scale_modifiers = ["🏻", "🏼", "🏽", "🏾", "🏿"];
    this.libs = {};
    this.classify = {};
    this.createLibary();
  }
  createLibary(){
    for(let key in libary) {
      if(assertEmoji(libary[key].char)) {
        if(this.validator && !this.validator(libary[key])) continue;
        this.libs[key] = libary[key];
        if(this.classify[libary[key].category]) {
          this.classify[libary[key].category][key] = libary[key];
        } else {
          this.classify[libary[key].category] = {
            [key]: libary[key]
          }
        }
      }
    }
  }
  search(keyword) {
    if(!keyword) return this.libs;
    const result = {};
    for(let key in this.libs) {
      if(this.libs[key].keywords.includes(keyword)) {
        result[key] = this.libs[key];
      }
    }
    return result;
  }
  category(categorys) {
    if(!categorys) return this.libs;
    const result = {};
    for(let key in this.libs) {
      if(categorys.includes(this.libs[key].category)) {
        result[key] = this.libs[key];
      }
    }
    return result;
  }
}

export default EmojiLib;