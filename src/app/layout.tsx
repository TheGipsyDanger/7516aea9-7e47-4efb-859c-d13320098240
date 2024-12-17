import type {Metadata} from 'next'
import {GlobalWrapper} from '@/components'
import {Roboto, Manrope} from 'next/font/google'
import './globals.css'

const roboto = Roboto({
    variable: '--font-roboto',
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900']
})

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
    title: 'Netspaces',
    description: 'Project to test on netscpaces'
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body className={`${roboto.variable} ${manrope.variable} antialiased`}>
                <GlobalWrapper.Container>
                    <GlobalWrapper.Content>{children}</GlobalWrapper.Content>
                </GlobalWrapper.Container>
            </body>
        </html>
    )
}
