
import { Box, Image, Text } from "@chakra-ui/react"

type CardProps = {
  imageUrl: string | undefined
  name: string
}


export function Card({ name, imageUrl} : CardProps) {
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
    <Box maxW='sm' borderRadius='lg' padding={3} overflow='hidden'>
      <Image src={imageUrl} alt={property.imageAlt} draggable={false} _hover={{ transform: 'scale(1.5)', transition: '1s', zIndex: '10000' }} />
      <Text fontSize='md' paddingTop={'.5rem'}>{name}</Text>
    </Box>
  )
}