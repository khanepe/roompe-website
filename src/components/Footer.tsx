import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-estate-border bg-white pt-16 pb-8">
      <div className="w-full px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <img src="https://res.cloudinary.com/dvqu8jllv/image/upload/v1776773778/roompe-logo_u4dpdy.png" alt="RoomPe Logo" className="h-12 w-auto" />
            </Link>
            <p className="text-estate-muted leading-relaxed max-w-sm">
              Elevating student living. Simplifying campus operations. We transform hostel infrastructure into seamless, tech-enabled experiences.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-estate-navy mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="#about" className="text-estate-muted hover:text-estate-mint transition">About Us</Link></li>
              <li><Link href="#services" className="text-estate-muted hover:text-estate-mint transition">Our Models</Link></li>
              <li><Link href="#contact" className="text-estate-muted hover:text-estate-mint transition">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-estate-navy mb-6">Key Markets</h4>
            <ul className="space-y-4">
              <li className="text-estate-muted">Ahmedabad</li>
              <li className="text-estate-muted">Gandhinagar</li>
              <li className="text-estate-muted">Rajkot</li>
              <li className="text-estate-muted">Surat</li>
              <li className="text-estate-muted">Vadodara</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-estate-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-estate-muted text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RoomPe Pvt Ltd. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-estate-muted hover:text-estate-navy text-sm transition">Privacy Policy</Link>
            <Link href="#" className="text-estate-muted hover:text-estate-navy text-sm transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}