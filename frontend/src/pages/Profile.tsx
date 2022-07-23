import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { client } from '../privy'
import Schema from '../entity/Schema'

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
    <>
    <h1>
      {schema?.avatar}
    </h1>
    </>
  )
}

export default ProfilePage