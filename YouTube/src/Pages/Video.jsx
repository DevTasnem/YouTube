import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import NavPar from '../Componenets/NavPar'
import axios from 'axios'
import da from '../assets/dislike-after.svg'
import db4 from '../assets/dislike-b4.svg'
import la from '../assets/like-after.svg'
import lb4 from '../assets/like-before.svg'
import share from '../assets/share.svg'
import ad from '../assets/tuta_ad.png'
import useruser from '../assets/useruser.svg'
import info from './Comments'


function Video() {

    const navigate = useNavigate()
    const { videoId } = useParams()
    const youtube_video = ''
    const [data, setData] = React.useState([])
    const [showFullDescription, setShowFullDescription] = React.useState(false);
    const [likes, setLikes] = React.useState(0);
    const [comment, setComment] = React.useState('')
    const [comments, setComments] = React.useState([])
    // const [pplComments, setPplComments] = React.useState([])
    const [isLogged, setIsLogged] = React.useState(localStorage.getItem('isLogged'))
    const user = localStorage.getItem('user')
    const userData = JSON.parse(user);
    const [videosToShow, setVideosToShow] = React.useState(10);
    // const [dislikes, setDislikes] = React.useState(0);
  
    const handleLike = () => {
      setLikes(likes + 1);
    };

    const handleShowMore = () => {
        setVideosToShow((prev) => prev + 10);
      };
    
      // Filter the videos based on the number to display
      const filteredVideos = data.slice(0, videosToShow);
      
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };

    React.useEffect(()=>{
        // axios.get(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=PLcgglYcXT1JlOODNfEt-iGVoQpzZRT10o&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`)

        axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLcgglYcXT1JlOODNfEt-iGVoQpzZRT10o&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0&part=snippet&maxResults=48`)

        // love 

        // axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`)
        .then(res=>{
            console.log(res.data.items);
            setData(res.data.items);
        })

        axios
        .get(`https://65730c11192318b7db417733.mockapi.io/youtube/comments?videoId=${videoId}`)
        .then((res) => {
          setComment(res.data);
        });
    }, [videoId]);

    const addComment = () => {
        if (isLogged) {
            if (comment.trim() !== '') {
                axios.post('https://65730c11192318b7db417733.mockapi.io/youtube/comments', {
                    vidId: videoId,
                    comment: comment,
                });
    
                setComments([...comments, { vidId: videoId, comment: comment }]);
                setComment(''); // Clear the comment input
            }
        } else {
            navigate('/SignIn')
        }
        
    }

    // const getComments = ()=>{
    //     axios.get(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`)
    //     .then(res=>{
    //         console.log(res)
    //         setPplComments(res.data)
    //     })
    // }
    

    const selectedVideo = data.find((item)=>
    item.snippet.resourceId.videoId == videoId
    )

    console.log(selectedVideo);

    const like = ()=>{
        src={la}
    }

  return (
    <>
    <NavPar/>

    <div className='bg-[rgb(15,15,15)]'>

        <div className='grid grid-cols-12 h-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center lg:mr-10'>

            <div className='col-span-1'></div>

            {/* main vid  */}
            <div className='col-span-7 mt-20 max-sm:flex max-sm:justify-center max-sm:items-center'>
            {selectedVideo && (
              <div className='flex flex-col h-full'>
                <iframe
                title={selectedVideo.snippet.title}
                // width="560"
                // height="315"
                className='w-[100%] h-[65vh] max-sm:w-[85%] max-sm:h-[15rem] rounded-2xl'
                src={`https://www.youtube.com/embed/${selectedVideo.snippet.resourceId.videoId}`}
                allowFullScreen
                
              ></iframe>

                <div className='text-lg max-sm:text-sm text-white font-bold mt-4'>{selectedVideo.snippet.title}</div>

                <div className='flex justify-between items-center mt-2'>
                    <div className=' flex items-center justify-center
                    gap-3'>
                    <img
                // src={`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${item.snippet.channelId}&key=AIzaSyAHrnH9CTwkXvUkkWDRJr2fYu8TDYHxPM0`}
                src='https://cdn-icons-png.flaticon.com/128/847/847969.png'
                alt='Channel user'
                className='w-10 h-10 rounded-full'
                />
                <div className='text-white'>
                <p className=''>{selectedVideo.snippet.videoOwnerChannelTitle}</p>
                <p className='text-gray-400 text-xs'>4.93M subscribers</p>
                </div>
                <button className='bg-white rounded-3xl py-1 px-4 font-bold'>Subscribe</button>
                    </div>

                    <div className='flex justify-center items-center gap-3 text-white'>
                        
                            <button  
                            className='flex bg-[rgba(76,75,74,0.46)]
                            rounded-3xl py-1 px-4 font-bold gap-2 hover:bg-[rgba(76,75,74,0.61)]'
                            onClick={handleLike}>

                            <img 
                            onClick={like}
                            src={lb4}
                            className='w-5' 
                            alt="" />
                            {likes}
                        </button>
                        <button className='flex bg-[rgba(76,75,74,0.46)]
                        rounded-3xl py-1.5 px-4 font-bold hover:bg-[rgba(76,75,74,0.61)]'>
                            <img src={db4}

                            className='w-5' fill='white' alt="" />
                        </button>

                        <button className='flex gap-2 bg-[rgba(76,75,74,0.46)]
                        rounded-3xl py-1.5 px-4 font-bold hover:bg-[rgba(76,75,74,0.61)]'>
                            <img src={share}
                            className='w-6' fill='white' alt="" />
                            Share
                        </button>

                        <button className='flex gap-2 bg-[rgba(76,75,74,0.46)]
                        hover:bg-[rgba(76,75,74,0.61)] rounded-full py-2.5 px-2.5 font-bold'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
                            </svg>
                        </button>
                        
                    </div>

                </div>
                    {/* description  */}
                <div className='bg-[rgba(76,75,74,0.46)] mt-5 rounded-3xl p-3 text-white hover:bg-[rgba(76,75,74,0.61)]'>
                    {/* {selectedVideo.snippet.description} */}
                    <p>8.3M views⠀⠀5 years ago</p>
                    {showFullDescription
                    ? selectedVideo.snippet.description
                    : `${selectedVideo.snippet.description.slice(0, 200)}...`}
                  <button
                    onClick={toggleDescription}
                    className='text-gray-400'
                  >
                    {showFullDescription ? 'Read Less' : 'Read More'}
                  </button>
                </div>

                 {/* comments  */}
                 <div className='p-7'></div>
                 <div>
                 <p className='text-white text-xl font-bold'>Comments</p>

                    <div className='flex items-center justify-start '>
                        <img src={useruser}
                        className='w-7'
                        alt="" />
                    <input
                        type="text"
                        name="Comment"
                        value={comment}  // Fix this line
                        onChange={(e) => { setComment(e.target.value); }}
                        className="bg-[rgb(15,15,15)] border-none w-[100%] text-white"
                        style={{ borderBottom: `1px solid white` }}
                        placeholder="add a comment"
                    />
                    </div>
                    <div className='flex justify-end items-center gap-4'>
                        <button className='text-white'>Cancel</button>
                        
                        <button 
                        onClick={addComment}
                        className='flex gap-2 bg-[rgba(76,75,74,0.46)]
                        rounded-3xl py-2 px-3 font-bold hover:bg-[rgba(76,75,74,0.61)] text-white'>
                            
                            Comment
                        </button>

                    </div>
                 
                 </div>

                 {comments.map((comment, index) => (
                                        <div key={index} className='flex-col items-center justify-start mt-10'>

                                            <div className='flex'>
                                            <img src={useruser} className='w-7' alt='' />
                                            <div>
                                            <p className='text-white text-xs ml-2'>{userData.username}</p>
                                            <p className='text-white ml-2'>{comment.comment}</p>
                                            </div>
                                            </div>
                                            <div className='flex justify-start items-center text-white'>
                        
                                        <button  
                                        className='flex 
                                        rounded-3xl py-1 px-4 font-bold gap-2 '
                                        onClick={handleLike}>

                                        <img 
                                        onClick={like}
                                        src={lb4}
                                        className='w-4' 
                                        alt="" />
                                        {likes}
                                    </button>
                                    <button className='flex 
                                    rounded-3xl py-1.5 px-4 font-bold '>
                                        <img src={db4}

                                        className='w-4' fill='white' alt="" />
                                    </button>

                                    
                                </div>
                                                    </div>
                                                ))}
                            {info.map((item,) => (
                                        <div key={item.id} className='flex-col gap-1 items-center justify-start mt-10'>
                                            <div className='flex'>
                                            <img src={useruser} className='w-7' alt='' />
                                            <div>
                                            <p className='text-white text-xs ml-2'>{item.name}</p>
                                            <p className='text-white ml-2'>{item.comment}</p>
                                            </div>
                                            </div>
                                            <div className='flex justify-start items-center gap-3 text-white'>
                        
                            <button  
                            className='flex
                            rounded-3xl py-1 px-4 font-bold gap-2'
                            onClick={handleLike}>

                            <img 
                            onClick={like}
                            src={lb4}
                            className='w-4' 
                            alt="" />
                            {likes}
                        </button>
                        <button className='flex
                        rounded-3xl py-1.5 px-4 font-bold'>
                            <img src={db4}

                            className='w-4' fill='white' alt="" />
                        </button>

                        
                    </div>
                                        </div>
                                    ))}
            
              </div>
            
           
            )}
            
            </div>


                {/* other vids  */}
            <div className='flex-col col-span-4 mt-20'>
            <div className='flex px-5 py-1 gap-3'>

            <a target='_blank' href={`https://www.linkedin.com/in/tasneem-alluhimi-a45541215/`} >
            <div className='w-52 h-32 bg-cover bg-no-repeat  rounded-lg border'
            style={{backgroundImage: `url(${ad})`}}>
            </div>
            </a>

            <div className='text-white'>
            <p className='text-sm
            font-bold'>
                One of the best Front-end developers!
            </p>
            <p className='text-xs text-gray-400'>Tasneem Alluhimi</p>
            </div>
            </div>

                {filteredVideos.map((item)=>(
                    <div className='flex px-5 py-1 gap-3'>

                        <Link to={`/Video/${item.snippet.resourceId.videoId}`}>
                        <div className='w-52 h-32 bg-cover bg-no-repeat bg-center rounded-lg'
                        style={{backgroundImage: `url(${
                            item.snippet.thumbnails.maxres
                            ? item.snippet.thumbnails.maxres.url
                            : item.snippet.thumbnails.standard.url
                        })`}}>
                        </div>
                        </Link>

                    <div className='text-white'>
                        <p className='text-sm
                        font-bold'>
                            {item.snippet.title}
                        </p>
                        <p className='text-xs text-gray-400'>{selectedVideo.snippet.videoOwnerChannelTitle}</p>
                    </div>
                    </div>
                ))} 
                <div className='flex items-end justify-center p-3'>
                {data.length > videosToShow && (
          <button
            onClick={handleShowMore}
            className='bg-[rgba(76,75,74,0.46)] hover:bg-[rgba(76,75,74,0.61)] 
            text-white px-4 py-2 mt-4 rounded-md self-end'
          >
            Show More
          </button>
        )}
                </div>
                   
            </div>
        </div>
    </div>
    </>
  )
}

export default Video