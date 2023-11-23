
import React, { FC, useContext, useState } from 'react';
import styles from "./style.module.scss";
import HeadPic from '../../components/HeadPic/HeadPic';
import picture from "../../assets/img/headpicture/headpic2.png";
import LoactionBlock from '../../components/LocationBlock';
import LocationSearch from '../../components/LocationSearch';


const Locations:FC =() => {
  return (
   <div className={styles.container}>
        <HeadPic src={picture}/>
        <LocationSearch/>
        <LoactionBlock/>
   </div>
  )
}

export default Locations;