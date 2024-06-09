import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';
import axios from 'axios';
import { Authcontext } from '../Componants/AuthcontextProvider';

function LoginPage() {
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

     const { login } = useContext(Authcontext);
     const navigate = useNavigate();

     async function handleClick() {
          try {
               let res = await axios({
                    method: 'post',
                    url: 'https://reqres.in/api/login',
                    data: {
                         email, password
                    }
               });

               login(res.data.token);
               console.log(res.data.token);
               alert('Logged In!');
               navigate('/')
          } catch (error) {
               console.log(error);
          }
     }

     return (
          <div className="login-container">
               <h2>Login</h2>
               <p>Register now and get 1000 Nykaa reward points instantly!</p>
               <div className="input-group">
                    <input
                         type="text"
                         placeholder="Email"
                         value={email}
                         onChange={(e) => setEmail(e.target.value)}
                    />
               </div>
               <div className="input-group">
                    <input
                         type="password"
                         placeholder="Password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
                    />
               </div>
               <button className="login-button" onClick={handleClick}>Login</button>
               <div>
                    <p> email: eve.holt@reqres.in</p>
                    <p> password: cityslicka</p>
               </div>
          </div>
     );
}

export default LoginPage;
