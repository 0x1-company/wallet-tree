import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
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
    <Box p={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <FormLabel>avatar</FormLabel>
          <Input
            id='avatar'
            placeholder='Not set'
            {...register('avatar')}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor='email'>email</FormLabel>
          <Input
            id='email'
            placeholder='Not set'
            {...register('email')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>url</FormLabel>
          <Input
            id='url'
            placeholder='Not set'
            {...register('url')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>description</FormLabel>
          <Input
            id='description'
            placeholder='Not set'
            {...register('description')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>com.twitter</FormLabel>
          <Input
            id='twitter'
            placeholder='Not set'
            {...register('twitter')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>com.github</FormLabel>
          <Input
            id='github'
            placeholder='Not set'
            {...register('github')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>org.telegram</FormLabel>
          <Input
            id='telegram'
            placeholder='Not set'
            {...register('telegram')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>com.discord</FormLabel>
          <Input
            id='discord'
            placeholder='Not set'
            {...register('discord')}
          />
        </FormControl>
        <FormControl>
          <FormLabel>com.linkedin</FormLabel>
          <Input
            id='linkedin'
            placeholder='Not set'
            {...register('linkedin')}
          />
        </FormControl>
        <Button mt={4} colorScheme='teal' isLoading={isSubmitting} type='submit'>Save</Button>
      </form>
    </Box>
  )
}

export default FormEditPage