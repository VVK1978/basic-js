let chainMaker = {
  str: "",
  array: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    console.log(typeof value);
    if (value != undefined || value===null) {
		 console.log("OK")
      this.str = "~( " + value + " )~";
      this.array.push(this.str);
      return this;
    }
    this.str = "~( )~";
    this.array.push(this.str);
    return this;
  },
  removeLink(position) {
    this.array.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.array = this.array.reverse();
    return this;
  },
  finishChain() {
    console.log(typeof this.array.join("").slice(1, -1));
    return this.array.join("").slice(1, -1);
  },
};

console.log(
  chainMaker
    .addLink()
    .addLink(null)
    .addLink(333)
    .addLink(0)
    .addLink("GHI")
    .finishChain()
);
("( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )");
