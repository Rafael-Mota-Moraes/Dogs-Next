import { jwtVerify } from 'jose';

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    await jwtVerify(token, new TextEncoder().encode('TESTE'), {
      algorithms: ['HS256'],
    });
  } catch (error) {
    return false;
  }

  return true;
}
