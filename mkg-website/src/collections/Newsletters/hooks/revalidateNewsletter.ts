import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Newsletter } from '../../../payload-types'

export const revalidateNewsletter: CollectionAfterChangeHook<Newsletter> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    if (doc._status === 'published') {
      payload.logger.info(`Revalidating newsletter at path: /newsletters/${doc.slug}`)
      revalidatePath(`/newsletters/${doc.slug}`)
      revalidatePath('/newsletters')
    }

    if (previousDoc?._status === 'published' && doc._status !== 'published') {
      payload.logger.info(`Revalidating old newsletter at path: /newsletters/${previousDoc.slug}`)
      revalidatePath(`/newsletters/${previousDoc.slug}`)
      revalidatePath('/newsletters')
    }
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Newsletter> = ({ doc, req: { context, payload } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating newsletter at path: /newsletters/${doc?.slug}`)
    revalidatePath(`/newsletters/${doc?.slug}`)
    revalidatePath('/newsletters')
  }

  return doc
}
