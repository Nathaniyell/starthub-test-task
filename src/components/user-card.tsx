import type { User } from "@/lib/users"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getInitials } from "@/lib/getInitials"
import { Mail } from "lucide-react"

interface UserCardProps {
  user: User
  tabIndex?: number
  ariaPosInSet?: number
  ariaSetSize?: number
}

export default function UserCard({ 
  user, 
  tabIndex = 0,
  ariaPosInSet,
  ariaSetSize 
}: UserCardProps) {
  const { avatar, role, name, email, description, id } = user
  
  return (
    <article 
      id={`user-card-${id}`}
      aria-labelledby={`user-${id}-name`}
      tabIndex={tabIndex}
      aria-posinset={ariaPosInSet}
      aria-setsize={ariaSetSize}
      className="h-full outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
    >
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
            <h2 id={`user-${id}-name`} className="text-xl font-semibold text-gray-900">
              {name}
            </h2>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-700 mb-3">{description}</p>
        </CardContent>
        <CardFooter className="border-t pt-4">
          <Button asChild variant="outline" className="w-full">
            <Link
              href={`mailto:${email}`}
              className="flex items-center gap-2 w-full justify-center focus-visible:outline-none"
              aria-label={`Email ${name} at ${email}`}
            >
              <Mail size={20} />
              {email}
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </article>
  )
}