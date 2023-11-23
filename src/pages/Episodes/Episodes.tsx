
import React, { FC, useContext, useState } from 'react';
import styles from "./style.module.scss";
import HeadPic from '../../components/HeadPic/HeadPic';
import picture from "../../assets/img/headpicture/headpic3.png";
import LocationSearch from '../../components/LocationSearch';
import LoactionBlock from '../../components/LocationBlock';
import EpisodesSearch from '../../components/EpisodesSearch';
import EpisodesBlock from '../../components/EpisodesBlock';


const Epiosodes:FC =() => {
  return (
   <div className={styles.container}>
        <HeadPic src={picture}/>
        <EpisodesSearch/>
        <EpisodesBlock/>
   </div>
  )
}

export default Epiosodes;