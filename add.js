
function sendPost(){
    const data = document.getElementById("vezeteknev").value+";"+document.getElementById("keresztnev").value+";"+document.getElementById("munkahely").value+";"+document.getElementById("email").value;
    console.log(data);
      navigator.sendBeacon('http:localhost:3000/savedetails/'+ data);
      console.log(data);
    }