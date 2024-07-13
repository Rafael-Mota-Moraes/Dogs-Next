'use client';
import { useFormState, useFormStatus } from 'react-dom';
import Button from '@/components/forms/button';
import Input from '@/components/forms/input';
import ErrorMessage from '../helper/error-message';
import React from 'react';
import styles from './login-form.module.css';
import passwordLost from '@/actions/password-lost';

export const dynamic = 'force-dynamic';

function FormButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button disabled={pending}>Enviando...</Button>
      ) : (
        <Button disabled={pending}>Enviar e-mail</Button>
      )}
    </>
  );
}

export default function LoginPerdeuForm() {
  const [url, setUrl] = React.useState('');
  const [state, action] = useFormState(passwordLost, {
    ok: false,
    error: '',
    data: null,
  });

  React.useEffect(() => {
    setUrl(window.location.href.replace('perdeu', 'resetar'));
  }, []);

  return (
    <>
      <form action={action} className={styles.form}>
        <Input label="Email / usuário" name="login" type="text" />
        <input type="hidden" name="url" value={`${url}`} />
        <ErrorMessage error={state.error} />
        {state.ok ? (
          <p style={{ color: '#4c1' }}>Email enviado!</p>
        ) : (
          <FormButton />
        )}
      </form>
    </>
  );
}
