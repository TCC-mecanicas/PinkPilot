import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

import Atendimentos from '../../public/atend.svg'

const mecanicas = [
    {
      id: 1,
      name: 'Jacar Pneus',
      type: 'Centro Automotivo',
      location: 'Juiz de Fora - MG',
      rating: 9.88,
      reviews: 803,
      Banner: 'jacar.svg',
      Logo: 'logoJacar.svg'
    },
    {
      id: 2,
      name: 'ABC Pneus',
      type: 'Centro Automotivo',
      location: 'Rio de Janeiro - RJ',
      rating: 9.78,
      reviews: 752,
      Banner: 'ABC.svg',
      Logo: 'logoABC.svg'
    },
    {
      id: 3,
      name: 'Impacto Prime',
      type: 'Centro Automotivo',
      location: 'Jussara - GO',
      rating: 9.77,
      reviews: 537,
      Banner: 'Impacto.svg',
      Logo: 'logoImpacto.svg'
    },
    {
      id: 4,
      name: 'Stradale',
      type: 'Centro Automotivo',
      location: 'São Paulo - SP',
      rating: 9.71,
      reviews: 940,
      Banner: 'Stradale.svg',
      Logo: 'logoStradale.svg'
    },
    {
      id: 5,
      name: 'Oficcina',
      type: 'Centro Automotivo',
      location: 'São Paulo - SP',
      rating: 9.96,
      reviews: 940,
      Banner: 'Oficcina.svg',
      Logo: 'logoOficcina.svg'
    },
    {
      id: 6,
      name: 'High Torque Store',
      type: 'Centro Automotivo',
      location: 'São Paulo - SP',
      rating: 9.69,
      reviews: 940,
      Banner: 'Torque.svg',
      Logo: 'logoTorque.svg'
    },
    {
      id: 7,
      name: 'Auto Force',
      type: 'Centro Automotivo',
      location: 'São Paulo - SP',
      rating: 9.45,
      reviews: 940,
      Banner: 'AutoForce.svg',
      Logo: 'logoAutoForce.svg'
    },
    {
      id: 8,
      name: 'Land Chardeli',
      type: 'Centro Automotivo',
      location: 'São Paulo - SP',
      rating: 9.23,
      reviews: 940,
      Banner: 'Chardeli.svg',
      Logo: 'logoChardeli.svg'
    },
    {
      id: 9,
      name: 'Miscar',
      type: 'Centro Automotivo',
      location: 'Dracena - SP',
      rating: 9.72,
      reviews: 591,
      Banner: 'Miscar.svg',
      Logo: 'logoMiscar.svg'
    }
];

function PageMecanica() {
    const { id } = useParams(); 
    const [mecanica, setMecanica] = useState(null);
  
    useEffect(() => {
      const foundMecanica = mecanicas.find((mecanica) => mecanica.id === parseInt(id));
      setMecanica(foundMecanica);
    }, [id]);
  
    const navigate = useNavigate();
    const voltar = () => {
      navigate(-1); 
    };
  
    if (!mecanica) {
      return <div>Mecânica não encontrada</div>;
    }
    
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#951b4a',
        }
      });
    
    const StyledDivider = styled(Divider)({
        borderColor: '#951b4a', // Define a cor da borda (cor da linha do Divider)
    });

    return (
      <>
        <hr className="h-px border-0 bg-rosinha  "></hr>
        <div className="container mx-auto p-6">
          <button onClick={voltar} className="text-margentinha p-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="col-span-1">
              <img src={`../../public/${mecanica.Banner}`} alt={mecanica.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
  
            <div className="col-span-1">
              <h1 className="text-3xl font-bold text-gray-800">{mecanica.name}</h1>
              <h2 className="text-xl font-bold text-margentinha mt-2">Sobre nós:</h2>
              <h3 className="text-lg text-gray-600 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor justo sit amet luctus mollis. Aenean blandit justo nec dolor pulvinar, a aliquam dui blandit. Integer luctus, massa a mattis scelerisque, dolor urna fermentum arcu, at accumsan libero est sed tellus. Nunc nec metus eleifend, tincidunt quam luctus, mollis leo. Vestibulum ut dui turpis. Ut non nulla feugiat, aliquam nulla nec, feugiat lectus. </h3>
            </div>   
            </div>

            <div className="flex items-center h-24">
                <div className="flex flex-col justify-center ml-2 mr-5">
                    <p className="text-lg font-bold">Avaliações:</p>
                    <div className="flex items-center mt-1">
                    <StyledRating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly size="large" />
                    </div>
                </div>
                <StyledDivider orientation="vertical" variant="middle" flexItem />
                <div className="flex flex-col justify-center ml-6">
                    <p className="text-lg font-bold">Atendimentos feitos:</p>
                    <div className="flex items-center mt-1">
                    <img src={Atendimentos} className="w-10" />
                    <p className="text-lg ml-2 font-bold text-margentinha">{mecanica.reviews}</p>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <h1 className="text-2xl font-bold text-margentinha">Localização:</h1>
                <p className="text-gray-600 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
            </div>
        </div>
      </>
    );
  }
  
  export default PageMecanica;

