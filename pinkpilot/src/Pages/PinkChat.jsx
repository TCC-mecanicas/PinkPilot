import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatHistory from "../Componentes/ChatHistory/ChatHistory";
import Loading from "../Componentes/Loading/Loading";

function PinkChat() {
    const [userInput, setUserInput] = useState("");
    const [chatHistory, setChatHistory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // API
    const genAI = new GoogleGenerativeAI("AIzaSyB0xu5-zZ_mVV2h4PKyHQoDkgYmr5qk0uM");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Function to handle user input
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    };

    const sendMessage = async () => {
        if (userInput.trim() === "") return;

        setIsLoading(true);

        const historyMessages = chatHistory.map(item => item.message).join("\n");

        try {
            
            const result = await model.generateContent(historyMessages + "\nUsuário: " + userInput);
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
                                    <ChatHistory chatHistory={chatHistory}/>
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
                            className="right-0 top-0  mt-4 mr-4 absolute  text-white bg-margentinha hover:bg-rosinha hover:text-margentinha focus:outline-none font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={sendMessage}
                            disabled={isLoading} //
                        >
                            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
                        </button>
                    </div>
                    <button
                        className="mb-4 ml-4 w-60 px-2 py-2 rounded-lg bg-margentinha text-white hover:bg-white hover:text-black"
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