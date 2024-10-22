const flame = document.getElementById('flame');
const statusText = document.getElementById('status');


let audioContext, analyser, microphone, dataArray;

function initMicrophone() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            analyser = audioContext.createAnalyser();
            microphone = audioContext.createMediaStreamSource(stream);
            analyser.fftSize = 256;
            
            dataArray = new Uint8Array(analyser.frequencyBinCount);
            microphone.connect(analyser);
            checkSound();
        })
        .catch(err => {
            console.error('Error accessing the microphone', err);
        });
    } else {
        alert('Microphone not supported by your browser.');
    }
}

function checkSound() {
    analyser.getByteFrequencyData(dataArray);
    let volume = dataArray.reduce((a, b) => a + b) / dataArray.length;

    if (volume > 80) { 
        flame.style.display = 'none';

         setTimeout(() => {
            alert("✨ Úm ba la điều ước sẽ trở thành hiện thực nèk ✨");
            basic();
            setTimeout(() => {
                alert("Happy Birthday PhuongMu, mừng ngày thế giới chào đón 1 cô gái dâm đãng cuteee HuuMu Chúc em gái dâm PhuongMu sinh nhật vui vẻ, cuộc sống thuận lợi, được nhiều hạnh phúc có bồ ku bự để đc bú ku ❤️");
            },1500);
        }, 500);
    } else {
        requestAnimationFrame(checkSound);
    }
}
function askForWish() {
    const wish = prompt(" PhuongMu Giả bộ ước gì đi :>");
    if (wish) {
        console.log = `Điều ước của bạn: "${wish}" đã được ghi lại!`; 
            setTimeout(() => {
                alert("Ước xong òi thì thối nến iii.\nThổi mạnh mạnh á💨");
            }, 1000); 

    } else {
        alert ( "Bạn chưa nhập điều ước nào!");
    }
}

window.onload = function() {
    initMicrophone();
    setTimeout(askForWish, 2000);
};

function basic(){
    confetti({
    particleCount: 200,
    spread: 50,
    origin: { y: 0.6 }
  });
}

