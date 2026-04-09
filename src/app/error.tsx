'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold text-gray-800">Something went wrong</h1>
      <p className="text-gray-500">{error.message}</p>
      <button onClick={reset} className="btn-primary">
        Try again
      </button>
    </main>
  );
}
