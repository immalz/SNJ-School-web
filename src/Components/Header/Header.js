import React from 'react'

const Header = () => {
    return (
        <>
            <header className="h-24 sm:h-32 flex items-center">
                <div className="container mx-auto pl-8 flex items-center justify-between">
                    
                    <div className="uppercase text-green-600 flex flex-col items-center m-0">
                        <div className="text-2xl">I.E.<strong className="font-bold"> Privada</strong></div>
                        <small className="tracking-widest text-green-400">Sagrados Niños de Jesus</small>
                    </div>
                    <div className="flex items-center">
                        <nav className="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                            <a href="/Services" className="py-2 px-8 text-gray-600 hover:text-black ">Sobre nosotros</a>
                            <a href="/About" className="py-2 px-8 text-gray-600 hover:text-black ">Talleres</a>
                            <a href="/Contact" className="py-2 px-8 text-gray-600 hover:text-black ">Actividades</a>
                            <a href="/Contact" className="py-2 px-8 text-gray-600 hover:text-black ">Contacto</a>
                        </nav>
                        <button className="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8">
                            <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                            <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                            <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;