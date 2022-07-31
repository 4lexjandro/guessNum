// let num = Math.floor(Math.random() * 10);

// console.log(num);

// function do_guess() {
//     let guess = Number(document.getElementById("guess").value);

//     let message = document.getElementById("message");

//     if(guess == num) {
//         message.innerHTML = "You got it!";
//     }
//     else if (guess > num) {
//         message.innerHTML = "No, try a lower number.";
//     }
//     else {
//         message.innerHTML = "No, try a higher number.";
//     }
// }




function takeMaximum() {
    
var maximum = 0

// While loop exists once proper value is picked, which is then assigned to maximum
while(maximum <= 0) {

// Keep looping until number is chosen
var clientInput = prompt('Pick a Maximum Number')

if (clientInput <= -1) {
    alert( 'cannot use negative numbers')
    
}
else if (clientInput == 0) {
     alert( 'zero cannot be used!')
     
}

    
else if ((isNaN(clientInput)) === false) {
   maximum = Math.round(clientInput) 
   
}


else if(       (isNaN(clientInput)) === true   ) {
     alert( 'That is not a number !')
     
}
}

console.log('client input: ' + clientInput)
console.log('maximum: ' + maximum)


let randomNum = Math.floor(Math.random() * maximum);
console.log('random Number picked by program: ' + randomNum);



// Set maximum in range to not be exceeded









// function validateGuess() {

     
//               let guess = Number(document.getElementById("guess").value);
          
//               let message = document.getElementById("message");
          
//               if(guess == randomNum) {
//                   message.innerHTML = "You got it!";
//               }
//               else if (guess > randomNum) {
//                   message.innerHTML = "No, try a lower number.";
//               }
//               else {
//                   message.innerHTML = "No, try a higher number.";
//               }
//           }
     




}