import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ChatWidget } from '@/components/ChatWidget';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-bold focus:text-indigo-900 focus:shadow-lg"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="pt-20">{children}</main>
      <Footer />
      <ChatWidget />
    </>
  );
}
