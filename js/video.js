var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video.volume);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol = document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#volumeSlider").addEventListener("change", function () {
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;
	console.log(video.volume)
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate -= .1 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate += .1 * video.playbackRate;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.duration <= video.currentTime + 5){
		console.log("Going back to beginning")
		video.currentTime = 0
	}
	else{
		video.currentTime += 5;
	}
	console.log(video.duration, 5)
	console.log("Current Location is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false){
		video.muted = true;
		let mute = document.querySelector("#mute").innerHTML = "Unmute";
	}
	else {
		video.muted = false;
		let mute = document.querySelector("#mute").innerHTML = "Mute"; 
	}
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Grayscale");
	document.getElementById("myVideo").className = "oldTime";
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	document.getElementById("myVideo").className = "";
});


