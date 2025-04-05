import Link from "next/link"

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-bold mb-4">User Not Found</h2>
      <p className="text-gray-600 mb-8">We couldn&apos;t find the user you&apos;re looking for.</p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
      >
        Return to User Directory
      </Link>
    </div>
  )
}

