import { Card, CardBody, Typography, IconButton, Button} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';

import PropTypes from 'prop-types';
//import { useState } from "react";

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

const cards = [
    {
      imgSrc: "espelho.png",
      title: "Mais populares no mundo inteiro",
      subtitle: "Coleção",
      buttonText: "Mostrar tudo",
    },
    {
      imgSrc: "urso.png",
      title: "Esses ganharam corações",
      subtitle: "Coleção",
      buttonText: "Mostrar tudo",
    }
]

function CardsProd({ addToCart, addToFavoritos, favoritosItems }) {
  // Verifica se um produto está nos favoritos
  const isFavorited = (productId) =>
    favoritosItems.some((item) => item.id === productId);

  return (
    <>
      <div className="p-6">
        <Typography variant="h4" className="font-bold text-3xl mb-6 text-black">
          Novidades da semana
        </Typography>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden shadow-lg">
              <img src={card.imgSrc} alt={card.title} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-between p-4">
                <Typography variant="small" className="text-white">
                  {card.subtitle}
                </Typography>
                <Typography variant="h5" className="text-white font-semibold mb-4">
                  {card.title}
                </Typography>
                <Button className="bg-white text-black self-start">{card.buttonText}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-2xl font-bold text-black ml-10 mt-5">Mais vendidos</h2>
      <div className="m-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Card className="max-w-xs shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
              <Link to={`/produto/${product.id}`}>
                <div className="relative">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="w-full h-60 object-cover"
                  />
                </div>
              </Link>

              <CardBody className="p-4 flex flex-col justify-between h-full">
                <div className="mb-3">
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.494 6.91l6.564-.955L10 .4l2.942 5.555 6.564.955-4.751 4.635 1.123 6.545z" />
                    </svg>
                    <Typography className="text-sm text-gray-600">
                      {product.rating} · {product.reviews}
                    </Typography>
                  </div>
                  <Typography variant="h6" className="text-base text-gray-800 mt-2">
                    {product.description}
                  </Typography>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <Typography variant="body2" className="font-bold text-gray-800">
                    A partir de {product.price}
                  </Typography>
                  <div className="flex space-x-2">
                    <IconButton
                      onClick={() => addToFavoritos(product)}
                      className={`text-red-500 bg-white ${
                        isFavorited(product.id) ? "text-red-500" : "text-gray-400"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill={isFavorited(product.id) ? "red" : "none"}
                        stroke="currentColor"
                      >
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    </IconButton>
                    <IconButton className="text-gray-600 bg-white" onClick={() => addToCart(product)}>
                      <FaShoppingCart size={24} />
                    </IconButton>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

CardsProd.propTypes = {
  addToCart: PropTypes.func.isRequired,
  addToFavoritos: PropTypes.func.isRequired,
  favoritosItems: PropTypes.array.isRequired,
};

export default CardsProd;