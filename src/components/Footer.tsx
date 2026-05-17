export default function Footer() {
  const logoPath = "/src/assets/images/eldoradog2g_logo_1778995976729.png";

  return (
    <footer className="bg-surface-lighter border-t border-white/5 pt-20 pb-10 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <img src={logoPath} alt="Logo" className="h-8 w-auto" referrerPolicy="no-referrer" />
            <span className="text-xl font-bold tracking-tighter">
              Eldora<span className="text-brand">dog2g</span>
            </span>
          </div>
          <p className="text-text-dim text-sm max-w-xs mb-8">
            The world's leading marketplace for in-game assets. We connect gamers across borders, providing security and speed.
          </p>
          <div className="flex gap-4">
            {/* Social Icons Placeholder */}
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand hover:text-black cursor-pointer transition-all"></div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-bold mb-6">Buy</h4>
          <ul className="space-y-4 text-sm text-text-dim">
            <li><a href="#" className="hover:text-brand transition-colors">OSRS Gold</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">WoW Accounts</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">CS2 Skins</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Boosting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Sell</h4>
          <ul className="space-y-4 text-sm text-text-dim">
            <li><a href="#" className="hover:text-brand transition-colors">Sell Currency</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Sell Accounts</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Verification</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Seller Portal</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-text-dim">
            <li><a href="#" className="hover:text-brand transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-brand transition-colors">Contact Us</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 border-t border-white/5 pt-10">
        <p className="text-xs text-text-dim text-center md:text-left">
          © 2026 Eldoradog2g Marketplace. Not affiliated with Blizzard, Riot Games, Jagex or Valve.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Payment Method Placeholders */}
          {["VISA", "MC", "PayPal", "Bitcoin", "ApplePay"].map(p => (
            <span key={p} className="text-[10px] font-bold px-2 py-1 bg-white/5 text-text-dim rounded">{p}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}
