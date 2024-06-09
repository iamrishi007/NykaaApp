import { createContext, useState } from "react";


export const Authcontext = createContext()

function AuthcontextProvider({ children }) {
     
     const [authDetailed, setAuthDetailed] = useState({
          isLoggedIn: "false",
          token: null
     })


     function login(token) {

          setAuthDetailed(
               {
                    isLoggedIn: true,
                    token: token
               }
          )
     }
     function logout(token) {

          setAuthDetailed(
               {
                    isLoggedIn: false,
                    token: null
               }
          )
     }
     return (
          <>
               <Authcontext.Provider value={{ authDetailed,login,logout}}>
                    {children}
               </Authcontext.Provider>
          </>
     )
}

export default AuthcontextProvider