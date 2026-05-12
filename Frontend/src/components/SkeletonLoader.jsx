const SkeletonLoader = ({ count = 3 }) => {
  return (
    <div className="flex flex-col gap-5">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="glass-card p-6 animate-pulse">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 rounded-xl bg-white/5" />
            <div className="flex-1 space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <div className="h-5 w-48 bg-white/8 rounded-lg" />
                  <div className="h-4 w-32 bg-white/5 rounded-lg" />
                </div>
                <div className="h-7 w-24 bg-white/8 rounded-full" />
              </div>
              <div className="flex gap-6">
                <div className="space-y-1">
                  <div className="h-4 w-16 bg-white/5 rounded" />
                  <div className="h-5 w-20 bg-white/8 rounded" />
                </div>
                <div className="flex-1 flex items-center">
                  <div className="h-[2px] w-full bg-white/5 rounded" />
                </div>
                <div className="space-y-1 text-right">
                  <div className="h-4 w-16 bg-white/5 rounded ml-auto" />
                  <div className="h-5 w-20 bg-white/8 rounded ml-auto" />
                </div>
              </div>
              <div className="flex gap-2">
                {[1, 2, 3].map((j) => (
                  <div key={j} className="h-7 w-20 bg-white/5 rounded-full" />
                ))}
              </div>
              <div className="flex justify-between items-center pt-2">
                <div className="h-6 w-28 bg-white/8 rounded" />
                <div className="h-10 w-32 bg-white/8 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonLoader;
