import type { Metadata } from "next"
import { getUserList } from "@/lib/users"
import UserCard from "@/components/user-card"

export const metadata: Metadata = {
  title: "StartHub Users",
  description: "Browse our complete list of users with detailed profiles and information.",
  openGraph: {
    title: "StartHub Users",
    description: "Browse our complete list of users with detailed profiles and information.",
    url: "https://starthub-test-task.vercel.app/",
    type: "website",
  },
  alternates: {
    canonical: "https://starthub-test-task.vercel.app/",
  },
}

export default async function UserListPage() {
  const users = await getUserList()

  return (
    <main className="w-11/12 max-w-6xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">StartHub Users</h1>
        <p className="text-gray-600 max-w-3xl">
          Meet our talented Users
        </p>
      </header>

      <section aria-labelledby="user-directory-heading">
        <h2 id="user-directory-heading" className="sr-only">User Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <UserCard
              key={user.id}
              user={user}
              tabIndex={0}
              ariaPosInSet={index + 1}
              ariaSetSize={users.length}
            />
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