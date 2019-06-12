export class Heap {

    constructor () {
        this.heap = [];
        this.count = 0;
    }

    minHeapify () {
        var i = this.count-1;
        while (i > 0 && this.heap[i] < this.heap[Math.floor((i - 1) / 2)]) {
            let aux = this.heap[i];
            this.heap[i] = this.heap[Math.floor((i - 1) / 2)];
            this.heap[Math.floor((i - 1) / 2)] = aux;
            i = Math.floor((i - 1) / 2);
        }
    }

    add (value) {
        this.heap[this.count] = value;
        this.count++;
        this.minHeapify();
    }

    remove (value) {

        var index = this.findIndex (value);

        if (index < 0) {
            return false;
        }

        this.count--;

        this.heap[index] = this.heap[this.count];

        const left = index * 2 + 1;
        const right = index * 2 + 2;

        while (left < this.count && (this.heap[index] > this.heap[left] || this.heap[index] > this.heap[right])) {
            if (this.heap[left] < this.heap[right]) {
                let aux = this.heap[left];
                this.heap[left] = this.heap[index];
                this.heap[index] = aux;
                index = index * 2 + 1;
            } else {
                let aux = this.heap[right];
                this.heap[right] = this.heap[index];
                this.heap[index] = aux;
                index = index * 2 + 2;
            }
        }
        this.heap.pop();
    }

    findIndex (value) {
        var ok = 0;
        var index = -1;
        for (let i = 0; i < this.count - 1; i++) {
            if (ok !== 1) {
                if (this.heap[i] === value) {
                    index = i;
                    ok = 1;
                }
            }
        }

        return index;

    }

    parent (index) {
        if(index > 1) {
            return Math.floor((index - 1) /2);
        }
    }

    search (value) {
        var start = 0;
        var nodes = 1;

        while (start < this.count) {
            start = nodes - 1;
            var end = nodes + start;
            var cont = 0;

            while (start < this.count && start < end) {
                if (value === this.heap[start]) {
                    return true;
                } else if (value > this.parent(this.heap[start]) && value < heap[start]) {
                    cont++;
                }
                start++;
            }
            if (cont === nodes) {
                return false;
            }

            nodes *= 2;
        }
        return false;
    }
}

const heap = new Heap();

heap.add(3);
console.log(heap.heap);

heap.add(9);
console.log(heap.heap);

heap.add(12);
console.log(heap.heap);

heap.add(7);
console.log(heap.heap);

heap.add(1);
console.log(heap.heap);

heap.remove(12);


console.log(heap.search(12));
// console.log(heap.heap);

