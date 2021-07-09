const closeB = document.body.querySelector(".close");
const modal = document.body.querySelector(".modal");
const navBtn = document.body.querySelector(".navBtn");
const myForm = document.body.querySelector("#myForm");
const sub = document.body.querySelector(".submit");
let divItems;
const griCont = document.body.querySelector(".grid-container");
let ArrFromLocalStorage = JSON.parse(localStorage.getItem("allEntries"));
if (ArrFromLocalStorage == null) ArrFromLocalStorage = [];

window.addEventListener("load", function (e) {
  for (let i = 0; i < ArrFromLocalStorage.length; i++) {
    divItems = document.createElement("div");
    divItems.classList.add("items");
    divItems.setAttribute("data-number", ArrFromLocalStorage[i].rand);
    let div1 = document.createElement("div");
    div1.classList.add("itm");

    const tit = document.createElement("h3");
    tit.textContent = "Title";
    div1.appendChild(tit);
    const titSpa = document.createElement("span");
    titSpa.textContent = ArrFromLocalStorage[i].title;
    div1.appendChild(titSpa);
    const auth = document.createElement("h3");
    auth.textContent = "Author";
    div1.appendChild(auth);
    const authSpa = document.createElement("span");
    authSpa.textContent = ArrFromLocalStorage[i].author;
    div1.appendChild(authSpa);
    const pag = document.createElement("h3");
    pag.textContent = "pages";
    div1.appendChild(pag);
    const pagSpa = document.createElement("span");
    pagSpa.textContent = ArrFromLocalStorage[i].state;
    div1.appendChild(pagSpa);
    divItems.appendChild(div1);
    griCont.appendChild(divItems);
    btn = document.createElement("button");
    remBtn = document.createElement("button");
    btn.classList.add("btnStyle");
    remBtn.classList.add("btnStyle");
    remBtn.textContent = ArrFromLocalStorage[i].remove;

    if (ArrFromLocalStorage[i].readOrNread === "checked") {
      btn.textContent = "Read";
      divItems.appendChild(btn);
      divItems.appendChild(remBtn);
    } else {
      btn.textContent = "Not Read";
      divItems.appendChild(btn);
      divItems.appendChild(remBtn);
    }

    btn.addEventListener("click", function (e) {
      if (e.target.textContent == "Read") {
        e.target.textContent = "Not Read";
      } else {
        e.target.textContent = "Read";
      }
    });
    remBtn.addEventListener("click", function (e) {
      let dataNum = e.target.parentNode.getAttribute("data-number");
      console.log(e.target.parentNode.remove());

      function checkDataEdit(arr) {
        if (Number(dataNum) == arr.rand) {
          return true;
        }
      }

      const editIndex = ArrFromLocalStorage.findIndex(checkDataEdit);
      ArrFromLocalStorage.splice(editIndex, 1);

      localStorage.setItem("allEntries", JSON.stringify(ArrFromLocalStorage));
    });
  }
});

let btn;
let remBtn;
sub.addEventListener("click", (e) => {
  const title = myForm.elements[0].value;
  const author = myForm.elements[1].value;
  const pages = myForm.elements[2].value;

  if (title == "" || author == "" || pages == "") {
    alert("Please enter all the values");
  } else if (isNaN(pages)) {
    alert("Enter only numbers in No of pages");
  } else {
    console.log(title);
    console.log(author);
    console.log(pages);
    let randomNumber = uniqueNumber(500000);

    books.prototype.checkRead = function () {
      btn = document.createElement("button");
      remBtn = document.createElement("button");
      btn.classList.add("btnStyle");
      remBtn.classList.add("btnStyle");
      remBtn.textContent = "Remove";
      info.remove = "remove";
      if (myForm.elements[3].checked) {
        btn.textContent = "Read";
        divItems.appendChild(btn);
        divItems.appendChild(remBtn);
        info.readOrNread = "checked";
      } else {
        info.readOrNread = "Not Read";
        btn.textContent = "Not Read";
        divItems.appendChild(btn);
        divItems.appendChild(remBtn);
      }
    };

    let info = new books(title, author, pages, randomNumber);

    // Save allEntries back to local storage

    addElements(info);
    info.checkRead();
    ArrFromLocalStorage.push(info);
    localStorage.setItem("allEntries", JSON.stringify(ArrFromLocalStorage));
    myForm.reset();
    btn.addEventListener("click", function (e) {
      if (e.target.textContent == "Read") {
        e.target.textContent = "Not Read";
      } else {
        e.target.textContent = "Read";
      }
    });
    remBtn.addEventListener("click", function (e) {
      let dataNum = e.target.parentNode.getAttribute("data-number");
      console.log(e.target.parentNode.remove());

      function checkDataEdit(arr) {
        if (Number(dataNum) == arr.rand) {
          return true;
        }
      }

      const editIndex = ArrFromLocalStorage.findIndex(checkDataEdit);
      ArrFromLocalStorage.splice(editIndex, 1);

      localStorage.setItem("allEntries", JSON.stringify(ArrFromLocalStorage));
    });
  }
});

closeB.addEventListener("click", function (e) {
  modal.classList.remove("dispApp");
});

navBtn.addEventListener("click", (e) => {
  modal.classList.add("dispApp");
});

function addElements(ar) {
  divItems = document.createElement("div");
  divItems.classList.add("items");
  divItems.setAttribute("data-number", ar.rand);
  let div1 = document.createElement("div");
  div1.classList.add("itm");

  const tit = document.createElement("h3");
  tit.textContent = "Title";
  div1.appendChild(tit);
  const titSpa = document.createElement("span");
  titSpa.textContent = ar.title;
  div1.appendChild(titSpa);
  const auth = document.createElement("h3");
  auth.textContent = "Author";
  div1.appendChild(auth);
  const authSpa = document.createElement("span");
  authSpa.textContent = ar.author;
  div1.appendChild(authSpa);
  const pag = document.createElement("h3");
  pag.textContent = "pages";
  div1.appendChild(pag);
  const pagSpa = document.createElement("span");
  pagSpa.textContent = ar.state;
  div1.appendChild(pagSpa);
  divItems.appendChild(div1);
  griCont.appendChild(divItems);
  modal.classList.remove("dispApp");
}

let numbers = [];

const uniqueNumber = (maxVal) => {
  const number = Math.floor(Math.random() * maxVal + 1);
  if (!numbers.includes(number)) {
    numbers.push(number);
    return number;
  } else if (numbers.length - 1 !== maxVal) {
    uniqueNumber(maxVal);
  }
};

function books(title, author, state, rand) {
  this.title = title;
  this.author = author;
  this.state = state;
  this.rand = rand;
  this.readOrNread = "";
  this.remove = "";
}
