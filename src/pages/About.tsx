import { motion } from "motion/react";
import { NeoBox } from "@/components/NeoBox";
import { BookOpen, Tv, Code, Briefcase, GraduationCap, MapPin, Smile, ArrowRight } from "lucide-react";

export function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-32">
      {/* Intro Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight">Welcome to</h1>
            <div className="inline-block bg-[#90e8ff] border-4 border-black px-6 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] -rotate-2">
              <h1 className="text-5xl md:text-7xl font-black text-white" style={{ textShadow: "2px 2px 0 #000, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000" }}>且安</h1>
            </div>
          </div>

          <div className="text-lg text-zinc-700 leading-relaxed space-y-6">
            <p>
              我出生于2002年7月，江苏南京<br />
              巨蟹座，ENTJ-A<br />
              性格很好，欢迎大家和我交朋友～
            </p>
            <p>
              我是一个高精力死宅<br />
              思维特别跳脱，灵感经常乍现，我还有好多点子在等待着实现。喜欢哲学（尤其是道！！！），理财还有研究最新的技术
            </p>
            <p>
              目前在赶自己的毕业设计，属于AI+电子信息的垂直领域，也算是一次大胆的尝试了，同时也在找AI相关领域的工作。我愿意全身心投入这份事业中，一起为中国AI事业做一点点小小的贡献吧！虽然现在还很普通，但好在我一直在做ovo，绝不偷懒。
            </p>
          </div>
        </motion.div>

        {/* ID Card Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <NeoBox color="white" shadowSize="lg" className="w-full max-w-md border-4 p-6 bg-[#a3e635] rotate-2 hover:rotate-0 transition-transform">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-black tracking-widest">ID CARD</h2>
              <div className="w-16 h-16 bg-[#ff90e8] rounded-full border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Smile className="w-8 h-8" />
              </div>
            </div>
            
            <div className="text-xs font-bold mb-4 text-center">2002.07.20 江苏</div>

            <div className="grid grid-cols-2 gap-4">
              <NeoBox color="white" className="border-4 p-2 flex flex-col items-center justify-center bg-[#fdf2e9]">
                <img 
                  src="/avatar.jpg" 
                  alt="Avatar" 
                  className="w-32 h-32 object-cover rounded-full border-4 border-black mb-2" 
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?q=80&w=200&auto=format&fit=crop";
                  }}
                />
                <div className="flex gap-2 w-full">
                  <span className="bg-[#90e8ff] border-2 border-black px-2 py-1 text-xs font-bold rounded-full w-full text-center">2002.07.20</span>
                  <span className="bg-[#ff90e8] border-2 border-black px-2 py-1 text-xs font-bold rounded-full">江苏</span>
                </div>
              </NeoBox>

              <div className="space-y-4 flex flex-col justify-between">
                <NeoBox color="yellow" className="border-4 p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <div className="text-[10px] font-bold mb-1">NAME</div>
                  <div className="text-xl font-black">且安</div>
                </NeoBox>
                <NeoBox color="white" className="border-4 p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#e0e7ff]">
                  <div className="text-[10px] font-bold mb-1">MAJOR</div>
                  <div className="text-sm font-bold">电子信息工程</div>
                </NeoBox>
                <NeoBox color="white" className="border-4 p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] bg-[#fce7f3]">
                  <div className="text-[10px] font-bold mb-1">JOB</div>
                  <div className="text-sm font-bold">准毕业</div>
                </NeoBox>
              </div>
            </div>

            <div className="mt-6 flex justify-between items-end">
              <div>
                <div className="text-[10px] font-bold mb-1">ID NO.</div>
                <div className="text-lg font-mono font-bold tracking-widest">QA-20020720-0V0</div>
              </div>
              <div className="w-16 h-16 bg-[#ff90e8] rounded-full border-4 border-black flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-12">
                <span className="text-[10px] font-black text-center leading-tight">OFFICIAL<br/>VIBE</span>
              </div>
            </div>
          </NeoBox>
        </motion.div>
      </div>

      {/* Statement Banner */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative flex justify-center"
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white border-2 border-black px-2 py-1 text-xs font-bold z-10">STATEMENT</div>
        <NeoBox color="yellow" shadowSize="lg" className="w-full max-w-4xl border-4 p-8 text-center rotate-1 hover:rotate-0 transition-transform">
          <h2 className="text-2xl md:text-4xl font-black mb-6">永远积极向上，永远不断迭代</h2>
          <p className="text-lg md:text-xl font-bold text-zinc-700">
            我正在朝着自己喜欢的方向前进！<br />
            不知道 3年 5年 10年后的我会成为什么样的人，过上什么样的生活呢？
          </p>
        </NeoBox>
      </motion.div>

      {/* Recent Updates */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <div className="inline-block bg-[#ff90e8] border-4 border-black px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] -rotate-2">
          <h2 className="text-2xl md:text-3xl font-black tracking-widest">近日生活 | RECENT UPDATES</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center relative py-12">
          {/* Connecting dashed lines (simplified for layout) */}
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 border-t-4 border-dashed border-black -z-10" />

          <NeoBox color="white" interactive className="w-full md:w-64 border-4 p-6 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="w-12 h-12 bg-[#90e8ff] rounded-xl border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">最近在读</h3>
            <p className="text-zinc-600 font-medium">道德经</p>
          </NeoBox>

          <ArrowRight className="hidden md:block w-8 h-8 text-zinc-400" />

          <NeoBox color="white" interactive className="w-full md:w-64 border-4 p-6 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
            <div className="w-12 h-12 bg-[#ff90e8] rounded-xl border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Tv className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">最近狂刷</h3>
            <p className="text-zinc-600 font-medium">AI技术流视频</p>
          </NeoBox>

          <ArrowRight className="hidden md:block w-8 h-8 text-zinc-400" />

          <NeoBox color="white" interactive className="w-full md:w-64 border-4 p-6 flex flex-col items-center text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mt-8 md:mt-0">
            <div className="w-12 h-12 bg-[#a3e635] rounded-xl border-2 border-black flex items-center justify-center mb-4 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              <Code className="w-6 h-6" />
            </div>
            <h3 className="font-bold mb-2">最近感兴趣</h3>
            <p className="text-zinc-600 font-medium">用AI满足需求</p>
          </NeoBox>
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-black flex justify-center items-center gap-4 flex-wrap">
            地球Online 
            <span className="bg-[#ff90e8] border-4 border-black px-4 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block">
              开放游戏进度
            </span>
          </h2>
        </div>

        <NeoBox color="white" shadowSize="lg" className="border-4 p-8 md:p-16 relative">
          {/* Center Line */}
          <div className="absolute left-1/2 top-16 bottom-16 w-1 border-l-4 border-dashed border-black -translate-x-1/2 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {/* Headers */}
            <div className="text-center md:text-right">
              <div className="inline-block bg-[#a3e635] border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black">主线任务</h3>
              </div>
            </div>
            <div className="text-center md:text-left hidden md:block">
              <div className="inline-block bg-[#90e8ff] border-4 border-black px-6 py-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="text-2xl font-black">支线任务</h3>
              </div>
            </div>

            {/* Timeline Items */}
            {/* 2026.06 Main */}
            <div className="md:col-start-1 relative flex justify-end">
              <div className="absolute top-1/2 -right-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between w-full">
                <div className="w-12 h-12 bg-[#a3e635] rounded-xl border-2 border-black flex items-center justify-center shrink-0 mr-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold mb-2 flex items-center justify-end gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">主线</span>
                    <span>2026.06</span>
                  </div>
                  <p className="font-medium">准备本科毕业啦!!!</p>
                </div>
              </NeoBox>
            </div>

            {/* 2026.03 Side */}
            <div className="md:col-start-2 relative">
              <div className="absolute top-1/2 -left-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold mb-2 flex items-center gap-2">
                    <span>2026.03</span>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">支线</span>
                  </div>
                  <p className="font-medium">激动的部署了第一个openclaw，跑通了第一个闭环</p>
                </div>
                <div className="w-12 h-12 bg-[#ff90e8] rounded-xl border-2 border-black flex items-center justify-center shrink-0 ml-4">
                  <Code className="w-6 h-6" />
                </div>
              </NeoBox>
            </div>

            {/* 2026.03 Main */}
            <div className="md:col-start-1 relative flex justify-end">
              <div className="absolute top-1/2 -right-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between w-full">
                <div className="w-12 h-12 bg-[#90e8ff] rounded-xl border-2 border-black flex items-center justify-center shrink-0 mr-4">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold mb-2 flex items-center justify-end gap-2">
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">主线</span>
                    <span>2026.03</span>
                  </div>
                  <p className="font-medium">日均十二个小时做项目中，找工作ing</p>
                </div>
              </NeoBox>
            </div>

            {/* 2025.04 Side */}
            <div className="md:col-start-2 relative">
              <div className="absolute top-1/2 -left-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold mb-2 flex items-center gap-2">
                    <span>2025.04</span>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">支线</span>
                  </div>
                  <p className="font-medium">养基中，目前长期持有：越南指数，电力.....不断学习中</p>
                </div>
                <div className="w-12 h-12 bg-[#ffde59] rounded-xl border-2 border-black flex items-center justify-center shrink-0 ml-4">
                  <MapPin className="w-6 h-6" />
                </div>
              </NeoBox>
            </div>

            {/* 2024.11 Side */}
            <div className="md:col-start-2 relative">
              <div className="absolute top-1/2 -left-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold mb-2 flex items-center gap-2">
                    <span>2024.11</span>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">支线</span>
                  </div>
                  <p className="font-medium">学习道法，哲学，风水</p>
                </div>
                <div className="w-12 h-12 bg-[#ff90e8] rounded-xl border-2 border-black flex items-center justify-center shrink-0 ml-4">
                  <Tv className="w-6 h-6" />
                </div>
              </NeoBox>
            </div>

            {/* 2023.06 Side */}
            <div className="md:col-start-2 relative">
              <div className="absolute top-1/2 -left-[4.5rem] w-6 h-6 bg-white border-4 border-black rounded-full -translate-y-1/2 hidden md:block z-10 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]" />
              <NeoBox interactive color="white" className="border-4 p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold mb-2 flex items-center gap-2">
                    <span>2023.06</span>
                    <span className="bg-black text-white px-2 py-0.5 text-[10px] rounded-sm">支线</span>
                  </div>
                  <p className="font-medium">不断学习英语中，希望早日实现英语演讲free</p>
                </div>
                <div className="w-12 h-12 bg-[#a3e635] rounded-xl border-2 border-black flex items-center justify-center shrink-0 ml-4">
                  <GraduationCap className="w-6 h-6" />
                </div>
              </NeoBox>
            </div>
          </div>
        </NeoBox>
      </motion.div>
    </div>
  );
}
