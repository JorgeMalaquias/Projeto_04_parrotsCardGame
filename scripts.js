/*minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}*/
let numeroDeCartas = Number(prompt("Com quantas cartas você gostaria de jogar?"));
while(!(numeroDeCartas<=14 && numeroDeCartas>=4 && numeroDeCartas%2===0)){
	numeroDeCartas = Number(prompt("Com quantas cartas você gostaria de jogar?"));
}
let cartasSelecionadas = 0;
let cartasPareadas = 0;
let jogadas = 0;

function selecionarCarta(carta){
	if((!carta.classList.contains("deuMatch")) && cartasSelecionadas<2){
		jogadas++;
		carta.classList.toggle("selecionada");
		cartasSelecionadas++;
	}
	if(cartasSelecionadas===2){
		let img = document.querySelectorAll(".selecionada .figura");
		
		if(img[0].src===img[1].src){
			setTimeout(parearCartas, 1000);
		}else{
			setTimeout(desvirarCartas, 1000);
		}
		
	}
}
function parearCartas(){
	document.querySelector(".selecionada").classList.add("deuMatch");
	document.querySelector(".selecionada").classList.remove("selecionada");
	document.querySelector(".selecionada").classList.add("deuMatch");
	document.querySelector(".selecionada").classList.remove("selecionada");
	cartasSelecionadas = 0;
	cartasPareadas += 2;
	if(cartasPareadas===numeroDeCartas){
		alert(`Você ganhou em ${jogadas} jogadas!`);
	}
}
	
function desvirarCartas(){
	document.querySelector(".selecionada").classList.remove("selecionada");
	document.querySelector(".selecionada").classList.remove("selecionada");
	cartasSelecionadas = 0;
}
	
	/*se outra carta for igual
	carta.classList.add("deuMatch");
	*/
	
