class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export default class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }

    const queue = [this.root];

    while (queue.length) {
      const current = queue[0]; // 👈 Look at the first node without removing it

      if (!current.left) {
        current.left = newNode;
        return;
      } else if (!current.right) {
        current.right = newNode;
        return;
      } else {
        // We've checked both children; now remove it from the queue
        queue.shift(); // 👈 Now remove it
        queue.push(current.left);
        queue.push(current.right);
      }
    }
  }

  //    INORDER TRAVERSAL left -> root -> right
  inorderTravesral(node = this.root, result = []) {
    if (!node) {
      return result;
    }

    this.inorderTravesral(node.left);
    result.push(node.value);
    this.inorderTravesral(node.right);
  }

  //    PREORDER TRAVERSAL root -> left -> right
  inorderTravesral(node = this.root, result = []) {
    if (!node) {
      return result;
    }

    result.push(node.value);
    this.inorderTravesral(node.left);
    this.inorderTravesral(node.right);
  }

  //    POSTORDER TRAVERSAL left -> right -> root
  inorderTravesral(node = this.root, result = []) {
    if (!node) {
      return result;
    }

    this.inorderTravesral(node.left);
    this.inorderTravesral(node.right);
    result.push(node.value);
  }

  //    LEVEORDER TRAVERSAL BFS
  levelTravesral(node = this.root, result = []) {
    if (!node) {
      return result;
    }

    result.push(node.value);
    this.levelTravesral(node.left);
    this.levelTravesral(node.right);
  }

  OrderTraversal(node = this.root, result = []) {
    if(!node){
      return result;
    }
    let queue = [this.root];
    while(queue.length){
      const current = queue.shift();
      result.push(current);

      if(current.left){
        queue.push(current.left)
      }
      if(current.right){
        queue.push(current.right)
      }
    }
    return result
  }


  getHeight(node = this.root){
    if(!node){
      return 0;
    }
    const left = this.getHeight(node.left);
    const right = this.getHeight(node.right);
    return 1 + Math.max(left, right);
  }

  countNodes(node = this.root) {
    if (!node) return 0;
    return 1 + this.countNodes(node.left) + this.countNodes(node.right);
  }

  countLeafNodes(node = this.root){
    if(!node) return 0 ;

    if(node.left == null && node.right == null){
      return 1;
    }

    const left = this.countLeafNodes(node.left);
    const right = this.countLeafNodes(node.right);

    return left + right
  }

  countNonLeafNodes(node = this.root){
    if(!node) return 0 ;

    if(!(node.left == null && node.right == null)){
      return 0;
    }
    const left = left +  this.countNonLeafNodes(node.left);
    const right = right + this.countNonLeafNodes(node.right);


    return 1+ left + right
  }

  countLongestDiameter(node = this.root){
    if(!node){
      return 0;
    }

    const left = this.countLongestDiameter(node.left);
    const right = this.countLongestDiameter(node.right);

    return 1+ left + right;
  }
}