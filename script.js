let hcontent = document.querySelector(".hcontent").classList
let hmain = document.querySelector(".hmain").classList
let hbt1 = document.querySelector(".hbt1").classList
let hlogo = document.querySelector(".hlogo").classList
let hbt2 = document.querySelector(".hbt2").classList
function navdisplay(){
    hcontent.toggle("hcontent_r");
    hmain.toggle("hmain_r")
    hbt1.toggle("hbt_r")
    hbt2.toggle("hbt2_r")
    hlogo.toggle("hlogo_r")
    // hbt[0].LastChild.innerHTML="<img src="/icon/SMF.jpg" alt ="close"/>"
}