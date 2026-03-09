import { motion } from "motion/react";
import { NeoBox } from "@/components/NeoBox";

export function Products() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24 text-center space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-black">
          我的<span className="bg-[#a3e635] border-4 border-black px-4 py-2 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] inline-block -rotate-2">产品</span>
        </h1>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Product 1 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black">多AI agent团队公司</h2>
          <NeoBox interactive color="white" className="h-64 flex items-center justify-center p-0 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/product-image.png" 
              alt="Product 1"
              className="w-full h-full object-cover"
            />
          </NeoBox>
        </div>
        
        {/* Product 2 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black">openclaw多平台全流程操盘</h2>
          <NeoBox interactive color="white" className="h-64 flex items-center justify-center p-0 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/product-image-2.jpg" 
              alt="Product 2"
              className="w-full h-full object-cover"
            />
          </NeoBox>
        </div>
        
        {/* Product 3 */}
        <div className="space-y-4">
          <h2 className="text-2xl font-black">AI微电影（敬请期待）</h2>
          <NeoBox interactive color="white" className="h-64 flex items-center justify-center p-0 border-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
            <img 
              src="/product-image-3.jpg" 
              alt="Product 3"
              className="w-full h-full object-cover"
            />
          </NeoBox>
        </div>
      </div>
    </div>
  );
}
