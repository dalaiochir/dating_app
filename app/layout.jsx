import './globals.css';

export const metadata = {
  title: 'Bolzoonii Sanal',
  description: 'Romantic dating experience',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
