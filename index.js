document.querySelector('.hand').addEventListener('click', event => {
	event.target.innerHTML = `✋`
	document.querySelector('.mic').style = `--drop: 60vh; --spin: 900deg`
})