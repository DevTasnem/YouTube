import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/user.svg'
import mic from '../assets/mic.svg'
import vid from '../assets/vid.svg'
import noti from '../assets/noti.svg'
import useruser from '../assets/useruser.svg'


function NavPar() {

    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    // const [search, setSearch] = React.useState('');

    
    // const handleSearch = () => {
    //     onSearch(search);
    //   };
      
      
    const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    };

    const closeSidebar = (e) => {
      if (!e.target.closest('#sidebar') && !e.target.closest('#open-sidebar')) {
      setIsSidebarOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('click', closeSidebar);

    return () => {
      document.removeEventListener('click', closeSidebar);
    };
  }, []);

  const sign_out = ()=>{
    localStorage.clear()
    navigate('/')
  }


  return (
    <>
        <div className="bg-[rgb(15,15,15)]">
        {/* <div className="h-screen flex overflow-hidden bg-gray-200"> */}
          {/* Sidebar */}
          <div
            className={`absolute bg-[rgb(15,15,15)] border-r-2 text-white w-56 min-h-screen overflow-y-auto 
            transition-transform ${isSidebarOpen ? 'transform translate-x-0' 
            : 'transform -translate-x-full'
            } ease-in-out duration-300`}
            id="sidebar"
            style={{ zIndex: 1000 }}
          >
            {/* Your Sidebar Content */}
            <div className="p-4">
              {/* <h1 className="text-2xl font-semibold">Dashboard</h1> */}
              <button className={`w-7 h-7 ${window.innerWidth <= 768 ? 'hide-icons' : ''} text-gray-500 hover:text-gray-600`}
                id="open-sidebar" onClick={toggleSidebar}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>
                  {/* <Link to='/'>
                        <div className='flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"  viewBox="0 0 24 24">
                        <path d="M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z"/>
                        </svg>
                        <div className='text-white text-xs'>
                            Home
                        </div>
                        </div>
                        </Link> */}
              <ul className="mt-4">
                <li className="mb-2">
                  <div className=''>
                  <Link to="/" 
                  className="block hover:text-white dark:hover:text-gray-700">
                    
                    Home
                  </Link>
                  </div>
                </li>
                <li className="mb-2">
                <Link to="/ProjectsList" 
                  className="block hover:text-[#5C8374]">
                    Shorts
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/StudentList" 
                  className="block hover:text-[#5C8374]">
                    Subscription
                  </Link>
                </li>

                <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7"/>
                <li className="mb-2">
                  <Link to="/StudentList" 
                  className="block hover:text-[#5C8374]">
                    Your channel
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/StudentList" 
                  className="block hover:text-[#5C8374]">
                    History
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/StudentList" 
                  className="block hover:text-[#5C8374]">
                    Your videos
                  </Link>
                </li>
                <li className="mb-2">
                  <Link to="/StudentList" 
                  className="block hover:text-[#5C8374]">
                    watch later
                  </Link>
                </li>
                <hr className="w-48 h-1 mx-auto bg-gray-100 border-0 
                rounded md:my-10 dark:bg-gray-700 max-sm:my-7"/>
                <li className="mb-2">
                  <button 
                      onClick={sign_out}
                      className="block hover:text-[#5C8374]">
                        Sign Out
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Content  */}
          <div className="flex-1 flex flex-col">
            {/* Navbar  */}
            <div className="bg-[rgb(15,15,15)] shadow fixed w-full">
              <div className="mx-5">

                <div className="flex items-center justify-between ">
                {/* first  */}

                <div className='flex items-center justify-center gap-4'>
                <button className={`w-7 h-7 ${window.innerWidth <= 768 ? 'hide-icons' : ''} text-gray-500 hover:text-gray-600`}
                id="open-sidebar" onClick={toggleSidebar}>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" 
                      strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                  </button>

                    <Link to='/'>
                    <div className='flex items-center justify-center gap-1'>
                        <img src="https://homes4hope.org/wp-content/uploads/2019/01/youtube-icon-flat-red-play-button-logo-vector.png" 
                        alt="" 
                        className='w-8'/>

                        <p
                        // style={{fontFamily: `Impact, sans-serif`}}
                        className='text-white text-xl font-extralight'
                        >YouTube</p>
                    </div>
                    </Link>
                    

                 </div>

                    {/* second  */}
                 <div className='flex items-center justify-center gap-7'>

                                   
                <div class="input-group mb-3">
                <input type="search" 
                id="search" 
                className={`form-control mt-3 block self-center text-sm text-black border-[rgba(76,75,74,0.46)] rounded-3xl bg-[rgb(15,15,15)] dark:focus:border-blue-500 max-sm:w-9
                ${window.innerWidth <= 768 ? 'hide-icons' : ''}`} 
                placeholder="Search" 
                style={{width: '35rem'}}
                onChange={(event)=>{setSearch(event.target.value)}}/>

                <span 
                class="input-group-text mt-3 bg-[rgba(76,75,74,0.46)] border-[rgba(76,75,74,0.46)] rounded-3xl px-4"
                onClick={()=>{navigate('/')}}>
                <svg class="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </span>
                </div>

                <div className='bg-[rgba(76,75,74,0.46)]
                hover:bg-[rgba(76,75,74,0.61)] rounded-3xl py-2.5 px-2.5'>
                <img src={mic} alt="" 
                    className='w-6 h-6'/>
                </div>
                  </div>


                    {/* thierd  */}
                  <div className='flex justify-center items-center gap-8'>

                  {isLogged? 
                  <div className='flex gap-4'>
                <img src={vid} alt="add video" 
                className={`w-7 h-8 ${window.innerWidth <= 768 ? 'hide-icons' : ''}`}
                />

                <img src={noti} 
                alt="notification" 
                className={`'w-7 h-8 ${window.innerWidth <= 768 ? 'hide-icons' : ''}`}
                />
                
                
                <img class="w-8 h-8 rounded-full" 
                src={useruser}
                alt="Rounded avatar"/> </div> : 
                
                <div className='flex items-center justify-center gap-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                    </svg>

                    <Link to='/SignIn'>
                    <button className='rounded-3xl hover:bg-[rgb(38,56,80)] text-[rgb(62,166,255)] flex justify-center items-center gap-2 px-2 py-1'
                    style={{border: `1px solid rgba(122,121,120,0.46)`}}>
                        <img src={user}
                        className='w-8'
                        alt="" />
                        Sign in
                    </button>
                    </Link>
                    
                </div>
                }

                  </div>
                  
                 
                </div>
              </div>
            </div>
            </div>
            {/* <p className='text-white'>hi</p> */}
            </div>
            
    </>
  )
}

export default NavPar