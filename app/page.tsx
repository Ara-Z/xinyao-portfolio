import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#f4e7cf]">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-cover.png')",
          backgroundPosition: "center 32%",
        }}
      />

      {/* 遮罩 */}
      <div className="absolute inset-0 bg-black/22" />

      {/* 左侧排版：参考图二 */}
      <div className="absolute left-[6%] top-[18%] z-10">
        <div className="flex items-start gap-6">
          <div className="relative mt-1">
            <div className="h-[320px] w-px bg-[#c9a261]/70" />
            <div className="absolute left-1/2 top-[42%] h-2 w-2 -translate-x-1/2 rotate-45 border border-[#c9a261]/80 bg-transparent" />
          </div>

          <div className="pt-10">
            <p
              className="text-[#dec08b]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                fontSize: "clamp(34px, 3.2vw, 64px)",
                letterSpacing: "0.16em",
                fontWeight: 500,
              }}
            >
              XINYAO ZHANG
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-[#c9a261]/70" />
              <div className="h-2 w-2 rotate-45 border border-[#c9a261]/80" />
              <div className="h-px w-20 bg-[#c9a261]/40" />
            </div>

            <p
              className="mt-8 text-[#d6b983]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                fontSize: "clamp(24px, 1.8vw, 34px)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0.03em",
              }}
            >
              Passionate · Driven · Impactful
            </p>
          </div>
        </div>
      </div>

      {/* 右侧中文 */}
      <div className="absolute right-[6%] top-[18%] z-10 max-w-[560px] text-right">
        <div
          className="space-y-6 text-[#ead6b0]"
          style={{
            fontFamily:
              "'Songti SC', 'STSong', 'Noto Serif SC', 'Source Han Serif SC', serif",
            fontSize: "clamp(20px, 2vw, 38px)",
            lineHeight: 1.85,
            fontWeight: 500,
            letterSpacing: "0.03em",
          }}
        >
          <p>心有野心与远方　行有分寸与踏实</p>
          <p>不驰于空想　不骛于虚声</p>
          <p>稳步奔赴心之所向</p>
        </div>

        <div className="mt-7 flex items-center justify-end gap-4">
          <div className="h-px w-20 bg-[#c9a261]/70" />
          <div className="h-2 w-2 rotate-45 border border-[#c9a261]/80" />
          <div className="h-px w-20 bg-[#c9a261]/70" />
        </div>

        <p
          className="mt-8 text-[#c7ab78]/88"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(15px, 1.1vw, 21px)",
            fontStyle: "italic",
            lineHeight: 1.7,
            fontWeight: 400,
          }}
        >
          Keep ambition in mind and direction in sight.
          <br />
          Take measured steps and stay grounded in action.
          <br />
          Not lost in fantasies, nor swayed by empty words.
          <br />
          Steadily move toward where the heart truly belongs.
        </p>
      </div>

      {/* 底部 ENTER */}
      <div className="absolute bottom-[7%] left-1/2 z-10 -translate-x-1/2 text-center">
        <Link
          href="/about"
          className="group inline-flex flex-col items-center"
        >
          <span
            className="text-[#e2c18d] transition duration-300 group-hover:opacity-80"
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontSize: "clamp(34px, 2.8vw, 52px)",
              letterSpacing: "0.22em",
              fontWeight: 500,
            }}
          >
            ENTER
          </span>

          <div className="mt-4 flex items-center gap-4">
            <div className="h-px w-20 bg-[#c9a261]/70 transition duration-300 group-hover:w-24" />
            <div className="h-2 w-2 rotate-45 border border-[#c9a261]/80" />
            <div className="h-px w-20 bg-[#c9a261]/70 transition duration-300 group-hover:w-24" />
          </div>
        </Link>
      </div>
    </main>
  );
}