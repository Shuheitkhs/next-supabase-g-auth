/** @type {import('next').NextConfig} */
const nextConfig = {
  //Server Actionsの有効化・serverActionsを有効にすることで、
  //Next.jsの新しい実験的な機能を使えるようにします。
  //これにより、サーバーサイドでの処理やデータフェッチが簡単になり、効率的なアプリケーション開発が可能です。
  experimental: {
    serverActions: true,
  },
  //   画像ドメインの設定
  //   アプリケーション内で外部の画像（この場合はSupabaseに保存されている画像）を安全に表示するために必要です。
  //   Next.jsのnext/imageコンポーネントは、セキュリティ上の理由から、許可されたドメインからのみ画像を読み込むように設定されています。
  //   そのため、Supabaseに保存された画像を表示するには、Supabaseのドメインを明示的に許可する必要があります。
  images: {
    domains: ["tkuaqokhjbhjdocquibs.supabase.co"],
  },
};
export default nextConfig;
