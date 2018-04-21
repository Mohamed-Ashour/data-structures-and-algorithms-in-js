function Queue() {
    this.storage = {}
    this.head = 0
    this.tail = 0
}

Queue.prototype.enqueue = function (value) {
    this.storage[this.tail] = value
    this.tail++
    return this.count()
}

Queue.prototype.dequeue = function () {
    const value = this.storage[this.head]
    delete this.storage[this.head]
    if (this.head < this.tail) this.head++
    return value
}

Queue.prototype.peek = function() {
  return this.storage[this.head]
}

Queue.prototype.count = function() {
  return this.tail - this.head
}


const queue = new Queue()

// queue.enqueue('a')
// queue.enqueue('b')
// queue.enqueue('c')
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// console.log(queue.dequeue())
// queue.enqueue('h')
// console.log(queue.dequeue());