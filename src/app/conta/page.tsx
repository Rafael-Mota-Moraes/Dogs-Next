'use client';
import userGet from '@/actions/user-get';
import { useUser } from '@/context/user-context';
import React from 'react';

export default function ContaPage() {
  const { user } = useUser();

  return (
    <main>
      <h1 onClick={() => console.log('teste')}>Conta: {user?.nome}</h1>
    </main>
  );
}
