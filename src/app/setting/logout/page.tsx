import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import type { Database } from "@/lib/database.types";
import Logout from "@/components/logout";

// ログアウトページ
const LogoutPage = async () => {
  /**
   * TODO: 以下の理由によりコメントアウトしておきます！
   * createServerComponentClientは使わない方が良い
   * ログイン状態でない場合のリダイレクト処理はログアウトページだけでなく、全てのページで共通の処理なので、共通化した方が良い
   */
  // const supabase = createServerComponentClient<Database>({
  //   cookies,
  // });

  // // セッションの取得
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // // 未認証の場合、リダイレクト
  // if (!session) {
  //   redirect("/auth/login");
  // }

  return <Logout />;
};

export default LogoutPage;
