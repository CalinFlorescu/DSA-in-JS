class Node {
  constructor (value)  {
      this.value = value;
      this.left = null;
      this.right = null;
  }
};

class AVL {
    constructor (root)  {
        this.root = root;
        this.count = 1;
    }

    findParent (root, value) {
        if (value === root.value) {
            return null;
        }

        if (value < root.value) {
            if (root.left === null) {
                return null;
            } else if (root.left.value === value) {
                return root;
            } else {
                return this.findParent(root.left, value);
            }
        } else {
            if (root.right === null) {
                return null;
            } else if (root.right.value === value) {
                return root;
            } else {
                return this.findParent (root.right, value);
            }
        }
    }

    leftRotation (node)  {
        var rightNode;
        if (node.right !== null)  {
            rightNode = node.right;
            node.right = rightNode.left;
            rightNode.left = node;
        }
        if (node === this.root) {
            this.root = rightNode;
        } else {
            this.findParent (this.root, node.value).right = rightNode;
        }
    }

    rightRotation (node) {
        var leftNode;
        if (node.left !== null) {
            leftNode = node.left;
            node.left = leftNode.right;
            leftNode.right = node;
        }
        if (node === this.root) {
            this.root = leftNode;
        } else {
            this.findParent (this.root, node.value).left = leftNode;
        }
    }

    checkBalance (current) {
        if (this.calculateHeight(current.left) - this.calculateHeight(current.right) > 1) {
            if (this.calculateHeight(current.left.left) - this.calculateHeight(current.right.right) > 0) {
                this.rightRotation (current);
            } else {
                this.leftRotation (current);
                this.rightRotation (current);
            }
        } else if (this.calculateHeight(current.left) - this.calculateHeight(current.right) < -1) {
            if (this.calculateHeight(current.right.left) - this.calculateHeight(current.right.right) < 0) {
                this.leftRotation (current);
            } else {
                this.rightRotation (current);
                this.leftRotation (current);
            }
        }
    }

    max (paramOne, paramTwo) {
        if (paramOne > paramTwo) {
            return paramOne;
        } else {
            return paramTwo;
        }
    }

    calculateHeight (node) {
        if (node === null || node === undefined) {
            return 0;
        }
        if (node.left === null && node.right === null) {
            return 1;
        }
        return this.max (this.calculateHeight(node.left), this.calculateHeight(node.right)) + 1;
    }

    insert (node) {
        if (this.root === null) {
            this.root = node;
        } else {
            this.insertNode (this.root, node);
        }
        this.count++;
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

    contains(root, number) {
        if (root === null) {
            return false;
        }
        if (root.value === number) {
            return true;
        }
        else if (number < root.value) {
            return this.contains(root.left, number);
        } else {
            return this.contains(root.right, number);
        }
    }

    search (value) {
        if (this.root === null) {
            return false;
        }
        if (this.root.value === value) {
            return true;
        } else if (value < this.root.value) {
            return this.contains (this.root.left, value);
        } else {
            return this.contains (this.root.right, value);
        }
    }

    remove (value) {
        var nodeToRemove = this.root;
        const stackPath = [];
        stackPath.push(this.root);

        while (nodeToRemove !== null && nodeToRemove.value !== value) {
            if (value < nodeToRemove.value) {
                nodeToRemove = nodeToRemove.left;
            } else {
                nodeToRemove = nodeToRemove.right;
            }
            stackPath.push(nodeToRemove);
        }

        if (nodeToRemove === null) {
            return false;
        }

        const parent = this.findParent(this.root, value);

        if (this.count === 1) {
            this.root = new Node(null);
        } else if (nodeToRemove.left === null && nodeToRemove.right === null) {
            if (nodeToRemove.value < parent.value) {
                parent.left = null;
            } else {
                parent.right = null;
            }
        } else if (nodeToRemove.left === null && nodeToRemove.right !== null) {
            if (nodeToRemove.value < parent.value) {
                parent.left = nodeToRemove.right;
            } else {
                parent.right = nodeToRemove.right;
            }
        } else if (nodeToRemove.left !== null && nodeToRemove.right === null) {
            if (nodeToRemove.value < parent.value) {
                parent.left = nodeToRemove.left;
            } else {
                parent.right = nodeToRemove.left;
            }
        } else {
            var largestValue = nodeToRemove.left;
            while (largestValue.right !== null) {
                largestValue = largestValue.right;
            }
            this.findParent (this.root, largestValue.value).right = null;
            nodeToRemove.value = largestValue.value;
        }

        while (stackPath.length > 0) {
            this.checkBalance (stackPath.pop())
        }

        this.count -= 1;
        return true;
    }

    preorder (root) {
        if (root !== null) {
            console.log(root.value);
            this.preorder (root.left);
            this.preorder (root.right);
        }
    }

    postorder (root) {
        if (root !== null) {
            this.postorder (root.left);
            this.postorder (root.right);
            console.log(root.value);
        }
    }

    inorder (root) {
        if (root !== null) {
            this.inorder(root.left);
            console.log(root.value);
            this.inorder(root.right);
        }
    }
}

// const nodeOne = new Node(1);
// const nodeTwo = new Node(2);
// const nodeThree = new Node(3);
// const nodeFour = new Node(4);
//
// const avl = new AVL(nodeOne);
// avl.insert(nodeTwo);
// avl.insert(nodeThree);
// avl.insert(nodeFour);
//
// console.log(JSON.stringify(avl, null, 2));
// console.log(avl.remove(4));
// console.log(JSON.stringify(avl, null, 2));
// console.log(avl.root.height);

module.exports = {
    node: Node,
    avl: AVL
};
