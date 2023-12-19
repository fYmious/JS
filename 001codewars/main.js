function digPow(n, p){
    let sum = 0
    for (const digit of n.toString()) {
        sum += parseInt(digit) ** p
        p++
    }
    if (sum % n === 0){
        return sum / n
    } else {
        return -1
    }
}


console.log(digPow(46288, 3))