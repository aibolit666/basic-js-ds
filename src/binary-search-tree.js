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
}

module.exports = {
  BinarySearchTree,
};
