let year = new Date().getFullYear();
console.log(year)

new_charecter = {
    name : "Burak",
    surname: "Celik",
    birthyear: 1991,
    familyMembers: [
            {
            wife: "Seda",
            surname: "Celik",
            birthyear: 1993
    }, 
             {
                Kid: "Inci",
                surname: "Celik",
                birthyear: 2020

    }],
    summary:  function summary () {
        console.log(`burak is ${year-this.birthyear} old. his wifes name is ${this.familyMembers[0]["wife"]} and his daughters name is ${this.familyMembers[1]["Kid"]}` )
    } 
}


console.log(new_charecter)
console.log(new_charecter.name)
console.log(new_charecter.summary())


// let gameOn = true;

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









