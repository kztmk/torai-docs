# 虎威 ファーストビュー画像

## ファイル

- `torai-first-view-editable.svg`: Illustrator編集用のマスターデータ
- `torai-first-view.png`: Web掲載用の完成画像
- `torai-hero-background.png`: 生成した背景ビジュアル
- `torai-icon.png`: 虎威アイコンのリンク画像

## Illustratorでの編集

1. `torai-first-view-editable.svg` をIllustratorで開きます。
2. 背景以外の見出し、本文、工程、矢印、パネル、機能ラベルは個別オブジェクトです。
3. 文字はアウトライン化していないため、環境に `Noto Sans JP` があればそのまま編集できます。
4. `torai-hero-background.png` と `torai-icon.png` はSVGと同じフォルダに置いたまま開いてください。
5. 入稿時は、編集用ファイルを複製してから文字をアウトライン化してください。

CTAボタンは含めていません。HTML側で画像直下にボタンを設置できます。

## 画像生成プロンプトの要点

Toraiカラーの濃紺・青・金を使用し、右側へPC、スマートフォン通知、投稿・結果・フォロー・分析を示す循環ビジュアルを配置。左側は編集可能な日本語コピーを載せるため余白を確保。CTA、文字、Xロゴは背景画像へ含めない。
