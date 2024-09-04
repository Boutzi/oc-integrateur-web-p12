'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function RedirectMe() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/about/me');
  }, [router]);

  return null;
}
