class Calculator{
			constructor(previous, current){
				this.previous = previous;
				this.current = current;
				this.clearAll();
				this.result = '';
			}

			set Rresult(r){
				this.result = r;
			}

			get Rresult(){
				return this.result;
			}

			compute(){
				const fst = this.previous.innerText.split('').slice(0,-1).join('');
				const op = this.previous.innerText.split('').slice(-1).join('');
				const scn = this.current.innerText;

				switch(op){
				case '+':
					this.Rresult = Number(fst) + Number(scn);
					break;
				case '÷':
					this.Rresult = Number(fst) / Number(scn);
					break;
				case 'x':
					this.Rresult = Number(fst) * Number(scn);
					break;
				case '-':
					this.Rresult = Number(fst) - Number(scn);
					break;
				default:
					return;
			}

			this.current.innerText = this.Rresult;
			this.previous.innerText = '';
		}	


			chooseOp(n){
				this.current.innerText = '';
				this.previous.innerText = this.Rresult + n.innerText;
				this.Rresult = '';
			}

			updateDisplay(b){
				//setResult(b.innerText)
				this.result += b.innerText;
				this.current.innerText = this.Rresult;
			}

			clearAll(){
				this.current.innerText = '';
				this.previous.innerText = '';
				this.Rresult = '';
			}

		}

		const previous = document.getElementById('previous');
		const current = document.getElementById('current');
		const opButton = document.querySelectorAll('[data-operation]');
		const numberButton = document.querySelectorAll('[data-number]');
		const delButton = document.querySelector('[data-del]');
		const equalButton = document.querySelector('[data-equal]');
		const clearButton = document.querySelector('[data-clearAll]');

		let calculator = new Calculator(previous,current);

		numberButton.forEach((b) => b.addEventListener('click', function() {
			calculator.updateDisplay(b);
		}))

		opButton.forEach((b) => b.addEventListener('click', function() {
			calculator.chooseOp(b);
		}))

		clearButton.addEventListener('click', function(){
			calculator.clearAll();
		});

		equalButton.addEventListener('click', function(){
			calculator.compute();
		});