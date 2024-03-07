import styles from "./Sidebar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar";

import { User, useAuth0 } from "@auth0/auth0-react"

export function Sidebar() {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const {user} = useAuth0<User>()

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1607969391576-48f9021ded30?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
      />

     {isAuthenticated ? 
       <div className={styles.profile}>
       <Avatar src={user?.picture} />

       <strong>{user?.name}</strong>
       <span>{user?.email}</span>

       <footer>
       <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
           <PencilLine  size={20}/>
           Logout
         </button>
       </footer>
     </div> 
    : 
    <div className={styles.profile}>
    {/* <Avatar src="https://github.com/eltonfreitasx.png" /> */}
      
    <strong>Faça login</strong>
    <span>{''}</span>

    <footer>
      <button onClick={() => loginWithRedirect()}>
        <PencilLine  size={20}/>
        Login
      </button>
    </footer>
  </div>
    }
    </aside>
  );
}
