const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if(position<1 || position>this.getLength()||typeof position !== "number"){
      this.chain.length = 0;
      throw Error;
    } 
    this.chain.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = this.chain.join("~~");
    this.chain.length = 0;
    return str;
  }
};

module.exports = chainMaker;
