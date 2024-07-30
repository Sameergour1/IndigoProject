// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import './footer.css'; // Ensure this path is correct

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-content">
//                 <div className="footer-section quick-links">
//                     <h4>Quick Links</h4>
//                     <ul>
//                         <li><a href="/home">Home</a></li>
//                         <li><a href="/flights">Flights</a></li>
//                         <li><a href="/cancel">Cancel Flight</a></li>
//                         <li><a href="/update">Update</a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section contact-us">
//                     <h4>Contact Us</h4>
//                     <ul>
//                         <li><a href="mailto:contact@indigoairline.com">Email: contact@indigoairline.com</a></li>
//                         <li><a href="tel:+1234567890">Phone: +123 456 7890</a></li>
//                     </ul>
//                 </div>

//                 <div className="footer-section follow-us">
//                     <h4>Follow Us</h4>
//                     <div className="social-icons">
//                         <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
//                         <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
//                         <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
//                         <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// }

// export default Footer;

import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import './footer.css'; // Ensure this path is correct

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/home">Home</a></li>
                        <li><a href="/flights">Flights</a></li>
                        <li><a href="/cancel">Cancel Flight</a></li>
                        <li><a href="/update">Update</a></li>
                    </ul>
                </div>

                <div className="footer-section contact-us">
                    <h4>Contact Us</h4>
                    <ul>
                        <li><a href="mailto:contact@indigoairline.com">Email: contact@indigoairline.com</a></li>
                        <li><a href="tel:+1234567890">Phone: +123 456 7890</a></li>
                    </ul>
                </div>

                <div className="footer-section follow-us">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Indigo Airline. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;

