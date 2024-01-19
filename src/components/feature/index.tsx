/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import React from 'react';
import { useState } from 'react';

import background_1 from '../../../public/assets/HubX-Feature-1-Background.png';
import background_2 from '../../../public/assets/HubX-Feature-2-Background.png';
import background_3 from '../../../public/assets/HubX-Feature-3-Background.png';
import background_4 from '../../../public/assets/HubX-Feature-4-Background.png';
import background_5 from '../../../public/assets/HubX-Feature-5-Background.png';

import DocLogo from '../../../public/assets/HubX-Doc-1.jsx';
import CertLogo from '../../../public/assets/HubX-Cert-1.jsx';
import ScanLogo from '../../../public/assets/HubX-Scan-1.jsx';
import FiltLogo from '../../../public/assets/HubX-Filt-1.jsx';
import ExpLogo from '../../../public/assets/HubX-Exp-1.jsx';

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
      title: text.brief.title.feature_2,
      slogan: text.brief.slogan.feature_2,
      description: text.brief.description.feature_2,
    },
    {
      background: background_3,
      title: text.brief.title.feature_3,
      slogan: text.brief.slogan.feature_3,
      description: text.brief.description.feature_3,
    },
    {
      background: background_4,
      title: text.brief.title.feature_4,
      slogan: text.brief.slogan.feature_4,
      description: text.brief.description.feature_4,
    },
    {
      background: background_5,
      title: text.brief.title.feature_5,
      slogan: text.brief.slogan.feature_5,
      description: text.brief.description.feature_5,
    },
  ];

  const list = [
    {
      name: text.action.title.feature_1,
    },
    {
      name: text.action.title.feature_2,
    },
    {
      name: text.action.title.feature_3,
    },
    {
      name: text.action.title.feature_4,
    },
    {
      name: text.action.title.feature_5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <section className={styles.featureSection}>
        {features.map(
          (feature, index) =>
            index === activeIndex && (
              <div key={index} className={styles.featureBlock}>
                <div className={styles.featurePhoneArea}>
                  <img
                    className={styles.featureBackground}
                    src={feature.background}
                  />
                </div>

                <div className={styles.featureBriefArea}>
                  <h5 className={styles.featureTitle}>{feature.title}</h5>

                  <h3 className={styles.featureSlogan}>{feature.slogan}</h3>

                  <p className={styles.featureDescription}>
                    {feature.description}
                  </p>

                  <div className={styles.featureCTAArea}>
                    <a href="" className={styles.featureCTA}>
                      {text.general.more}
                    </a>
                  </div>
                </div>
              </div>
            )
        )}
      </section>

      <section className={styles.listArea}>
        {list.map((listItem, index) => (
          <div
            key={index}
            className={`${styles.listItem} ${activeIndex === index ? styles.activeListItem : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className={styles.listItemLogo}>
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
            <div className={styles.listItemTitle}>{listItem.name}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export { Feature };
