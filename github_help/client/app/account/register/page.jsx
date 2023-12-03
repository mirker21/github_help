import Link from 'next/link'

import RegisterForm from '../../_components/RegisterForm'

export default function Register() {
  return (
    <main>
      <div className="register-login-navbar">
          <Link href="/account/login">Login</Link>
          <div>Register</div>
      </div>
      <RegisterForm />
    </main>
  )
}