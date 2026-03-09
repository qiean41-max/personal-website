import { motion } from "motion/react";
import { NeoBox } from "@/components/NeoBox";

function BilibiliIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.813 4.653h.002c1.011 0 1.978.401 2.694 1.115s1.115 1.682 1.115 2.693v9.066c0 1.012-.401 1.978-1.115 2.693s-1.682 1.115-2.694 1.115H6.187c-1.011 0-1.978-.401-2.694-1.115S2.378 18.533 2.378 17.52V8.46c0-1.011.401-1.978 1.115-2.693s1.682-1.115 2.694-1.115h.002c-.048-.066-.104-.133-.17-.206l-.222-.236a.5.5 0 0 1 .726-.707l.243.25c.12.12.22.226.297.314l.058.07c.05.065.096.126.136.182h8.708c.04-.056.086-.117.136-.182l.058-.07c.077-.088.177-.194.297-.314l.243-.25a.5.5 0 1 1 .726.707l-.222.236c-.066.073-.122.14-.17.206zM6.187 5.653c-.745 0-1.46.296-1.987.823s-.823 1.242-.823 1.986v9.066c0 .744.296 1.459.823 1.986s1.242.823 1.987.823h11.626c.745 0 1.46-.296 1.987-.823s.823-1.242.823-1.986V8.46c0-.744-.296-1.459-.823-1.986s-1.242-.823-1.987-.823H6.187zm1.75 3.965a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5zm8.125 0a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}

export function Videos() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-black">
          我的<span className="bg-[#ffde59] border-4 border-black px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block rotate-2">视频</span>
        </h1>
        <p className="text-xl text-zinc-600 font-medium">先留着，后面万一用上了呢 (◕‿◕✿)</p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2].map((i) => (
          <NeoBox key={i} interactive color="white" className="aspect-video flex flex-col items-center justify-center p-8 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] gap-4">
            <BilibiliIcon className="w-16 h-16 text-[#fb7299]" />
            <h3 className="text-2xl font-black text-zinc-800">敬请期待，up正在路上</h3>
          </NeoBox>
        ))}
      </div>
    </div>
  );
}
