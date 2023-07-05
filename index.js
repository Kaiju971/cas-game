let global = [0,0];
let round = [0,0]; 
let joueur=1;
let hold = false;	
let fin = false;

const round1HTML = document.querySelector(".round1");
const round2HTML = document.querySelector(".round2");
const global1HTML = document.querySelector(".global1");
const global2HTML = document.querySelector(".global2");
const hand = document.querySelector(".hand");


const audio = new Audio("./sound/sound-dés.mp3");

const buttonHand =  document.querySelector(".hand");
buttonHand.addEventListener('click', event => {
	event.preventDefault;
	event.target.innerHTML = `✋`;
	
	document.querySelector(".dé").classList.remove("anim");
	setTimeout(1000);
	document.querySelector(".dé").classList.add("anim");
	
	document.querySelector(".dé").style.display = "inline-block";
	document.querySelector(".dé").style.transform = "translate(0,200px) rotate(900deg)"; 
	
	
	setTimeout(()=>{
		event.target.innerHTML = `👊`;
		
		document.querySelector(".dé").style.display = "none";
		document.querySelector(".dé").style.transform = ""; 
		
	},1000);
	
	
	
	changeJoueur();
	console.log("joueur " + joueur);
	if (fin) alert("partie finie, retenter votre chance!") 
 	else {
		// playAudio();
		clickSurBouton(joueur);
	}
  })

//   function initLaMain(){
// 	hand.innerHTML = `✋`;
// 	dé.style = `--drop: 30vh; --spin: 900deg`;
// 	dé.style.opacity="1";
//   }

  function playAudio(){
	audio.play();
 }

  const buttonHold =  document.querySelector(".hold");
  buttonHold.addEventListener("click",clickSurButtonHold );

function clickSurButtonHold(){
	
	if (round[joueur-1]===1 || hold) {
		alert("ce n'est plus votre tour!");
		return;
	}else{
		global[joueur-1]+=round[joueur-1];
		if(joueur===1) global1HTML.innerHTML = "GLOBAL: " + global[0];
		else global2HTML.innerHTML = "GLOBAL: " + global[1];
		console.log("fin de course");
		round[joueur-1]=0;
	}
	hold = true;
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
	 if(global[0]>=10 && !fin){
		alert("joueur1 à gagné !");
		fin=true;
		// setTimeout(3000, initialisation());	
	 }
	 			
		else if(global[1]>=10 && !fin){
			alert("joueur2 à gagné !");
			fin=true;
			// setTimeout(3000, initialisation());	
		}
		 
		
	}	
	
}

function initialisation(){
	global = [0,0];
	round = [0,0]; 
	joueur=1;
	hold = false;	
	fin = false;
	global1HTML.innerHTML = "GLOBAL: " + global[0];
	global2HTML.innerHTML = "GLOBAL: " + global[1];
	round1HTML.innerHTML = "ROUND: " + round[0];
	round2HTML.innerHTML = "ROUND: " + round[1];
}

const buttonJouer =  document.querySelector(".init");
buttonJouer.addEventListener("click",initialisation );


// 		//Jouer la bande son//

	// const audio = new Audio("sound-dés.mp3");
	
// 			//Quand la bande son est chargée, lancer le son
	audio.addEventListener("canplaythrough",function(){
		audio.play()
 	})

	audio.addEventListener("ended",function(){
 			//Quand la bande son est finie, afficher l'image

 			//Récupère l'image
 	const image = document.getElementById(".dé")

 				//Ajouter l'attribut source avec le résultat
 	image.src = " images/dé" + resultat + ".png"
 		})
	


// // 			//Récupérer le bouton
// // 	const buttonLancer = document.getElementById("hand")

// // 	/*Executer le lancer de dé lors du clic*/
// // buttonLancer.addEventListener("click",clickSurBouton)








	