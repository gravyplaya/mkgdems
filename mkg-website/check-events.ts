import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function checkEvents() {
  const payload = await getPayload({ config: configPromise })
  const events = await payload.find({
    collection: 'events',
    limit: 100,
  })
  console.log('Total events found:', events.totalDocs)
  events.docs.forEach(doc => {
    console.log(`- Title: ${doc.title}, Date: ${doc.eventDate}`)
  })
  process.exit(0)
}

checkEvents()
