function Header() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
      <header
        className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100"
        data-name="header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Flex container utama */}
          <div className="flex flex-row items-center justify-between py-3 w-full">

            {/* KIRI: Logo + Nama */}
            <div className="flex flex-row items-center gap-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-xl flex items-center justify-center shadow-sm">
                <div className="icon-wallet text-white text-lg"></div>
              </div>
              <span className="text-xl font-semibold text-[var(--primary-color)] tracking-tight select-none">
                FinanceFamily
              </span>
            </div>

            {/* KANAN: Tombol Masuk & Daftar */}
            <div className="flex flex-row items-center gap-2 sm:gap-3">
              <a
                href="login.html"
                className="text-sm sm:text-base font-medium text-[var(--primary-color)] border border-[var(--primary-color)] rounded-full px-4 py-1.5 transition-all duration-200 hover:bg-[var(--primary-color)] hover:text-white active:scale-95"
              >
                Masuk
              </a>
              <a
                href="register.html"
                className="text-sm sm:text-base font-medium bg-[var(--primary-color)] text-white rounded-full px-4 py-1.5 transition-all duration-200 hover:opacity-90 active:scale-95 shadow-sm"
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
