import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
export default function Footer() {
    return (
        <div>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12 col-md-6">
                            <h6>About Us</h6>
                            <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem rerum atque eaque inventore, velit ea ratione, suscipit, cumque eveniet nobis quod ab! Odio nihil exercitationem aperiam vitae corporis tempora!                          </p>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Quick Links</h6>
                            <ul class="footer-links">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  >Hockey</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} >Hockey News</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} >Hockey Players</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} >Hockey Matches</Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} >Hockey Live Scores</Link></li>
                            </ul>
                        </div>

                        <div class="col-xs-6 col-md-3">
                            <h6>Get In Touch</h6>
                            <ul class="footer-links">
                                {/* <li onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}  >Home</li> */}
                                <li>Phone: <a  href={`tel:+92-314-1234567`}>+92-314-1234567</a></li>
                                <li>Phone: <a  href={`tel:+92-314-1234567`}>+92-314-1234567</a></li>
                                <li>Phone: <a  href={`tel:+92-314-1234567`}>+92-314-1234567</a></li>
                          
                                
                            </ul>
                        </div>
                        
                    </div>
                    <hr/>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-sm-6 col-xs-12">
                            <p class="copyright-text">Copyright &copy; 2024 All Rights Reserved by
                                <Link to="/" onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}}> Hockey Updates</Link>.
                            </p>
                            <p class="copyright-text">Site developed by: Metatech
                                
                            </p>
                        </div>

                        <div class="col-md-4 col-sm-6 col-xs-12">
                            <ul class="social-icons">
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="facebook" to="/" target="blank"><i class="fa fa-facebook"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="twitter" to="/"><i class="fa fa-twitter"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="dribbble" to="/"><i class="fa fa-dribbble"></i></Link></li>
                                <li><Link onClick={()=>{window.scrollTo({ behavior: 'smooth', top: 0, left: 0,behavior:"instant" })}} class="linkedin" to="/"><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}