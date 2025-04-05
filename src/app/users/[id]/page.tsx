import type { Metadata } from "next"
import { getUserById, getUserList } from "@/lib/users"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getInitials } from "@/lib/getInitials"

interface PageProps {
  params: { id: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  const users = await getUserList()
  return users.map((user) => ({
    id: user.id,
  }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const user = await getUserById(params.id)
  return {
    title: user?.name || "User Not Found",
    description: user?.description,
  }
}


export default async function UserPage({ params }: PageProps) {
  const user = await getUserById(params.id)

  if (!user) {
    notFound()
  }

  const { avatar, role, name, email, description} = user
  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/"
        className="inline-flex items-center mb-6 text-sm font-medium text-gray-600 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-2 py-1 transition-colors"
        aria-label="Back to all users"
      >
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
          <path d="m15 18-6-6 6-6" />
        </svg>
        Back to all users
      </Link>


      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <article className="flex flex-col md:flex-row items-center md:items-start gap-6">

            <Avatar className="w-24 h-24">
              <AvatarImage
                src={avatar}
                alt={`Profile picture of ${name}`}
                className="object-cover"
              />
              <AvatarFallback
                className="text-2xl bg-gray-100 text-gray-800"
                aria-hidden="true"
              >
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>

            <div className="text-center md:text-left">

              <h1 className="text-3xl font-bold mb-2" id="user-name">{name}</h1>
              <p className="text-lg text-gray-600 mb-4">{role}</p>
              <section
                className="bg-gray-50 p-4 rounded-lg mb-4"
                aria-labelledby="about-heading"
              >
                <h2 id="about-heading" className="text-lg font-semibold mb-2">About</h2>
                <p className="text-gray-700">{description}</p>
              </section>
              <div
                className="flex items-center justify-center md:justify-start text-gray-600"
                aria-label="email information"
              >
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
                <a
                  href={`mailto:${email}`}
                  className="hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-sm px-1 transition-colors"
                >
                  {email}
                </a>
              </div>
            </div>
          </article>
        </CardContent>
      </Card>
    </main>
  )
}