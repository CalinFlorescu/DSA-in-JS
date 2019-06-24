const imports = require ('./AvlTree');

const avl = new imports.avl(new imports.node(1));

test ('create avl', () => {
   const avl = new imports.avl(new imports.node(3));
   expect(avl.root.value).toBe(3);
});

test ('insert node in avl', () => {
    avl.insert(new imports.node(2));
    expect(avl.root.right.value).toBe(2);
    avl.remove(2);
});

describe('test delte and search', () => {
    beforeEach(() => {
            avl.insert(new imports.node(2));
            avl.insert(new imports.node(3));
            avl.insert(new imports.node(4));
        }
    );

    test ('delete node from avl', () => {
        avl.remove(3);
        expect(avl.root.right.value).toBe(4);
        avl.remove(2);
        avl.remove(4);
    });

    test ('search node in avl', () => {
        expect(avl.search(3)).toBeTruthy();
    });
});