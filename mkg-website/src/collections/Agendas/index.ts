import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { slugField } from 'payload'
import { revalidateAgenda, revalidateDelete } from './hooks/revalidateAgenda'

export const Agendas: CollectionConfig<'agendas'> = {
  slug: 'agendas',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'updatedAt'],
  },
  hooks: {
    afterChange: [revalidateAgenda],
    afterDelete: [revalidateDelete],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'date',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({}),
      required: true,
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      label: 'PDF File (Optional)',
    },
    slugField(),
  ],
  versions: {
    drafts: true,
  },
}
