function Header() {
  try {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    };

    return (
      <header
        className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* wrapper utama: selalu satu baris (kiri-kanan) */}
          <div className="flex items-center justify-between py-4">

            {/* LEFT: Logo + Nama (kiri) */}
            <div className="flex items-center space-x-2 min-w-0">
              <div className="w-10 h-10 flex-shrink-0 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-wallet text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)] whitespace-nowrap">
                FinanceFamily
              </span>
            </div>

            {/* RIGHT: Desktop nav (hidden on mobile) */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("features")}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-200 hover:scale-105"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-200 hover:scale-105"
              >
                Harga
              </button>
              <a
                href="login.html"
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-200 hover:scale-105"
              >
                Masuk
              </a>
              <a href="register.html" className="btn-primary">
                Daftar Sekarang
              </a>
            </nav>

            {/* RIGHT: Mobile buttons (visible only on mobile) */}
            <div className="flex md:hidden items-center space-x-3 flex-shrink-0">
              <a
                href="login.html"
                className="text-sm font-medium text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full px-3 py-1 transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-white whitespace-nowrap"
              >
                Masuk
              </a>

              <a
                href="register.html"
                className="text-sm font-medium bg-[var(--primary-color)] text-white rounded-full px-3 py-1 transition-all duration-200 hover:opacity-90 whitespace-nowrap"
              >
                Daftar
              </a>
            </div>
          </div>
        </div>
      </header>
    );
  } catch (error) {
    console.error("Header component error:", error);
    return null;
  }
}
