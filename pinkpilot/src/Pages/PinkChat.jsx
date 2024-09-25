import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "../Componentes/ChatHistory/ChatHistory";
import Loading from "../Componentes/Loading/Loading";

function PinkChat() {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const genAI = new GoogleGenerativeAI("AIzaSyDiEwNiFDJd4I2eKSMrNOtNuz4dhA8H3uM");
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        system_instruction: `Você deve responder somente questões relacionadas à PinkPilot, sempre direcionado à plataforma do segmento automotivo que busca dar mais conforto para mulheres que não se sentem bem indo à Mecânicas ou buscar serviços aos seus carros. Funcionando como um marketplace de oficinas com aptidão comprovada para atender o público feminino, indicaria serviços personalizados para o problema que a cliente estaria enfrentando em seu veículo com a ajuda do PinkChat, um bot que recebe uma prévia do problema pela cliente e indica qual pode ser a causa, uma faixa de preço e uma oficina próxima que já tenha lidado com isso.\n`,
    });

    const history = [
        {
            role: "user",
            parts: ["o que é a pinkpilot?", "o que e a pinkpilot?", "o que e a pinkpilot", "o que é a pinkpilot"],
            response: "A PinkPilot é uma plataforma do segmento automotivo que visa facilitar e dar mais dar mais conforto para mulheres que não se sentem bem indo à Mecânicas ou buscar serviços aos seus carros."
        },
        {
            role: "user",
            parts: ["o que a pinkpilot faz", "o que a pinkpilot faz?"],
            response: "A PinkPilot é uma plataforma que facilita a vida das mulheres que precisam de serviços automotivos, criando um ambiente mais confortável e seguro com a ajuda de oficinas que acolheram este público. A mecânicas parceiras oferecem serviços como manutenção preventiva, reparos, estética e consultoria sobre carros, sempre com transparência e foco na segurança das clientes. A PinkPilot atende as necessidades específicas das mulheres, com atendimento personalizado e sem constrangimentos, para que elas se sintam mais confiantes e seguras ao cuidar de seus carros."
        }
    ];

    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const checkHistoryForResponse = (input) => {
        // Verificar se o input do usuário bate com algum dos `parts` no histórico
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

        // Verificar se há uma resposta já definida no histórico
        const predefinedResponse = checkHistoryForResponse(userInput);

        if (predefinedResponse) {
            // Se houver resposta no histórico, adicioná-la ao chat
            setChatHistory([
                ...chatHistory,
                { type: "user", message: userInput },
                { type: "bot", message: predefinedResponse },
            ]);
            setIsLoading(false);
        } else {
            // Se não houver, gerar resposta com IA
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
