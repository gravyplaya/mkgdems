import React from 'react'
import { PageHeader } from '@/components/PageHeader'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 12,
  })

  return (
    <>
      <PageHeader 
        title="Blog" 
        subtitle="Voices and stories from the Muskegon County Democratic Party" 
      />

      <section className="section">
        <div className="container">
          <div className="row gy-4">
            {posts.length === 0 ? (
              <div className="col-12">
                <div className="alert alert-info">No posts found. Please check back later.</div>
              </div>
            ) : (
              posts.map((post) => (
                <div key={post.id} className="col-lg-4 col-md-6" >
                  <article className="card h-100">
                    {post.heroImage && typeof post.heroImage === 'object' && (
                      <div className="card-img-top overflow-hidden" style={{ height: '200px' }}>
                        <Media 
                          resource={post.heroImage} 
                          className="w-100 h-100 object-fit-cover"
                        />
                      </div>
                    )}
                    <div className="card-body d-flex flex-column">
                      <h3 className="card-title h5">
                        <Link href={`/posts/${post.slug}`} className="text-decoration-none text-dark">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-muted small">
                        <i className="bi bi-calendar-event"></i>{' '}
                        {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        }) : 'Draft'}
                      </p>
                      <div className="mt-auto pt-3">
                        <Link href={`/posts/${post.slug}`} className="btn btn-primary btn-sm">
                          Read Full Story
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
