// let year = new Date().getFullYear();
// console.log(year)

// new_charecter = {
//     name : "Burak",
//     surname: "Celik",
//     birthyear: 1991,
//     familyMembers: [
//             {
//             wife: "Seda",
//             surname: "Celik",
//             birthyear: 1993
//     }, 
//              {
//                 Kid: "Inci",
//                 surname: "Celik",
//                 birthyear: 2020

//     }],
//     summary:  function summary2 () {
//         console.log(`burak is ${year-this.birthyear} old. his wifes name is ${this.familyMembers[0]["wife"]} and his daughters name is ${this.familyMembers[1]["Kid"]}` )
//     } 
// }


// console.log(new_charecter)
// console.log(new_charecter.name)
// console.log(new_charecter.summary())


// let gameOn = False;

// while (gameOn) {

//     let tails = 0;
//     let heads = 0;

//     quantity = Number(prompt("how many times will it be tried ? "));
   
//     for (let i = 1; i<=quantity; i++){
//         let randomNumber = 10* Math.random()
//         if (randomNumber < 5) {
//             console.log("tails");
//             tails++;
//         } else {
//             console.log("heads");
//             heads++;
    
//         }
//     }
    
//     if (tails === heads) {
//         alert("it is a draw");
//         continue
//     } else if (tails > heads) {
//         alert(`tails: ${tails}, heads: ${heads} tails won!`)
//         break

//     } else {
//         alert(`tails: ${tails}, heads: ${heads} heads won!`)
//         break
//     }

// }




// ---------FINDING ROOT SQUARE-------------

// function rootSquare (number){
//     let root;
//     if (number === 0){
//         return 0;
//     } 
//     for (let i =1; i<= number; i++) {
//         if (i**2 <= number && number < (i+1)**2){
//             root = i;
//             return root; 
//         } 
//      }
        
// }

// console.log(rootSquare(30))

// ---------------CRATE SECOND CHAIN-------------

let secondChain= ""
function dnaChain (firstChain){
    let compareChain = firstChain.toUpperCase()
    console.log(compareChain);
    for(let i = 0; i<compareChain.length; i++){
        let char = compareChain[i];
        if (char === "A"){
            secondChain += "T";
        }else if (char === "T"){
            secondChain += "A"
        }else if (char === "G"){
            secondChain += "C"
        } else if (char === "C"){
            secondChain += "G"
         } else {
            alert(`there is ${char} in your DNA. You are ALIEN... Welcome to world We are not enemies. We are FRIENDS`)
            return 
         }
    }
    return secondChain
}

let testChain2 = "gtcagctagcttagctactgac"
let testChain ="adgasdga"
console.log(dnaChain(testChain2))
