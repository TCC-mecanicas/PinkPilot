import { FaShoppingCart } from 'react-icons/fa'; 
 
function CarrinhoYT() {
    return(
        <>
        
            {/* Header  */}
            <header className="w-full h-[420px] bg-home bg-cover bg-center"> 
                <div className="w-full h-full flex flex-col justify-center items-center"> 
                    <img src="logo.svg"
                         alt="ex"
                         className="h-40 w-40 rounded-full shadow-lg hover:scale-110 duration-200">
                    </img>
                    <h1 className="text-3xl mt-4 mb-2 font-bold text-white">Dev Burguer</h1>

                    <span className="text-white font-medium">Rua de fulano de tal, São Paulo</span>

                    <div className="bg-green-600 px-4 py-1 rounded-lg mt-3" id="date-span">
                        <span className="text-white font-medium">
                            Seg à Dom - 18:00 as 22:00
                        </span>
                    </div>
                </div>
            </header>
            {/* Header Fim */}

            <h2 className="text-2xl md:text-3xl font-bold text-center mt-9 mb-6">
                Conheça nosso cardápio
            </h2>
            
            {/* Menu */}
            <div id="menu">
                <main className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl justify-items-center">
                    
                    {/* produto */}
                    <div className='flex gap-2'>
                        <img 
                            src="Impacto.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Impacto</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 18.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Impacto"
                                    data-price="18.90"
                                >
                                    <FaShoppingCart size={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*Fim produto*/}

                    {/* produto */}
                    <div className='flex gap-2'>
                        <img 
                            src="Impacto.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Impacto</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 18.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Impacto2"
                                    data-price="32.90"
                                >
                                    <FaShoppingCart size={26    } />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*Fim produto*/}

                    {/* produto */}
                    <div className='flex gap-2'>
                        <img 
                            src="Impacto.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Impacto</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 25.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Impacto3"
                                    data-price="25.90"
                                >
                                    <FaShoppingCart size={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*Fim produto*/}

                    {/* produto */}
                    <div className='flex gap-2'>
                        <img 
                            src="Impacto.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Impacto</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 20.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Impacto4"
                                    data-price="20.90"
                                >
                                    <FaShoppingCart size={26    } />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*Fim produto*/}

                </main>

                <div className='mx-auto max-w-7xl px-2 my-2 text-center'>
                    <h2 className='font-bold text-3xl mt-9 mb-6'>Bebidas</h2>
                </div>
                
                {/*Grid bebidas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mx-auto max-w-7xl mb-2 justify-items-center pb-20" id='menu'>
                    
                    {/*bebida */}
                    <div className='flex gap-2'>
                        <img 
                            src="Chardeli.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Chardeli</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 10.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Chardeli"
                                    data-price="10.90"
                                >
                                    <FaShoppingCart size={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*fim bebida */}

                    {/*bebida */}
                    <div className='flex gap-2 '>
                        <img 
                            src="Chardeli.svg"
                            alt="mecanica"
                            className="w-36 rounded-lg hover:scale-110 hover:-rotate-2 duration-300">
                        </img>

                        <div>
                            <p className="font-bold">Chardeli</p>
                            <p className="text-sm"> mecanica importante</p>

                            <div className='flex items-center gap-2 justify-between mt-3'>
                                <p className='font-bold text-lg'>R$ 4.90</p>
                                <button 
                                    className="bg-gray-900 text-white px-5 py-1 rounded add-to-carto-btn"
                                    data-name="Chardeli2"
                                    data-price="4.90"
                                >
                                    <FaShoppingCart size={26} />
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*fim bebida */}

                </div>
                {/*Fim grid bebidas */}
            </div>
            {/*Fim menu */}

            {/*Modal carrinho */}
            <div className='fixed bg-black/60 w-full h-full top-0 left-0 z-[99] items-center justify-center hidden'
                 id='cart-modal'
            >
                <div className='bg-white p-5 rounded-md min-w-[90%] md:min-w-[600px]'>
                    <h2 className='text-center font-bold text-2xl mb-2'>Carrinho</h2>

                    <div id='cart-items' className='flex justify-between mb-2 flex-col'> </div>
                
                    <p className='font-bold'>Total: <span id='cart-total'>0.00</span> </p>
                
                    <p className='mt-2'>Endereço de entrega:</p>
                    <input type="text" 
                    placeholder='Digite seu emdereço completo.'
                    id='address'
                    className='w-full border-2 p-1 rouded my-1'></input>
                    <p className='text-red-500 hidden' id='address-warm'> Digite seu endereço completo!!</p>
                
                    <div className='flex items-center justify-between mt-5 w-full'>
                        <button id='close-modal-btn'>Fechar</button>
                        <button id='checkout-btn' className='bg-green-500 text-white px-4 py-1 rounded' >Finalizar Pedido</button>
                    </div>
                </div>
            </div>
            {/*Fim modal carrinho */}

            {/*footer carrinho */}
            <footer className='w-full bg-red-500 py-2 fixed bottom-0 z-40 flex items-center justify-center'>
                <button 
                    className='flex items-center gap-2 text-white font-bold'
                    id='cart-btn'
                >
                    (<span id="cart-count">0</span>)
                    Veja meu Carrinho
                    <FaShoppingCart size={26}/>
                </button>
            </footer>
        <script src="script.js"></script>
        </>
    )
}

export default CarrinhoYT;