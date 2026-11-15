import type { Palette, Vessel } from "@/lib/recipes";

type Props = {
  slug: string;
  variant: Vessel;
  palette: Palette;
  className?: string;
};

const PLATE = "#fbf7ef";
const PLATE_EDGE = "#e6dccb";
const INK = "#1b1917";
const CREAM = "#f8eeda";

const curryPieces = [
  { x: 158, y: 138, rx: 24, ry: 17, r: -22 },
  { x: 214, y: 130, rx: 27, ry: 18, r: 14 },
  { x: 246, y: 162, rx: 21, ry: 16, r: 32 },
  { x: 188, y: 176, rx: 25, ry: 17, r: -8 },
  { x: 144, y: 168, rx: 19, ry: 14, r: 44 },
];

const dryPieces = [
  { x: 152, y: 136, rx: 22, ry: 16, r: -18 },
  { x: 198, y: 126, rx: 24, ry: 16, r: 10 },
  { x: 242, y: 140, rx: 21, ry: 15, r: 26 },
  { x: 168, y: 166, rx: 23, ry: 16, r: 6 },
  { x: 216, y: 172, rx: 22, ry: 15, r: -14 },
  { x: 252, y: 178, rx: 18, ry: 13, r: 34 },
  { x: 128, y: 160, rx: 16, ry: 12, r: 30 },
];

const herbs = [
  { x: 232, y: 116, r: 40 },
  { x: 250, y: 132, r: -15 },
  { x: 168, y: 186, r: 65 },
  { x: 200, y: 196, r: -40 },
  { x: 132, y: 148, r: 12 },
  { x: 262, y: 156, r: 70 },
];

function Plate() {
  return (
    <>
      <ellipse cx="202" cy="182" rx="150" ry="92" fill={INK} opacity="0.14" style={{ filter: "blur(10px)" }} />
      <ellipse cx="200" cy="158" rx="146" ry="97" fill={PLATE} stroke={PLATE_EDGE} strokeWidth="2" />
      <ellipse cx="200" cy="158" rx="132" ry="86" fill="none" stroke={INK} strokeOpacity="0.06" strokeWidth="8" />
      <ellipse cx="200" cy="158" rx="120" ry="78" fill="none" stroke={INK} strokeOpacity="0.09" strokeWidth="1.2" />
    </>
  );
}

function Garnish({ palette }: { palette: Palette }) {
  return (
    <g>
      {herbs.map((leaf, i) => (
        <ellipse
          key={`herb-${i}`}
          cx={leaf.x}
          cy={leaf.y}
          rx="9"
          ry="4.6"
          fill={palette.garnish}
          opacity={i % 2 ? 0.85 : 0.7}
          transform={`rotate(${leaf.r} ${leaf.x} ${leaf.y})`}
        />
      ))}
      <rect x="196" y="112" width="26" height="3" rx="1.5" fill={palette.accent} opacity="0.9" transform="rotate(-14 196 112)" />
      <rect x="224" y="184" width="22" height="3" rx="1.5" fill={palette.accent} opacity="0.75" transform="rotate(22 224 184)" />
    </g>
  );
}

function Swirl({ color = CREAM }: { color?: string }) {
  return (
    <path
      d="M170 156 q14 -22 38 -12 q24 10 2 22 q-20 8 -28 -6"
      fill="none"
      stroke={color}
      strokeWidth="4.5"
      strokeLinecap="round"
      opacity="0.75"
    />
  );
}

