import { motion, AnimatePresence } from "motion/react";

interface Step {
  selector: string;
  text: string;
}

interface TourGuideProps {
  isOpen: boolean;
  onClose: () => void;
  steps: Step[];
  stepIndex: number;
  setStepIndex: (i: number) => void;
}

export function TourGuide({
  isOpen,
  onClose,
  steps,
  stepIndex,
  setStepIndex,
}: TourGuideProps) {
  if (!isOpen) return null;

  const current = steps[stepIndex];
  const element = document.querySelector(current.selector);

  let rect: DOMRect | null = null;
  if (element) rect = element.getBoundingClientRect();

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/50 z-[999]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {rect && (
          <div
            className="absolute border-2 border-green-400 rounded-xl"
            style={{
              top: rect.top - 5,
              left: rect.left - 5,
              width: rect.width + 10,
              height: rect.height + 10,
            }}
          />
        )}

        {/* Tooltip */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg w-[300px] text-center">
          <p className="text-sm text-gray-700 mb-3">
            {current.text}
          </p>

          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="text-gray-500 text-sm"
            >
              Skip
            </button>

            <button
              onClick={() => {
                if (stepIndex === steps.length - 1) {
                  onClose();
                } else {
                  setStepIndex(stepIndex + 1);
                }
              }}
              className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm"
            >
              {stepIndex === steps.length - 1 ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}