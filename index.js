"use strict"

			//fonction qui génère un nombre aléatoire//
			//retourne le nombre//
const lancerDe = function () {
	//générer un nombre entre 1 et 6
	const nombreDécimal = (Math.random () * 6 ) + 1
	const nombre = Math.trunc (nombreDécimal)

			//retourner le nombre
	return nombre
}

const clickSurBouton = Function()
			//Lancer le dé virtuel et récupérer le résultat
	const resultat = lancerDe('hand')

			//Jouer la bande son//
	const audio = new Audio("sound-dés.mp3")

			//Quand la bande son est chargée, lancer le son
	audio.addEventListener("canplaythrough",function(){
		audio.play()
	})

	audio.addEventListener("ended",function()){
			//Quand la bande son est finie, afficher l'image

			//Récupère l'image
const image = document.getElementById("image-dé")

			//Ajouter l'attribut source avec le résultat
image.src = " imgages/dés" + resultat + ".png"
	}
	


			//Récupérer le bouton
	const buttonLancer = document.getElementById("bouton-lancer")

	/*Executer le lancer de dé lors du clic*/
buttonLancer.addEventListener("click",clickSurBouton)

document.querySelector('.hand').addEventListener('click', event => {
 	event.target.innerHTML = `✋`
 	document.querySelector('.mic').style = `--drop: 60vh; --spin: 900deg`
 })
	



// document.querySelector('.hand').addEventListener('click', event => {
// 		event.target.innerHTML = `✋`
// 		document.querySelector('.mic').style = `--drop: 60vh; --spin: 900deg`

// 	})

	// let dé1 = 0;
	// let dé2 = 0;
	// function hand(){

	// }