import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "NexusFlow — AI 工作流程平台",
      description:
        "用於編排自主 AI 代理圖形的互動式視覺化畫布，具備即時狀態同步與節點式拖曳流水線功能。",
      tags: ["Next.js 14", "TypeScript", "React Flow", "Supabase"],
      badge: "v2.4 已上線",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBvPO88_ruWg5Zb2eHm9pq-4kxhmFU-ZicJTX-xcbbMUiCuGfEz7iVriS5MGoyC4H9vSVSUWoTd-8ZWVpFMw8IV5hiPHu1E64sJrSKMCayZL41nb0vQ37T_HMeVrV7wELmhQDxItsjqTeQTG8B7LbLYCKQkOSzZ6iL4QvY9X4EgEJtDpsEl9C31zB2hS3Cjv2cybgRxYSEQ8Wubdp7mo0b738ouN-cBXbY90hUykd_Zz8CLIqHUG-FX8Q",
    },
    {
      title: "CloudPulse — 指標監控引擎",
      description:
        "高吞吐量遙測與微服務監控儀表板，能在海量事件串流中進行亞秒級的即時資料彙總分析。",
      tags: ["React", "TypeScript", "ClickHouse", "WebSockets"],
      badge: "5000萬+ 事件",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAaNzyQsgjYdCtsZ6nQsHHfEgixvhf_ckZRWVaQEcgGTIV02KSw5NijryfVGqCUYFKzA7YVBr069EQDOM9k8dnSptSteZWGTFsSptSteZWGTF5gxqtHqLkERsrs3GyJimvaCpwBWV5unH7z_ejcYzVEsTCiNk3466kBO1a-HY7gj4n6uppCy9zk58zvcJU-8aUsQRPeUxbDujnx9M27NJBcElHLvkbj7b9plHB6eU61cVVbTVwpNX0HouxqrgB8r6nh0w",
    },
    {
      title: "DevSync — 協同知識庫",
      description:
        "本地優先、端到端加密的 Markdown 工作空間，支援即時 P2P CRDT 協同編輯與離線向量搜尋。",
      tags: ["Next.js", "Yjs CRDT", "WebRTC", "PostgreSQL"],
      badge: "CRDT Ready",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAQrwQWJhOqzF7hW8ockDEYSz_f4OeTfZDGoYjy_fcXq8fHuCKMWr5moZDTbiGyUDunXsfR4WdJpy3fbEL31dTrBoCBquobh2osZ_-CebiNG4sXNVBYyEESJR6DkjZ8Mye-DiB5Edp7ncSZMjH3NTZ11Q6jVuAYLgUZI-niJ5rcbWRcAWYHtgxTVeb47uJSWKUH8nYmEaM1NXli1nrAGmuBvnT31pZwd4No6tCG_0WQ_GzGX6CV_7MsOw",
    },
  ];

  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#">
            <span className="brand-icon">▣</span>
            <strong>DevPortfolio</strong>
            <i />
          </a>
          <nav aria-label="主要導覽">
            <a href="#">首頁</a>
            <a href="#about">關於我</a>
            <a className="active" href="#projects">
              作品集
            </a>
          </nav>
          <a className="contact-button" href="mailto:alex.chen.dev@example.com">
            ✉ <span>聯絡我</span>
          </a>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-orb hero-orb-left" />
          <div className="hero-orb hero-orb-right" />
          <div className="hero-grid container">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="status-dot" />
                前端與網頁開發者
              </div>
              <p className="hello">嗨，我是 Alex Chen</p>
              <h1>
                打造高擴展性、
                <span>現代化網頁</span>
                <br />
                體驗
              </h1>
              <p className="subtitle">
                資深前端工程師，專精於 React、Next.js 與 TypeScript。熱衷於構建兼具無障礙設計、極致效能與細緻視覺質感的數位架構。
              </p>
              <div className="chips">
                <span>◆ <b>5 年以上經驗</b></span>
                <span>↗ <b>40+ 專案交付</b></span>
                <span>⌘ <b>開源專案貢獻者</b></span>
              </div>
              <div className="actions">
                <a className="primary" href="#projects">
                  瀏覽作品 ↓
                </a>
                <a className="secondary" href="#contact">
                  ✉ 聯絡我
                </a>
                <a className="download" href="#">
                  ⇩ 下載簡歷 (PDF)
                </a>
              </div>
            </div>

            <div className="console" aria-label="Developer configuration">
              <div className="console-bar">
                <div className="traffic">
                  <i />
                  <i />
                  <i />
                </div>
                <div className="console-title">‹› &nbsp; DeveloperConfig.ts</div>
                <div />
              </div>
              <div className="code">
                <p>
                  <em>interface</em> <b>FullStackEngineer</b> &#123;
                </p>
                <p>
                  &nbsp;&nbsp;name: <span>&apos;Alex Chen&apos;</span>;
                </p>
                <p>
                  &nbsp;&nbsp;role: <span>&apos;Senior Frontend Engineer&apos;</span>;
                </p>
                <p>&nbsp;&nbsp;stack: <em>string</em>[];</p>
                <p>&nbsp;&nbsp;available: <b>boolean</b>;</p>
                <p>
                  &nbsp;&nbsp;execute: () =&gt; <em>Promise</em>&lt;<span>&apos;NextGenWeb&apos;</span>&gt;;
                </p>
                <p>&#125;</p>
                <p>
                  <em>export const</em> <b>alex</b>: <b>FullStackEngineer</b> = &#123;
                </p>
                <p>
                  &nbsp;&nbsp;name: <span>&apos;Alex Chen&apos;</span>,
                </p>
                <p>
                  &nbsp;&nbsp;role: <span>&apos;Lead Architect&apos;</span>,
                </p>
                <p>
                  &nbsp;&nbsp;stack: [<span>&apos;React&apos;</span>, <span>&apos;TypeScript&apos;</span>,{" "}
                  <span>&apos;Next.js&apos;</span>],
                </p>
                <p>
                  &nbsp;&nbsp;available: <b>true</b>,
                </p>
                <p>
                  &nbsp;&nbsp;execute: <em>async</em> () =&gt;{" "}
                  <span>&apos;Production Ready&apos;</span>
                </p>
                <p>&#125;;</p>
              </div>
              <div className="console-status">
                <span>✓ TypeScript v5.4.2 編譯成功</span>
                <small>UTF-8</small>
              </div>
            </div>
          </div>
        </section>

        <section className="projects container" id="projects">
          <div className="section-heading">
            <div>
              <span className="kicker">作品集</span>
              <h2>精選專案</h2>
              <p>精選的客戶平台、SaaS 產品與分散式軟體系統開發成果。</p>
            </div>
            <span className="project-count">
              <i />展示 3 / 共 18 件專案
            </span>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image">
                  <img src={project.image} alt="" />
                  <span>{project.badge}</span>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="card-links">
                    <a href="#">⌘ &nbsp; 原始碼</a>
                    <a href="#">線上預覽 ↗</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact container" id="contact">
          <div className="contact-card">
            <div className="eyebrow">
              <span className="status-dot" />可協作專案
            </div>
            <h2>
              讓我們攜手打造 <span>卓越不凡</span>
              <br />的數位產品
            </h2>
            <p>
              目前開放接受網站架設設計、技術諮詢委託，以及全端開發專案的合作洽談。
            </p>
            <div className="contact-actions">
              <a className="primary" href="mailto:alex.chen.dev@example.com">
                ◎ 發送電子郵件
              </a>
              <a className="secondary" href="#">
                ▣ 預約線上會議
              </a>
            </div>
            <a className="email" href="mailto:alex.chen.dev@example.com">
              ✉ alex.chen.dev@example.com <small>複製</small>
            </a>
            <div className="social">
              <a href="#">GitHub</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter/X</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div>
            <strong>DevPortfolio<i /></strong>
            <p>© 2025 DevPortfolio. 保留所有權利。</p>
          </div>
          <span className="footer-code">
            ‹› &nbsp; 基於 Next.js、Tailwind CSS 與 Framer Motion 建構
          </span>
          <div className="footer-icons">
            <span>▣</span>
            <span>♢</span>
            <span>◎</span>
          </div>
        </div>
      </footer>
    </>
  );
}
