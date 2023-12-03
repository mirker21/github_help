import styles from './page.module.css'

import Title from './_components/Title';
import Sidebar from './_components/Sidebar';
import Navbar from './_components/Navbar';
import HeaderRead from './_components/HeaderRead';

async function getUser() {
	const res = await fetch("http://localhost:8080/user", {
		method: 'GET',
    		credentials: "include",
	})
	  .then(res => res.json())
	
		if (res.status === 201) {
	    		return user;
		} else {
		  	return {};
		}

}

export default async function Home() {
	const user = await getUser()
	console.log(user)

  return (
    <main className={`${styles.main} home-page`}>

      <div className="title-header-container">
        <Title />

        <div className="sidebar-header-container">
          <Sidebar />

          <div className="navbar-header-content-container">
            <Navbar />

            <header>
		    
            </header>

            <article id="home-content-container">
              <section>
                <h3>Recent Entries</h3>

                <hr />

              </section>
              
              <section>
                <h3>Recent Media</h3>

                <hr />

              </section>
            </article>			
          </div>
        </div>
      </div>
    </main>
  )
}
