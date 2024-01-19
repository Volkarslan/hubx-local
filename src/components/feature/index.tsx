/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useState } from 'react';
import { motion } from "framer-motion"

import background_1 from '../../../public/assets/images/HubX-Feature-1-Background.png';
import background_2 from '../../../public/assets/images/HubX-Feature-2-Background.png';
import background_3 from '../../../public/assets/images/HubX-Feature-3-Background.png';
import background_4 from '../../../public/assets/images/HubX-Feature-4-Background.png';
import background_5 from '../../../public/assets/images/HubX-Feature-5-Background.png';

import background_2_item_1 from '../../../public/assets/images/HubX-Sign-1.png';
import background_2_item_2 from '../../../public/assets/images/HubX-Stamp-1.png';
import background_3_item_1 from '../../../public/assets/images/HubX-Feature-3-File-1.png';
import background_3_item_2 from '../../../public/assets/images/HubX-Feature-3-File-2.png';
import background_3_item_3 from '../../../public/assets/images/HubX-Feature-3-File-3.png';
import background_4_item_1 from '../../../public/assets/images/HubX-Bright-1.png';
import background_4_item_2 from '../../../public/assets/images/HubX-Cons-1.png';
import background_5_item_1 from '../../../public/assets/images/HubX-Arrow-1.png';
import background_5_item_2 from '../../../public/assets/images/HubX-PDF-1.png';
import background_5_item_3 from '../../../public/assets/images/HubX-JPG-1.png';
import background_5_item_4 from '../../../public/assets/images/HubX-TXT-1.png';

import Circle from '../../../public/assets/svgs/HubX-Circle-1.jsx';
import DocLogo from '../../../public/assets/svgs/HubX-Doc-1.jsx';
import CertLogo from '../../../public/assets/svgs/HubX-Cert-1.jsx';
import ScanLogo from '../../../public/assets/svgs/HubX-Scan-1.jsx';
import FiltLogo from '../../../public/assets/svgs/HubX-Filt-1.jsx';
import ExpLogo from '../../../public/assets/svgs/HubX-Exp-1.jsx';

import text from '../../../public/locale/en-en.json';

import styles from './styles.module.css';

function Feature() {
  const features = [
    {
      background: background_1,
      title: text.brief.title.feature_1,
      slogan: text.brief.slogan.feature_1,
      description: text.brief.description.feature_1,
    },
    {
      background: background_2,
      background_item_1: background_2_item_1,
      background_item_2: background_2_item_2,
      title: text.brief.title.feature_2,
      slogan: text.brief.slogan.feature_2,
      description: text.brief.description.feature_2,
    },
    {
      background: background_3,
      background_item_1: background_3_item_1,
      background_item_2: background_3_item_2,
      background_item_3: background_3_item_3,
      title: text.brief.title.feature_3,
      slogan: text.brief.slogan.feature_3,
      description: text.brief.description.feature_3,
    },
    {
      background: background_4,
      background_item_1: background_4_item_1,
      background_item_2: background_4_item_2,
      title: text.brief.title.feature_4,
      slogan: text.brief.slogan.feature_4,
      description: text.brief.description.feature_4,
    },
    {
      background: background_5,
      background_item_1: background_5_item_1,
      background_item_2: background_5_item_2,
      background_item_3: background_5_item_3,
      background_item_4: background_5_item_4,
      title: text.brief.title.feature_5,
      slogan: text.brief.slogan.feature_5,
      description: text.brief.description.feature_5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className={styles.featureSection}>
        {features.map(
          (feature, index) =>
            index === activeIndex && (
              <motion.div
                key={index}
                className={styles.featureBlock}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className={`${styles.featurePhoneArea} ${index === 2 ? styles.featurePhoneAreaRelative : ""}`}>
                  <motion.img
                    className={styles.featureBackground}
                    src={feature.background}
                    initial={{ y:  600 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                    {index === 1 &&(
                        <>
                            <motion.img
                            className={styles.feature2Item1}
                            src={feature.background_item_1}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.3}}
                            />

                            <motion.img
                            className={styles.feature2Item2}
                            src={feature.background_item_2}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            />
                        </>
                    )}

                    {index === 2 &&(
                        <>
                            <motion.img
                            className={styles.feature3Items}
                            src={feature.background_item_1}
                            initial={{ scale: 1.2, y: 400 }}
                            animate={{ scale: 0.8, y: -30 }}
                            transition={{ duration: 0.5, delay: 1.3}}
                            />

                            <motion.img
                            className={styles.feature3Items}
                            src={feature.background_item_2}
                            initial={{ scale: 1.2, y: 400 }}
                            animate={{ scale: 0.9, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.8 }}
                            />

                            <motion.img
                            className={styles.feature3Items}
                            src={feature.background_item_3}
                            initial={{ y: 400 }}
                            animate={{ y: 30 }}
                            transition={{ duration: 0.5, delay: 2.3 }}
                            />
                        </>
                    )}

                    {index === 3 &&(
                        <>
                            <motion.img
                            className={styles.feature4Item1}
                            src={feature.background_item_1}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.3}}
                            />

                            <motion.img
                            className={styles.feature4Item2}
                            src={feature.background_item_2}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 }}
                            />
                        </>
                    )}

                    {index === 4 &&(
                        <>
                            <motion.img
                            className={styles.feature5Item1}
                            src={feature.background_item_1}
                            initial={{ x: 100, y: 100 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.3}}
                            />

                            <motion.img
                            className={styles.feature5Item2}
                            src={feature.background_item_2}
                            initial={{ x: 100, y: 200 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.6 }}
                            />

                            <motion.img
                            className={styles.feature5Item3}
                            src={feature.background_item_3}
                            initial={{ x: 0, y: 200 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 2 }}
                            />

                            <motion.img
                            className={styles.feature5Item4}
                            src={feature.background_item_4}
                            initial={{ x: -150, y: 200 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.5, delay: 2.3 }}
                            />
                        </>
                    )}
                </div>

                <div className={styles.featureBriefArea}>
                  <h5 className={styles.featureTitle}>{feature.title}</h5>

                  <h3 className={styles.featureSlogan}>{feature.slogan}</h3>

                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>

                  <div className={styles.featureCTAArea}>
                    <a href="https://www.linkedin.com/in/volkan-ugur-arslan/" className={styles.featureCTA}>
                      {text.general.more}
                    </a>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </section>

      <section className={styles.listArea}>
        {features.map((listItem, index) => (
          <div
            key={index}
            className={`${styles.listItem} ${activeIndex === index ? styles.activeListItem : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.listItemLogo}>
              {index === activeIndex && (
                <Circle color={"#0381ff"} />
              )}
              {index === 0 &&(
                <DocLogo color={`${activeIndex === index ? "#0381ff" : "#666666"}`}/>
              )}
              {index === 1 &&(
                <CertLogo color={`${activeIndex === index ? "#0381ff" : "#666666"}`}/>
              )}
              {index === 2 &&(
                <ScanLogo color={`${activeIndex === index ? "#0381ff" : "#666666"}`}/>
              )}
              {index === 3 &&(
                <FiltLogo color={`${activeIndex === index ? "#0381ff" : "#666666"}`}/>
              )}
              {index === 4 &&(
                <ExpLogo color={`${activeIndex === index ? "#0381ff" : "#666666"}`}/>
              )}
            </div>

            <div className={styles.listItemTitle}>
              {listItem.title}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export { Feature };
