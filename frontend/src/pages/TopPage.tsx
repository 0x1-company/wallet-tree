import { Box, Center, Flex } from '@chakra-ui/react'
import ConnectWallet from '../components/ConnectWallet'

const TopPage = () => {
  return (
    <Box h={700} bg='black'>
      <Center h='100%'>
        <ConnectWallet />
      </Center>
    </Box>
  )
}


export default TopPage