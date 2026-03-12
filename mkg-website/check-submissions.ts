import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function checkSubmissions() {
  const payload = await getPayload({ config: configPromise })
  const subs = await payload.find({
    collection: 'form-submissions',
    limit: 10,
  })
  console.log('Total submissions found:', subs.totalDocs)
  subs.docs.forEach(doc => {
    console.log(`- ID: ${doc.id}, Data:`, JSON.stringify(doc.submissionData))
  })
  process.exit(0)
}

checkSubmissions()
