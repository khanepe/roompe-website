import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 p-6 md:p-12">
      <div className="max-w-6xl mx-auto bg-clay-base rounded-clay shadow-clay p-8 md:p-16 border border-white/50 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold text-clay-textMain mb-4">RoomPe<span className="text-clay-accent3">.</span></h3>
          <p className="text-clay-textMuted leading-relaxed max-w-sm">
            Let universities and academicians focus on studies and student activities, while we take care of all daily hostel management.
          </p>
        </div>
        
        <div>
          <h4 className="font-semibold text-clay-textMain mb-4">Company</h4>
          <ul className="space-y-2">
            <li><Link href="#about" className="text-clay-textMuted hover:text-clay-accent3 transition">About Us</Link></li>
            <li><Link href="#services" className="text-clay-textMuted hover:text-clay-accent3 transition">Services</Link></li>
            <li><Link href="#contact" className="text-clay-textMuted hover:text-clay-accent3 transition">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-clay-textMain mb-4">Campuses</h4>
          <ul className="space-y-2">
            <li className="text-clay-textMuted">Ahmedabad</li>
            <li className="text-clay-textMuted">Gandhinagar</li>
            <li className="text-clay-textMuted">Rajkot</li>
            <li className="text-clay-textMuted">Surat</li>
            <li className="text-clay-textMuted">Vadodara</li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-clay-textMuted text-sm">
        &copy; {new Date().getFullYear()} RoomPe. All rights reserved.
      </div>
    </footer>
  );
}