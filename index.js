const cacheKey1 = "NUMBER1";
const cacheKey2 = "NUMBER2";
const cacheKey3 = "NUMBER3";
const cacheKey4 = "NUMBER4";
const cacheKey5 = "NUMBER5";
const cacheKey6 = "NUMBER6";
if(typeof(Storage)!=="undefined"){

    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey1)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey1,0);
    }

    const button1 = document.querySelector(".fa1");
    //const clearButton = document.querySelector("#clear");
    const count1 = document.querySelector("#count1");
    button1.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey1);
        number++;
        localStorage.setItem(cacheKey1,number);
        count1.innerText = localStorage.getItem(cacheKey1,number);
        button1.setAttribute("class","");
    });

    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey2)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey2,0);
    }

    const button2 = document.querySelector(".fa2");
    //const clearButton = document.querySelector("#clear");
    const count2 = document.querySelector("#count2");
    button2.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey2);
        number++;
        localStorage.setItem(cacheKey2,number);
        count2.innerText = localStorage.getItem(cacheKey2,number);
        button2.setAttribute("class","");
    });
    
    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey3)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey3,0);
    }

    const button3 = document.querySelector(".fa3");
    //const clearButton = document.querySelector("#clear");
    const count3 = document.querySelector("#count3");
    button3.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey3);
        number++;
        localStorage.setItem(cacheKey3,number);
        count3.innerText = localStorage.getItem(cacheKey3,number);
        button3.setAttribute("class","");
    });

    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey4)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey4,0);
    }

    const button4 = document.querySelector(".fa4");
    //const clearButton = document.querySelector("#clear");
    const count4 = document.querySelector("#count4");
    button4.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey4);
        number++;
        localStorage.setItem(cacheKey4,number);
        count4.innerText = localStorage.getItem(cacheKey4,number);
        button4.setAttribute("class","");
    });
    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey5)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey5,0);
    }

    const button5 = document.querySelector(".fa5");
    //const clearButton = document.querySelector("#clear");
    const count5 = document.querySelector("#count5");
    button5.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey5);
        number++;
        localStorage.setItem(cacheKey5,number);
        count5.innerText = localStorage.getItem(cacheKey5,number);
        button5.setAttribute("class","");
    });

    //pengecekan apakah data sessionStorage dengan key NUMBER tersedia atau belum
    if(localStorage.getItem(cacheKey6)==="undefined"){
        //jika belum maka akan atur dengan nilai awal yakni 0
        localStorage.setItem(cacheKey6,0);
    }

    const button6 = document.querySelector(".fa6");
    //const clearButton = document.querySelector("#clear");
    const count6 = document.querySelector("#count6");
    button6.addEventListener('click',function(event){
        let number = localStorage.getItem(cacheKey6);
        number++;
        localStorage.setItem(cacheKey6,number);
        count6.innerText = localStorage.getItem(cacheKey6,number);
        button6.setAttribute("class","");
    });

}else{
    alert("Browser tidak mendukung");
}


var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var tutup = document.getElementsByClassName("tutup")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
tutup.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
var modal1 = document.getElementById("myModal1");
var btn1 = document.getElementById("myBtn1");
var tutup1 = document.getElementsByClassName("tutup1")[0];
btn1.onclick = function() {
  modal1.style.display = "block";
}
tutup1.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}
var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var tutup2 = document.getElementsByClassName("tutup2")[0];
btn2.onclick = function() {
  modal2.style.display = "block";
}
tutup2.onclick = function() {
  modal2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}
var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("myBtn3");
var tutup3 = document.getElementsByClassName("tutup3")[0];
btn3.onclick = function() {
  modal3.style.display = "block";
}
tutup3.onclick = function() {
  modal3.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("myBtn4");
var tutup4 = document.getElementsByClassName("tutup4")[0];
btn4.onclick = function() {
  modal4.style.display = "block";
}
tutup4.onclick = function() {
  modal4.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal4) {
    modal4.style.display = "none";
  }
}
var modal5 = document.getElementById("myModal5");
var btn5 = document.getElementById("myBtn5");
var tutup5 = document.getElementsByClassName("tutup5")[0];
btn5.onclick = function() {
  modal5.style.display = "block";
}
tutup5.onclick = function() {
  modal5.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal5) {
    modal5.style.display = "none";
  }
}
var modal6 = document.getElementById("myModal6");
var btn6 = document.getElementById("myBtn6");
var tutup6 = document.getElementsByClassName("tutup6")[0];
btn6.onclick = function() {
  modal6.style.display = "block";
}
tutup6.onclick = function() {
  modal6.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal6) {
    modal6.style.display = "none";
  }
}