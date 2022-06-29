class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }
    push(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    pop() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
    }
    front() {
        return this.elements[this.head];
    }
    size() {
        return this.tail - this.head;
    }
    empty() {
        if(this.size() == 0) return true;

        return false;
    }
}


let q = new Queue();

for (let i = 1; i <= 7; i++) {
    q.push(i);
}

console.log(q.front()); // 1
console.log(q.length()); // 7
q.pop();
console.log(q.front()) // 2
console.log(q.length()); // 6

while(!q.empty()){
    console.log(q.front());
    q.pop();
}