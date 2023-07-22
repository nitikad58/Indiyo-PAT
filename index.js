//  to make vedios pause and play onlu one at a time
var videos = document.querySelectorAll('video');
for (var i = 0; i < videos.length; i++)
	videos[i].addEventListener(
		'play',
		function () {
			pauseAll(this);
		},
		true
	);

function pauseAll(elem) {
	for (var i = 0; i < videos.length; i++) {
		//Is this the one we want to play?
		if (videos[i] == elem) continue;
		//Have we already played it && is it already paused?
		if (videos[i].played.length > 0 && !videos[i].paused) {
			// Then pause it now
			videos[i].pause();
		}
	}
}

// making vedios autoplay one after another in a loop
let videoSource = [
	'./videos/video1.mp4',
	'./videos/video2.mp4',
	'./videos/video3.mp4',
];

let i = 0; // global
const videoCount = videoSource.length;
const element = document.getElementById('videoPlayer');

function videoPlay(videoNum) {
	element.setAttribute('src', videoSource[videoNum]);
	element.autoplay = true;
	element.load();
	element.play();
}
document
	.getElementById('videoPlayer')
	.addEventListener('ended', myHandler, false);

videoPlay(0); // play the video

function myHandler() {
	i++;
	if (i == videoCount) {
		i = 0;
		videoPlay(i);
	} else {
		videoPlay(i);
	}
}
