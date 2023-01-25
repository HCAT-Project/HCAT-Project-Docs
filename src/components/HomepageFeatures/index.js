import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '在线！',
    description: (
      <>
        最好的多平台适应就是使用浏览器！ヾ(≧▽≦*)o
      </>
    ),
  },
  {
    title: '轻量!',
    description: (
      <>
        比某个绿色软件轻量多了哦(小声BB)
      </>
    ),
  },
  {
    title: '开源！',
    description: (
      <>
        可以自己定制哦( •̀ ω •́ )✧
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
