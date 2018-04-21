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

const stortStack = function (stack) {
    const content = []
    do {
        content.push(stack.pop())
    } while (stack.peek() !== undefined);

    content.sort()
    content.reverse()
    const sortedStack = new Stack() 

    for (let index = 0; index < content.length; index++) {
        sortedStack.push(content[index])
    }
    
    return sortedStack
}

const sortedStack = stortStack(stack);


// console.log(sortedStack.pop())
// console.log(sortedStack.pop())
// console.log(sortedStack.pop())


balancedParens = function (pattern) {
    const stack = new Stack() 
    for (let index = 0; index < pattern.length; index++) {
        const char = pattern[index]
        
        if (char === '(') {
            stack.push(char)
        } else if (char === ')') {
            const value = stack.pop()
            if (value !== '(') return false
        }
    }

    return stack.peek() === undefined
}

// console.log(balancedParens("sqrt(5*(3+8)/(4-2))"))
// console.log(balancedParens("sqrt(5*(3+8)/(4-2)) = (x(z(y)))"))
// console.log(balancedParens("sqrt(5*(3+8)/(4-2))()(())()"))
// console.log(balancedParens("sqrt(5*(3+8)/(4-2))()(())("))
// console.log(balancedParens("sqrt(5*(3+8)/(4-2))"))
// console.log(balancedParens("sqrt(5*(3+8)/(4-2)"))
// console.log(balancedParens("Math.min(5,(6-3))("))
