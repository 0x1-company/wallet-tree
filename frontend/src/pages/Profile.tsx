import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../privy'
import Schema from '../entity/Schema'
import { Flex, Stack, Text, Link, Button } from '@chakra-ui/react'
import { WalletContext } from '../context/WalletContext'

const ProfilePage = () => {
  const urlParams = useParams<{id: string}>()
  const walletaddress = urlParams.id ?? ''
  const [schema, setSchema] = useState<Schema>()
  const { address, connectToWallet } = useContext(WalletContext)

  const connectWallet = async () => {
    await connectToWallet()
  }

  function clipboardWriteText() {
    navigator.clipboard.writeText(`https://0xwallettree.xyz/${walletaddress}`)
  }

  useEffect(() =>  {
    connectToWallet()
    const fetchData = async () => {
      const [params] = await client.get(walletaddress, [
        'params'
      ])
      const json = params?.text() ?? ''
      const schema: Schema = JSON.parse(json)
      setSchema(schema)
    }

    fetchData()
      .then()
      .catch(console.error)
  }, [address])

  return (
    <Flex alignItems='center' justifyContent='center' bg='black'>
        <Stack spacing={6}>
          <Text
            color='#79FB4C'
            fontSize={24}
            fontWeight='black'
            fontFamily='Inconsolata'
          >
            {address.substr(0, 7)}...’s Page
          </Text>
          <Text
            color='#E933ED'
            fontSize={20}
            fontWeight='bold'
            textAlign='center'
            fontFamily='Inconsolata'
          >
            Check out MY SNS page!
          </Text>
          <Link
            href={`https://twitter.com/${schema?.twitter}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
            hidden={schema?.twitter == ''}
            isExternal
            fontFamily='Inconsolata'
          >
            Twitter ↗︎ 
          </Link>
          <Link
            href={`https://instagram.com/${schema?.instagram}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
            hidden={schema?.instagram == ''}
            isExternal
            fontFamily='Inconsolata'
          >
            Instagram ↗︎ 
          </Link>
          <Link
            href={`https://www.linkedin.com/in/${schema?.linkedin}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
            hidden={schema?.linkedin == ''}
            isExternal
            fontFamily='Inconsolata'
          >
            Linkedin︎ ↗︎ 
          </Link>
          <Link
            href={`https://github.com/${schema?.github}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
            hidden={schema?.github == ''}
            isExternal
            fontFamily='Inconsolata'
          >
            GitHub ↗︎
          </Link>
          <Link
            href={`https://t.me/${schema?.telegram}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
            hidden={schema?.telegram == ''}
            isExternal
            fontFamily='Inconsolata'
          >
            Telegram  ↗︎
          </Link>
          <Button color='white' bg='black' fontFamily='Inconsolata' fontSize={32} fontWeight='medium' onClick={clipboardWriteText}>Share This Page ↗︎</Button>
          <Button
            bg='#79FB4C'
            color='black'
            borderRadius='0'
            onClick={connectWallet}
            fontFamily='Inconsolata'
          >
            <img src='/metamask.svg' />
            Connect Wallet
          </Button>
        </Stack>
    </Flex>
  )
}



export default ProfilePage