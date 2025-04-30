/*let num = [5, 8, 2, 9, 3]

console.log(num)

for (let pos = 0; pos < num.length; pos++){
    console.log(`o numero da posição ${pos} tem o valor ${num[pos]}`)
}
    */
let num = [5, 8, 2, 9, 3]
num.sort()
for (let pos in num){
    console.log(`o numero da posição ${pos} tem o valor ${num[pos]}`)
}
