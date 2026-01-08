const projects = [
    {
        id: "chembomas",
        title: "ChemBOMAS",
        subtitle: "ICLR 2026 (在投) | 共同一作",
        tags: ["LLM-Enhanced", "Multi-Agent", "Bayesian Optimization"],
        date: "2025.06 - 2025.12",
        image: "./statics/chembomas.png", 
        link: "https://arxiv.org/pdf/2509.08736",
        description: `
            <h3>📌 解决痛点</h3>
            <p>传统贝叶斯优化（BO）在化学实验中面临两大瓶颈：<strong>数据稀缺（冷启动）</strong>与<strong>高维搜索空间</strong>。现有方法难以在两者间取得平衡。</p>
            
            <h3>💡 核心算法创新</h3>
            <ul>
                <li><strong>LLM 增强多智能体系统：</strong>提出知识驱动与数据驱动双模块协同框架。</li>
                <li><strong>知识驱动模块：</strong>通过 LLM 分析化学文献，智能分解高维搜索空间。</li>
                <li><strong>数据驱动模块：</strong>仅用 <strong>1% 标注样本</strong>微调 LLM，通过提示工程与伪数据精炼机制生成高质量伪数据，有效缓解冷启动问题。</li>
                <li><strong>分布式训练：</strong>在 <strong>2×A800 GPU</strong> 上实现高效分布式训练。</li>
            </ul>

            <h3>🚀 实验成果</h3>
            <ul>
                <li><strong>收敛速度：</strong>在 Suzuki 等基准测试中，收敛速度比传统方法快 <strong>2-5 倍</strong>。</li>
                <li><strong>性能提升：</strong>最优结果提升 <strong>3-10%</strong>，且仅需 1% 初始数据，每轮仅采样 0.1% 数据量。</li>
                <li><strong>湿实验验证：</strong>在未报道的工业反应（钯催化）中，<strong>仅 2 轮迭代即发现 96% 产率条件</strong>，远超人工控制变量法的 15% 产率。</li>
            </ul>
        `
    },
    {
        id: "imvccea",
        title: "IMvCCEA",
        subtitle: "TPAMI (CCF-A 在投) | 学生一作",
        tags: ["Multi-view Learning", "Attention", "SOTA"],
        date: "2024.09 - 2025.10",
        image: "./statics/imvccea.png", 
        description: `
            <h3>📌 项目背景</h3>
            <p>针对多模态序列数据中普遍存在的<strong>视图缺失</strong>（传感器故障）、<strong>数据异构</strong>与<strong>分布漂移</strong>难题，设计了全新的不完整多视图序列表示学习框架。</p>

            <h3>💡 技术方案</h3>
            <ul>
                <li><strong>CCEV-A 机制：</strong>原创“渐进式对齐-补偿-融合”框架，解决模态缺失。</li>
                <li><strong>主导视图引导策略 (DVGC)：</strong>以语义丰富的文本视图为锚点，稳定指导多视图融合，避免偏移。</li>
                <li><strong>动态集成机制 (ADI)：</strong>基于模型置信度自适应平衡原始特征与演化后特征，受缺失率监督。</li>
                <li><strong>正交性约束：</strong>最小化不同视图特征间相关性，减少冗余。</li>
            </ul>

            <h3>🚀 核心绩效</h3>
            <ul>
                <li>在 CH-SIMS, CMU-MOSI 等 4 个数据集上刷新 SOTA：<strong>F1 平均提高 7.3%，Acc 提高 5.2%</strong>。</li>
                <li><strong>效率优化：</strong>显存占用节省 <strong>41%</strong>，且在 50% 缺失率下准确率仍达 76.1%。</li>
                <li>已申请国家发明专利 1 项。</li>
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
        description: `
            <h3>📌 解决问题</h3>
            <p>多主体图像生成中常出现概念混淆、身份丢失以及缺乏显式空间控制的问题。目前也缺乏适合训练复杂多主体场景的高质量数据集。</p>

            <h3>💡 核心创新</h3>
            <ul>
                <li><strong>MS-CustomNet 框架：</strong>基于 LDM，设计<strong>类别感知投影网络</strong>，通过布局图显式编码主体位置、尺度和层级关系，实现<strong>零样本</strong>多主体可控生成。</li>
                <li><strong>MSI 数据集：</strong>从 COCO 构建 <strong>14,537 张</strong>场景图像，含 2,400 个参考样本，涵盖 80 个类别及布局标注。</li>
                <li><strong>双阶段训练 (DST)：</strong>第一阶段学习布局交互，第二阶段细化身份细节。</li>
                <li><strong>课程学习 (CLSQ)：</strong>训练样本主体数量从 2 个逐步增加至 5 个，提升复杂场景适应力。</li>
            </ul>

            <h3>🚀 性能表现</h3>
            <ul>
                <li><strong>多主体指标：</strong>YOLO-L (位置控制) 得分 <strong>0.94</strong>，身份保持 DINO-I 得分 0.61，显著优于现有方法。</li>
                <li>成功实现复杂组合结构和空间关系的精确生成。</li>
            </ul>
        `
    },
    {
        id: "chemrext",
        title: "ChemRext",
        subtitle: "高性能文献知识抽取",
        tags: ["NLP", "RAG", "Chemical Text"],
        date: "2025.09 - 2025.10",
        image: null, 
        description: `
            <h3>📌 核心逻辑</h3>
            <p>提出“多标签分块 + 并发摘要”框架，旨在实现秒级高并发的化学文献知识细粒度抽取，直接驱动 ChemBOMAS 的湿实验变量设计。</p>
            
            <h3>💡 关键技术</h3>
            <ul>
                <li><strong>并发处理 Pipeline：</strong>独立完成全流程代码开发与封装，支持高并发请求。</li>
                <li><strong>细粒度抽取：</strong>针对化学文本特性设计的核心算法。</li>
            </ul>

            <h3>🚀 效果对比</h3>
            <ul>
                <li>在相同任务上，抽取精度超越 <strong>GPT-5、DeepSeek-V3.1</strong> 等旗舰大模型。</li>
                <li>准确率与专家手工标注相当，为后续自动化实验提供了坚实的理论与数据支撑。</li>
            </ul>
        `
    },
    {
        id: "yolov11",
        title: "YOLOv11",
        subtitle: "ICPICS (EI 会议) | 共同一作",
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
                <li>在自建 CPDD 数据集（10,000+张）上，<strong>mAP@0.5 提升 5.7%</strong>，达到 83.6%。</li>
                <li>轻量化后 FLOPs 降至 <strong>8.6G</strong>（原 12.1G），图像尺寸缩小 51% 时仅损失 4% mAP，验证了嵌入式部署的可行性。</li>
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
            <p>落地全链路微服务化仿真平台，将 Agent 决策、高精度风洞模拟、3D 模型生成与实时可视化封装为可插拔微服务。</p>

            <h3>💡 技术实现</h3>
            <ul>
                <li><strong>多智能体 Pipeline：</strong>5 节点 LLM 驱动流程（意图分类→需求评估→原型标注等）。</li>
                <li><strong>3D 生成改进：</strong>基于 TRELLIS 框架，用 <strong>LongCLIP</strong> 替代 CLIP 解决长文本过拟合，引入 Cross-attention 增强数值敏感度。</li>
                <li><strong>高并发架构：</strong>实现单实例 <strong>20 路并发无阻塞</strong>，GPU/CPU 异构混合加速使仿真效率提升 <strong>4.8 倍</strong>。</li>
            </ul>

            <h3>🚀 应用成效</h3>
            <ul>
                <li>迭代周期从小时级压缩到<strong>分钟级</strong>。</li>
                <li>平台接入 86 型各类机型，累计完成 <strong>2,000+ 次</strong>在线仿真。</li>
                <li>设计可行性评分超越人类工程师团队及 GPT-5。</li>
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
            <p>结合深度学习图像识别与自动测量系统，解决 EPR 技术门槛高、人工解谱耗时长（数小时至数天）的痛点。</p>

            <h3>💡 全栈开发职责</h3>
            <ul>
                <li><strong>前端：</strong>Vue3 框架，开发 22 个业务组件。</li>
                <li><strong>后端：</strong>FastAPI 架构，封装 7 个 API，独立接入 3 个神经网络模型。</li>
                <li><strong>性能优化：</strong>代码覆盖率 <strong>92%</strong>，通过代码优化实现模型推理的高并发能力。</li>
            </ul>

            <h3>🚀 成果</h3>
            <ul>
                <li>实现 <strong>1 小时内自动分析 36 种</strong>催化体系反应中间体（速度提升至秒级）。</li>
                <li>解谱准确率媲美人类专家水平，覆盖 90% 以上样品门类。</li>
            </ul>
        `
    },
    {
        id: "heritage-app",
        title: "遗韵·智游APP",
        subtitle: "全栈开发 | 移动应用",
        tags: ["React Native", "Django", "LLM-RAG"],
        date: "2023.12 - 2024.11",
        image: "./statics/app.png",
        link: "https://apexpo.yaoll.top/ha",
        description: `
            <h3>📌 独立全栈开发</h3>
            <p>一款基于 React Native 和 Django 的非遗文化旅游 APP，深度集成百度千帆大模型。</p>

            <h3>💡 技术栈</h3>
            <ul>
                <li><strong>前端：</strong>React Native (Redux Toolkit, React-Navigation) + Taro (微信小程序) + Ant Design Mobile。</li>
                <li><strong>后端：</strong>Django REST Framework + SQLite3 (12 张核心表) + Nginx/SSL 配置。</li>
                <li><strong>AI 融合：</strong>构建 <strong>RAG 检索增强体系</strong>，支持 200+ 场景意图识别，平均问答延迟 < 1.2s。</li>
            </ul>

            <h3>🚀 成果</h3>
            <ul>
                <li>实现多端部署（App、小程序、Web 官网）。</li>
                <li>获得计算机软件著作权 1 项 (2024SA0087957)。</li>
            </ul>
        `
    }
];

