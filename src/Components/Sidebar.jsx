import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex">
            

            {/* Overlay para el fondo semi-transparente */}
            <div className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />
            
            {/* Sidebar */}
            <div className={`fixed left-0 top-0 w-64 bg-white h-full shadow-lg transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
                <div className="p-4">
                    <h2 className="text-lg font-bold">Menú</h2>
                    <ul className="mt-4">
                        <li className="py-2">
                            <a href="#" className="text-gray-800 hover:text-blue-500">Inicio</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-800 hover:text-blue-500">Acerca de</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-800 hover:text-blue-500">Servicios</a>
                        </li>
                        <li className="py-2">
                            <a href="#" className="text-gray-800 hover:text-blue-500">Contacto</a>
                        </li>
                        <li>{/* Botón para abrir/cerrar el sidebar */}
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="p-4 bg-green-500 text-white z-10" // Botón visible siempre
            >
                {isOpen ? 'Cerrar' : 'Abrir'} Sidebar
            </button></li>
                    </ul>
                </div>
            </div>

            {/* Contenido principal */}
            <div className="flex-1 p-4">
                <h1 className="text-2xl">Contenido Principal</h1>
                <p>Aquí va el contenido de tu aplicación.</p>
            </div>
        </div>
    );
};

export default Sidebar;
