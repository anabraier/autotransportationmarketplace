import "../styles/globals.css";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Bar */}
      <nav className="bg-gray-900 py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <Link href="/">
            <h1 className="text-xl font-bold">AutoTransporter</h1>
          </Link>
          <div className="space-x-4">
            <Link href="/marketplace" className="hover:text-gray-300">Marketplace</Link>
            <Link href="/services" className="hover:text-gray-300">Services</Link>
            <Link href="/contact" className="hover:text-gray-300">Contact</Link>
            <Link href="/login" className="bg-blue-500 px-4 py-2 rounded">Login</Link>
            <Link href="/register" className="bg-green-500 px-4 py-2 rounded">Sign Up</Link>
          </div>
        </div>
      </nav>
      
      {/* Render the Page Component */}
      <Component {...pageProps} />
      
      {/* Footer */}
      <footer className="text-center py-6 bg-gray-900">
        <p>© {new Date().getFullYear()} AutoTransporter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MyApp;
