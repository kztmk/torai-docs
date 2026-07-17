# WordPressへの組み込み

1. `torai-sales-letter-wordpress.css` をテーマの追加CSS、子テーマ、またはページ専用CSSへ追加します。
2. `torai-sales-letter-source.html` の `<main class="torai-lp">` から対応する `</main>` までをカスタムHTMLブロックへ貼り付けます。
3. `assets/images/...` をWordPressメディアへアップロードし、HTML内の画像URLを置換します。
4. 固定CTAが不要なら、末尾の `<div class="torai-mobile-sticky">...</div>` を削除します。

## 区間の境界

各区間には次のIDがあります。WordPressのブロックを区切る場合は、この単位で分割してください。

- `hero`
- `opportunity`
- `problem`
- `workflow`
- `product`
- `analytics`
- `policy`
- `mid-cta`
- `start`
- `price`
- `referral`
- `faq`
- `final-cta`

CTAリンクはすべて `https://torai.try-try.com/auth/signin` に設定済みです。

