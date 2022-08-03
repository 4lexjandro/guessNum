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



// Part 2


console.log('client Input: ' + clientInput)
console.log('maximum: ' + maximum)






// Set maximum in range to not be exceeded

var randomNum = Math.floor(Math.random() * maximum);
console.log('random Number picked by program: ' + randomNum);






// now do this function after maximum has value


let eachGuess = []



function do_guess() {
    let guess = Number(document.getElementById("guess").value);
   
   

   
   

   
    
     if (guess > maximum || guess < 0) {
     alert("That number is not in range, try again.")
 }
    else if ((isNaN(guess)) === true) {
     alert("That is not a number!")
 }
 else if (guess > randomNum) {
     alert("No, try a lower number.")
     eachGuess.push(guess)
     
     
 }
 else if (guess < randomNum) {
        alert("No, try a higher number.")
        eachGuess.push(guess)
        
        
    }

    else if(guess == randomNum) {
     alert(` "You got it! It took you ` + eachGuess.length + ' tries and your guesses were ' + eachGuess + `"`)
 }

    

















}
