import type { Metadata } from "next"
import { getUserList } from "@/lib/users"
import UserCard from "@/components/user-card"

export const metadata: Metadata = {
  title: "User Directory | StartHub",
  description: "Browse our complete list of users and team members with detailed profiles and information.",
}

export default async function UserListPage() {
  const users = await getUserList()

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our Users</h1>

      <p className="text-gray-600 mb-8">Browse our complete directory of users and team members below.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}

