const number = 13

function isPrime(n, i, arr) {

    if (arr.length == 1) {
        arr.push(true)

        while (!arr.slice(2,).includes(true)) {
            n += 1
            arr.push(isPrime(n, 2, arr))
        }
        console.log('next prime number is', n)
        console.log('distance b/w the 2 nos is', n - number)
        arr.splice(1, 1)
        return arr

    }
    // Base cases
    if (n <= 2) {
        console.log(n, i)
        return (n == 2) ? true : false;
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

console.log(isPrime(number, 2, []))
