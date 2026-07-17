import Link from '@docusaurus/Link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import InsightsRoundedIcon from '@mui/icons-material/InsightsRounded';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import EditNoteRoundedIcon from '@mui/icons-material/EditNoteRounded';
import GoogleIcon from '@mui/icons-material/Google';
import NotificationsActiveRoundedIcon from '@mui/icons-material/NotificationsActiveRounded';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import ScheduleSendRoundedIcon from '@mui/icons-material/ScheduleSendRounded';
import Button from '@mui/material/Button';
import Heading from '@theme/Heading';
import Layout from '@theme/Layout';
import type { ReactNode } from 'react';

import styles from './index.module.css';

const APP_URL = 'https://torai.try-try.com/auth/signin';
const SALES_LETTER_URL = 'https://sns-loong.imakita3gyo.com/ja/clp/torai-info';

const workflow = [
  {
    number: '01',
    title: 'AIで原稿を一括作成',
    description: 'テーマを決めたら、複数の投稿案をまとめて準備。ゼロから書き始める負担を減らします。',
    icon: <AutoAwesomeIcon />,
  },
  {
    number: '02',
    title: '自分の言葉に編集',
    description: 'AIの下書きを土台に、あなたらしい表現へ。伝えたい内容を残したまま整えられます。',
    icon: <EditNoteRoundedIcon />,
  },
  {
    number: '03',
    title: '狙った時刻へ一括予約',
    description: '投稿日時をまとめて設定。毎回Xを開いて投稿する作業から解放されます。',
    icon: <ScheduleSendRoundedIcon />,
  },
  {
    number: '04',
    title: '投稿完了を通知で確認',
    description: '予約時刻に自動投稿。完了通知を確認するだけなので、日々の運用を続けやすくなります。',
    icon: <NotificationsActiveRoundedIcon />,
  },
];

const painPoints = [
  '毎日の投稿ネタを考えるだけで疲れてしまう',
  '忙しい日は投稿できず、運用が途切れてしまう',
  '投稿後の数字を集めても、次の改善に活かせない',
];

const features = [
  'AIによる投稿原稿の作成をサポート',
  '複数の投稿をまとめて予約',
  '予約時刻に自動投稿して完了を通知',
  '投稿データを取得・整理して見える化',
];

const opportunities = [
  {
    label: 'LOW CAPITAL',
    title: 'X APIが従量課金へ',
    text: '月額契約や最低利用額ではなく、使った分だけ支払う仕組みへ。必要な規模から小さく始められます。',
  },
  {
    label: 'GLOBAL REACH',
    title: '言葉の壁を越えやすい時代へ',
    text: 'Xの投稿翻訳機能により、日本語の投稿も海外のユーザーに読まれる可能性が広がっています。',
  },
  {
    label: 'INTEREST MATCH',
    title: '関心のある人へ届く可能性',
    text: '推薦技術が進化する今、フォロワー数だけに頼らず、内容に関心を持つ人へ届く機会が生まれています。',
  },
];

const setupSteps = [
  { number: '1', title: '無料登録', text: 'Googleアカウントで虎威にサインインします。' },
  { number: '2', title: '初期設定', text: '画面とマニュアルに沿ってX APIなどを設定します。' },
  { number: '3', title: '運用開始', text: '原稿を作り、希望の日時に予約投稿します。' },
];

const faqs = [
  {
    question: '登録するだけで料金はかかりますか？',
    answer: 'Googleアカウントでの登録は無料です。料金はサブスクリプションを開始したときに発生します。',
  },
  {
    question: '虎威の利用料以外に費用はかかりますか？',
    answer: 'X APIやGemini APIなど、外部サービスの利用状況に応じた費用が別途発生する場合があります。',
  },
  {
    question: '設定が難しくないか心配です。',
    answer: 'この公式マニュアルで、アカウント登録から各種設定、投稿方法まで画面付きで案内しています。',
  },
  {
    question: '紹介プログラムは誰でも使えますか？',
    answer: '虎威にサインイン後、プロフィールの「紹介プログラム」から自分専用の紹介リンクを確認できます。',
  },
];

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={styles.eyebrow}>{children}</p>;
}

