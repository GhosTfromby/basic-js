const chainMaker = {
  getLength() {
    if (!this.chain) return 0;

    return this.chain.length;
  },
  addLink(value = "") {
    if (!this.chain) this.chain = [];

    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number")
      throw new Error("position is not a number");
    if (position % 1 !== 0) throw new Error("position is a float");
    if (!this.chain) throw new Error("position is undefined");
    if (position > this.chain.length || position < 1) {
      this.chain = undefined;
      throw new Error("position is out of range");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    if (this.chain) this.chain.reverse();

    return this;
  },
  finishChain() {
    let result = this.chain.join("~~");
    this.chain = undefined;

    return result;
  }
};

module.exports = chainMaker;
