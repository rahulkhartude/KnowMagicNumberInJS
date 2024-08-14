
let num = Math.random()
let userPrediNum = []
num = (Math.round(100*num))
console.log(num)

let failInfo = ''
let yourScore = 0
function verifyNumber()
{
    // let userNumber = document.getElementsByClassName("inputNumber")[0].value
    let userNumber = document.getElementById("inputNumber").value
     console.log(userNumber)
     userPrediNum.push(userNumber)
    
    console.log(userNumber == num)
    
    if (userNumber == num)
        {
            // console.log(100-userNumber)
             document.getElementsByClassName("result")[0].innerHTML = `<h2>You win</h2> and Your Score is ${100-userPrediNum.length}`
        }
        else {
            userNumber > num? failInfo =`Magic Number is Less than ${userNumber} `: failInfo =`Magic Number is greater than ${userNumber} `
            document.getElementsByClassName("result")[0].innerHTML = `<h2 style=color:red>${failInfo}</h2>`
            document.getElementsByClassName("inputNumber")[0].value = ""
        }
        
}