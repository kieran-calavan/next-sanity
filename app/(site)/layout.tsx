import '../globals.css'
import Link from "next/link"

export const metadata = {
  title: 'My Awesome Site',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className="max-w-5xl mx-auto py-10">
        <header className="flex items-center justify-between">
          <Link href="/" className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">Kieran</Link>
        </header>
        <main className="py-20">{children}</main>
      </body>
    </html>
  )
}