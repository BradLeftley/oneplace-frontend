

// Sample card from Airbnb

import { Box, Badge, Image } from "@chakra-ui/react"

export function Card() {
    const property = {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      beds: 3,
      baths: 2,
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: '$1,900.00',
      reviewCount: 34,
      rating: 4,
    }
  
    return (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' padding={3} overflow='hidden'>
        <Image src={property.imageUrl} alt={property.imageAlt} draggable={true} />
      </Box>
    )
  }