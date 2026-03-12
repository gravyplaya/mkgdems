import { PageHeader } from '@/components/PageHeader'
import Link from 'next/link'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { formatDateTime } from '@/utilities/formatDateTime'

export default async function Governance() {
  const payload = await getPayload({ config: configPromise })
  const agendas = await payload.find({
    collection: 'agendas',
    sort: '-date',
    limit: 10,
  })

  return (
    <>
      <PageHeader 
        title="Governance" 
        subtitle="Meeting agendas, resolutions, and party rules" 
      />

      {/* Governance Section */}
      <section id="governance-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"  >
              <div className="services-list">
                <a href="#agenda" className="active">Meeting Agendas</a>
                <a href="#resolutions">Resolutions</a>
                <a href="#rules">Party Rules</a>
              </div>

              <h4>Transparent Governance</h4>
              <p>
                We believe in open and transparent governance. Meeting
                agendas, resolutions, and party rules are available to the
                public.
              </p>
            </div>

            <div className="col-lg-8"  >
              {/* Meeting Agendas Section */}
              <div id="agenda" className="mb-5">
                <h3>Monthly Meeting Agendas</h3>
                <p>
                  The Muskegon County Democratic Party holds regular monthly
                  meetings. All party members and interested community members
                  are welcome to attend.
                </p>

                <h4>Recent and Upcoming Agendas:</h4>
                <div className="list-group mb-3">
                  {agendas.docs && agendas.docs.length > 0 ? (
                    agendas.docs.map((agenda) => {
                      const fileUrl = agenda.file && typeof agenda.file === 'object' ? agenda.file.url : '#'
                      return (
                        <a
                          key={agenda.id}
                          href={fileUrl || '#'}
                          className="list-group-item list-group-item-action"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">
                              <i className="bi bi-file-earmark-text"></i> {agenda.title}
                            </h5>
                            <small>{formatDateTime(agenda.date)}</small>
                          </div>
                          <p className="mb-1">
                            Click to view the agenda for this meeting
                          </p>
                        </a>
                      )
                    })
                  ) : (
                    <p>No agendas currently available.</p>
                  )}
                </div>

                <h4>Meeting Information:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Meetings are typically held monthly</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Check our Events page for specific dates and times</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>All members are encouraged to attend</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Community members are welcome</span>
                  </li>
                </ul>
                <p>
                  <Link href="/events" className="btn btn-primary">View Events Calendar</Link>
                </p>
              </div>

              {/* Resolutions Section */}
              <div id="resolutions" className="mb-5">
                <h3>County Party Resolutions</h3>
                <p>
                  Resolutions passed by the Muskegon County Democratic Party
                  represent our official positions on important issues affecting
                  our community and our nation.
                </p>

                <h4>Current Resolutions:</h4>

                {/* Medicare for All Resolution */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-file-earmark-check"></i> Resolution in
                      Support of Medicare for All
                    </h5>
                    <p className="card-text">
                      The Muskegon County Democratic Party supports Medicare for
                      All as a comprehensive solution to ensure healthcare
                      access for all Americans.
                    </p>
                  </div>
                </div>

                <p className="mt-4">
                  <em>Additional resolutions will be added as they are passed by
                    the party membership.</em>
                </p>
              </div>

              {/* Party Rules Section */}
              <div id="rules" className="mb-5">
                <h3>Muskegon County Democratic Party Rules</h3>
                <p>
                  The Democratic Party operates under
                  <strong>Rules</strong> (not bylaws) that govern our
                  organization, elections, and procedures. These rules ensure
                  fair and transparent party operations.
                </p>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle"></i> <strong>Note:</strong> The
                  Democratic Party uses &quot;Rules&quot; rather than &quot;Bylaws&quot; to govern
                  party operations. Our rules are consistent with Michigan
                  Democratic Party rules and ensure democratic participation in
                  all party activities.
                </div>

                <h4>Our Rules Cover:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Party organization and structure</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Election of officers and delegates</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Meeting procedures and requirements</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Committee formation and responsibilities</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Amendment procedures</span>
                  </li>
                </ul>

                <p className="text-muted mt-3">
                  <small
                    >For questions about party rules or governance, please
                    contact us through our contact page or attend a monthly
                    meeting.</small
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Governance Section */}
    </>
  )
}
