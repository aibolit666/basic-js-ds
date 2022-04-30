const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.start = null;
  }

  root() {
    return this.start;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.start === null) this.start = newNode;
    else this.insertNode(this.start, newNode);
  }
}

module.exports = {
  BinarySearchTree,
};
