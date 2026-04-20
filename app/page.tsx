import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-[#f4e7cf]">
      {/* 背景图 */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-cover.png')",
          backgroundPosition: "center 30%",
        }}
      />

      {/* 遮罩：更电影一点，边缘更稳 */}
      <div className="absolute inset-0 bg-black/28" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(0,0,0,0.04) 0%, rgba(0,0,0,0.18) 52%, rgba(0,0,0,0.34) 100%)",
        }}
      />

      {/* 左侧排版 */}
      <div className="absolute left-[6%] top-[17%] z-10">
        <div className="flex items-start gap-6">
          <div className="relative mt-1">
            <div className="h-[300px] w-px bg-[#c9a261]/65" />
            <div className="absolute left-1/2 top-[42%] h-2 w-2 -translate-x-1/2 rotate-45 border border-[#c9a261]/75 bg-transparent" />
          </div>

          <div className="pt-8">
            <p
              className="text-[#ead8b3]"
              style={{
                fontFamily:
                  "'STKaiti', 'KaiTi', 'Kaiti SC', 'Songti SC', 'Noto Serif SC', serif",
                fontSize: "clamp(34px, 3vw, 58px)",
                lineHeight: 1.15,
                fontWeight: 400,
                letterSpacing: "0.08em",
                textShadow: "0 2px 10px rgba(0,0,0,0.18)",
              }}
            >
              张心瑶
            </p>

            <div className="mt-5 flex items-center gap-4">
              <div className="h-px w-10 bg-[#c9a261]/70" />
              <div className="h-2 w-2 rotate-45 border border-[#c9a261]/80" />
              <div className="h-px w-16 bg-[#c9a261]/40" />
            </div>

            <p
              className="mt-5 text-[#d9be8d]"
              style={{
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                fontSize: "clamp(20px, 1.5vw, 30px)",
                fontStyle: "italic",
                fontWeight: 400,
                letterSpacing: "0.08em",
                lineHeight: 1.2,
                textShadow: "0 2px 8px rgba(0,0,0,0.18)",
              }}
            >
              Xinyao Zhang
            </p>
          </div>
        </div>
      </div>

      {/* 右侧中文 */}
      <div className="absolute right-[6%] top-[16.5%] z-10 max-w-[500px] text-right">
        <div
          className="space-y-3 text-[#ead6b0]"
          style={{
            fontFamily:
              "'STKaiti', 'KaiTi', 'Kaiti SC', 'Songti SC', 'Noto Serif SC', serif",
            fontSize: "clamp(16px, 1.45vw, 28px)",
            lineHeight: 1.68,
            fontWeight: 400,
            letterSpacing: "0.04em",
            textShadow: "0 2px 10px rgba(0,0,0,0.14)",
          }}
        >
          <p>心有野心与远方　行有分寸与踏实</p>
          <p>不驰于空想　不骛于虚声</p>
          <p>稳步奔赴心之所向</p>
        </div>

        <div className="mt-5 flex items-center justify-end gap-4">
          <div className="h-px w-14 bg-[#c9a261]/60" />
          <div className="h-2 w-2 rotate-45 border border-[#c9a261]/75" />
          <div className="h-px w-14 bg-[#c9a261]/35" />
        </div>

        <p
          className="mt-6 text-[#c7ab78]/70"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            fontSize: "clamp(13px, 0.95vw, 18px)",
            fontStyle: "italic",
            lineHeight: 1.55,
            fontWeight: 400,
            maxWidth: "460px",
            marginLeft: "auto",
            textShadow: "0 2px 8px rgba(0,0,0,0.12)",
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
            className="text-[#e2c18d] transition duration-300 group-hover:-translate-y-[2px] group-hover:opacity-85"
            style={{
              fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
              fontSize: "clamp(30px, 2.5vw, 46px)",
              letterSpacing: "0.22em",
              fontWeight: 500,
              textShadow: "0 2px 8px rgba(0,0,0,0.18)",
            }}
          >
            ENTER
          </span>

          <div className="mt-4 flex items-center gap-4">
            <div className="h-px w-16 bg-[#c9a261]/65 transition duration-300 group-hover:w-20" />
            <div className="h-2 w-2 rotate-45 border border-[#c9a261]/75" />
            <div className="h-px w-16 bg-[#c9a261]/65 transition duration-300 group-hover:w-20" />
          </div>
        </Link>
      </div>
    </main>
  );
}
