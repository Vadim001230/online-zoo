//img
const mediaQuery1000 = window.matchMedia('(max-width: 1440px)');
const mediaQuery640 = window.matchMedia('(max-width: 980px)');
const mediaQuery320 = window.matchMedia('(max-width: 630px)');
const petsLeftImg = document.getElementById("petsLeftImg");
const petsRightImg = document.getElementById("petsRightImg");
const backstageImg = document.getElementById("backstageImg");

if (mediaQuery1000.matches) {
   backstageImg.src="../../assets/images/bamboo-cap1000.jpg";
   petsLeftImg.src="../../assets/images/palm_foto1000.png";
}
if (mediaQuery640.matches) {
   petsLeftImg.src="../../assets/images/palm_foto640.png";
}
if (mediaQuery320.matches) {
   petsLeftImg.src="../../assets/images/palm_foto320.png";
   petsRightImg.src="../../assets/images/strelitzia320.png";
}

//range
if (document.querySelector("#range")) {
    document.querySelector("#range").addEventListener('input', (e) => {
        let value = (e.target.value - e.target.min) / (e.target.max - e.target.min) * 100
        e.target.style.background = 'linear-gradient(to right, #F9804B 0%, #F9804B ' + value + '%,  #F5F7F6 ' + value + '%,  #F5F7F6 100%)'
    })
}