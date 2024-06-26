function PinkChat() {
    return ( 
        <>
            <hr className="h-px m-2 border-0 bg-rosinha p-0 mb-6"></hr> 
        <body className="bg-gradient-to-t from-rosinha min-h-screen">
             <div className="flex flex-col min-h-screen">
               <div className="flex flex-grow justify-center items-center">
               <div className="flex items-center space-x-4">
                    <img
                    src="/Pinkie.svg"
                    className="w-[150px] h-[100px]  rounded-full"
                    />
               <div className="relative bg-white p-7 rounded-lg shadow-md">
                    <p className=" text-margentinha  w-40 text-center">...</p>
                    <div className="absolute bottom-0 left-0 transform translate-x-2 translate-y-2 w-0 h-0 border-l-8 border-l-transparent border-t-8 border-t-white border-r-8 border-r-transparent"></div>
                    </div>
               </div>
               </div>
               <div className="relative m-4">
               <input type="text" placeholder="Pergunte qualquer coisa.." className="w-full p-5 placeholder-margentinha rounded-xl border-margentinha focus:outline-none focus:ring-2 focus:ring-margentinha"
               />
               <button className="absolute right-0 top-0 mt-4 mr-4">
                    <img src="/setaa.svg" alt="" className="m" />
               </button>
               </div>
          </div>
        </body>  
        </>
     );
}

export default PinkChat;