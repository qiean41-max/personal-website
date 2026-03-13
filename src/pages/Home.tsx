import { motion } from "motion/react";
import { NeoBox } from "@/components/NeoBox";
import { NeoButton } from "@/components/NeoButton";
import { User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">我是</h2>
            <div className="inline-block bg-[#ff90e8] border-4 border-black px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2 hover:rotate-0 transition-transform cursor-default">
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter">qiean,</h1>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mt-4">AI预备役,</h2>
            <div className="flex items-center gap-4 flex-wrap mt-4">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight">练习时长</h2>
              <div className="inline-block bg-[#90e8ff] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-2 hover:rotate-0 transition-transform cursor-default">
                <span className="text-4xl md:text-5xl font-black text-white" style={{ textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>小半年</span>
              </div>
            </div>
          </div>

          <div className="text-lg md:text-xl text-zinc-600 font-medium leading-relaxed space-y-2">
            <p>深度Gemini用户 | 结果导向er | 五个AI员工的CEO</p>
            <p>养虾人 | 立志成为AI从业者 _[ 0_0 ]_</p>
            <p className="text-zinc-400">A PASSIONATE FOOOOOL !!!</p>
          </div>

          <Link to="/about">
            <NeoButton variant="primary" size="lg" className="gap-2 mt-4">
              <User className="w-5 h-5" />
              More about me
            </NeoButton>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <NeoBox color="white" shadowSize="lg" className="w-full max-w-md aspect-square overflow-hidden border-4 p-8 flex items-center justify-center bg-[#fdf2e9]">
            {/* Placeholder for Avatar */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-[#ff90e8] rounded-full blur-3xl opacity-20" />
              <img 
                src="/avatar.jpg" 
                alt="Avatar" 
                className="w-4/5 h-4/5 object-cover rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=400&auto=format&fit=crop";
                }}
              />
            </div>
          </NeoBox>
        </motion.div>
      </div>

      {/* Creations Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-16"
      >
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-black flex flex-wrap justify-center items-center gap-4">
            Some of My 
            <span className="bg-[#ff90e8] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-1 inline-block">
              Vibe-coded Creations
            </span>
          </h2>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
            Code byproducts generated during late-night vibe coding sessions.<br />
            Imperfect, functional, and always interesting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <a href="https://www.hunyinwang.online/" target="_blank" rel="noopener noreferrer" className="block">
            <NeoBox interactive color="white" className="h-64 flex flex-col items-start justify-between p-0 group overflow-hidden">
              <div className="w-full h-full relative">
                <img src="/project1.png" alt="婚姻网站定制" className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="text-left w-full flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-1 text-white">婚姻网站定制</h3>
                      <p className="text-white/80 text-sm">为新人打造的浪漫婚礼邀请网站</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-[#ff90e8] transition-colors bg-white/20">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </NeoBox>
          </a>

          {/* Project 2 */}
          <NeoBox interactive color="white" className="h-64 flex flex-col items-start justify-between p-0 group overflow-hidden">
            <div className="w-full h-full relative">
              <img src="/project2.png" alt="Project 2" className="w-full h-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <div className="text-left w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-2xl font-bold mb-1 text-white">时记app（测试中）</h3>
                    <p className="text-white/80 text-sm">A cool vibe-coded project.</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center group-hover:bg-[#ff90e8] transition-colors bg-white/20">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </NeoBox>
        </div>
      </motion.div>
    </div>
  );
}
