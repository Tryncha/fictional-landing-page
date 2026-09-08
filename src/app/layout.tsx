import './globals.css';

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