function PrimaryCta({ label = 'Googleアカウントで無料登録' }: { label?: string }) {
  return (
    <Button
      component={Link}
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.primaryCta}
      variant="contained"
      size="large"
      startIcon={<GoogleIcon />}
      endIcon={<OpenInNewRoundedIcon />}
    >
      {label}
    </Button>
  );
}

function Hero() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGlow} />
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <div className={styles.brandLine}>
            <img src="/img/torai_icon_transparent.png" alt="" />
            <span>Xマーケティングツール「虎威」</span>
          </div>
          <p className={styles.heroKicker}>作って終わるX運用を、今日で変える。</p>
          <Heading as="h1">
            投稿の負担を減らし、
            <strong>データで勝ち筋を育てる。</strong>
          </Heading>
          <p className={styles.heroLead}>
            AIで原稿を一括作成し、自分の言葉に整えて、一括予約から自動投稿まで。
            さらに投稿データを自動で取得・整理し、次の改善へつなげます。
          </p>
          <div className={styles.heroActions}>
            <PrimaryCta />
            <Button component={Link} to="/docs/intro" className={styles.secondaryCta} variant="outlined" size="large">
              まずマニュアルを見る
            </Button>
          </div>
          <p className={styles.ctaNote}>アカウント作成は無料｜初回ログイン後に限定オファーを確認できます</p>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.heroVisualFrame}>
            <img src="/img/torai/x-accounts/x-posts_ai1.jpg" alt="虎威のAI投稿原稿作成画面" />
          </div>
          <div className={styles.heroBadge}>
            <span>月額</span>
            <strong>1,280円</strong>
            <small>外部API費用は別途</small>
          </div>
        </div>
      </div>
    </header>
  );
}

