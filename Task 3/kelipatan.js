console.log(`Looping Pertambahan 2`)
for(let i = 1; i <= 100; i++){
   if(i % 3 == 0){
   console.log(i + ` Kelipatan 3`)
   } else {
   console.log(i)
   }
   i += 1; 
}

console.log()

console.log(`Looping Pertambahan 5`)
for(let j = 1; j <= 100; j++){
    if(j % 6 == 0){
    console.log(j + ` Kelipatan 6`)
    } else {
    console.log(j)
    }
    j += 4; 
}

console.log(`Looping Pertambahan 9`)
for(let k = 1; k <= 100; k++){
    if(k % 10 == 0){
    console.log(k + ` Kelipatan 10`)
    } else {
    console.log(k)
    }
    k += 8; 
}
