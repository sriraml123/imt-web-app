import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="font-bold text-xl mb-4 text-pink-200">INFINITY MEGA TECHNOLOGIES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-pink-200 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-pink-200 transition-colors">Our Blog</a></li>
                            <li><a href="#" className="hover:text-pink-200 transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-pink-200 transition-colors">Reviews</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-purple-200">TOP CATEGORIES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-purple-200 transition-colors">Data Engineering</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">DevOps Engineer</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">Web & Mobile App Development</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">Full Stack Developer</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">Digital Marketing</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">Data Science & AI</a></li>
                            <li><a href="#" className="hover:text-purple-200 transition-colors">AI - ML, DL, NLP, LLM</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-indigo-200">TRENDING COURSES</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-indigo-200 transition-colors">Azure Data Engineer</a></li>
                            <li><a href="#" className="hover:text-indigo-200 transition-colors">Gen-AI</a></li>
                            <li><a href="#" className="hover:text-indigo-200 transition-colors">DevOps</a></li>
                            <li><a href="#" className="hover:text-indigo-200 transition-colors">Data Engineer - Azure, AWS, GCP</a></li>
                            <li><a href="#" className="hover:text-indigo-200 transition-colors">DevOPS Engineer - Azure, AWS, GCP</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-xl mb-4 text-blue-200">WORK WITH US</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-blue-200 transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-blue-200 transition-colors">Hire From Us</a></li>
                        </ul>
                    </div>
                </div>

                <div className="text-center border-t border-white/20 pt-8">
                    <div className="flex justify-center gap-4 flex-wrap mb-4">
                        <a href="#" className="hover:text-pink-200 transition-colors">Sitemap</a>
                        <span className="text-white/50">|</span>
                        <a href="#" className="hover:text-pink-200 transition-colors">FAQs</a>
                        <span className="text-white/50">|</span>
                        <a href="#" className="hover:text-pink-200 transition-colors">Cancellation & Refunds</a>
                        <span className="text-white/50">|</span>
                        <a href="#" className="hover:text-pink-200 transition-colors">Privacy Policy</a>
                        <span className="text-white/50">|</span>
                        <a href="#" className="hover:text-pink-200 transition-colors">Terms & Conditions</a>
                        <span className="text-white/50">|</span>
                        <a href="#" className="hover:text-pink-200 transition-colors">Feedback</a>
                    </div>
                    <p className="text-sm mb-4 text-white/80">*Note: The certification names and logos are the trademarks of their respective owners. <a href="#" className="text-pink-300 hover:text-pink-200 transition-colors">View Disclaimer</a></p>
                    <p className="text-white/90">©2021 INFINITY MEGA TECHNOLOGIES.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;