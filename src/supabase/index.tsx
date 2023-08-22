'use client';

import { SessionContextProvider, Session } from '@supabase/auth-helpers-react';
import { useState, type ReactNode } from 'react';
import { createClient } from '@supabase/supabase-js';

export function SupabaseProvider({
  initialSession,
  children,
}: {
  initialSession?: Session;
  children: ReactNode;
}): JSX.Element {
  const [supabase] = useState(() =>
    createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
    ),
  );

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={initialSession}
    >
      <>{children}</>
    </SessionContextProvider>
  );
}
