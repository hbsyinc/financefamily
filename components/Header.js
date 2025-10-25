function Header() {
  try {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
          <div className="flex flex-col md:flex-row justify-between items-center py-4 space-y-3 md:space-y-0">

            {/* Logo dan nama */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded-lg flex items-center justify-center">
                <div className="icon-wallet text-xl text-white"></div>
              </div>
              <span className="text-2xl font-bold text-[var(--primary-color)]">
                FinanceFamily
              </span>
            </div>

            {/* Navigasi Desktop */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('features')}
                className="text-[var(--text-secondary)] hover:text-[var(--primary-color)] font-medium transition-all duration-200 hover:scale-105"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
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

            {/* Navigasi Mobile */}
            <div className="md:hidden flex w-full justify-center items-center space-x-4">
              <a
                href="login.html"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--primary-color)] transition-all duration-200"
              >
                Masuk
              </a>
              <a
                href="register.html"
                className="btn-primary text-sm px-4 py-2"
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
