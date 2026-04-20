"use client";

import { useState } from "react";
import Link from "next/link";

type EduItem = {
  id: string;
  school: string;
  program: string;
  faculty: string;
  period: string;
  location: string;
  focus: string;
  summary: string;
};

type ProfileSection = {
  title: string;
  body: string;
};

type VideoCard = {
  title: string;
  desc: string;
  cover: string;
  link?: string;
};

type ProfileItem = {
  id: string;
  number: string;
  title: string;
  english: string;
  intro?: string;
  sections?: ProfileSection[];
  videoCards?: VideoCard[];
};

type ExperienceItem = {
  id: string;
  number: string;
  company: string;
  companyEn: string;
  department: string;
  role: string;
  start: string;
  end: string;
  content: string;
  result: string;
};

type ProjectItem = {
  id: string;
  number: string;
  title: string;
  titleEn: string;
  category: string;
  folderTab: string;
  tools: string;
  problem: string;
  method: string;
  result: string;
  reflection: string;
};
type BookItem = {
  id: string;
  title: string;
  author: string;
  color: string;
  note: string;
};

type MatchItem = {
  id: string;
  city: string;
  title: string;
  note: string;
};

const profileData: ProfileItem[] = [
  {
    id: "image",
    number: "01",
    title: "影像",
    english: "Image",
    intro:
      "这里会慢慢收录一些更立体的我：一段能体现状态的视频，一张职业照，也有一些生活里的瞬间。我希望这个部分不是一进来就全部摊开，而是像一个可以慢慢打开的影像档案。",
  },
  {
    id: "character",
    number: "02",
    title: "性格",
    english: "Character",
    sections: [
      {
        title: "冷静，但不封闭",
        body:
          "我是一个相对冷静的人，但并不是内向或疏离的性格。相反，我很享受团队合作、公开表达和 presentation 的过程，也愿意在需要的时候主动承担 leader 或 main speaker 的角色。与此同时，我也很重视倾听，习惯先理解别人的想法，再表达自己的判断，所以比较容易和身边的人建立信任。",
      },
      {
        title: "抗压，但不硬扛",
        body:
          "面对压力时，我通常不会先陷入情绪里，而是会把事情拆成一个个可以完成的小步骤。我相信很多复杂问题并不是一下子被解决的，而是在清楚排序、按部就班执行的过程中慢慢变得可控。我的习惯是先做好当下最重要的一步，再继续处理下一步。",
      },
      {
        title: "有目标感，但不浮躁",
        body:
          "我是一个有目标感的人，也相信长期主义。但我不太喜欢好高骛远，或者为了显得厉害而追逐很虚的标签。我更相信一步一步走，把每个阶段真正做好，路会越走越顺，也会越走越宽。",
      },
    ],
  },
  {
    id: "expression",
    number: "03",
    title: "表达",
    english: "Expression",
    sections: [
      {
        title: "我喜欢把复杂问题讲清楚",
        body:
          "我很享受 presentation 和口头表达的过程。从小到大，我都习惯通过自我反思、视频记录和阶段性总结来整理自己的想法。对我来说，表达不是为了表现自己，而是为了逼自己把一个问题想清楚、讲明白，并在不断输出中形成新的观点。",
      },
      {
        title: "我从阅读里获得稳定感",
        body:
          "我喜欢读文学、历史和思想类作品，也会定期写读书笔记。相比金融市场和现实社会里的高速变化，阅读给我的力量更加安静，也更加长久。它让我在面对复杂环境时更清醒，也让我知道一个人真正走得踏实，往往不是因为一直向外追，而是因为内在有稳定的支撑。",
      },
      {
        title: "我把职业兴趣变成日常输入",
        body:
          "我平时会利用课余和碎片时间听商业、财经和创投类播客，比如化妆、通勤或休息的时候。随着自己越来越接近职场，我也越来越觉得，如果能把职业方向变成一种长期兴趣，一个人才更有可能持续成长。我常听的播客包括《知行小酒馆》《搞钱女孩》《声动早咖啡》《商业就是这样》《岩中花述》《风投圈》等。",
      },
    ],
    videoCards: [
      {
        title: "OpenAI 与 Sora",
        desc:
          "关于 AI 视频生成、内容生产方式变化，以及技术公司商业化路径的个人观察。",
        cover: "/images/sora-cover.jpg",
      },
      {
        title: "蚂蚁集团与金融科技",
        desc:
          "关于金融科技公司的商业逻辑、平台能力与长期增长空间的个人分析。",
        cover: "/images/ant-cover.jpg",
      },
    ],
  },
  {
    id: "current",
    number: "04",
    title: "当下",
    english: "Current",
    sections: [
      {
        title: "我正在认真完成当下的学业",
        body:
          "目前我在伦敦大学学院（UCL）完成金融风险管理硕士阶段的学习，也在通过课程项目继续训练自己对金融市场、风险建模、算法交易和数据分析的理解。对我来说，学业不是一个单独的阶段，而是我把专业知识慢慢转化成实践能力的过程。",
      },
      {
        title: "我在主动学习 AI，也在重新理解效率",
        body:
          "我最近很关注 AI Agent，也会主动尝试用 AI 辅助信息整理、数据分析、写作和项目推进。越了解 AI，我越能感受到它不是一个单纯的工具，而是一种新的工作方式。很多重复性任务、初步分析和结构化整理，未来都可能被 AI 大幅提升效率。我也越来越觉得，在这个时代，如果不主动学习 AI，人与人之间的信息处理能力、学习速度和执行效率会慢慢拉开差距。",
      },
      {
        title: "偷偷告诉你，我也会焦虑",
        body:
          "马上要走到学生阶段的尾声，面对未来的不确定性、求职压力和职业选择，我当然也会焦虑。只是我每天都在提醒自己：不要把精力消耗在过度想象里，先把今天能做的事情做好。我相信，焦虑并不一定是坏事，它有时候只是提醒我，我很在乎自己的未来。只要还能脚踏实地地往前走，把每一步走稳，未来一定会慢慢给出答案。",
      },
    ],
  },
];

