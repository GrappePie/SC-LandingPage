"use client"
import React, {useState, useEffect} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"
import {FloatingWhatsApp} from 'react-floating-whatsapp'

const SmallNavbar = dynamic(() => import('./componets/Navbar/smallNavbar'));
const SmallFooter = dynamic(() => import('./componets/Footer/smallFooter'));
const Switcher = dynamic(() => import('./componets/switcher'));
const PlayaViva = dynamic(() => import('./componets/playaViva'));
const AmenidadesSlider = dynamic(()=>import('./componets/amenidadesSlider'));
const AmenidadesSlider2 = dynamic(()=>import('./componets/amenidadesSlider2'));

import ModalVideo from 'react-modal-video'
import "./../../node_modules/react-modal-video/css/modal-video.css";
import CountUp from 'react-countup';

import * as Icon from 'react-feather';
import {BiCalendar, BiDollarCircle, BiMap} from "react-icons/bi"
import {ourCausesData} from './Data/data'
import {teamData} from './Data/data'
import {BsCheckCircle, BsTelephone} from "react-icons/bs";
import {MdKeyboardArrowRight} from "react-icons/md";
import {FaArrowRight} from "react-icons/fa";
import {LiaBalanceScaleSolid} from "react-icons/lia";

export default function Charity() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('light');
            const loader = document.getElementById('globalLoader');
            if (loader)
                loader.remove();
        }
    }, []);
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <div id="globalLoader">
                <Image className={"my-loader"} src="/images/santaclara/logo.svg" alt="" width={138} height={138}/>
            </div>
            <SmallNavbar navClass="nav-light"/>

            <section className="relative lg:py-44 py-36 bg-center bg-cover home"
                     style={{backgroundImage: "url('/images/santaclara/bg.jpg')"}}>
                <div className="absolute inset-0 bg-slate-900/50"></div>
                <div className="container relative z-1">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center mt-10 gap-[30px]">
                        <div className="lg:col-span-7 md:col-span-6">
                            <div className="md:me-6">
                                <p className="text-white/75 text-xl max-w-xl">Invierte en un terreno en <span
                                    className="font-bold lg:leading-normal leading-normal text-4xl lg:text-2xl mb-5 text-white">Yucatán</span> en
                                    una comunidad residencial de la marca <span
                                        className="font-bold lg:leading-normal leading-normal text-4xl lg:text-2xl mb-5 text-white">ALMAVIVA</span> a
                                    2 minutos de las hermosas playas y salineras de <span
                                        className="font-bold lg:leading-normal leading-normal text-4xl lg:text-2xl mb-5 text-white">Santa Clara.</span>
                                </p>

                                {/*<div className="mt-6">
                                <Link href="#" className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sc-blue hover:bg-sc-green border-sc-blue hover:border-sc-green text-white rounded-md">Donate Now</Link>
                            </div>*/}
                            </div>
                        </div>

                        <div className="lg:col-span-5 md:col-span-6">
                            <div
                                className="p-6 rounded-lg border-t-8 border-sc-blue bg-white dark:bg-slate-900 shadow-lg dark:shadow-gray-800">
                                <div className="mb-6 text-center">
                                    <h4 className="font-bold lg:leading-normal leading-normal text-3xl mb-3">Buscas más
                                        información</h4>
                                    <p className="text-slate-400">Déjanos tus datos y te contactaremos a la brevedad</p>
                                </div>

                                <form>
                                    <div className="grid grid-cols-1">
                                        <div>
                                            <div className="grid md:grid-cols-2 gap-5">
                                                <div className="mb-5">
                                                    <label className="form-label font-medium">Nombre completo : <span
                                                        className="text-red-600">*</span></label>
                                                    <input type="text"
                                                           className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0"
                                                           placeholder="Nombre completo" name="name" required/>
                                                </div>

                                                <div className="mb-5">
                                                    <label className="form-label font-medium">Correo electrónico : <span
                                                        className="text-red-600">*</span></label>
                                                    <input type="email"
                                                           className="form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0"
                                                           placeholder="Correo electrónico" name="email" required/>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">¿Qué te describe mejor? <span
                                                className="text-red-600">*</span></label>
                                            <select
                                                className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0"
                                                name="subject" required>
                                                <option value="">Escoge una opción</option>
                                                <option value="Busco cambiar mi residencia">Busco cambiar mi
                                                    residencia
                                                </option>
                                                <option value="Quiero invertir en una propiedad">Quiero invertir en una
                                                    propiedad
                                                </option>
                                            </select>
                                        </div>

                                        <div className="mb-5">
                                            <label className="form-label font-medium">Teléfono : <span
                                                className="text-red-600">*</span></label>
                                            <div className="relative mt-2">
                                                <span
                                                    className="absolute top-0.5 start-0.5 w-9 h-9 text-xl bg-gray-100 dark:bg-slate-800 inline-flex justify-center items-center text-dark dark:text-white rounded"
                                                    id="basic-addon1"><BsTelephone className="w-5 h-5"/></span>
                                                <input type="tel"
                                                       className="form-input ps-12 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-sc-blue dark:border-gray-800 dark:focus:border-sc-blue focus:ring-0"
                                                       placeholder="Teléfono" name="telephone"
                                                       aria-describedby="inputGroupPrepend" pattern="[0-9]{10}"
                                                       required/>
                                            </div>
                                        </div>

                                        {/* <div className="mb-5">
                                        <div className="flex items-center w-full mb-0">
                                            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-sc-blue focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2" type="checkbox" value="" name="AcceptT&C" required/>
                                            <label className="form-check-label text-slate-400" htmlFor="AcceptT&C">Acepto los <Link href="#" className="text-sc-blue">Términos y Condiciones</Link> <span className="text-red-600">*</span></label>
                                        </div>
                                    </div>*/}

                                        <div className="mb-5">
                                            <input type="submit"
                                                   className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-sc-blue hover:bg-sc-green border-sc-blue hover:border-sc-green text-white rounded-md w-full financiamiento"
                                                   value="Enviar"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-sc-blue py-12">
                <div className="grid grid-cols-1 pb-8 text-center">
                    <h3 className="mb-6 md:text-5xl text-4xl md:leading-normal leading-normal text-white font-bold">Financiamiento</h3>
                </div>
                <div className="container relative">
                    <div className="relative grid md:grid-cols-4 grid-cols-2 items-center gap-[30px]">
                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white">¡Aparta tu terreno desde $<CountUp
                                className="counter-value" start={1} end={2000}/>!</h1>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white">Terrenos desde <CountUp
                                className="counter-value" start={1} end={240}/>2m²</h1>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white">¡Tu patrimonio desde $<CountUp
                                className="counter-value" start={0} end={1999}/> al mes!</h1>
                        </div>

                        <div className="counter-box text-center">
                            <h1 className="text-4xl font-bold mb-4 text-white"><CountUp className="counter-value"
                                                                                        start={0} end={60}/>MSI</h1>
                            <h5 className="counter-head text-xs font-semibold text-white">DESCUENTOS POR PRONTO
                                PAGO</h5>
                        </div>
                    </div>
                </div>
            </section>

            <PlayaViva containerClass={true}
                                     className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-4 gap-[30px] px-4 "/>

            <section className="relative md:py-24 py-16 md:pt-0 pt-0">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/santaclara/video.png" width={0} height={0} sizes='100vw'
                                               style={{width: "100%", height: "auto"}} className="rounded-md shadow-lg"
                                               alt=""/>
                                        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
                                            <Link href="#" onClick={() => setOpen(true)} data-id="S_CGed6E610"
                                                  className="lightbox h-20 w-20 rounded-full shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-sc-blue dark:text-white">
                                                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="content md:mt-8">
                                <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
                                    <div className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                        <div
                                            className="w-16 h-16 bg-sc-blue/5 group-hover:bg-sc-blue group-hover:text-white border-2 border-sc-blue/20 text-sc-blue dark:text-sc-gold rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                            <LiaBalanceScaleSolid width={30} height={30}/>
                                        </div>

                                        <div className="content mt-7">
                                            <h5 className="title h5 text-lg font-medium hover:text-sc-blue mb-3 font-engravers">Certeza Jurídica</h5>
                                            <ul className="list-none text-slate-400">
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Escrituración inmediata</li>
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Régimen de condominio</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="group p-6 rounded-lg shadow dark:shadow-gray-800 bg-white dark:bg-slate-900 hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                        <div
                                            className="w-16 h-16 bg-sc-blue/5 group-hover:bg-sc-blue group-hover:text-white border-2 border-sc-blue/20 text-sc-blue dark:text-sc-gold rounded-lg text-2xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 transition-all duration-500 ease-in-out">
                                            <BiCalendar width={30} height={30}/>
                                        </div>

                                        <div className="content mt-7">
                                            <h5 className="title h5 text-lg font-medium hover:text-sc-blue mb-3 font-engravers">Fechas de entrega</h5>
                                            <ul className="list-none text-slate-400 font-centaur">
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Club de Playa: 2026</li>
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Urbanización interna: 2028</li>
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Casa Club: 2029</li>
                                                <li className="mb-1 flex"><BsCheckCircle className="text-sc-blue dark:text-sc-gold text-base me-2"/>Ecoparque: 2029</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-sc-green to-sc-blue"></div>
            </section>
            <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="749762017"
                        onClose={() => setOpen(false)}/>

            <section className="relative md:py-24 py-16 amenidades">
                <AmenidadesSlider/>
                <div className="container relative p-5 masterplan">
                    <div className="grid md:grid-cols-1 grid-cols-1 items-center gap-[30px]">
                        <div className="md:col-span-1">
                            <div className="grid grid-cols-1 pb-8 text-center">
                                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-sc-gold">Masterplan</h3>
                            </div>
                            <div className="lg:me-8">
                                <Image src="/images/santaclara/master plan.svg" width={0} height={0} sizes='100vw'
                                       style={{width: "100%", height: "auto"}} alt=""/>
                            </div>
                            <div className="grid grid-cols-1 pb-8 text-center">
                                <p className="text-slate-400 max-w-xl mx-auto">Amenidades del ecoparque.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <AmenidadesSlider2/>
            </section>



            <section className="relative md:py-24 py-16 md:pt-0 pt-0 ubicacion">
                <div className="container relative">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="relative z-1">
                            <div className="grid lg:grid-cols-12 grid-cols-1 md:text-start text-center justify-center">
                                <div className="lg:col-start-2 lg:col-span-10">
                                    <div className="relative">
                                        <Image src="/images/santaclara/ubicaciones.svg" width={0} height={0} sizes='100vw'
                                               style={{width: "100%", height: "auto"}} className="rounded-md shadow-lg"
                                               alt=""/>
                                        <div className="absolute bottom-0 translate-y-2/4 start-0 end-0 text-center">
                                            <Link href="https://goo.gl/maps/XHts79AgXtiQqYXz6"
                                                  className="text-3xl lightbox rounded-full p-3 shadow-lg dark:shadow-gray-800 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-sc-blue dark:text-white font-engravers">
                                                <BiMap/> Abrir en Google Maps
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 start-0 end-0 sm:h-2/3 h-4/5 bg-gradient-to-b from-sc-green to-sc-blue"></div>
            </section>
            <SmallFooter/>
            <Switcher/>
            <FloatingWhatsApp
                phoneNumber="+5215531957475"
                accountName="Ivonne Urbina"
                avatar="images/santaclara/logo.svg"
                chatMessage="¿Hola, como puedo ayudarte?"
                statusMessage="Normalmente responde en 1 hora"
                placeholder="Escribe tu mensaje"
                notificationSound
                notificationSoundSrc="https://opengameart.org/sites/default/files/pop.ogg"
                buttonStyle={{ left: '10px', bottom: '10px'}}
                chatboxStyle={{ left: '10px', bottom: '90px' }}
            />
            <div className="social" style={{zIndex:9998}}>
                <Link href="https://www.facebook.com/profile.php?id=61551257068491">
                    <div className="social-btn color-facebook">
                        <div className="icons8-facebook-app"></div>
                        <p className="order-1 google-font margin-telgram">Facebook</p>
                    </div>
                </Link>
                <Link href="#">
                    <div className="social-btn color-instagram">
                        <div className="icons8-instagram"></div>
                        <p className="order-1 google-font margin-instagram">instagram </p>
                    </div>
                </Link>
            </div>
        </>
    )
}