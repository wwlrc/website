import Link from 'next/link'
import Image from 'next/image'
 
export default function NotFound() {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-3">404 Page Not Found</h1>
      <p className="mb-4">Could not find the requested resource</p>
      <Image src="/404.webp" alt="404" width={500} height={500} />
    </main>
  )
}