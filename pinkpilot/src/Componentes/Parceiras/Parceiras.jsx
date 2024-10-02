import { Link } from "react-router-dom";
import estrelas from "../../../public/estrelas.svg"

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

function Parceiras() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
        <h1 className="text-2xl ml-10 font-bold" style={{ textDecoration: 'underline', textDecorationColor: '#951B4A' }}>
          Mecânicas parceiras
        </h1>
        <section>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {mecanicas.map((mecanica, index) => (
              <article className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300" key={index}>
                <Link to={`/mecanica/${mecanica.id}`}>
                  <div className="relative flex items-end overflow-hidden rounded-xl">
                    <img src={mecanica.Banner} alt={mecanica.name} />
                  </div>
                  <div className="flex">
                  <img src={mecanica.Logo} alt={mecanica.name} className="w-16"/>
                    <div className="ml-2 mt-1 p-2">
                      <h2 className="text-slate-700">{mecanica.name}</h2> 
                        <div className="flex">
                          <img src={estrelas} alt="estrelas" className="w-8"/>
                          <p className="text-l mt-1 ml-1 font-bold text-margentinha">{mecanica.rating}</p>
                        </div>               
                    </div>
                  </div>
                </Link>  
              </article>
            ))}
          </div>
        </section>
    </div>
  );
}

export default Parceiras;