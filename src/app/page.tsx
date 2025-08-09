import { getUsers } from "@/api/actions";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <h1 className="text-4xl font-bold">Welcome to Spectrum V2</h1>
      <p className="mt-4 text-lg">This is a sample application using Next.js and Drizzle ORM.</p>
      {users && users.length > 0 ? (
        <ul className="mt-6">
          {users.map((user) => (
            <li key={user.id} className="mb-2">
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-6">No users found.</p>
      )}
    </main>
  );
}
