const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: "",
  array: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (value != undefined || value === null) {
      this.str = "~( " + value + " )~";
      this.array.push(this.str);
      return this;
    }
    this.str = "~( )~";
    this.array.push(this.str);
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      this.array.splice(position - 1, 1);
      return this;
    }
    this.array = [];
    throw new Error("TROWN");
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    let arr = this.array;
    this.array = [];
    return arr.join("").slice(1, -1);
  },
};

module.exports = chainMaker;
