import { useState } from "react";
import seng1 from "./assets/seng1.png";
import seng2 from "./assets/seng2.jpg";
import seng3 from "./assets/seng3.jpg";
const WA_NUMBER = "6281239639770";
const WA_LINK = `https://wa.me/${WA_NUMBER}`;

const products = [
  {
    sku: "AZ-310",
    size: "31cm",
    label: "Standard",
    material: "Seng Standart",
    price: 245,
    img: seng1,
  },
  {
    sku: "AZ-350",
    size: "35cm",
    label: "Standard",
    material: "Seng Standart",
    price: 270,
    img: seng2,
  },
  {
    sku: "AZ-380",
    size: "38cm",
    label: "Standard",
    material: "Seng Standart",
    price: 295,
    img: seng3,
  },
  {
    sku: "AZ-420",
    size: "42cm",
    label: "Standard",
    material: "Seng Standart",
    price: 310,
    img: seng1,
  },
  {
    sku: "AZ-450",
    size: "45cm",
    label: "Standard",
    material: "Seng Standart",
    price: 335,
    img: seng2,
  },
  {
    sku: "AZ-500",
    size: "50cm",
    label: "Standard",
    material: "Seng Standart",
    price: 380,
    img: seng3,
  },
];

const specs = [
  { sku: "AZ-310", size: "310 mm", thickness: "0.22 mm", weight: "~8.5g", moq: "5.000 pcs" },
  { sku: "AZ-350", size: "350 mm", thickness: "0.22 mm", weight: "~9.4g", moq: "5.000 pcs" },
  { sku: "AZ-450", size: "450 mm", thickness: "0.25 mm", weight: "~12.1g", moq: "3.000 pcs" },
  { sku: "AZ-500", size: "500 mm", thickness: "0.25 mm", weight: "~13.8g", moq: "3.000 pcs" },
];

const labelColors = {
  Standard: "bg-gray-100 text-gray-600",
  Popular: "bg-amber-100 text-amber-700",
  Professional: "bg-blue-100 text-blue-700",
  Industrial: "bg-stone-800 text-stone-100",
  "XL Heavy Duty": "bg-red-100 text-red-700",
};

const IconCNC = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconShield = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IconTruck = () => (
  <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="5.5" cy="18.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
  </svg>
);
const IconWA = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