const educationData: EduItem[] = [
  {
    id: "bfsu",
    school: "北京外国语大学",
    program: "国际预科 / NCUK Foundation",
    faculty: "NCUK Pathway",
    period: "2021 – 2022",
    location: "北京，中国",
    focus:
      "我在 NCUK 国际预科阶段学习了经济、商务、数学和 EAP 学术英语四门课程，其中经济取得 A*，数学取得 A*，商务取得 A。这个阶段主要训练了我在英文环境下进行学术阅读、写作、presentation 和基础商科分析的能力，也帮助我完成从国内教育体系到英国本科体系的过渡。",
    summary:
      "这段经历是我走向英国高等教育体系的起点，也让我较早适应了英文授课、跨文化学习和商科金融相关问题的分析方式。",
  },
  {
    id: "manchester",
    school: "曼彻斯特大学",
    program: "BSc Mathematics with Finance",
    faculty: "School of Mathematics",
    period: "2022 – 2025",
    location: "曼彻斯特，英国",
    focus:
      "本科阶段的学习主要围绕数学、统计、金融和计算机四个维度展开。数学方向包括线性代数、随机过程、金融工程等内容；统计方向包括统计学、多元统计、统计建模与机器学习；金融方向覆盖金融数学、衍生品、时间序列模型与金融市场相关课程；计算机方向则训练了 Python、MATLAB 和 R 语言的应用能力。",
    summary:
      "这段经历让我建立起用数学和统计方法理解金融问题的思维方式，也为后续量化研究、衍生品定价、交易策略和风险建模打下了基础。",
  },
  {
    id: "ucl",
    school: "伦敦大学学院（UCL）",
    program: "MSc Financial Risk Management",
    faculty: "University College London",
    period: "2025 – 2026",
    location: "伦敦，英国",
    focus:
      "硕士阶段的学习更强调科技与金融的结合，课程和项目围绕金融风险管理、算法交易、数据驱动金融市场建模、市场风险与投资组合理论、区块链技术和金融市场分析展开。相比本科阶段，我更关注如何将模型、数据、编程和真实市场问题连接起来，尤其是在交易策略、风险管理和金融科技应用中的实践价值。",
    summary:
      "UCL 阶段是我从“学习金融模型”进一步走向“理解模型如何服务于交易、风险和投资决策”的关键阶段。",
  },
];

const experienceData: ExperienceItem[] = [
  {
    id: "grant-thornton",
    number: "01",
    company: "致同国际会计师事务所",
    companyEn: "Grant Thornton",
    department: "审计部门",
    role: "审计实习生",
    start: "2022.06",
    end: "2022.08",
    content:
      "参与企业财务审计与基础核查工作，协助完成凭证核验、会计记录检查、存货与固定资产盘点支持，以及相关底稿整理。通过核对账务记录、原始凭证和业务资料，理解企业财务信息从业务发生到报表呈现的基本逻辑。",
    result:
      "这段经历让我建立了扎实的财务底层理解，也让我第一次系统接触企业经营数据、会计核算与审计流程，为后续理解银行信贷、企业融资和投资分析打下了基础。",
  },
  {
    id: "ccb",
    number: "02",
    company: "中国建设银行",
    companyEn: "China Construction Bank",
    department: "公司金融业务",
    role: "公司金融业务暑期实习生",
    start: "2023.07",
    end: "2023.08",
    content:
      "协助梳理企业客户经营情况、资金需求及融资用途，结合行业特征、现金流状况及业务模式匹配融资方案，支持公司客户授信与资金配置决策。同时参与中小企业授信流程，分析财务报表、现金流、杠杆水平及偿债能力，形成结构化信用判断。",
    result:
      "通过这段经历，我更清晰地理解了银行如何从客户经营、融资需求、偿债能力和潜在违约风险等角度评估企业信用，也进一步训练了自己在真实金融业务场景中进行风险识别和信息整理的能力。",
  },
  {
    id: "hp",
    number: "03",
    company: "HP 技术风险投资公司",
    companyEn: "HP Tech Ventures",
    department: "企业风险投资与商业分析",
    role: "Venture Capital & Business Analysis Intern",
    start: "2024.07",
    end: "2024.08",
    content:
      "围绕 AI、企业软件及科技赛道，筛选并跟踪 100+ 家初创企业，使用 Apollo.io 与 Crunchbase 搭建项目数据库，系统整理融资轮次、收入增速、团队背景、客户画像及市场定位等核心信息。同时运用回归分析识别 ARR 增长与融资轮次、团队规模、客户结构等变量之间的关系，并结合相关性分析及可比指标模型，对估值水平、获客效率及商业模式可扩张性进行量化评估。",
    result:
      "将经营数据、融资表现及行业趋势转化为可比较的投资信号，完成项目横向评分、优先级排序及投资建议输出，并基于成长性、战略协同及市场空间筛选重点投资标的，最终支持六份内部投资报告撰写。",
  },
  {
    id: "cinda",
    number: "04",
    company: "信达证券",
    companyEn: "Cinda Securities",
    department: "金融工程与量化分析",
    role: "量化与投资分析实习生",
    start: "2025.06",
    end: "2025.09",
    content:
      "在沪深300、中证500、中国国债、黄金及原油等五类资产上构建跨资产动量轮动、配对交易及统计套利框架，完成五年历史回测，并围绕年化收益率、最大回撤、夏普比率、换手率和交易成本等指标评估策略表现。期间采用波动率调整仓位、月度调仓及单一资产仓位上限，根据不同资产波动水平动态调整配置权重。",
    result:
      "策略年化收益率超越基准约 8%，夏普比率达到 1.2。最终输出跨资产配置回测报告及策略框架总结，为团队提供可复用的量化分析模板与投资决策支持，也进一步加深了我对二级市场、资产轮动与交易信号构建的理解。",
  },
];

