export const getGifs = async category => {
	try {
		const url = `https://api.giphy.com/v1/gifs/search?api_key=SJupkaxcxxWePERRYU0w2J2Aal0SDn27&q=${category}&limit=10`;
		const resp = await fetch(url);
		const { data } = await resp.json();

		const gifs = data.map(img => ({
			id: img.id,
			title: img.title,
			url: img.images.downsized_medium.url,
		}));

		return gifs;
	} catch (error) {
		console.error('Error fetching gifs:', error);
		// Puedes devolver un valor predeterminado o lanzar el error para que sea manejado en un nivel superior
		throw error;
	}
};
