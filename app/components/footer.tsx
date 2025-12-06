const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-white mb-3">Company</h4>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/careers" className="hover:text-white">Careers</a></li>
            <li><a href="/press" className="hover:text-white">Press</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Support</h4>
          <ul className="space-y-2">
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
            <li><a href="/faq" className="hover:text-white">FAQ</a></li>
            <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-white">Terms of Service</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Connect</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white">Twitter</a></li>
            <li><a href="#" className="hover:text-white">Newsletter Signup</a></li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © {year} Company Name. All rights reserved.
      </div>
    </footer>
  );
}
