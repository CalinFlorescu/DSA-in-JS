const imports = require('./Heap');

test('create heap', () => {
    const heapTest = new imports.heap();
    expect(heapTest.count).toBe(0);
});

test('add value to heap', () => {
    const heapTest = new imports.heap();
    heapTest.add(10);
    expect(heapTest.heap[0]).toBe(10);
    expect(heapTest.count).toBe(1);
});

const heap = new imports.heap();

describe('complex add, remove, search tests', () => {
    beforeAll(() => {
        heap.add(3);
    });

    beforeEach(() => {
        heap.add(9);
        heap.add(12);
        heap.add(7);
    });

    afterEach(() => {
        heap.remove(9);
        heap.remove(12);
        heap.remove(7);
    });

    test('add value to heap', () => {
        expect(heap.count).toBe(4);
        expect(heap.heap[3]).toBe(9);
        expect(heap.heap[1]).toBe(7);
    });

    test('remove value from heap', () => {
        heap.remove(7);
        expect(heap.heap[1]).toBe(9);
    });

    test('search value in heap', () => {
        expect(heap.search(7)).toBeTruthy();
        expect(heap.search(13)).toBeFalsy();
    });
});
