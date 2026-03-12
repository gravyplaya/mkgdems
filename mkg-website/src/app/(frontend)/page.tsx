import React from 'react'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero section accent-background">
        <img src="/assets/img/Muskegon_dt.jpg" alt="Muskegon"  />

        <div className="container text-center">
          <h2>Muskegon Democratic Party</h2>
          <p>Building Democracy Together in Muskegon County</p>

          <div className="mt-4 mb-4 hero-info">
            <p className="mb-1"><strong>Meetings:</strong> 2nd Thursday of each month at 6:00 pm<br />CIO Hall, 490 W Western Ave,
              Muskegon, MI 49440</p>
            <p className="mb-1"><strong>Office Hours:</strong> Monday - Friday 12:00-6:00 pm</p>
            <p className="mb-0 text-uppercase fw-bold" style={{ letterSpacing: '1px', color: '#ffc107' }}>Save the Date: 1 May 2026
              <a href="/assets/mkgdems-gala-form.pdf" target="_blank" style={{ color: '#ffc107', textDecoration: 'underline' }}> Spring Gala</a></p>
          </div>

          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <a href="/get-involved#join-us" className="btn btn-primary">Join Us</a>
            <a href="/get-involved#donate" className="btn btn-primary">Donate</a>
            <a href="/events" className="btn btn-primary">Upcoming Events</a>
            <a href="/elections" className="btn btn-primary">Voting Info</a>
            <a href="/governance" className="btn btn-primary">Governance</a>
          </div>
          <a href="#statement" className="btn-scroll" title="Scroll Down"><i className="bi bi-chevron-down"></i></a>
        </div>
      </section>
      {/* /Hero Section */}

      {/* Statement Section */}
      <section id="statement" className="statement section light-background">
        <div className="container" >
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2>Standing Up for Democracy</h2>
              <p className="lead">
                Muskegon County Democrats are striving for livable wages,
                universal health care, stronger schools, safer communities,
                environmental justice, and keeping elections fair. We fight for those
                who will fight for you.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* /Statement Section */}

      {/* Who We Are Section */}
      <section id="who-we-are" className="who-we-are section">
        <div className="container section-title" >
          <h2>Who We Are</h2>
          <p>The voice of Democrats in Muskegon County</p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-6"  >
              <h3>Our Mission</h3>
              <p>
                The Muskegon County Democratic Party is dedicated to building a
                stronger, more inclusive community where everyone has the
                opportunity to thrive. We bring together Democrats from across
                the county to elect leaders who share our values and fight for
                policies that improve the lives of working families.
              </p>
              <p>
                We believe in democracy, equality, and justice for all. Through
                grassroots organizing, community engagement, and strategic
                advocacy, we work to ensure that every voice is heard and every
                vote counts.
              </p>
            </div>

            <div className="col-lg-6"  >
              <h3>What We Do</h3>
              <ul className="list-unstyled">
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Elect Democrats</strong> to local, state, and federal
                  offices
                </li>
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Register voters</strong> and increase civic
                  participation
                </li>
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Organize events</strong> and community gatherings
                </li>
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Advocate for progressive policies</strong> that
                  benefit all residents
                </li>
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Support candidates</strong> who champion Democratic
                  values
                </li>
                <li>
                  <i className="bi bi-check-circle text-primary"></i>{' '}
                  <strong>Build coalitions</strong> with community organizations
                  and activists
                </li>
              </ul>
            </div>
          </div>

          <div className="row gy-4 mt-4">
            <div className="col-lg-12 text-center"  >
              <h3>Our Values</h3>
              <div className="row mt-4">
                <div className="col-md-3">
                  <div className="icon-box">
                    <i className="bi bi-people fs-1 text-primary"></i>
                    <h4>Equality</h4>
                    <p>Equal rights and opportunities for all people</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon-box">
                    <i className="bi bi-shield-check fs-1 text-primary"></i>
                    <h4>Justice</h4>
                    <p>A fair and equitable society for everyone</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon-box">
                    <i className="bi bi-heart fs-1 text-primary"></i>
                    <h4>Compassion</h4>
                    <p>Care and support for those in need</p>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="icon-box">
                    <i className="bi bi-award fs-1 text-primary"></i>
                    <h4>Integrity</h4>
                    <p>Honest and transparent leadership</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Who We Are Section */}

      {/* Donate Section */}
      <section id="donate" className="donate section accent-background">
        <div className="container section-title" >
          <h2>Support Our Work</h2>
          <p>
            Your contribution helps us build a stronger Democratic presence in
            Muskegon County
          </p>
        </div>

        <div className="container"  >
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="donate-content text-center">
                <h3>Why Your Donation Matters</h3>
                <p className="mb-4">
                  Your generous contribution directly supports our efforts to
                  elect Democrats, register voters, and advocate for progressive
                  policies in Muskegon County. Every dollar helps us:
                </p>
                <div className="row mb-4">
                  <div className="col-md-4">
                    <i className="bi bi-megaphone fs-1 mb-3 d-block"></i>
                    <h5>Reach More Voters</h5>
                    <p>Fund outreach campaigns and voter registration drives</p>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-calendar-event fs-1 mb-3 d-block"></i>
                    <h5>Host Events</h5>
                    <p>Organize community gatherings and candidate forums</p>
                  </div>
                  <div className="col-md-4">
                    <i className="bi bi-trophy fs-1 mb-3 d-block"></i>
                    <h5>Win Elections</h5>
                    <p>Support Democratic candidates up and down the ballot</p>
                  </div>
                </div>

                <div className="donation-cta mt-5">
                  <h4 className="mb-4">Make a Difference Today</h4>
                  <a href="/get-involved#donate" className="btn btn-light btn-lg me-3">Donate Now</a>
                  <a href="/get-involved#join-us" className="btn btn-outline-light btn-lg">Become a Member</a>
                </div>

                <p className="mt-4 small">
                  <em>The Muskegon County Democratic Party is a registered
                    political organization. Contributions are not tax-deductible
                    for federal income tax purposes.</em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Donate Section */}

      {/* Contact Section */}
      <section id="contact" className="contact section light-background">
        <div className="container section-title" >
          <h2>Get In Touch</h2>
          <p>
            Have questions? Want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="container"  >
          <div className="row gy-4 justify-content-center">
            <div className="col-lg-4">
              <div className="info-wrap">
                <div className="info-item d-flex"  >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Location</h3>
                    <p>Muskegon County Democrats<br />490 W Western Ave.<br />Muskegon, MI 49440</p>
                  </div>
                </div>

                <div className="info-item d-flex"  >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email</h3>
                    <p>muskegondems@gmail.com</p>
                  </div>
                </div>

                <div className="info-item d-flex"  >
                  <i className="bi bi-share flex-shrink-0"></i>
                  <div>
                    <h3>Follow Us</h3>
                    <div className="social-links d-flex mt-2">
                      <a href="https://www.facebook.com/MuskegonDems/" title="Facebook"><i className="bi bi-facebook"></i></a>
                      <a href="https://www.instagram.com/muskegoncountydems/" title="Instagram"><i
                        className="bi bi-instagram"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form action="/api/contact" method="post" className="php-email-form"  >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                  </div>

                  <div className="col-md-6">
                    <input type="email" className="form-control" name="email" placeholder="Your Email" required />
                  </div>

                  <div className="col-md-12">
                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                  </div>

                  <div className="col-md-12">
                    <textarea className="form-control" name="message" rows={6} placeholder="Your Message" required></textarea>
                  </div>

                  <div className="col-md-12 text-center">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>

                    <button type="submit">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* /Contact Section */}
    </>
  )
}
