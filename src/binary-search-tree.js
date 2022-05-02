const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

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
    if (this.start === null) {
      this.start = newNode;
    } else {
      this.addNode(this.start, newNode);
    }
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

    if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  has(data) {
    return this.searchNode(this.start, data) === null ? false : true;
  }

  find(data) {
    return this.searchNode(this.start, data);
  }

  remove(data) {
    this.removeNode(this.start, data);
  }

  searchMin(node) {
    if (node.left === null) return node;
    return this.searchMin(node.left);
  }

  removeNode(node, data) {
    if (node === null) return null;
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      if (node.left === null) {
        node = node.right;
        return node;
      }
      if (node.right === null) {
        node = node.left;
        return node;
      }
      const newNode = this.searchMin(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }

  min() {
    return this.searchMin(this.start).data;
  }

  max() {
    return searchMax(this.start).data;
    function searchMax(node) {
      if (node.right === null) {
        return node;
      }
      return searchMax(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree,
};
