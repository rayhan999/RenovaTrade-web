'use client'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import ModalVideo from 'react-modal-video'
import { useState } from 'react'
import Service from "@/components/sections/home1/Service"
export default function Home() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
        <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our services">
       <Service />

      

      
        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="Get7rqXYrbQ" onClose={() => setOpen(false)} />
        </Layout>
        </>
    )
}