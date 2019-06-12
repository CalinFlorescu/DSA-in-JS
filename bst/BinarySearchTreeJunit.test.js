const imports = require ('./BinarySearchTree');

test ('create Node', () => {
   const testNode = new imports.nodes(13);
   expect (testNode.value).toEqual(13);
   expect (testNode.left).toBeNull();
   expect (testNode.right).toBeNull();
});

test ('create Bst', () => {
   const testBst = new imports.bst (null);
   expect (testBst).toBeInstanceOf(imports.bst);
});

test ('insert in BST', () => {
   const newNode = new imports.nodes(5);
   const newBst = new imports.bst (new imports.nodes(null));
   newBst.insert (newNode);
   expect (newBst.root.value).toEqual(5);
});

const insertBstTest = new imports.bst (new imports.nodes(null));

describe('test correct insertion', () => {
   beforeAll(() => {
      const newNode = new imports.nodes(5);
      return insertBstTest.insert (newNode);
   });

   test ('insert smaller node than root', () => {
      const smallerNode = new imports.nodes(4);
      insertBstTest.insert (smallerNode);
      expect (insertBstTest.root.left.value).toEqual(4);
      expect (insertBstTest.count).toEqual(2);
   });

   test ('insert larger node than root', () => {
      const biggerNode = new imports.nodes(7);
      insertBstTest.insert (biggerNode);
      expect (insertBstTest.root.right.value).toEqual(7);
      expect (insertBstTest.count).toEqual(3);
   });

});

describe ('test delete, search', () => {
   const insertBstTest = new imports.bst (new imports.nodes(null));

   beforeAll(() => {
      const newNode = new imports.nodes(5);
      return insertBstTest.insert (newNode);
   });

   test ('search in BST', () => {
      expect(insertBstTest.search(5)).toBeTruthy();
   });

   test ('delete from BST', () => {
      insertBstTest.delete (5);
      expect (insertBstTest.count).toEqual(0);
   });

});