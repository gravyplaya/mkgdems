import { PageHeader } from '@/components/PageHeader'

export default function Elections() {
  return (
    <>
      <PageHeader 
        title="Elections & Voting" 
        subtitle="Your guide to voting in Muskegon County" 
      />

      {/* Elections Section */}
      <section id="elections-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"  >
              <div className="services-list">
                <a href="#registration" className="active">Voter Registration</a>
                <a href="#absentee-ballot">Absentee Ballot</a>
                <a href="#early-voting">Early Voting</a>
                <a href="#district-maps">Voting District Maps</a>
                <a href="#county-clerk-results">Election Results</a>
              </div>

              <h4>Make Your Voice Heard</h4>
              <p>
                Voting is your most powerful tool for creating positive change.
                Make sure you're registered and informed.
              </p>
            </div>

            <div className="col-lg-8"  >
              {/* Voter Registration Section */}
              <div id="registration" className="mb-5">
                <h3>Voter Registration</h3>
                <p>
                  In Michigan, you must be registered to vote at least 15 days
                  before an election. You can register online, by mail, or in
                  person.
                </p>
                <h4>Requirements:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i> <span>U.S. Citizen</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>At least 18 years old by Election Day</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Resident of Michigan and your city or township for at
                      least 30 days before Election Day</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Not currently serving a sentence in jail or prison</span>
                  </li>
                </ul>
                <p>
                  <a href="https://mvic.sos.state.mi.us/RegisterVoter" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Register to
                    Vote</a>{' '}
                  <a href="https://mvic.sos.state.mi.us/voter/index" className="btn btn-outline-primary" target="_blank" rel="noopener noreferrer">Check
                    Registration Status</a>
                </p>
              </div>

              {/* Absentee Ballot Section */}
              <div id="absentee-ballot" className="mb-5">
                <h3>Absentee Ballot</h3>
                <p>
                  In Michigan, any registered voter can request an absentee
                  ballot without providing a reason. You can request an absentee
                  ballot online, by mail, or in person at your local clerk's
                  office.
                </p>
                <h4>How to Vote Absentee:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Request an absentee ballot and check the box for permanent absentee ballot</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Complete and sign your ballot</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Return your ballot by mail or drop it off at your local clerk's
                      office, a secure drop box, or at your voting location</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Your ballot must be received by 8 PM on Election
                      Day</span>
                  </li>
                </ul>
                <p>
                  <a href="https://mvic.sos.state.mi.us/avapplication" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Request
                    Absentee Ballot</a>
                </p>
              </div>

              {/* Early Voting Section */}
              <div id="early-voting" className="mb-5">
                <h3>Early Voting</h3>
                <p>
                  Michigan now offers early voting at designated early voting
                  sites in your community. Early voting begins 9 days before
                  Election Day and runs through the Sunday before Election Day.
                </p>
                <h4>Benefits of Early Voting:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Vote in person without waiting for Election Day</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Flexible hours including evenings and weekends</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Same-day voter registration available at early voting
                      sites</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Avoid long lines on Election Day</span>
                  </li>
                </ul>
                <p>
                  <a href="https://co.muskegon.mi.us/526/Polling-Locations-List" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find
                    Early Voting Locations</a>
                </p>
              </div>

              {/* Voting District Maps Section */}
              <div id="district-maps" className="mb-5">
                <h3>Voting District</h3>
                <p>
                  Understanding your voting districts helps you know which
                  candidates and issues you'll vote on. Muskegon County is
                  divided into various districts for federal, state, and local
                  elections.
                </p>
                <h4>District Types:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Congressional Districts</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>State Senate and House Districts</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>County Commission Districts</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>School Board Districts</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Local Municipal Districts</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Township Districts</span>
                  </li>
                </ul>
                <p>
                  <a href="https://co.muskegon.mi.us/528/Precinct-Maps-with-Polling-Places" className="btn btn-primary"
                    target="_blank" rel="noopener noreferrer">View District Maps</a>{' '}
                  <a href="https://co.muskegon.mi.us/527/Polling-Place-Locator" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Find
                    My Districts</a>
                </p>
              </div>

              {/* Election Results Section */}
              <div id="county-clerk-results" className="mb-5">
                <h3>Election Results</h3>
                <p>
                  The Muskegon County Clerk's office maintains official election
                  results for all elections held in Muskegon County.
                </p>
                <p>
                  You can view current and historical election results,
                  including:
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Presidential, Congressional, and State elections</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>County Commission and local races</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Ballot proposals and initiatives</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Precinct-level results</span>
                  </li>
                </ul>
                <p>
                  <a href="https://co.muskegon.mi.us/507/Election-Results" className="btn btn-primary" target="_blank" rel="noopener noreferrer">View
                    Election Results</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Elections Section */}
    </>
  )
}
