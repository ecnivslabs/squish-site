import type { Character } from "../domain/types";
import { useState } from "react";
import { useStore } from "../store/store";
import { initialProducts } from "../domain/catalog";

export function CharacterArt({
  character,
  color,
  className = "",
  name = "",
}: {
  character: Character;
  color: string;
  className?: string;
  name?: string;
}) {
  if (
    ["butter", "cheese", "pancakes", "donut", "egg", "mochi", "loaf"].includes(
      character,
    )
  )
    return (
      <FoodArt
        character={character}
        color={color}
        className={className}
        name={name}
      />
    );
  return (
    <svg
      className={`character-art ${className}`}
      viewBox="0 0 320 300"
      role={name ? "img" : undefined}
      aria-label={name || undefined}
      aria-hidden={name ? undefined : true}
    >
      <ellipse cx="160" cy="262" rx="83" ry="12" fill="#2D2D2D" opacity=".08" />
      {character === "bunny" && (
        <g fill={color} stroke="#2D2D2D" strokeWidth="3">
          <path d="M112 142C73 33 113 13 135 128" />
          <path d="M180 128C201 13 247 36 207 149" />
          <path
            d="M112 111Q98 58 112 60Q124 64 126 115"
            fill="#F7C8D4"
            stroke="none"
          />
          <path
            d="M192 113Q203 55 215 61Q225 67 207 117"
            fill="#F7C8D4"
            stroke="none"
          />
        </g>
      )}
      {character === "bear" && (
        <g fill={color} stroke="#2D2D2D" strokeWidth="3">
          <circle cx="104" cy="114" r="30" />
          <circle cx="216" cy="114" r="30" />
        </g>
      )}
      {character === "cat" && (
        <g fill={color} stroke="#2D2D2D" strokeWidth="3">
          <path d="M85 157L90 74Q118 83 138 124" />
          <path d="M183 124Q213 79 233 75L234 158" />
        </g>
      )}
      <path
        d="M62 204C58 139 105 107 160 109C220 107 265 145 258 207C255 241 222 264 160 264C101 264 67 244 62 204"
        fill={color}
        stroke="#2D2D2D"
        strokeWidth="3"
      />
      {character === "frog" && (
        <g fill={color} stroke="#2D2D2D" strokeWidth="3">
          <circle cx="112" cy="120" r="31" />
          <circle cx="207" cy="120" r="31" />
        </g>
      )}
      {character === "bear" && color === "#F7C8D4" && (
        <path
          d="M124 110L137 83L152 100L167 70L177 102L200 88L199 117"
          fill="#A8E6CF"
          stroke="#2D2D2D"
          strokeWidth="3"
          strokeLinejoin="round"
        />
      )}
      {character === "peach" && (
        <>
          <path
            d="M160 114Q160 90 175 82"
            fill="none"
            stroke="#2D2D2D"
            strokeWidth="5"
          />
          <path
            d="M167 98Q183 60 224 80Q204 115 167 98"
            fill="#A8E6CF"
            stroke="#2D2D2D"
            strokeWidth="3"
          />
          <path
            d="M160 114Q140 142 151 164"
            fill="none"
            stroke="#2D2D2D"
            strokeWidth="2"
            opacity=".3"
          />
        </>
      )}
      <g fill="#2D2D2D">
        <ellipse cx="127" cy={character === "frog" ? 120 : 180} rx="6" ry="8" />
        <ellipse cx="194" cy={character === "frog" ? 120 : 180} rx="6" ry="8" />
      </g>
      <g fill="#F7C8D4">
        <ellipse cx="106" cy="198" rx="15" ry="8" />
        <ellipse cx="216" cy="198" rx="15" ry="8" />
      </g>
      <path
        d="M149 199Q160 210 171 199"
        fill="none"
        stroke="#2D2D2D"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {character !== "peach" && (
        <g fill={color} stroke="#2D2D2D" strokeWidth="2">
          <ellipse cx="109" cy="253" rx="24" ry="12" />
          <ellipse cx="211" cy="253" rx="24" ry="12" />
        </g>
      )}
      <ellipse
        cx="106"
        cy="151"
        rx="13"
        ry="7"
        fill="#FFFFFF"
        opacity=".55"
        transform="rotate(-35 106 151)"
      />
    </svg>
  );
}

