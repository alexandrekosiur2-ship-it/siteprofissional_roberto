import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AnimatedCounter = ({ target, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60); 
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Results = () => {
  const stats = [
    { value: 20, suffix: "+", label: "Anos de Experiência em Engenharia" },
    { value: 5, suffix: "", label: "Setores de Infraestrutura Pesada" },
    { value: 100, suffix: "%", label: "Rigores de Segurança & SMS" },
    { value: 10, suffix: "+", label: "Grandes Empreendimentos Gerenciados" }
  ];

  return (
    <section className="py-20 bg-bg-alt relative overflow-hidden border-y border-border transition-colors duration-400">
      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-surface border border-border shadow-sm hover:border-accent/40 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl font-display font-extrabold text-text-primary mb-2 flex items-center">
                <AnimatedCounter target={stat.value} />
                <span className="text-accent ml-0.5">{stat.suffix}</span>
              </div>
              <p className="text-text-secondary text-xs uppercase tracking-wider font-medium max-w-[180px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Results;
