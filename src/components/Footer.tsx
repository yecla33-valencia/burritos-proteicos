const Footer = () => {
  return (
    <footer id="contacto" className="bg-foreground text-background py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/15 blur-3xl pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">Contacto</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>C/ Yecla 33, 46021</p>
              <p>València (España)</p>
              <p>info@yecla33.com</p>
              <p>963 62 95 98</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">Disfruta en Yecla 33</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>Blog</p>
              <p>Un 'homemade' muy 'd'ací'</p>
              <p>Take Away: cómo funciona</p>
              <p>Carta de alérgenos</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">Ayuda</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>Contacto</p>
              <p>Nota legal</p>
              <p>Política de devoluciones</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg uppercase tracking-wider">Síguenos</h3>
            <div className="space-y-2 text-sm opacity-70">
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm opacity-50">
          <p>© 2024 Yecla 33. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
