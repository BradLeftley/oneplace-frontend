import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Text } from '@chakra-ui/react';
import LoadingCard from './LoadingCard';
import { gql, useQuery } from '@apollo/client';
import { Card } from './Card';

const GET_MOVIES = gql`
query TvShows {
  plextvshows {
    image
    title
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

export const TvShows = () => {

    const { loading, error, data } = useQuery(GET_MOVIES);
    const x = Array({}, {}, {}, {}, {}, {}, {}, {}, {})

    if (error) return <>Error! {error.message}`</>;
    console.log(data)
    return (
      <>
      <Text fontSize='3xl'>Recently Released Dolby Vision TV Shows</Text>
        <Carousel
          ssr
          partialVisbile
          itemClass="image-item"
          responsive={responsive}
          deviceType={'desktop'}
          autoPlay={false}
          arrows={false}
        >
                  {loading && x.map(_l => <LoadingCard />)}
          
          {data && data.plextvshows.map((movie: { image: string | undefined; title: string }) => {
            return (
                <Card imageUrl={movie.image} name={movie.title}  />
            );
          })}
        </Carousel>
      
      </>
      );
}


export default TvShows