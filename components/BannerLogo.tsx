import React from 'react'

const BannerLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 130"
      role="img"
      aria-label="一人公司跨境电商AI增长黑客横幅Logo"
      className="w-full h-auto"
    >
      <title>跨境AI一人公司 - 核心关键词组合</title>
      <defs>
        <style>
          {`
            /* Define fonts here if needed, but we rely on system fonts from Tailwind */
            .banner-font {
               font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            }
          `}
        </style>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" className="stop-[#0056D2] dark:stop-[#4D9EFF]" stopOpacity="1" />
          <stop offset="100%" className="stop-[#0056D2] dark:stop-[#4D9EFF]" stopOpacity="0.6" />
        </linearGradient>
      </defs>

      <g transform="translate(20, 20)">
        <path
          className="fill-[url(#grad1)] opacity-80"
          d="M10,50 C10,50 30,45 40,30 C50,15 70,10 85,20 C95,27 105,25 115,15 L130,5 L130,25 C120,35 100,40 85,30 C70,20 50,25 40,40 C30,55 10,60 10,60 Z"
        />
        <path className="fill-[url(#grad1)]" d="M130,5 L145,5 L130,20 Z" />
        <circle className="fill-[#0056D2] dark:fill-[#4D9EFF]" cx="40" cy="40" r="6" />
        <circle className="fill-[#0056D2] dark:fill-[#4D9EFF]" cx="85" cy="20" r="8" />
        <circle className="fill-[#0056D2] dark:fill-[#4D9EFF]" cx="130" cy="15" r="5" />
      </g>

      <g transform="translate(180, 0)" className="banner-font">
        <text x="0" y="52" dominantBaseline="alphabetic">
          <tspan
            className="text-[22px] font-medium fill-[#666666] dark:fill-[#aaaaaa] tracking-[0.3px]"
          >
            跨境电商
          </tspan>
          <tspan
            className="fill-[#dddddd] dark:fill-[#444444] font-light text-[22px]"
            dx="8"
          >
            |
          </tspan>
          <tspan
            className="text-[22px] font-medium fill-[#666666] dark:fill-[#aaaaaa] tracking-[0.3px]"
            dx="8"
          >
            AI 产品
          </tspan>

          <tspan
            className="fill-[#dddddd] dark:fill-[#444444] font-light text-[28px]"
            dx="20"
          >
            |
          </tspan>

          <tspan
            className="text-[28px] font-bold fill-[#333333] dark:fill-[#f0f0f0]"
            dx="20"
          >
            <tspan className="fill-[#0056D2] dark:fill-[#4D9EFF]">AI</tspan> X 个人系统 ={' '}
            <tspan className="fill-[#0056D2] dark:fill-[#4D9EFF]">n 倍</tspan>工程师
          </tspan>
        </text>

        <text x="0" y="98" dominantBaseline="alphabetic">
          <tspan className="text-[28px] font-bold fill-[#333333] dark:fill-[#f0f0f0]">
            一人公司 <tspan className="fill-[#0056D2] dark:fill-[#4D9EFF]">OPC</tspan>
          </tspan>

          <tspan
            className="fill-[#dddddd] dark:fill-[#444444] font-light text-[28px]"
            dx="15"
          >
            |
          </tspan>

          <tspan className="text-[22px] font-medium fill-[#666666] dark:fill-[#aaaaaa] tracking-[0.3px]" dx="15">
            <tspan className="fill-[#0056D2] dark:fill-[#4D9EFF] font-semibold">增长黑客</tspan>{' '}
            <tspan className="fill-[#dddddd] dark:fill-[#444444] font-light" dx="8">
              |
            </tspan>
            <tspan dx="8">
              从 0 赚{' '}
              <tspan className="fill-[#0056D2] dark:fill-[#4D9EFF] font-semibold">100 万</tspan>
            </tspan>{' '}
            <tspan className="fill-[#dddddd] dark:fill-[#444444] font-light" dx="8">
              |
            </tspan>
            <tspan dx="8">四十不惑</tspan>{' '}
            <tspan className="fill-[#dddddd] dark:fill-[#444444] font-light" dx="8">
              |
            </tspan>
            <tspan dx="8">人生梦想checklist</tspan>
          </tspan>
        </text>
      </g>
    </svg>
  )
}

export default BannerLogo
