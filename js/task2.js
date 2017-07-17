var ask = confirm('Чи бажаєте почати гру?'),
	prise = 10,
	randomNumber = Math.ceil(Math.random()*5),
	isContinue = true,
	askNumber, askContinue, randomNumber;

do {
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
				continue;
			} else {
				alert(`ваш виграш становать ${prise}$`)
				isContinue = false;
				break;
			}
	} else {
		askNumber = parseInt(prompt("Не вгадали! Маєте ще 2 спроби", askNumber));
			if(randomNumber === askNumber) {
				alert(`Вітаємо! Ваш виграш становить ${prise / 2}`)
				askContinue = confirm("Бажаєте продовжити?");
					if(askContinue) {
						prise *= 3;
						continue;
					} else {
						alert(`Ваш виграш становить ${prise / 2}`)
						isContinue = false;
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
						isContinue = false;
						break;
					}
				}
			}
		alert (`Ваш виграш становить - 0$`);
		askContinue = confirm("Бажаєте продовжити?"); 
			if (askContinue) {
				continue;
			} else {
				alert(`Допобачення!`);
				isContinue = false;
			}
	}
	randomNumber = randomNumber * 2;
	console.log(randomNumber);
} while(isContinue);
console.log(ask);
console.log(randomNumber);
console.log(askNumber);
