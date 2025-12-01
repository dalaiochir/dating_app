// app/layout.jsx
import './globals.css';  // зөв зам

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
