const number = 3

function isPrime(n, i, arr) {

    if (arr.length == 1) {
        arr.push(true)

        while (!arr.slice(2,).includes(true)) {
            n += 1
            arr.push(isPrime(n, 2, arr))
        }
        if (arr[0]) {
            console.log(number, ' is a prime number and')
        }
        else{
            console.log(number, 'is not a prime number and')
        }
        console.log('next prime number is and', n)
        console.log('distance b/w ' + number + ' and ' + n + ' is', n - number)
        // alert()
        arr.splice(1, 1)
        return arr

    }
    // Base cases
    if (n <= 2) {
        return (n == 2) ? [true] : [false];
    }
    if (n % i == 0) {
        if (arr.length == 0) {
            arr.push(false)
        }
        // before returning, lets find the next prime
        if (arr.length == 1) {
            return (isPrime(n, 2, arr))
        }
        return false;
    }
    if (i * i > n) {
        if (arr.length == 0) {
            arr.push(true)
        }
        // before returning, lets find the next prime
        if (arr.length == 1) {
            return (isPrime(n, 2, arr))
        }
        return true;


    }
    // Check for next divisor
    return isPrime(n, i + 1, arr)

}

let res = isPrime(number, 2, [])
if (res.length == 1 && res[0] === true){
    console.log('2 is a prime number and 3 is the next prime number and')
    console.log('distance b/w 2 and 3 is 1')
}
else if (res.length == 1 && res[0] === false) {
    console.log(number, ' is not a prime number, 2 is the 1st prime number')
}
