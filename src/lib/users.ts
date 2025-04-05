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
  
  
  export async function getUserById(id: string): Promise<User | undefined> {
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    const users = usersData as User[]
    return users.find((user) => user.id === id)
  }
  
  