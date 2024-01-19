/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from "react";

import docLogo from "../../../public/assets/HubX-Doc-1.svg";
import certLogo from "../../../public/assets/HubX-Cert-1.svg";
import scanLogo from "../../../public/assets/HubX-Scan-1.svg";
import filtLogo from "../../../public/assets/HubX-Filt-1.svg";
import expLogo from "../../../public/assets/HubX-Exp-1.svg";
import text from "../../../public/locale/en-en.json";

import styles from "./styles.module.css";

function List() {
    const list = [
        {
            "logo":docLogo,
            "name":text.action.title.feature_1
        },
        {
            "logo":certLogo,
            "name":text.action.title.feature_2
        },
        {
            "logo":scanLogo,
            "name":text.action.title.feature_3
        },
        {
            "logo":filtLogo,
            "name":text.action.title.feature_4
        },
        {
            "logo":expLogo,
            "name":text.action.title.feature_5
        },
    ];

  return (
    <>
        <div className={styles.listArea}>
            {list.map((listItem,index) => (
                <div key={index} className={styles.listItem}>
                    <div className={styles.listItemLogo}>
                        <img src={listItem.logo}/>
                    </div>

                    <div className={styles.listItemTitle}>
                        {listItem.name}
                    </div>
                </div>
            ))}
        </div>
    </>
  );
}

export { List };
