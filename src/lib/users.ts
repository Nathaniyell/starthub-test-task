import usersData from "@/data/users.json"


export interface User {
    id: string
    name: string
    role: string
    description: string
    avatar: string
    contact: string
  }
 
  
  // This function now reads from the JSON file
  export async function getUserList(): Promise<User[]> {
    // We can still simulate a network delay if desired
    await new Promise((resolve) => setTimeout(resolve, 100))
  
    // Type assertion to ensure the JSON data matches our User interface
    return usersData as User[]
  }
  
  