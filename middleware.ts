//middleware.tsは、Next.jsでリクエストが処理される前に実行される「ミドルウェア」を定義するためのファイルです。
// ミドルウェアは、アプリケーションにリクエストが到達する前に、リクエストをカスタマイズしたり、処理を追加することができる機能です。
// ここではログインしているかどうか確認するための準備を行う。

import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  /**   createMiddlewareClientについて
   *    Supabaseの認証やその他の機能をリクエストとレスポンスに結びつけるためのクライアントを作成。
   *    createMiddlewareClientは、Supabaseの認証ヘルパーを使って、リクエストに関連する認証情報を扱うための便利な方法を提供する。
   *    このクライアントを使うことで、認証されたユーザーの情報をリクエスト処理中に簡単にアクセスできる。
   */
  const supabase = createMiddlewareClient<Database>({ req, res });
  /**
   *    await supabase.auth.getSession()
   *    現在のリクエストに対するユーザーのセッションを取得します。
   *    セッション情報には、ユーザーがログインしているかどうか、またはそのユーザーが誰であるかといった情報が含まれています。
   *    これにより、ユーザーごとに異なる処理を行ったり、認証が必要なルートで適切な対応ができるようになります。
   */
  await supabase.auth.getSession();
  return res;
}
