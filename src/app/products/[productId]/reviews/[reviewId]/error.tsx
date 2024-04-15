"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // use reset to data Recovering from Errors
  return (
    <div>
      {error.message}
      <button onClick={reset}>Try again</button>
    </div>
  );
}
