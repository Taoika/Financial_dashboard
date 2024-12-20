import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta content="https://i.pinimg.com/736x/2b/35/fd/2b35fd1080bd1fec4d93f29fbf85b485.jpg" name="twitter:image:src" property="twitter:image:src"/>
      <meta content="https://s.pinimg.com/images/facebook_share_image.png" data-app="true" name="og:image" property="og:image"/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
