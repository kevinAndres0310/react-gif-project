import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = newCategory => {
		// Verificar si el valor del input no está vacío
		if (categories.includes(newCategory)) return;

		setCategories([newCategory, ...categories]); // Agregar la nueva categoría al estado de categorías
	};

	return (
		<>
			<h1>GifExpertApp</h1>

			<AddCategory
				//setCategories={setCategories}
				onNewCategory={value => onAddCategory(value)}
			/>

			{/* Listado de Gitf */}

			{categories.map(category => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
