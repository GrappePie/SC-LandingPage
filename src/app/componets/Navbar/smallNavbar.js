import React,{useEffect,useState} from "react";
import Link from "next/link";
import { Link as Link1 } from 'react-scroll';
import Image from "next/image";
import * as Icon from 'react-feather';

export default function SmallNavbar(){
    const [isMenu, setisMenu] = useState(false);
    const [modal , setModal] = useState(false);
    const toggleMenu = () => {
        setisMenu(!isMenu);
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    };
    return(
        <nav id="topnav" className={`nav-sticky`}>
        <div className="container relative">
            <Link className="logo" href="/">
                <Image src="/images/logo-dark.svg" width={276-65} height={48-12} className="inline-block dark:hidden" alt="" />
                <Image src="/images/logo-light.svg" width={276-65} height={48-12} className="hidden dark:inline-block" alt="" />
            </Link>

            <div className="menu-extras">
                <div className="menu-item">
                    <Link href="#" className={`navbar-toggle ${isMenu ? 'open' : ''}`} id="isToggle" onClick={() => toggleMenu()}>
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </Link>

                </div>
            </div>

            <ul className="buy-button list-none space-x-1 mb-0">
                {/*<li className="inline mb-0">
                    <Link href="#" className="h-9 w-9 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-sc-blue/5 hover:bg-sc-blue border border-sc-blue/10 hover:border-sc-blue text-sc-blue hover:text-white"><Icon.Settings className="h-4 w-4"></Icon.Settings></Link>
                </li>*/}

                <li className="inline ps-1 mb-0">
                <Link href="https://github.com/GrappePie/SantaClara-LandingPage/raw/main/public/BROCHURE%20HD%20-%20SANTA%20CLARA%20ECOVILLAGE.pdf" target="_blank" className="h-9 px-1 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center rounded-full bg-sc-blue hover:bg-sc-green border border-sc-blue hover:border-sc-green text-white fixed right-[60px] top-5 md:static"><Icon.ArrowDown className="h-4 w-4"></Icon.ArrowDown>Brochure</Link>
                </li>
            </ul>

            <div id="navigation" style={{ display: isMenu ? 'block' : 'none' }}>
                <ul className="navigation-menu justify-end" id="navmenu-nav">
                    <li className="has-submenu">
                        <Link1 to="home" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Contacto</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 to="financiamiento" activeClass="active"  spy={true} smooth={true} duration={500} className="sub-menu-item">Financiamiento</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" to="amenidades" spy={true} smooth={true} duration={500} className="sub-menu-item">Amenidades</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" to="masterplan" spy={true} smooth={true} duration={500} className="sub-menu-item">Masterplan</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" to="ubicacion" spy={true} smooth={true} duration={500} className="sub-menu-item">Ubicación</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link1 activeClass="active" to="review" spy={true} smooth={true} duration={500} className="sub-menu-item"></Link1>
                    </li>
                    {/*<li className="has-submenu">
                        <Link1 activeClass="active" to="blog" spy={true} smooth={true} duration={500} className="sub-menu-item">Blog</Link1>
                    </li>
                    <li className="has-submenu">
                        <Link href="#" className="sub-menu-item" onClick={()=>setModal(!modal)}>Contact</Link>
                    </li>*/}
                </ul>
            </div>

            {modal ? 
            <div id="contactModal" className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 flex items-center justify-center">
                <div className="relative w-full h-auto max-w-md p-4">
                    <div className="relative bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100 dark:border-gray-700">
                            <h5 className="text-xl font-semibold">Contact Form</h5>
                            <button type="button"  onClick={()=>setModal(!modal)}  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ms-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="p-6 text-center">
                            <form>
                                <div className="grid lg:grid-cols-12 lg:gap-6">
                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="name" className="font-semibold">Your Name:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                                                <input name="name" id="name" type="text" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0" placeholder="Name :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:col-span-6 mb-5">
                                        <div className="text-start">
                                            <label htmlFor="email" className="font-semibold">Your Email:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                                                <input name="email" id="email" type="email" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0" placeholder="Email :" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1">
                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="subject" className="font-semibold">Your Question:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                                                <input name="subject" id="subject" className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0" placeholder="Subject :" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mb-5">
                                        <div className="text-start">
                                            <label htmlFor="comments" className="font-semibold">Your Comment:</label>
                                            <div className="form-icon relative mt-2">
                                                <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                                                <textarea name="comments" id="comments" className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0" placeholder="Message :"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" id="submit" name="send" className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sc-blue hover:bg-sc-green border-sc-blue hover:border-sc-green text-white rounded-md justify-center flex items-center">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>:""
            }
        </div>
    </nav>
    )
}