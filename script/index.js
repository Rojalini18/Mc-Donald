var data = [
  {
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    id: 10,
    name: "Burger King",
  },
  {
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4ebdcc78812279.6027ad40ba05f.png",
    id: 11,
    name: "McFlurry",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6R_NpL-t2SjAC7vKXosTG3tVsqSRVS_QoCw&usqp=CAU",
    id: 12,
    name: "FrenchFries",
  },
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/t-mcdonalds-frappe-mocha-medium-1566923500.jpg?crop=0.5699481865284974xw:1xh;center,top&resize=480:*",
    id: 13,
    name: "Classy Caramel",
  },
  {
    image:
      "https://content.fortune.com/wp-content/uploads/2019/05/mcdonalds_bigvegants.jpg",
    id: 14,
    name: "McPlant Burger",
  },
  {
    image:
      "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg",
    id: 15,
    name: "American Mcdonalds Burger",
  },
];

var container = document.querySelector("#box");
data.map(function (elem) {
  var innerbox = document.createElement("div");
  var img = document.createElement("img");
  img.src = elem.image;
  img.style.width = "270px";
  img.style.height = "220px";
  img.style.borderRadius = "5px";
  var name = document.createElement("h4");
  name.textContent = elem.name;
  name.style.textAlign = "center";
  name.style.textDecoration = "underline";

  img.addEventListener("click", function () {
    addToScreen(elem);
  });

  innerbox.append(img, name);
  document.querySelector("#box").append(innerbox);
});

function OrderFood() {
  container.innerHTML = "";
  var word = document.createElement("p");
  word.textContent = "your order has been placed. Please wait...";

  let orderno = Math.ceil(Math.random() * 50);
  div11 = document.createElement("div");
  div11.append(word, orderno);
  document.querySelector("#box").append(div11);

  let queue = [];
  var p = document.getElementById("myCheck1");
  var b = document.getElementById("myCheck2");
  var c = document.getElementById("myCheck3");
  var f = document.getElementById("myCheck4");
  var m = document.getElementById("myCheck5");
  var v = document.getElementById("myCheck6");

  console.log(p.checked, b.checked, c.checked, f.checked);
  if (p.checked == true) {
    queue.push("Burger King");
  }
  if (b.checked == true) {
    queue.push("McFlurry");
  }
  if (c.checked == true) {
    queue.push("FrenchFries");
  }
  if (f.checked == true) {
    queue.push("Classy Caramel");
  }
  if (m.checked == true) {
    queue.push("McPlant Burger");
  }
  if (v.checked == true) {
    queue.push("American Mcdonalds Burger");
  }

  let promise = new Promise(function (resolve, reject) {
    setInterval(function () {
      if (queue[0] != null) {
        resolve("Your order is ready");
      } else {
        reject("There is no pending order");
      }
    }, 5000);
  });

  promise.then(function (res) {
    word.textContent = "";
    document.querySelector("#box").append(word);

    if (p.checked == true) {
      var photo1 = document.createElement("img");
      //  photo1.setAttribute("class","pbcf");
      photo1.src =
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80";
      photo1.style.width = "200px";
      photo1.style.height = "230px";
      var p1 = document.createElement("p");
      p1.textContent = "Burger King is ready";
      div21 = document.createElement("div");
      div21.append(p1, photo1);
      document.querySelector("#box").append(div21);
    }

    if (b.checked == true) {
      var photo2 = document.createElement("img");
      photo2.setAttribute("class", "pbcf");
      photo2.src =
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4ebdcc78812279.6027ad40ba05f.png";
      photo2.style.width = "200px";
      photo2.style.height = "230px";
      var p2 = document.createElement("p");
      p2.textContent = "McFlurry is Ready";
      div22 = document.createElement("div");
      div22.append(p2, photo2);
      div22.setAttribute("class", "div2");
      document.querySelector("#box").append(div22);
    }

    if (c.checked == true) {
      var photo3 = document.createElement("img");
      photo3.setAttribute("class", "pbcf");
      photo3.src =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6R_NpL-t2SjAC7vKXosTG3tVsqSRVS_QoCw&usqp=CAU";
      photo3.style.width = "200px";
      photo3.style.height = "230px";
      var p3 = document.createElement("p");
      p3.textContent = "FrenchFries is ready";
      div23 = document.createElement("div");
      div23.append(p3, photo3);
      div23.setAttribute("class", "div2");
      document.querySelector("#box").append(div23);
    }

    if (f.checked == true) {
      var photo4 = document.createElement("img");
      photo4.setAttribute("class", "pbcf");
      photo4.src =
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/t-mcdonalds-frappe-mocha-medium-1566923500.jpg?crop=0.5699481865284974xw:1xh;center,top&resize=480:*";
      photo4.style.width = "200px";
      photo4.style.height = "230px";
      var p4 = document.createElement("p");
      p4.textContent = "Classy Caramel is ready";
      div24 = document.createElement("div");
      div24.append(p4, photo4);
      div24.setAttribute("class", "div2");
      document.querySelector("#box").append(div24);
    }
    if (m.checked == true) {
      var photo4 = document.createElement("img");
      photo4.setAttribute("class", "pbcf");
      photo4.src =
        "https://content.fortune.com/wp-content/uploads/2019/05/mcdonalds_bigvegants.jpg";
      photo4.style.width = "200px";
      photo4.style.height = "230px";
      var p4 = document.createElement("p");
      p4.textContent = "McPlant Burger is ready";
      div24 = document.createElement("div");
      div24.append(p4, photo4);
      div24.setAttribute("class", "div2");
      document.querySelector("#box").append(div24);
    }
    if (v.checked == true) {
      var photo4 = document.createElement("img");
      photo4.setAttribute("class", "pbcf");
      photo4.src =
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/iconic/desktop/t-mcdonalds-Big-Mac.jpg";
      photo4.style.width = "200px";
      photo4.style.height = "230px";
      var p4 = document.createElement("p");
      p4.textContent = "American Mcdonalds Burger is ready";
      div24 = document.createElement("div");
      div24.append(p4, photo4);
      div24.setAttribute("class", "div2");
      document.querySelector("#box").append(div24);
    }
  });
  promise.catch(function (err) {
    alert(err);
  });
}
