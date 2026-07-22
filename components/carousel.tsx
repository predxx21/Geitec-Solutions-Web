'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const images = [
  '/images/154780053_101653458663122_8950315014626681755_n.jpg',
  '/images/155014346_101692598659208_1180160171432398039_n.jpg',
  '/images/155550119_102660228562445_2897895025810392497_n.jpg',
  '/images/155839563_101663191995482_1607046193039376785_n.jpg',
  '/images/157210838_105275021634299_2499887557933662983_n.jpg',
  '/images/157418976_101713468657121_2992286566231889704_n.jpg',
  '/images/158657687_109361111225690_7513226067818613071_n.jpg',
  '/images/163506628_115183820643419_33963542574246901_n.jpg',
  '/images/164878523_115537083941426_1629483245198173976_n.jpg',
  '/images/165478838_117288820432919_8125937293347068831_n.jpg',
]

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length)
    setAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length)
    setAutoPlay(false)
  }

  return (
    <div 
      className="relative w-full h-96 md:h-screen max-h-[600px] md:max-h-full overflow-hidden rounded-lg shadow-2xl"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          {/* Overlay gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        </div>
      ))}

      {/* Controles de navegación - Botones */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Slide anterior"
      >
        <ChevronLeft size={24} className="text-slate-900" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full transition-all"
        aria-label="Siguiente slide"
      >
        <ChevronRight size={24} className="text-slate-900" />
      </button>

      {/* Indicadores de puntos */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index)
              setAutoPlay(false)
            }}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-emerald-500 w-8'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Contador de slides */}
      <div className="absolute top-4 right-4 z-10 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {images.length}
      </div>
    </div>
  )
}
