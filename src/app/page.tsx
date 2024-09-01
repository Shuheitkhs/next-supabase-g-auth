import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

import type { Database } from "@/lib/database.types";

// メインページ
const Home = async () => {
  /**
   *
   */
  const supabase = createServerComponentClient<Database>({
    cookies,
  });

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
    <div className="text-center text-xl">
      {session ? <div>ログイン済</div> : <div>未ログイン</div>}
    </div>
  );
};

export default Home;
