let global = [0,0];
let round = [0,0]; 
let joueur=1;
let hold = false;	

const round1HTML = document.querySelector(".round1");
const round2HTML = document.querySelector(".round2");
const global1HTML = document.querySelector(".global1");
const global2HTML = document.querySelector(".global2");

const buttonHand =  document.querySelector(".hand");
buttonHand.addEventListener('click', event => {
 	event.target.innerHTML = `✋`
  	document.querySelector('.mic').style = `--drop: 60vh; --spin: 900deg`;
	  changeJoueur();

	console.log("joueur " + joueur);
 	clickSurBouton(joueur);
  })

  const buttonHold =  document.querySelector(".hold");
  buttonHold.addEventListener("click",clickSurButtonHold );

function clickSurButtonHold(){
	hold = true;
	if (round[joueur-1]===1 ) {
		alert("ce n'est plus votre tour!");
		return;
	}else{
		global[joueur-1]+=round[joueur-1];
		if(joueur===1) global1HTML.innerHTML = "GLOBAL: " + global[0];
		else global2HTML.innerHTML = "GLOBAL: " + global[1];
		console.log("fin de course");
		round[joueur-1]=0;
	}
	
	final();
}

function changeJoueur(){
	console.log(hold);
	if (hold && joueur===1) joueur = 2;
	else if (hold && joueur===2) joueur = 1;
	else if(global[0]===0 && round[0]===1 && round[1]!==1) joueur=2;
	
	hold=false;	
}

  function clickSurBouton(joueur){
	//Lancer le dé virtuel et récupérer le résultat
 	round[joueur-1] = lancerDe();
    if(joueur===1)round1HTML.innerHTML = "ROUND: " + round[0];
	else round2HTML.innerHTML = "ROUND: " + round[1];
	if (round[joueur-1]===1 ){
		hold = true;
		console.log("fin de course");
	}
	final();
}	
			
//fonction qui génère un nombre aléatoire//
//retourne le nombre//
 function lancerDe() {
 	//générer un nombre entre 1 et 6
 	const nombreDécimal = (Math.random () * 6 ) + 1;
 	const nombre = Math.trunc (nombreDécimal);
	 console.log(nombre);
 	return nombre;
 }

 function final(){
	if(global[1]>0) {
	 if(global[0]>=20)alert("joueur1 à gagné !");			
		else if(global[1]>=20) alert("joueur2 à gagné !");
	}		
}


// 		//Jouer la bande son//

// 	const audio = new Audio("sound-dés.mp3");
	
// 			//Quand la bande son est chargée, lancer le son
// 	audio.addEventListener("canplaythrough",function(){
// 		audio.play()
// 	})

// 	audio.addEventListener("ended",function(){
// 			//Quand la bande son est finie, afficher l'image

// 			//Récupère l'image
// 	const image = document.getElementById("images-dé")

// 				//Ajouter l'attribut source avec le résultat
// 	image.src = " imgages/dé" + resultat + ".png"
// 		})
	


// // 			//Récupérer le bouton
// // 	const buttonLancer = document.getElementById("hand")

// // 	/*Executer le lancer de dé lors du clic*/
// // buttonLancer.addEventListener("click",clickSurBouton)








	