import * as React from "react";
import Header from './Header'
import Footer from './Footer'

type PageProps = { children: React.ReactNode };

export default function PageFull({ children }: PageProps) {

  return (
    <div>
      <Header />
      <div className="h-screen pt-20 pb-20">
        { children }
      </div>
      <Footer />
    </div>
  )
}