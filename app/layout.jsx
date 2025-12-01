import '../globals.css';

export const metadata = {
  title: 'Болзооны санал',
  description: 'Romantic bolzoonii website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
      </body>
    </html>
  );
}
