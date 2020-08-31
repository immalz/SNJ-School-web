import React from 'react'
import './footer.css'
const Footer = () => {
    return (
        <div className="footer px-2">
            <div className="section-footer flex -mx-2">
                <div className="direccion w-1/3 px-2">
                    <strong><h1 className="mb-2">Encuentranos en</h1></strong>
                    <p>Jr 9 de Octubre Mz lt 11</p>
                    <p>Chilca - Cañete - Lima</p>
                </div>
                <div className="contacto w-1/3 px-2">
                    <strong><h1 className="mb-2">Numeros de Contacto</h1></strong>
                    <p>+51 997267054</p>
                    <p>+51 997314835</p>
                </div>
                <div className="redes-sociales w-1/3 px-2">
                    <strong><h1 className="mb-2">Nuestras Redes Sociales</h1></strong>
                    <a href="https://www.facebook.com/InstitucionSNDJ/" target="noopener noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://www.facebook.com/InstitucionSNDJ/" target="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/InstitucionSNDJ/" target="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>

                </div>
            </div>
        </div>
    )
}

export default Footer;
