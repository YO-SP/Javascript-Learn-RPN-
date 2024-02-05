function dataHandling(input){
    //Keluaran 1 
    input.splice(1, 1, "Roman Alamsyah Elsharawy")
    input.splice(2, 1, "Provinsi Bandar Lampung")
    input.splice(4, 1, "Pria")
    input.push("SMA Internasional Metro"); 
    console.log(input); 
    
    console.log(); 
    
    //Keluaran 2
    let ubahJadiString = input.toString(); 
    let ambilMei = ubahJadiString.split('/'); 
    
    for(let i = 0; i <= ambilMei.length; i++){
        if (ambilMei[i] == "05"){
            console.log(`Mei`); 
        }
    }
    
    console.log(); 
    
    //Keluaran 3
    input.splice(0, 3); 
    input.splice(1, 2);
    let ambilTanggal = input.toString(); 
    
    let tanggal = ambilTanggal.split("/"); 
    console.log(`["${tanggal[2]}", "${tanggal[0]}", "${tanggal[1]}"]`); 
    
    console.log(); 
    
    //Keluaran 4
    console.log(tanggal.join("-"));
    
    console.log(); 
    
    //Keluaran 5
    
    let pemecah = ubahJadiString.split(','); 
    pemecah.shift(); 
    pemecah.splice(1, 4); 
    
    let trans = pemecah.toString(); 
    let hasil = " "; 
    
    for (let i = 0; i < 15; i++){
      hasil += trans[i]; 
    }
    console.log(hasil); 
    }
    
    dataHandling(["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"]); 