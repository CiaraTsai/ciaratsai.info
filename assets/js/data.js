// Centralized i18n Data for English and Traditional Chinese
const i18nData = {
    en: {
        nav: {
            about: "About",
            skills: "Skills",
            experience: "Experience",
            projects: "Projects",
            contest: "Contest",
            books: "Books",
            contact: "Contact",
            donate: "Donate"
        },
        hero: {
            greeting: "Hello, I'm",
            resumeBtn: "View Resume",
            contactBtn: "Get In Touch"
        },
        sectionTitles: {
            about: "About Me",
            skills: "Tech Stack & Skills",
            experience: "Work Experience",
            projects: "Software Projects",
            contest: "Contest",
            books: "Publications & Books",
            contact: "Contact Me",
            donate: "Support My Work"
        },
        donate: {
            subtitle: "If you find my open-source projects or articles helpful, consider supporting my work to help me keep building!",
            coffee: {
                title: "Buy Me A Coffee",
                desc: "Fuel my late-night coding sessions with a cup of coffee. It's the standard developer currency!",
                btn: "Support Me"
            },
            github: {
                title: "GitHub Sponsors",
                desc: "Sponsor me directly on GitHub to support my ongoing open-source contributions.",
                btn: "Become a Sponsor"
            },
            crypto: {
                title: "Crypto (USDT / ETH)",
                desc: "I also accept crypto donations. Click the address below to copy it directly."
            }
        },
        contact: {
            title: "Let's work together!",
            subtitle: "Looking for a seasoned developer? Let's talk.",
            namePlaceholder: "Your Name",
            emailPlaceholder: "your.email@example.com",
            messagePlaceholder: "How can I help you?",
            submitBtn: "Send Message"
        },
        profile: {
            name: "Ciara Tsai",
            effectName: "Ciara Tsai",
            effectHoverName: "Yen Ju Tsai",
            hoverName: "Ciara Tsai",
            title: "Senior Software Engineer",
            slogan: "Doing my best to move the world perfectly one step forward is my definition of success.",
            about: [
                "I am a Senior Software Engineer specializing in backend architecture, database systems, distributed systems, and high-throughput real-time platforms.",
                "I enjoy solving performance and reliability challenges in high-traffic and high-concurrency environments, and building scalable and reliable backend services. My experience includes system architecture, performance optimization, large-scale data processing, cloud deployment, and production troubleshooting.",
                "Beyond software engineering, I have contributed to several software development books and participated in data-driven social impact projects. One of these projects, a child violence risk assessment system, was ranked in the Top 5 of the Presidential Hackathon."
            ]
        },
        education: [
            {
                school: "National Cheng Kung University",
                major: "Master in Institute of Manufacturing Information and Systems",
                period: "2012 - 2014"
            },
            {
                school: "Southern Taiwan University of Science and Technology",
                major: "B.S. in Department of Information Management",
                period: "2008 - 2012"
            }
        ],
        skills: [
            {
                category: "Languages", items: [
                    ".NET Core (C#)", "Go", "Java", "JavaScript"
                ]
            },
            {
                category: "Backend", items: [
                    "RESTful API", "WebSocket", "SignalR", "Microservices", "Distributed Systems"
                ]
            },
            {
                category: "Databases", items: [
                    "MongoDB", "MSSQL", "PostgreSQL", "MariaDB", "MySQL", "Redis"
                ]
            },
            {
                category: "Messaging", items: [
                    "Kafka", "RabbitMQ"
                ]
            },
            {
                category: "Cloud / Infrastructure", items: [
                    "AWS", "Kubernetes", "Docker", "Rancher", "GitLab CI/CD"
                ]
            },
            {
                category: "Observability", items: [
                    "ELK", "OpenTelemetry", "Grafana"
                ]
            },
            {
                category: "Methodologies", items: [
                    "Scrum", "Agile", "Technical Leadership"
                ]
            }
        ],
        experience: [
            {
                id: 0,
                role: "Sr. Software Engineer",
                company: "Higgs, Taiwan",
                period: "03/2022 - Present",
                project: "Sportsbook",
                description: [
                    "Built and maintained backend services for a high-traffic real-time platform, supporting low-latency data processing and business workflows.",
                    "Integrated Kafka for real-time event streaming, centralized logging, and system monitoring, improving service observability and troubleshooting.",
                    "Optimized system performance and reliability by resolving memory and database bottlenecks, improving service stability during peak traffic.",
                    "Led production releases and deployments, coordinating engineers and cross-functional teams to deliver system updates on AWS using Docker and Kubernetes.",
                    "Led and mentored junior engineers through development planning, technical POCs, system architecture and design, and production troubleshooting."
                ],
                technologies: [".NET (C#)", "Kafka", "Redis", "MongoDB", "AWS", "Docker", "Kubernetes"]
            },
            {
                id: 1,
                role: "Sr. Software Engineer",
                company: "SianYie Software Development Ltd., Taiwan",
                period: "11/2019 - 03/2022",
                project: "Royal Slot Game Service, Fortune99, Bingo50",
                description: [
                    "Built RESTful APIs and backend services supporting 18,000 concurrent users and around 6,000 RPS.",
                    "Designed and maintained backend data processing systems handling over 150 million records per day.",
                    "Introduced Go to the team to build high-performance in-memory caching services, reducing database load and improving response times.",
                    "Designed wallet and reward systems with RabbitMQ and Redis to ensure reliable transaction processing and prevent duplicate charges."
                ],
                technologies: [".NET (C#)", "Golang", "Redis", "MSSQL", "AWS", "PostgreSQL", "RabbitMQ", "Docker", "JavaScript"]
            },
            {
                id: 2,
                role: "Backend & Database Engineer",
                company: "Royal Image Ltd., Taiwan",
                period: "03/2018 - 10/2019",
                project: "Royal Live Entertainment Online Game, Royal Platform",
                description: [
                    "Designed high-performance database architectures on AWS Aurora MySQL and MariaDB, processing 5M+ real-time records daily.",
                    "Optimized game server performance, increasing supported concurrent players from 300+ to 600+ through backend and system-level improvements.",
                    "Helped refactor game server components into microservices, improving service modularity and maintainability.",
                    "Developed .NET Core Web APIs for external platform integrations and deployed production services to AWS.",
                    "Built backend management systems for accounting and customer reporting, and participated in 24/7 production troubleshooting and on-call support."
                ],
                technologies: [".NET (C#)", "Laravel", "JavaScript", "Redis", "MariaDB", "AWS Aurora MySQL", "Java", "Docker"]
            },
            {
                id: 3,
                role: "Database Engineer / Tech Lead",
                company: "Phoenix Tree Technology Ltd, Taiwan",
                period: "01/2017 - 02/2018",
                project: "Lambo Game Platform",
                description: [
                    "Promoted to Tech Lead, leading 2 junior database engineers to deliver the Lambo Game Platform and coordinating technical requirements between Taiwan and Shenzhen engineering teams.",
                    "Researched new technologies and helped make architecture and implementation decisions for backend and database systems."
                ],
                technologies: [".NET MVC & Core (C#)", "JavaScript", "Redis", "MSSQL", "Message Queue (NetMQ)"]
            },
            {
                id: 4,
                role: "Backend & Database Engineer",
                company: "Phoenix Tree Technology Ltd, Taiwan",
                period: "10/2014 - 01/2017",
                project: "Lambo Game Platform, Binary Option Trading Platform, StarNet",
                description: [
                    "Developed backend and administration systems using .NET, MSSQL, Redis, MongoDB, SignalR, and NetMQ.",
                    "Designed deposit and withdrawal workflows and integrated third-party payment APIs to support core financial transaction flows.",
                    "Designed and implemented database architecture and backend business logic for game platforms, administration systems, and accounting/reporting workflows."
                ],
                technologies: [".NET MVC & Core (C#)", "JavaScript", "Redis", "MSSQL", "NetMQ", "SignalR", "Angular", "MongoDB"]
            }
        ],
        projects: [
            {
                id: "trading-platform",
                hidden: true,
                type: "Distributed System (FinTech)",
                title: "High-Frequency Financial Trading Platform",
                description: [
                    "Architected a Tier-1 high-frequency real-time financial trading platform processing live foreign exchange quotes under massive traffic.",
                    "Designed low-latency socket communication channels utilizing SignalR and NetMQ (ZeroMQ) to calculate ROI and risk metrics instantaneously."
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-binaryoptions.html" target="_blank" class="project-link">View Architecture <i data-lucide="external-link"></i></a>`
            },
            {
                id: "cloud-capp",
                hidden: true,
                type: "Cloud Architecture (PaaS/SaaS)",
                title: "Cloud-based Predictive Manufacturing System",
                description: [
                    "Engineered an auto-scaling, cloud-native validation service on Windows Azure utilizing WCF and Java.",
                    "Simulated tool path cutting and intelligent machine recommendations, processing massive datasets to prevent critical mechanical collisions in million-dollar manufacturing lines."
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-capp.html" target="_blank" class="project-link">View Architecture <i data-lucide="external-link"></i></a>`
            },
            {
                id: "auto-testing",
                hidden: true,
                type: "CI/CD & Testing Infrastructure",
                title: "Automated Software Verification Cloud",
                description: [
                    "Designed a fully automated software verification workflow engine utilizing BPEL and Azure distributed services.",
                    "Created parallel-processing testing pipelines to validate SaaS products against strict cloud development frameworks automatically."
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-SVM.html" target="_blank" class="project-link">View Workflow <i data-lucide="external-link"></i></a>`
            }
        ],
        contest: [
            {
                id: "d4sg",
                type: "Top 5 — Presidential Hackathon | 2018",
                title: "Pre-Warning Violence Risk Management Platform",
                description: [
                    "Collaborated with the Domestic Violence Prevention Center (D4SG Fellowship) to architect a predictive big-data platform.",
                    "Aggregated cross-departmental datasets to build a pre-warning risk management model identifying high-risk cases.",
                    "2019 — Participated in the Ministry of Health and Welfare's (MOHW) planning project for child violence risk assessment in Taiwan.",
                    "2018 — D4SG Data Hero with Taipei and New Taipei City, developing data-driven solutions for the prevention of domestic violence and sexual assault."
                ],
                linkHtml: `
                    <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                        <a href="https://d4sg.dsp.im/fellowship/heroes/#:~:text=%E5%85%92%E5%B0%91%E6%9A%B4%E5%8A%9B%E9%A2%A8%E9%9A%AA%E9%A0%90%E8%AD%A6%E7%AE%A1%E7%90%86" target="_blank" class="project-link">View Fellowship <i data-lucide="external-link"></i></a>
                        <a href="https://s.itho.me/events/2018/egov/B-1550.pdf" target="_blank" class="project-link">Project Report <i data-lucide="file-text"></i></a>
                    </div>`
            }
        ],
        books: [
            {
                id: "book-laravel",
                type: "Publication (Author, Tech Lead)",
                title: "PHP動態網站系統開發與Laravel框架運用",
                description: "Authored a comprehensive technical book published in August 2020 detailing enterprise PHP architectures, modern Laravel design patterns, and containerized deployments.",
                linkHtml: `<a href="https://www.kingstone.com.tw/basic/2013120556508/" target="_blank" class="project-link">View Publication <i data-lucide="external-link"></i></a>`
            },
            {
                id: "book-azure",
                type: "Publication (Author, Tech Lead)",
                title: "Microsoft Azure雲端程式設計: 使用 ASP.NET MVC開發",
                description: "Authored a technical book published in October 2016 exploring deep integrations between ASP.NET MVC frameworks and Azure Cloud services for large-scale enterprise solutions.",
                linkHtml: `<a href="https://www.eslite.com/product/1001120322543924?srsltid=AfmBOoqzna7f63X_GNVA0HDvMSwLHLV1imvhQhWn11AXdeIr1SXCik92" target="_blank" class="project-link">View Publication <i data-lucide="external-link"></i></a>`
            },
            {
                id: "book-php-mysql",
                type: "Publication (Co-Author)",
                title: "PHP+MySQL網站系統開發講座（第二版）",
                description: "A comprehensive introductory guide for PHP and MySQL web development published in 2013. The second edition covers hands-on system architecture, database design, and cloud deployment on Windows Azure.",
                linkHtml: `<a href="https://www.eslite.com/product/1001120322269515?srsltid=AfmBOoq7ox8gKpudSwkHwNF9t4E4goqW89BhW8Bt9wVLQkdd-Pwr4FxW" target="_blank" class="project-link">View Publication <i data-lucide="external-link"></i></a>`
            }
        ]
    },
    zh: {
        nav: {
            about: "關於我",
            skills: "專業技能",
            experience: "工作經歷",
            projects: "重點專案",
            contest: "競賽獲獎",
            books: "出版著作",
            contact: "聯絡我",
            donate: "贊助支持"
        },
        hero: {
            greeting: "你好，我是",
            resumeBtn: "檢視履歷",
            contactBtn: "與我聯絡"
        },
        sectionTitles: {
            about: "關於我",
            skills: "技術棧與專業技能",
            experience: "工作經歷",
            projects: "系統架構實戰",
            contest: "競賽與社會影響力",
            books: "出版著作",
            contact: "聯絡我",
            donate: "支持我的創作"
        },
        donate: {
            subtitle: "如果您覺得我的開源專案、文章或是這些經歷帶給您某些啟發，歡迎您贊助支持，讓我有更多動力繼續創作！",
            coffee: {
                title: "請我喝杯咖啡",
                desc: "用一杯香醇的咖啡，為我深夜的程式開發注入滿滿活力！這也是工程師世界的標準硬通貨！",
                btn: "贊助一杯咖啡"
            },
            github: {
                title: "GitHub 贊助",
                desc: "直接透過 GitHub Sponsors 支持我，鼓勵我持續參與並貢獻開源專案。",
                btn: "成為贊助者"
            },
            crypto: {
                title: "加密貨幣 (USDT / ETH)",
                desc: "我也接受加密貨幣贊助。點擊下方錢包地址可直接複製："
            }
        },
        contact: {
            title: "攜手合作，共創卓越",
            subtitle: "正在尋找具備深厚架構經驗的資深工程師？歡迎隨時與我聯繫！",
            namePlaceholder: "您的姓名",
            emailPlaceholder: "your.email@example.com",
            messagePlaceholder: "請描述您的需求或想聊聊的主題...",
            submitBtn: "發送訊息"
        },
        profile: {
            name: "蔡燕如",
            effectName: "蔡燕如",
            effectHoverName: "Ciara Tsai",
            hoverName: "蔡燕如",
            title: "資深軟體工程師",
            slogan: "盡我所能，推動世界往更美好的方向前進一步，即是我對成功的定義。",
            about: [
                "我是一名資深軟體工程師，專長於後端架構、資料庫系統、分散式系統，以及高吞吐量的即時平台。",
                "我喜歡解決高流量與高併發環境下的效能與穩定性問題，並打造具備高擴展性與可靠性的後端服務。過去的經驗涵蓋系統架構設計、效能優化、大規模資料處理、雲端部署，以及 Production 問題排查。",
                "除了軟體工程工作之外，我也曾參與多本軟體開發相關書籍的撰寫，並參與資料驅動的社會影響力專案。其中一套兒童暴力風險評估系統曾獲選總統盃黑客松 Top 5。"
            ]
        },
        education: [
            {
                school: "國立成功大學 (NCKU)",
                major: "製造資訊與系統研究所 碩士",
                period: "2012 - 2014"
            },
            {
                school: "南臺科技大學 (STUST)",
                major: "資訊管理系 學士",
                period: "2008 - 2012"
            }
        ],
        skills: [
            {
                category: "Languages (程式語言)", items: [
                    ".NET Core (C#)", "Go", "Java", "JavaScript"
                ]
            },
            {
                category: "Backend (後端架構)", items: [
                    "RESTful API", "WebSocket", "SignalR", "Microservices", "Distributed Systems"
                ]
            },
            {
                category: "Databases (資料庫系統)", items: [
                    "MongoDB", "MSSQL", "PostgreSQL", "MariaDB", "MySQL", "Redis"
                ]
            },
            {
                category: "Messaging (訊息佇列)", items: [
                    "Kafka", "RabbitMQ"
                ]
            },
            {
                category: "Cloud / Infrastructure (雲端與維運)", items: [
                    "AWS", "Docker", "Rancher", "GitLab CI/CD"
                ]
            },
            {
                category: "Observability (可觀測性與監控)", items: [
                    "ELK", "OpenTelemetry", "Grafana"
                ]
            },
            {
                category: "Methodologies (專案方法與領導)", items: [
                    "Scrum", "Agile", "Technical Leadership"
                ]
            }
        ],
        experience: [
            {
                id: 0,
                role: "資深軟體工程師 (Sr. Software Engineer)",
                company: "Higgs, Taiwan",
                period: "03/2022 - 在職中",
                project: "Sportsbook",
                description: [
                    "建置並維護高流量即時平台的後端服務，支援低延遲資料處理與關鍵業務流程運算。",
                    "整合 Kafka 實現即時事件流處理、集中式 Log 收集與系統監控，大幅提升微服務的可觀測性與除錯效率。",
                    "針對記憶體與資料庫瓶頸進行效能優化，顯著提升尖峰流量期間的系統穩定性與可靠度。",
                    "主導 Production 發版與部署，協調跨職能團隊與工程師在 AWS 上利用 Docker 與 Kubernetes 交付系統更新。",
                    "帶領並指導初階工程師，涵蓋開發規劃、技術概念驗證 (POC)、系統架構設計與線上維運排查。"
                ],
                technologies: [".NET (C#)", "Kafka", "Redis", "MongoDB", "AWS", "Docker"]
            },
            {
                id: 1,
                role: "資深軟體工程師 (Sr. Software Engineer)",
                company: "享奕軟體開發有限公司 (SianYie Software Development Ltd., Taiwan)",
                period: "11/2019 - 03/2022",
                project: "Royal Slot Game Service, Fortune99, Bingo50",
                description: [
                    "建置 RESTful APIs 與後端服務，支援 18,000 同時在線使用者 (CCU) 與約 6,000 RPS。",
                    "設計並維護後端資料處理系統，每日穩定處理超過 1.5 億筆資料記錄。",
                    "為團隊導入 Go (Golang) 打造高效能記憶體資料快取服務，大幅降低資料庫負載並提升回應效能。",
                    "使用 RabbitMQ 與 Redis 設計電子錢包與獎勵系統，確保高可靠交易處理並杜絕重複扣款/操作。"
                ],
                technologies: [".NET (C#)", "Golang", "Redis", "MSSQL", "AWS", "PostgreSQL", "RabbitMQ", "Docker", "JavaScript"]
            },
            {
                id: 2,
                role: "後端與資料庫工程師 (Backend & Database Engineer)",
                company: "兆威數位媒體有限公司 (Royal Image Ltd., Taiwan)",
                period: "03/2018 - 10/2019",
                project: "Royal Live Entertainment Online Game, Royal Platform",
                description: [
                    "在 AWS Aurora MySQL 與 MariaDB 上設計高效能資料庫架構，每日即時處理 500 萬筆以上交易紀錄。",
                    "優化遊戲伺服器效能，透過後端與系統層面調校將同時在線玩家容量由 300+ 翻倍至 600+ 且零延遲衰退。",
                    "協助將遊戲伺服器架構重構為微服務 (Microservices)，提高服務模組化與可維護性。",
                    "開發 .NET Core Web APIs 供外部平台介接，並將正式環境服務部署至 AWS。",
                    "建置後台管理系統以供會計與客戶報表生成，並參與 24/7 生產環境線上維護與 On-call 支援。"
                ],
                technologies: [".NET (C#)", "Laravel", "JavaScript", "Redis", "MariaDB", "AWS Aurora MySQL", "Java", "Docker"]
            },
            {
                id: 3,
                role: "資料庫工程主管 (Database Engineer / Tech Lead)",
                company: "薩摩亞商鳳之梧數位科技有限公司台灣分公司 (Phoenix Tree Technology Ltd, Taiwan)",
                period: "01/2017 - 02/2018",
                project: "Lambo Game Platform",
                description: [
                    "晉升為技術主管 (Tech Lead)，帶領 2 位資料庫工程師如期交付 Lambo Game Platform，並協調台灣與深圳工程團隊之跨國技術對接。",
                    "研究前沿新技術，為後端與資料庫系統之架構設計與實作提供關鍵技術選型決策。"
                ],
                technologies: [".NET MVC & Core (C#)", "JavaScript", "Redis", "MSSQL", "Message Queue (NetMQ)"]
            },
            {
                id: 4,
                role: "後端與資料庫工程師 (Backend & Database Engineer)",
                company: "薩摩亞商鳳之梧數位科技有限公司台灣分公司 (Phoenix Tree Technology Ltd, Taiwan)",
                period: "10/2014 - 01/2017",
                project: "Lambo Game Platform, Binary Option Trading Platform, StarNet",
                description: [
                    "使用 .NET、MSSQL、Redis、MongoDB、SignalR 與 NetMQ 開發後端服務與管理後台系統。",
                    "設計安全性存提款工作流並整合第三方金流 API，支援核心金融交易處理架構。",
                    "為遊戲平台、管理後台以及會計／報表工作流程規劃並實作資料庫架構與後端商業邏輯。"
                ],
                technologies: [".NET MVC & Core (C#)", "JavaScript", "Redis", "MSSQL", "NetMQ", "SignalR", "Angular", "MongoDB"]
            }
        ],
        projects: [
            {
                id: "trading-platform",
                hidden: true,
                type: "分散式系統架構 (金融科技)",
                title: "高頻一級流量金融期權交易平台",
                description: [
                    "架構並開發能承受龐大一級流量 (Tier-1 Traffic) 的高頻即時外匯金融交易平台。",
                    "設計並實作基於 SignalR 與 NetMQ (ZeroMQ) 的低延遲 Socket 通訊層，能即時消化海量報價資料流，並瞬間為千萬筆訂單精確運算投資報酬率與風險控管模型。"
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-binaryoptions.html" target="_blank" class="project-link">檢視架構細節 <i data-lucide="external-link"></i></a>`
            },
            {
                id: "cloud-capp",
                hidden: true,
                type: "雲端系統架構 (PaaS/SaaS)",
                title: "輪框設計與機台智能推薦雲端服務",
                description: [
                    "於 Windows Azure (WCF, Java) 上建構具備 Auto-Scaling 能力的智慧型 SaaS 雲端驗證系統。",
                    "該平台負責處理海量模擬運算，預先驗算刀具切削路徑並推薦最佳機台，為造價千萬的生產線防範毀滅性碰撞。"
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-capp.html" target="_blank" class="project-link">檢視架構細節 <i data-lucide="external-link"></i></a>`
            },
            {
                id: "auto-testing",
                hidden: true,
                type: "CI/CD 與測試基礎建設",
                title: "自動化軟體檢測雲端工作流系統",
                description: [
                    "結合 BPEL 與 Azure 分散式運算資源，設計並開發全自動化的雲端軟體檢測流程引擎 (Workflow Engine)。",
                    "實作平行處理機制以驗證大型 SaaS 軟體服務是否符合嚴格的開發框架與安全規範。"
                ],
                linkHtml: `<a href="https://ciaratsai.github.io/ciaratsai.info/Projects/project-SVM.html" target="_blank" class="project-link">檢視工作流細節 <i data-lucide="external-link"></i></a>`
            }
        ],
        contest: [
            {
                id: "d4sg",
                type: "總統盃黑客松 Top 5 (2018)",
                title: "兒少暴力風險預警管理平台 (D4SG)",
                description: [
                    "以資料英雄 (Data Engineer) 身份與家防中心合作，處理跨政府部門的龐大機敏數據。",
                    "建構一套高風險暴力家庭的預警模型大數據平台，負責資料清理整合、ETL 管道搭建與預測架構實作以提早通報社工單位。",
                    "2019 年參與衛福部臺灣兒少暴力風險評估之規劃專案。",
                    "2018 年擔任臺北市與新北市家庭暴力暨性侵害防治中心 D4SG 資料英雄，透過資料科學協助預防家暴與兒少危機。"
                ],
                linkHtml: `
                    <div style="display: flex; flex-direction: column; gap: 10px; width: 100%;">
                        <a href="https://d4sg.dsp.im/fellowship/heroes/#:~:text=%E5%85%92%E5%B0%91%E6%9A%B4%E5%8A%9B%E9%A2%A8%E9%9A%AA%E9%A0%90%E8%AD%A6%E7%AE%A1%E7%90%86" target="_blank" class="project-link">檢視專案記錄 <i data-lucide="external-link"></i></a>
                        <a href="https://s.itho.me/events/2018/egov/B-1550.pdf" target="_blank" class="project-link">專案報告 <i data-lucide="file-text"></i></a>
                    </div>`
            }
        ],
        books: [
            {
                id: "book-laravel",
                type: "出版書籍 (作者群與技術主導)",
                title: "PHP動態網站系統開發與Laravel框架運用",
                description: "於 2020 年 8 月出版之技術專書，深度探討企業級 PHP 開發模式、現代化 Laravel 框架設計與架構實踐。",
                linkHtml: `<a href="https://www.kingstone.com.tw/basic/2013120556508/" target="_blank" class="project-link">檢視書籍資訊 <i data-lucide="external-link"></i></a>`
            },
            {
                id: "book-azure",
                type: "出版書籍 (作者群與技術主導)",
                title: "Microsoft Azure雲端程式設計: 使用 ASP.NET MVC開發",
                description: "於 2016 年 10 月發行之雲端技術專書。內容涵蓋 ASP.NET MVC 框架如何與大規模微軟 Azure 雲端服務進行深度整合架構與應用。",
                linkHtml: `<a href="https://www.eslite.com/product/1001120322543924?srsltid=AfmBOoqzna7f63X_GNVA0HDvMSwLHLV1imvhQhWn11AXdeIr1SXCik92" target="_blank" class="project-link">檢視書籍資訊 <i data-lucide="external-link"></i></a>`
            },
            {
                id: "book-php-mysql",
                type: "出版書籍 (共同作者)",
                title: "PHP+MySQL網站系統開發講座（第二版）",
                description: "專為初學者設計的 PHP 和 MySQL 程式設計入門書，結合實戰範例講解，第二版特別增加公有雲 Windows Azure 上架設與部署 PHP 程式及資料庫連結經驗分享。",
                linkHtml: `<a href="https://www.eslite.com/product/1001120322269515?srsltid=AfmBOoq7ox8gKpudSwkHwNF9t4E4goqW89BhW8Bt9wVLQkdd-Pwr4FxW" target="_blank" class="project-link">檢視書籍資訊 <i data-lucide="external-link"></i></a>`
            }
        ]
    }
};

const contactsData = {
    email: "hpp121@gmail.com",
    github: "https://github.com/CiaraTsai",
    gitlab: "https://gitlab.com/CiaraTsai",
    linkedin: "https://www.linkedin.com/in/yen-ju-tsai-0544676b/",
    resume: "https://www.dropbox.com/scl/fi/6lqwdc0pd5e56xbyihldx/2022-Ciara-Tsai-Online-Resume.docx?rlkey=154g9lxwqslar378pp6c9epgg&st=xa9p2ako&dl=0"
};
