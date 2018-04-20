function Stack(maxSize) {
    this.storage = {}
    this.count = 0
}

Stack.prototype.push = function (value) {
    this.storage[this.count] = value
    this.count++
    return this.count
}

Stack.prototype.pop = function () {
    this.count--
    const value = this.storage[this.count]
    delete this.storage[this.count]
    return value
}

Stack.prototype.peek = function() {
    return this.storage[this.count-1]
}


const stack = new Stack() 

// console.log(stack.push(1))
// console.log(stack.push(4))
// console.log(stack.push(0))

// console.log(stack.peek())
// console.log(stack.pop())
// console.log(stack.pop())



balancedParens = function (pattern) {
    pattern
};

balancedParens("sqrt(5*(3+8)/(4-2))"); 
balancedParens("Math.min(5,(6-3))(");