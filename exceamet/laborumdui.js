class Example {
    constructor() {
        this.items = [1, 2, 3, 4, 5];
    }

    remove(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1); // Remove 1 element at index
            console.log(`Removed ${item} from array.`);
        } else {
            console.log(`${item} not found in array.`);
        }
    }
}

const example = new Example();
example.remove(3); // Removes the number 3 from this.items
console.log(example.items); // Output: [1, 2, 4, 5]
example.remove(10); // Outputs: 10 not found in array.
