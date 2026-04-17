const projects = [
    {
        id: "chembomas",
        title: "ChemBOMAS",
        subtitle: "Nature Machine Intelligence (预投) | 共同一作（学生第一）",
        tags: ["LLM-Enhanced", "Multi-Agent", "Bayesian Optimization"],
        date: "2025.06 - 2026.04",
        image: "./statics/chembomas.png", 
        link: "https://arxiv.org/pdf/2509.08736",
        description: `
            <h3>📌 解决痛点</h3>
            <p>传统贝叶斯优化（BO）在化学实验中面临两大瓶颈：<strong>数据稀缺（冷启动）</strong>与<strong>高维搜索空间</strong>。现有方法难以在两者间取得平衡。</p>
            
            <h3>💡 核心算法创新</h3>
            <ul>
                <li><strong>LLM 增强多智能体系统：</strong>独立负责全流程代码实现，主导 LLM 微调核心开发，设计化学感知提示工程与伪数据精炼机制。</li>
                <li><strong>双模块协同：</strong>提出知识驱动搜索空间分解与数据驱动伪数据生成双模块协同框架。</li>
                <li><strong>分布式训练：</strong>在 <strong>2×A800 GPU</strong> 上实现高效分布式训练。</li>
            </ul>

            <h3>🚀 实验成果</h3>
            <ul>
                <li><strong>性能与效率：</strong>仅需 <strong>1% 标注样本</strong>下，将贝叶斯优化效率提升 <strong>5 倍</strong>，在 3 个化学反应基准测试中实现 SOTA 性能（最优结果提升 <strong>3-10%</strong>，收敛加速 <strong>2-5 倍</strong>）。</li>
                <li><strong>湿实验验证：</strong>在仅 <strong>2 轮迭代</strong>即发现 <strong>96% 产率</strong>的最优条件，显著超越专家传统方法。</li>
            </ul>
        `
    },
    {
        id: "imvccea",
        title: "IMvCCEA",
        subtitle: "TPAMI (Under Revision) | 第二作者（学生第一）",
        tags: ["Multi-view Learning", "Attention", "SOTA"],
        date: "2024.09 - 2025.10",
        image: "./statics/imvccea.png", 
        description: `
            <h3>📌 项目背景</h3>
            <p>针对多模态序列数据中普遍存在的<strong>模态缺失</strong>、<strong>异构</strong>与<strong>分布漂移</strong>三大难题，设计了全新的不完整多视图序列表示学习框架。</p>

            <h3>💡 技术方案</h3>
            <ul>
                <li><strong>CCEV-A 机制：</strong>作为技术负责人主导框架设计，原创“<strong>渐进式对齐-补偿-融合</strong>”框架。</li>
                <li><strong>模型优势：</strong>在多个数据集上的表现优于现有方法，且训练速度显著提升，有效解决模态缺失以及数据异构问题。</li>
            </ul>

            <h3>🚀 核心绩效</h3>
            <ul>
                <li>在 4 个公开数据集（CH-SIMS, CH-SIMS-V2, CMU-MOSI, CMU-MOSEI）上刷新 SOTA：<strong>平均 F1 提高 7.3%，Acc 提高 5.2%</strong>。</li>
                <li><strong>效率优化：</strong>显存占用节省 <strong>41%</strong>，实现“精度-效率”双赢。</li>
                <li><strong>专利产出：</strong>已申请国家发明专利 1 项。</li>
            </ul>
        `
    },
    {
        id: "chemrang",
        title: "ChemRANG: Building AI-Ready Datasets via Mechanism-Informed Curation to Learn True Reaction Feasibility Boundaries",
        subtitle: "Chinese Chemical Letters (在投) | 第一作者",
        tags: ["AI-Ready Datasets", "DeepSeek-V3.2", "LoRA"],
        date: "2025.10 - 2026.04",
        image: "./statics/chemrang.png", // 如无图片可改为 null
        description: `
            <h3>📌 数据集构建与清洗</h3>
            <p>独立主导化学反应数据清洗与标准化 Pipeline 的开发，整合 RDKit、PubChem 与 CIRpy 实现分子标识符的精准对齐。</p>

            <h3>💡 核心算法创新</h3>
            <ul>
                <li><strong>LLM 标注与微调：</strong>基于 <strong>DeepSeek-V3.2</strong> 设计 Zero-shot Prompt 完成试剂的细粒度角色标注，并运用 <strong>LoRA</strong> 技术高效微调 <strong>LLaMa-3.2-1B</strong> 等下游语言模型。</li>
                <li><strong>双驱增强框架：</strong>提出 ChemRANG 两阶段数据增强框架，首创“<strong>LLM 推理标注+化学机制约束</strong>”双驱模式。</li>
                <li><strong>精准解析：</strong>将历史数据库中的模糊试剂标签精准解析为 15 类细粒度功能角色，并靶向生成高保真反事实负样本。</li>
            </ul>

            <h3>🚀 实验成果</h3>
            <ul>
                <li>在 Pistachio 的 Suzuki 数据上，实现 <strong>>97%</strong> 的标注准确率与 <strong>>95%</strong> 的负样本机制合理性。</li>
                <li>成功构建含超 <strong>13.6 万</strong>高质量样本的 AI-Ready 数据集。</li>
            </ul>
        `
    },
    {
        id: "ms-customnet",
        title: "MS-CustomNet",
        subtitle: "THMS (在投) | 第一作者",
        tags: ["AIGC", "Stable Diffusion", "Multi-Subject"],
        date: "2024.12 - 2025.07",
        image: "./statics/ms-customnet.png", 
        link: "https://arxiv.org/abs/2603.21136",
        description: `
            <h3>📌 核心创新</h3>
            <p>提出 MS-CustomNet 框架，实现<strong>零样本多主体定制化图像生成</strong>与<strong>显式层次化布局控制</strong>。</p>

            <h3>💡 技术实现</h3>
            <ul>
                <li><strong>特征解耦：</strong>设计<strong>类别感知的特征投影网络</strong>解耦多主体身份特征。</li>
                <li><strong>训练策略：</strong>提出双阶段训练(DST)与课程学习(CLSQ)策略，稳定复杂组合场景优化。</li>
                <li><strong>全栈开发：</strong>独立完成 MSI 数据集预处理流水线、模型训练框架搭建与分布式训练调优，实现基于 Stable Diffusion 的定制化模块开发及量化评估脚本构建。</li>
            </ul>
        `
    },
    {
        id: "chemrext",
        title: "ChemRext",
        subtitle: "上海人工智能实验室 | 高性能文献知识抽取",
        tags: ["NLP", "DeepSeek-V3.2", "High Concurrency"],
        date: "2025.09 - 2025.10",
        image: null, 
        description: `
            <h3>📌 核心逻辑</h3>
            <p>提出“<strong>多标签分块 + 并发摘要</strong>” ChemRext 框架，实现秒级高并发的文献知识细粒度抽取，直接驱动 ChemBOMAS 湿实验变量设计的理论与文献支撑。</p>
            
            <h3>💡 关键技术</h3>
            <ul>
                <li><strong>全流程封装：</strong>独立完成 ChemRext 全部代码开发、核心算法设计及 pipeline 封装。</li>
            </ul>

            <h3>🚀 效果对比</h3>
            <ul>
                <li>在相同任务上，抽取精度超越 <strong>GPT-5、DeepSeek-V3.2</strong> 等旗舰模型。</li>
                <li>准确率与专家手工标注相当。</li>
            </ul>
        `
    },
    {
        id: "wingwing",
        title: "Wingwing Agent",
        subtitle: "上海人工智能实验室 | 实习项目",
        tags: ["Microservices", "Aero Simulation", "3D Generation"],
        date: "2025.06 - 2025.07",
        image: "./statics/wingwing.png",
        description: `
            <h3>📌 项目概述</h3>
            <p>落地全链路的微服务化仿真平台，将 Agent 决策引擎、高精度风洞 Aero 模拟、3D 模型生成、实时可视化 4 类核心算法封装，构建空天一体化的智能仿真系统。</p>

            <h3>💡 技术实现</h3>
            <ul>
                <li><strong>高并发架构：</strong>结合串行调度与高并发架构，实现单实例 <strong>20 路并发无阻塞</strong>。</li>
                <li><strong>异构加速：</strong>通过 GPU/CPU 异构混合加速，仿真效率提升 <strong>4.8 倍</strong>。</li>
                <li><strong>工程落地：</strong>采用容器化设计方案，参与 Agent 搭建及前端 Web 编写，<strong>三周内</strong>完成镜像化交付及端到端联调。</li>
                <li><strong>闭环系统：</strong>实现从机型参数配置→实时仿真→沉浸可视化完整闭环。</li>
            </ul>
        `
    },
    {
        id: "intern-epr",
        title: "Intern-EPR",
        subtitle: "上海人工智能实验室 | 实习项目",
        tags: ["Vue3", "FastAPI", "Automation"],
        date: "2024.06 - 2024.11",
        image: "./statics/epr.png",
        link: "https://internspect-epr.intern-ai.org.cn/home",
        description: `
            <h3>📌 系统简介</h3>
            <p>结合用于图像识别的深度学习模型、用于归因的 EPR 数据库和用于自动检测的自动测量系统，实现催化体系的高效分析。</p>

            <h3>💡 全栈开发职责</h3>
            <ul>
                <li><strong>前端开发：</strong>使用 Vue3 框架，完成前端 22 个业务组件开发。</li>
                <li><strong>后端开发：</strong>使用 FastAPI，独立接入 4 个神经网络模型、完成后端 7 个 API 封装。</li>
                <li><strong>工程质量：</strong>独立负责全栈开发任务（模型调用、数据存储备份等），代码覆盖率达 <strong>92%</strong>。</li>
            </ul>

            <h3>🚀 成果</h3>
            <ul>
                <li>实现 <strong>1 小时内</strong>即可对 <strong>36 种</strong>不同催化体系的反应中间体进行了自动分析。</li>
            </ul>
        `
    },
    {
        id: "yolov11",
        title: "YOLOv11 轻量化研究",
        subtitle: "ICPICS 2025 (EI) | 共同一作",
        tags: ["Target Detection", "Lightweight", "Embedded AI"],
        date: "2024.10 - 2025.02",
        image: "./statics/yolov11.png",
        description: `
            <h3>📌 针对痛点</h3>
            <p>面向嵌入式视觉感知需求，解决目标遮挡导致的特征丢失、复杂背景干扰及计算量过大的问题。</p>

            <h3>💡 算法改进</h3>
            <ul>
                <li><strong>双主干网络结构：</strong>并行添加第二主干，通过 <strong>CBLiner 模块</strong>分配特征，<strong>CBFuse 模块</strong>跨层融合，保留空间位置信息。</li>
                <li><strong>SAConv 轻量化卷积：</strong>采用可切换空洞卷积动态选择感受野，在保持精度的同时降低 <strong>31% FLOPs</strong>。</li>
                <li><strong>ACM 模块：</strong>交替排列空洞卷积与深度可分离卷积，兼顾多尺度边界捕捉与计算效率。</li>
            </ul>

            <h3>🚀 实验数据</h3>
            <ul>
                <li>在自建 CPDD 数据集上，<strong>mAP@0.5 提升 5.7%</strong>。</li>
                <li>轻量化后 FLOPs 降至 <strong>8.6G</strong>，验证了嵌入式部署的可行性。</li>
            </ul>
        `
    },
    {
        id: "heritage-app",
        title: "遗韵长三角·智游",
        subtitle: "全栈开发 | LLM-RAG",
        tags: ["React Native", "Django", "LLM-RAG"],
        date: "2023.12 - 2024.11",
        image: "./statics/app.png",
        link: "https://apexpo.yaoll.top/ha",
        description: `
            <h3>📌 项目概述</h3>
            <p>个人独立完成项目整体的全栈开发，包括 LLM-API、RAG、测试、前后端联调等。</p>

            <h3>💡 技术栈与实现</h3>
            <ul>
                <li><strong>大模型集成：</strong>后端使用 Django 框架，深度集成<strong>百度千帆 Lite 大模型</strong>，自建 Prompt 模板与 <strong>RAG 检索增强体系</strong>。</li>
                <li><strong>性能指标：</strong>支持 200+ 场景意图识别，平均问答延迟 <strong>< 1.2 s</strong>，适配流式数据返回。</li>
                <li><strong>多平台部署：</strong>APP 使用 React-native 框架 + Ant Design UI；网页使用 Django 渲染静态网页；小程序使用微信开发工具。</li>
            </ul>

            <h3>🚀 成果</h3>
            <ul>
                <li>申请电子软件著作权 <strong>1 项</strong>。</li>
            </ul>
        `
    }
];

