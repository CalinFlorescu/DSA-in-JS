class Node {
  constructor (value)  {
      this.value = value;
      this.left = null;
      this.right = null;
      this.height = 0;
  }
};

class AVL {
    constructor (root)  {
        this.root = root;
    }

    leftRotation (node)  {
        if (node.right !== null)  {
            const rightNode = node.right;
            node.right = rightNode.left;
            rightNode.left = node;
        }
    }

    rightRotation (node) {
        if (node.left !== null) {
            const leftNode = node.left;
            node.left = leftNode.right;
            leftNode.right = node;
        }
    }

    checkBalance (current) {
        if (current.left === null && current.right === null) {
            current.height -= 1;
        } else {
            current.height =
        }
    }

    calculateHeight (node) {
        var countLeft = 0;
        var countRight = 0;
        while (node !== null) {
            count++;
            node = node.left;
        }
    }

    insert (node) {
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode (this.root, node);
        }
    }

    insertNode (current, node) {
        if (node.value < current.value) {
            if (current.left === null) {
                current.left = node;
            } else {
                this.insertNode (current.left, node);
            }
        } else {
            if (current.right === null) {
                current.right = node;
            } else {
                this.insertNode (current.right, node);
            }
        }
        this.checkBalance (current);
    }
};