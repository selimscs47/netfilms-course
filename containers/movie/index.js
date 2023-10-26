import { FeaturedMovie } from '@/components/featured-movie'
import React from 'react'

function MovieContainer({ movieDetail }) {
  return <FeaturedMovie movie={movieDetail} isCompact={false}/> 
  
}

export default MovieContainer

