import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLoginData } from "../action/demoContent";
import { ICharacter } from "../constant/character";
import { useDispatchEffect } from "../constant/service";
export interface DemoProps {
  demo: ICharacter[];
}

const Demo: React.FC<DemoProps> = item => {
  const { demo } = item;
  return (
    <React.Fragment>
      <ul>
        {demo &&
          demo.length > 0 &&
          demo.map(item => <li key={item.name}>{item.name}</li>)}
      </ul>
    </React.Fragment>
  );
};

export default Demo;
