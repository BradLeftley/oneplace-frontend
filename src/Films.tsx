import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Text } from '@chakra-ui/react';
import { gql, useQuery } from '@apollo/client';
import { Card } from './Card';
import LoadingCard from './LoadingCard';
const GET_MOVIES = gql`
query Movies {
    plexmovie {
      title
      image
    }
  }
`;

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 30
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

export const Films = () => {
   
    const { loading, error, data } = useQuery(GET_MOVIES);

    if (error) return <>Error! {error.message}`</>;
    const x = [{}, {}, {}, {}, {}, {}, {}, {}, {}]

    return (
      <>
      <Text fontSize='3xl'>Recently Released Dolby Vision</Text>
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
          

      
          {data && data.plexmovie.map((movie: { image: string | undefined; title: string }) => {
            return (
                <Card imageUrl={movie.image} name={movie.title}  />
            );
          })}
        </Carousel>
      
      </>
      );
}


export default Films