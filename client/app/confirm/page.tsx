export default async function Signup({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const id = await searchParams;
  return (
    <div>
      <div className="w-full px-8 sm:max-w-lg mx-auto mt-8">
        <p className="text-foreground">{id.message}</p>
      </div>
    </div>
  );
}
