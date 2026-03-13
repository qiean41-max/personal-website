import { motion } from "motion/react";
import { NeoBox } from "@/components/NeoBox";
import { NeoButton } from "@/components/NeoButton";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

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

export function Articles() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 space-y-16">
      <div className="space-y-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Link to={`/articles/${article.id}`}>
              <NeoBox interactive color="white" className={`border-4 p-0 overflow-hidden flex flex-col md:flex-row shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] group ${article.bgColor}`}>
                <div className="w-full md:w-1/3 h-48 md:h-auto border-b-4 md:border-b-0 md:border-r-4 border-black relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-center relative md:h-[280px]">
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`border-2 border-black px-2 py-0.5 text-xs font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] ${article.tagColor}`}>
                      {article.tag}
                    </span>
                    <div className="flex items-center text-zinc-500 text-xs font-bold">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-black mb-3 group-hover:text-[#ff6b9e] transition-colors">
                    {article.title}
                  </h2>
                  
                  <p className="text-zinc-600 font-medium line-clamp-2 overflow-hidden">
                    {article.desc}
                  </p>

                  <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-4 border-black flex items-center justify-center bg-white group-hover:bg-black group-hover:text-white transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group-hover:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)] group-hover:translate-x-1 group-hover:translate-y-1">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </NeoBox>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
