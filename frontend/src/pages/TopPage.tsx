import { Box, Button, Center, Flex } from '@chakra-ui/react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { WalletContext } from '../context/WalletContext'

const TopPage = () => {
  const navigate = useNavigate()
  const { address, connectToWallet } = useContext(WalletContext)

  const connectWallet = async () => {
    await connectToWallet()
    navigate('/form/edit')
  }

  return (
    <Box h={700} bg='black'>
      <Center h='100%'>
        <Button
          bg='#79FB4C'
          color='black'
          borderRadius='0'
          onClick={connectWallet}
        >
          <img src='/metamask.svg' />
          Connect Wallet
        </Button>
      </Center>
    </Box>
  )
}

export default TopPage