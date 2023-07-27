import React, { useEffect, useRef, useState } from 'react'
import { testimonies } from '../data/data'
import video from '../assets/gowork.mp4'
import videoCover from '../assets/cover.svg'
import playBtn from '../assets/button.button.btn.primary-color.btn-circle.btn-lg.png'
import { AnimatePresence, motion } from 'framer-motion'

const Testimonies = () => {
    const [current, setCurrent] = useState(0);
    const videoPlayer = useRef()
    // const playBtnWrapper = useRef()

    // const nextSlide = () => {
    //     setCurrent(current === testimonies.length - 1 ? 0 : current + 1);
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? testimonies.length - 1 : current - 1);
    // }

    useEffect (() => {
        let slider = setInterval(() => {
            setCurrent(current === testimonies.length - 1 ? 0 : current + 1);
        }, 5000)
        return () => {
            clearInterval(slider)
        }
    }, [current])

    function handleSlideChange(index) {
        setCurrent(index);
      }

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);

    useEffect(() => {
        // Add event listeners for video events
        videoPlayer.current.addEventListener('play', handleVideoPlay);
        videoPlayer.current.addEventListener('ended', handleVideoEnded);
        videoPlayer.current.addEventListener('pause', handleVideoPause);

        // return () => {
        //   // Clean up event listeners when the component unmounts
        //   videoPlayer.current.removeEventListener('play', handleVideoPlay);
        //   videoPlayer.current.removeEventListener('ended', handleVideoEnded);
        //   videoPlayer.current.removeEventListener('pause', handleVideoPause);
        // };
    }, []);

    function handleVideoPlay() {
        setIsVideoPlaying(true);
        videoPlayer.current.controls = true;
    }

    function handleVideoEnded() {
        setIsVideoPlaying(false);
        videoPlayer.current.controls = false;
    }

    function handleVideoPause() {
        setIsVideoPlaying(false);
        videoPlayer.current.controls = false;
    }

    function playVideo() {
        videoPlayer.current.play();
    }

    return (
    <section className='flex justify-between'>
        <div className="grid grid-cols-1 gap-x-10 my-16 w-full bg-[#f4501e15] md:grid-cols-2 lg:pl-16">
            <div className="flex flex-col justify-center gap-y-12 p-8 md:pr-8">
                <div className="flex overflow-hidden">
                    {testimonies.map((testimony, index) =>
                        current === index && (
                        <AnimatePresence key={testimony.id}>
                            <motion.div className="flex flex-col gap-y-6 font-Inter w-full" key={testimony.id}
                                initial={{ x: 300, opacity: 0 }}
                                animate={{ x: 0, opacity: 1,
                                    transition : {
                                      type: 'spring', 
                                      duration: 1.5, 
                                      delay: .2
                                    } }}
                                exit={{ x: -300, opacity: 0 }}
                            >
                                <p className='text-start'>{testimony.textimony}</p>
                                <div className="flex gap-x-2 items-center">
                                    <div className=" border-2 border-orange rounded-full w-10">
                                        <img src={testimony.image} alt="" className='rounded-full' />
                                    </div>
                                    <div className="flex flex-col text-start">
                                        <p className='text-orange font-semibold text-xs'>{testimony.name}</p>
                                        <small className=' text-[.7rem]'>{testimony.portfolio}</small>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    ))}
                    
                </div>
                <div className="slide-buttons flex gap-x-2">
                    {testimonies.map((testimony, index) => (
                        <button
                            key={testimony.id}
                            className={`w-2 h-2 rounded-full ${current === index ? 'bg-orange' : 'bg-gray-300'}`}
                            onClick={() => handleSlideChange(index)}
                        ></button>
                    ))}
                </div>
            </div>
            
            <div className="w-full h-full relative">
                {!isVideoPlaying && (
                    <div onClick={playVideo} className="play-button flex items-center justify-center cursor-pointer z-20 absolute w-12 top-0 bottom-0 left-1/2">
                        <img src={playBtn} alt="" />
                    </div>
                )}
                <video src={video} poster={videoCover} ref={videoPlayer} className='grid place-items-center w-full after:content-[""] after:absolute after:z-20 after:bg-[video-bg] after:w-[100%] object-cover h-[25rem]'></video>
            </div>
        </div>
    </section>
  )
}

export default Testimonies