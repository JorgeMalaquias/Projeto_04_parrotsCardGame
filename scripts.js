/*minhaArray.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() { 
	return Math.random() - 0.5; 
}*/


function selecionarCarta(carta){
	if(!carta.classList.contains("deuMatch")){
		carta.classList.toggle("selecionada");
	}

	
	/*se outra carta for igual
	carta.classList.add("deuMatch");
	*/
	
}