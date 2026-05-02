const readingState = JSON.parse(sessionStorage.getItem("tarotReading") || "null");
const selectedIndex = Number(sessionStorage.getItem("tarotSelectedIndex") || 0);

if (!readingState || !Array.isArray(readingState.picks) || readingState.picks.length === 0) {
    window.location.href = "index.html";
} else {
    const entry = readingState.picks[Math.min(selectedIndex, readingState.picks.length - 1)];
    renderDetail(entry, readingState.question);
}

function renderDetail(entry, question) {
    const image = document.getElementById("detail-image");
    const meta = document.getElementById("detail-meta");
    const position = document.getElementById("detail-position");
    const name = document.getElementById("detail-name");
    const keywords = document.getElementById("detail-keywords");
    const questionNode = document.getElementById("detail-question");
    const meaning = document.getElementById("detail-meaning");
    const symbolism = document.getElementById("detail-symbolism");
    const advice = document.getElementById("detail-advice");
    const points = document.getElementById("detail-points");

    image.src = buildCardImageUrl(entry.card);
    image.alt = detailToSimplified(`${entry.card.name} ${entry.orientationLabel}`);
    image.referrerPolicy = "no-referrer";
    image.onerror = () => {
        image.onerror = null;
        image.src = buildDetailFallback(entry.card);
    };

    if (entry.reversed) {
        image.classList.add("reversed");
    }

    meta.textContent = detailToSimplified(`${entry.position} · ${entry.orientationLabel}`);
    position.textContent = detailToSimplified(`${entry.position} · ${entry.orientationLabel}`);
    name.textContent = detailToSimplified(`${entry.card.name} · ${entry.card.subtitle}`);
    keywords.textContent = detailToSimplified(`关键词：${entry.card.keywords.join(" / ")}`);
    questionNode.textContent = question ? detailToSimplified(`你的问题：${question}`) : "你的问题：本次为通用指引";
    meaning.textContent = detailToSimplified(entry.contextualMeaning);
    symbolism.textContent = detailToSimplified(entry.symbolism);
    advice.textContent = detailToSimplified(entry.contextualAdvice);

    const pointItems = [
        `单看牌义：${entry.baseMeaning}`,
        entry.card.bookLens ? `书中觉察视角：${entry.card.bookLens}` : null,
        `视觉线索：${entry.card.name} 会把注意力拉回到此刻最值得被看见的情绪、关系或行动。`,
        `这张牌的关键词是：${entry.card.keywords.join("、")}`
    ].filter(Boolean);

    points.innerHTML = "";
    pointItems.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = detailToSimplified(item);
        points.appendChild(li);
    });
}

function detailToSimplified(text) {
    const charMap = {
        "羅": "罗",
        "寫": "写",
        "記": "记",
        "關": "关",
        "鍵": "键",
        "詞": "词",
        "問": "问",
        "題": "题",
        "為": "为",
        "書": "书",
        "覺": "觉",
        "視": "视",
        "覺": "觉",
        "線": "线",
        "單": "单",
        "義": "义",
        "這": "这",
        "張": "张",
        "會": "会",
        "見": "见",
        "緒": "绪",
        "係": "系",
        "動": "动",
        "與": "与",
        "優": "优",
        "處": "处",
        "層": "层"
    };

    return String(text || "")
        .replaceAll("塔羅", "塔罗")
        .replaceAll("寫日記", "写日记")
        .replaceAll("關係", "关系")
        .replaceAll("關鍵詞", "关键词")
        .replace(/[羅寫記關鍵詞問題為書覺視線單義這張會見緒係動與優處層]/g, (char) => charMap[char] || char);
}

function buildCardImageUrl(card) {
    if (!card.imageFile) {
        return buildDetailFallback(card);
    }

    return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(card.imageFile)}`;
}

function buildDetailFallback(card) {
    const svg = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 500">
            <defs>
                <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stop-color="#f0d7a0" />
                    <stop offset="60%" stop-color="#b85c38" />
                    <stop offset="100%" stop-color="#182432" />
                </linearGradient>
            </defs>
            <rect width="300" height="500" rx="24" fill="#121212"/>
            <rect x="12" y="12" width="276" height="476" rx="18" fill="url(#bg)"/>
            <circle cx="150" cy="165" r="78" fill="none" stroke="rgba(255,245,224,0.8)" stroke-width="2"/>
            <text x="150" y="190" text-anchor="middle" font-size="58" fill="#fff8eb" font-family="Georgia">${card.name.slice(0, 2)}</text>
            <text x="150" y="430" text-anchor="middle" font-size="24" fill="#fff8eb" font-family="Georgia">${card.name}</text>
            <text x="150" y="456" text-anchor="middle" font-size="14" fill="rgba(255,248,235,0.85)" font-family="Georgia">${card.subtitle}</text>
        </svg>
    `;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