const projectData: ProjectItem[] = [
  {
    id: "options",
    number: "01",
    title: "哥伦比亚大学波动率交易与期权策略研究",
    titleEn: "Volatility Trading & Option Strategy",
    category: "Derivatives Lab",
    folderTab: "Options",
    tools: "Python · Black-Scholes · Monte Carlo · Delta-Gamma",
    problem:
      "比较 Black-Scholes、二叉树模型与 Monte Carlo 方法在不同波动率环境下的适用边界，并分析极端市场中模型失效的风险。",
    method:
      "使用 Python 进行期权定价模型对比，结合多维 Brownian Motion、数值模拟和情景分析，研究 Delta-Gamma 风险暴露变化。",
    result:
      "输出模型选型与风险对冲建议，识别 Delta-Gamma 对冲在极端市场条件下的潜在失效节点。",
    reflection:
      "这个项目把课本里的期权模型和真实交易中的风控问题连接起来，也让我意识到模型并不是答案本身，而是决策工具。",
  },
  {
    id: "crypto",
    number: "02",
    title: "加密货币量化交易策略回测",
    titleEn: "Crypto Quant Strategy Backtesting",
    category: "Strategy & Trading",
    folderTab: "Crypto",
    tools: "Python · Backtesting · Roll Model · Transaction Cost",
    problem:
      "研究 BTC、ETH、DOGE 等加密资产中，均值回复与趋势跟随策略在真实交易成本约束下是否仍具备可执行性。",
    method:
      "使用 1 小时频率数据搭建完整回测框架，结合信号生成、波动率调整仓位、Roll 模型交易成本估计、滑点敏感性测试和策略对比分析。",
    result:
      "发现均值回复策略容易被高频交易成本侵蚀，而趋势跟随策略在中等成本假设下仍保持正收益，Sharpe 约为 0.77。",
    reflection:
      "这个项目让我更清楚地理解，策略好不好不能只看毛收益，更要看交易成本、换手率和真实执行环境。",
  },
  {
    id: "macro",
    number: "03",
    title: "机器学习宏观信号与衰退预测",
    titleEn: "Macro Signal Prediction with Machine Learning",
    category: "Macro & Machine Learning",
    folderTab: "Macro ML",
    tools: "Kalman Filter · Logistic · Random Forest · XGBoost",
    problem:
      "基于美国宏观经济数据，探索不同特征工程方式能否提升对经济衰退风险和市场转折点的预测能力。",
    method:
      "构建 Raw-only、Mixed 和 KF-only 三类特征管道，并比较 Logistic Regression、Random Forest、XGBoost 等模型表现，使用 walk-forward validation 避免前视偏差。",
    result:
      "发现 Kalman Filter 对不同模型的帮助并不一致：线性模型更容易受益于平滑趋势信号，而树模型更偏好混合信息。",
    reflection:
      "这个项目让我理解到，特征工程本身并不是越复杂越好，它必须和模型结构、市场 regime 以及预测目标相匹配。",
  },
  {
    id: "debt-rank",
    number: "04",
    title: "DebtRank 银行系统性风险传染研究",
    titleEn: "DebtRank Banking Network Risk",
    category: "Risk Network",
    folderTab: "DebtRank",
    tools: "Network Risk · Systemic Risk · DebtRank",
    problem:
      "研究银行网络中风险如何通过机构之间的联系传染，并识别可能引发系统性冲击的关键节点。",
    method:
      "基于网络风险传染框架，使用 DebtRank 方法分析银行之间的风险扩散路径、节点影响力和系统脆弱性。",
    result:
      "通过网络结构识别高影响力金融机构，并展示单一节点冲击可能如何放大为系统性风险。",
    reflection:
      "这个项目让我更直观地理解，金融风险不只是单个机构的问题，更是网络连接和传染机制的问题。",
  },
  {
    id: "publication",
    number: "05",
    title: "Fama-French 模型扩展研究",
    titleEn: "Fama-French Model with New Factors",
    category: "Publication",
    folderTab: "Paper",
    tools: "Asset Pricing · Factor Model · ICFTBA 2024",
    problem:
      "研究传统 Fama-French 模型在解释美国科技行业股票收益时是否存在不足，以及加入新因子后能否提升解释力。",
    method:
      "基于资产定价与因子模型框架，对美国科技行业样本进行实证分析，比较传统模型与扩展模型的表现。",
    result:
      "论文发表于 ICFTBA 2024，题为 Improving the Performance of the Fama-French Model with New Factors: Evidence from US Technology Industry。",
    reflection:
      "这是我较早将金融理论、数据分析和学术写作结合起来的一次完整研究经历，也帮助我建立了因子研究的基础意识。",
  },
];
const bookData: BookItem[] = [
  {
    id: "culture-journey",
    title: "文化苦旅",
    author: "余秋雨",
    color: "#7b3f24",
    note:
      "我喜欢《文化苦旅》，是因为它不是单纯写风景，而是在写历史、文明和一个人面对时间时的感受。它让我意识到，很多真正厚重的东西，并不会在当下立刻给你答案，而是在很久以后慢慢变成一个人理解世界的底色。",
  },
  {
    id: "chinese-context",
    title: "中国文脉",
    author: "余秋雨",
    color: "#6f4a2f",
    note:
      "《中国文脉》让我更系统地理解中国文化中审美、文字和历史精神之间的关系。我很喜欢这种从文化脉络里寻找长期力量的阅读方式，它让我在面对现实社会和金融市场的变化时，也能保留一点更长周期的视角。",
  },
  {
    id: "guwen",
    title: "古文观止",
    author: "吴楚材 / 吴调侯",
    color: "#4f5f37",
    note:
      "我喜欢《古文观止》里那种凝练、节制但有力量的表达。很多古文并不长，却能把判断、气势和情绪压缩得非常准确。它也影响了我对表达的理解：真正好的表达不是堆砌，而是清楚、有力、有分寸。",
  },
  {
    id: "zengguofan",
    title: "曾国藩家书",
    author: "曾国藩",
    color: "#8b6238",
    note:
      "《曾国藩家书》给我的感受是，一个人的长期成长很大程度上来自自省、克制和持续修正。它不是那种让人热血沸腾的书，但会让我更相信笨功夫、长期主义和稳定执行。",
  },
  {
    id: "ming",
    title: "明朝那些事儿",
    author: "当年明月",
    color: "#354f6b",
    note:
      "《明朝那些事儿》让我觉得历史不是冷冰冰的年代和事件，而是很多人性、选择、权力和命运交织在一起的结果。我喜欢它把复杂历史讲得有温度，也让我更愿意从人的动机和结构性环境里理解现实问题。",
  },
  {
    id: "siddhartha",
    title: "悉达多",
    author: "赫尔曼·黑塞",
    color: "#6a4c93",
    note:
      "《悉达多》对我来说更像一本关于自我寻找的书。它让我觉得，很多人生答案不是别人告诉你的，也不是单靠聪明就能得到，而是要经过体验、迷茫、试错和重新理解自己。",
  },
  {
    id: "hanfeizi",
    title: "韩非子 · 五蠹",
    author: "韩非子",
    color: "#5b2a2a",
    note:
      "我很喜欢《韩非子》里非常冷静、现实甚至锋利的观察方式，尤其是《五蠹》。它让我看到制度、利益和人性之间的关系，也让我意识到很多社会运行逻辑不能只靠理想主义解释，还要看结构、激励和约束。",
  },
  {
    id: "hundred-schools",
    title: "诸子百家",
    author: "易中天",
    color: "#2f5f5f",
    note:
      "我喜欢诸子百家的地方在于，不同思想体系都在回答同一个问题：人应该如何生活，社会应该如何运行。儒家、道家、法家、墨家看似冲突，但都提供了一种看世界的角度。我觉得这种多视角思考，对理解商业、金融和人也很有帮助。",
  },
];

const matchData: MatchItem[] = [
  {
    id: "london",
    city: "London",
    title: "伦敦现场乒乓球比赛",
    note:
      "在伦敦现场看乒乓球比赛时，我最强烈的感受是：顶尖选手之间的差距并不只在技术，也在节奏控制、心理稳定和关键分处理。现场的速度感、旋转和压迫感，是屏幕前完全不同的体验。",
  },
  {
    id: "frankfurt",
    city: "Frankfurt",
    title: "法兰克福现场乒乓球比赛",
    note:
      "在法兰克福看比赛时，我更明显感受到国际赛事现场的氛围。不同国家的观众、选手和比赛节奏交织在一起，让我觉得体育不只是胜负，也是一种很真实的全球交流方式。",
  },
];

