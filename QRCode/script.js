let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("qrimg");
let qrtext = document.getElementById("qrtext");

function QRgenerator() {
    
    let Example = qrtext.value;  // Corrected to 'value'
    if(Example.length===0)
        {
          document.getElementsByClassName("hidden")[0].style.display = "block";
        }
        else
        {
            qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + Example;
            document.getElementsByClassName("hidden")[0].style.display = "none";

  }
}