// import ordered from './orderd';
import libary from './emoji';
import assertEmoji from './assertEmoji';

class EmojiLib {
  constructor(params) {
    const { page, validator } = params
    this.validator = validator;
    // this.ordered = ordered;
    this.fitzpatrick_scale_modifiers = ['🏻', '🏼', '🏽', '🏾', '🏿'];
    this.beginSub = 0;
    this.libs = {};
    this.classify = {};
    !page && this.createLibary();
  }
  createLibary() {
    for (let i = 0; i < libary.length; i++) {
      if (this.validator && !this.validator(libary[i])) continue;
      if (assertEmoji(libary[i].char)) {
        const name = libary[i].name;
        const category = libary[i].category;
        this.libs[name] = libary[i];
        if (this.classify[category]) {
          this.classify[category][name] = libary[i];
        } else {
          this.classify[category] = {
            [name]: libary[i]
          };
        }
      }
    }
  }
  pagination({ pageNum, pageSize }) {
    const data = {};
    let num = 0;
    for (let i = this.beginSub; i < libary.length; i++) {
      if (this.validator && !this.validator(libary[i])) continue;
      if (assertEmoji(libary[i].char)) {
        const name = libary[i].name;
        data[name] = libary[i];
        num += 1;
      }
      if (num >= pageSize) {
        this.beginSub = i + 1;
        break;
      }
      this.beginSub = 0;
    }
    const page = {
      beginSub: this.beginSub,
      pageNum,
      pageSize,
      data
    };
    return page;
  }
  search(keyword) {
    if (!keyword) return this.libs;
    const result = {};
    for (let key in this.libs) {
      if (this.libs[key].keywords.includes(keyword)) {
        result[key] = this.libs[key];
      }
    }
    return result;
  }
  category(categorys) {
    if (!categorys) return this.libs;
    const result = {};
    for (let key in this.libs) {
      if (categorys.includes(this.libs[key].category)) {
        result[key] = this.libs[key];
      }
    }
    return result;
  }
}

export default EmojiLib;
