import React from 'react'
import { Box, Skeleton, SkeletonText } from '@chakra-ui/react'
import LoadingImage from './loading.jpeg'
const LoadingCard = () => {
    return (
       <Box maxW='sm' borderRadius='lg' padding={3} overflow='hidden'>
        <Skeleton height={'100%'} minHeight='15.3rem'>
          <div><img alt="Rear view of modern home with pool" src={LoadingImage} className="chakra-image css-0" draggable="false" /></div>
        </Skeleton>
        <SkeletonText mt='4' noOfLines={1} spacing='4' width={'8rem'} />
      </Box>
    )
}

export default LoadingCard