// ================= 逻辑渲染区 =================
// (下方的渲染逻辑无需修改，保持原样即可)
const navList = document.getElementById('nav-list');
const projectsContainer = document.getElementById('projects-container');

const homeLi = document.createElement('li');
homeLi.innerHTML = `<a href="#home" class="nav-item">基础信息</a>`;
navList.appendChild(homeLi);

projects.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${proj.id}" class="nav-item">${proj.title}</a>`;
    navList.appendChild(li);
});

projects.forEach(proj => {
    const section = document.createElement('section');
    section.id = proj.id;
    section.className = 'project-section';

    const tagsHtml = proj.tags.map(tag => `<span class="badge">${tag}</span>`).join('');
    const linkInfo = proj.link ? `<a href=${proj.link} target="_blank" style="color:var(--primary-color); font-weight:bold;">🔗 Link</a>` : '';

    const headerHtml = `
        <div class="project-header">
            <div>
                <div class="project-badges">${tagsHtml}</div>
                <h2>
                    ${proj.title}
                    ${linkInfo}
                </h2>
                <div class="project-meta">
                    <strong>${proj.subtitle}</strong> | 📅 ${proj.date}
                </div>
            </div>
        </div>
    `;

    let contentHtml = '';
    if (proj.image) {
        const imageHtml = proj.link 
            ? `<a href="${proj.link}" target="_blank" class="project-image-link">
                   <img src="${proj.image}" alt="${proj.title}">
               </a>`
            : `<img src="${proj.image}" alt="${proj.title}">`;
        
        contentHtml = `
            <div class="layout-with-image">
                <div class="project-img-container">
                    ${imageHtml}
                </div>
                <div class="content-block">
                    ${proj.description}
                </div>
            </div>
        `;
    } else {
        contentHtml = `
            <div class="layout-no-image content-block">
                ${proj.description}
            </div>
        `;
    }

    section.innerHTML = headerHtml + contentHtml;
    projectsContainer.appendChild(section);
});

const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-links a').forEach(a => {
                a.classList.remove('active');
                if (a.getAttribute('href') === `#${id}`) {
                    a.classList.add('active');
                }
            });
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});