en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
class VigenereCipheringMachine {
  constructor(state = true) {
    this.reverse = {
      state,
    };
  }

  encrypt() {
    let args = [...arguments];

    if (args.length != 2) {
      throw "TROWN";
    }
    let str = args[0].toUpperCase().split("");
    let key = args[1].toUpperCase().split("");
    if (this.reverse.state === true) {
		 str=str.reverse()
	 }
	 
   console.log(str);

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

    let res = strNum
      .map((el, ind) => (Number.isInteger(el) ? el + keyNum[ind] : el))
      .map((el) => (el > 25 ? el - 26 : el))
      .map((el) => (Number.isInteger(el) ? en[el] : el))
      .join("");
    console.log(res);
    return res;
  }
  decrypt() {
    let args = [...arguments];
    if (args.length != 2) {
      throw "TROWN";
    }

    let str = args[0].toUpperCase().split("");
    let key = args[1].toUpperCase().split("");
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
    let res = strNum
      .map((el, ind) => (Number.isInteger(el) ? el - keyNum[ind] : el))
      .map((el, ind) => (el < 0 ? 26 + strNum[ind] - keyNum[ind] : el))
      .map((el) => (Number.isInteger(el) ? en[el] : el))
      .join("");

    console.log(strNum, keyNum, res);
    return res;
  }
}

const directMachine = new VigenereCipheringMachine();
directMachine.encrypt("Example of sequence: 1, 2, 3, 4.", "lilkey");
directMachine.decrypt("PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.", "lilkey");
