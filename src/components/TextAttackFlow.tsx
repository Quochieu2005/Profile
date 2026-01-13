"use client";

import { motion } from "framer-motion";

type TextAttackFlowProps = {
  title: string;
  steps: string[];
};

export default function TextAttackFlow({
  title,
  steps,
}: TextAttackFlowProps) {
  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold mb-3">{title}</h3>

      <div className="flex flex-wrap items-center gap-2 max-w-[1000px] text-sm">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-2">
            {/* STEP */}
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.25 }}
              className="rounded-md border px-3 py-1 hover:text-cyan-400 transition-colors"
            >
              {step}
            </motion.span>

            {/* ARROW */}
            {index !== steps.length - 1 && (
              <motion.span
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.25 + 0.1 }}
                className="text-cyan-400 select-none"
              >
                →
              </motion.span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
