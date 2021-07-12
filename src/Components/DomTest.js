import React from 'react';
import ReactDOM from 'react-dom';
const DomTest = () => {
	const myChange = () => {
		var img = document.getElementById('imgID');
		ReactDOM.findDOMNode(img).src = 'img2.jpg';
	};

	return (
		<div>
			<img id='imgID' src='img1.jpg'></img> <br></br>
			<button onClick={myChange}> Change Image</button>
		</div>
	);
};

export default DomTest;
