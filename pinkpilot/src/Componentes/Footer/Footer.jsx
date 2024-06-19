function Footer(){
    return(
    <footer className="w-full p-8 bg-margentinha text-white">
        <span className="block my-8 border-t border-blue-gray-50" />
        <div
            className="flex flex-row flex-wrap items-center justify-center text-center gap-y-6 gap-x-12 md:justify-between">
            
            <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
                <a href="#"
                className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors ">
                © 2024 PinkPilot 
                </a>  
            </li>
            <li>   
                <a href="#"
                className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors ">
                Privacidade
                </a>
            </li>
            <li>
                <a href="#"
                className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors ">
                Termos
                </a>
            </li>
            <li>
                <a href="#"
                className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors ">
                Mapa do Site
                </a>
            </li>
            <li>
                <a href="#"
                className="block font-sans text-base antialiased font-normal leading-relaxed transition-colors ">
                Informações da empresa
                </a>
            </li>
            </ul>
        </div>
    
    </footer>
    )
}

export default Footer