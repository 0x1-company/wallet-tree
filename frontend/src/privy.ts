import { PrivyClient, SiweSession } from '@privy-io/privy-browser';
import { EthereumProvider } from '@privy-io/privy-browser/dist/sessions/siwe';

declare global {
  interface Window {
    ethereum: EthereumProvider
  }
}

export const session = new SiweSession(import.meta.env.VITE_PRIVY_API_KEY, window.ethereum)
export const client = new PrivyClient({session: session})
