function konversiMenit(menit){
    let hasil1 = menit / 60; 
    let hasil2 = Math.floor(hasil1);
    let hasil3 = menit % 60; 

    if (menit >= 60){
        if (hasil3 > 10) {
           return `${hasil2}:${hasil3}`
        } else if (hasil3 < 10 ){
           return `${hasil2}:0${hasil3}`
        } else if (menit % 60 == 0){
          return `${hasil1}:00`
        }
    } else {
     return `0:${menit}`
    }
}

  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00