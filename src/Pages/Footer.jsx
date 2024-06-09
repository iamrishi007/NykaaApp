
import '../Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <div className="footer-icon-text">
            <img src="https://smallimg.pngkey.com/png/small/13-134427_email-logo-white-png.png" alt="Email Icon" className="icon" />
            <p>Get special discount on your inbox</p>
          </div>
          <div className="footer-input-button">
            <input type="text" placeholder="Your Email" className="footer-input" />
            <button className="footer-button">SEND</button>
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-icon-text">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7hMZQfigOJp02co0KF2sBJYEY2XXBcl-fQ&s" alt="Mobile App Icon" className="icon" />
            <p>EXPERIENCE THE NYKAA MOBILE APP</p>
          </div>
          <div className="footer-app-icons">
            <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" className="app-icon" />
            <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="Apple Store" className="app-icon" />
          </div>
        </div>
        <div className="footer-section">
          <div className="footer-icon-text">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd7hMZQfigOJp02co0KF2sBJYEY2XXBcl-fQ&s" alt="Help Icon" className="icon" />
            <p>FOR ANY HELP, YOU MAY CALL US AT</p>
          </div>
          <p>1800-267-4444</p>
          <p>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-column">
          <h3>NYKAA</h3>
          <ul>
            <li>Who are we?</li>
            <li>Careers</li>
            <li>Authenticity</li>
            <li>Press</li>
            <li>Testimonials</li>
            <li>Nykaa CSR</li>
            <li>Responsible Disclosure</li>
            <li>Investor Relations</li>
            <li>Link to Smart ODR</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>Contact Us</li>
            <li>Frequently asked questions</li>
            <li>Store Locator</li>
            <li>Cancellation & Return</li>
            <li>Shipping & Delivery</li>
            <li>Sell on Nykaa</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Inspire Me</h3>
          <ul>
            <li>Beauty Book</li>
            <li>Nykaa Network</li>
            <li>Buying Guides</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>Offer Zone</li>
            <li>New Launches</li>
            <li>Nykaa Man</li>
            <li>Nykaa Fashion</li>
            <li>Nykaa Pro</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Top Categories</h3>
          <ul>
            <li>Makeup</li>
            <li>Skin</li>
            <li>Hair</li>
            <li>Bath & Body</li>
            <li>Appliances</li>
            <li>Mom and Baby</li>
            <li>Health & Wellness</li>
            <li>Fragrance</li>
            <li>Natural</li>
            <li>Luxe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
