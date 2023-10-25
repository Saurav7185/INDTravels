import './FooterStyle.css';
function Footer(){
    return(
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>INDTravels</h1>
                    <p>Choose your favourite destination.</p>
                </div>
                <div>
                    <a href='/'>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href='/'>
                        Changelog
                    </a>
                    <a href='/'>
                       status
                    </a>
                    <a href='/'>
                       Licenese
                    </a>
                    <a href='/'>
                        All versions
                    </a>
                </div>
                <div>
                    <h4>Community</h4>
                    <a href='/'>
                       Githubs
                    </a>
                    <a href='/'>
                     Issues
                    </a>
                    <a href='/'>
                      Project
                    </a>
                    <a href='/'>
                        Twitter
                    </a>
                </div>
                <div>
                    <h4>Help</h4>
                    
                    <a href='/'>
                       Support
                    </a>
                    <a href='/'>
                       Troubleshooting
                    </a>
                    <a href='/'>
                       Contact Us
                    </a>
                </div>
                <div>
                    <h4>Others</h4>
                    <a href='/'>
                        terms of Service
                    </a>
                    <a href='/'>
                       Privacy Policy
                    </a>
                    <a href='/'>
                      License
                    </a>
                   
                </div>
            </div>
        </div>
    );
}
export default Footer;