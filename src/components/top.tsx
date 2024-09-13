'use client';

import { Session } from '@supabase/supabase-js';

export const Top = ({ session }: { session: Session | null }) => {
  return <div className="text-center text-xl">{session ? <div>ログイン済だよ</div> : <div>未ログインだよ</div>}</div>;
};
