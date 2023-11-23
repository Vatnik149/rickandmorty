
import React, { FC, useContext, useState } from 'react';
import styles from "./style.module.scss";
import HeadPic from '../../components/HeadPic/HeadPic';
import picture from "../../assets/img/headpicture/headpic1.png";
import CharacterSearch from '../../components/CharacterSearch/CharacterFilter';
import CharacterBlock from '../../components/CharacterBlock';


const Characters:FC =() => {
  return (
   <div className={styles.container}>
        <HeadPic src={picture}/>
        <CharacterSearch/>
        <CharacterBlock/>
   </div>
  )
}

export default Characters;