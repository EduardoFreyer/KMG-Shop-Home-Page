import React from "react";
//import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className='bg-neutral-300 flex w-full font-medium items-center justify-around bottom-0'>
      <div className="p-5 md:flex inline justify-between items-center">
        <h1 className="font-bold text-black text-3xl text-nowrap pr-24 hidden md:block">KMG Shop</h1>
        <div className="md:m-8 mt-6 mb-10">
          <h3 className="font-extrabold text-lg uppercase">Institucionais</h3>
          <div className="flex flex-col pr-9">
            <a href="/">A Marca</a>    {/*<Link to="/">A Marca</Link>*/}
            <a href="/">Contato</a>    {/*<Link to="/">Contato</Link>*/}
            <a href="/">Devoluções</a>    {/*<Link to="/">Devoluções</Link>*/}
            <a href="/">Política de privacidade</a>    {/*<Link to="/">Política de privacidade</Link>*/}
          </div>
        </div>
        <div className="md:m-8 mb-10">
          <h3 className="font-extrabold text-lg uppercase">Ajuda</h3>
          <div className="flex flex-col pr-9">
            <a href="/">Seu Cadastro</a>    {/*<Link to="/">Seu Cadastro</Link>*/}
            <a href="/">Seus pedidos</a>    {/*<Link to="/">Seus pedidos</Link>*/}
            <a href="/">Fale Conosco</a>    {/*<Link to="/">Fale Conosco</Link>*/}
          </div>
        </div>
        <div className="md:m-8 mb-6">
          <h3 className="font-extrabold text-lg uppercase">Mais KMG</h3>
          <div className="flex flex-col justify-center pr-9">
            <a href="/">Trabalhe conosco</a>    {/*<Link to="/">Trabalhe conosco</Link>*/}
            <a href="/">Seja um Franqueado</a>    {/*<Link to="/">Seja um Franqueado</Link>*/}
            <a href="/">Seja um Revendedor</a>    {/*<Link to="/">Seja um Revendedor</Link>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;