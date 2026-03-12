import { getPayload } from 'payload'
import configPromise from './src/payload.config'

async function checkForms() {
  const payload = await getPayload({ config: configPromise })
  const forms = await payload.find({
    collection: 'forms',
    limit: 100,
  })
  console.log('Total forms found:', forms.totalDocs)
  forms.docs.forEach(doc => {
    console.log(`- ID: ${doc.id}, Title: ${doc.title}`)
  })
  process.exit(0)
}

checkForms()
