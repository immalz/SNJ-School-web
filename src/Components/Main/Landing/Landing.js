import React from 'react'

import Hero from '../../../Images/sagrados-hero.png'
import './main.css'

const Landing = () => {
    return (
            <div className="container mx-auto px-8 py-8 lg:py-30 relative flex flex-col lg:flex-row items-center">
            
            <div className="animate__animated animate__fadeInLeft lg:w-1/2 flex flex-col items-center lg:items-start">
                <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light text-green-700 leading-tight mb-4">Aprende con nosotros<strong className="font-black text-3xl sm:text-4xl block">Especialistas en educación</strong></h1>
                <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">You must be able to convey information via phone, email, and in person. You want to make sure your tone is always professional but friendly.</p>
                <a href="/formulario" className="bg-green-400 hover:bg-green-500 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">Matricularse</a>
            </div>
            <div >
                <img className="animate__animated animate__fadeInDown hero shadow-2xl" src={Hero} alt=""/>
            </div>
        </div>
    )
}

export default Landing;