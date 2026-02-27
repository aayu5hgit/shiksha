import "../App.css"; 
import { useSpeechSynthesis } from "react-speech-kit";
import { 
  getAuth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
} from "firebase/auth"; 
import app from "../firebase"; 
import { useState, useEffect } from "react"; 
import { useNavigate } from "react-router";
import logo from './../images/bluelogo.png'
 
function Login() { 
  const auth = getAuth(app); 
  const { speak } = useSpeechSynthesis()
  const emailinp = 'Enter your email'
  const pass = 'Enter the password'
  const acc = 'Create Account'
  const signin = 'Sign In'
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate();
 
  const signUp = () => { 
    createUserWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => { 
        // Signed in 
        const user = userCredential.user; 
        console.log(user); 
        
        alert("Successfully created an account"); 
        // ... 
      }) 
      .catch((error) => { 
        const errorCode = error.code; 
        alert(errorCode); 
        // .. 
      }); 
  }; 

  const signIn = () => { 
    signInWithEmailAndPassword(auth, email, password) 
      .then((userCredential) => { 
        // Signed in 
        const user = userCredential.user; 
        console.log(user); 
        alert("You are now signed in"); 
        
        // ... 
      }) 
      .catch((error) => { 
        const errorCode = error.code; 
        alert(errorCode); 
      }); 
      
  }; 
  useEffect(() => {
    if (createUserWithEmailAndPassword || signInWithEmailAndPassword) {
      navigate("/home");
    } else {
      alert("Error!!");
    }
  }, [navigate]);
  
 
  return ( 
    <div className="App"> 
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo}
              alt="Shiksha Logo"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              And{' '}
              <a href="/coursecat" className="font-medium text-gray-500 hover:text-gray-900">
                Get access to the courses
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm">
              <div>
                <label className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  onMouseOver={() => speak({ text: emailinp })}
                  type={"email"}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  onMouseOver={() => speak({ text: pass })}
                  type={"password"}
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="   Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              {/* <div className="text-sm">
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Forgot your password?
                </a>
              </div> */}
            </div>

            <div>
              {/* <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onMouseOver={() => speak({ text: acc })}
                onClick={signUp}
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                </span>
                Sign in
              </button> */}
              <button onMouseOver={() => speak({ text: acc })} className="bg-transparent  hover:bg-blue-500 text-gray-900 font-semibold hover:text-gray-500 py-2 px-4 border border-blue-500  rounded" onClick={signUp}>Create account</button> 
              <button onMouseOver={() => speak({ text: signin })} className="bg-transparent mt-2 mb-2 ml-2 hover:bg-blue-500 text-gray-900 font-semibold hover:text-gray 500 py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signIn}>Sign in</button>
            </div>
          </form>
        </div>
      </div>
{/* 
      <input onMouseOver={() => speak({ text: emailinp })}
        type={"email"} 
        className="block p-2.5 mt-2 mb-2 ml-2 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="please enter your email" 
        onChange={(e) => setEmail(e.target.value)} 
      /> 
      <input onMouseOver={() => speak({ text: pass })}
        type={"password"} 
        placeholder="Enter New Password"
        className="block p-2.5 mt-2 mb-2 ml-2 w-50 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        onChange={(e) => setPassword(e.target.value)} 
      /> 
 
      <button onMouseOver={() => speak({ text: acc })} className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signUp}>Create account</button> 
      <button onMouseOver={() => speak({ text: signin })} className="bg-transparent mt-2 mb-2 ml-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={signIn}>Sign in</button>  */}
    </div> 

    
  ); 
} 
 
export default Login;