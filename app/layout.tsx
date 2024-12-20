import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="twitter:image:src" property="twitter:image:src" content="https://i.pinimg.com/736x/2b/35/fd/2b35fd1080bd1fec4d93f29fbf85b485.jpg"/>
      <meta data-app="true" name="og:image" property="og:image" content="https://s.pinimg.com/images/facebook_share_image.png"/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
