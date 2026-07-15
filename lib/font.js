import { Outfit, Rubik } from 'next/font/google'

export const outfit = Outfit({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--zefxa-font",
    display: 'swap',
})

export const rubik = Rubik({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--zefxa-font-two",
    display: 'swap',
})
