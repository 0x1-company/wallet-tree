import { Box, Button, Flex, FormControl, FormLabel, Input, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { client } from '../privy'
import Schema from '../entity/Schema'

const FormEditPage = () => {
  const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<Schema>()
  const [schema, setSchema] = useState<Schema>()

  async function onSubmit(value: Schema) {
    const [params] = await client.put('0x4F724516242829DC5Bc6119f666b18102437De53', [
      {
        field: 'params',
        value: JSON.stringify(value),
      }
    ])
    const json = params.text()
    const schema: Schema = JSON.parse(json)
    setSchema(schema)
  }

  return (
    <Flex alignItems='center' justifyContent='center' bg='black'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={6}>
          <Text
            color='#E933ED'
            fontSize={20}
            fontWeight='bold'
            textAlign='center'
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
            />
          </FormControl>
          <FormControl>
            <Input
              id='phoneNumber'
              placeholder='PhoneNumber'
              {...register('phoneNumber')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
            />
          </FormControl>
          <FormControl>
            <Input
              id='email'
              placeholder='Email'
              {...register('email')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
            />
          </FormControl>
          <FormControl>
            <Input
              id='discord'
              placeholder='Discord'
              {...register('discord')}
              border='none'
              textAlign='center'
              color='#EEFE53'
              _placeholder={{ color: '#8B8B8B' }}
              fontSize={32}
              fontWeight='medium'
            />
          </FormControl>
          <Button
            color='black'
            bg='#79FB4C'
            borderRadius='0'
            isLoading={isSubmitting}
            type='submit'
          >
            Save
          </Button>
        </Stack>
      </form>
    </Flex>
  )
}

export default FormEditPage