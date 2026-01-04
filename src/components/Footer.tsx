const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t-2 border-foreground bg-card relative z-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-retro text-lg text-muted-foreground">
            © {currentYear} Badee Khalbouss. All rights reserved.
          </p>
          <p className="font-retro text-lg text-muted-foreground">
            <span className="text-primary">&gt;</span> Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;