btnAdd.onclick=function(){
  let  num1 = Number(inptNumber1.value)
  let  num2 = Number(inptNumber2.value)
  let sum = num1 + num2
  lblResult.value = "The answer is " + sum
}
btnMultiply.onclick=function(){
  let num1 = Number(inptNumber1.value)
  let num2 = Number(inptNumber2.value)
  let multiply = num1 * num2
  lblResult.value = "The answer is " + multiply
}

btnReset.onclick=function(){
  lblResult.value = ""
}