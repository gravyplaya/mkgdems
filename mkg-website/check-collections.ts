import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function checkCollections() {
  const payload = await getPayload({ config: configPromise })
  console.log('Collections:', Object.keys(payload.collections))
  process.exit(0)
}

checkCollections()
