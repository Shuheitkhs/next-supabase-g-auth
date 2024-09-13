"use server";
// クライアントに渡す前に、認証状態の確認をするから

import Navigation from "./navigation";
import { createClient } from "@/utils/supabase/server";

// 認証状態の監視
const SupabaseListener = async () => {
  // セッションの取得
  const supabaseClient = createClient();
  const {
    data: { session },
  } = await supabaseClient.auth.getSession();

  // TODO: プロフィール用のテーブルは今はないのでコメントアウトしておきますね
  // プロフィールの取得
  // let profile = null;
  // if (session) {
  //   const { data: currentProfile } = await supabase
  //     .from("profiles")
  //     .select("*")
  //     .eq("id", session.user.id)
  //     .single();

  //   profile = currentProfile;

  //   // メールアドレスを変更した場合、プロフィールを更新
  //   if (currentProfile && currentProfile.email !== session.user.email) {
  //     // メールアドレスを更新
  //     const { data: updatedProfile } = await supabase
  //       .from("profiles")
  //       .update({ email: session.user.email })
  //       .match({ id: session.user.id })
  //       .select("*")
  //       .single();

  //     profile = updatedProfile;
  //   }
  // }

  // その結果をナビゲーションに渡す
  return <Navigation session={session} profile={null} />;
};

export default SupabaseListener;
