
class Stack {
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
        delete this.elements[this.tail-1];
        this.tail--;
    }
    
    top() {
        return this.elements[this.tail-1];
    }
    size() {
        return this.tail - this.head;
    }
    empty() {
        if(this.size() == 0) return true;

        return false;
    }
}

let s = new Stack();

for (let i = 1; i <= 7; i++) {
    s.push(i);
}

while(!s.empty()){
    console.log(s.top())
    s.pop()
}