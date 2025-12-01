// app/layout.jsx
import '../globals.css'; // globals.css нь app хавтас дотор байгаа тохиолдолд энэ зам зөв

export const metadata = {
  title: 'Date App',
  description: 'Romantic date app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
