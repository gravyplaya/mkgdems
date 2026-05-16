import Link from 'next/link'
import React from 'react'

export async function Footer() {
  return (
    <footer id="footer" className="footer dark-background">
      <div className="container footer-top">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <Link href="/" className="logo d-flex align-items-center">
              <span className="sitename">Muskegon Democratic Party</span>
            </Link>
            <div className="footer-contact pt-3">
              <p>Muskegon County Democratic Party</p>
              <p>Muskegon, MI</p>
              <p className="mt-3"><strong>Phone:</strong> <span>231 375 7515</span></p>
              <p><strong>Email:</strong> <span>muskegondems@gmail.com</span></p>
            </div>
            <div className="social-links d-flex mt-4">
              <a href="https://www.facebook.com/MuskegonDems/" title="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/muskegoncountydems/" title="Instagram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/get-involved">Get Involved</Link></li>
              <li><Link href="/elections">Elections & Voting</Link></li>
              <li><Link href="/governance">Governance</Link></li>
              <li><Link href="/people">People</Link></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Resources</h4>
            <ul>
              <li><Link href="/events">Events</Link></li>
              <li><Link href="/governance#agenda">Meeting Agendas</Link></li>
              <li><Link href="/governance#resolutions">Resolutions</Link></li>
              <li><Link href="/elections#district-maps">District Maps</Link></li>
              <li><Link href="/#contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Get In Touch</h4>
            <p>
              Have questions or want to get involved? We'd love to hear from you.
            </p>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:muskegondems@gmail.com" style={{ color: 'var(--accent-color)' }}>
                muskegondems@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong> 231-375-7515
            </p>
            <div className="social-links d-flex mt-3">
              <a href="https://www.facebook.com/MuskegonDems/" title="Facebook"><i className="bi bi-facebook"></i></a>
              <a href="https://www.instagram.com/muskegoncountydems/" title="Instagram"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>

      <div className="container copyright text-center mt-4">
        <p>
          © <span>Copyright</span>
          <strong className="px-1 sitename">Muskegon Democratic Party</strong>
          <span>All Rights Reserved</span>
        </p>
        <div className="credits">
          Designed by <a href="https://Tavonni.com/">Tavonni</a>
        </div>
      </div>
    </footer>
  )
}
