// "use client"
// import { getUsers } from '../lib/users';

import styles from './page.module.css'

import Title from './_components/Title';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
// import File from './_components/File';
import HeaderRead from './_components/HeaderRead';
// import { useRouter } from 'next/navigation'

async function getUser() {
	const res = await fetch("http://localhost:8080/user", {
		method: 'GET',
    credentials: "include",
	})
  .then(res => res.json())

	if (res.status === 201) {
    // router.refresh();
    // requests the route in the background and refetch any data we need
    return user;
    // router.push('/');
} else {
  return {};
    // router.push('/not-found');
}
	
//   try {
//     await fetch("http://localhost:8080/user")
  
// 	if (newUserRes.status === 201) {
// 		console.log(user)
// 		return {
// 			props: { name: user.user.name },
// 		}
// 		// router.refresh();
// 		// requests the route in the background and refetches any data we need
// 	//   router.push('/account/login');
// 	} else {
// 	//   router.push('/not-found');
// 		return {
// 			props: { name: 'no name' },
// 		}
// 	}
    
//   } catch (e) {
// 		console.error(e)
// 		return {
// 			props: { name: 'no name' },
// 		}
//   }
}

export default async function Home() {
	const user = await getUser()
	console.log(user)
  // const users = await fetchUsers()
  // console.log(users);
  // const router = useRouter();

  // const [userData, setUserData] = useState({});

  // const handleClick = async () => {
  //     const res = await fetch('http://localhost:8080/logout', {
  //           method: 'POST',
  //           headers: {"Content-Type": "application/json"},
  //     })

  //     if (res.status === 201) {
  //         router.refresh();
  //         // requests the route in the background and refetch any data we need
  //         router.push('/account');
  //     } else {
  //         router.push('/not-found');
  //     }
  // }

  return (
    <main className={`${styles.main} home-page`}>
      {/* <div>
        {
          isConnected
          ?
          <h2>Success!</h2>
          :
          <h2>Failure!</h2>
        }
      </div> */}

      <div className="title-header-container">
        <Title />

        <div className="sidebar-header-container">
          <Sidebar />

          <div className="navbar-header-content-container">
            <Navbar />

            <header>
              {/* <HeaderRead headerTitle={`Welcome Home, ${props}!`} /> */}
            </header>

            <article id="home-content-container">
              {/* <button onClick={handleClick}>Logout</button> */}
              <section>
                <h3>Recent Entries</h3>

                <hr />

                {/* <section>
                  {userData.data?.entries?.map(entry => {
                  return (
                    <File key={entry.data.entry_date} data={entry} />
                  )
                  })}
                </section> */}
              </section>
              
              <section>
                <h3>Recent Media</h3>

                <hr />

                {/* <section>
                {userData.data?.media?.map(photo => {
                  return (
                  <File 
                    key={photo.data.media_path} 
                    data={photo} 
                  />
                  )
                })}
                </section> */}
              </section>
            </article>			
          </div>
        </div>
      </div>
    </main>
  )
}
