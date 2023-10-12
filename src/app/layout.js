import "../app/assets/css/tailwind.css"
import './globals.css'
import './assets/css/material.css'
import { Nunito, Work_Sans, EB_Garamond, Kaushan_Script, Alex_Brush } from 'next/font/google'


const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const work_sans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
  weight: ['300','400','500','600', '700'],
  display: 'swap',
})
const eb_garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  weight: ['400'],
  display: 'swap',
})


const kaushan = Kaushan_Script({
  subsets: ['latin'],
  variable: '--font-kaushan',
  weight: ['400'],
  display: 'swap',
})


const alex = Alex_Brush({
  subsets: ['latin'],
  variable: '--font-alex',
  weight: ['400'],
  display: 'swap',
})


export const metadata = {
  title: 'Santa Clara Ecovillage en Mérida | AlmaViva Mexico',
  siteName: 'Santa Clara Ecovillage',
  description:
      'Santa Clara Ecovillage desarrollo Vacacional – Residencial en Mérida y acceso ilimitado a un ecoparque de más de 500 hectáreas de area natural.',
  // change base url of your web (without '/' at the end)
  url: 'https://santaclaraecovillage.com.mx',
  type: 'website',
  robots: 'follow, index',
  // change with url of your image (recommended dimension = 1.91:1)
  // used in twitter, facebook, etc. card when link copied in tweet/status
  image: '/santaclara/logo.svg',
  author: 'GrappePie',
  verification: 'M7zVp4uZ17hknwb2opmBSwsb9pEvdt3A4D95P_Lz0_c'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="LTR">
      <body className={`${nunito.variable} ${work_sans.variable} ${eb_garamond.variable} ${kaushan.variable} ${alex.variable} font-nunito text-base text-black dark:text-white dark:bg-slate-900`}>
      {children}
      </body>
    </html>
  )
}
