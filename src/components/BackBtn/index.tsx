import React, { FC } from 'react';
import { useNavigate} from "react-router-dom";
import styles from './style.module.scss';
import arrowback from "../../assets/img/arrow_back.svg"

const BackBtn: FC = () => {
  let navigate = useNavigate();

  return (
    <div className={styles.backBtn} onClick={() => navigate(-1)}>
        <span>
          <img src={arrowback} alt="Arrow BAck" />
        </span>
        <p>Go Back</p>
    </div>
  );
};

export default BackBtn;