import { Movie } from "../typing"
import Image from 'next/image'
import { useEffect, useState } from "react"
import { baseUrl } from "../constants/movie"
import {FaPlay} from "react-icons/fa"
import { ChevronLeftIcon, ChevronRightIcon, InformationCircleIcon } from "@heroicons/react/solid"
import { useRecoilState } from "recoil"
import { modalState, movieState } from "../atoms/modalAtom"

interface Props{
    netflixOriginals : Movie[]
}

function Banner({netflixOriginals}: Props ) {
    const [movie, setMovie] = useState<Movie | null>(null)
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [counter, setCounter] = useState(Math.floor(Math.random() * netflixOriginals.length));
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    useEffect(()=>{
        setMovie(netflixOriginals[counter]);
    },[netflixOriginals, counter])
    return (
        <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
            <div className="absolute top-0 left-0 -z-10 h-[95vh] w-screen">
                <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`} layout="fill" objectFit="cover"/>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">{movie?.overview}</p>
            <div className="flex space-x-3">
                <button className="bannerButton bg-white text-black">
                    <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/> Play
                </button>
                <button 
                    className="bannerButton bg-[gray]/70" 
                    onClick={() => {
                        setCurrentMovie(movie)
                        setShowModal(true)
                    }}
                >
                    More Info <InformationCircleIcon  className="h-5 w-5 md:h-8 md:w-8"/>
                </button>
            </div>
            <ChevronLeftIcon className="absolute top-[40vh] left-[1vw] h-9 w-9 cursor-pointer"  onClick={()=>{
                if(counter > 0){
                    setCounter(counter-1);
                }
                else{
                    setCounter(netflixOriginals.length-1)
                }
            }}/>
            <ChevronRightIcon className="absolute top-[40vh] right-[1vw] h-9 w-9 cursor-pointer"  onClick={()=>{
                if(counter === netflixOriginals.length - 1){
                    setCounter(0);
                }
                else{
                    setCounter(counter+1);
                }
            }}/>
        </div>
    )
}

export default Banner