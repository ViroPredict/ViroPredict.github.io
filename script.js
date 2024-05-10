const SEZ6_valueEl = document.getElementById('SEZ6_value')
const AKR1C1_valueEl = document.getElementById('AKR1C1_value')
const LILRA5_valueEl = document.getElementById('LILRA5_value')
const NCKAP5_valueEl = document.getElementById('NCKAP5_value')
const SETD9_valueEl = document.getElementById('SETD9_value')
const calculateEl = document.getElementById('calculate')
const clipboardEl = document.getElementById('clipboard')
const resultEl = document.getElementById('result')


clipboardEl.addEventListener('click', () => {
    const resultext = resultEl.innerText;
  if (!resultext) {
    return;
  }
  navigator.clipboard.writeText(resultext);
    alert('resultext copied to clipboard!')
})

calculateEl.addEventListener('click', () => {
    const SEZ6_value = +SEZ6_valueEl.value
    const AKR1C1_value = +AKR1C1_valueEl.value
    const LILRA5_value = +LILRA5_valueEl.value
    const NCKAP5_value = +NCKAP5_valueEl.value
    const SETD9_value = +SETD9_valueEl.value
	

    resultEl.innerText = generateResult(SEZ6_value , AKR1C1_value, LILRA5_value, NCKAP5_value, SETD9_value)
})

function generateResult(SEZ6_value , AKR1C1_value, LILRA5_value, NCKAP5_value, SETD9_value) {

    let SEZ6_points = SEZ6_value * (-2.2222) + 100
    let AKR1C1_points = AKR1C1_value * 0.0418 + 2e-15
    let LILRA5_points = LILRA5_value * 2.4875 + 7e-15
    let NCKAP5_points = NCKAP5_value * 1.543  - 2e-07
    let SETD9_points = SETD9_value * 0.7337  - 2e-07
    let total_points = SEZ6_points + AKR1C1_points + LILRA5_points + NCKAP5_points + SETD9_points 
	var benefit = ''
	
	if(total_points <= 101.90396){
		benefit = 'high-benefit'
	}
	else{
		benefit = 'low-benefit'
	}
	
    let generatedPassword = 'SEZ6_points:' + SEZ6_points + '\n'
	+ 'AKR1C1_points:' + AKR1C1_points + '\n'
	+ 'LILRA5_points:' + LILRA5_points + '\n'
	+ 'NCKAP5_points:' + NCKAP5_points + '\n'
	+ 'SETD9_points:' + SETD9_points + '\n'
	+ 'total_points:' + total_points + '\n'
	+ benefit

    const finalResult = generatedPassword

    return finalResult
}
