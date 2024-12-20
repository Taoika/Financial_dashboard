import '@/app/ui/global.css';
import { inter } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="twitter:card" content="summary" /> 
      <meta name="twitter:site" content="@nytimesbits" /> 
      <meta name="twitter:creator" content="@nickbilton" /> 
      <meta property="og:url" content="http://bits.blogs.nytimes.com/2011/12/08/a-twitter-for-my-sister/" /> 
      <meta property="og:title" content="A Twitter for My Sister" /> 
      <meta property="og:description" content="在早期, Twitter 发展非常迅速，几乎不可能添加新功能，因为工程师们把时间都花在了防止火箭飞船失速上。" /> 
      <meta property="og:image" content="http://graphics8.nytimes.com/images/2011/12/08/technology/bits-newtwitter/bits-newtwitter-tmagArticle.jpg" />
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
