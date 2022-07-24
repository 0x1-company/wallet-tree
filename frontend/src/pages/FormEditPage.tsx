import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { client, session } from '../privy'
import Schema from '../entity/Schema'
import { WalletContext } from '../context/WalletContext'
import { useNavigate } from 'react-router-dom'

const FormEditPage = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<Schema>()
  const [schema, setSchema] = useState<Schema>()
  const navigate = useNavigate()
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

  async function onSubmit(value: Schema) {
    await connectToWallet()
    console.log(address)
    const [params] = await client.put(address, [
      {
        field: 'params',
        value: JSON.stringify(value),
      }
    ])
    const json = params.text()
    const schema: Schema = JSON.parse(json)
    setSchema(schema)

    navigate(`/${address}`)
  }

  useEffect(() => {
    connectToWallet()
  }, [])

  return (
    <Flex alignItems='center' justifyContent='center' bg='black'>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Edit Mode...Type your id
          </Text>
          <FormControl>
            <Input
              id='twitter'
              placeholder='Twitter'
              {...register('twitter')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
              fontFamily='Inconsolata'
            />
          </FormControl>
          <FormControl>
            <Input
              id='instagram'
              placeholder='Instagram'
              {...register('instagram')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
              fontFamily='Inconsolata'
            />
          </FormControl>
          <FormControl>
            <Input
              id='linkedin'
              placeholder='Linkedin'
              {...register('linkedin')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
              fontFamily='Inconsolata'
            />
          </FormControl>
          <FormControl>
            <Input
              id='github'
              placeholder='GitHub'
              {...register('github')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
              fontFamily='Inconsolata'
            />
          </FormControl>
          <FormControl>
            <Input
              id='telegram'
              placeholder='Telegram'
              {...register('telegram')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
              fontFamily='Inconsolata'
            />
          </FormControl>
          <Button
            color='black'
            bg='#79FB4C'
            borderRadius='0'
            isLoading={isSubmitting}
            type='submit'
            fontFamily='Inconsolata'
          >
            Save
          </Button>
        </Stack>
      </form>
    </Flex>
  )
}

export default FormEditPage