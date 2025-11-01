import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Echoes of Consciousness',
  description: 'A meditation on existence, connection, and the space between understanding and being',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
