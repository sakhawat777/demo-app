import React from 'react';

const JsonList = () => {
	const dataArray = [
		{
			city: 'Raj',
			zip: 6000,
		},
		{
			city: 'Dha',
			zip: 7000,
		},
		{
			city: 'CTG',
			zip: 5000,
		},
	];
	const jsonData = dataArray.map((pasData, index) => {
		return <option key={index}>{pasData.city}</option>;
	});
	const jsonDataList = dataArray.map((pashData, index) => {
		return <option key={index}>{pashData.zip}</option>;
	});
	return (
		<div>
			<select>{jsonData}</select>
			<select>{jsonDataList}</select>
		</div>
	);
};

export default JsonList;
