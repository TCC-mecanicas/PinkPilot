import card1 from '../../../public/card1.svg'
import card2 from '../../../public/card2.svg'
import card3 from '../../../public/card3.svg'
import card4 from '../../../public/card4.svg'
import card5 from '../../../public/card5.svg'
import card6 from '../../../public/card6.svg'
import card7 from '../../../public/card7.svg'

const servicos = [
    {
      id: 1,
      name: 'Câmbio',
      href: '#',
      imageSrc: card1,
      imageAlt: "logoCard1",
      color: 'bg-clarinho',
      text: 'Troca de câmbio: substituição de uma transmissão defeituosa por uma nova ou recondicionada para garantir o funcionamento do veículo.'
},
{
    id: 2,
    name: 'Suspensão',
    href: '#',
    imageSrc: card2,
    imageAlt: "logoCard2",
    color: 'bg-card2',
    text: 'Troca de suspensão: substituição dos componentes desgastados ou danificados do sistema de suspensão de um veículo por novos, visando melhorar o conforto, estabilidade e segurança durante a condução.'
},
{
    id: 3,
    name: 'Injeção Elétrica',
    href: '#',
    imageSrc: card3,
    imageAlt: "logoCard3",
    color: 'bg-rosinha',
    text: 'Reparo ou troca de sistema de injeção eletrônica: Serviço que repara ou substitui componentes defeituosos do sistema de injeção eletrônica, responsável pelo controle de combustível e ignição para garantir a eficiência do motor.'
},
{
    id: 4,
    name: 'Revisão',
    href: '#',
    imageSrc: card4,
    imageAlt: "logoCard4",
    color: 'bg-card4',
    text: 'Revisão: Verificação completa de todos os sistemas e componentes do veículo, como motor, freios, suspensão e sistema elétrico, para identificar e corrigir problemas, assegurando o bom funcionamento do veículo.'
},
{
    id: 5,
    name: 'Freio',
    href: '#',
    imageSrc: card5,
    imageAlt: "logoCard5",
    color: 'bg-card5',
    text: 'Reparo ou troca de freios: Serviço para substituir componentes desgastados ou danificados do sistema de freios por novos, garantindo a eficiência na frenagem e a segurança do veículo.'
},
{
    id: 6,
    name: 'Motor',
    href: '#',
    imageSrc: card6,
    imageAlt: "logoCard6",
    color: 'bg-card6',
    text: 'Troca ou reparo de motor: substituição ou conserto do motor de um veículo devido a falhas mecânicas, desgaste excessivo ou danos, garantindo seu bom funcionamento e desempenho.'
},
{
    id: 7,
    name: 'Elétrica',
    href: '#',
    imageSrc: card7,
    imageAlt: "logoCard7",
    color: 'bg-card7',
    text: 'Reparo elétrico geral: Serviço para reparar ou substituir componentes elétricos defeituosos, como sistemas de iluminação, partida e carregamento da bateria, garantindo o bom funcionamento dos sistemas elétricos do veículo.'
}

]

function CardServ(){
    return(
        <>
        <div className="font-sans gap-x-3 gap-y-10 grid sm:grid-cols-2 base:grid-cols-3 xl:grid-cols-3 xl:gap-x-8 p-5">
  {servicos.map((servico) => (
    <div
      key={servico.id}
      className={`block max-w-sm p-6 border  border-gray-200 rounded-lg shadow ${servico.color}`}
    >
      <div className='flex '>
        <img
          src={servico.imageSrc}
          alt={servico.imageAlt}
        />
        <h5 className="pl-2 text-2xl font-bold tracking-tight self-center text-textCardS">
          {servico.name}
        </h5>
      </div>
      <p className="font-normal text-textCardS">{servico.text}</p>
    </div>
  ))}
</div>
        </>
    )
}

export default CardServ;