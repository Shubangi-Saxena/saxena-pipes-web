// Decorative pipe-network line art. Uses currentColor so it follows the theme.
const PipeBackground = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden text-primary">
    <svg className="absolute inset-0 h-full w-full opacity-[0.12] dark:opacity-[0.18]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1440 800" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      <g strokeWidth="14">
        <path d="M-20 160 H380 Q420 160 420 200 V420 Q420 460 460 460 H760" />
        <path d="M1460 120 H1120 Q1080 120 1080 160 V300 Q1080 340 1040 340 H880" />
        <path d="M-20 640 H240 Q280 640 280 600 V540" />
        <path d="M1460 600 H1180 Q1140 600 1140 640 V820" />
        <path d="M960 -20 V60 Q960 100 1000 100 H1080" />
      </g>
      <g strokeWidth="4">
        <path d="M-20 200 H360" />
        <path d="M1460 160 H1140" />
        <path d="M600 820 V720 Q600 690 630 690 H900 Q930 690 930 660 V600" />
        <path d="M120 -20 V80 Q120 110 150 110 H300" />
      </g>
      <g strokeWidth="6" fill="hsl(var(--background))">
        {[[380,160],[420,420],[760,460],[1120,120],[1080,300],[880,340],[240,640],[1180,600],[1080,100]].map(([x,y],i)=>(
          <rect key={i} x={x-14} y={y-14} width="28" height="28" rx="6" />
        ))}
      </g>
      <g strokeWidth="3">
        {[[600,460],[200,160],[1260,120],[1300,600]].map(([x,y],i)=>(
          <g key={i}><line x1={x-10} y1={y-16} x2={x-10} y2={y+16}/><line x1={x+10} y1={y-16} x2={x+10} y2={y+16}/></g>
        ))}
      </g>
    </svg>
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
  </div>
);

export default PipeBackground;
