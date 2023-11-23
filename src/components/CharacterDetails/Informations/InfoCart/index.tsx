import React, { FC, useState } from 'react';
import './style.scss';


const InfoCart: FC<{name:string, desc:string}> = (props) => {
  return (
    <div className="infoCart">
        <div className="name">  
            <p>{props.name}</p>
        </div>
        <div className="desc">
            <p>{props.desc}</p>
        </div>
        <span></span>
    </div>
  );
};
export default InfoCart;
