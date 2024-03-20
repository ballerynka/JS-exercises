// STANDARD FOR 

for (let n=1; n<=9; n++){
    console.log(n)
} 

//------------------------------------HW---------------------------------//


//------------------------------descendent-------------------------------//
let n=9
for (n = 9; n >= 1; n--) {
  console.log(n);
}




//--------------------- CAROUSEL from WHILE to FOR ------------------------//

{

let i = 1
for(i=1; i<=9; i++){
     console.log(i);
     container.innerHTML += `<img src="images/${i}.jpeg">${i}`;
     if (i == 3) {
       container.innerHTML += "</br>";
     } else if (i == 6) {
       container.innerHTML += "</br>";
     }
}

}

// {
// let n=1
// for(;n<=9;){
//     console.log(n)
// }
// }




// let n=1
// while (n<=9){
//     console.log(n)
//     n++
// }// 