	let numeros = [97, 45, 49, 32, 2, 5, 9, 99, 1, 7];

			function bubble(vetNum) {
				let ultima;
				for (let c = 0; c < vetNum.length; c++) {
					for (let c2 = 0; c2 < vetNum.length; c2++) {
						if (vetNum[c] < vetNum[c2]) {
							ultima = vetNum[c];
							vetNum[c] = vetNum[c2];
							vetNum[c2] = ultima;
						}
					}
				}
				return vetNum;
			}

			// Chama a função e atualiza o vetor original
			numeros = bubble(numeros);

			// Exibe usando forEach
			numeros.forEach((num, i) => {
				console.log(num);
			});
			
			bubble();