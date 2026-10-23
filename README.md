# SHO SAKAMOTO Profile Portfolio

SHO SAKAMOTOのプロフィールポートフォリオサイトです。
化学メーカーでの研究開発職、オーストラリアでの約2年間のワーキングホリデーを経て、現在AIとプログラミングを学びながらWeb制作に取り組んでいる経歴や学習内容を紹介しています。

**公開URL：** https://profile-portfolio-tan.vercel.app/

## 主なセクション

| セクション | 内容 |
| --- | --- |
| About（自己紹介） | これまでの歩みと、Web制作に取り組む想い |
| Career（経歴） | 大学院修了から現在までをタイムライン形式で紹介 |
| Skills（スキル） | 「このサイトで使用」「学習中」「学び方」の3グループで紹介 |
| Works（制作実績） | 制作中・準備中・計画中のステータス付きで作品を紹介 |

## 使用技術

- [Next.js](https://nextjs.org) 16.4.2（App Router）
- React 19.3.0
- TypeScript 5
- Tailwind CSS 4（`@tailwindcss/turbopack` で読み込み）
- ESLint 9（`eslint-config-next`）
- `next/font`（Geist / Geist Mono）
- Vercel（ホスティング）

## 実装済みの特徴

- **レスポンシブ対応**：Tailwind CSSのブレークポイントで、スマートフォンからPCまでレイアウトや文字サイズを調整
- **ダークモード対応**：OSの設定（`prefers-color-scheme`）に合わせて配色を自動で切り替え
- **SEO設定**：Metadata APIでタイトル・ディスクリプション・OGP（`og:title` / `og:description` / `og:site_name` / `og:locale` など）を設定し、`<html lang="ja">` を指定
- **アクセシビリティへの配慮**：セマンティックなHTML構造、`aria-labelledby` によるセクション見出しの関連付け、キーボード操作時のフォーカス表示
- **ページ内ナビゲーション**：ヘッダーから各セクションへアンカーリンクで移動
- **データとUIの分離**：経歴・スキル・制作実績は配列データで管理し、項目の追加・更新がしやすい構成

## ディレクトリ構成

```
app/
├── layout.tsx   # 共通レイアウト・メタデータ（SEO設定）
├── page.tsx     # トップページ（各セクションとデータ）
└── globals.css  # Tailwind CSSの読み込み・カラー・フォント設定
```

## ローカルでの起動方法

```bash
npm install
npm run dev
```

ブラウザで http://localhost:3000 を開くと確認できます。

## ビルド確認方法

```bash
npm run build
```

ビルド後に `npm run start` を実行すると、本番環境と同じ状態をローカルで確認できます。
