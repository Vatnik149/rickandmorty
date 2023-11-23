import React, { FC, useState } from 'react';
import arrow from "../../../assets/img/episodearrow.svg";
import './style.scss';


const EpisodeCart: FC<{name:string, num:string, airDate:string}> = (props) => {
  return (
    <div className="episodeDetailsCart">
    <div className="text-desc">
        <p className="episode">{props.name}</p>
        <p className="name">{props.num}</p>
        <p className="air-date">{props.airDate}</p>
    </div>
    <i>
        <img src={arrow} alt="" />
    </i>
    </div>
  );
};
export default EpisodeCart;
