import React from "react";
import logo from "../assets/img/logoStarWars2.png";
import { OptionsMenu } from "../constants/OptionsMenu";
import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";

export const Menu = ({ showCounter, setShowCounter }) => {
  const completeCounter = () => {
    setShowCounter(false)
  }
  return (
    <div className="flex max-sm:flex-wrap bg-[#201f1f] justify-between w-full top-0 animate-fade-down animate-once animate-duration-[1500ms] animate-delay-100 animate-ease-in-out animate-normal animate-fill-forwards">
      <div className=" flex space-x-5 items-center ml-5 mt-[-10px] max-sm:w-full">
        <img src={logo} alt="" width={120} />
      </div>
      <div className="flex w-[35%] justify-end space-x-10 items-center mr-16 text-lg max-sm:w-full max-sm:justify-around max-sm:mr-5">
        {/* se mapea el objeto OptionsMenu donde se itera cada una de sus propiedades y mostrarlas en el menu */}
        {showCounter && (
          <div className="text-white bg-emerald-600 p-1 px-2 rounded-md">
            <Countdown date={Date.now() + 60000} onComplete={completeCounter}/>
          </div>
        )}

        {OptionsMenu.map(({ title, url }) => (
          <div className="flex font-RedHatDisplay font-bold" key={title}>
            {/* usamos NavLink de react-router-dom para la navegacion entre componentes en el menu */}
            <NavLink to={url}>
              {/* desestructuramos isActive de NavLink para visualmente mostrar en que parte del menu estoy ubicado */}
              {({ isActive }) => (
                <button
                  className={
                    isActive
                      ? "cursor-pointer bg-amber-400 rounded-md p-1 px-3 text-white text-center"
                      : "cursor-pointer hover:bg-amber-400 rounded-md p-1 px-3 hover:text-white text-white text-center"
                  }
                >
                  {title}
                </button>
              )}
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};
