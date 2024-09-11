function Perfil(){
    return(
        <>
        <section className="relative pt-40 pb-24">
        <img src="https://pagedone.io/asset/uploads/1705473378.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60"></img>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full"></img>
            </div>
            <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                <div className="block">
                    <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1">Carlos</h3>
                    <p className="font-normal text-base leading-7 text-gray-500">Xique-xique, Bahia</p>
                </div>
                <button
                    className="rounded-full py-3.5 px-5 bg-gray-100 flex items-center group transition-all duration-500 hover:bg-indigo-100 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path className="stroke-gray-700 transition-all duration-500 group-hover:stroke-indigo-600"
                            d="M14.1667 11.6666V13.3333C14.1667 14.9046 14.1667 15.6903 13.6785 16.1785C13.1904 16.6666 12.4047 16.6666 10.8333 16.6666H7.50001C5.92866 16.6666 5.14299 16.6666 4.65483 16.1785C4.16668 15.6903 4.16668 14.9047 4.16668 13.3333V11.6666M16.6667 9.16663V13.3333M11.0157 10.434L12.5064 9.44014C14.388 8.18578 15.3287 7.55861 15.3287 6.66663C15.3287 5.77466 14.388 5.14749 12.5064 3.89313L11.0157 2.8993C10.1194 2.3018 9.67131 2.00305 9.16668 2.00305C8.66205 2.00305 8.21393 2.3018 7.31768 2.8993L5.82693 3.89313C3.9454 5.14749 3.00464 5.77466 3.00464 6.66663C3.00464 7.55861 3.9454 8.18578 5.82693 9.44014L7.31768 10.434C8.21393 11.0315 8.66205 11.3302 9.16668 11.3302C9.67131 11.3302 10.1194 11.0315 11.0157 10.434Z"
                            stroke="#374151" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                    <span
                        className="px-2 font-medium text-base leading-7 text-gray-700 transition-all duration-500 group-hover:text-indigo-600">
                        Beta-tester</span>
                </button>
            </div>
            <div className="flex flex-col lg:flex-row max-lg:gap-5 items-center justify-between py-0.5">
                <div className="flex items-center gap-4">
                    <button
                        className="py-3.5 px-5 rounded-full bg-indigo-600 text-white font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-100 hover:bg-indigo-700">Editar Perfil</button>
                    <button
                        className="py-3.5 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-base leading-7 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100">Configurações</button>
                </div>
                
            </div>
        </div>
    </section>                         
                                            
        </>
    )
}
export default Perfil