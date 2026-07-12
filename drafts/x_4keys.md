X API（Pay-per-use）で投稿（ポスト作成）やDM送信を行うためのAPIキー4種（API Key、API Secret、Access Token、Access Token Secret）の取得方法を、公式手順に基づいて順番に解説します。

## 4つのステップで簡単に取得できます。

1. X Developer consoleにサインイン（Xのアカウント毎）
2. プロジェクトを作成しアプリを追加する。
3. クレジットの事前購入を行う
4. アプリ設定で権限を、「Read, Write, and Direct Messages」に変更
5. コンシューマーキー（APIキー）、アクセストークンなど4種キーを取得

## ステップ1　初回サインイン

　Xのアカウントにブラウザでサインインします。

　別のタブを開き、Developer Console（https://console.x.com）にアクセスすると以下の画面が開きます。

　<image src="step1_x-devconsole-signin3.png" />

　必要事項を入力し、規約に同意し「送信」ボタンをクリックします。

### 入力すること

- アカウント名
- XのデータおよびAPIのすべてのユースケースを説明
- 3つのチェックボックスをオンにする

  <dl>
    <dt>アカウント名</dt>
      <dd>Xのアカウント名と同じで良い</dd>
    <dt>ユースケース</dt>
      <dd>「個人的なマーケティングと個人事業のブランド確立が目的で、スケジュール投稿、エンゲージメントの計測などを行います。」をAIに英文にしてもらう</dd>
    <dt>同意</dt>
      <dd>どれも意義なければオンにしてください。</dd>
  </dl>

## ステップ2 アプリの追加・設定

初回サインインが完了するとダッシュボードが表示されます。次回からは直接ダッシュボードが表示されます。

<image src="step2_x-devconsole-dashboard.png"/>

左側メニューの「アプリ」をクリックします。
下図のようにアプリがあれば何もすることはありません。

<image src="step2_x-devconsole-addApp0.png" />

アプリがない場合、または自分で追加したい場合には、「+new」をクリックしてアプリを追加します。

<image src="step2_x-devconsole-addApp1.png" />
<image src="step2_x-devconsole-addApp2.png" />
<image src="step2_x-devconsole-addApp3.png" />
<image src="step2_x-devconsole-addApp4.png" />

## ステップ3 クレジットの事前購入

2026年2月6日に正式にX APIの使用が従量課金に変更になりました。しばらくは無料プランでも投稿が可能でしたが3月末にはエラーになりました。

現在では事前にクレジットを購入していない場合にはAPIを使用するとエラーになります。

### 事前クレジット購入方法

左側メニューから「請求書作成 ＞　クレジット」を選択し、右側ペイン上部の「残高」欄にあう「クレジットを購入する」ボタンをクリックします。
<image src="step3_x-devconsole-payment0.png">

購入額を選択するダイアログが表示します。最低購入額がは＄5.00です。購入クレジット額を選択し「Continue to payment」ボタンをクリックします。
<image src="step3_x-devconsole-payment1.png">

支払い情報を入力し決済を行います。
<image src="step3_x-devconsole-payment2.png">

支払いがが完了すると残高が表示されます。
<image src="step3_x-devconsole-payment2.png">

規定では残高が減ると自動でチャージがオフですが確認してください。
<image src="step3_x-devconsole-paymentCap0.png">

請求サイクル内での支出上限を決めることができます。この金額を超えた場合にはAPIの使用がブロックされます。
<image src="step3_x-devconsole-paymentCap1.png">

## ステップ4　アプリの設定

登録したアプリがポストの「読み込み」、「書き込み」、「DMの送信」ができるよう権限を変更します。

左側メニューの「アプリ」をクリックし、アプリ一覧から虎威で使用するアプリをクリックします。
<image src="step5-x-devcondole-4keys.png" />
アプリの詳細が表示しますので、右上にある「Settings（設定）」をクリックします。

<image src="step3_x-devconsole-changeSettings0.png">

アプリの権限の項目から
　「読み書きおよびダイレクトメッセージ」
を選択します。

アプリの種類の項目から
　「ウェブアプリ、自動化アプリまたはボット」
を選択します。

下へスクロールします。

アプリ情報の欄

　「コールバックURI/リダイレクトURL」の欄にGoogle SheetのApps ScriptをデプロイしたURLを貼り付けます。

　「ウェブサイトURL」には虎威のサイト「https://torai.try-try.com」と入力します。

最後に「変更を保存する」ボタンをクリックします。

<image src="step3_x-devconsole-changeSettings2.png" />

## ステップ5 投稿に必要なキー4つを取得

アプリの権限の設定が完了すると、アプリ一覧へ戻ります。キーを取得するために、再度アプリをクリックします。

<image src="step5-x-devcondole-4keys.png" />

キーの一覧が表示されます。権限を変更した場合には以前のキーとは権限が異なるため再作成が必要です。

OAuth 1.0キーの欄にあるコンシューマーキー（APIキー）の「再生成」ボタンをクリックします。
<image src="step5-x-devcondole-4keys0.png" />

「APIキーおよびシークレットを再生成する」ダイアログが表示しますので「はい、再生成します」をクリックします。
<image src="step5-x-devcondole-4keys1.png" />

2つのキー

- コンシューマーキー（APIキー）
- コンシューマーキーシークレット（APIキーシークレット）

が表示されますので、それぞれコピーボタンをクリックしてメモなどに貼り付けて保存してください。

「閉じる」ボタンをクリックすると2度と表示されません。その際は再生成となります。
<image src="step5-x-devcondole-4keys2.png" />

次にアクセストークンを再生成します。

アクセストークンの欄にある「生成する」ボタンをクリックします。

「アクセストークンとシークレットを再生成する」ダイアログが表示しますので、「はい、再生成します」をクリックします。
<image src="step5-x-devcondole-4keys3.png" />
2つのキー

- アクセストークン
- アクセストークンシークレット

が表示されますので、それぞれコピーボタンをクリックしてメモなどに貼り付けて保存してください。

「閉じる」ボタンをクリックすると2度と表示されません。その際は再生成となります。
<image src="step5-x-devcondole-4keys4.png" />
以上、4つのキーが取得できれば完了です。

# 1. mainブランチを更新

git switch main
git add .
git commit -m "something"
git push origin main

# 2. releaseブランチに切り替えて最新化

git switch release
git pull origin release

# 3. mainの変更をreleaseに取り込む

git merge main

# コンフリクトが出たら解消してから commit

# 4. releaseブランチをpush

git push origin release

# 5. releaseの最新コミット(=今取り込んだコミット)にタグを打つ

git tag -a "v-blog20260711" -m "something2"

# 6. タグをpush → ワークフロー起動

git push origin v-blog20260711
