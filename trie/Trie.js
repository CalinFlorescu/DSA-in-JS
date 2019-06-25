const ALPHABET_SIZE = 26;

class trieNode {
    constructor() {
        this.children = new Array(ALPHABET_SIZE);
        this.isEndOfWord = null;
    }
}

class Trie {
    constructor() {
        this.root = new trieNode();
    }

    insert (key) {
        var level;
        var length = key.length;
        var index;

        var pCrawl = this.root;

        for (level = 0; level < length; level++) {
            index = key[level].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

            if (pCrawl.children[index] === undefined) {
                pCrawl.children[index] = new trieNode();
            }

            pCrawl = pCrawl.children[index];
        }
        // mark last node as leaf
        pCrawl.isEndOfWord = true;
    }

    search (key) {
        var level;
        var length = key.length;
        var index;

        var pCrawl = this.root;

        for (level = 0; level < length; level++) {
            index = key[level].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);

            if (pCrawl.children[index] === undefined) {
                return false;
            }

            pCrawl = pCrawl.children[index];
        }

        return (pCrawl !== null && pCrawl.isEndOfWord);
    }
}

const trie = new Trie();

trie.insert('ze');

console.log(trie.search('ze'));

// console.log(trie);

module.exports = {
    trie: Trie
};

