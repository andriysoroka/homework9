var ask = confirm('Чи бажаєте почати гру?'),
	prise = 10,
	askNumber, askContinue, randomNumber;

for(let i = 0; i < 1000; i++) {
	randomNumber = Math.ceil(Math.random()*5);
	if(ask) {
		askNumber = parseInt(prompt("Супер! Тоді почнімо! У вас є лише 3 спроби! Введіть випадкове число", askNumber));
	} else {
		alert("Сьогодні ви не виграли мільйон, а могли(");
	}
	if(randomNumber === askNumber) {
		alert(`Вітаємо ваш виграш становить ${prise}$`)
		askContinue = confirm("Бажаєте продовжити?");
			if(askContinue) {
				prise *= 3;
				i++;
			} else {
				alert(`ваш виграш становать ${prise}$`)
				break;
			}
	} else {
		askNumber = parseInt(prompt("Не вгадали! Маєте ще 2 спроби", askNumber));
			if(randomNumber === askNumber) {
				alert(`Вітаємо! Ваш виграш становить ${prise / 2}`)
				askContinue = confirm("Бажаєте продовжити?");
					if(askContinue) {
						prise *= 3;
						break;
					} else {
						alert(`Ваш виграш становить ${prise / 2}`)
						break;
					}
			} else {
				askNumber = parseInt(prompt("Не вгадали! Маєте останюю спробу!", askNumber));
					if(randomNumber === askNumber) {
						alert(`Вітаємо! Ваш виграш становить ${prise / 5}`)
						askContinue = confirm("Бажаєте продовжити?");
					if(askContinue) {
						prise *= 3;
						continue;
					} else {
						alert(`Ваш виграш становить ${prise / 5}`)
						break;
					}
				}
			}
		alert (`Ваш виграш становить - 0$`);
		askContinue = confirm("Бажаєте продовжити?"); 
			if (askContinue) {
				i++;
			} else {
				alert(`Допобачення!`);
				break;
			}
	}
	randomNumber = Math.ceil(Math.random()*5)*2;
	console.log(randomNumber);
	console.log(askNumber);
}
