import { db } from "@/lib/db"

export default async function Home() {
  await db.set('hello', 'hello world')

  return (
    <div className='text-red-500'>Hello World</div>
  )
}
