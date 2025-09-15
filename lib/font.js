import { DM_Sans, Manrope } from 'next/font/google'

export const dmSans = DM_Sans({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--zefxa-font",
    display: 'swap',
})

export const manrope = Manrope({
    weight: ['400', '500', '600', '700',],
    subsets: ['latin'],
    variable: "--zefxa-font-two",
    display: 'swap',
})