export default function AboutPage() {
  const [selectedEdu, setSelectedEdu] = useState<EduItem | null>(null);
  const [selectedProfile, setSelectedProfile] = useState<ProfileItem | null>(
    null
  );
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );
  const [activeProjectId, setActiveProjectId] = useState("options");
  const [projectBookOpen, setProjectBookOpen] = useState(false);

  const activeProject =
    projectData.find((project) => project.id === activeProjectId) ||
    projectData[0];

  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);
  const [selectedMatch, setSelectedMatch] = useState<MatchItem | null>(null);

  const openEducation = (id: string) => {
    const edu = educationData.find((item) => item.id === id);
    if (edu) setSelectedEdu(edu);
  };

  const openProjectPage = (id: string) => {
    setActiveProjectId(id);
    setProjectBookOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#050505] text-[#f8eedb]">
      <header className="sticky top-0 z-40 border-b border-[#d7b46a]/25 bg-[#050505]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="text-sm tracking-[0.35em] text-[#f0cf82] transition hover:opacity-80"
          >
            张心瑶
          </Link>

          <div className="hidden gap-8 md:flex">
            <a
              href="#profile"
              className="text-xs tracking-[0.28em] text-[#d8c7a3] transition hover:text-[#f0cf82]"
            >
              PROFILE
            </a>
            <a
              href="#education"
              className="text-xs tracking-[0.28em] text-[#d8c7a3] transition hover:text-[#f0cf82]"
            >
              EDUCATION
            </a>
            <a
              href="#experience"
              className="text-xs tracking-[0.28em] text-[#d8c7a3] transition hover:text-[#f0cf82]"
            >
              EXPERIENCE
            </a>
            <a
              href="#projects"
              className="text-xs tracking-[0.28em] text-[#d8c7a3] transition hover:text-[#f0cf82]"
            >
              PROJECTS
            </a>
            <a
              href="#more"
              className="text-xs tracking-[0.28em] text-[#d8c7a3] transition hover:text-[#f0cf82]"
            >
              MORE
            </a>
          </div>

          <div className="text-xs tracking-[0.28em] text-[#f0cf82]">
            中 / EN
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-16">
        <section id="profile" className="py-12">
          <div className="mb-10">
            <p className="mb-3 text-xs tracking-[0.4em] text-[#f0cf82]">
              SECTION I
            </p>
            <h1 className="font-serif text-4xl text-[#fff4dd] md:text-5xl">
              Profile
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="relative border border-[#d7b46a]/25 bg-[#0a0a0a] p-8 md:p-10">
              <div className="absolute -right-3 -top-3 h-16 w-16 border-r border-t border-[#d7b46a]/40" />
              <div className="absolute -bottom-3 -left-3 h-16 w-16 border-b border-l border-[#d7b46a]/40" />

              <p className="mb-5 text-xs tracking-[0.4em] text-[#f0cf82]">
                XINYAO ZHANG
              </p>

              <h2 className="mb-4 font-serif text-5xl tracking-[0.18em] text-[#fff4dd] md:text-7xl">
                张心瑶
              </h2>

              <p className="mb-10 text-sm tracking-[0.35em] text-[#f0cf82]">
                Xinyao Zhang
              </p>

              <div className="max-w-2xl space-y-4 font-serif text-lg leading-9 text-[#e3d4b7]">
                <p>我相信长期主义，也相信清醒的野心。</p>
                <p>我喜欢用数据理解市场，用结构化思维拆解复杂问题。</p>
                <p>金融、交易、商业与表达，是我持续探索的几个方向。</p>
                <p>我不追求看起来很厉害的标签，更在意每一步是否真正扎实。</p>
                <p className="text-[#f0cf82]">
                  心有野心与远方，行有分寸与踏实。
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {profileData.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedProfile(item)}
                  className="group min-h-[180px] border border-[#d7b46a]/25 bg-[#0a0a0a] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#f0cf82]/60"
                >
                  <p className="mb-8 text-xs tracking-[0.28em] text-[#f0cf82]">
                    {item.number}
                  </p>

                  <h3 className="font-serif text-2xl text-[#fff4dd]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs tracking-[0.22em] text-[#bda66f]">
                    {item.english}
                  </p>

                  <div className="mt-8 border-t border-[#d7b46a]/15 pt-4 text-xs tracking-[0.2em] text-[#d8c7a3]">
                    VIEW
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="py-16">
          <div className="mb-10">
            <p className="mb-3 text-xs tracking-[0.4em] text-[#f0cf82]">
              SECTION II
            </p>
            <h2 className="font-serif text-4xl text-[#fff4dd] md:text-5xl">
              Education
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d8c7a3]">
              一条从北京到曼彻斯特，再到伦敦的学术路线。每一个坐标，都是我理解世界方式发生变化的节点。
            </p>
          </div>

          <div className="relative overflow-hidden border border-[#d7b46a]/25 bg-[#070707] p-4 md:p-8">
            <div className="absolute inset-0 opacity-[0.08]">
              <div className="h-full w-full bg-[linear-gradient(to_right,#d7b46a_1px,transparent_1px),linear-gradient(to_bottom,#d7b46a_1px,transparent_1px)] bg-[size:48px_48px]" />
            </div>

            <div className="relative h-[620px] w-full">
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 620"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <filter id="goldGlow">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <path
                  d="M150,240 C185,205 225,190 265,198 C295,170 345,165 395,185 C455,150 540,145 615,170 C705,155 800,180 865,235 C910,275 910,330 860,355 C805,382 735,360 680,380 C610,405 555,390 505,360 C450,330 395,345 335,370 C275,395 220,372 190,330 C165,298 118,285 150,240Z"
                  fill="none"
                  stroke="#d7b46a"
                  strokeWidth="1.2"
                  opacity="0.42"
                />

                <path
                  d="M145,250 C165,225 195,215 220,225 C238,205 270,203 292,222 C310,240 300,270 270,282 C235,297 205,286 180,270 C162,258 145,260 130,272"
                  fill="none"
                  stroke="#f0cf82"
                  strokeWidth="1"
                  opacity="0.38"
                />

                <path
                  d="M178,217 C188,205 202,209 205,224 C207,240 195,252 183,245 C172,238 169,226 178,217Z"
                  fill="none"
                  stroke="#f0cf82"
                  strokeWidth="1"
                  opacity="0.55"
                />

                <path
                  d="M245,390 C330,365 430,380 505,430 C575,475 625,520 610,570 C520,585 420,560 335,520 C275,492 230,450 245,390Z"
                  fill="none"
                  stroke="#d7b46a"
                  strokeWidth="1"
                  opacity="0.28"
                />

                <path
                  d="M520,360 C570,400 620,430 690,425 C740,420 775,395 805,365"
                  fill="none"
                  stroke="#d7b46a"
                  strokeWidth="0.8"
                  opacity="0.25"
                />

                <path
                  d="M780,255 C635,145 420,145 205,225"
                  fill="none"
                  stroke="#f0cf82"
                  strokeWidth="2"
                  strokeDasharray="8 8"
                  opacity="0.78"
                  filter="url(#goldGlow)"
                />

                <path
                  d="M205,225 C210,242 214,258 218,275"
                  fill="none"
                  stroke="#f0cf82"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  opacity="0.78"
                  filter="url(#goldGlow)"
                />

                <circle
                  cx="780"
                  cy="255"
                  r="6"
                  fill="#050505"
                  stroke="#f0cf82"
                  strokeWidth="2"
                />
                <circle
                  cx="205"
                  cy="225"
                  r="6"
                  fill="#050505"
                  stroke="#f0cf82"
                  strokeWidth="2"
                />
                <circle
                  cx="218"
                  cy="275"
                  r="6"
                  fill="#050505"
                  stroke="#f0cf82"
                  strokeWidth="2"
                />
              </svg>

              <button
                type="button"
                onClick={() => openEducation("bfsu")}
                className="absolute left-[70%] top-[31%] z-10 w-64 border border-[#d7b46a]/25 bg-[#0a0a0a]/90 p-4 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#f0cf82]/60"
              >
                <p className="mb-2 text-xs tracking-[0.28em] text-[#f0cf82]">
                  BEIJING
                </p>
                <h3 className="font-serif text-xl text-[#fff4dd]">
                  北京外国语大学
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#d8c7a3]">
                  国际预科 / NCUK Foundation
                </p>
                <p className="mt-4 border-t border-[#d7b46a]/15 pt-3 text-xs tracking-[0.18em] text-[#bda66f]">
                  2021 – 2022 · 北京
                </p>
              </button>

              <button
                type="button"
                onClick={() => openEducation("manchester")}
                className="absolute left-[8%] top-[18%] z-10 w-64 border border-[#d7b46a]/25 bg-[#0a0a0a]/90 p-4 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#f0cf82]/60"
              >
                <p className="mb-2 text-xs tracking-[0.28em] text-[#f0cf82]">
                  MANCHESTER
                </p>
                <h3 className="font-serif text-xl text-[#fff4dd]">
                  曼彻斯特大学
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#d8c7a3]">
                  BSc Mathematics with Finance
                </p>
                <p className="mt-4 border-t border-[#d7b46a]/15 pt-3 text-xs tracking-[0.18em] text-[#bda66f]">
                  2022 – 2025 · 曼彻斯特
                </p>
              </button>

              <button
                type="button"
                onClick={() => openEducation("ucl")}
                className="absolute left-[24%] top-[55%] z-10 w-64 border border-[#d7b46a]/25 bg-[#0a0a0a]/90 p-4 text-left backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-[#f0cf82]/60"
              >
                <p className="mb-2 text-xs tracking-[0.28em] text-[#f0cf82]">
                  LONDON
                </p>
                <h3 className="font-serif text-xl text-[#fff4dd]">
                  伦敦大学学院（UCL）
                </h3>
                <p className="mt-2 text-xs leading-6 text-[#d8c7a3]">
                  MSc Financial Risk Management
                </p>
                <p className="mt-4 border-t border-[#d7b46a]/15 pt-3 text-xs tracking-[0.18em] text-[#bda66f]">
                  2025 – 2026 · 伦敦
                </p>
              </button>

              <div className="absolute bottom-4 left-4 border border-[#d7b46a]/20 bg-[#0a0a0a]/80 p-4">
                <p className="text-xs tracking-[0.35em] text-[#f0cf82]">
                  ROUTE
                </p>
                <p className="mt-2 font-serif text-lg text-[#fff4dd]">
                  Beijing → Manchester → London
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-16">
          <div className="mb-12">
            <p className="mb-3 text-xs tracking-[0.4em] text-[#f0cf82]">
              SECTION III
            </p>
            <h2 className="font-serif text-4xl text-[#fff4dd] md:text-5xl">
              Experience
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d8c7a3]">
              四段实习经历，构成了我从财务基础、银行信用、商业分析到二级市场量化研究的成长路径。
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl">
            <div className="absolute left-5 top-0 h-full w-px bg-[#d7b46a]/25 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10">
              {[...experienceData].reverse().map((exp, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={exp.id}
                    className="relative grid grid-cols-[48px_1fr] gap-4 md:grid-cols-2 md:gap-10"
                  >
                    <div className="relative z-10 flex justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f0cf82]/60 bg-[#050505] text-xs text-[#f0cf82]">
                        {exp.number}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedExperience(exp)}
                      className={`group border border-[#d7b46a]/25 bg-[#0a0a0a] p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#f0cf82]/60 md:col-span-1 ${
                        isLeft
                          ? "md:mr-10 md:col-start-1"
                          : "md:ml-10 md:col-start-2"
                      }`}
                    >
                      <p className="mb-3 text-xs tracking-[0.28em] text-[#f0cf82]">
                        {exp.start} – {exp.end}
                      </p>

                      <h3 className="font-serif text-2xl leading-snug text-[#fff4dd]">
                        {exp.company}
                      </h3>

                      <p className="mt-2 text-xs tracking-[0.2em] text-[#bda66f]">
                        {exp.companyEn}
                      </p>

                      <div className="mt-6 space-y-2 text-sm leading-7 text-[#d8c7a3]">
                        <p>
                          <span className="text-[#f0cf82]">部门：</span>
                          {exp.department}
                        </p>
                        <p>
                          <span className="text-[#f0cf82]">职位：</span>
                          {exp.role}
                        </p>
                      </div>

                      <div className="mt-8 flex items-center justify-between border-t border-[#d7b46a]/15 pt-4">
                        <span className="text-xs tracking-[0.18em] text-[#c7b58f]">
                          EXPERIENCE NODE
                        </span>
                        <span className="text-xs tracking-[0.22em] text-[#f0cf82]">
                          VIEW MORE
                        </span>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects" className="py-16">
          <div className="mb-12">
            <p className="mb-3 text-xs tracking-[0.4em] text-[#f0cf82]">
              SECTION IV
            </p>
            <h2 className="font-serif text-4xl text-[#fff4dd] md:text-5xl">
              Projects & Research
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d8c7a3]">
              一个个人项目档案夹，收录我在交易策略、衍生品定价、宏观机器学习、风险网络和因子研究中的探索。
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#6f4a25] bg-[#1b1209] p-5 shadow-2xl shadow-black md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,221,157,0.18),transparent_28%),linear-gradient(135deg,#8b5e2f,#c59a5f_42%,#7a4a22)] opacity-95" />
            <div className="absolute inset-0 opacity-[0.16] bg-[linear-gradient(to_right,#2b1a0c_1px,transparent_1px),linear-gradient(to_bottom,#2b1a0c_1px,transparent_1px)] bg-[size:38px_38px]" />

            <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-[0.9fr_1.1fr_170px]">
              <div
                className={`rounded-[22px] border border-[#3c2410]/50 bg-[#b8894f] p-7 text-[#1b1209] shadow-xl shadow-[#1b1209]/40 transition duration-500 ${
                  projectBookOpen ? "opacity-70 lg:-rotate-1" : "opacity-100"
                }`}
              >
                <div className="mb-10 flex items-center justify-between border-b border-[#3c2410]/30 pb-5">
                  <p className="text-xs tracking-[0.35em]">PROJECT DOSSIER</p>
                  <p className="text-xs tracking-[0.25em]">2024–2026</p>
                </div>

                <h3 className="font-serif text-4xl leading-tight">
                  张心瑶
                  <br />
                  个人项目档案
                </h3>

                <p className="mt-4 text-sm tracking-[0.18em]">
                  Xinyao Zhang Project Dossier
                </p>

                <p className="mt-10 text-sm leading-8">
                  这里收录的是我在金融工程、量化交易、风险建模与资产定价方向上完成过的代表性项目。
                  它们不是孤立的作业，而是我理解金融市场、模型和真实问题之间关系的过程。
                </p>

                <div className="mt-10 space-y-4 text-sm leading-7">
                  <div className="border-t border-[#3c2410]/30 pt-4">
                    <p className="tracking-[0.18em]">01 Strategy & Trading</p>
                  </div>
                  <div className="border-t border-[#3c2410]/30 pt-4">
                    <p className="tracking-[0.18em]">02 Risk & Macro</p>
                  </div>
                  <div className="border-t border-[#3c2410]/30 pt-4">
                    <p className="tracking-[0.18em]">03 Research & Publication</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setProjectBookOpen(true);
                    setActiveProjectId("options");
                  }}
                  className="mt-12 w-full rounded-full border border-[#3c2410]/40 px-5 py-3 text-center text-xs tracking-[0.25em] transition hover:bg-[#3c2410] hover:text-[#f1dfbd]"
                >
                  OPEN ARCHIVE
                </button>
              </div>

              <div
                className={`relative min-h-[620px] rounded-[18px] border border-[#d7b46a]/25 bg-[#f1dfbd] p-7 text-[#1b1209] shadow-2xl shadow-[#1b1209]/50 transition duration-500 ${
                  projectBookOpen
                    ? "translate-x-0 opacity-100 rotate-0"
                    : "translate-x-8 opacity-80 rotate-1"
                }`}
              >
                <div className="absolute -right-3 top-8 h-[86%] w-3 rounded-r-lg bg-[#d0b07a]" />
                <div className="absolute -right-6 top-12 h-[78%] w-3 rounded-r-lg bg-[#9f7340]" />

                {!projectBookOpen ? (
                  <div className="flex h-full min-h-[560px] flex-col items-center justify-center text-center">
                    <p className="mb-5 text-xs tracking-[0.35em] text-[#7a4a22]">
                      CLOSED ARCHIVE
                    </p>
                    <h3 className="font-serif text-4xl">请选择右侧索引页</h3>
                    <p className="mt-5 max-w-md text-sm leading-8 text-[#5a3518]">
                      点击右侧任一项目索引，档案册会打开，并翻到对应项目页。
                    </p>
                  </div>
                ) : (
                  <div className="animate-[fadeIn_0.35s_ease-out]">
                    <div className="mb-6 flex items-start justify-between border-b border-[#7a4a22]/25 pb-5">
                      <div>
                        <p className="mb-2 text-xs tracking-[0.32em] text-[#7a4a22]">
                          CASE FILE · {activeProject.number} /{" "}
                          {projectData.length.toString().padStart(2, "0")}
                        </p>
                        <h3 className="font-serif text-3xl leading-snug">
                          {activeProject.title}
                        </h3>
                        <p className="mt-2 text-xs tracking-[0.18em] text-[#6d4a25]">
                          {activeProject.titleEn}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => setSelectedProject(activeProject)}
                        className="hidden border border-[#7a4a22]/40 px-4 py-2 text-xs tracking-[0.2em] text-[#4b2c12] transition hover:bg-[#4b2c12] hover:text-[#f1dfbd] md:block"
                      >
                        DETAIL
                      </button>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      <span className="rounded-full border border-[#7a4a22]/30 px-3 py-1 text-xs tracking-[0.18em] text-[#5a3518]">
                        {activeProject.category}
                      </span>
                      <span className="rounded-full border border-[#7a4a22]/30 px-3 py-1 text-xs tracking-[0.18em] text-[#5a3518]">
                        {activeProject.tools}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      <div>
                        <p className="mb-2 text-xs tracking-[0.25em] text-[#7a4a22]">
                          项目背景
                        </p>
                        <p className="text-sm leading-8 text-[#3c2410]">
                          {activeProject.problem}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 text-xs tracking-[0.25em] text-[#7a4a22]">
                          方法与工具
                        </p>
                        <p className="text-sm leading-8 text-[#3c2410]">
                          {activeProject.method}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 text-xs tracking-[0.25em] text-[#7a4a22]">
                          核心结果
                        </p>
                        <p className="text-sm leading-8 text-[#3c2410]">
                          {activeProject.result}
                        </p>
                      </div>

                      <div>
                        <p className="mb-2 text-xs tracking-[0.25em] text-[#7a4a22]">
                          我的反思
                        </p>
                        <p className="font-serif text-base leading-8 text-[#2b1a0c]">
                          {activeProject.reflection}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(activeProject)}
                      className="mt-7 block w-full border border-[#7a4a22]/40 px-4 py-3 text-xs tracking-[0.24em] text-[#4b2c12] transition hover:bg-[#4b2c12] hover:text-[#f1dfbd] md:hidden"
                    >
                      VIEW DETAIL
                    </button>
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-center gap-3">
                {projectData.map((project) => {
                  const isActive = projectBookOpen && activeProject.id === project.id;

                  return (
                    <button
                      key={project.id}
                      type="button"
                      onClick={() => openProjectPage(project.id)}
                      className={`relative rounded-r-2xl border px-4 py-4 text-left shadow-lg transition duration-300 ${
                        isActive
                          ? "translate-x-0 border-[#3c2410]/50 bg-[#f1dfbd] text-[#1b1209]"
                          : "-translate-x-4 border-[#7a4a22]/40 bg-[#9c6b38] text-[#2b1a0c] hover:translate-x-0 hover:bg-[#c59a5f]"
                      }`}
                    >
                      <p className="mb-1 text-[10px] tracking-[0.25em]">
                        CASE {project.number}
                      </p>
                      <p className="font-serif text-sm leading-snug">
                        {project.folderTab}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
        <section id="more" className="py-16">
  <div className="mb-12">
    <p className="mb-3 text-xs tracking-[0.4em] text-[#f0cf82]">
      SECTION V
    </p>
    <h2 className="font-serif text-4xl text-[#fff4dd] md:text-5xl">
      More About Me
    </h2>
    <p className="mt-5 max-w-2xl text-sm leading-8 text-[#d8c7a3]">
      在模型和市场之外，我也从阅读、运动和真实现场中理解世界。
    </p>
  </div>

  {/* Bookshelf */}
  <div className="mb-16 overflow-hidden rounded-[24px] border border-[#7a4a22]/50 bg-[#1b1209] p-6 shadow-2xl shadow-black md:p-8">
    <div className="mb-8 flex items-center justify-between border-b border-[#c59a5f]/25 pb-5">
      <div>
        <p className="mb-2 text-xs tracking-[0.35em] text-[#f0cf82]">
          BOOKSHELF
        </p>
        <h3 className="font-serif text-3xl text-[#fff4dd]">
          我的精神书架
        </h3>
      </div>
      <p className="hidden text-xs tracking-[0.25em] text-[#bda66f] md:block">
        CLICK A BOOK
      </p>
    </div>

    <div className="relative rounded-2xl bg-[#2b1a0c] p-6">
      <div className="absolute left-0 right-0 top-[56%] h-4 bg-[#7a4a22] shadow-lg shadow-black/50" />
      <div className="absolute bottom-0 left-0 right-0 h-5 bg-[#5a3518]" />

      <div className="relative flex min-h-[260px] items-end gap-3 overflow-x-auto pb-8">
        {bookData.map((book, index) => (
          <button
            key={book.id}
            type="button"
            onClick={() => setSelectedBook(book)}
            className="group flex shrink-0 flex-col items-center transition duration-300 hover:-translate-y-3"
          >
            <div
              className="flex w-14 items-center justify-center rounded-t-md border border-black/20 shadow-xl shadow-black/40"
              style={{
                height: `${170 + (index % 4) * 18}px`,
                backgroundColor: book.color,
              }}
            >
              <div className="flex h-full w-full items-center justify-center px-2">
                <p
                  className="font-serif text-sm tracking-[0.2em] text-[#f8eedb]"
                  style={{
                    writingMode: "vertical-rl",
                    textOrientation: "mixed",
                  }}
                >
                  {book.title}
                </p>
              </div>
            </div>

            <p className="mt-3 w-20 text-center text-[10px] leading-4 text-[#c7b58f]">
              {book.author}
            </p>
          </button>
        ))}
      </div>
    </div>
  </div>

  {/* Ping Pong Arena */}
  <div className="overflow-hidden rounded-[24px] border border-[#d7b46a]/25 bg-[#07110d] p-6 shadow-2xl shadow-black md:p-8">
    <div className="mb-8 flex items-center justify-between border-b border-[#d7b46a]/20 pb-5">
      <div>
        <p className="mb-2 text-xs tracking-[0.35em] text-[#f0cf82]">
          PING PONG ARENA
        </p>
        <h3 className="font-serif text-3xl text-[#fff4dd]">
          我喜欢乒乓球，也喜欢现场的速度感
        </h3>
      </div>
      <p className="hidden text-xs tracking-[0.25em] text-[#bda66f] md:block">
        CLICK THE PLAYERS
      </p>
    </div>

    <div className="relative mx-auto h-[520px] max-w-4xl overflow-hidden rounded-[24px] border border-[#d7b46a]/20 bg-[#0b1f18]">
      {/* 场馆灯光 */}
      <div className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 rounded-full bg-[#f0cf82]/10 blur-3xl" />

      {/* 观众席 */}
      <div className="absolute left-0 right-0 top-0 grid grid-cols-12 gap-1 p-4 opacity-35">
        {Array.from({ length: 48 }).map((_, i) => (
          <div
            key={i}
            className="h-2 rounded-full bg-[#d7b46a]/50"
          />
        ))}
      </div>

      {/* 球台 */}
      <div className="absolute left-1/2 top-1/2 h-44 w-[520px] max-w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-lg border-4 border-[#e8f0e8] bg-[#1f6b59] shadow-2xl shadow-black">
        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-[#e8f0e8]" />
        <div className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-[#e8f0e8]" />
        <div className="absolute left-0 right-0 top-1/2 h-5 -translate-y-1/2 bg-black/40" />
      </div>

      {/* 左侧小人 London */}
      <button
        type="button"
        onClick={() => setSelectedMatch(matchData[0])}
        className="group absolute left-[18%] top-[48%] -translate-y-1/2 text-center"
      >
        <div className="mx-auto h-12 w-12 rounded-full border border-[#f0cf82] bg-[#111] shadow-[0_0_18px_rgba(240,207,130,0.35)] transition group-hover:scale-110" />
        <div className="mx-auto mt-2 h-20 w-10 rounded-t-full bg-[#d7b46a]/70 transition group-hover:bg-[#f0cf82]" />
        <p className="mt-3 text-xs tracking-[0.25em] text-[#f0cf82]">
          LONDON
        </p>
      </button>

      {/* 右侧小人 Frankfurt */}
      <button
        type="button"
        onClick={() => setSelectedMatch(matchData[1])}
        className="group absolute right-[18%] top-[48%] -translate-y-1/2 text-center"
      >
        <div className="mx-auto h-12 w-12 rounded-full border border-[#f0cf82] bg-[#111] shadow-[0_0_18px_rgba(240,207,130,0.35)] transition group-hover:scale-110" />
        <div className="mx-auto mt-2 h-20 w-10 rounded-t-full bg-[#d7b46a]/70 transition group-hover:bg-[#f0cf82]" />
        <p className="mt-3 text-xs tracking-[0.25em] text-[#f0cf82]">
          FRANKFURT
        </p>
      </button>

      {/* 乒乓球 */}
      <div className="absolute left-[53%] top-[42%] h-4 w-4 rounded-full bg-[#fff4dd] shadow-[0_0_16px_rgba(255,244,221,0.8)]" />

      <div className="absolute bottom-5 left-5 border border-[#d7b46a]/20 bg-[#07110d]/80 p-4">
        <p className="text-xs tracking-[0.35em] text-[#f0cf82]">
          LIVE MATCHES
        </p>
        <p className="mt-2 font-serif text-lg text-[#fff4dd]">
          London · Frankfurt
        </p>
      </div>
    </div>
  </div>
</section>
      </div>

      {selectedProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-[#d7b46a]/30 bg-[#0b0b0b] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProfile(null)}
              className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#d8c7a3] transition hover:text-[#fff4dd]"
            >
              CLOSE
            </button>

            <p className="mb-3 text-xs tracking-[0.35em] text-[#f0cf82]">
              {selectedProfile.number} · {selectedProfile.english}
            </p>

            <h3 className="font-serif text-3xl text-[#fff4dd]">
              {selectedProfile.title}
            </h3>

            {selectedProfile.intro && (
              <p className="mt-8 border-t border-[#d7b46a]/15 pt-6 text-base leading-9 text-[#e3d4b7]">
                {selectedProfile.intro}
              </p>
            )}

            {selectedProfile.id === "image" && (
              <div className="mt-8 space-y-6">
                <div className="border border-[#d7b46a]/20 bg-[#111] p-4">
                  <p className="mb-4 text-xs tracking-[0.25em] text-[#f0cf82]">
                    MAIN VIDEO
                  </p>

                  <div className="flex justify-center bg-[#050505] py-5">
                    <video
                      src="/videos/main-video.mp4"
                      controls
                      className="h-[500px] max-h-[68vh] w-auto object-contain"
                    />
                  </div>
                </div>

                <div className="border border-[#d7b46a]/20 bg-[#111] p-4">
                  <p className="mb-4 text-xs tracking-[0.25em] text-[#f0cf82]">
                    IMAGE ARCHIVE
                  </p>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {[
                      {
                        src: "/images/professional.jpg",
                        alt: "Professional portrait",
                        label: "Professional Portrait",
                      },
                      {
                        src: "/images/life-01.jpg",
                        alt: "Life moment 01",
                        label: "Life Moment 01",
                      },
                      {
                        src: "/images/life-02.jpg",
                        alt: "Life moment 02",
                        label: "Life Moment 02",
                      },
                      {
                        src: "/images/life-03.jpg",
                        alt: "Life moment 03",
                        label: "Life Moment 03",
                      },
                    ].map((image) => (
                      <div
                        key={image.src}
                        className="border border-[#d7b46a]/15 bg-[#050505] p-3"
                      >
                        <div className="flex h-72 items-center justify-center overflow-hidden">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <p className="mt-3 text-xs tracking-[0.18em] text-[#9f8a5f]">
                          {image.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedProfile.sections && (
              <div className="mt-8 space-y-7 border-t border-[#d7b46a]/15 pt-6">
                {selectedProfile.sections.map((section, index) => (
                  <div key={section.title}>
                    <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                      {String(index + 1).padStart(2, "0")} · {section.title}
                    </p>
                    <p className="text-sm leading-8 text-[#e3d4b7]">
                      {section.body}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {selectedProfile.videoCards && (
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {selectedProfile.videoCards.map((video) => (
                  <div
                    key={video.title}
                    className="border border-[#d7b46a]/20 bg-[#111] p-5"
                  >
                    <div className="mb-4 overflow-hidden border border-[#d7b46a]/15 bg-[#050505]">
                      <div className="flex h-80 w-full items-center justify-center bg-[#050505]">
                        <img
                          src={video.cover}
                          alt={video.title}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    </div>

                    <h4 className="font-serif text-xl text-[#fff4dd]">
                      {video.title}
                    </h4>

                    <p className="mt-3 text-sm leading-7 text-[#d8c7a3]">
                      {video.desc}
                    </p>

                    {video.link && (
                      <a
                        href={video.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-block border border-[#d7b46a]/30 px-4 py-2 text-xs tracking-[0.22em] text-[#f0cf82] transition hover:border-[#f0cf82] hover:bg-[#d7b46a]/10"
                      >
                        查看视频
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {selectedEdu && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-[#d7b46a]/30 bg-[#0b0b0b] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedEdu(null)}
              className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#d8c7a3] transition hover:text-[#fff4dd]"
            >
              CLOSE
            </button>

            <p className="mb-3 text-xs tracking-[0.35em] text-[#f0cf82]">
              EDUCATION DETAIL
            </p>

            <h3 className="font-serif text-3xl text-[#fff4dd]">
              {selectedEdu.school}
            </h3>

            <div className="mt-6 space-y-3 text-sm leading-8 text-[#e3d4b7]">
              <p>
                <span className="text-[#f0cf82]">项目：</span>
                {selectedEdu.program}
              </p>
              <p>
                <span className="text-[#f0cf82]">学院：</span>
                {selectedEdu.faculty}
              </p>
              <p>
                <span className="text-[#f0cf82]">时间：</span>
                {selectedEdu.period}
              </p>
              <p>
                <span className="text-[#f0cf82]">地点：</span>
                {selectedEdu.location}
              </p>
            </div>

            <div className="mt-8 space-y-7 border-t border-[#d7b46a]/15 pt-6">
              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  学习重点
                </p>
                <p className="text-sm leading-8 text-[#d8c7a3]">
                  {selectedEdu.focus}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  一句话总结
                </p>
                <p className="font-serif text-base leading-8 text-[#e3d4b7]">
                  {selectedEdu.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedExperience && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-[#d7b46a]/30 bg-[#0b0b0b] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedExperience(null)}
              className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#d8c7a3] transition hover:text-[#fff4dd]"
            >
              CLOSE
            </button>

            <p className="mb-3 text-xs tracking-[0.35em] text-[#f0cf82]">
              EXPERIENCE DETAIL · {selectedExperience.number}
            </p>

            <h3 className="font-serif text-3xl text-[#fff4dd]">
              {selectedExperience.company}
            </h3>

            <p className="mt-2 text-xs tracking-[0.25em] text-[#bda66f]">
              {selectedExperience.companyEn}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-[#d7b46a]/15 pt-6 text-sm leading-8 text-[#e3d4b7] md:grid-cols-2">
              <p>
                <span className="text-[#f0cf82]">部门：</span>
                {selectedExperience.department}
              </p>
              <p>
                <span className="text-[#f0cf82]">职位：</span>
                {selectedExperience.role}
              </p>
              <p>
                <span className="text-[#f0cf82]">开始时间：</span>
                {selectedExperience.start}
              </p>
              <p>
                <span className="text-[#f0cf82]">结束时间：</span>
                {selectedExperience.end}
              </p>
            </div>

            <div className="mt-8 space-y-7 border-t border-[#d7b46a]/15 pt-6">
              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  工作内容
                </p>
                <p className="text-sm leading-8 text-[#d8c7a3]">
                  {selectedExperience.content}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  工作成果
                </p>
                <p className="font-serif text-base leading-8 text-[#e3d4b7]">
                  {selectedExperience.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
          <div className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto border border-[#d7b46a]/30 bg-[#0b0b0b] p-8 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#d8c7a3] transition hover:text-[#fff4dd]"
            >
              CLOSE
            </button>

            <p className="mb-3 text-xs tracking-[0.35em] text-[#f0cf82]">
              PROJECT DETAIL · {selectedProject.number}
            </p>

            <h3 className="font-serif text-3xl text-[#fff4dd]">
              {selectedProject.title}
            </h3>

            <p className="mt-2 text-xs tracking-[0.25em] text-[#bda66f]">
              {selectedProject.titleEn} · {selectedProject.category}
            </p>

            <div className="mt-8 space-y-7 border-t border-[#d7b46a]/15 pt-6">
              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  项目背景
                </p>
                <p className="text-sm leading-8 text-[#d8c7a3]">
                  {selectedProject.problem}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  方法与工具
                </p>
                <p className="text-sm leading-8 text-[#d8c7a3]">
                  {selectedProject.method}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  核心结果
                </p>
                <p className="text-sm leading-8 text-[#d8c7a3]">
                  {selectedProject.result}
                </p>
              </div>

              <div>
                <p className="mb-3 text-xs tracking-[0.25em] text-[#f0cf82]">
                  我的反思
                </p>
                <p className="font-serif text-base leading-8 text-[#e3d4b7]">
                  {selectedProject.reflection}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      {selectedBook && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
    <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-[#7a4a22]/50 bg-[#f1dfbd] p-8 text-[#1b1209] shadow-2xl">
      <button
        type="button"
        onClick={() => setSelectedBook(null)}
        className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#6d4a25] transition hover:text-[#1b1209]"
      >
        CLOSE
      </button>

      <p className="mb-3 text-xs tracking-[0.35em] text-[#7a4a22]">
        BOOK NOTE
      </p>

      <h3 className="font-serif text-3xl">{selectedBook.title}</h3>
      <p className="mt-2 text-sm tracking-[0.2em] text-[#6d4a25]">
        {selectedBook.author}
      </p>

      <div className="mt-8 border-t border-[#7a4a22]/25 pt-6">
        <p className="font-serif text-lg leading-9">
          {selectedBook.note}
        </p>
      </div>
    </div>
  </div>
)}

{selectedMatch && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4">
    <div className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto border border-[#d7b46a]/30 bg-[#0b0b0b] p-8 shadow-2xl">
      <button
        type="button"
        onClick={() => setSelectedMatch(null)}
        className="absolute right-5 top-5 text-sm tracking-[0.2em] text-[#d8c7a3] transition hover:text-[#fff4dd]"
      >
        CLOSE
      </button>

      <p className="mb-3 text-xs tracking-[0.35em] text-[#f0cf82]">
        PING PONG MEMORY · {selectedMatch.city}
      </p>

      <h3 className="font-serif text-3xl text-[#fff4dd]">
        {selectedMatch.title}
      </h3>

      <div className="mt-8 border-t border-[#d7b46a]/15 pt-6">
        <p className="text-base leading-9 text-[#e3d4b7]">
          {selectedMatch.note}
        </p>
      </div>
    </div>
  </div>
)}
    </main>
  );
}
