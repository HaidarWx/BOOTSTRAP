

function generateBiodata() {
    let nama= "Haidar";
    let usia=16;
    let type;
    let biodata =document.getElementById('biodata')
   if (usia >10 && usia <18) {
    type= "Remaja";
   }
   else if (usia >=18 && usia <30){
    type="Dewasa";
   }
   else if (usia >=30){
    type="Tua";
   }
   else {
    type="Anak-Anak";
   }
  bio= "Saya "+nama + " Dan usia saya "+usia+ " Tahun dan saya termasuk kategori "+type;
  return biodata.innerHTML = bio;
}
generateBiodata()
