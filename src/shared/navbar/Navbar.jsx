import React from "react";

const Navbar = () => {
<<<<<<< HEAD
  return <div>Navbar sss</div>;
=======
  return (
    <header className="bg-background text-foreground py-3 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-primary-foreground"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold">Gambling Harm UK</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Services
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Resources
              </a>
              <a
                href="#"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-primary transition-colors">
              Login
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md hover:bg-primary/90 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
>>>>>>> c325363ef55b5ba2e6d3cf168984161b68db8532
};

export default Navbar;
