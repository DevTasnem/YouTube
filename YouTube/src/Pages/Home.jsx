import React from 'react'
import axios from 'axios'
import NavPar from '../Componenets/NavPar'
import more from '../assets/more.png'
import { Link, useNavigate } from 'react-router-dom';
import user from '../assets/user.svg'
import mic from '../assets/mic.svg'
import vid from '../assets/vid.svg'
import noti from '../assets/noti.svg'
import useruser from '../assets/useruser.svg'

function Home() {

    const [data, setData] = React.useState([])
    const [filteredData, setFilteredData] = React.useState([]);

    const navigate = useNavigate()
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    const [search, setSearch] = React.useState('');
    const [searchResult, setSearchResult] = React.useState([]);

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

  
  const handleSearch = () => {
    const searchResult = data.filter((item) => item.snippet.title.toLowerCase().includes(search.toLowerCase()));
    setSearchResult(searchResult);
};


    React.useEffect(()=>{
        // axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLcgglYcXT1JlOODNfEt-iGVoQpzZRT10o&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`)

        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLcgglYcXT1JlOODNfEt-iGVoQpzZRT10o&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0&part=snippet&maxResults=48`)

        // love 

        // axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`)
        .then(res=>{
            console.log(res.data.items);
            setData(res.data.items);
            const filteredResults = res.data.items.filter((item) =>
          item.snippet.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredData(filteredResults);
        })

    }, [])

    // const channelImage = (channelId) =>{
    //         return axios
    //           .get(
    //             `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`
    //           )
    //           .then((res) => {
    //             return res.data.items[0]?.snippet?.thumbnails?.default?.url;
    //           });
    //       }

  return (
    <>
     {/* <NavPar 
    //  onSearch={setSearchQuery}
     /> */}


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

<button 
  className="input-group-text mt-3 bg-[rgba(76,75,74,0.46)] border-[rgba(76,75,74,0.46)] rounded-3xl px-4"
  onClick={handleSearch}
>
  <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
  </svg>
</button>
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




    <div className='bg-[rgb(15,15,15)]'>
       
        <div className='grid grid-cols-12 text-white mt-16 h-full'>


            <div className={`col-span-1 mt-10 ${window.innerWidth <= 768 ? 'hide-icons' : ''} lg:mr-10`} >
               <div className='flex flex-col justify-center items-center p-5 gap-5'>

                        <Link to='/'>
                        <div className='flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white"  viewBox="0 0 24 24">
                        <path d="M4,21V10.08l8-6.96l8,6.96V21h-6v-6h-4v6H4z"/>
                        </svg>
                        <div className='text-white text-xs'>
                            Home
                        </div>
                        </div>
                        </Link>

                        <Link to='/'>
                        <div className='flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill='white' viewBox="0 0 24 24">
                        <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"/>
                        </svg>
                        <div className='text-white text-xs'>
                            Shorts
                        </div>
                        </div>
                        </Link>


                        <Link to='/'>
                        <div className='flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"/>
                        </svg>
                        <div className='text-white text-xs'>
                            Subscribtion
                        </div>
                        </div>
                        </Link>

                        <Link to='/'>
                        <div className='flex flex-col items-center justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="" enableBackground='new 0 0 24 24' viewBox="0 0 24 24">
                        <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"/>
                        </svg>
                        <div className='text-white text-xs'>
                            You
                        </div>
                        </div>
                        </Link>
               </div>
            </div>

            {/* videos  */}
            <div className='col-span-11 max-sm:col-span-12'>
                <div className='flex flex-wrap items-center justify-start gap-x-4
                gap-y-16 p-10 mt-20'>

                {(searchResult > 0 ? searchResult:data).map((item)=>(
            <div className='flex flex-col w-[19rem] rounded-2xl'
            key={item.id}>
                <Link to={`Video/${item.snippet.resourceId.videoId}`}>
                <div className='w-full h-48 bg-cover bg-no-repeat bg-center'
                style={{backgroundImage: `url(${
                    item.snippet.thumbnails.maxres
                      ? item.snippet.thumbnails.maxres.url
                      : item.snippet.thumbnails.standard.url
                  })`}}>
                </div>
                </Link>
                

                <div className='flex justify-center h-28 gap-3 mt-4'>
              <img
                // src={`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`}
                src='https://cdn-icons-png.flaticon.com/128/847/847969.png'
                alt='Channel user'
                className='w-9 h-9 rounded-full'
              />
              <div className=''>
                <p className='text-white text-sm
                font-bold'>
                    {item.snippet.title}
                </p>
              </div>

              <div className='flex-col items-start'>
              
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                </svg>

              </div>
            </div>

            </div>
        ))}

        </div>
            </div>


        </div>
        

    </div>
    </>
  )
}

export default Home