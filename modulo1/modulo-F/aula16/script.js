function parimpar (n) {
    if (n%2 == 0){
        return 'par!'
    } else {
        return 'impar'
    }
}

let res = parimpar(4)
console.log(res)


function soma (n1= 0, n2= 0){
   return n1 + n2
}
console.log(soma(8, 8))



let v = function (x){
    return x*2
}

console.log(v(5))