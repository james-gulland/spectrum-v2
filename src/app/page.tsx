import { getUsers } from "@/api/actions";
import Link from "next/link";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="text-4xl font-bold">Welcome to Spectrum V2</h1>
      <p className="mt-4 text-lg">This is a sample application using Next.js and Drizzle ORM.</p>
      <p className="mt-4">Testing Drizzle/Neon Postgres integration:</p>
      {users && users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6">No users found.</p>
      )}

      <p className="mt-4">Testing route to make sure it doesnt affect AudioBar:</p>
      <Link href="/test" className="hover:underline">
        Go to Text Page
      </Link>
    </main>
  );
}
