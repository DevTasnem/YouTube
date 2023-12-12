import React from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'


// Reminder fo me
// mockapi new account 
// email: projects@gmail.com
// password: 123456a

function SignUp() {

    const navigate = useNavigate()
    const [errorMes, setErrorMes] = React.useState('')
    const [err, setErr] = React.useState(false)
    const [inputs, setInputs] = React.useState({
      username: '',
      email: '',
      password: '',
      
    });
  
    const addInputs = (event)=>{
      setInputs({...inputs,
          [event.target.name]: event.target.value
      })
  }
  
  const Sign_up = ()=>{
  
    if (inputs.username.length < 3) {
      setErrorMes('Name should be at least 3 characters long');
      setErr(true)
      return;
    }
  
    if (!inputs.email) {
      setErrorMes('Please enter an email');
      setErr(true)
      return;
    }
  
    if (!inputs.password || inputs.password.length < 6 || !/[a-zA-Z]/.test(inputs.password) || !/\d/.test(inputs.password)) {
      setErrorMes('Password should be longer than 6 characters and include both letters and numbers');
      setErr(true)
      return;
    }
  
  
      axios.post('https://65730c11192318b7db417733.mockapi.io/youtube', {
          username: inputs.username,
          email: inputs.email,
          password: inputs.password,
          comment: '',
          vidId: '',
      })
      .then((response)=>{
          console.log("account created");
          localStorage.setItem('user', JSON.stringify(inputs));
          localStorage.setItem('isLogged', true);
          navigate('/')
  
      })
  }


  return (
    <>
        <div className="min-h-screen flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-white">
            Create a new account
        </h2>
        <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or <Link to="/SignIn"
                className="font-medium text-[rgb(232,236,234)] hover:text-[#717474] focus:outline-none focus:underline transition 
                ease-in-out duration-150">
                 Sign in to your account
            </Link>
        </p>

        {err ? (<div className="flex justify-center bg-red-100 border 
        border-red-400 text-red-700 px-4 py-3 my-2 rounded"
        role="alert">
        <span className="block sm:inline pl-2">
            <strong className="font-bold">{errorMes}</strong>
        </span>
        </div> )
        : ''}
        
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-[rgb(32,32,31)] py-8 px-4 shadow sm:rounded-lg sm:px-10">

                <div className="mt-6">
                    <label htmlFor="username" className="block text-sm font-medium 
                    leading-5  text-white">
                    username
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="username" 
                        name="username" 
                        placeholder="username" 
                        type="text" 
                        required="" 
                        value={inputs.username}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none 
                        focus:shadow-outline-blue focus:border-blue-300 transition duration-150 
                        ease-in-out sm:text-sm sm:leading-5
                "/>
                        
                    </div>
                </div>

                <div className="mt-6">
                    <label htmlFor="email" className="block text-sm font-medium leading-5  text-gray-700">
                        Email address
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">

                    <input 
                        id="email" 
                        name="email" 
                        placeholder="user@example.com" 
                        type="email" 
                        required="" 
                        value={inputs.email}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border 
                        border-gray-300 rounded-md placeholder-gray-400 focus:outline-none 
                        focus:shadow-outline-blue focus:border-blue-300 transition duration-150 
                        ease-in-out sm:text-sm sm:leading-5
                "/>
                        
                    </div>
                </div>

                <div className="mt-6">

                    <label htmlFor="password" className="block text-sm font-medium 
                    leading-5 text-white">
                        Password
                    </label>

                    <div className="mt-1 rounded-md shadow-sm">
                        
                    <input 
                        id="password" 
                        name="password" 
                        type="password" 
                        required="" 
                        value={inputs.password}
                        onChange={addInputs}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md 
                        placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition 
                        duration-150 ease-in-out sm:text-sm sm:leading-5"/>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="block w-full rounded-md shadow-sm">
            <button
                onClick={Sign_up} 
                className="w-full flex justify-center py-2 px-4 text-sm font-medium rounded-md 
                text-white bg-[rgba(76,75,74,0.46)] hover:bg-[rgba(76,75,74,0.61)] focus:outline-none focus:border-gray-950 focus:shadow-outline-indigo
                active:bg-gray-900 transition duration-150 ease-in-out"
                style={{border: '1px solid rgba(76,75,74,0.46)'}}>
                Sign in
            </button>
                    </span>
                </div>
            

        </div>
    </div>
</div>
    </>
  )
}

export default SignUp