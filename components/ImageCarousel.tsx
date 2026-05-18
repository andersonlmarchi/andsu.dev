'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

interface ImageCarouselProps {
  images: string[]
  projectName: string
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-video bg-terminal-darker border border-terminal-green/20 flex items-center justify-center">
        <span className="text-terminal-green/40 text-sm">No images available</span>
      </div>
    )
  }

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }, [images.length])

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }, [images.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!isModalOpen) return
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      } else if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isModalOpen, goToNext, goToPrevious])

  return (
    <>
      <div
        className="relative aspect-video bg-terminal-darker border border-terminal-green/20 overflow-hidden group cursor-pointer"
        onClick={() => setIsModalOpen(true)}
        role="button"
        aria-label={`Open ${projectName} images in fullscreen`}
      >
        <div className="relative w-full h-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`${projectName} - Image ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToPrevious()
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-terminal-darker/80 border border-terminal-green/40 text-terminal-green p-2 hover:bg-terminal-darker hover:border-terminal-green transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <span className="text-lg">‹</span>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                goToNext()
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-terminal-darker/80 border border-terminal-green/40 text-terminal-green p-2 hover:bg-terminal-darker hover:border-terminal-green transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <span className="text-lg">›</span>
            </button>
          </>
        )}

        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation()
                  goToSlide(index)
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-terminal-green'
                    : 'w-2 bg-terminal-green/40 hover:bg-terminal-green/60'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        )}

        {images.length > 1 && (
          <div className="absolute top-4 right-4 bg-terminal-darker/80 border border-terminal-green/40 px-3 py-1 text-terminal-green/80 text-xs">
            {currentIndex + 1} / {images.length}
          </div>
        )}
      </div>

      {/* Fullscreen modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${projectName} images fullscreen`}
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={images[currentIndex]}
                alt={`${projectName} - Image ${currentIndex + 1}`}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 bg-terminal-darker/80 border border-terminal-green/40 text-terminal-green px-3 py-1"
              aria-label="Close fullscreen"
            >
              ✕
            </button>

            {/* Prev / Next in modal */}
            {images.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-terminal-darker/80 border border-terminal-green/40 text-terminal-green p-3"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-terminal-darker/80 border border-terminal-green/40 text-terminal-green p-3"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}

            {/* Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-terminal-darker/80 border border-terminal-green/40 px-3 py-1 text-terminal-green/80 text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

