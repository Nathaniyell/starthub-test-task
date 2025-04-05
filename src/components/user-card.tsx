import type { User } from "@/lib/users"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getInitials } from "@/lib/getInitials"

interface UserCardProps {
  user: User
}

export default function UserCard({ user }: UserCardProps) {
  const { avatar, role, name, email, id } = user
  return (
    <article className="h-full">
      <Card className="h-full flex flex-col transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              src={avatar}
              alt={`Profile picture of ${name}`}
              className="object-cover"
            />
            <AvatarFallback
              className="bg-gray-100 text-gray-800"
              aria-hidden="true"
            >
              {getInitials(name)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex items-center text-sm mb-4">
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
              className="mr-1.5 text-gray-500"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <a
              href={`tel:${email}`}
              className="text-gray-600 hover:text-blue-600 focus-visible:outline-none focus-visible:text-blue-600"
              aria-label={`email ${name} at ${email}`}
            >
              {email}
            </a>
          </div>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link
              href={`/users/${id}`}
              className="focus-visible:ring-2 focus-visible:ring-offset-2"
              aria-label={`View details for ${name}`}
            >
              View Details
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </article>
  )
}