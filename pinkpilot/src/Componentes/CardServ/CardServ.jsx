import card1 from '../../../public/card1.svg'

const servicos = [
    {
      id: 1,
      name: 'Câmbio',
      href: '#',
      imageSrc: card1,
      imageAlt: "logoCard1",
      text: 'Troca de câmbio: substituição de uma transmissão defeituosa por uma nova ou recondicionada para garantir o funcionamento do veículo.'
},
{
    id: 2,
    name: 'Suspensão',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard2",
    text: 'Troca de suspensão: substituição dos componentes desgastados ou danificados do sistema de suspensão de um veículo por novos, visando melhorar o conforto, estabilidade e segurança durante a condução.'
},
{
    id: 3,
    name: 'Injeção Elétrica',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard3",
    text: 'Reparo ou troca de sistema de injeção eletrônica: Serviço que repara ou substitui componentes defeituosos do sistema de injeção eletrônica, responsável pelo controle de combustível e ignição para garantir a eficiência do motor.'
},
{
    id: 4,
    name: 'Revisão',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard4",
    text: 'Revisão: Verificação completa de todos os sistemas e componentes do veículo, como motor, freios, suspensão e sistema elétrico, para identificar e corrigir problemas, assegurando o bom funcionamento do veículo.'
},
{
    id: 5,
    name: 'Freio',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard5",
    text: 'Reparo ou troca de freios: Serviço para substituir componentes desgastados ou danificados do sistema de freios por novos, garantindo a eficiência na frenagem e a segurança do veículo.'
},
{
    id: 6,
    name: 'Motor',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard6",
    text: 'Troca ou reparo de motor: substituição ou conserto do motor de um veículo devido a falhas mecânicas, desgaste excessivo ou danos, garantindo seu bom funcionamento e desempenho.'
},
{
    id: 7,
    name: 'Elétrica',
    href: '#',
    imageSrc: card1,
    imageAlt: "logoCard7",
    text: 'Reparo elétrico geral: Serviço para reparar ou substituir componentes elétricos defeituosos, como sistemas de iluminação, partida e carregamento da bateria, garantindo o bom funcionamento dos sistemas elétricos do veículo.'
}




]

function CardServ(){
    return(
        <>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 p-5">
            {servicos.map((servicos) => (
                <div key={servicos.id} className="block max-w-sm p-6 bg-clarinho border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className='flex '>
                    <img 
                    src={servicos.imageSrc} 
                    alt={servicos.imageAlt}/>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{servicos.name}</h5>
                    </div>
                    <p className="font-normal text-gray-700 dark:text-gray-400">{servicos.text}</p>
                </div>
            ))}     
        </div>
        </>
    )
}

export default CardServ;