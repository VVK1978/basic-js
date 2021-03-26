const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(state = true) {
    this.reverse = {
      state,
    };
  }
  encrypt() {
    let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let args = [...arguments];
    if (args.length != 2) {
      throw "TROWN";
    }
    let str = args[0].toUpperCase().split("");
    let key = args[1].toUpperCase().split("");
    if (!this.reverse.state == true) {
      str = str.reverse();
    }

    for (let i = 0; i < str.length; i++) {
      if (key.length < str.length) {
        key = key.concat(key);
      }
    }
    let strNum = str.map((el) => (en.indexOf(el) >= 0 ? en.indexOf(el) : el));
    let keyNum = strNum
      .map((el, ind) =>
        Number.isInteger(el) ? key[ind] : key.splice(ind, 0, "")
      )
      .map((el) => (en.indexOf(el) >= 0 ? en.indexOf(el) : el));

    return strNum
      .map((el, ind) => (Number.isInteger(el) ? el + keyNum[ind] : el))
      .map((el) => (el > 25 ? el - 26 : el))
      .map((el) => (Number.isInteger(el) ? en[el] : el))
      .join("");
  }
  decrypt() {
    let en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let args = [...arguments];
    if (args.length != 2) {
      throw new CustomError("TROWN");
    }

    let str = args[0].toUpperCase().split("");
    let key = args[1].toUpperCase().split("");

    if (!this.reverse.state == true) {
      str = str.reverse();
    }
    for (let i = 0; i < str.length; i++) {
      if (key.length < str.length) {
        key = key.concat(key);
      }
    }
    let strNum = str.map((el) => (en.indexOf(el) >= 0 ? en.indexOf(el) : el));
    let keyNum = strNum
      .map((el, ind) =>
        Number.isInteger(el) ? key[ind] : key.splice(ind, 0, "")
      )
      .map((el) => (en.indexOf(el) >= 0 ? en.indexOf(el) : el));
    return strNum
      .map((el, ind) => (Number.isInteger(el) ? el - keyNum[ind] : el))
      .map((el, ind) => (el < 0 ? 26 + strNum[ind] - keyNum[ind] : el))
      .map((el) => (Number.isInteger(el) ? en[el] : el))
      .join("");
  }
}

module.exports = VigenereCipheringMachine;
