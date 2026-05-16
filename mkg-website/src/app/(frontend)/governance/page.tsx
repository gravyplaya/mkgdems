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

                <h4>Standard Monthly Meeting Agenda:</h4>
                <div className="card mb-3">
                  <div className="card-body">
                    <ol>
                      <li><strong>Call to Order</strong> — Chair calls meeting to order</li>
                      <li><strong>Roll Call / Attendance</strong></li>
                      <li><strong>Approval of Previous Meeting Minutes</strong></li>
                      <li><strong>Treasurer's Report</strong> — Financial update and budget review</li>
                      <li><strong>Committee Reports</strong>
                        <ul>
                          <li>Membership & Outreach Committee</li>
                          <li>Events & Fundraising Committee</li>
                          <li>Campaign & Candidate Support Committee</li>
                          <li>Communications Committee</li>
                        </ul>
                      </li>
                      <li><strong>Old Business</strong> — Follow-up on pending items</li>
                      <li><strong>New Business</strong> — Discussion and votes on new proposals</li>
                      <li><strong>Resolutions</strong> — Presentation, discussion, and vote on resolutions</li>
                      <li><strong>Announcements & Upcoming Events</strong></li>
                      <li><strong>Adjournment</strong></li>
                    </ol>
                    <p className="mt-3 mb-0"><em>
                      Meetings are held on the 2nd Thursday of each month at 6:00 pm
                      at CIO Hall, 490 W Western Ave, Muskegon, MI 49440.
                    </em></p>
                  </div>
                </div>

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

                {/* 32-Hour Work Week Resolution */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-clock"></i> Resolution in Support of a
                      32-Hour Work Week
                    </h5>
                    <p className="card-text">
                      The Muskegon County Democratic Party supports legislation to
                      establish a standard 32-hour work week, ensuring that workers
                      share in the gains of increased productivity and automation.
                      A shorter workweek would improve work-life balance, strengthen
                      families, create jobs by spreading available work, and protect
                      worker well-being in an era of technological advancement.
                    </p>
                  </div>
                </div>

                {/* Taxing AI Resolution */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">
                      <i className="bi bi-robot"></i> Resolution in Support of
                      Taxing Artificial Intelligence & Automation
                    </h5>
                    <p className="card-text">
                      The Muskegon County Democratic Party supports the implementation
                      of taxation on artificial intelligence and automated systems that
                      displace human labor. Revenue from such taxes should fund worker
                      retraining programs, strengthen the social safety net, and invest
                      in public goods. As AI transforms our economy, it is essential that
                      the benefits of automation are broadly shared rather than
                      concentrated among a few corporations.
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
