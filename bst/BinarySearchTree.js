class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    hasLeft() {
        if(this.left === null) {
            return true;
        } else {
            return false;
        }
    }

    hasRight() {
        if(this.right === null) {
            return true;
        } else {
            return false;
        }
    }
}

class BST {
    constructor(node) {
        this.root = node;
        this.count = 0;
    }

    insert(newNode) {
        if (this.root.value === null) {
            this.root = newNode;
        } else {
            this.insertNode(newNode, this.root);
        }
        this.count++;
    }

    insertNode(newNode, root) {
        if (newNode.value < root.value) {
            if (root.hasLeft()) {
                root.left = newNode;
            } else {
                this.insertNode(newNode, root.left);
            }
        } else {
            if (root.hasRight()) {
                root.right = newNode;
            } else {
                this.insertNode(newNode, root.right);
            }
        }
    }

    search (value) {
        if (this.root.value === null) {
            return false;
        } else {
            return this.contains(this.root, value);
        }
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

    delete (value) {
        const nodeToRemove = this.findNode(this.root, value);

        if (nodeToRemove === null) {
            return null;
        }

        const parent = this.findParent(value, this.root);

        if (this.count === 1) {
            this.root = {value: null, left: null, right: null};
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
            let largestValue = nodeToRemove.left;
            while (largestValue.right !== null) {
                largestValue = largestValue.right;
            }

            this.findParent (largestValue.value, this.root).right = null;
            nodeToRemove.value = largestValue.value;
        }
        this.count--;
        return true;
    }

    findNode (root, value) {
        if (root.value === null) {
            return null;
        }
        if (root.value === value) {
            return root;
        } else if (value < root.value) {
            return this.findNode (root.left, value);
        } else {
            return this.findNode (root.right, value);
        }
    }

    findParent (value, root) {
        if (value === root.value) {
            return null;
        }

        if (value < root.value) {
            if (root.left === null) {
                return null;
            } else if (root.left.value === value) {
                return root;
            } else {
                return this.findParent(value, root.left);
            }
        } else {
            if (root.right === null) {
                return null;
            } else if (root.right.value === value) {
                return root;
            } else {
                return this.findParent (value, root.right);
            }
        }
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

// const Bst = new BST(new Node(null));
//
// const nodes = [];
// function* makeNodes(start = 0, end = 10, step = 1) {
//     yield
//     for (let i = start; i < end; i += step) {
//         nodes.push(new Node(i));
//     }
//     yield
// }
//
// const nodesGenerator = makeNodes();
//
// nodesGenerator.next();
// nodesGenerator.next();
// //
// nodes.forEach(item => {
//     Bst.insert(item);
// });
// console.log(JSON.stringify(Bst, null, 2));
// console.log(Bst.search(0));

// console.log(Bst);

//
// Bst.delete(5);
//
// console.log(JSON.stringify(Bst, null, 2));
//
// Bst.inorder(Bst.root);

module.exports = {
    nodes: Node,
    bst: BST
};