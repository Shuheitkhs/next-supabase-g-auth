'use client';

import Link from 'next/link';
import type { Session } from '@supabase/auth-helpers-nextjs';
import { useEffect } from 'react';
import useStore from '../../store';
import type { Database } from '@/lib/database.types';

type ProfileType = Database['public']['Tables']['profiles']['Row'];

// ナビゲーション
const Navigation = ({ session, profile }: { session: Session | null; profile: ProfileType | null }) => {
  const { setUser } = useStore();

  useEffect(() => {
    setUser({
      id: session ? session.user.id : '',
      email: session ? session.user.email! : '',
      full_name: session && profile ? profile.full_name : '',
      introduce: session && profile ? profile.introduce : '',
      avatar_url: session && profile ? profile.avatar_url : '',
    });
  }, [session, setUser, profile]);

  return (
    <header className="shadow-lg shadow-gray-100">
      <div className="py-5 container max-w-screen-sm mx-auto flex items-center justify-between">
        <Link href="/" className="font-bold text-xl cursor-pointer">
          Next-Todo-supabase-GOAuth
        </Link>

        <div className="text-sm font-bold">
          {session ? (
            <div className="flex items-center space-x-5">
              <Link href="/settings/profile">
                <div>プロフィール</div>
              </Link>
            </div>
          ) : (
            <div className="flex items-center space-x-5">
              <Link href="/login">
                <button className="rounded bg-gray-700 text-white px-4 py-2 hover:bg-gray-400">ログイン</button>
              </Link>
              <Link href="/auth/signup">
                <button className="rounded bg-gray-700 text-white px-4 py-2  hover:bg-gray-400">サインアップ</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;
