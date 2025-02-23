import React from 'react';

const PromotionCard = ({ 
  title, 
  subtitle, 
  features = [], 
  isDark = false, 
  className = "" 
}) => (
  <div 
    className={`
      p-8 rounded-xl flex flex-col justify-between min-h-[400px] 
      transition-transform duration-300 hover:scale-[1.02] cursor-pointer
      ${isDark ? 'bg-zinc-900 text-white' : 'bg-purple-200 text-zinc-900'}
      ${className}
    `}
  >
    <div>
      <div className="mb-4">
        {subtitle && (
          <div className="mb-2 text-lg">
            {subtitle}
          </div>
        )}
        {features.map((feature, index) => (
          <div key={index} className="text-lg font-light">
            {feature}
          </div>
        ))}
      </div>
    </div>
    <div className="border-t border-current pt-6 mt-auto">
      <h2 className="text-4xl font-light">
        {isDark && <span className="font-mono mr-2">→</span>}
        {title}
      </h2>
    </div>
  </div>
);

const Promotion = () => {
    
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <PromotionCard
            title="Let's work"
            subtitle="You feel it too?"
            features={["Let's talk, no strings attached"]}
            isDark={true}
          />
          
          <PromotionCard
            title="Brand sprint"
            subtitle="New!"
            features={[
              "Go to market fast",
              "Get a funding round",
              "Stand out from the crowd"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Promotion;