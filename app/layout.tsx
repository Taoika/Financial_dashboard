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
      <meta name="twitter:site" content="@nytimesbits" /> 
      <meta name="twitter:creator" content="@nickbilton" /> 

      <meta property="og:type" content="video"/>
      <meta property="og:title" content="#子猫の成長日記 | 黒猫 | TikTok"/>
      <meta property="og:description" content="#子猫の成長日記 | 黒猫 | TikTok"/>
      <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg"/>

      <meta property="og:video" content="https://www.tiktok.com/@yiwi88/video/7449309699092188434"/>
      <meta property="og:url" content="https://www.tiktok.com/@yiwi88/video/7449309699092188434"/>
      <meta property="og:video:duration" content="5"/>
      <meta property="og:video:pix" content="4"/>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
