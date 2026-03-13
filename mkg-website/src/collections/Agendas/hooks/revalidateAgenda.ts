import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'
import { revalidatePath } from 'next/cache'
import type { Agenda } from '../../../payload-types'

export const revalidateAgenda: CollectionAfterChangeHook<Agenda> = ({
  doc,
  previousDoc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    // Revalidate the governance page where agendas are listed
    payload.logger.info(`Revalidating governance page due to agenda change`)
    revalidatePath('/governance')
  }
  return doc
}

export const revalidateDelete: CollectionAfterDeleteHook<Agenda> = ({ doc, req: { context, payload } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating governance page due to agenda deletion`)
    revalidatePath('/governance')
  }

  return doc
}
