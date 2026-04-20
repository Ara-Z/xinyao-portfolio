import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen w-full overflow-hidden" style={{ background: "#0a0a0a" }}>
      {/* 背景金色大理石纹（占位——拿到授权图片后替换成 <Image /> 即可）*/}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <path d="M 0 0 L 1920 0 L 1920 180 Q 1680 200 1400 170 Q 1120 130 840 95 Q 560 65 280 50 Q 140 43 0 60 Z" fill="#1a1207" opacity="0.92" />
        <path d="M 280 0 L 1920 0 L 1920 150 Q 1680 170 1400 145 Q 1120 115 870 80 Q 700 57 500 33 L 280 0 Z" fill="#3a2c14" opacity="0.9" />
        <path d="M 560 0 L 1920 0 L 1920 125 Q 1680 143 1430 120 Q 1180 95 950 62 L 780 18 L 560 0 Z" fill="#6a5020" opacity="0.92" />
        <path d="M 1010 0 L 1920 0 L 1920 90 Q 1680 103 1450 83 Q 1230 58 1070 23 L 1010 0 Z" fill="#c9a961" opacity="0.88" />
        <path d="M 1290 0 L 1920 0 L 1920 57 Q 1710 68 1510 44 L 1345 15 L 1290 0 Z" fill="#e5c66b" opacity="0.92" />
        <path d="M 140 44 Q 420 68 730 95 Q 1040 117 1350 127 Q 1640 135 1885 150" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.7" />
        <path d="M 280 28 Q 620 48 950 85 Q 1290 113 1640 123 Q 1810 128 1920 132" fill="none" stroke="#f0d68c" strokeWidth="1" opacity="0.65" />
        <circle cx="140" cy="88" r="3" fill="#d4af37" />
        <circle cx="265" cy="120" r="2.2" fill="#c9a961" />
        <circle cx="420" cy="150" r="2.5" fill="#d4af37" />
        <circle cx="620" cy="172" r="1.7" fill="#c9a961" />
        <circle cx="110" cy="245" r="2.2" fill="#c9a961" />
        <circle cx="85" cy="310" r="1.4" fill="#c9a961" />
        <circle cx="225" cy="345" r="1.6" fill="#c9a961" />
        <path d="M 0 890 Q 225 870 450 890 Q 730 917 1010 950 Q 1240 983 1410 1025 Q 1530 1055 1585 1080 L 0 1080 Z" fill="#1a1207" opacity="0.92" />
        <path d="M 0 930 Q 225 912 480 938 Q 760 968 1015 998 Q 1215 1030 1355 1063 Q 1410 1075 1440 1080 L 0 1080 Z" fill="#3a2c14" opacity="0.9" />
        <path d="M 0 975 Q 225 963 480 987 Q 735 1015 960 1045 Q 1130 1068 1210 1080 L 0 1080 Z" fill="#6a5020" opacity="0.92" />
        <path d="M 0 1015 Q 200 1005 420 1025 Q 650 1045 820 1075 L 960 1080 L 0 1080 Z" fill="#c9a961" opacity="0.72" />
        <path d="M 0 1045 Q 170 1038 370 1053 Q 540 1070 620 1080 L 0 1080 Z" fill="#e5c66b" opacity="0.6" />
        <path d="M 0 905 Q 280 885 560 915 Q 870 945 1155 980 Q 1385 1005 1545 1045" fill="none" stroke="#d4af37" strokeWidth="1.5" opacity="0.7" />
        <path d="M 1665 960 Q 1760 940 1920 960 Q 1920 995 1865 1020 L 1920 1080 L 1560 1080 Q 1620 1020 1665 960 Z" fill="#3a2c14" opacity="0.75" />
        <path d="M 1735 995 Q 1820 980 1920 995 L 1920 1055 Q 1860 1043 1760 1043 Q 1695 1048 1680 1080 L 1640 1080 Z" fill="#8a6a2a" opacity="0.7" />
        <path d="M 1790 1025 Q 1860 1015 1920 1025 L 1920 1060 L 1850 1075 Q 1800 1068 1775 1075 Z" fill="#c9a961" opacity="0.55" />
        <circle cx="1580" cy="905" r="2.2" fill="#d4af37" />
        <circle cx="1700" cy="875" r="1.7" fill="#c9a961" />
        <circle cx="1465" cy="935" r="1.4" fill="#c9a961" />
        <circle cx="1840" cy="860" r="1.4" fill="#c9a961" />
        <circle cx="1555" cy="960" r="2" fill="#d4af37" />
        <circle cx="1895" cy="905" r="1.1" fill="#c9a961" />
        <line x1="290" y1="230" x2="290" y2="840" stroke="#c9a961" strokeWidth="1" opacity="0.6" />
        <line x1="1630" y1="230" x2="1630" y2="840" stroke="#c9a961" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* 右上角：努力奋斗 竖排 */}
      <div
        className="absolute flex flex-col leading-none z-20"
        style={{
          top: "18%",
          right: "5%",
          fontFamily: "'Songti SC', 'Source Han Serif SC', STSong, serif",
          fontSize: "clamp(16px, 1.4vw, 22px)",
          color: "#f0d68c",
          letterSpacing: "0.2em",
          gap: "6px",
        }}
      >
        <span>努</span>
        <span>力</span>
        <span>奋</span>
        <span>斗</span>
      </div>

      {/* 中心内容 */}
      <div className="relative h-full flex flex-col items-center justify-center px-10 text-center z-10">
        <h1
          style={{
            fontFamily: "'Songti SC', 'Source Han Serif SC', STSong, serif",
            fontSize: "clamp(56px, 8vw, 120px)",
            lineHeight: 1,
            letterSpacing: "0.18em",
            color: "#f0e6d2",
            fontWeight: 500,
            margin: 0,
          }}
        >
          张心瑶
        </h1>

        <div
          style={{
            fontFamily: "var(--font-geist-mono), 'SF Mono', monospace",
            fontSize: "clamp(12px, 1vw, 15px)",
            letterSpacing: "0.55em",
            color: "#c9a961",
            marginTop: "24px",
          }}
        >
          Xinyao Zhang
        </div>

        <div className="flex items-center" style={{ gap: "14px", margin: "42px 0 36px" }}>
          <div style={{ width: "60px", height: "1px", background: "#c9a961", opacity: 0.6 }} />
          <div style={{ width: "6px", height: "6px", background: "#c9a961", opacity: 0.9, transform: "rotate(45deg)" }} />
          <div style={{ width: "60px", height: "1px", background: "#c9a961", opacity: 0.6 }} />
        </div>

        <div
          style={{
            fontFamily: "'Songti SC', 'Source Han Serif SC', STSong, serif",
            fontSize: "clamp(14px, 1.2vw, 18px)",
            lineHeight: 2.2,
            letterSpacing: "0.15em",
            color: "#b5a890",
            maxWidth: "560px",
          }}
        >
          心有野心与远方　行有分寸与踏实<br />
          不驰于空想　不骛于虚声<br />
          稳步奔赴心之所向
        </div>

        <Link
          href="/about"
          className="flex flex-col items-center transition-opacity hover:opacity-75"
          style={{ marginTop: "60px", textDecoration: "none", gap: "10px" }}
        >
          <div
            style={{
              fontFamily: "'Songti SC', serif",
              fontSize: "clamp(12px, 1vw, 14px)",
              letterSpacing: "0.45em",
              color: "#c9a961",
              border: "0.5px solid #c9a961",
              borderRadius: "2px",
              padding: "10px 32px",
            }}
          >
            进 入
          </div>
          <div
            style={{
              fontFamily: "var(--font-geist-mono), monospace",
              fontSize: "11px",
              letterSpacing: "0.3em",
              color: "#8a7840",
            }}
          >
            Enter
          </div>
        </Link>
      </div>
    </main>
  );
}