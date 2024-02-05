function processSentence(name, age, adress, hobby){
    let hasil = `Nama saya ${name}, umur saya ${age} tahun, alamat saya di ${adress}, dan saya punya hobi yaitu ${hobby}!`; 
    return hasil
}
let fullSentence = processSentence("Agus", 30, "Jln. Malioboro, Yogyakarta", "gaming")

console.log(fullSentence)
