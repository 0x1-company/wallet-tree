import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../privy'
import Schema from '../entity/Schema'
import { Flex, Stack, Text, Link } from '@chakra-ui/react'

const ProfilePage = () => {
  const urlParams = useParams<{id: string}>()
  const address = urlParams.id ?? ''

  const [schema, setSchema] = useState<Schema>()

  useEffect(() =>  {
    const fetchData = async () => {
      const [params] = await client.get(address, [
        'params'
      ])
      const json = params?.text() ?? ''
      const schema: Schema = JSON.parse(json)
      setSchema(schema)
    }

    fetchData()
      .then()
      .catch(console.error)
  }, [])

  return (
    <Flex alignItems='center' justifyContent='center' bg='black'>
        <Stack spacing={6}>
          <Text
            color='#79FB4C'
            fontSize={24}
            fontWeight='black'
          >
            {address.substr(0, 7)}...’s Page
          </Text>
          <Text
            color='#E933ED'
            fontSize={20}
            fontWeight='bold'
            textAlign='center'
          >
            Check out MY SNS page!
          </Text>
          <Link
            href={`https://twitter.com/${schema?.twitter}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Twitter ↗︎ 
          </Link>
          <Link
            href={`https://instagram.com/${schema?.instagram}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Instagram ↗︎ 
          </Link>
          <Link
            href={`https://www.linkedin.com/in/${schema?.linkedin}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Linkedin︎ ↗︎ 
          </Link>
          <Link
            href={`https://github.com/${schema?.github}`}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            GitHub ↗︎
          </Link>
          <Link
            href=''
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Telegram  ↗︎
          </Link>
          <Link
            href={schema?.phoneNumber}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Tell ↗︎ 
          </Link>
          <Link
            href={schema?.email}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Mail ↗︎ 
          </Link>
          <Link
            href={schema?.discord}
            fontSize={32}
            fontWeight='medium'
            color='white'
            textAlign='center'
          >
            Discord ↗︎
          </Link>
        </Stack>
    </Flex>
  )
}


export default ProfilePage