export function DishArt({ slug, variant, palette, className }: Props) {
  const uid = slug.replace(/[^a-z0-9]/g, "");
  const curryId = `curry-${uid}`;
  const grainId = `grain-${uid}`;
  const glowId = `glow-${uid}`;

  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label="Illustration of the finished dish"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={curryId} cx="42%" cy="34%" r="78%">
          <stop offset="0%" stopColor={palette.curry} stopOpacity="0.95" />
          <stop offset="62%" stopColor={palette.curry} />
          <stop offset="100%" stopColor={palette.deep} />
        </radialGradient>
        <radialGradient id={glowId} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={palette.accent} stopOpacity="0.5" />
          <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <filter id={grainId}>
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </defs>

      <rect width="400" height="300" fill={palette.bg} />
      <ellipse cx="200" cy="150" rx="230" ry="180" fill={`url(#${glowId})`} />
      <g opacity="0.28">
        {[
          [46, 52],
          [70, 236],
          [338, 74],
          [352, 224],
          [28, 148],
          [372, 152],
        ].map(([cx, cy], i) => (
          <circle key={`speck-${i}`} cx={cx} cy={cy} r={i % 2 ? 2.4 : 3.4} fill={palette.deep} />
        ))}
      </g>

      <Plate />

      {variant === "curry" && (
        <g>
          <ellipse cx="200" cy="156" rx="117" ry="74" fill={`url(#${curryId})`} />
          <ellipse cx="200" cy="156" rx="112" ry="70" fill="none" stroke={palette.deep} strokeOpacity="0.35" strokeWidth="3" />
          <ellipse cx="180" cy="138" rx="58" ry="32" fill={palette.accent} opacity="0.18" />
          {[
            [150, 196],
            [244, 122],
            [262, 176],
            [136, 152],
          ].map(([cx, cy], i) => (
            <ellipse
              key={`oil-${i}`}
              cx={cx}
              cy={cy}
              rx={i % 2 ? 15 : 11}
              ry={i % 2 ? 6 : 5}
              fill="none"
              stroke={palette.accent}
              strokeWidth="2"
              strokeOpacity="0.55"
            />
          ))}
          {curryPieces.map((piece, i) => (
            <g key={`piece-${i}`} transform={`rotate(${piece.r} ${piece.x} ${piece.y})`}>
              <ellipse cx={piece.x} cy={piece.y} rx={piece.rx} ry={piece.ry} fill={palette.piece} stroke={palette.deep} strokeOpacity="0.4" strokeWidth="1.8" />
              <ellipse cx={piece.x - 4} cy={piece.y - 4} rx={piece.rx * 0.55} ry={piece.ry * 0.5} fill={CREAM} opacity="0.3" />
            </g>
          ))}
          <Swirl />
          <Garnish palette={palette} />
          {[
            [158, 118],
            [236, 178],
            [214, 198],
            [146, 176],
            [252, 146],
            [190, 112],
          ].map(([cx, cy], i) => (
            <circle key={`fleck-${i}`} cx={cx} cy={cy} r={i % 2 ? 2 : 2.6} fill={palette.deep} opacity="0.35" />
          ))}
        </g>
      )}

      {variant === "dry" && (
        <g>
          <ellipse cx="204" cy="160" rx="96" ry="54" fill={palette.curry} opacity="0.16" />
          <ellipse cx="186" cy="150" rx="66" ry="34" fill={palette.deep} opacity="0.1" style={{ filter: "blur(16px)" }} />
          {dryPieces.map((piece, i) => (
            <g key={`dry-${i}`} transform={`rotate(${piece.r} ${piece.x} ${piece.y})`}>
              <ellipse cx={piece.x} cy={piece.y} rx={piece.rx} ry={piece.ry} fill={i % 3 === 1 ? palette.curry : palette.piece} stroke={palette.deep} strokeOpacity="0.6" strokeWidth="1.8" />
              <ellipse cx={piece.x - 3} cy={piece.y - 3} rx={piece.rx * 0.5} ry={piece.ry * 0.45} fill={CREAM} opacity="0.3" />
              <path
                d={`M${piece.x - piece.rx * 0.55} ${piece.y + 3} l${piece.rx * 0.8} ${-5}`}
                stroke={palette.deep}
                strokeWidth="2.5"
                strokeLinecap="round"
                opacity="0.5"
              />
              <path
                d={`M${piece.x - piece.rx * 0.4} ${piece.y - 5} l${piece.rx * 0.6} ${2}`}
                stroke={palette.deep}
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.35"
              />
            </g>
          ))}
          <Garnish palette={palette} />
          <path d="M130 198 a18 18 0 0 1 30 11 z" fill={palette.accent} opacity="0.9" />
          <path d="M130 198 a18 18 0 0 0 30 11" fill="none" stroke={palette.deep} strokeOpacity="0.25" strokeWidth="1.5" />
          <ellipse cx="262" cy="198" rx="18" ry="7.5" fill="none" stroke={CREAM} strokeWidth="3.5" opacity="0.9" />
          <ellipse cx="258" cy="191" rx="16" ry="6.5" fill="none" stroke={CREAM} strokeWidth="3" opacity="0.6" />
        </g>
      )}

      {variant === "rice" && (
        <g>
          <ellipse cx="200" cy="160" rx="118" ry="74" fill={palette.deep} opacity="0.16" />
          <ellipse cx="200" cy="156" rx="115" ry="71" fill="#e6d0a2" />
          <ellipse cx="200" cy="150" rx="102" ry="60" fill="#f0dcb4" />
          {Array.from({ length: 260 }).map((_, i) => {
            const angle = (i / 260) * Math.PI * 2 * 7 + (i % 5) * 0.7;
            const radius = 8 + ((i * 37) % 88);
            const x = 200 + Math.cos(angle) * radius;
            const y = 154 + Math.sin(angle) * radius * 0.58;
            return (
              <rect
                key={`grain-${i}`}
                x={x}
                y={y}
                width={i % 5 === 0 ? 14 : 11}
                height="4"
                rx="2"
                fill={i % 11 === 0 ? palette.accent : i % 8 === 0 ? "#dcc188" : "#fffbf0"}
                opacity={i % 4 === 0 ? 1 : 0.95}
                transform={`rotate(${(i * 53) % 180} ${x} ${y})`}
              />
            );
          })}
          <path d="M126 148 q36 -24 76 -8" fill="none" stroke={palette.accent} strokeWidth="6" strokeLinecap="round" opacity="0.75" />
          <path d="M212 124 q36 8 54 36" fill="none" stroke={palette.accent} strokeWidth="5" strokeLinecap="round" opacity="0.55" />
          <g transform="rotate(-8 196 152)">
            <ellipse cx="196" cy="152" rx="34" ry="23" fill={palette.piece} stroke={palette.deep} strokeOpacity="0.55" strokeWidth="2" />
            <ellipse cx="189" cy="146" rx="17" ry="10" fill={CREAM} opacity="0.35" />
            <path d="M180 158 l26 -6" stroke={palette.deep} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
          </g>
          <g transform="rotate(14 242 172)">
            <ellipse cx="242" cy="172" rx="27" ry="18" fill={palette.piece} stroke={palette.deep} strokeOpacity="0.55" strokeWidth="2" />
            <ellipse cx="237" cy="167" rx="13" ry="8" fill={CREAM} opacity="0.35" />
          </g>
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <path
              key={`onion-${i}`}
              d={`M${142 + i * 24} ${188 - (i % 2) * 10} q13 -7 24 2`}
              fill="none"
              stroke={palette.deep}
              strokeWidth="3.5"
              strokeLinecap="round"
              opacity="0.7"
            />
          ))}
          <Garnish palette={palette} />
        </g>
      )}

      {variant === "grill" && (
        <g>
          {[0, 1, 2].map((skewer) => {
            const offset = skewer * 26;
            const startX = 118 + skewer * 8;
            const startY = 196 - offset;
            const endX = 286 - skewer * 6;
            const endY = 208 - offset;
            return (
              <g key={`skewer-${skewer}`}>
                <line x1={startX} y1={startY} x2={endX} y2={endY} stroke="#b9a894" strokeWidth="4" strokeLinecap="round" />
                {[0, 1, 2, 3].map((chunk) => {
                  const t = 0.2 + chunk * 0.21;
                  const cx = startX + (endX - startX) * t;
                  const cy = startY + (endY - startY) * t;
                  return (
                    <g key={`chunk-${chunk}`} transform={`rotate(-8 ${cx} ${cy})`}>
                      <rect x={cx - 19} y={cy - 15} width="38" height="30" rx="10" fill={palette.piece} stroke={palette.deep} strokeOpacity="0.5" strokeWidth="1.8" />
                      <line x1={cx - 11} y1={cy - 7} x2={cx + 11} y2={cy - 9} stroke={palette.deep} strokeWidth="3" strokeLinecap="round" opacity="0.45" />
                      <line x1={cx - 12} y1={cy + 5} x2={cx + 10} y2={cy + 3} stroke={palette.deep} strokeWidth="3" strokeLinecap="round" opacity="0.4" />
                      <rect x={cx - 17} y={cy - 13} width="34" height="9" rx="4" fill={palette.curry} opacity="0.35" />
                      <ellipse cx={cx - 4} cy={cy - 4} rx="9" ry="5" fill={CREAM} opacity="0.3" />
                    </g>
                  );
                })}
              </g>
            );
          })}
          <Garnish palette={palette} />
          <path d="M236 200 a17 17 0 0 1 28 8 z" fill={palette.accent} opacity="0.9" />
          <path d="M126 132 a18 18 0 0 0 30 -4 z" fill={palette.garnish} opacity="0.75" />
        </g>
      )}

      {variant === "soup" && (
        <g>
          <ellipse cx="200" cy="176" rx="118" ry="70" fill={INK} opacity="0.08" style={{ filter: "blur(8px)" }} />
          <ellipse cx="200" cy="164" rx="116" ry="74" fill={PLATE} stroke={PLATE_EDGE} strokeWidth="1.5" />
          <ellipse cx="200" cy="160" rx="92" ry="55" fill={`url(#${curryId})`} />
          <ellipse cx="182" cy="146" rx="46" ry="24" fill={palette.accent} opacity="0.22" />
          <Swirl />
          <Garnish palette={palette} />
          {[
            [170, 168],
            [228, 156],
            [204, 178],
          ].map(([cx, cy], i) => (
            <ellipse key={`shred-${i}`} cx={cx} cy={cy} rx="13" ry="5" fill={palette.piece} opacity="0.85" transform={`rotate(${i * 24 - 12} ${cx} ${cy})`} />
          ))}
          {[126, 168, 210].map((x, i) => (
            <path
              key={`steam-${i}`}
              d={`M${x} ${104 - i * 6} q10 -14 0 -26 q-10 -12 2 -24`}
              fill="none"
              stroke={INK}
              strokeOpacity="0.14"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </g>
      )}

      <rect width="400" height="300" filter={`url(#${grainId})`} opacity="0.06" />
    </svg>
  );
}
