// Example object structure
this._stack = {
    sort: {
        field: [
            { field: 'value1' },
            { field: 'value2' },
            // More objects
        ]
    }
};

// Example function for adding elements to an output array
let out = {
    result: [],
    add: function(element) {
        this.result.push(element.field);
    }
};

// Using forEach to add each element's 'field' value to out.result
this._stack.sort.field.forEach(out.add, out);

console.log(out.result); // ['value1', 'value2', ...]
