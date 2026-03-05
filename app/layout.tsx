import "@fontsource/inter/400.css"
import "@fontsource/inter/500.css"
import "@fontsource/inter/600.css"
import "@fontsource/inter/700.css"
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import type { ReactNode } from 'react'
 
export const metadata = {
  title: 'Charts Connect Documentation',
  description: 'Charts Connect Documentation',
}
 
const banner = <Banner storageKey="some-key">Charts Connect Documentation</Banner>
const navbar = (
  <Navbar logo={<b>Charts Connect</b>} />
)
const footer = <Footer>{new Date().getFullYear()} © Charts Connect.</Footer>

export default async function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}