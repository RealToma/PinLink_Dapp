const TokenDistributions = () => {
  return (
    <div className="skill">
      <div className="outer">
        <div className="inner">
          <div id="number">Distributions</div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
        className="svg1"
      >
        <defs>
          <linearGradient id="GradientColor1">
            <stop offset="0%" stop-color="#C1FF72" />
            <stop offset="100%" stop-color="#000000" />
          </linearGradient>
        </defs>
        <circle id="segment1" cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
        className="svg2"
      >
        <defs>
          <linearGradient id="GradientColor2">
            <stop offset="0%" stopColor="#C1FF72" />
            <stop offset="50%" stopColor="#64AFFA" />
            <stop offset="100%" stopColor="#70C1FA" />
          </linearGradient>
        </defs>
        <circle id="segment2" cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="160px"
        height="160px"
        className="svg3"
      >
        <defs>
          <linearGradient id="GradientColor3">
            <stop offset="42.28%" stopColor="#C1FF72" />
            <stop offset="0%" stopColor="#70C1FA" />
            <stop offset="100%" stopColor="#042F4E" />
          </linearGradient>
        </defs>
        <circle id="segment3" cx="80" cy="80" r="70" stroke-linecap="round" />
      </svg>
    </div>
  );
};

export default TokenDistributions;
