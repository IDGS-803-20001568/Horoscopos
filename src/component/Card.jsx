// import React from 'react' 
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ lang, img, fcolor, scolor }) => {
  return (
    <div 
        className='card'
        style={{ 
          background: `linear-gradient(to left, ${fcolor}, ${scolor})` 
        }}>
        <img src={img} alt={`${lang}.svg`} />
        <h3>{lang}</h3>
    </div>
  )
}

// Definición de los propTypes del componente Card
Card.propTypes = {
    lang: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    fcolor: PropTypes.string.isRequired,
    scolor: PropTypes.string.isRequired
};

export default Card;
