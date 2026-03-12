import React from 'react'
import { PageHeader } from '@/components/PageHeader'
import Link from 'next/link'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import RichText from '@/components/RichText'
import { Media } from '@/components/Media'

export const dynamic = 'force-dynamic'

export default async function Events() {
  const payload = await getPayload({ config: configPromise })
  
  const { docs: events } = await payload.find({
    collection: 'events',
    sort: 'eventDate',
    limit: 100,
  })

  const upcomingEvents = events.filter((event) => new Date(event.eventDate) >= new Date())
  const pastEvents = events.filter((event) => new Date(event.eventDate) < new Date())

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us for meetings, rallies, fundraisers, and pro-democracy events"
      />

      {/* Events Section */}
      <section id="events-section" className="section">
        <div className="container">
          {/* Upcoming Events Calendar */}
          <div className="row mb-5">
            <div className="col-12">
              <div className="section-title text-center">
                <h2>Upcoming Events</h2>
                <p>Stay informed about our meetings, activities, and opportunities to get involved</p>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-12">
              {upcomingEvents.length === 0 ? (
                <div className="text-center py-5">
                  <p>No upcoming events scheduled at this time. Please check back later!</p>
                </div>
              ) : (
                <div className="row gy-4">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="col-lg-6">
                      <div className="card h-100">
                        <div className="card-body">
                          <h4 className="card-title">
                            <i className="bi bi-calendar-event"></i> {event.title}
                          </h4>
                          <p className="mb-2">
                            <strong>
                              <i className="bi bi-geo-alt"></i> {event.location}
                            </strong>
                            <br />
                            <small className="text-muted">
                              {new Date(event.eventDate).toLocaleString('en-US', {
                                weekday: 'short',
                                month: 'short',
                                day: 'numeric',
                                hour: 'numeric',
                                minute: '2-digit',
                              })}
                            </small>
                          </p>
                          <div className="mb-3 small">
                            <RichText data={event.description} enableGutter={false} enableProse={false} />
                          </div>
                          {event.externalLink && (
                            <a
                              href={event.externalLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-outline-primary btn-sm"
                            >
                              Detail & RSVP
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Past Events Section */}
          {pastEvents.length > 0 && (
            <>
              <div className="row mb-5 mt-5">
                <div className="col-12">
                  <div className="section-title text-center">
                    <h2>Past Events</h2>
                    <p>Recent activities and meetings</p>
                  </div>
                </div>
              </div>

              <div className="row mb-5">
                <div className="col-12">
                  <div className="row gy-4">
                    {pastEvents.map((event) => (
                      <div key={event.id} className="col-lg-6">
                        <div className="card h-100 opacity-75">
                          <div className="card-body">
                            <h4 className="card-title text-muted">
                              <i className="bi bi-calendar-check"></i> {event.title}
                            </h4>
                            <p className="mb-2">
                              <strong>
                                <i className="bi bi-geo-alt"></i> {event.location}
                              </strong>
                              <br />
                              <small className="text-muted">
                                {new Date(event.eventDate).toLocaleString('en-US', {
                                  weekday: 'short',
                                  month: 'short',
                                  day: 'numeric',
                                  hour: 'numeric',
                                  minute: '2-digit',
                                })}
                              </small>
                            </p>
                            <div className="mb-3 small">
                              <RichText data={event.description} enableGutter={false} enableProse={false} />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Monthly Meetings & Info */}
          <div className="row mb-5"  >
            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="bi bi-people"></i> Monthly Meetings
                  </h4>
                  <p>
                    The Muskegon County Democratic Party holds regular monthly
                    meetings where members discuss party business, plan events,
                    and coordinate campaign activities.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Open to all party members</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Typically held monthly (check calendar for dates)</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Community members welcome</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>CIO Hall, 490 W Western Ave, Muskegon, MI 49440</span>
                    </li>
                  </ul>
                  <p>
                    <Link href="/governance" className="btn btn-outline-primary">Governance</Link>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title">
                    <i className="bi bi-flag"></i> Pro-Democracy Events
                  </h4>
                  <p>
                    Join us at rallies, marches, and community events where we
                    stand up for democratic values and progressive causes.
                  </p>
                  <ul>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Voting rights advocacy</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Community organizing events</span>
                    </li>
                    <li>
                      <i className="bi bi-check-circle"></i>{' '}
                      <span>Coalition building activities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Stay Connected */}
          <div className="row"  >
            <div className="col-12">
              <div className="card bg-light">
                <div className="card-body text-center">
                  <h4><i className="bi bi-bell"></i> Stay Informed About Events</h4>
                  <p className="lead">
                    Never miss an important event or opportunity to get
                    involved!
                  </p>
                  <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
                    <Link href="/#contact" className="btn btn-primary">
                      <i className="bi bi-envelope"></i> Subscribe to Our Newsletter
                    </Link>
                    <Link href="/get-involved#social" className="btn btn-outline-primary">
                      <i className="bi bi-share"></i> Follow Us on Social Media
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Events Section */}
    </>
  )
}
