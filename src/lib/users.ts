export interface User {
    id: string
    name: string
    role: string
    description: string
    avatar: string
    email: string
  }
  
  
  import usersData from "@/data/users.json"
  
  
  export async function getUserList(): Promise<User[]> {
        await new Promise((resolve) => setTimeout(resolve, 100))
  
    return usersData as User[]
  }
  
  
  