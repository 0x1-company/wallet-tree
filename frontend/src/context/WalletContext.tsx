import { createContext, useState } from 'react'
import { session } from '../privy'

type WalletContextType = {
  address: string
  connectToWallet: () => Promise<void>
}

const createDefaultType = (): WalletContextType => ({
  address: '',
  connectToWallet: async ()=> {},
})

export const WalletContext = createContext<WalletContextType>(createDefaultType())

interface Props {
  children: React.ReactNode;
}

export const WalletProvider: React.FC<Props> = ({ children, ...props }) => {
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
      console.log(`setAddress(${address})`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <WalletContext.Provider value={{ address, connectToWallet }}>
      {children}
    </WalletContext.Provider>
  )
}