// ================= 逻辑渲染区 =================

const navList = document.getElementById('nav-list');
const projectsContainer = document.getElementById('projects-container');

// 1. 初始化导航栏
// 先添加"个人主页"
const homeLi = document.createElement('li');
homeLi.innerHTML = `<a href="#home" class="nav-item">基础信息</a>`;
navList.appendChild(homeLi);

// 循环添加项目链接
projects.forEach(proj => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${proj.id}" class="nav-item">${proj.title}</a>`;
    navList.appendChild(li);
});

// 2. 渲染项目卡片
projects.forEach(proj => {
    const section = document.createElement('section');
    section.id = proj.id;
    section.className = 'project-section';

    // 生成 Tags HTML
    const tagsHtml = proj.tags.map(tag => `<span class="badge">${tag}</span>`).join('');

    const linkInfo = proj.link ? `<a href=${proj.link} target="_blank" style="color:var(--primary-color); font-weight:bold;">🔗 Link</a>` : '';

    // 头部信息
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

    // 内容布局判断
    let contentHtml = '';
    if (proj.image) {
        // 有图片布局：文字在右，图片在左 (或者反过来，这里采用左图右文结构，移动端会自动堆叠)
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
        // 无图片布局
        contentHtml = `
            <div class="layout-no-image content-block">
                ${proj.description}
            </div>
        `;
    }

    section.innerHTML = headerHtml + contentHtml;
    projectsContainer.appendChild(section);
});

// 3. 滚动监听高亮 (Intersection Observer 优化版)
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // 视口中间触发
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