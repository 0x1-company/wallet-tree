import { Button } from '@chakra-ui/react';
import { useState } from 'react'
import { session } from '../privy';

const ConnectWallet = () => {
  const [address, setAddress] = useState('');

  const connectToWallet = async () => {
    try {
      const { ethereum } = window

      if (!ethereum) {
        alert('Please install MetaMask for this demo: https://metamask.io/')
        return
      }

      if (!(await session.isAuthenticated())) {
        await session.authenticate()
      }
      const address = await session.address()
      setAddress(address ?? '')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Button
      bg='#79FB4C'
      color='black'
      borderRadius='0'
      onClick={connectToWallet}
    >
      <img src='/metamask.svg' />
      Connect Wallet
    </Button>
  )
}

export default ConnectWallet