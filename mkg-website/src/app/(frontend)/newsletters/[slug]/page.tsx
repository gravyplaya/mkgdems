import type { Metadata } from 'next'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import RichText from '@/components/RichText'
import { generateMeta } from '@/utilities/generateMeta'
import PageClient from './page.client'
import { LivePreviewListener } from '@/components/LivePreviewListener'

export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const newsletters = await payload.find({
    collection: 'newsletters',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  const params = newsletters.docs.map(({ slug }) => {
    return { slug }
  })

  return params
}

type Args = {
  params: Promise<{
    slug?: string
  }>
}

import { PageHeader } from '@/components/PageHeader'

export default async function Newsletter({ params: paramsPromise }: Args) {
  const { isEnabled: draft } = await draftMode()
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const url = '/newsletters/' + decodedSlug
  const newsletter = await queryNewsletterBySlug({ slug: decodedSlug })

  if (!newsletter) return <PayloadRedirects url={url} />

  const formattedDate = new Date(newsletter.publishedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <PageHeader 
        title={newsletter.title} 
        subtitle={formattedDate} 
      />

      <article className="pt-16 pb-16">
        <PageClient />
        <PayloadRedirects disableNotFound url={url} />
        {draft && <LivePreviewListener />}

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <RichText data={newsletter.content} enableGutter={false} />
              
              {newsletter.file && typeof newsletter.file === 'object' && (
                <div className="mt-5 p-4 bg-light rounded text-center">
                  <h4>Download PDF Version</h4>
                  <p>Prefer to read offline? Download the PDF version of this newsletter.</p>
                  <a 
                    href={(newsletter.file as any).url} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-file-earmark-pdf"></i> Download PDF
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const decodedSlug = decodeURIComponent(slug)
  const newsletter = await queryNewsletterBySlug({ slug: decodedSlug })

  return generateMeta({ doc: newsletter })
}

const queryNewsletterBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'newsletters',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
