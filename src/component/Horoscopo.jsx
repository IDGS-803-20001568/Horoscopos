// import React, { useState } from 'react'
import { useState } from 'react';
import './Horoscopo.css';

const horoscopos = [
  {
    name: 'Aries',
    img: 'https://cdn-icons-png.flaticon.com/512/47/47290.png',
    start: '21/03',
    end: '19/04',
    description: 'Los Aries son valientes, enérgicos y siempre dispuestos a nuevos retos.'
  },
  {
    name: 'Tauro',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo0kLVMb7Kvhcvx-5M_ouXoCgBFODgmjZVXA&s',
    start: '20/04',
    end: '20/05',
    description: 'Los Tauro son confiables, decididos y prácticos, con una gran capacidad para resistir.'
  },
  {
    name: 'Géminis',
    img: 'https://static.vecteezy.com/system/resources/previews/004/607/647/original/gemini-zodiac-sign-symbol-simple-free-vector.jpg',
    start: '21/05',
    end: '20/06',
    description: 'Los Géminis son comunicativos, inteligentes y muy adaptables.'
  },
  {
    name: 'Cáncer',
    img: 'https://img.freepik.com/vector-premium/icono-linea-negra-cancer-signo-esoterico-zodiaco_53562-16172.jpg',
    start: '21/06',
    end: '22/07',
    description: 'Los Cáncer son emocionales, protectores y muy empáticos con los demás.'
  },
  {
    name: 'Leo',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZApiGZAkIAtDdOmYdAz2BS2mSos_zrEK0pQ&s',
    start: '23/07',
    end: '22/08',
    description: 'Los Leo son confiados, extrovertidos y líderes naturales que disfrutan ser el centro de atención.'
  },
  {
    name: 'Virgo',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Virgo.svg/768px-Virgo.svg.png',
    start: '23/08',
    end: '22/09',
    description: 'Los Virgo son analíticos, prácticos y perfeccionistas, con gran atención al detalle.'
  },
  {
    name: 'Libra',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_JO7i9ZGrxj29F_A6N5O6LEchPcnCU6qQhg&s',
    start: '23/09',
    end: '22/10',
    description: 'Los Libra son diplomáticos, sociables y buscan la armonía en todas sus relaciones.'
  },
  {
    name: 'Escorpio',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2AWDj1iLtXc46L44WxGuR5dyGXdwsMRNGiA&s',
    start: '23/10',
    end: '21/11',
    description: 'Los Escorpio son intensos, apasionados y con gran determinación para lograr sus metas.'
  },
  {
    name: 'Sagitario',
    img: '',
    start: '22/11',
    end: '21/12',
    description: 'Los Sagitario son aventureros, optimistas y siempre buscan expandir sus horizontes.'
  },
  {
    name: 'Capricornio',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsL45X_nUWQIJuLF0LgszFK3hNCa4qfuPM8g&s',
    start: '22/12',
    end: '19/01',
    description: 'Los Capricornio son ambiciosos, disciplinados y siempre enfocados en sus objetivos.'
  },
  {
    name: 'Acuario',
    img: 'https://cdn-icons-png.flaticon.com/512/47/47246.png',
    start: '20/01',
    end: '18/02',
    description: 'Los Acuario son originales, humanitarios y valoran su independencia.'
  },
  {
    name: 'Piscis',
    img: 'https://previews.123rf.com/images/klim2011/klim20111509/klim2011150900007/44670952-signo-zodiacal-piscis-ilustraci%C3%B3n-vectorial.jpg',
    start: '19/02',
    end: '20/03',
    description: 'Los Piscis son compasivos, artísticos y muy intuitivos, conectados con sus emociones.'
  }
];


const Horoscopo = () => {
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [signo, setSigno] = useState(null);

  const handleChange = (e) => {
    setFechaNacimiento(e.target.value);
  };

  const calcularHoroscopo = () => {
    const [anio, mes, dia] = fechaNacimiento.split('-').map(Number);

    const signoEncontrado = horoscopos.find((horoscopo) => {
      const [startDia, startMes] = horoscopo.start.split('/').map(Number);
      const [endDia, endMes] = horoscopo.end.split('/').map(Number);
      
      if ((mes === startMes && dia >= startDia) || (mes === endMes && dia <= endDia)) {
        return horoscopo;
      }
      return false;
    });

    setSigno(signoEncontrado || null);
  };

  return (
    <div className="horoscopo-container">
      <div className="form-container">
        <h3>Ingresa tu fecha de nacimiento:</h3>
        <input 
          type="date" 
          value={fechaNacimiento} 
          onChange={handleChange} 
          className="input-date" 
        />
        <button onClick={calcularHoroscopo}>Ver Horóscopo</button>
      </div>

      {signo && (
        <div className="resultado-container">
          <img src={signo.img} alt={signo.name} />
          <h3>{signo.name}</h3>
          <p>{signo.start} - {signo.end}</p>
          <p>{signo.description}</p>
        </div>
      )}
    </div>
  );
};

export default Horoscopo;