function Navbar({ page, setPage }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        <button onClick={() => setPage("home")} className="font-bold text-xl tracking-tight text-stone-900 font-mono">
          UD.AL-AZIZ
        </button>
        <div className="hidden sm:flex items-center gap-8">
          <button
            onClick={() => setPage("home")}
            className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${page === "home" ? "border-stone-900 text-stone-900" : "border-transparent text-stone-500 hover:text-stone-800"}`}
          >
            Beranda
          </button>
          <button
            onClick={() => setPage("catalog")}
            className={`text-sm font-medium pb-0.5 border-b-2 transition-colors ${page === "catalog" ? "border-stone-900 text-stone-900" : "border-transparent text-stone-500 hover:text-stone-800"}`}
          >
            Katalog
          </button>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 bg-stone-900 text-white text-sm font-medium px-4 py-2 rounded hover:bg-stone-700 transition-colors"
          >
            <IconWA />
            WhatsApp Sales
          </a>
        </div>
        <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className="block w-5 h-0.5 bg-stone-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-stone-800 mb-1"></span>
          <span className="block w-5 h-0.5 bg-stone-800"></span>
        </button>
      </div>
      {menuOpen && (
        <div className="sm:hidden bg-white border-t border-stone-100 px-4 py-4 flex flex-col gap-4">
          <button onClick={() => { setPage("home"); setMenuOpen(false); }} className="text-sm text-stone-700 text-left">Beranda</button>
          <button onClick={() => { setPage("catalog"); setMenuOpen(false); }} className="text-sm text-stone-700 text-left">Katalog</button>
          <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-stone-900 text-white text-sm px-4 py-2 rounded w-fit">
            <IconWA /> WhatsApp Sales
          </a>
        </div>
      )}
    </nav>
  );
}

function HomePage({ setPage }) {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-4">Solusi Seng Klip Kalender</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-900 leading-tight mb-6">
            Berkualitas<br />& Presisi
          </h1>
          <p className="text-stone-500 text-base leading-relaxed mb-8">
            Mitra strategis untuk percetakan skala besar. Menyediakan klip kalender seng dengan standar industri tinggi, presisi potong absolut, dan ketersediaan stok yang konsisten dari UD.AL-AZIZ.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-block bg-stone-900 text-white font-semibold px-6 py-3 rounded hover:bg-stone-700 transition-colors"
          >
            Pesan Sekarang
          </a>
        </div>
        <div className="flex justify-center">
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-8 w-full max-w-sm aspect-square flex items-center justify-center">
            <img
              src={seng1}
              alt="Seng Klip Kalender"
              className="w-full h-full object-contain rounded-xl"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentNode.innerHTML = `<div class="text-stone-300 text-center"><div class="text-6xl mb-2">⊞</div><div class="text-sm">Seng Klip Kalender</div></div>`;
              }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-stone-100 bg-stone-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: <IconCNC />, title: "Presisi Mutlak", desc: "Setiap klip diproduksi dengan mesin CNC berteknologi terbaru untuk memastikan ukuran yang konsisten hingga 0.1mm." },
            { icon: <IconShield />, title: "Daya Tahan", desc: "Material anti-karat dengan lapisan galvanis premium, menjaga integritas kalender Anda dalam jangka waktu lama." },
            { icon: <IconTruck />, title: "Pengiriman Cepat", desc: "Sistem logistik terintegrasi untuk pengiriman ke seluruh wilayah Indonesia dengan waktu tunggu minimal." },
          ].map((f) => (
            <div key={f.title} className="bg-white border border-stone-200 rounded-xl p-6">
              <div className="text-stone-700 mb-4">{f.icon}</div>
              <h3 className="font-semibold text-stone-900 text-base mb-2">{f.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-3 gap-8 text-center">
          {[
            { value: "100+", label: "PERCETAKAN TERLAYANI" },
            { value: "1RB+", label: "PRODUK TERKIRIM" },
            { value: "99%", label: "TINGKAT PRESISI" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl sm:text-4xl font-bold text-stone-900 mb-1">{s.value}</div>
              <div className="text-[10px] sm:text-xs tracking-widest text-stone-400 font-semibold uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Preview */}
      <section className="border-t border-stone-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <h2 className="text-2xl font-bold text-stone-900 mb-2 text-center">Varian Produk Kami</h2>
          <div className="w-12 h-0.5 bg-stone-900 mx-auto mb-10"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { name: "Seng Klip Standar", sku: "AZ-21-TIN", specs: [["Ukuran", "210mm x 15mm"], ["Ketebalan", "0.25mm - 0.30mm"], ["Material", "Seng"]], img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=500&q=80" },
              { name: "Klip Tebal", sku: "AZ-45-GAL", specs: [["Ukuran", "450mm x 18mm"], ["Ketebalan", "0.35mm - 0.40mm"], ["Material", "Seng"]], img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80" },
            ].map((p) => (
              <div key={p.sku} className="border border-stone-200 rounded-xl overflow-hidden">
                <div className="bg-stone-100 h-52 overflow-hidden">
                  <img src={seng1} alt={p.name} className="w-full h-full object-cover" onError={(e) => { e.target.style.display = "none"; }} />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-stone-900 text-lg">{p.name}</h3>
                    <span className="text-xs bg-stone-100 text-stone-500 px-2 py-1 rounded font-mono">SKU: {p.sku}</span>
                  </div>
                  <table className="w-full text-sm">
                    <tbody>
                      {p.specs.map(([k, v]) => (
                        <tr key={k} className="border-t border-stone-100">
                          <td className="py-2 font-semibold text-stone-700 text-xs uppercase tracking-wide">{k}</td>
                          <td className="py-2 text-stone-500 text-right">{v}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => setPage("catalog")}
              className="border border-stone-900 text-stone-900 font-semibold px-6 py-3 rounded hover:bg-stone-900 hover:text-white transition-colors"
            >
              Lihat Katalog Lengkap →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function CatalogPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      {/* Header */}
      <p className="text-xs tracking-widest text-stone-400 font-semibold uppercase mb-2">KATALOG RESMI UD.AL-AZIZ</p>
      <h1 className="text-3xl font-bold text-stone-900 mb-3">Seng Klip Kalender</h1>
      <p className="text-stone-500 text-sm leading-relaxed max-w-xl mb-3">
        Penyedia komponen kalender kaleng berkualitas tinggi. Menggunakan material tinplate presisi untuk daya tahan maksimal dan estetika industrial yang rapi.
      </p>
      <div className="border-t border-stone-200 mb-10"></div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
        {products.map((p) => (
          <div key={p.sku} className="border border-stone-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative bg-stone-100 h-44 overflow-hidden">
              <span className="absolute top-2 left-2 text-xs bg-stone-800 text-stone-100 px-2 py-0.5 rounded font-mono z-10">
                SKU: {p.sku}
              </span>
              <img
                src={p.img}
                alt={`Seng Klip ${p.size}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.background = "#e7e5e4";
                }}
              />
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-stone-900 text-lg">Ukuran {p.size}</h3>
                <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${labelColors[p.label] || "bg-stone-100 text-stone-500"}`}>
                  {p.label}
                </span>
              </div>
              <p className="text-[10px] tracking-widest text-stone-400 font-semibold uppercase mb-3">MATERIAL: {p.material}</p>
              <div className="border-t border-stone-100 pt-3 flex items-center justify-between">
                <div>
                  <span className="text-xl font-bold text-stone-900">Rp {p.price.toLocaleString("id-ID")}</span>
                  <span className="text-stone-400 text-xs ml-1">/pcs</span>
                </div>
                <a
                  href={`${WA_LINK}?text=Halo%20UD.AL-AZIZ%2C%20saya%20ingin%20memesan%20${encodeURIComponent(`Seng Klip ${p.size} (${p.sku})`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-stone-900 text-white w-8 h-8 rounded flex items-center justify-center hover:bg-stone-700 transition-colors"
                  aria-label="Pesan via WhatsApp"
                >
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Specs Table */}
      <div>
        <h2 className="text-xl font-bold text-stone-900 mb-5">Spesifikasi Teknis</h2>
        <div className="overflow-x-auto rounded-xl border border-stone-200">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-stone-50 border-b border-stone-200">
                {["SKU ID", "UKURAN (MM)", "KETEBALAN", "BERAT SATUAN", "MOQ"].map((h) => (
                  <th key={h} className="text-left px-4 py-3 text-[10px] tracking-widest text-stone-400 font-semibold uppercase">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={s.sku} className={`border-b border-stone-100 ${i % 2 === 0 ? "bg-white" : "bg-stone-50/50"}`}>
                  <td className="px-4 py-3 font-mono text-stone-700 font-semibold text-xs">{s.sku}</td>
                  <td className="px-4 py-3 text-stone-600">{s.size}</td>
                  <td className="px-4 py-3 text-stone-600">{s.thickness}</td>
                  <td className="px-4 py-3 text-stone-600">{s.weight}</td>
                  <td className="px-4 py-3 text-stone-600">{s.moq}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="bg-stone-900 text-stone-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="font-bold text-white text-lg font-mono mb-2">UD.AL-AZIZ Industrial</div>
          <p className="text-xs text-stone-500 leading-relaxed">© 2003 UD.AL-AZIZ Industrial. All rights reserved.</p>
          <p className="text-xs text-stone-500 mt-1">High-precision calendar tinplate clips.</p>
          <div className="flex gap-3 mt-4">
            <a href="https://maps.app.goo.gl/18jzsSk3XYAyV6dT7" className="text-stone-500 hover:text-white transition-colors">
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
            </a>
          </div>
        </div>
        <div>
          <div className="text-xs tracking-widest font-semibold uppercase text-stone-400 mb-4">NAVIGASI</div>
          <ul className="space-y-2 text-sm">
            <li><button onClick={() => setPage("home")} className="hover:text-white transition-colors">Beranda</button></li>
            <li><button onClick={() => setPage("catalog")} className="hover:text-white transition-colors">Katalog</button></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest font-semibold uppercase text-stone-400 mb-4">BANTUAN</div>
          <ul className="space-y-2 text-sm">
            <li>
              <a href={WA_LINK} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition-colors">
                <IconWA /> WhatsApp Sales
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-widest font-semibold uppercase text-stone-400 mb-4">
            LOKASI KAMI
          </div>

          <div className="rounded-lg overflow-hidden border border-stone-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1780495511399!6m8!1m7!1sLEXXpGLXnEzGEzXi6snhZg!2m2!1d-7.524044522401875!2d112.4163743236503!3f175.85!4f-18!5f0.4000000000000002"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi UD AL-AZIZ"
            />
          </div>

          <p className="text-xs text-stone-500 mt-3 leading-relaxed">
            Desa Brangkal Gang 8 RT 05 RW 03,
            Sooko, Mojokerto, Jawa Timur
          </p>
</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* WA Float Button */}
      <a
        href={WA_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
        aria-label="Chat WhatsApp"
      >
        <IconWA />
      </a>

      <Navbar page={page} setPage={setPage} />
      {page === "home" ? <HomePage setPage={setPage} /> : <CatalogPage />}
      <Footer setPage={setPage} />
    </div>
  );
}
