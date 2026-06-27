import { content } from "@/data/content";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
              AR<span className="text-blue-500">.</span>
            </Link>
            <p className="text-zinc-500 text-sm">
              &copy; {currentYear} {content.hero.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            {content.social.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="mt-8 text-center text-zinc-600 text-xs flex items-center justify-center gap-1">
          <span>Built with</span>
          <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors font-medium">Next.js</a>
          <span>+</span>
          <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors font-medium">Tailwind CSS</a>
          <span>+</span>
          <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors font-medium">Framer Motion</a>
        </div>
      </div>
    </footer>
  );
}
