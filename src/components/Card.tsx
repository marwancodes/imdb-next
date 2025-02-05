import Image from "next/image";
import Link from "next/link";
import { FiThumbsUp } from "react-icons/fi";
import { Result } from "./Results"

type CardProps = {
    result: Result;
}
const Card = ({ result }: CardProps) => {
    // console.log(result.poster_path)
  return (
    <div className='group cursor-pointer sm:hover:shadow-amber-500 sm:shadow-md rounded-lg sm:border sm:border-amber-600 sm:m-2 transition-shadow duration-200'>
      <Link href={`/movie/${result.id}`}>
        <Image src={`https://image.tmdb.org/t/p/original/${ result.backdrop_path || result.poster_path }`}
          alt=""
          width={500}
          height={300}
          className='sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300'>
        </Image>
        <div className="p-2">
            <h2 className="text-lg font-bold truncate">{result.title || result.name}</h2>
            <p className="line-clamp-2 text-md">{result.overview}</p>
            <p className="flex items-center justify-center">{result.release_date || result.first_air_date}
                <FiThumbsUp className="h-5 mr-1 ml-3" />
                {result.vote_count}
            </p>
        </div>
      </Link>
    </div>
  )
}

export default Card