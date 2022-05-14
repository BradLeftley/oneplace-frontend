import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Image } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import { gql, useQuery } from '@apollo/client';
import { Card } from './Card';

const GET_MOVIES = gql`
query WatchListMovies {
  plexmoviewatchlist {
    title
    image
  }
}
`;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };

export const WatchListFilms = () => {

    const { loading, error, data } = useQuery(GET_MOVIES);
    if (loading) return <>Loading</>
    if (error) return <>Error! {error.message}`</>;
    console.log(data)
    return (
      <>
      <Text fontSize='3xl'>Watch List Movies</Text>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          deviceType={'desktop'}
          autoPlay={false}
          arrows={false}
        >
          {data.plexmoviewatchlist.map((movie: { image: string | undefined; title: string }) => {
            return (
                <Card imageUrl={movie.image} name={movie.title}  />
            );
          })}
        </Carousel>
      
      </>
      );
}


export default WatchListFilms