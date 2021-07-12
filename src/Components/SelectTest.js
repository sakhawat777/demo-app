import React from 'react';

const SelectTest = () => {
	return (
		<div>
			<select name='choice' defaultValue='second'>
				<option value='first'>Dhaka</option>
				<option value='second'>Rajshahi</option>
				<option value='third'>CTG</option>
				<option value='four'>Syhlet</option>
			</select>
		</div>
	);
};

export default SelectTest;
