const closeB = document.body.querySelector(".close")
const modal = document.body.querySelector(".modal");
const navBtn = document.body.querySelector(".navBtn");
const myForm = document.body.querySelector("#myForm")
const sub = document.body.querySelector(".submit")
 let divItems;
const griCont  = document.body.querySelector(".grid-container")
let arr = [];
let btn;
let remBtn;
   sub.addEventListener("click",(e)=>{
       const title = myForm.elements[0].value;
       const author = myForm.elements[1].value
       const pages = myForm.elements[2].value
  console.log(title);
  console.log(author);
  console.log(pages);
  
  let info = new books(title,author,pages);
  books.prototype.checkRead = function(){
        btn = document.createElement("button");
        remBtn = document.createElement("button");
       remBtn.textContent = "Remove"
      if(myForm.elements[3].checked){
          btn.textContent = "Read"
          divItems.appendChild(btn);
          divItems.appendChild(remBtn);
      }
      else{
          btn.textContent = "Not Read"
          divItems.appendChild(btn);
          divItems.appendChild(remBtn);
      }

  }
  arr.push(info);
 console.log(arr);
 console.log(arr[0].title);
  addElements(arr);
  info.checkRead();
  myForm.reset();
  btn.addEventListener("click",function(e){
    if(e.target.textContent == "Read"){
        e.target.textContent = "Not Read";
    }
    else{
        e.target.textContent = "Read"
    }
    })
    remBtn.addEventListener("click",function(e){
        console.log(e.target.parentNode.remove());
    })
   })
     
 closeB.addEventListener("click",function(e){
      modal.classList.remove("dispApp")
      
 });

 navBtn.addEventListener("click",(e)=>{
      
     modal.classList.add("dispApp")
     
 })
let i = 0;
function addElements(ar){
  for( i ; i < ar.length;i++){
       divItems = document.createElement("div");
      divItems.classList.add("items")
   let div1 = document.createElement("div");
   div1.classList.add("itm");
   const tit = document.createElement("h3");
   tit.textContent = "Title";
   div1.appendChild(tit);
   const titSpa = document.createElement("span");
   titSpa.textContent = ar[i].title;
   div1.appendChild(titSpa);
   const auth = document.createElement("h3");
   auth.textContent = "Author"
   div1.appendChild(auth);
   const authSpa = document.createElement("span");
   authSpa.textContent = ar[i].author;
   div1.appendChild(authSpa);
   const pag = document.createElement("h3");
   pag.textContent = "pages"
   div1.appendChild(pag);
   const pagSpa = document.createElement("span");
   pagSpa.textContent = ar[i].state
   div1.appendChild(pagSpa);
   divItems.appendChild(div1);
   griCont.appendChild(divItems);
   modal.classList.remove("dispApp")
   

  }
  
}
 
function books(title,author,state){
  this.title = title
  this.author = author
  this.state = state
   
}

 