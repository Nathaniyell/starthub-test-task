import type { Metadata } from "next"
import { getUserList } from "@/lib/users"
import UserCard from "@/components/user-card"

export const metadata: Metadata = {
  title: "User Directory | StartHub",
  description: "Browse our complete list of users and team members with detailed profiles and information.",
  openGraph: {
    title: "User Directory | StartHub",
    description: "Browse our complete list of users and team members with detailed profiles and information.",
    url: "/users",
    type: "website",
  },
  alternates: {
    canonical: "/users",
  },
}

export default async function UserListPage() {
  const users = await getUserList()

  return (
    <main className="w-11/12 max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">StartHub Users</h1>
        <p className="text-gray-600 max-w-3xl">
          Meet our talented Users. Click &quot;View Details&quot; to see full profiles
        </p>
      </header>

      <section aria-labelledby="user-directory-heading">
        <h2 id="user-directory-heading" className="sr-only">User Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </section>

      {users.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No users found</p>
        </div>
      )}
    </main>
  )
}