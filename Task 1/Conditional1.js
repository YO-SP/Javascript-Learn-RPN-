//Game Proxytia
let nama = `Apin`; 
let peran = `Tabib`; 

if (nama == ``) {
    console.log("Nama Wajib Diisi")
}

if (peran == ``){
    console.log(`pilih peranmu untuk memulai game`)
} else if (peran == `Ksatria`){
    console.log(`Halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!`); 
} else if (peran == `Tabib`){
    console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka`);
} else if (peran == `Penyihir`) {
    console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`); 
} else {
    console.log("Peran tidak diketahui"); 
}

