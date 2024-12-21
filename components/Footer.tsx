export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Photo Maker. All rights reserved.
      </div>
    </footer>
  );
}