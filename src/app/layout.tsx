import './globals.css';

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
