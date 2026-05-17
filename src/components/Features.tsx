import { ShieldCheck, Truck, Clock, Lock } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: ShieldCheck,
      title: "TradeShield Protection",
      desc: "Our unique TradeShield protects every single transaction on Eldoradog2g. We verify sellers and hold funds until delivery is confirmed."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Get your in-game assets within minutes. Our automated system and verified reliable sellers ensure the fastest delivery in the industry."
    },
    {
      icon: Clock,
      title: "24/7 Global Support",
      desc: "Our human support team is available around the clock to help with any disputes or questions you might have about your order."
    },
    {
      icon: Lock,
      title: "Secure Payments",
      desc: "We support over 50 secure payment methods worldwide, ensuring your financial information is always protected."
    }
  ];

  return (
    <section className="bg-surface-light py-24 mb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why use Eldoradog2g?</h2>
          <p className="text-text-dim max-w-2xl mx-auto">
            We provide the most robust security framework in the gaming marketplace industry to ensure you never lose a cent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-surface-lighter rounded-3xl border border-white/5 hover:border-brand/20 transition-all group">
              <div className="w-12 h-12 bg-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
