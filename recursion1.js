const count = function (n) {
    console.log(n)
    if (n === 0) {
        return;
    } 

    count(n-1)
}

count(3)