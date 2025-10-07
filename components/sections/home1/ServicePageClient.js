'use client'
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Service from '@/components/sections/home1/Service'

export default function ServicePageClient() {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Service />
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
    </>
  )
}
