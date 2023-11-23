import React, { FC } from 'react';
import "./style.scss";


const HeadPic: FC<{ src: string }> = (props) => {
  return (
    <section className="headPic">
      <img src={props.src} alt="headPic"  />
      </section>
  );
}

export default HeadPic;