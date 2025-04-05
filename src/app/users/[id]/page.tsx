import type { Metadata } from "next"
import { getUserById, getUserList } from "@/lib/users"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"

// Generate static params for all users
export async function generateStaticParams() {
  const users = await getUserList()
  return users.map((user) => ({
    id: user.id,
  }))
}

// Generate metadata for each user page
export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const user = await getUserById(params.id)

  if (!user) {
    return {
      title: "User Not Found",
    }
  }

  return {
    title: user.name,
    description: `${user.name} is a ${user.role} at Our Organization. ${user.description}`,
    openGraph: {
      title: `${user.name} | Our Organization`,
      description: `${user.name} is a ${user.role} at Our Organization. ${user.description}`,
    },
  }
}

export default async function UserPage({ params }: { params: { id: string } }) {
  const user = await getUserById(params.id)

  if (!user) {
    notFound()
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link href="/" className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-gray-900">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to all users
      </Link>

      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <Avatar className="w-24 h-24">
              <AvatarImage src={user.avatar} alt="" className="object-cover" />
              <AvatarFallback className="text-2xl" aria-hidden="true">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold mb-2">{user.name}</h1>
              <p className="text-lg text-gray-500 mb-4">{user.role}</p>

              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <h2 className="text-lg font-semibold mb-2">About</h2>
                <p className="text-gray-700">{user.description}</p>
              </div>

              <div className="flex items-center justify-center md:justify-start text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>{user.contact}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

