export default function Footer() {
  return (
    <footer className="py-8 text-center text-zinc-600 bg-black border-t border-zinc-900 text-sm">
      <p>&copy; {new Date().getFullYear()} Dhruv. Built with Next.js & Tailwind.</p>
    </footer>
  );
}