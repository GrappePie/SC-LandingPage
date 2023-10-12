"use client"
import React, {useEffect,useState} from 'react'
import Link from "next/link"
import Image from "next/image"
import dynamic from "next/dynamic"

const TinySlider = dynamic(()=>import('tiny-slider-react'),{ssr: false,});
import '../../../node_modules/tiny-slider/dist/tiny-slider.css'

import Lightbox from 'react-18-image-lightbox';
import "react-18-image-lightbox/style.css"

const settings2 = {
    container: '.tiny-twelve-item',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 0,
    responsive: {
        1025: {
            items: 12
        },

        992: {
            items: 8
        },

        767: {
            items: 6
        },

        320: {
            items: 2
        },
    },
}

export default function Amenidadeslider(){

    const services = ["/images/amenidades/1.svg","/images/amenidades/2.svg","/images/amenidades/3.svg","/images/amenidades/4.svg","/images/amenidades/5.svg","/images/amenidades/6.svg","/images/amenidades/7.svg","/images/amenidades/8.svg","/images/amenidades/9.svg","/images/amenidades/10.svg","/images/amenidades/11.svg","/images/amenidades/12.svg","/images/amenidades/13.svg","/images/amenidades/14.svg","/images/amenidades/15.svg"]

    const [lightBox, setLightbox] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleMovePrev = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + services.length - 1) % services.length);
    };

    const handleMoveNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % services.length);
    };
    const handleImageClick = (index) => {
        console.log(index);
        setCurrentImageIndex(index);
        setLightbox(true);
    };
    const currentImage = services[currentImageIndex];
  
    return(
        <div className="container-fluid relative">
            <div className="grid grid-cols-1 pb-8 text-center">
                <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold text-sc-gold">Amenidades</h3>
            </div>
            <div className="grid grid-cols-1 relative">
                <div className="tiny-twelve-item">

                    <TinySlider settings={settings2}>
                        {services.map((item, index) => {
                            return(
                                <div className="tiny-slide" key={index}>
                                    <div className="card border-0 rounded-0">
                                        <div className="card-body p-0">
                                            <Image src={item} className="" width={0} height={0} sizes='100vw' style={{width:"50%", height:"auto"}} alt="" />
                                            <div className="overlay bg-dark"></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </TinySlider>
                </div>
                {lightBox && (
                            <Lightbox
                                mainSrc={currentImage}
                                prevSrc={services[(currentImageIndex + services.length - 1) % services.length]}
                                nextSrc={services[(currentImageIndex + 1) % services.length]}

                                onCloseRequest={() => setLightbox(false)}
                                onMovePrevRequest={handleMovePrev}
                                onMoveNextRequest={handleMoveNext}
                            />
                        )}
                {/*<div className="absolute top-2/4 -translate-y-2/4 start-2/4 ltr:-translate-x-2/4 rtl:translate-x-2/4 text-center hidden md:block">
                    <Link href="/https://www.instagram.com/shreethemes/" target="_blank"className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">Follow Now</Link>
                </div>*/}
            </div>
        </div>
    )
}