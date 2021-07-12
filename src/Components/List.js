import React from 'react';

const List = () => {
	const myArray = ['Bangladesh', 'India', 'England', 'America'];
	const selectData = myArray.map((myData, index) => {
		return (
			<div key={index}>
				<li>{myData}</li>;
			</div>
		);
	});
	return (
		<div>
			<ol>{selectData}</ol>
		</div>
	);
};

export default List;
