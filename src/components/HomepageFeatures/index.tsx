import {useEffect, useState, type ReactNode} from 'react';
import Heading from '@theme/Heading';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgSrc: string;
  imgAlt: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'GUIでGoogleシートを操作',
    imgSrc: '/img/torai_explaine-3.jpg',
    imgAlt: '虎威の投稿編集画面',
    description: (
      <>
        Googleシートに保存した投稿を、画像設定まで含めてGUIから編集できます。
        大量の投稿でも、セル編集だけに頼らず確認しながら運用できます。
      </>
    ),
  },
  {
    title: 'Googleの仕組みをフル活用',
    imgSrc: '/img/torai_exp.jpg',
    imgAlt: 'Googleシート、Googleドライブ、Apps Scriptの連携図',
    description: (
      <>
        Googleシートが投稿データ、Googleドライブが画像、Apps Scriptが自動投稿を担当。
        普段使っているGoogle環境を土台にアカウント運用を支えます。
      </>
    ),
  },
  {
    title: 'AIで投稿案をまとめて作成',
    imgSrc: '/img/torai_explaine-4.jpg',
    imgAlt: 'AIによる投稿作成画面',
    description: (
      <>
        キーワードから投稿案を作成し、日々の投稿ネタ出しを補助します。
        内容を確認しながら、自分のアカウントに合う表現へ整えられます。
      </>
    ),
  },
  {
    title: 'スレッド投稿も予約できる',
    imgSrc: '/img/torai_explaine-5.jpg',
    imgAlt: 'スレッド投稿の予約画面',
    description: (
      <>
        単発投稿だけでなく、スレッド形式の投稿も予約できます。
        過去投稿の再利用や、連続した説明投稿の計画にも向いています。
      </>
    ),
  },
];

function Feature({title, imgSrc, imgAlt, description}: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <img className={styles.featureImage} src={imgSrc} alt={imgAlt} />
      <div className={styles.featureBody}>
        <Heading as="h3">{title}</Heading>
        <p className={styles.featureText}>{description}</p>
      </div>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % FeatureList.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + FeatureList.length) % FeatureList.length);
  };

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % FeatureList.length);
  };

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">虎威でできること</Heading>
          <p>
            投稿作成、画像管理、予約投稿、AIによる下書き作成まで、
            虎威の主要機能をひとつずつ確認できます。
          </p>
        </div>
        <div className={styles.carousel} aria-roledescription="carousel">
          <IconButton
            className={styles.navButton}
            onClick={goToPrevious}
            aria-label="前の機能を見る">
            <ChevronLeftIcon />
          </IconButton>
          <div className={styles.viewport}>
            <div
              className={styles.track}
              style={{transform: `translateX(-${activeIndex * 100}%)`}}>
              {FeatureList.map((props, idx) => (
                <div className={styles.slide} key={props.title} aria-hidden={idx !== activeIndex}>
                  <Feature {...props} />
                </div>
              ))}
            </div>
          </div>
          <IconButton
            className={styles.navButton}
            onClick={goToNext}
            aria-label="次の機能を見る">
            <ChevronRightIcon />
          </IconButton>
        </div>
        <div className={styles.dots} aria-label="機能スライドを選択">
          {FeatureList.map((props, idx) => (
            <button
              className={idx === activeIndex ? styles.dotActive : styles.dot}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`${props.title}を表示`}
              aria-current={idx === activeIndex}
              key={props.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
