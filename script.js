const HLA_G_valueEl = document.getElementById('HLA_G_value')
const KRT6A_valueEl = document.getElementById('KRT6A_value')
const LOC105378751_valueEl = document.getElementById('LOC105378751_value')
const NTRK3_valueEl = document.getElementById('NTRK3_value')
const RASSF6_valueEl = document.getElementById('RASSF6_value')
const ROBO4_valueEl = document.getElementById('ROBO4_value')
const SEZ6L_valueEl = document.getElementById('SEZ6L_value')
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
    const HLA_G_value = +HLA_G_valueEl.value
    const KRT6A_value = +KRT6A_valueEl.value
    const LOC105378751_value = +LOC105378751_valueEl.value
    const NTRK3_value = +NTRK3_valueEl.value
    const RASSF6_value = +RASSF6_valueEl.value
	const ROBO4_value = +ROBO4_valueEl.value
	const SEZ6L_value = +SEZ6L_valueEl.value
	

    resultEl.innerText = generateResult(HLA_G_value , KRT6A_value, LOC105378751_value, NTRK3_value, RASSF6_value, ROBO4_value, SEZ6L_value)
})

function generateResult(HLA_G_value , KRT6A_value, LOC105378751_value, NTRK3_value, RASSF6_value, ROBO4_value, SEZ6L_value) {
	
	let generatedPassword = 'HLA_G_points:' + (HLA_G_value * 0.8457) + '\n'
	+ 'KRT6A_points:' + (KRT6A_value * 0.6812 - 1e-10) + '\n'
	+ 'LOC105378751_points:' + (LOC105378751_value * 1.3234 - 5e-10) + '\n'
	+ 'NTRK3_points:' + (NTRK3_value * 4.7261 - 1e-09) + '\n'
	+ 'RASSF6_points:' + (RASSF6_value * (-0.4312) + 12.074) + '\n'
	+ 'ROBO4_points:' + (ROBO4_value *  2.3901 - 1e-09) + '\n'
	+ 'SEZ6L_points:' + (SEZ6L_value * 2) + '\n'

    const finalResult = generatedPassword

    return finalResult
}
