import { Top } from "@/components/top";
import { createClient } from "@/utils/supabase/server";

// メインページ
const Home = async () => {
  /**
   * クライアントコンポーネント用のsupabaseを作成
   */
  const supabase = createClient();

  /**
   *  supabase.auth.getSession()を使用して、現在のユーザーのログイン情報の取得
   */
  const {
    data: { session },
  } = await supabase.auth.getSession();
  return (
    /**
     *  三項演算子でログインの有無により、ページの出し分け
     */
    /**
     * TODO:
     * このコンポーネントはサーバーコンポーネントなので、デフォルトでは動的にUIを変更することはできません
     * そのため、クライアントコンポーネントの使用を検討すると良いですね
     */
    <Top session={session} />
  );
};

export default Home;
