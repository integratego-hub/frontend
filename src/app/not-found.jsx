export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-[60vh] text-center">
      <h1 className="text-7xl font-extrabold text-red-600">404</h1>
      <p className="mt-4 text-lg">Sorry — the page you were looking for was not found.</p>
      <a className="mt-6 inline-block underline" href="/">Go to home</a>
    </div>
  );
}
