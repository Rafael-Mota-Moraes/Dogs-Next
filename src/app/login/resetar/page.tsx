import LoginResetarForm from '@/components/login/login-resetar-form';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resetar a senha | Dogs',
  description: 'Resete sua senha',
};

type ResetSearchParams = {
  searchParams: {
    key: string;
    login: string;
  };
};

export default async function PerdeuPage({ searchParams }: ResetSearchParams) {
  return (
    <div className="animeLeft">
      <h1 className="title">Resete a senha</h1>
      <LoginResetarForm
        keyToken={searchParams.key}
        login={searchParams.login}
      />
    </div>
  );
}
