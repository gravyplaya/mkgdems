import { PageHeader } from '@/components/PageHeader'
import Link from 'next/link'

export default function People() {
  return (
    <>
      <PageHeader 
        title="People" 
        subtitle="Democratic leaders serving Muskegon County" 
      />

      {/* People Section */}
      <section id="people-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"  >
              <div className="services-list">
                <a href="#us-senate" className="active">U.S. Senate</a>
                <a href="#officials">County & Local Officials</a>
                <a href="#candidate-profiles">Candidate Profiles</a>
              </div>

              <h4>Democratic Leadership</h4>
              <p>
                Meet the Democrats representing Muskegon County at the federal,
                state, and local levels.
              </p>
            </div>

            <div className="col-lg-8"  >
              {/* U.S. Senate Section */}
              <div id="us-senate" className="mb-5">
                <h3>U.S. Senate</h3>
                <p>
                  Michigan&apos;s Democratic Senators represent our state and our
                  values in the United States Senate.
                </p>

                {/* Senator Elissa Slotkin */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title">Senator Elissa Slotkin</h4>
                    <p className="card-text">
                      <strong>U.S. Senator from Michigan</strong>
                    </p>
                    <p>
                      Elissa Slotkin brings her experience as a CIA analyst and
                      Pentagon official to the U.S. Senate, working to protect
                      national security, support veterans, and fight for
                      Michigan families.
                    </p>
                    <p>
                      <strong>Contact Information:</strong><br />
                      <i className="bi bi-globe"></i>{' '}
                      <a href="https://www.slotkin.senate.gov" target="_blank" rel="noopener noreferrer">Website</a><br />
                      <i className="bi bi-telephone"></i> Phone: 616-975-0052<br />
                      <i className="bi bi-envelope"></i> Email: TBD
                    </p>
                  </div>
                </div>

                {/* Senator Gary Peters */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h4 className="card-title">Senator Gary Peters</h4>
                    <p className="card-text">
                      <strong>U.S. Senator from Michigan</strong>
                    </p>
                    <p>
                      Gary Peters serves Michigan in the U.S. Senate, focusing
                      on protecting the Great Lakes, supporting manufacturing
                      jobs, and ensuring national security.
                    </p>
                    <p>
                      <strong>Contact Information:</strong><br />
                      <i className="bi bi-globe"></i>{' '}
                      <a href="https://www.peters.senate.gov" target="_blank" rel="noopener noreferrer">Website</a><br />
                      <i className="bi bi-telephone"></i> Phone: 616-233-9150<br />
                      <i className="bi bi-envelope"></i> Email: TBD
                    </p>
                  </div>
                </div>
              </div>

              {/* Democratic County, City, and Township Officials Section */}
              <div id="officials" className="mb-5">
                <h3>Democratic County, City, and Township Officials</h3>
                <p>
                  These dedicated public servants represent our Democratic
                  values in Muskegon County government, city councils, and
                  township boards.
                </p>

                <h4>Muskegon County Commission</h4>

                {/* Chris McGuigan */}
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Chris McGuigan</h5>
                    <p className="card-text">
                      <strong>County Commissioner, District 4</strong>
                    </p>
                    <p>
                      Chris McGuigan is a Democrat serving her first term on the
                      Muskegon County Board of Commissioners for District 4. She
                      had a successful career as a lawyer and served as the
                      executive director of the Community Foundation for
                      Muskegon County for nearly two decades. Her priorities
                      include expanding access to parks and recreation,
                      strengthening public transportation, and investing in
                      mental health and public health services.
                    </p>
                    <p>
                      <strong>Contact Information:</strong><br />
                      <i className="bi bi-telephone"></i> Phone: TBD<br />
                      <i className="bi bi-envelope"></i> Email: TBD
                    </p>
                  </div>
                </div>

                {/* Placeholder for other commissioners */}
                <div className="alert alert-info">
                  <p>
                    <em
                      >Additional county commissioners, city council members,
                      and township officials will be listed here. Information to
                      be added.</em
                    >
                  </p>
                </div>

                <h4>City and Township Officials</h4>
                <p>
                  <em
                    >City council members, township trustees, and other local
                    Democratic officials to be added.</em
                  >
                </p>
              </div>

              {/* Candidate Profiles Section */}
              <div id="candidate-profiles" className="mb-5">
                <h3>Candidate Profiles</h3>
                <p>
                  Learn about Democratic candidates running for office in
                  Muskegon County and across Michigan.
                </p>

                <div className="alert alert-info">
                  <i className="bi bi-info-circle"></i>{' '}
                  <strong>Candidate Information</strong>
                  <p className="mb-0 mt-2">
                    Candidate profiles will be updated during election seasons.
                    Check back for information about Democratic candidates for
                    federal, state, and local offices.
                  </p>
                </div>

                <h4>How to Support Democratic Candidates:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Volunteer for campaigns</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Make financial contributions</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Attend campaign events</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Talk to your neighbors about Democratic values</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Register voters and help get out the vote</span>
                  </li>
                </ul>

                <p>
                  <Link href="/get-involved" className="btn btn-primary">Get Involved with Campaigns</Link>
                </p>

                <h4>State and Federal Representatives</h4>
                <p>
                  In addition to our U.S. Senators, Muskegon County is
                  represented by Democrats in the U.S. House of Representatives,
                  Michigan State Senate, and Michigan State House.
                </p>
                <p>
                  <em
                    >Representative information with contact details to be added
                    (URLs, phone numbers, office addresses).</em
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /People Section */}
    </>
  )
}
