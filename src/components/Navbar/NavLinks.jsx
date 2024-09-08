import React, { useState } from "react";
//import { Link } from "react-router-dom";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const links = [{name: "Novidade"},   //*Só para teste
    {name: "Masculino", submenu: true, sublinks:[
      {
        Head: "Roupas",
        sublink: [
          {name: "Calça", link:"/"},
          {name: "Camisa", link:"/"},
          {name: "Short", link:"/"},
          {name: "Moletom", link:"/"},
        ],
      },
    ],},
    {name: "Feminino"},
    {name: "Infantil"},
    {name: "Plus Size"},
    {name: "Moda Intima"},
    {name: "Calçados"},
    {name: "Acessórios"}
  ];
  return (
    <>
      {links.map((link) => (
        <div className="text-white">
          <div className="px-3 text-left md:cursor-pointer group">
            <h1 className="text-nowrap py-7 flex justify-between items-center md:pr-0 pr-5" 
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className="md:mt-1 md:ml-1 inline">
                {heading !== link.name
                ? <IoChevronUp style={{color: "white"}} size={20}/>
                : <IoChevronDown style={{color: "white"}} size={20}/>}
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
                  <div className="bg-black bg-opacity-30 p-3.5">
                    {link.sublinks.map((slinks) => (
                      <div>
                        {slinks.sublink.map((slink) =>(
                          <li className="text-base text-gray-100 my-2.5 hover:text-slate-400">
                            {slink.name} {/*Trocar para tag Link com a rota*/}
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/*Mobile*/}
          {link.submenu &&
            <div
            className={`
              ${heading === link.name ? "md:hidden" : "hidden"}
            `}
            >
              {link.sublinks.map((mysublinks) => (
                <div>
                  <div>
                    <div>
                      {mysublinks.sublink.map((slink) =>(
                        <li className="py-3 pl-14 hover:text-slate-400">
                          {slink.name}
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          }
        </div>
      ))}
    </>
  );
};

export default NavLinks;