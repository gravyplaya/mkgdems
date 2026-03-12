import { PageHeader } from '@/components/PageHeader'

export default function GetInvolved() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        subtitle="Join us in building a stronger democracy in Muskegon County"
      />

      {/* Get Involved Section */}
      <section id="get-involved-details" className="service-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-4"  >
              <div className="services-list">
                <a href="#join-us" className="active">Join Us</a>
                <a href="#donate">Donate</a>
                <a href="#precinct-delegates">Precinct Delegates</a>
                <a href="#board">Party Board</a>
                <a href="#social">Connect With Us</a>
              </div>

              <h4>Make a Difference</h4>
              <p>
                Your involvement strengthens our democratic values and helps
                build a better future for Muskegon County.
              </p>
            </div>

            <div className="col-lg-8"  >
              {/* Join Us Section */}
              <div id="join-us" className="mb-5">
                <h3>Join the Muskegon County Democratic Party</h3>
                <p>
                  Becoming a member of the Muskegon County Democratic Party
                  means joining a community of passionate individuals dedicated
                  to progressive values and positive change. Membership is free and as a member you are also joining the
                  Michigan Democratic Party.
                  You must be a resident of Muskegon county.
                </p>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Participate in local Democratic events and caucuses</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Support Democratic candidates at all levels</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Stay informed about local issues and opportunities</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Connect with like-minded community members</span>
                  </li>
                </ul>
                <p>
                  <a href="https://forms.gle/gjzTjmL3fghEe45J7" className="btn btn-primary" target="_blank">Join Now</a>
                </p>
              </div>

              {/* Donate Section */}
              <div id="donate" className="mb-5">
                <h3>Donate</h3>
                <p>
                  Your financial support helps us organize local events, support local
                  Democratic candidates, and amplify our message throughout
                  Muskegon County.
                </p>
                <p>
                  Every contribution, no matter the size, makes a real
                  difference in our ability to fight for progressive values and
                  strengthen our democracy.
                </p>
                <p>
                  <a href="https://secure.actblue.com/donate/muskegondemsdonate" target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary">Donate Now</a>
                </p>
              </div>

              {/* Precinct Delegates Section */}
              <div id="precinct-delegates" className="mb-5">
                <h3>Become a Precinct Delegate</h3>
                <p>
                  Precinct delegates are the grassroots foundation of the
                  Democratic Party. As a precinct delegate, you represent your
                  neighborhood at county and state party conventions.
                </p>
                <h4>Responsibilities Include:</h4>
                <ul>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Attending county party meetings</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Engaging with voters in your precinct</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Supporting Democratic candidates during elections</span>
                  </li>
                  <li>
                    <i className="bi bi-check-circle"></i>{' '}
                    <span>Participating in party conventions and elections</span>
                  </li>
                </ul>
                <p>
                  Interested in becoming a precinct delegate? Contact us at muskegondems@gmail.com
                  and attend monthly meetings to learn more about this important role. Monthly meetings are
                  held the 2nd Thursday of each month at the CIO Hall, 490 W Western Ave, Muskegon MI
                  49440.
                </p>
              </div>

              {/* Party Board Section */}
              <div id="board" className="mb-5">
                <h3>Muskegon County Democratic Party Officers</h3>
                <p>
                  Our officers consists of dedicated Democrats who guide the
                  strategic direction of our county organization. Officers
                  are elected by county membership.
                </p>
                <h4>Current Officers:</h4>
                <p><em>Susan Fabrick, Chair</em></p>
                <p><em>Willie Smith, First Vice Chair</em></p>
                <p><em>Rhonda Aubrey, Second Vice Chair</em></p>
                <p><em>Ellen Beale, Secretary</em></p>
                <p><em>Jeff Witcher, Treasurer</em></p>
                <p><em>Kim Fisher and Ronald Bailey, Sargeants at Arms</em></p>
                <p>
                  Interested in serving as an officer? Officer elections are held
                  at county convention meetings.
                </p>
              </div>

              {/* Connect With Us Section */}
              <div id="social" className="mb-5">
                <h3>Connect With Us on Social Media</h3>
                <p>
                  Stay up-to-date with the latest news, events, and
                  opportunities to get involved by following us on social media.
                </p>
                <div className="d-flex gap-3 mt-3">
                  <a href="https://www.facebook.com/MuskegonDems/" className="btn btn-outline-primary"
                    title="Follow us on Facebook">
                    <i className="bi bi-facebook"></i> Facebook
                  </a>
                  <a href="https://www.instagram.com/muskegoncountydems/" className="btn btn-outline-primary"
                    title="Follow us on Instagram">
                    <i className="bi bi-instagram"></i> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Get Involved Section */}
    </>
  )
}
