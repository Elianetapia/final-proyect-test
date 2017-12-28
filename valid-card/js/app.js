// Ask the user for their credit card number
do {
    var inputCodeCard = prompt ("Ingrese su número de tarjeta de crédito");
    if (inputCodeCard !== Number){
      alert('No es un número');
    }
}while (!inputCodeCard);
// Does not accept strinngs or empty fields

//Call the function
isValidCard (inputCodeCard)

//Create the function to valid card
function isValidCard (codeCard){

    var arrReverse = []; //Create the array.reverse
    for (var i = 0; i < codeCard.length; i++){
          arrReverse.unshift(parseInt(codeCard[i]));
    }

    //Getting numbers in even position
    for (var j = 1; j <arrReverse.length; j = j+2){

      if (arrReverse[j]*2 >= 10){
        var numberByTwo = arrReverse[j]*2;
        //If the value of the multiplication is two digits: add digits and then replace in arrReverse
        arrReverse[j] = parseInt(numberByTwo.toString(10)[0]) + parseInt(numberByTwo.toString(10)[1])
        }else{
          //If the value of the multiplication is one digit, it is replaced in arrReverse
          arrReverse[j] = arrReverse[j]*2
        }

      //Adding card digits
      var sum = 0
      for (var k = 0; k < arrReverse.length; k++){
        sum = sum + arrReverse[k]
      }
    }

    //Validate card
    if (sum % 10 === 0) {
      return document.write ("Tu número de tarjeta es VÁLIDA")
      }else{
        return document.write ("Tu número de tarjeta es INVÁLIDA")
      }
   }
