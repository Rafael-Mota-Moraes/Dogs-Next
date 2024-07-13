import { useUser } from '@/context/user-context';
import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Minha conta',
};

export default function ContaPage() {
  return (
    <main>
      <h1>Conta</h1>
    </main>
  );
}
