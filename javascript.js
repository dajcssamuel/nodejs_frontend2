var url = "http://localhost:3000/view";
var id = "view";

async function generator(url, id) {
  var request = await new XMLHttpRequest();

  request.open("GET", url, true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    view(data, request, id);
  };

  request.send();
}

function view(data, request, id) {
  if (id == "view") {
    if (request.status >= 200 && request.status < 400) {
      data.forEach((query) => {
        console.log(request.status);
        var div = document.createElement("tr");
        var mainContainer = document.getElementById(id);
        div.innerHTML =
          "<td>" +
          query.id +
          "</td><td><input id='vezeteknev" +
          query.id +
          "' placeholder='" +
          query.vezeteknev +
          "' value='" +
          query.vezeteknev +
          "'/></td><td><input id='keresztnev" +
          query.id +
          "' placeholder='" +
          query.keresztnev +
          "' value='" +
          query.keresztnev +
          "'/></td><td><input id='munkahely" +
          query.id +
          "' placeholder='" +
          query.munkahely +
          "' value='" +
          query.munkahely+
          "'/></td><td><input id='email" +
          query.id +
          "' placeholder='" +
          query.email +
          "' value='" +
          query.email +
          "'/></td>" +
          "<button onclick = 'deleterecord(" +
          query.id +
          ")' type = 'submit' value='Submit'>Törlés</button>" +
          "<button onclick = 'update(" +
          query.id +
          ")'>Frissit</button>";
        mainContainer.appendChild(div);
      });
    } else {
      console.log("error");
    }
  }
}

async function generate_html() {
  await generator(url, id);
}

function deleterecord(id) {
  navigator.sendBeacon("http://localhost:3000/deleterecord/" + id);
  console.log(id);
}
function update(id) {
  const data =
    id +
    ";" +
    document.getElementById("vezeteknev" + id).value +
    ";" +
    document.getElementById("keresztnev" + id).value +
    ";" +
    document.getElementById("munkahely" + id).value +
    ";" +
    document.getElementById("email" + id).value;

  navigator.sendBeacon("http://localhost:3000/update/" + data);
  console.log(data);
}

generate_html();