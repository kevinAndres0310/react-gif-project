import PropTypes from 'prop-types';

export const GifGridItem = ({ title, url }) => {
	return (
		<div className='card'>
			<img src={url} alt={title} /> <p>{title}</p>
		</div>
	);
};

export default GifGridItem;

GifGridItem.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string,
};
