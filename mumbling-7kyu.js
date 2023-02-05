// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


const accum = (str) => {
    let arr = str.split('')
    let stepArr = []

    for (let i = 0; i < arr.length; i++) {
        stepArr.push(arr[i].toLowerCase().repeat(i+1))
    }

    return stepArr.map(elem => elem.charAt(0).toUpperCase() + elem.slice(1)).join('-')
}

console.log(accum('ZpglnRxqenU'))