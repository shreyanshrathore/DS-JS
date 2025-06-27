class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (this.root == null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (current.value == value) {
        return;
      } else if (current.value < value) {
        if (current.left == null) {
          current.left = node;
        }
        current = current.left;
      } else {
        if (current.right == null) {
          current.right = node;
        }
        current = current.right;
      }
    }
  }

  search(value) {
    if (this.root == null) {
      return false;
    }
    let current = this.root;
    while (true) {
      if (current.value == value) {
        return true;
      }
      if (current.value < value) {
        if (current.left == null) {
          return false;
        }
        current = current.left;
      } else if (current.value > value) {
        if (current.right == null) {
          return false;
        }
        current = current.right;
      }
    }
  }

  delete(value, node = this.root, parent = null) {
    // THeir are 3 cases
    // 1] if their is not node then just delete the nnode
    // 2] if their is one child node then just replace the parent node with the child node and then delete it
    // 3] if their is 2 child ode then find the inorder subsctitute (smallest number in the right sutree)

    if (!node) {
      return;
    }

    if (value < node.value) {
      this.delete(value, node.left, node);
    } else if (value > node.value) {
      this.delete(value, node.right, node);
    } else {
      // means we found the node

      if (!node.left && !node.right) {
        // Case 1: No children
        this.replaceNodeInParent(parent, node, null);
      } else if (!node.left || !node.right) {
        // Case 2: One child
        const child = node.left || node.right;
        this.replaceNodeInParent(parent, node, child);
      } else {
        let successor = node.right;
        let successorParent = node;

        while (successor.left) {
          successorParent = successor;
          successor = successor.left;
        }

        node.value = successor.value;
        // now start the flow for the successor..............
        this.delete(successor.value, successor, successorParent);
      }
    }
  }
  replaceNodeInParent(parent, node, replacement) {
    if (!parent) {
      this.root = replacement;
    } else if (parent.left === node) {
      parent.left = replacement;
    } else if (parent.right === node) {
      parent.right = replacement;
    }
  }

  printTree(node = this.root, prefix = "", isLeft = true) {
    if (node.right !== null) {
      this.printTree(node.right, prefix + (isLeft ? "│   " : "    "), false);
    }

    console.log(prefix + (isLeft ? "└── " : "┌── ") + node.value);

    if (node.left !== null) {
      this.printTree(node.left, prefix + (isLeft ? "    " : "│   "), true);
    }
  }
}

const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(20);
bst.insert(3);
bst.insert(7);
bst.insert(15);
bst.insert(30);

console.log(bst.search(300));

bst.printTree();

bst.delete(10);

bst.printTree();
