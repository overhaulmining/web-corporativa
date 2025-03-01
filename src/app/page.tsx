import React from 'react'
import Carrusel from './components/Carrusel'
import Secciones from "@/app/components/Secciones"
import LogoCarousel from './components/empresas-carrusel'

function Page() {
  return (
    <div>
      <Carrusel />
      <Secciones />
      <LogoCarousel />
      <div className="flex justify-center items-center mx-auto py-10 px-5">
        {/* <HeroVideoDialog
          className="block dark:hidden"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=2BrzqUQAQTQ"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=2BrzqUQAQTQ"
          thumbnailSrc="https://startup-template-sage.vercel.app/hero-dark.png"
          thumbnailAlt="Hero Video"
        /> */}
        <iframe width="560" height="315" src="https://www.youtube.com/embed/2BrzqUQAQTQ?si=BoM-UByeq0ZJdZLe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Page