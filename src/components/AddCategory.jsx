import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
	const [inputValue, setInputValue] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		const value = inputValue.trim();
		if (value.length <= 1) {
			return;
		}
		onNewCategory(value);
		setInputValue('');
	};

	return (
		<form action='myForm' onSubmit={handleSubmit}>
			<input
				type='text'
				name='searchInput'
				id='searchInput'
				value={inputValue}
				onChange={e => setInputValue(e.target.value)}
			/>
		</form>
	);
};

export default AddCategory;

AddCategory.propTypes = {
	onNewCategory: PropTypes.func,
};
