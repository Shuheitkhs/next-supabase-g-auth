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
  const { data: session } = await supabase.auth.getSession();
  console.log(session);
  return (
    /**
     *  三項演算子でログインの有無により、ページの出し分け
     */
    <div className="text-center text-xl">
      {session ? <div>ログイン済だよ</div> : <div>未ログインだよ</div>}
    </div>
  );
};

export default Home;
