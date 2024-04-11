// The error.tsx file can be used to define a UI boundary for a route segment. 
// It serves as a catch-all for unexpected errors and allows you to display a fallback UI to your users.

'use client'; // error.tsx needs to be a Client Component.
import { useEffect } from 'react';

// It accepts two props:
// error: This object is an instance of JavaScript's native Error object.
// reset: This is a function to reset the error boundary. When executed, the function will try to re-render the route segment.
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);
 
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-green-600 px-4 py-2 text-sm text-white transition-colors hover:bg-green-500"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </button>
    </main>
  );
}