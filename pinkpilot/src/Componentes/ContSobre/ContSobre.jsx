import imgSob1 from '../../../public/imgSob1.svg'
import imgSob2 from '../../../public/imgSob2.svg'

function ContSobre(){
  return (
    <>
    <div className="flex items-center justify-center  px-5 ">
      <div className="max-w-7xl w-full flex items-center">
        {/* Contêiner para o texto */}
        <div className="flex-1 text-center">
          <h2 className="text-4xl font-bold text-margentinha mb-4">Nossa missão</h2>
          <p className="text-gray-700 text-2xl">
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
            className="w- h-auto "
          />
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center px-5 ">
    <div className="flex-shrink-0 ml-10">
        <img
          src={imgSob2} // Substitua pelo link da sua imagem
          alt="Imagem descritiva"
          className="w- h-auto"
        />
      </div>
    <div className="max-w-3xl w-full flex items-center">
      {/* Contêiner para o texto */}
      <div className="flex-1 text-center">
        <h2 className="text-4xl font-bold text-margentinha mb-4">Nossa missão</h2>
        <p className="text-gray-700 text-2xl">
          Oferecer confiança e segurança para as mulheres quando precisarem de serviços automotivos.
          Além disso, vamos compartilhar vídeos curtos em nossas redes sociais explicando a funcionalidade
          dos carros, para que todos possam entender melhor.
        </p>
      </div>
      {/* Contêiner para a imagem */}
      
    </div>
  </div>
  </>
  )
}

export default ContSobre;