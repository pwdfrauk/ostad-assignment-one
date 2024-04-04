
document.addEventListener("DOMContentLoaded", function() {
    
    var firstNumber = document.getElementById('firstNunber');
    var secoundNunber = document.getElementById('secoundNunber');
    var calculotorMethod = document.getElementById('calculotorMethod');
    var calculatorButton = document.getElementById('calculatorButton');
    var resultPrintArea = document.getElementById('resultPrintArea');

    console.log(firstNumber, secoundNunber, calculatorButton, calculotorMethod, resultPrintArea);


    calculatorButton.addEventListener('click', function(){
        console.log('button click');
        var number1 = 0;
        var number2 = 0;

        // checking the first number 
        if(firstNumber.value.length == 0){
            alert("Enter first number !!!");
            firstNumber.focus();
            return;
          
        }

        // checking the second number
        if(secoundNunber.value.length == 0){
            alert("Enter secound number !!!");
            secoundNunber.focus();
            return;
        }
 
        // checking the calculator options
        if(calculotorMethod.value < 1) {
            alert("please select calculator options");
            calculotorMethod.focus();
            return;
        }

        number1 = parseInt(firstNumber.value);
        number2 = parseInt(secoundNunber.value);
        
        // addition 
        if(calculotorMethod.value == 1){
            var result = number1 + number2;
            resultPrintArea.innerHTML = result;
            return;
        }

        // subtraction 
        if(calculotorMethod.value == 2){
            var result = number1 - number2;
            resultPrintArea.innerHTML = result;
            return;
        }

          // multiplication 
          if(calculotorMethod.value == 3){
            var result = number1 * number2;
            resultPrintArea.innerHTML = result;
            return;
        }

        // division 
        if(calculotorMethod.value == 4){
            var result = number1 / number2;
            resultPrintArea.innerHTML = result;
            return;
        }
        
    })

  });
