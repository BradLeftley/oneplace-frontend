import {
  Box,
  Flex,
  Image,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';
import { gql, useQuery } from '@apollo/client';


const GET_GREEN_TOKEN = gql`
query Crypto {
  greensatoshi {
    name
    price
    priceDifference
    priceDifferenceHour
    imageUrl
  } 
  }
`;

interface StatsCardProps {
  title: string;
  stat: ReactElement;
  icon: ReactNode;
}
function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'2'}
      backgroundColor={useColorModeValue('white', 'gray.600')}
      shadow={'xl'}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      rounded={'lg'}>
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          {/* <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber> */}
          {stat}
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

function PriceDifferenceCard({ price, priceDifference, priceDifferenceHour }: { price: string, priceDifference: string, priceDifferenceHour: string }) {
  const pp = Number(priceDifference).toFixed(2)
  const colour = Number(pp) > 0 ? 'green' : 'red'
  const ppHour = Number(priceDifferenceHour).toFixed(2)
  const colourHour = Number(ppHour) > 0 ? 'green' : 'red'
  return <>
    <StatNumber fontSize={'2xl'} fontWeight={'medium'} display="inline-block" paddingRight={'.5rem'}>
      £{price}
    </StatNumber>

    <StatNumber fontSize={'2xl'} fontWeight={'medium'} display="inline-block" color={colour}>
      {pp}
    </StatNumber>
    <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
      Hour: <span style={{color: colourHour}}>{ppHour}</span> 
    </StatNumber>
  </>
}

export default function HeaderGroup() {


  const { loading, error, data } = useQuery(GET_GREEN_TOKEN);
  if (loading) return <>Loading</>
  if (error) return <>Error! {error.message}`</>;
  console.log(data)



  return (
    <Box  mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }} marginBottom={'1rem'}>
      <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 5, lg: 8 }}>
       
       {true && <>
       
        <StatsCard
          title={'Green Satoshi Token'}
          stat={<PriceDifferenceCard price={data.greensatoshi.price} priceDifference={data.greensatoshi.priceDifference} priceDifferenceHour={data.greensatoshi.priceDifferenceHour} />}
          icon={<Image src={data.greensatoshi.imageUrl} />}
        />
       </>}
       
        {/* <StatsCard
          title={'Green Satoshi Token'}
          stat={<PriceDifferenceCard price={data.greensatoshi.price} priceDifference={data.greensatoshi.priceDifference} priceDifferenceHour={data.greensatoshi.priceDifferenceHour} />}
          icon={<Image src={data.greensatoshi.imageUrl} />}
        />
              <StatsCard
            title={'Servers'}
            stat={<>11</>}
            icon={<Image src={CelImage} />}
          />       */}


        {/* <StatsCard
            title={'Servers'}
            stat={'1,000'}
            icon={<FiServer size={'2em'} />}
          />
          <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'2em'} />}
          />
        <StatsCard
            title={'Datacenters'}
            stat={'7'}
            icon={<GoLocation size={'2em'} />}
          /> */}
      </SimpleGrid>
    </Box>
  );
}