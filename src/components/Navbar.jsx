import React from "react";
import { IoPersonOutline, IoSearchOutline, IoBagOutline } from 'react-icons/io5';

const Navbar = () => {
  return (
    <div className='text-white bg-black h-32 flex justify-between items-center min-w-[1024px] mx-auto px-10'>
      <h1 className="w-auto text-3xl font-bold">KMG Shop</h1>
      <ul className="flex space-x-4">
        <li className="py-2 m-auto">Novidade</li>
        <li className="py-2 m-auto">Masculino</li>
        <li className="py-2 m-auto">Feminino</li>
        <li className="py-2 m-auto">Infantil</li>
        <li className="py-2 m-auto">Plus Size</li>
        <li className="py-2 m-auto">Moda Intima</li>
        <li className="py-2 m-auto">Calçados</li>
        <li className="py-2 m-auto">Acessórios</li>
      </ul>
      <div className="flex space-x-7">
        <IoSearchOutline size={30}/>
        <IoPersonOutline size={30}/>
        <IoBagOutline size={30}/>
      </div>
    </div>
  )
}

export default Navbar;