import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Button, TextField } from '@mui/material';

import { styled } from '@mui/material/styles';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

import { HeartIcon } from '@heroicons/react/solid';

import Atendimentos from '../../public/atend.svg'
import userMarcia from '../../public/avaliacaoMarcia.svg'
import userClaudia from '../../public/avaliacaoClaudia.svg'

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
    const [text, setText] = useState('');

    const handleButtonClick = () => {
      setText(''); 
    };
  
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
        borderColor: '#951b4a',
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
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 ">
            <div className="col-span-1 border-2 border-margentinha rounded-xl">
              <img src={`../../public/${mecanica.Banner}`} alt={mecanica.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
            </div>
  
            <div className="col-span-1">
              <h1 className="text-3xl font-bold text-gray-800"> {mecanica.name}</h1>
              <h2 className="text-xl font-bold text-margentinha mt-4">Sobre nós:</h2>
              <h3 className="text-lg text-gray-600 mt-2">Na {mecanica.name}, somos apaixonados por cuidar de veículos e garantir que nossos clientes estejam sempre seguros nas estradas. Com anos de experiência no mercado, nossa equipe de especialistas oferece serviços de alta qualidade, desde manutenções preventivas até reparos complexos. Prezamos pela transparência e pelo atendimento personalizado, explicando cada detalhe do processo para que você se sinta confiante e bem atendido. Aqui, seu carro está em boas mãos!</h3>
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

            <h1 className="text-2xl font-bold text-margentinha mt-4 mb-10">Localização:</h1>
              <div className="flex justify-between items-center" style={{ height: '450px' }}>
        
              <div className="flex flex-col">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14627.487121081835!2d-46.62231039999999!3d-23.573048099999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-PT!2sbr!4v1727893456024!5m2!1spt-PT!2sbr"
                  width="600"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl border-2 border-margentinha"
                ></iframe>
                
              </div>
              
              <div className="flex flex-col items-center justify-center space-y-6 w-full ml-8">
        
                <div className="border border-rosinha p-6 text-center w-full max-w-sm">
                  <p className="text-xl font-bold text-margentinha">
                    Conhece esta oficina? <br /> Deixe aqui a sua avaliação!!
                  </p>
                  <div className="flex items-center justify-center mt-4 space-x-2">
                    <TextField
                      variant="outlined"
                      placeholder="Digite sua avaliação"
                      size="small"
                      className="w-48"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          '& fieldset': {
                            borderColor: '#d3d3d3', 
                          },
                          '&:hover fieldset': {
                            borderColor: '#e9bdc0', 
                          },
                          '&.Mui-focused fieldset': {
                            borderColor: '#951b4a', 
                          },
                        },
                      }}
                    />
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{
                        borderColor: '#951b4a',
                        color: '#951b4a',
                        '&:hover': {
                          borderColor: '#951b4a',
                          backgroundColor: 'rgba(149, 27, 74, 0.1)',
                        },
                      }}
                      onClick={handleButtonClick} 
                    >
                      OK
                    </Button>
                  </div>
                </div>

                <div className="border border-rosinha p-6 text-center w-full max-w-sm">
                  <p className="text-xl font-bold text-margentinha mb-4">
                    Se interessou? <br /> Entre em contato com a equipe!!
                  </p>
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ForumRoundedIcon />}
                    sx={{
                      backgroundColor: '#951b4a', 
                      color: '#fff', 
                      '&:hover': {
                        backgroundColor: '#7d173d',
                      },
                    }}
                  >
                    Iniciar conversa
                  </Button>
                </div>
              </div>
              
          </div>
          <p className="mt-3 ml-1">{mecanica.location}</p>

          <div className="mt-8 mb-6 flex items-center justify-center space-x-16">
         
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center">
                <img src={userMarcia} alt="" className="w-20 h-20 rounded-full" />
                <h1 className="ml-4 text-margentinha font-bold text-xl">Marcia Mendes</h1>
              </div>
              <p className="mt-4 italic max-w-2xs">
                “Levei meu carro para fazer uma revisão completa na oficina e fiquei extremamente satisfeita com o serviço. A equipe foi muito atenciosa e resolveu todos os problemas do meu veículo com rapidez e eficiência. Além disso, explicaram cada detalhe do que foi feito, algo que eu nunca havia visto antes em outros lugares. Agora meu carro está rodando como novo! Super recomendo.“
              </p>
            </div>
            <StyledDivider orientation="vertical" variant="middle" flexItem className="mx-8" />
            <div className="text-center flex flex-col items-center">
              <div className="flex items-center">
                <img src={userClaudia} alt="" className="w-20 h-20 rounded-full" />
                <h1 className="ml-4 text-margentinha font-bold text-xl">Cláudia Nunes</h1>
              </div>
              <p className="mt-4 italic max-w-2xs">
                “Precisei de um reparo de emergência e essa oficina foi simplesmente incrível! Conseguiram me atender no mesmo dia e o conserto foi feito de maneira impecável. O atendimento foi muito profissional e o preço justo. A mecânica explicou tudo com muita paciência, o que me deixou muito segura em deixar meu carro lá. Sem dúvida, ganharam uma cliente fiel!“
              </p>
            </div>
          </div>

        </div>
 
      </>
    );
  }
  
  export default PageMecanica;

