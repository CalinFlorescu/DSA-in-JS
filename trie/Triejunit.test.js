const imports = require ('./Trie');

test ('test trie creation', () => {
    const trie = new imports.trie();
    expect(trie.root.children.length).toBe(26);
});

test ('test trie insert', () => {
    const trie = new imports.trie();
    trie.insert('calin');
    expect(trie.root.children[2]).toBeDefined();
    expect(trie.root.children[2].children[0]).toBeDefined();
    expect(trie.root.children[2].children[0].children[11]).toBeDefined();
    expect(trie.root.children[2].children[0].children[11].children[8]).toBeDefined();
    expect(trie.root.children[2].children[0].children[11].children[8].children[13]).toBeDefined();
});

test ('test search trie', () => {
    const trie = new imports.trie();
   trie.insert('zed');
   expect(trie.search('zed')).toBeTruthy();
});