function FoodArt({
  character,
  color,
  className,
  name,
}: {
  character: Character;
  color: string;
  className: string;
  name: string;
}) {
  return (
    <svg
      className={`character-art ${className}`}
      viewBox="0 0 320 300"
      role={name ? "img" : undefined}
      aria-label={name || undefined}
      aria-hidden={name ? undefined : true}
    >
      <ellipse
        cx="160"
        cy="250"
        rx="102"
        ry="13"
        fill="#2D2D2D"
        opacity=".08"
      />
      <g stroke="#2D2D2D" strokeWidth="2.5" strokeLinejoin="round">
        {character === "butter" && (
          <>
            <path
              d="M57 127L210 90L269 132L267 214L112 251L55 209Z"
              fill={color}
            />
            <path d="M57 127L112 169L267 132M112 169V251" fill="none" />
            <path
              d="M86 129L208 101L240 126L119 155Z"
              fill="none"
              opacity=".3"
            />
            <text
              x="149"
              y="136"
              fontFamily="Georgia,serif"
              fontSize="20"
              fill="#2D2D2D"
              stroke="none"
              transform="rotate(-13 149 136)"
            >
              BUTTER
            </text>
          </>
        )}
        {character === "cheese" && (
          <>
            <path
              d="M65 110L192 72L263 112L258 229L128 255L63 211Z"
              fill={color}
            />
            <path
              d="M65 110L131 151L263 112M131 151L128 255"
              fill="none"
              opacity=".22"
            />
            <g fill="#C89A50" strokeWidth="1.5">
              <ellipse cx="122" cy="161" rx="18" ry="11" />
              <ellipse cx="179" cy="124" rx="13" ry="10" />
              <ellipse cx="211" cy="163" rx="18" ry="12" />
              <circle cx="108" cy="214" r="12" />
              <circle cx="223" cy="202" r="8" />
            </g>
          </>
        )}
        {character === "pancakes" && (
          <>
            {[0, 1, 2].map((i) => (
              <g key={i}>
                <path
                  d={`M62 ${199 - i * 29}v18c0 40 197 40 197 0v-18`}
                  fill="#DCA66C"
                />
                <ellipse
                  cx="160"
                  cy={199 - i * 29}
                  rx="98"
                  ry="35"
                  fill="#FFCBA4"
                />
              </g>
            ))}
            <path
              d="M99 135Q103 117 132 127Q165 106 185 127Q229 127 228 147Q203 175 170 155Q140 174 118 154Q86 155 99 135Z"
              fill="#BC8752"
              stroke="none"
            />
            <path d="M137 117L171 110L193 124L158 134Z" fill="#FDE68A" />
            <path
              d="M137 117V130L158 144L193 134V124L158 134Z"
              fill="#FDE68A"
            />
          </>
        )}
        {character === "donut" && (
          <>
            <ellipse cx="160" cy="175" rx="105" ry="70" fill="#DCA66C" />
            <ellipse cx="160" cy="157" rx="104" ry="65" fill={color} />
            <ellipse cx="160" cy="156" rx="29" ry="19" fill="#F5F0E6" />
            {[
              [91, 143],
              [121, 121],
              [190, 114],
              [225, 145],
              [215, 177],
              [132, 191],
              [83, 170],
            ].map(([x, y], i) => (
              <path
                key={i}
                d={`M${x} ${y}l9 5`}
                stroke={["#FDE68A", "#7ECDC0", "#F5F0E6"][i % 3]}
                strokeWidth="5"
                strokeLinecap="round"
              />
            ))}
          </>
        )}
        {character === "egg" && (
          <>
            <path
              d="M49 184Q36 150 82 139Q86 98 123 115Q154 87 181 112Q226 95 237 130Q283 133 269 174Q284 210 242 219Q220 250 178 233Q126 256 103 232Q55 243 49 211Q34 197 49 184Z"
              fill="#FFFFFF"
            />
            <ellipse cx="164" cy="164" rx="52" ry="42" fill={color} />
            <path
              d="M137 147Q146 130 165 133"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </>
        )}
        {character === "mochi" && (
          <>
            <path
              d="M64 202C47 91 261 79 257 202C249 257 70 260 64 202Z"
              fill={color}
            />
            <path
              d="M140 103Q119 62 155 63Q182 46 189 75Q192 98 167 114Z"
              fill="#F7C8D4"
            />
            <path
              d="M145 68L148 52L161 61L175 46L178 63L191 56"
              fill="#7ECDC0"
            />
          </>
        )}
        {character === "loaf" && (
          <>
            <path
              d="M72 225V126Q53 87 98 80Q127 57 159 79Q207 53 244 87Q273 106 249 132V226Q249 247 227 247H94Q72 247 72 225Z"
              fill="#C88D54"
            />
            <path
              d="M87 225V124Q74 99 103 94Q129 77 158 94Q203 73 231 99Q248 111 234 129V225Q234 233 225 233H96Q87 233 87 225Z"
              fill="#F5F0E6"
            />
            <rect
              x="131"
              y="147"
              width="62"
              height="49"
              rx="9"
              fill={color}
              transform="rotate(-8 162 171)"
            />
          </>
        )}
      </g>
    </svg>
  );
}

export function ProductImage(props: {
  id: string;
  character: Character;
  color: string;
  name: string;
  className?: string;
}) {
  const { products } = useStore();
  const uploaded = products.find((product) => product.id === props.id)?.image;
  const hasStaticImage = initialProducts.some(
    (product) =>
      product.id === props.id &&
      product.character === props.character &&
      product.variants.some(
        (variant) => variant.color.toLowerCase() === props.color.toLowerCase(),
      ),
  );
  const imageId = `${props.id}-${props.color.replace("#", "").toLowerCase()}`;
  const source = uploaded || (hasStaticImage ? `/products/${imageId}.png` : "");
  const [loaded, setLoaded] = useState("");
  const [failed, setFailed] = useState("");
  return (
    <picture
      className={`product-picture ${source && loaded === source && failed !== source ? "loaded" : ""} ${props.className ?? ""}`}
    >
      {source && (
        <img
          src={source}
          style={failed === source ? { display: "none" } : undefined}
          alt={`${props.name}${uploaded ? "" : ", placeholder character visual"}`}
          loading="lazy"
          width="640"
          height="640"
          onLoad={() => {
            setLoaded(source);
            setFailed("");
          }}
          onError={() => {
            setFailed(source);
          }}
        />
      )}
      <CharacterArt character={props.character} color={props.color} />
    </picture>
  );
}
