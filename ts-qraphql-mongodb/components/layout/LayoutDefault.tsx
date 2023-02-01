import * as React from "react";
import Header from './Header'
import Footer from './Footer'

type PageProps = { children: React.ReactNode };

export default function Page({ children }: PageProps) {

  return (
    <div>
      <Header />
      <div className="container mx-auto pt-32 pb-32">
        { children }
      </div>
      <Footer />
    </div>
  )
}