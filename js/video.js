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
	console.log(this);
	console.log(this.value);
	let vol = document.querySelector("#volume").innerHTML = this.value + "%";
	video.volume = this.value / 100;
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	video.playbackRate -= .1;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	video.playbackRate += .1;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip");
	video.currentTime += 5;
	console.log(video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted == false){
		video.muted = true;
		let mute = document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Muted");
	}
	else {
		video.muted = false;
		let mute = document.querySelector("#mute").innerHTML = "Mute"; 
		console.log("Unmuted");
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


