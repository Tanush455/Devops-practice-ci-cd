import React, { use } from 'react'
import {prisma} from "@repo/db/client";
export default async function Home() {

  const user = await prisma.user.findFirst();
  return (
    <div>
      {user?.email}
      {user?.password}
      {user?.username}
    </div>
  )
}
