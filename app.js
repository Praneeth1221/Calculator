
        // function login(){
          
            // const username="Saman";
            // const password="1234";
            // let txtusername = document.getElementById("username").value;
            // let txtpassword =document.getElementById("password").value;
            // if(txtusername == username && txtpassword == password){
            //     alert("Login successful :)");
            // }
            // else{
            //     alert("Login faild :(");
            // }

            
            // let numbers = [1,2,3,4,5,6,7,8,9,10];
            // let sum=;
            // for(let i=0;i<numbers.length;i++){
            //     console.log(numbers[i]);
            //     sum+=numbers[i];
                
            // }
            // console.log("Sum = "+sum);

            // let numbersArray = [1,2,3,4,5,6,7,8,9,10];
            // for(let number of numbersArray){
            //     console.log(number);
            // }
            // numbersArray.forEach(number =>{
            //     console.log(number);
            //     document.write(`<h1>${number}</h1>`);
            // });

            // let isTrue = 10 == "10"; // type eka check krnne nathuw nikn ma value eka check kalanw methnadi.. type ekath ekkama check wenn ona nam === mehema karanna ona
        //     console.log(isTrue);

        //     let isTrue1 = 10 === "10";
        //     console.log(isTrue1);
        // }

        // function Calc(){
        //     let number1=document.getElementById("no1").value;
        //     let number2=document.getElementById("no2").value;
        //     let operator=document.getElementById("op").value;
        //     let output =document.getElementById("output");
        //     let n1= Number(number1);
        //     let n2= Number(number2);
           
        //     output.innerHTML ="Number 01 : "+number1+"Number 02 : "+number2+ "Oparator : "+operator;
            
        //     let result;
        //     switch (operator) {
        //     case "+":
        //         result=n1+n2;
        //         break;
        //     case "-":
        //         result=n1-n2;
        //         break;
        //     case "/":
        //         result=n1/n2;
        //         break;
        //     case "*":
        //         result=n1*n2;
        //         break;
        //     }
        //     // result=n1-n2;
        //     console.log(operator);
        //     console.log(result);
        //     output.innerHTML ="Result : "+result;

        // }

        function Calc(){
            let display=doucument.getElementById("displaytext").values;
            let lbloutput = document.getElementById("lbloutput");
            let sum=eval(displayText);
            lbloutput.innerHTML=sum;
            alert(sum);

        }