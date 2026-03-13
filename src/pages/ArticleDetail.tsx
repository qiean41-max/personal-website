import { motion } from "motion/react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { NeoButton } from "@/components/NeoButton";

const articles = [
  {
    id: 1,
    title: "Vibe Coding 小记",
    date: "2026-03-13",
    tag: "随笔",
    tagColor: "bg-[#ff90e8]",
    desc: "最近几天vibe coding了两个小项目，一个是婚姻定制的网站，另一个是时记app（测试中），用于智能记录保质期的，我觉得这个APP对注重健康的人来说还是挺有用的，特别是药物和厨房用品，容易不经意错过保质期。当然，这两个项目也仅仅只是为了快速熟悉常用AI编程工具，之后就要开始学习更深入的人工智能领域，特别是Langchain一些框架，和ai自动化等为此打下一定基础，AI技术迭代时代飞速，即使是效率提高，有的人能提高2倍，而有的人能提高200倍，所以还是要更深入理解其中的逻辑和概念，这样搭出来的架构和工作流，能让生产力变成指数级增长",
    image: "https://picsum.photos/seed/article3/400/300",
    bgColor: "bg-white"
  },
  {
    id: 2,
    title: "openclow迎来更新",
    date: "2026-03-09",
    tag: "随笔",
    tagColor: "bg-[#ff90e8]",
    desc: "今天我让小龙虾自我更新，结果它自己把自己删了，只留我一个孤家寡人",
    image: "https://picsum.photos/seed/article1/400/300",
    bgColor: "bg-[#fdfbf7]"
  },
  {
    id: 3,
    title: "AI母体计划",
    date: "2026-03-07",
    tag: "随笔",
    tagColor: "bg-[#ff90e8]",
    desc: "经过这几天对最前沿AI的研究，我的一个感觉就是，AI技术迭代实在太快了，AI爆棚的生产力已经不断在渗透各行各业。但目前最先进的技术，毋庸置疑不用多久也依然会被淘汰。所以，这个时代，带给我们的除了生产力爆棚的兴奋同时，更多是飞速发展之下迅速害怕淘汰的迷茫。因此我决定搭建第一个智能体，一定是作为母体的存在，其主要功能是不断爬取最新的AI技术，自主分析利弊，主动为其管理下的所有智能体，项目，工作流，做技术革新，使得我所拥有的人工智能助手永远处于最高效率的状态。并且它会从成本、推理效率、和技术稳定性等多维度做技术革新评估。我觉得这个母体AI在功能性上，绝对不能太复杂，更主要的是用于决策和考量，并把分析的结果与我沟通，和我做交流。得到我的授权后，利用Openclaw，对有必要进行升级的项目，对其主要的数据进行备份，再进行迁移。但这个过程绝对不能完全自动化，只能自动一部分、手动一部分，把握好度。从明天开始搭建雏形，并对其不断地完善，在变中寻找不变应该才是AI时代的最优解。",
    image: "https://picsum.photos/seed/article2/400/300",
    bgColor: "bg-white"
  }
];

export function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = articles.find(a => a.id === Number(id));

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-black mb-4">文章未找到</h1>
        <NeoButton onClick={() => navigate("/articles")} variant="primary">
          返回文章列表
        </NeoButton>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f4f0] py-12 md:py-24 px-4">
      {/* 返回按钮 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto mb-8"
      >
        <NeoButton
          onClick={() => navigate("/articles")}
          variant="secondary"
          className="gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          返回文章列表
        </NeoButton>
      </motion.div>

      {/* 半透明纸张效果容器 */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        {/* 纸张主体 - 半透明毛玻璃效果 */}
        <div className="relative">
          {/* 柔和的阴影层 */}
          <div className="absolute inset-0 bg-black/10 translate-x-2 translate-y-2 rounded-lg blur-sm" />
          
          {/* 半透明纸张内容 */}
          <div 
            className="relative bg-white/60 backdrop-blur-sm border-2 border-black/20 rounded-lg p-8 md:p-16 min-h-[600px]"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  transparent,
                  transparent 31px,
                  rgba(0,0,0,0.05) 31px,
                  rgba(0,0,0,0.05) 32px
                )
              `,
              backgroundSize: '100% 32px',
              lineHeight: '32px',
              boxShadow: 'inset 0 0 60px rgba(255,255,255,0.5)'
            }}
          >
            {/* 文章头部信息 */}
            <div className="mb-8 pb-6 border-b-2 border-dashed border-black/20">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className={`inline-block border-2 border-black px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${article.tagColor}`}>
                  {article.tag}
                </span>
                <div className="flex items-center text-gray-600 text-sm font-bold">
                  <Calendar className="w-4 h-4 mr-1" />
                  {article.date}
                </div>
              </div>
              
              <h1 
                className="text-3xl md:text-4xl font-black text-gray-800"
                style={{ fontFamily: '"Ma Shan Zheng", "STXingkai", "KaiTi", cursive' }}
              >
                {article.title}
              </h1>
            </div>

            {/* 文章正文 - 仿手写体 */}
            <div 
              className="text-lg md:text-xl text-gray-700 leading-relaxed"
              style={{ 
                fontFamily: '"Ma Shan Zheng", "STXingkai", "KaiTi", cursive',
                textIndent: '2em'
              }}
            >
              {article.desc.split('。').map((sentence, index) => (
                sentence.trim() && (
                  <p key={index} className="mb-4">
                    {sentence}。
                  </p>
                )
              ))}
            </div>

            {/* 底部装饰 */}
            <div className="mt-16 pt-8 border-t-2 border-dashed border-black/20 text-center">
              <p 
                className="text-gray-500 text-sm"
                style={{ fontFamily: '"Ma Shan Zheng", "STXingkai", "KaiTi", cursive' }}
              >
                —— 完 ——
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
