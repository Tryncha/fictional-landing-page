import { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rowan Evercrest | Epic Fantasy Author of the Nexusverse',
  description:
    'Rowan Evercrest is the bestselling epic fantasy author behind the Nexusverse. Discover The Chronicles of Aetheris, Aethercraft, and more — over 3 million copies sold in 22+ languages.',
  keywords: [
    'Rowan Evercrest',
    'Nexusverse',
    'epic fantasy author',
    'fantasy books',
    'The Chronicles of Aetheris',
    'Aethercraft',
    'fantasy novels',
    'fantasy book series'
  ],
  authors: [{ name: 'Rowan Evercrest' }],
  creator: 'Rowan Evercrest',
  publisher: 'Rowan Evercrest'
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1
};

const RootLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
