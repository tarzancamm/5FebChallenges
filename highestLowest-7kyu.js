// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

const highAndLow = (nums) => {
    let arr = nums.split(' ').map(Number)
    return `${Math.max(...arr)} ${Math.min(...arr)}`
}


console.log(highAndLow("1 2 3"))
console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'))