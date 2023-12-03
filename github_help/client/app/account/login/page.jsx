import Link from 'next/link'

import LoginForm from '../../_components/LoginForm'

export default function Login() {
  return (
    <main>
      <div>
          <div>Login</div>
          <Link href="/account/register">Register</Link>
      </div>
      <LoginForm />
    </main>
  )
}