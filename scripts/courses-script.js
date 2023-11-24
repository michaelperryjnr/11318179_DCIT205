const  lvl100 = document.getElementById('level1');
const lvl200 = document.getElementById('level2');
const lvl300 = document.getElementById('level3');
const lvl400 = document.getElementById("level4");
const lvl500 = document.getElementById("level5");
const lvl600 = document.getElementById("level6");
const lvl700 = document.getElementById("level7");
const lvl800 = document.getElementById("level8");

let level = [lvl100, lvl200, lvl300, lvl400, lvl500, lvl600, lvl700];

const table1 = document.getElementById('table1');
const table2 = document.getElementById("table2");
const table3 = document.getElementById("table3");
const table4 = document.getElementById("table4");
const table5 = document.getElementById("table5");
const table6 = document.getElementById("table6");
const table7 = document.getElementById("table7");
const table8 = document.getElementById("table8");

let tab = [table1, table2, table3, table4, table5, table6, table7, table8];


lvl100.addEventListener('click', () =>{
    console.log('lvl 100 clicked');
    table1.style.display = 'block';
    table1.style.transition = 'ease-out all 0.15s'
    console.log('table 1 content displayed')
});

lvl200.addEventListener('click', () => {
    console.log('lvl 200 clicked');
    table1.style.display = 'none';
    table2.style.display = 'block';
    console.log("table 1 content removed");
    console.log("table 2 content displayed");
});

lvl300.addEventListener("click", () => {
  console.log("lvl 300 clicked");
  table2.style.display = "none";
  table3.style.display = "block";
  console.log("table 2 content removed");
  console.log("table 3 content displayed");
});

lvl400.addEventListener("click", () => {
  console.log("lvl 400 clicked");
  table3.style.display = "none";
  table4.style.display = "block";
  console.log("table 3 content removed");
  console.log("table 4 content displayed");
});

lvl500.addEventListener("click", () => {
  console.log("lvl 500 clicked");
  table4.style.display = "none";
  table5.style.display = "block";
  console.log("table 4 content removed");
  console.log("table 5 content displayed");
});

lvl600.addEventListener("click", () => {
  console.log("lvl 600 clicked");
  table5.style.display = "none";
  table6.style.display = "block";
  console.log("table 5 content removed");
  console.log("table 6 content displayed");
});

lvl700.addEventListener("click", () => {
  console.log("lvl 700 clicked");
  table6.style.display = "none";
  table7.style.display = "block";
  console.log("table 6 content removed");
  console.log("table 7 content displayed");
});

lvl800.addEventListener("click", () => {
  console.log("lvl 800 clicked");
  table7.style.display = "none";
  table8.style.display = "block";
  console.log("table 7 content removed");
  console.log("table 8 content displayed");
});




// while(true){
//    for (var i = 0; i < 8; i++){
//     if(level[i] < level [i-1]){
//         level[i].addEventListener('click', ()=>{
//             tab[i].style.display = 'block';
//             tab[i-1].style.display = 'none';
//         });
//     } else {
//         level[i].addEventListener('click', ()=>{
//             tab[i].style.display = 'none';
//         });
//     }
// }; 
// }