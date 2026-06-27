import type { Candidate } from '@/types';

// 数据来源：小x宝2026黑客松_最佳选题统计与问卷设计.xlsx「项目描述」表，原样保留 12 条参赛作品。
export const CANDIDATES: Candidate[] = [
  {
    candidateId: 'C01',
    team: '老熊玩AI',
    kind: 'Studio',
    displayName: '社区急救助手 Rescue Agent',
    category: '院前急救 / 社区应急',
    summary:
      '面向社区场景的 AI 急救辅助应用，帮助普通人在紧急情况下获得分步指导、分诊和附近资源。',
    highlights:
      '支持语音/文字/图片输入；提供红黄绿智能分诊、院前急救指导、AED/医院定位、急救知识/视频/药物查询；接入 KnowS 做循证知识验证。',
    audience: '社区居民、家庭照护者、志愿者、基层急救培训场景。',
    link: 'https://adambear-rescue-agent.ms.show/',
    linkAvailable: true,
  },
  {
    candidateId: 'C02',
    team: 'yuppiez99999 / yuppiez',
    kind: 'MCP',
    displayName: '医疗数据质量评估 MCP Tool',
    category: '医疗数据治理 / 医疗 AI 质控',
    summary:
      '基于 MCP 的医疗数据质量评估与循证辅助工具，为医疗 AI 训练数据提供质量评分和分类。',
    highlights:
      '提供 4 维度评分（完整性、准确性、时效性、合规性）、8 科室自动分类、质量报告、相似数据检索和循证文献支持；强调脱敏 Token 数据与合规声明。同时提供 GitHub 仓库与 ModelScope MCP 服务展示链接。',
    audience: '医疗机构数据部门、医疗 AI 研发团队、医学数据研究员、数据交易/登记机构。',
    link: 'https://github.com/yuppiez99999/-MCP-Tool-Medical-Data-QA-MCP-',
    altLink: { label: 'ModelScope MCP 服务', url: 'https://modelscope.cn/mcp/servers/yuppiez/leo' },
    linkAvailable: true,
  },
  {
    candidateId: 'C03',
    team: '小胰宝老登',
    kind: 'Agent Skill',
    displayName: 'NCCN 官方指南和患者手册下载技能',
    category: '肿瘤指南获取 / 患者教育',
    summary:
      '围绕 NCCN 指南和患者手册的引导式下载技能，帮助用户按主题、语言和癌种找到权威 PDF。',
    highlights:
      '支持临床实践指南、患者指南、中文/英文筛选、65 个癌种别名匹配和 PDF 列表选择；适合快速获取权威肿瘤指南资料。',
    audience: '肿瘤患者和家属、医学生、科研人员、患者社群志愿者。',
    link: 'https://modelscope.cn/skills/caiql2002SH/nccn-guideline-downloader',
    linkAvailable: true,
  },
  {
    candidateId: 'C04',
    team: '小胰宝老登',
    kind: 'Agent Skill',
    displayName: 'ClinicalTrials 肿瘤临床试验情报技能',
    category: '临床试验情报 / 患者社群推送',
    summary:
      '面向胰腺癌的临床试验情报自动化系统，抓取、翻译、清洗并多渠道推送新试验信息。',
    highlights:
      '从 ClinicalTrials.gov 抓取试验，生成中文精翻和报告，同步 FastGPT RAG 知识库，并支持 Telegram、微信群、飞书、FastGPT 多渠道推送。',
    audience: '肿瘤患者社群、患者导航志愿者、研究者、临床试验招募关注者。',
    link: 'https://modelscope.cn/skills/caiql2002SH/clinicaltrials-intel-skill',
    linkAvailable: true,
  },
  {
    candidateId: 'C05',
    team: '小胰宝老登',
    kind: 'Agent Skill',
    displayName: 'FastGPT 内容处理器',
    category: '知识库建设 / RAG 内容运营',
    summary:
      '面向 FastGPT 知识库的内容处理工作流，完成文章下载、清洗、标签摘要、QA 评分和入库。',
    highlights:
      '支持微信文章下载与清洗、LLM 生成 summary/description/tags、QA 质量评分、低质内容跳过、FastGPT 数据集上传。',
    audience: '医学知识库运营者、患者社群内容志愿者、RAG 应用维护者。',
    link: 'https://modelscope.cn/skills/caiql2002SH/RAG-content-processor',
    linkAvailable: true,
  },
  {
    candidateId: 'C06',
    team: '科研虾',
    kind: 'Agent Skill',
    displayName: '肿瘤文献综述助手 LifeScience Research Copilot',
    category: '科研综述 / 循证检索',
    summary:
      '输入“基因/突变 x 癌种 x 研究问题”，自动生成带真实 PMID/NCT 溯源的结构化中文综述。',
    highlights:
      '检索 PubMed/Europe PMC 最新文献和 ClinicalTrials.gov 在研试验，输出 Markdown/HTML/PDF；强调引用注册表和零幻觉校验。',
    audience: '肿瘤科研人员、医学生、课题调研人员、患者社群医学志愿者。',
    link: 'https://modelscope.cn/skills/lskcan/kebab-case/file/view/master/README.md?status=1',
    linkAvailable: true,
  },
  {
    candidateId: 'C07',
    team: '猫狗乐翻天',
    kind: 'Studio',
    displayName: '小药安 MedSafe Copilot',
    category: '用药安全 / 家庭照护',
    summary:
      '面向大众和家庭照护者的用药安全科普工具，帮助识别药物、食物和老年用药清单风险。',
    highlights:
      '支持药物-药物相互作用、食物-药物冲突、说明书大白话解读、老年人用药清单批量风险筛查；强调仅科普不替代医嘱。',
    audience: '家庭照护者、老年慢病患者、药师科普、社区健康管理场景。',
    link: 'https://www.modelscope.cn/studios/catbohe/medsafe-copilot',
    linkAvailable: true,
  },
  {
    candidateId: 'C08',
    team: '小图宝lihb',
    kind: 'Agent Skill',
    displayName: '医学检测报告格式化器',
    category: '医学报告结构化 / 健康档案',
    summary:
      '将医学检测报告 PDF、图片或手写单据识别为标准化结构数据，并做本地规则验证。',
    highlights:
      'AI 视觉识别提取医院、日期、检测项目、结果、单位、参考范围；输出 detection_results.js；本地 JS 规则引擎做数值边界验证，避免大模型幻觉影响验证。',
    audience: '个人健康档案管理者、检测报告整理场景、医学研究数据采集者。',
    link: 'https://modelscope.cn/skills/lihb0612/medical-report-formatter/summary',
    linkAvailable: true,
  },
  {
    candidateId: 'C09',
    team: '小x宝老登',
    kind: 'Agent Skill',
    displayName: '智能病案整理助手 Patient Record Organizer',
    category: '病历归档 / 患者资料管理',
    summary:
      '把照片、PDF、文本、录音等零散医疗资料自动分类归档，生成结构化病例档案和诊疗时间线。',
    highlights:
      '支持图片 OCR、PDF 文本/扫描件解析、录音 ASR、Word/文本读取；按基本信息、检验、影像、病理、用药、诊疗记录等体系归档；缓存提取结果并标注失败项。',
    audience: '肿瘤患者和家属、患者导航志愿者、就诊前资料整理场景。',
    link: 'https://modelscope.cn/skills/Opencare/Medical-Record-Organizer/setting',
    linkAvailable: true,
  },
  {
    candidateId: 'C10',
    team: '安然',
    kind: 'MCP',
    displayName: 'yuppiez/healthcare（待补链）',
    category: '待确认',
    summary: '当前链接为本地域名或占位符，无法解析公开项目信息。',
    highlights:
      '访问 http://yuppiez/healthcare 时 DNS 无法解析；从报名电话看可能与 yuppiez 相关，但无法确认项目目标、功能和完成度。',
    audience: '待作者补充公开链接后再判断。',
    link: 'http://yuppiez/healthcare',
    linkAvailable: false,
  },
  {
    candidateId: 'C11',
    team: 'MedEvidence A',
    kind: 'Agent Skill',
    displayName: 'MedEvidence AI',
    category: '循证医学检索 / 文献证据分级',
    summary:
      '医学循证智能检索助手，按查询问题返回文献、证据等级分布、摘要和临床要点。',
    highlights:
      '提供 /api/v1/search 和 quick search；支持证据等级筛选、年份范围、中文/英文标题和摘要、临床意义、相关度、证据分布统计、智能摘要与 clinical takeaway。',
    audience: '医学研究者、临床问题检索者、医学内容审核者、循证医学学习者。',
    link: 'https://gsym236998-medevidence-ai.ms.show',
    linkAvailable: true,
  },
];
