function Header() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <header
        className="bg-white/90 backdrop-blur-md shadow-md sticky top-0 z-50 border-b border-gray-100"
        data-name="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Selalu satu baris kiri-kanan */}
          <div className="flex flex-row items-center justify-between py-3 w-full">

            {/* KIRI: Logo + Nama */}
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-wallet text-lg text-white"></div>
              </div>
              <span className="text-xl font-bold text-[var(--primary-color)] whitespace-nowrap">
                FinanceFamily
              </span>
            </div>

            {/* KANAN: Tombol Masuk & Daftar (selalu horizontal di semua ukuran) */}
            <div className="flex flex-row items-center space-x-2">
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
