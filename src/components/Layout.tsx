import { useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import { Mail, Github, Tv, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { Cat } from "./Cat";

const navItems = [
  { name: "首页", path: "/" },
  { name: "关于我", path: "/about" },
  { name: "文章", path: "/articles" },
  { name: "视频", path: "/videos" },
  { name: "产品", path: "/products" },
];

const friends = [
  { name: "电子好友", color: "bg-white" },
  { name: "jack要加油", color: "bg-[#ff90e8]" },
  { name: "JUNO", color: "bg-[#ffde59]" },
  { name: "往事随风", color: "bg-[#90e8ff]" },
  { name: "肥超nice", color: "bg-[#a3e635]" },
  { name: "小睿", color: "bg-[#ff6b6b]" },
];

export function Layout() {
  const location = useLocation();
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f4f0] text-zinc-900 font-sans selection:bg-[#ff90e8] selection:text-black flex flex-col relative">
      {location.pathname === '/' && <Cat />}
      {/* Floating Navbar */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white border-2 border-black rounded-full px-6 py-3 flex items-center gap-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn(
                  "text-sm font-bold transition-colors hover:text-[#ff6b9e]",
                  isActive ? "border-b-2 border-black pb-1" : "text-zinc-600"
                )
              }
            >
              {item.name}
            </NavLink>
          ))}
          <div className="w-px h-6 bg-zinc-300 mx-2" />
          <button 
            onClick={() => setShowEmail(!showEmail)}
            className="hover:text-[#ff6b9e] transition-colors flex items-center gap-2"
          >
            <Mail className="w-5 h-5" />
            {showEmail && <span className="text-sm font-bold">762836976@qq.com</span>}
          </button>
        </motion.nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-32 pb-20">
        <Outlet />
      </main>

      {/* Footer Marquee & Dark Section */}
      <footer className="mt-auto">
        {/* Friends Marquee */}
        <div className="border-y-2 border-black bg-[#f4f4f0] overflow-hidden py-4 relative flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex whitespace-nowrap gap-4 px-4"
          >
            {[...friends, ...friends, ...friends].map((friend, i) => (
              <div
                key={i}
                className={cn(
                  "border-2 border-black rounded-full px-6 py-2 text-sm font-bold flex items-center gap-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
                  friend.color
                )}
              >
                <div className="w-4 h-4 rounded-full border border-black bg-white/50" />
                {friend.name}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dark Footer */}
        <div className="bg-black text-white py-16 px-8 md:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-4 leading-tight">
                Let's build something<br />extraordinary together.
              </h2>
              <p className="text-zinc-400 text-sm">一定会成为一个很棒的大人！</p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2 inline-block">Explore</h3>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li><NavLink to="/" className="hover:text-white transition-colors">Home</NavLink></li>
                <li><NavLink to="/about" className="hover:text-white transition-colors">About</NavLink></li>
                <li><NavLink to="/articles" className="hover:text-white transition-colors">Articles</NavLink></li>
                <li><NavLink to="/videos" className="hover:text-white transition-colors">Videos</NavLink></li>
                <li><NavLink to="/products" className="hover:text-white transition-colors">Products</NavLink></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 border-b border-zinc-800 pb-2 inline-block">Connect</h3>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:bg-zinc-200 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:bg-zinc-200 transition-colors">
                  <Tv className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white text-black rounded-lg flex items-center justify-center hover:bg-zinc-200 transition-colors font-bold text-xs">
                  RED
                </a>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-zinc-800 text-center text-zinc-500 text-xs flex flex-col md:flex-row justify-between items-center">
            <p>© 2026 qiean. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
