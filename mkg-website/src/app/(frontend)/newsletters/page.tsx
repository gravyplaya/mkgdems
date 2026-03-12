import React from 'react'
import { PageHeader } from '@/components/PageHeader'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'

export const dynamic = 'force-dynamic'

export default async function NewslettersPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: newsletters } = await payload.find({
    collection: 'newsletters',
    sort: '-publishedDate',
    limit: 10,
  })

  return (
    <>
      <PageHeader 
        title="Newsletters" 
        subtitle="Stay updated with our latest news and community updates" 
      />

      <section className="section">
        <div className="container">
          <div className="row gy-4">
            {newsletters.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-info">No newsletters found. Please check back later.</div>
              </div>
            ) : (
              newsletters.map((newsletter) => (
                <div key={newsletter.id} className="col-lg-6" >
                  <div className="card h-100">
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title">{newsletter.title}</h3>
                      <p className="text-muted">
                        <i className="bi bi-calendar-event"></i>{' '}
                        {new Date(newsletter.publishedDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      {newsletter.excerpt && <p className="mt-2">{newsletter.excerpt}</p>}
                      <div className="mt-auto pt-4">
                        <Link href={`/newsletters/${newsletter.slug}`} className="btn btn-outline-primary me-2">
                          Read More
                        </Link>
                        {newsletter.file && typeof newsletter.file === 'object' && (
                          <a 
                            href={(newsletter.file as any).url} 
                            className="btn btn-primary"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <i className="bi bi-download"></i> PDF
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
