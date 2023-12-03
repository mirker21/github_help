"use client"

import Link from 'next/link';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

async function checkLoginStatus() {
    const res = await fetch('http://localhost:4000/currentUser', {
      next: {
        revalidate: 0
      }
    });
    const currentUser = await res.json();
  
    const { name } = currentUser;
  
    let isLoggedIn = false;
  
    if (name !== '') {
        console.log("account: isLogged in TRUE")
      isLoggedIn = true;
    } else if (name === '') {
        console.log("account: isLogged in FALSE")
      isLoggedIn = false;
    }
    
    return isLoggedIn;
}

export default function Account() {
    const router = useRouter();

    // useEffect(() => {
    //     const checkLogin = async () => {
    //       const isLoggedIn = await checkLoginStatus()
    //       if (isLoggedIn === true) {
    //         router.push('/')
    //       } else {
    //           console.log('Account : not logged in yet!')
    //       }
    //     }
    //     checkLogin()
    // }, [])

    return (
        <main>
            <div>
                <section>
                    <p>Don't have an account yet?</p>
                    <Link href="/account/register">Register</Link>
                </section>
                <section>
                    <p>Already have an account?</p>
                    <Link href="/account/login">Login</Link>
                </section>
            </div>
        </main>
    )
}