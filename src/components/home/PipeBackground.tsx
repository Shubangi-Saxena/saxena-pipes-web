// Decorative pipe network with animated "water" flowing through. Follows theme via currentColor.
const mainPipes = [
  "M-20 160 H380 Q420 160 420 200 V420 Q420 460 460 460 H760",
  "M1460 120 H1120 Q1080 120 1080 160 V300 Q1080 340 1040 340 H880",
  "M-20 640 H240 Q280 640 280 600 V540",
  "M1460 600 H1180 Q1140 600 1140 640 V820",
  "M960 -20 V60 Q960 100 1000 100 H1080",
];
const thinPipes = [
  "M-20 200 H360",
  "M1460 160 H1140",
  "M600 820 V720 Q600 690 630 690 H900 Q930 690 930 660 V600",
  "M120 -20 V80 Q120 110 150 110 H300",
];
const joints = [[380,160],[420,420],[760,460],[1120,120],[1080,300],[880,340],[240,640],[1180,600],[1080,100]];

const PipeBackground = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden text-primary">
    <svg
      className="absolute inset-0 h-full w-full"
      style={{
        maskImage: "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 40%, black 100%)",
        WebkitMaskImage: "radial-gradient(ellipse 45% 40% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.15) 40%, black 100%)",
      }}
      preserveAspectRatio="xMidYMid slice"
      viewBox="0 0 1440 800"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Pipe walls */}
      <g strokeWidth="16" className="opacity-30 dark:opacity-40">
        {mainPipes.map((d, i) => <path key={i} d={d} />)}
      </g>
      <g strokeWidth="5" className="opacity-25 dark:opacity-35">
        {thinPipes.map((d, i) => <path key={i} d={d} />)}
      </g>

      {/* Flowing water */}
      <g strokeWidth="5" className="pipe-flow opacity-60" style={{ stroke: "hsl(var(--background))" }}>
        {mainPipes.map((d, i) => (
          <path key={i} d={d} strokeDasharray="14 46" style={{ animationDelay: `${i * -0.7}s` }} />
        ))}
      </g>
      <g strokeWidth="2" className="pipe-flow-slow opacity-50" stroke="currentColor">
        {thinPipes.map((d, i) => (
          <path key={i} d={d} strokeDasharray="6 30" style={{ animationDelay: `${i * -1.1}s` }} />
        ))}
      </g>

      {/* Joints */}
      <g strokeWidth="6" fill="hsl(var(--background))" className="opacity-45 dark:opacity-55">
        {joints.map(([x, y], i) => (
          <rect key={i} x={x - 15} y={y - 15} width="30" height="30" rx="7" />
        ))}
      </g>
    </svg>
    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-background" />
  </div>
);

export default PipeBackground;
