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
          {/* Flex container untuk kiri-kanan selalu sejajar */}
          <div className="flex flex-row items-center justify-between py-3 w-full gap-2">

            {/* KIRI: Logo + Nama */}
            <div className="flex flex-row items-center space-x-2 min-w-0">
              <div className="w-9 h-9 bg-[var(--primary-color)] rounded-lg flex items-center justify-center flex-shrink-0">
                <div className="icon-wallet text-lg text-white"></div>
              </div>
              <span className="text-lg sm:text-xl font-bold text-[var(--primary-color)] truncate">
                FinanceFamily
              </span>
            </div>

            {/* KANAN: Tombol Masuk & Daftar */}
            <div className="flex flex-row items-center space-x-2 flex-shrink-0">
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
