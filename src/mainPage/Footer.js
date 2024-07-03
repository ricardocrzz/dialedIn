import React from 'react'
import '../styles/Footer.css'
function Footer() {
    return (
        <div className='footer'>
            <p>&copy; 2024 DialedIn by Ricardo Cruz. All rights reserved.</p>
            <ul className="footerLinks">
                <li><a href="#" class="footerLink">Privacy Policy</a></li>
                <li><a href="#" class="footerLink">Terms of Use</a></li>
                <li><a href="#" class="footerLink">Contact Us</a></li>
            </ul>
            <div className="footerSocial">
                <a href="https://github.com/ricardocrzz">Github</a>
                <a href="https://www.linkedin.com/in/ricardo-cruz-a89191203/">LinkedIn</a>
                <a href="https://ricardocrzz.github.io/personalWebsite/">Portfolio</a>
            </div>
        </div>
    )
}

export default Footer