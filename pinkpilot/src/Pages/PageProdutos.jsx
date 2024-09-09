import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: 'Protetor de ombro para cinto de segurança',
    href: '#',
    imageSrc: 'prod1.png',
    imageAlt: "Protetor de ombro, capa para cintos",
    price: 'R$20',
    color: 'Black',
    rating: "5.0",
    reviews:"102 avaliações",
    location: "Japão",
    description: "Protetor de ombro, capa para cintos"
  },
  {
      id: 2,
      name: 'Decoração para ar condicionado de carro',
      href: '#',
      imageSrc: 'prod2.png',
      imageAlt: "Aplique de strass para freio de mão",
      price: 'R$15',
      color: 'Black',
      rating: "5.0",
      reviews: "96 avaliações",
      location: "Japão",
      description: "Decoração de ar condicionado"
    },
  {
      id: 3,
      name: 'Strass para freio de mão',
      href: '#',
      imageSrc: 'prod3.png',
      imageAlt: "Front of men's Basic Tee in black.",
      price: 'R$35',
      color: 'Black',
      rating: "5.0",
      reviews: "56 avaliações",
      location: "Japão",
      description: "Aplique de strass para freio de mão"
    },
    {
        id: 4,
        name: 'Pompom para retrovisor',
        href: '#',
        imageSrc: 'prod4.png',
        imageAlt: "Pompom para retrovisor; diversas cores",
        price: 'R$30',
        color: 'Black',
        rating: "5.0",
        reviews: "64 avaliações",
        location: "Japão",
        description: "Pompom para retrovisor; diversas cores"
      },
      {
          id: 5,
          name: 'Kit de brilhos para carro',
          href: '#',
          imageSrc: 'prod5.png',
          imageAlt: "Kit completo de brilhos para carro",
          price: 'R$50',
          color: 'Black',
          rating: "5.0",
          reviews: "35 avaliações",
          location: "Japão",
          description: "Kit completo de brilhos para carro"
        },
        {
          id: 6,
          name: 'Moletom para câmbio',
          href: '#',
          imageSrc: 'prod6.png',
          imageAlt: "Moletom para câmbio com várias cores.",
          price: 'R$20',
          color: 'Black',
          rating: "5.0",
          reviews:"102 avaliações",
          location: "Japão",
          description: "Moletom para câmbio com várias cores"
        },
        {
            id: 7,
            name: 'Apoio para copos',
            href: '#',
            imageSrc: 'prod7.png',
            imageAlt: "Apoio anti derrapante para copos",
            price: 'R$15',
            color: 'Black',
            rating: "5.0",
            reviews: "96 avaliações",
            location: "Japão",
            description: "Apoio anti derrapante para copos"
          },
        {
            id: 8,
            name: 'Família de patinhos adesivos',
            href: '#',
            imageSrc: 'prod8.png',
            imageAlt: "Família de patinhos adesivos",
            price: 'R$35',
            color: 'Black',
            rating: "5.0",
            reviews: "56 avaliações",
            location: "Japão",
            description: "Família de patinhos adesivos"
          },
          {
              id: 9,
              name: 'Aromatizador decorativo',
              href: '#',
              imageSrc: 'prod9.jpg',
              imageAlt: "Aromatizador decorativo de álbuns",
              price: 'R$40',
              color: 'Black',
              rating: "5.0",
              reviews: "64 avaliações",
              location: "Japão",
              description: "Aromatizador decorativo de álbuns"
            },
            {
                id: 10,
                name: 'Película de vitral para teto solar',
                href: '#',
                imageSrc: 'prod10.png',
                imageAlt: "Película de vitral para teto solar",
                price: 'R$50',
                color: 'Black',
                rating: "5.0",
                reviews: "35 avaliações",
                location: "Japão",
                description: "Película de vitral para teto solar"
              }
]

function PageProdutos(){
  const { id } = useParams(); 
  const [isFavorited, setIsFavorited] = useState(false); 
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1); 
  };

  useEffect(() => {
    const foundProduct = products.find((prod) => prod.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  const favoritar = () => {
    setIsFavorited(!isFavorited); 
  };

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

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
          <img src={`/prod${product.id}.png`} alt={product.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
        </div>

        <div className="col-span-1">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <h2 className="text-xl text-gray-600 mt-2">{product.description}</h2>
          
          <div className="text-gray-600 mt-4">
            <span className="line-through">R$199,99</span>
            <span className="text-3xl text-margentinha font-semibold ml-2">{product.price}</span>
          </div>

          <button className="bg-margentinha hover:bg-rosinha transition duration-300 text-white mt-6 py-3 px-8 rounded-lg">
            Add ao carrinho
          </button>

          <div className="mt-8">
            <h3 className="text-lg text-gray-800">Consultar frete e prazo</h3>
            <div className="flex items-center mt-2 space-x-2">
              <input 
                type="text" 
                placeholder="Digite seu CEP" 
                className="mt-1 block px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-margentinha focus:border-margentinha" 
              />
              <button className="bg-margentinha hover:bg-rosinha transition duration-300 text-white py-2 px-4 rounded-lg">
                OK
              </button>
            </div>
            <p className="text-gray-500 hover:underline mt-2">Não sei o CEP</p>
          </div>
        </div>
      </div>

      <div className="flex items-center mt-6 space-x-4">
        <div className="flex items-center">
          <span className="text-lg font-semibold">Avaliações:</span>
          <div className="ml-2 flex items-center">
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>  
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
          </div>
        </div>
        
        <button
          onClick={favoritar}
          className={`flex items-center space-x-1 ${isFavorited ? 'text-pink-600' : 'text-gray-500'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill={isFavorited ? 'currentColor' : 'none'}
            stroke={isFavorited ? 'currentColor' : 'gray'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
          <span>{isFavorited ? 'Favoritado' : 'Favoritar'}</span>
        </button>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-bold text-gray-800">Descrição:</h3>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus officiis reiciendis sit maiores porro optio eius architecto expedita cumque, eaque incidunt, ut dolore, aut a soluta iure dignissimos assumenda accusamus.
        </p>
      </div>
    </div>
    </>
  )
}

export default PageProdutos;
