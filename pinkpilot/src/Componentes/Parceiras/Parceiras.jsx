import estrelas from "../../../public/estrelas.svg"

const mecanicas = [
  {
    name: 'Jacar Pneus',
    type: 'Centro Automotivo',
    location: 'Juiz de Fora - MG',
    rating: 9.88,
    reviews: 803,
    imageUrl: 'jacar.svg',
  },
  {
    name: 'ABC Pneus',
    type: 'Centro Automotivo',
    location: 'Rio de Janeiro - RJ',
    rating: 9.78,
    reviews: 752,
    imageUrl: 'ABC.svg',
  },
  {
    name: 'VIP Pneus Centro Automotivo',
    type: 'Centro Automotivo',
    location: 'Jussara - GO',
    rating: 9.77,
    reviews: 537,
    imageUrl: 'VIP.svg',
  },
  {
    name: 'Polidoro Pneus',
    type: 'Centro Automotivo',
    location: 'Dracena - SP',
    rating: 9.72,
    reviews: 591,
    imageUrl: 'Polidoro.svg',
  },
  {
    name: 'Miscar Porto Seguro',
    type: 'Centro Automotivo',
    location: 'São Paulo - SP',
    rating: 9.69,
    reviews: 940,
    imageUrl: 'Miscar.svg',
  }
];

function Parceiras() {
  return (
    <div className="max-w-6xl mx-auto mt-6 mb-6">
      <h1 className="text-2xl font-bold mb-4 " style={{ textDecoration: 'underline', textDecorationColor: '#951B4A' }}>Mecânicas parceiras</h1>
      {mecanicas.map((mechanic, index) => (
        <div key={index} className="flex items-center border border-margentinha rounded-lg p-4 mb-4">
          <div className="w-20 h-20 flex-shrink-0">
            <img src={mechanic.imageUrl} alt={mechanic.name} className="w-full h-full object-cover rounded-lg" />
          </div>
          <div className="flex-grow ml-4">
            <h2 className="text-lg font-bold">{mechanic.name}</h2>
            <p className="text-gray-600">{mechanic.type}</p>
            <p className="text-gray-600">{mechanic.location}</p>
          </div>
          <div className=" text-margentinha ml-auto">
            <div className="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-10 h-10 text-margentinha" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
                <span className="text-2xl pt-2 font-bold ml-1">{mechanic.rating}</span> 
            </div>
            <div className="flex justify-center">
                <img className="h-5 mt-2" src={estrelas}></img>
                <p className="text-gray-600 mt-2 ml-2">{mechanic.reviews}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Parceiras;