import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="twitter:card" content="player" /> 
      <meta name="twitter:site" content="@Taoika" /> 
      <meta name="twitter:creator" content="@Taoika" /> 

      <meta property="og:type" content="video"/>
      <meta property="og:title" content="#子猫の成長日記 | 黒猫 | TikTok"/>
      <meta property="og:description" content="#子猫の成長日記 | 黒猫 | TikTok"/>
      <meta property="og:image" content="https://i.pinimg.com/736x/39/b7/65/39b7654014a0c09c8177d09dc47f6100.jpg"/>

      <meta property="og:video" content="https://www.tiktok.com/@yiwi88/video/7449309699092188434"/>
      <meta property="og:url" content="https://www.tiktok.com/@yiwi88/video/7449309699092188434"/>
      <meta property="og:video:duration" content="5"/>
      <meta property="og:video:pix" content="4"/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
