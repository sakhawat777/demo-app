import React from 'react';
import ReactDOM from 'react-dom';

const ReactDomTest = () => {
	const myFun = () => {
		var contrainer = document.getElementById('myID');
		var element = <h2>Sakhawat</h2>;
		var callback = function () {
			alert('Hi I am from callback');
		};
		ReactDOM.render(element, contrainer, callback);
	};

	return (
		<div>
			<h2 id='myID'>Biplob</h2>
			<button onClick={myFun}>Change</button>
		</div>
	);
};

export default ReactDomTest;
