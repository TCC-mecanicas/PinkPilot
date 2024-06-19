import imgSob1 from '../../../public/imgSob1.svg'

function ContSobre(){
  return (
    <div className="flex items-center justify-center py-10 px-5 bg-white">
      <div className="max-w-7xl w-full flex items-center">
        {/* Contêiner para o texto */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-margentinha mb-4">Nossa missão</h2>
          <p className="text-gray-700 text-lg">
            Oferecer confiança e segurança para as mulheres quando precisarem de serviços automotivos.
            Além disso, vamos compartilhar vídeos curtos em nossas redes sociais explicando a funcionalidade
            dos carros, para que todos possam entender melhor.
          </p>
        </div>
        {/* Contêiner para a imagem */}
        <div className="flex-shrink-0 ml-10">
          <img
            src={imgSob1} // Substitua pelo link da sua imagem
            alt="Imagem descritiva"
            className="w- h-auto object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default ContSobre;