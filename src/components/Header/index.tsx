import classNames from 'classnames';
import { PageSubTitle, PageTitle } from '@/constants';

export interface IHeaderProps {
  className?: string;
}

/**
 * 网页头部
 */
export default function Header({ className }: IHeaderProps) {
  return (
    <header
      className={classNames(
        'group relative flex h-[520px] items-center justify-center overflow-hidden bg-black',
        {
          [className]: className,
        },
      )}
    >
      {/* 背景 */}
      <div className="header-bg absolute inset-0 z-[0] bg-[rgb(37,_29,_24)] blur-[0]">
        <div className="sky absolute left-0 right-0 h-full w-full overflow-hidden">
          <div className="sky-phase sky-dawn absolute left-0 right-0 h-full w-full animate-[linear_dawn_infinite_var(--animation-speed)] bg-gradient-to-r from-[rgba(254,_215,_102,_1)] to-[rgba(205,_237,_246,_1)_100%] transition-opacity duration-200"></div>
          <div className="sky-phase sky-noon absolute left-0 right-0 h-full w-full animate-[linear_noon_infinite_var(--animation-speed)] bg-gradient-to-r from-[rgba(205,_237,_246,_1)] to-[rgba(36,_123,_160,_1)_100%] transition-opacity duration-200"></div>
          <div className="sky-phase sky-dusk absolute left-0 right-0 h-full w-full animate-[linear_dusk_infinite_var(--animation-speed)] bg-gradient-to-r from-[rgba(255,_32,_110,_1)] to-[rgba(10,_0,_94,_1)_100%] transition-opacity duration-200"></div>
          <div className="sky-phase sky-midnight absolute left-0 right-0 h-full w-full animate-[linear_midnight_infinite_var(--animation-speed)] bg-gradient-to-r from-[rgba(2,_0,_20,_1)] to-[rgba(10,_0,_94,_1)_100%] transition-opacity duration-200">
            <div id="sky-stars">
              <div className="absolute left-[46%] top-[55%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[21%] top-[40%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[53%] top-[53%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[65%] top-[58%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[49%] top-[43%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[53%] top-[15%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[33%] top-[24%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[99%] top-[89%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[52%] top-[83%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[6%] top-[73%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[8%] top-[71%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[96%] top-[58%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[47%] top-[36%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[40%] top-[21%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[40%] top-[30%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[86%] top-[7%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[38%] top-[12%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[11%] top-[1%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[33%] top-[56%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[83%] top-[12%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[63%] top-[64%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[53%] top-[84%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[50%] top-[2%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[77%] top-[52%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[82%] top-[23%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[29%] top-[20%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[56%] top-[56%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[69%] top-[94%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[15%] top-[57%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[33%] top-[35%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[33%] top-[94%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[57%] top-[13%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[4%] top-[60%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[18%] top-[84%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[68%] top-[55%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[75%] top-[11%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[73%] top-[64%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[72%] top-[81%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[91%] top-[96%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
              <div className="absolute left-[35%] top-[67%] h-[3px] w-[3px] rounded-[50%] bg-white"></div>
            </div>
          </div>
          <div className="orbit relative m-[200px_auto] h-[500px] w-[500px] -rotate-45 animate-[linear_sunrise_infinite_var(--animation-speed)] md:m-[120px_auto] md:h-[700px] md:w-[700px] lg:h-[800px] lg:w-[800px] xl:h-[900px] xl:w-[900px] 2xl:h-[1100px] 2xl:w-[1100px]">
            <div className="sun absolute -left-[40px] -top-[40px] h-[80px] w-[80px] rounded-[50%] bg-[rgb(254,_215,_102)] shadow-[0_0_14px_14px_rgba(254,_215,_102,_0.2)]"></div>
            <div className="moon absolute -bottom-[40px] -right-[40px] h-[80px] w-[80px] rounded-[50%] bg-white shadow-[0_0_7px_7px_rgba(255,_255,_255,_0.2)]"></div>
          </div>
        </div>
      </div>

      {/* 标题 */}
      <div className="relative z-10 px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <h1 className="toolkits-title animate__animated animate__bounceInDown group/title select-none tracking-tight hover:cursor-pointer">
          <span className="block cursor-pointer text-center font-[about-title] text-4xl font-bold text-white hover:animate-[title-blur-change_2s_ease-out_forwards] sm:text-5xl lg:text-6xl">
            {PageTitle}
          </span>

          <svg className="hidden" width="0" height="0">
            <filter id="filter">
              <feTurbulence
                id="turbulence"
                type="fractalNoise"
                baseFrequency=".03 .03"
                numOctaves="20"
              />
              <feDisplacementMap in="SourceGraphic" scale="70" />
            </filter>
          </svg>
        </h1>

        <div className="animate__animated animate__bounceInLeft mx-auto mt-6 max-w-2xl break-all text-center text-xl text-white/80 sm:max-w-3xl">
          {PageSubTitle}
        </div>
      </div>
    </header>
  );
}
