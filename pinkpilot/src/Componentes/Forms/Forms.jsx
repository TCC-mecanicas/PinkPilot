import { useState } from 'react'
import roda from '../../../public/PinkPilot.gif'
import emailjs from '@emailjs/browser'

function Forms(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function sendEmail(e){
        e.preventDefault();
    
        if(name === '' || email === '' || message === ''){
            alert("Preencha todos os campos");
            return;
        }
    
        const templateParams ={
            from_name: name,
            message: message,
            email: email
        }
        
      emailjs.send("service_j8rnmoq","template_9uo1689", templateParams, "TAWJUdhrioWz8pMsC")
      .then((response) => {
        alert("EMAIL ENVIADO", response.status, response.text)
        setName('')
        setEmail('')
        setMessage('')
      }, (err)=>{
        console.log("ERRO: " ,err)
      })
    }

    return(
        <> 
            <section className="mb-16 mt-8 bg-white dark:bg-gray-900">
                <div className="container px-6  mx-auto">
                    <div className="lg:flex lg:items-center lg:-mx-10">
                        <div className="lg:w-1/2 lg:mx-10">
                            <h1 className="text-2xl font-semibold text-margentinha capitalize dark:text-white lg:text-3xl">Nos conte algo!</h1>

                            <p className="mt-4 text-gray-500 dark:text-gray-400">
                                Tem algum comentário? Mande pra gente!
                            </p>

                            <form className="mt-8" onSubmit={sendEmail}>
                                <div className="-mx-2 md:items-center md:flex">
                                    <div className="flex-1 px-2">
                                    <label className="block mb-2 text-sm text-margentinha dark:text-gray-200">Seu nome:</label>
                                    <input type="text" 
                                    onChange={(e) => setName(e.target.value)} 
                                    value={name} 
                                    placeholder="Mariazinha" 
                                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                    <div className="flex-1 px-2 mt-4 md:mt-0">
                                        <label className="block mb-2 text-sm text-margentinha dark:text-gray-200">Seu email:</label>
                                        <input type="email" 
                                        onChange={(e) => setEmail(e.target.value)} 
                                        value={email} 
                                        placeholder="Mariazinha@example.com" 
                                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>
                                </div>

                                <div className="w-full mt-4">
                                    <label className="block mb-2 text-sm text-margentinha dark:text-gray-200">Sua mensagem:</label>
                                    <textarea 
                                    onChange={(e) => setMessage(e.target.value)} 
                                    value={message} 
                                    className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" 
                                    placeholder="Mensagem"></textarea>
                                </div>

                                <button type="submit" value="Enviar" className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-margentinha rounded-md hover:bg-rosinha hover:text-black focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Enviar
                                </button>
                            </form>
                        </div>

                        <img className="hidden object-cover mx-auto rounded-full lg:block shrink-0 w-96 h-96" src={roda} alt="logo"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Forms