function Opportunity() {
  return (
    <section className={styles.opportunitySection}>
      <div className="container">
        <div className={styles.centerHeading}>
          <Eyebrow>WHY NOW?</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>Xに挑戦するなら、今が最大のチャンス。</Heading>
          <p className={styles.sectionLead}>参入コスト、言語、届け方。これまでの壁が低くなり、個人や小さなチームにも機会が開かれています。</p>
        </div>
        <div className={styles.opportunityGrid}>
          {opportunities.map((item) => (
            <article key={item.label}>
              <span>{item.label}</span>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <p className={styles.opportunityNote}>※表示機会や反応を保証するものではありません。Xの仕様・推薦・翻訳機能は変更される場合があります。</p>
      </div>
    </section>
  );
}

function Workflow() {
  return (
    <section className={styles.workflowSection}>
      <div className="container">
        <Eyebrow>虎威を使えば</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>投稿の負担を減らす、シンプルな4ステップ</Heading>
        <p className={styles.sectionLead}>人にしか書けない言葉は残し、繰り返し作業は仕組みに任せます。生まれた時間を分析と改善へ使えます。</p>
        <div className={styles.workflowGrid}>
          {workflow.map((item) => (
            <article className={styles.workflowCard} key={item.number}>
              <div className={styles.workflowIcon}>{item.icon}</div>
              <span className={styles.workflowNumber}>STEP {item.number}</span>
              <Heading as="h3">{item.title}</Heading>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className={styles.problemSection}>
      <div className={`container ${styles.problemGrid}`}>
        <div>
          <Eyebrow>こんな経験はありませんか？</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>投稿するだけでは、マーケティングになりません。</Heading>
          <p className={styles.sectionLead}>作業に時間を使い切り、反応を振り返れない運用方法そのものが、成長を止めています。</p>
          <ul className={styles.painList}>
            {painPoints.map((point) => (
              <li key={point}><CheckCircleRoundedIcon />{point}</li>
            ))}
          </ul>
        </div>
        <div className={styles.solutionCard}>
          <span>TORAI SOLUTION</span>
          <Heading as="h3">作業は自動化し、判断はデータから。</Heading>
          <p>虎威は、原稿作成から予約投稿までを一つの流れにまとめます。さらに投稿後のデータを整理し、何が届いたのか、次に何を試すのかを考えられる状態へ導きます。</p>
          <Button component={Link} to="/docs/intro" variant="text">虎威でできることを確認する →</Button>
        </div>
      </div>
    </section>
  );
}

function MarketingAnalytics() {
  return (
    <section className={styles.analyticsSection}>
      <div className={`container ${styles.analyticsInner}`}>
        <div className={styles.analyticsCopy}>
          <Eyebrow>NEXT TORAI</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>データ分析こそ、マーケティング勝者への道。</Heading>
          <p className={styles.sectionLead}>投稿後の反応を感覚で終わらせず、X APIから取得したデータを自動で整理。反応の傾向を見つけ、次の投稿へ活かせるマーケティングツールへ進化します。</p>
          <div className={styles.analyticsPoints}>
            <div><DataUsageRoundedIcon /><span><strong>自動取得・整理</strong>投稿の反応データを集め、確認しやすい形で表示</span></div>
            <div><InsightsRoundedIcon /><span><strong>改善につながる可視化</strong>伸びた投稿や反応者を把握し、次の仮説へ</span></div>
          </div>
          <div className={styles.policyBox}>
            <strong>自動で反応を操作しません</strong>
            <p>虎威は自動「いいね」や自動リポストを行いません。データを参考に、誰へどう対応するかはユーザー自身が判断・操作します。</p>
          </div>
        </div>
        <figure className={styles.analyticsVisual}>
          <img src="/img/home/torai-marketing-dashboard-concept.png" alt="虎威のXマーケティング分析画面の開発イメージ" loading="lazy" />
          <figcaption>開発中の画面イメージです。実際の仕様・表示内容は変更される場合があります。</figcaption>
        </figure>
      </div>
    </section>
  );
}

function ProductProof() {
  return (
    <section className={styles.productSection}>
      <div className="container">
        <div className={styles.centerHeading}>
          <Eyebrow>実際の画面で確認</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>まず投稿作業を減らし、分析する時間をつくる</Heading>
          <p className={styles.sectionLead}>複数の投稿原稿と予約日時を見渡しながら、まとめて運用。投稿後はデータを次の改善に活かします。</p>
        </div>
        <div className={styles.productGrid}>
          <div className={styles.productShot}>
            <img src="/img/torai/x-accounts/x-posts_ai4.jpg" alt="AIで投稿原稿を作成する画面" loading="lazy" />
            <div><span>AI原稿作成</span><strong>投稿案をまとめて準備</strong></div>
          </div>
          <div className={styles.productShot}>
            <img src="/img/torai/x-accounts/x-posts_sche4.jpg" alt="複数の投稿を予約する画面" loading="lazy" />
            <div><span>一括予約</span><strong>狙った日時へまとめて設定</strong></div>
          </div>
        </div>
        <ul className={styles.featureStrip}>
          {features.map((feature) => <li key={feature}><CheckCircleRoundedIcon />{feature}</li>)}
        </ul>
      </div>
    </section>
  );
}

function OfferCta() {
  return (
    <section className={styles.offerSection}>
      <div className={`container ${styles.offerInner}`}>
        <div>
          <span className={styles.offerLabel}>初回ログインから24時間限定</span>
          <Heading as="h2">無料登録して、あなたの限定オファーを確認</Heading>
          <p>Googleアカウントでの登録は無料です。初月の限定価格は、ログイン後のサブスクリプション画面に表示されます。</p>
        </div>
        <div className={styles.offerAction}>
          <PrimaryCta label="無料登録して限定価格を確認" />
          <small>24時間を過ぎると限定オファーは終了します</small>
        </div>
      </div>
    </section>
  );
}

function GettingStarted() {
  return (
    <section className={styles.setupSection}>
      <div className="container">
        <div className={styles.centerHeading}>
          <Eyebrow>始め方</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>登録から運用開始まで、3つの段階</Heading>
          <p className={styles.sectionLead}>詳しい手順は、画面付きの公式マニュアルでいつでも確認できます。</p>
        </div>
        <div className={styles.setupGrid}>
          {setupSteps.map((step) => (
            <article key={step.number}>
              <span>{step.number}</span>
              <Heading as="h3">{step.title}</Heading>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.setupLink}>
          <Button component={Link} to="/docs/getting-started/overview" variant="outlined" size="large">初期設定の流れを見る</Button>
        </div>
      </div>
    </section>
  );
}

function PricingAndReferral() {
  return (
    <section className={styles.valueSection}>
      <div className={`container ${styles.valueGrid}`}>
        <article className={styles.pricingCard}>
          <Eyebrow>シンプルな月額制</Eyebrow>
          <Heading as="h2">必要な期間だけ、低コストで。</Heading>
          <div className={styles.price}><span>月額</span><strong>1,280</strong><span>円</span></div>
          <p>虎威のサブスクリプション料金です。X API・Gemini APIなどの外部サービス費用は、利用状況に応じて別途発生する場合があります。</p>
          <Button component={Link} to="/docs/subscription/billing-and-api-costs" variant="text">料金と外部API費用を確認する →</Button>
        </article>
        <article className={styles.referralCard}>
          <div className={styles.referralCopy}>
            <Eyebrow>使うほど、紹介するほどお得に</Eyebrow>
            <Heading as="h2">紹介1人で、1か月無料</Heading>
            <p>あなた専用の紹介リンクから登録した方が初回決済または銀行振込承認を完了すると、紹介人数に応じた報酬が確定します。</p>
            <Button component={Link} to="/docs/subscription/referral-program" variant="outlined">紹介報酬制度を見る</Button>
          </div>
          <img src="/img/subscription/referral-program.png" alt="虎威の紹介報酬プログラム画面" loading="lazy" />
        </article>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className={styles.faqSection}>
      <div className={`container ${styles.faqInner}`}>
        <div>
          <Eyebrow>よくある質問</Eyebrow>
          <Heading as="h2" className={styles.sectionTitle}>始める前の不安を解消</Heading>
          <p className={styles.sectionLead}>詳しい設定や操作方法は、公式マニュアルで確認できます。</p>
          <Button component={Link} to="/docs/intro" variant="outlined">マニュアルを開く</Button>
        </div>
        <div className={styles.faqList}>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <div className="container">
        <img src="/img/torai_icon_transparent.png" alt="" />
        <Eyebrow>作業を減らし、データから勝ち筋を育てる</Eyebrow>
        <Heading as="h2">投稿して終わる運用から、学び続けるマーケティングへ。</Heading>
        <p>アカウント作成は無料。Googleアカウントですぐに始められます。</p>
        <PrimaryCta label="Googleアカウントで無料登録する" />
        <div><Link href={SALES_LETTER_URL} target="_blank" rel="noopener noreferrer">詳しいサービス案内を見る</Link></div>
      </div>
    </section>
  );
}

function LatestNews() {
  return (
    <section className={styles.latestNews}>
      <div className={`container ${styles.latestInner}`}>
        <div><Eyebrow>NEWS</Eyebrow><Heading as="h2">最新情報</Heading></div>
        <Link className={styles.newsCard} to="/blog/blog-20260711">
          <time>2026.07.11</time><strong>V2サービス開始しました。</strong><span>詳しく見る →</span>
        </Link>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Xマーケティングツール「虎威」｜投稿自動化とデータ分析"
      description="AIによる投稿原稿作成、一括予約、自動投稿、投稿データの取得・整理で、X運用を継続的なマーケティングへ。"
    >
      <Hero />
      <main>
        <Opportunity />
        <Workflow />
        <ProblemSolution />
        <ProductProof />
        <MarketingAnalytics />
        <OfferCta />
        <GettingStarted />
        <PricingAndReferral />
        <Faq />
        <FinalCta />
        <LatestNews />
      </main>
    </Layout>
  );
}
