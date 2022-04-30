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

  addNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }

  searchNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data < node.data) return this.searchNode(node.left, data);
    else if (data > node.data) return this.searchNode(node.right, data);
    else return node;
  }

  has(data) {
    return this.searchNode(this.start, data) === null ? false : true;
  }
}

module.exports = {
  BinarySearchTree,
};
