'use server'

import { cookies } from 'next/headers'

export async function loginAction(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || 'morbihan2026'

  if (password === adminPassword) {
    const cookieStore = await cookies()
    // Definir le cookie de session pour 1 jour
    cookieStore.set('admin_session', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 heures
      path: '/',
    })
    return { success: true }
  }

  return { success: false, message: "Mot de passe incorrect." }
}

export async function logoutAction() {
  const cookieStore = await cookies()
  cookieStore.delete('admin_session')
  return { success: true }
}
