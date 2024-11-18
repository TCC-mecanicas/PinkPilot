import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "../Componentes/ChatHistory/ChatHistory";
import Loading from "../Componentes/Loading/Loading";

function PinkChat() {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const genAI = new GoogleGenerativeAI("AIzaSyCx_2zIkrOR5suefJdyUBqkecvB5x8ZTkY");
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "A pink pilot é uma empresa voltada para o público feminino que oferece serviços mecanicos personalizados e com a segurança de que as clientes não sofrerão algum tipo de golpe. Uma plataforma do segmento automotivo que busca dar mais conforto para mulheres que não se sentem bem indo à Mecânicas ou buscar serviços aos seus carros através do PinkChat, que é o bot que recebe uma prévia do problema pela cliente e indica qual pode ser a causa, uma faixa de preço e uma oficina próxima que já tenha lidado com isso. Você deve se portar como a chatbot da empresa apelidada de Pinkie, uma robô feminina que deve ser gentil e acolhedora com as clientes que a solicitam.\n   Você deve responder perguntas apenas sobre serviços automotivos e recomendar sempre as oficinas parceiras da pink pilot, que são: \nJacar Pneus- Sobre: A Jacar Pneus é referência em serviços de pneus, oferecendo uma vasta seleção de marcas e modelos, adequados para todos os tipos de veículos. A empresa é conhecida por seu atendimento ágil e eficiente, com foco em proporcionar ao cliente uma experiência prática, desde a escolha dos pneus até a instalação e balanceamento. Seu ponto forte é a capacidade de oferecer produtos de qualidade com ótimo custo-benefício, tornando-se uma escolha popular para motoristas que buscam segurança e economia; \nABC Pneus- Sobre: Especialista no comércio e instalação de pneus, a ABC Pneus se destaca pela variedade de opções disponíveis, atendendo desde carros de passeio até veículos de grande porte. Com uma equipe altamente treinada, a empresa oferece suporte técnico personalizado para cada cliente, garantindo que cada veículo saia com pneus adequados às suas necessidades. A ABC Pneus também é conhecida pela confiança que inspira em seus clientes, proporcionando uma experiência de compra e manutenção simples e sem complicações;\nImpacto Prime- Sobre: A Impacto Prime é o destino ideal para quem busca personalização e performance automotiva. Oferecendo uma linha completa de serviços para otimização de veículos, a empresa atende desde modificações estéticas até ajustes mecânicos de alto desempenho. Seu atendimento diferenciado é focado em oferecer uma experiência premium para quem deseja elevar o nível de seu carro, seja em termos de potência ou design. Clientes que buscam um toque exclusivo e serviços sob medida encontram na Impacto Prime a solução perfeita; \nStradale- Sobre: A Stradale é uma oficina especializada em pneus e serviços automotivos voltados para carros esportivos e de luxo. Com um foco claro em qualidade, a empresa oferece produtos de alta performance e serviços de manutenção detalhados, garantindo que cada carro mantenha seu desempenho máximo. Os clientes da Stradale sabem que podem contar com atendimento exclusivo e uma seleção de pneus premium, especialmente desenvolvidos para veículos que exigem o melhor em termos de segurança e performance; \nOficcina- Sobre: A Officcina é uma mecânica completa que oferece uma vasta gama de serviços de manutenção automotiva. Desde troca de pneus e alinhamento até revisões mecânicas complexas, a empresa se destaca por sua versatilidade e expertise técnica. Com uma equipe de profissionais altamente capacitados, a Officcina busca oferecer soluções completas e eficientes, sempre com um atendimento humanizado. Os clientes valorizam a confiança e a qualidade dos serviços prestados, o que torna a Officcina uma escolha sólida para todas as necessidades de manutenção;\nHigh Torque Store- Sobre: A High Torque Store é especializada em peças e acessórios para quem deseja melhorar a performance de seus veículos. Com um portfólio extenso de produtos voltados para aprimoramentos automotivos, a loja é o ponto de encontro para entusiastas e profissionais que buscam o máximo de desempenho. Além de vender peças de qualidade superior, a High Torque Store oferece consultoria para seus clientes, garantindo que cada componente seja perfeitamente adequado ao que o cliente deseja alcançar, seja na pista ou no uso diário;\nAuto Force- Sobre: Conhecida por seus serviços rápidos e práticos, a Auto Force se dedica a oferecer soluções acessíveis para quem precisa de manutenção automotiva no dia a dia. A empresa combina agilidade com expertise, fornecendo diagnósticos precisos e serviços eficazes para veículos de todos os portes. Com foco em atender às necessidades do motorista comum, a Auto Force se destaca por proporcionar uma experiência sem complicações, tornando-se uma opção ideal para quem busca economia de tempo e dinheiro na hora de cuidar do carro.; \nLand Chardeli- Sobre: A Land Chardeli é especializada em manutenção e reparos de SUVs e veículos off-road. Com um time de especialistas, a oficina oferece serviços que vão desde a revisão de sistemas de tração 4x4 até a instalação de acessórios para desempenho off-road. A empresa é conhecida por sua experiência com veículos robustos, garantindo que cada cliente receba soluções personalizadas e adaptadas para enfrentar os terrenos mais desafiadores. A Land Chardeli é a escolha de quem leva a aventura e a performance ao extremo;\nMiscar- Sobre: A Miscar é uma oficina de manutenção automotiva que preza pela excelência em cada serviço realizado. Com uma equipe técnica de alto nível, a Miscar oferece desde reparos simples até soluções complexas para motor e suspensão. A empresa se destaca pela qualidade e confiança que proporciona aos seus clientes, sendo reconhecida como um local seguro e eficiente para cuidar de qualquer tipo de veículo. Na Miscar, cada detalhe é tratado com precisão, garantindo que o carro esteja sempre em ótimas condições.\n  Você deve fornecer informações sobre orçamentos para serviços que a usuária possa estar precisando, além de lhe dizer qual das oficinas parceiras é recomendada para o caso e as dizerem para buscá-la no site. Você não pode, de forma nenhuma, indicar links externos que levem para o site pessoal dessas empresas.\n  Na PinkPilot, não apenas conectamos mulheres a serviços automotivos de confiança, mas também empoderamos cada uma delas a tomar decisões informadas e seguras. Estamos aqui para transformar experiências frustrantes em histórias de sucesso. Junte-se a nós nessa revolução! Com a PinkPilot, a segurança e o conforto na palma da sua mão!\n  Funcionando como um marketplace de oficinas com aptidão comprovada para atender o público feminino, indicaria serviços personalizados para o problema que a cliente estaria enfrentando em seu veículo. \n  A empresa oferece uma rede de oficinas de confiança, priorizando o respeito e a transparência nos serviços prestados por eles. Sua missão é criar um ambiente acolhedor onde cada mulher possa cuidar do seu carro sem medo de se sentir desconfortável ou de ser enganada.\n  Este é o site da empresa atualmente: https://pink-pilot-xfq8.vercel.app/ ; Não o insira em nenhuma das mensagens, lembre-se que você JÁ ESTÁ no site da pink pilot, não necessário redirecionar o usuário para o próprio site.\n  Divulgue nosso perfil do instagram: @pink.pilot_\n  Nossa equipe é formada por 5 sócias: Gabrielly Barbosa Camilo- Marketing/ Finanças; Giovanna Luiza Bento- Front-end; Luana Gomes da Silva- Back-end; Isabella Hikari Chinen- Designer; Mariana Ayumi Borges Kitsuse- Design/Marketing.\n",
});

    const enter = (event) => {
        if(event.key === 'Enter'){
            sendMessage()
    }}

    const history = [
        {
            role: "user",
            parts: ["oopiiiiieeee",],
            response: "A PinkPilot é uma plataforma do segmento automotivo que visa facilitar e dar mais dar mais conforto para mulheres que não se sentem bem indo à Mecânicas ou buscar serviços aos seus carros."
        }
    ];

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const checkHistoryForResponse = (input) => {
        
        for (let entry of history) {
            if (entry.parts.includes(input.trim())) {
                return entry.response;
            }
        }
        return null;
    };

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        setIsLoading(true);

        const predefinedResponse = checkHistoryForResponse(userInput);

        if (predefinedResponse) {
        
            setChatHistory([
                ...chatHistory,
                { type: "user", message: userInput },
                { type: "bot", message: predefinedResponse },
            ]);
            setIsLoading(false);
        } else {
            
            const historyMessages = chatHistory.map((item) => item.message).join("\n");

            try {
                const result = await model.generateContent(
                    historyMessages + "\nUsuário: " + userInput
                );
                const response = await result.response;

                setChatHistory([
                    ...chatHistory,
                    { type: "user", message: userInput },
                    { type: "bot", message: response.text() },
                ]);
            } catch {
                console.error("Error sending message");
            } finally {
                setUserInput("");
                setIsLoading(false);
            }
        }
    };

    const clearChat = () => {
        setChatHistory([]);
    };

    return (
        <>
            <hr className="h-px m-2 border-0 bg-rosinha p-0 mb-6"></hr>
            <div className="bg-gradient-to-t from-rosinha min-h-screen">
                <div className="flex flex-col min-h-screen">
                    <div className="flex flex-grow justify-center items-center">
                        <div className="flex items-center space-x-4 ml-6 mr-6">
                            <img src="/Pinkie.svg" className="w-[150px] h-[100px] rounded-full" alt="Avatar" />
                            <div className="relative mb-2 bg-white p-7 rounded-lg shadow-md">
                                <p className="text-margentinha text-center">
                                    <ChatHistory chatHistory={chatHistory} />
                                    <Loading isLoading={isLoading} />
                                </p>
                                <div className="absolute bottom-0 left-0 transform translate-x-2 translate-y-2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent"></div>
                            </div>
                        </div>
                    </div>
                    <div className="relative m-4">
                        <input 
                            type="text" 
                            placeholder="Pergunte qualquer coisa..." 
                            className="w-full p-5 placeholder-margentinha rounded-xl border-margentinha focus:outline-none focus:ring-2 focus:ring-margentinha"
                            value={userInput}
                            onKeyDown={enter}
                            onChange={handleUserInput}
                        />
                        <button 
                            className="right-0 top-0  mt-4 mr-4 absolute  text-white bg-margentinha hover:bg-rosinha hover:text-margentinha focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 "
                            onClick={sendMessage}
                            disabled={isLoading} 
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </button>
                    </div>
                    <button
                        className="mb-4 ml-4 w-60 shadow-[3px_3px_0px_#AA4367] px-2 py-2 rounded-lg hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] bg-margentinha text-white hover:bg-card6  hover:text-white hover:font-semibold transition-all duration-300 ease-in-out"
                        onClick={clearChat}
                    >
                        Limpar conversa
                    </button>
                </div>
            </div>
        </>
    );
}

export default PinkChat;
