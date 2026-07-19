import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
            <div className="container mx-auto px-6 py-20 ">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <p className="text-2xl font-black font-display text-white mb-4">
                            TOPFAT<span className="text-amber-400">ART</span>
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            Contemporary art gallery and cultural space in Ibadan. Showcasing Nigerian and international artists.
                        </p>
                        <div className="flex gap-4">
                            {['Instagram', 'Facebook', 'Twitter'].map(s => (
                                <a key={s}
                                    href="#"
                                    className="text-xs text-gray-600 hover:text-white transition-colors uppercase tracking-widest"
                                >
                                    {s}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Exhibitions</p>
                        <ul className="space-y-3">
                            {['Contemporary Art', 'Traditional Works', 'New Media', 'Digital Collections', 'Installations'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Visit</p>
                        <ul className="space-y-3">
                            {['Gallery Hours', 'Admission', 'Events', 'Workshops', 'Group Tours'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <p className="text-xs uppercase tracking-widest text-gray-600 mb-5 font-semibold">Company</p>
                        <ul className="space-y-3">
                            {['About Us', 'Contact', 'Location', 'Membership', 'FAQs'].map(item => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-700">
                        &copy; {new Date().getFullYear()} Topfat Art Gallery. All rights reserved. | Built by{' '}
                        <a 
                            href="https://personal-portfolio-rho-three-54.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-amber-400 hover:text-amber-300 transition-colors font-semibold"
                        >
                            temitope.dev
                        </a>
                    </p>
                    <div className="flex gap-6 text-xs text-gray-700">
                        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
                        <a href="#" className="hover:text-gray-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer