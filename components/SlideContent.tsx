import React from 'react';
import { 
  Cpu, GraduationCap, Award, Zap, TrendingUp, CheckCircle, 
  Users, FileText, Lightbulb, BarChart2 
} from 'lucide-react';
import { SlideData } from '../types';

export const slides: SlideData[] = [
  {
    id: 0,
    title: "封面",
    note: "開場自信大方。強調這四個關鍵字，讓面試官第一時間建立你具備「整合」與「開發」雙重能力的印象。",
    component: (
      <div className="flex flex-col items-center justify-center h-full text-center space-y-8 animate-fadeIn">
        <div className="bg-blue-600 text-white p-4 rounded-full mb-4 shadow-lg shadow-blue-200">
          <Cpu size={64} />
        </div>
        <h1 className="text-4xl font-bold text-slate-800 tracking-wide leading-tight">
          製程整合/開發工程師<br/>面試簡報
        </h1>
        <div className="w-24 h-1 bg-blue-500 rounded"></div>
        <div className="text-xl text-slate-600 space-y-2">
          <p className="font-semibold text-2xl">報告人：黃勤 (Chin Huang)</p>
          <p>2025.12.09</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["NPI Integration", "Process Development", "Yield Improvement", "Data Analysis"].map((tag) => (
            <span key={tag} className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium border border-slate-200 shadow-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "個人簡介 (Profile)",
    note: "簡單帶過學歷，重點放在「核心技能」。強調你會用 Power BI 和 VBA 做自動化，這在製程整合工作中是非常加分的亮點。",
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center animate-fadeIn">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="flex items-center text-xl font-bold text-blue-700 mb-4">
              <GraduationCap className="mr-2" /> 學歷背景
            </h3>
            <ul className="space-y-4">
              <li className="relative pl-4 border-l-4 border-blue-400">
                <div className="font-bold text-lg text-slate-800">國立中央大學 (2020-2022)</div>
                <div className="text-slate-600">機械工程學系碩士班 (先進材料組)</div>
                <div className="text-blue-600 font-medium">GPA: 4.1/4.3</div>
              </li>
              <li className="relative pl-4 border-l-4 border-slate-300">
                <div className="font-bold text-lg text-slate-800">國立台南大學 (2016-2020)</div>
                <div className="text-slate-600">材料科學系</div>
                <div className="text-slate-500">GPA: 3.7/4.3</div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="flex items-center text-xl font-bold text-blue-700 mb-4">
              <Award className="mr-2" /> 語言能力
            </h3>
            <div className="flex gap-4">
              <div className="flex-1 bg-blue-50 p-3 rounded text-center">
                <div className="font-bold text-blue-800">英文</div>
                <div className="text-sm text-slate-600">TOEIC 740 (精通聽讀)</div>
              </div>
              <div className="flex-1 bg-blue-50 p-3 rounded text-center">
                <div className="font-bold text-blue-800">日文</div>
                <div className="text-sm text-slate-600">JLPT N2</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl h-full border border-slate-200">
          <h3 className="flex items-center text-xl font-bold text-slate-800 mb-6">
            <Zap className="mr-2 text-yellow-500" /> 核心技能
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-slate-700 mb-2">製程技能</h4>
              <div className="flex flex-wrap gap-2">
                {["NPI 導入", "DOE 實驗設計", "SPC 統計製程管制", "失效分析 (SEM/EDS)"].map(skill => (
                  <span key={skill} className="px-3 py-1 bg-white border border-slate-300 rounded text-sm text-slate-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-slate-700 mb-2">軟體工具</h4>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Power BI / Excel VBA</span>
                    <span className="text-xs text-blue-600 font-bold">Expert</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700">Python (Learning)</span>
                    <span className="text-xs text-green-600 font-bold">Intermediate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "40%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "工作經歷 (Work Experience)",
    note: "用時間軸呈現，展現職涯的延續性。重點強調穩懋的經驗，因為這是你目前的職位，且直接相關（NPI, VCSEL）。",
    component: (
      <div className="space-y-6 animate-fadeIn">
        {/* Job 1 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-md shadow-blue-200"></div>
            <div className="w-0.5 h-full bg-blue-200"></div>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-l-blue-600 w-full hover:shadow-lg transition-shadow">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-800">穩懋半導體 (Win Semiconductors)</h3>
                <p className="text-blue-600 font-medium">VCSEL 製程開發工程師</p>
              </div>
              <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded mt-2 sm:mt-0">2024.01 - Present</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
              <li>負責美系一級客戶 (Face ID & Data Center) 產品之 <span className="font-bold text-blue-700">NPI 導入</span> 與製程開發。</li>
              <li>主導兩大產品線從 Tape-out 到 Pilot Run/Safe Launch。</li>
              <li>專注於光罩成本降低、良率提升與自動化報表系統建立。</li>
            </ul>
          </div>
        </div>

        {/* Job 2 */}
        <div className="flex gap-4">
          <div className="flex flex-col items-center">
            <div className="w-4 h-4 bg-slate-400 rounded-full"></div>
            <div className="w-0.5 h-full bg-slate-200"></div>
          </div>
          <div className="bg-slate-50 p-5 rounded-lg border border-slate-200 w-full opacity-90 hover:opacity-100 transition-opacity">
            <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-slate-800">群創光電 (Innolux)</h3>
                <p className="text-slate-600 font-medium">FOPLP 製程設備工程師</p>
              </div>
              <span className="text-sm text-slate-500 bg-white px-2 py-1 rounded border mt-2 sm:mt-0">2023.01 - 2024.01</span>
            </div>
            <ul className="list-disc list-outside ml-5 text-slate-700 space-y-1 text-sm">
              <li>負責先進封裝 (Fan-out Panel Level Packaging) 濕製程良率改善。</li>
              <li>建立 Defect Library 與機台 SOP，提升異常處理效率。</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "重點專案一：VCSEL 製程開發 (Innovation)",
    note: "如果是面試「製程開發」，這一頁最重要！口語請強調：因為 BCB 非感光，你如何透過獨創的蝕刻邏輯來克服物理限制。強調那個 IP 專利。",
    component: (
      <div className="h-full flex flex-col animate-fadeIn">
        <div className="bg-blue-50 p-3 rounded-lg mb-4 border border-blue-100 flex items-center justify-between">
          <span className="font-bold text-blue-800 text-lg">專案：無光罩 BCB 雙段回蝕製程</span>
          <span className="text-xs bg-blue-200 text-blue-900 px-2 py-1 rounded font-mono">Internal IP: 2025-IP-007</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-grow">
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-2 border-b pb-2">Situation & Task</h4>
              <p className="text-sm text-slate-600 mb-2">
                <span className="font-semibold text-slate-800">背景：</span> 需在高深寬比 Trench 結構填入 Low-k BCB 降寄生電容。
              </p>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-800">挑戰：</span> BCB 為非感光材料，傳統需額外光罩，且需避免損傷結構。
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200">
              <h4 className="font-bold text-slate-700 mb-2 border-b pb-2">Action (技術突破)</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li className="flex items-start"><CheckCircle className="mr-2 text-green-500 w-4 h-4 mt-0.5" /> 開發「無光罩塗佈」技術。</li>
                <li className="flex items-start"><CheckCircle className="mr-2 text-green-500 w-4 h-4 mt-0.5" /> <b>雙段式乾蝕刻 (DOE 優化)：</b></li>
                <li className="pl-8 text-xs text-slate-500">1. 抓取 EPD 訊號 Falling 5~10%。</li>
                <li className="pl-8 text-xs text-slate-500">2. 調整氣體比例提高選擇比，保護 SiNx。</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform">
              <TrendingUp className="mx-auto mb-2 opacity-80 w-12 h-12" />
              <div className="text-3xl font-bold mb-1">NT$ 40,000</div>
              <div className="text-sm opacity-90">Cost Down (每 Tape-out)</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow border border-slate-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-1">3 款</div>
              <div className="text-sm text-slate-500">成功導入客戶產品</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "重點專案二：製程優化 (Optimization)",
    note: "這頁展示你的數據分析能力。提到 R-squared 值會讓你的 DOE 結果更具可信度。適合強調你「不僅解決問題，還建立了系統性規範」。",
    component: (
      <div className="h-full flex flex-col animate-fadeIn">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-800">DRC (設計規則檢查) 優化與良率提升</h3>
          <p className="text-slate-500">運用統計方法建立回歸預測模型</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 h-full">
          <div className="w-full md:w-1/2 flex flex-col gap-4">
            <div className="bg-red-50 p-4 rounded-lg border border-red-100">
              <span className="font-bold text-red-700 block mb-1">問題點 (Pain Point)</span>
              <p className="text-sm text-slate-700">既有 POR recipe 在高厚度產品發生 Street 異色與 GaAs damage，良率下降。</p>
            </div>
            
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 flex-grow">
              <span className="font-bold text-blue-700 block mb-2">解決方案 (Action)</span>
              <ul className="text-sm space-y-3 text-slate-700">
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">統計</span>
                  <span>執行 12 run 全因子 DOE (Full-factorial)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">建模</span>
                  <span>建立蝕刻損耗回歸模型 (R² = 94.81%)</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-200 text-blue-800 text-xs px-2 py-0.5 rounded mr-2 mt-0.5 whitespace-nowrap">規範</span>
                  <span>優化內部 DRC，定義 Open-ratio 與厚度切換點</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/2 bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-center items-center shadow-sm">
            <h4 className="font-bold text-slate-700 mb-6">成果量化</h4>
            
            <div className="w-full space-y-6">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Cap Layer Loss</span>
                  <span className="text-green-600 font-bold">-30% (改善)</span>
                </div>
                <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                  <div className="bg-gray-400 h-full w-full relative">
                    <div className="absolute top-0 right-0 bg-green-500 h-full w-[30%]"></div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>產品良率 (Yield)</span>
                  <span className="text-blue-600 font-bold">+15% (提升)</span>
                </div>
                <div className="flex items-end gap-2 h-24 border-b border-slate-300 pb-1">
                  <div className="w-1/2 bg-gray-300 h-[60%] rounded-t flex items-center justify-center text-xs text-white">Before</div>
                  <div className="w-1/2 bg-blue-500 h-[75%] rounded-t flex items-center justify-center text-xs text-white">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 5,
    title: "重點專案三：異常分析與良率提升",
    note: "這裡將兩個不同公司的案例並列，顯示你解決問題的能力是可遷移的（Transferable Skills）。圖形化良率的巨大躍升 (65% -> 97%) 很有視覺衝擊力。",
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full animate-fadeIn">
        {/* Case A */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:border-blue-300 transition-colors">
          <div className="border-b pb-3 mb-3">
            <h3 className="font-bold text-lg text-slate-800">案例 A: 高密度 Bump 殘留 (Win Semi)</h3>
            <p className="text-xs text-slate-500">Stripping 製程異常改善</p>
          </div>
          
          <div className="space-y-4 text-sm flex-grow">
            <div>
              <span className="font-bold text-red-600 text-xs">問題：</span>
              <p className="text-slate-700">Pillar 密度為一般 20 倍，導致 UBM 殘留嚴重。</p>
            </div>
            <div>
              <span className="font-bold text-blue-600 text-xs">對策：</span>
              <p className="text-slate-700">導入 2 段式浸泡、優化參數與 Wafer 轉向策略。</p>
            </div>
            <div className="bg-slate-50 p-3 rounded mt-2">
              <span className="font-bold text-green-600 text-xs block mb-1">良率提升</span>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500">80%</div>
                <div className="flex-grow bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                </div>
                <div className="text-sm font-bold text-green-700">97%+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Case B */}
        <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:border-blue-300 transition-colors">
          <div className="border-b pb-3 mb-3">
            <h3 className="font-bold text-lg text-slate-800">案例 B: 清洗良率提升 (Innolux)</h3>
            <p className="text-xs text-slate-500">FOPLP 新機台導入</p>
          </div>
          
          <div className="space-y-4 text-sm flex-grow">
            <div>
              <span className="font-bold text-red-600 text-xs">問題：</span>
              <p className="text-slate-700">超音波清洗能力不佳，良率僅 65%。</p>
            </div>
            <div>
              <span className="font-bold text-blue-600 text-xs">對策：</span>
              <p className="text-slate-700">執行 3x3 全因子 DOE (Power vs. Time) 找最佳解。</p>
            </div>
            <div className="bg-slate-50 p-3 rounded mt-2">
              <span className="font-bold text-green-600 text-xs block mb-1">良率提升</span>
              <div className="flex items-center gap-2">
                <div className="text-xs text-gray-500">65%</div>
                <div className="flex-grow bg-gray-200 h-2 rounded-full">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "97%" }}></div>
                </div>
                <div className="text-sm font-bold text-green-700">97%</div>
              </div>
              <div className="text-xs text-right text-green-600 mt-1">縮短 50% 製程時間</div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 6,
    title: "跨部門溝通與自動化 (Integration)",
    note: "如果是面試「製程整合」，請花多點時間講 WAT 案例。強調你不只顧好自己的一站，還有能力看前後段的製程交互影響 (Process Interaction)。",
    component: (
      <div className="space-y-6 h-full animate-fadeIn">
        {/* Section 1 */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-yellow-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <Users className="text-yellow-600 mr-3 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg text-slate-800">WAT 異常阻值分析 (Cross-process)</h3>
              <p className="text-sm text-slate-600 mt-1">
                在 WAT 階段主動發現 Implant 深度不足。
              </p>
              <div className="mt-3 text-sm bg-yellow-50 p-3 rounded text-slate-700">
                <strong>結果：</strong> 協同前後段分析交互作用 (Interaction)，調整膜厚設計，成功杜絕後續批次異常。
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="bg-white p-5 rounded-lg border-l-4 border-blue-500 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start">
            <FileText className="text-blue-600 mr-3 mt-1 flex-shrink-0" />
            <div className="w-full">
              <h3 className="font-bold text-lg text-slate-800">自動化報表系統開發 (Automation)</h3>
              <div className="grid grid-cols-3 gap-4 mt-3">
                <div className="text-center">
                  <div className="text-xs text-slate-500">痛點</div>
                  <div className="font-bold text-red-500">每週耗費 6 小時</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-xs text-slate-500">行動</div>
                  <div className="font-bold text-blue-600">MES 資料串接</div>
                </div>
                <div className="text-center">
                  <div className="text-xs text-slate-500">成果</div>
                  <div className="font-bold text-green-600">即時查詢 / 自動化</div>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-2 text-right">Tools: Excel VBA, Power BI</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: "碩士論文研究 (Thesis)",
    note: "論文部分不用講太細，重點是展現你具備「獨立研究」與「實驗設計」的邏輯。強調你會操作儀器跟分析數據即可。",
    component: (
      <div className="flex flex-col h-full justify-center animate-fadeIn">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-2 leading-relaxed">
            Ni-W-Zn 三元合金微柱、微螺旋之製備<br className="hidden md:inline"/>及其產氫行為探討
          </h2>
          <p className="text-slate-500">國立中央大學 機械所</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center flex flex-col">
            <Lightbulb className="mx-auto text-yellow-500 mb-2 w-8 h-8" />
            <h4 className="font-bold text-slate-700 mb-2">研究目的</h4>
            <p className="text-sm text-slate-600 text-left flex-grow">
              開發綠色能源材料，利用化學電鍍手法製備合金電極，應用於水解產氫。
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center flex flex-col">
            <BarChart2 className="mx-auto text-blue-500 mb-2 w-8 h-8" />
            <h4 className="font-bold text-slate-700 mb-2">實驗方法</h4>
            <p className="text-sm text-slate-600 text-left flex-grow">
              1. 調整鍍浴參數 (Zn濃度、電壓)。<br/>
              2. 電化學分析 (LSV, EIS, CV) 驗證效能。
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center flex flex-col">
            <Award className="mx-auto text-green-500 mb-2 w-8 h-8" />
            <h4 className="font-bold text-slate-700 mb-2">結論</h4>
            <p className="text-sm text-slate-600 text-left flex-grow">
              成功製備具高催化活性與穩定性之電極材料，證明合金成分對產氫效率之關鍵影響。
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 8,
    title: "總結：為什麼我是合適的人選？",
    note: "最後一頁是加深印象的關鍵。眼神堅定，用肯定的語氣複述這四點優勢。展現你已經準備好立即為公司帶來貢獻。",
    component: (
      <div className="h-full flex flex-col justify-center space-y-6 animate-fadeIn">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 flex items-start">
            <div className="bg-blue-600 text-white p-2 rounded-full mr-4 text-lg font-bold w-10 h-10 flex items-center justify-center flex-shrink-0">1</div>
            <div>
              <h3 className="font-bold text-blue-800 text-lg">紮實的製程整合經驗</h3>
              <p className="text-slate-600 text-sm mt-1">完整 NPI 經驗 (Tape-out 到 Mass Production)，橫跨 VCSEL 與 FOPLP 領域。</p>
            </div>
          </div>

          <div className="bg-green-50 p-5 rounded-xl border border-green-100 flex items-start">
            <div className="bg-green-600 text-white p-2 rounded-full mr-4 text-lg font-bold w-10 h-10 flex items-center justify-center flex-shrink-0">2</div>
            <div>
              <h3 className="font-bold text-green-800 text-lg">數據驅動解決問題</h3>
              <p className="text-slate-600 text-sm mt-1">熟練 DOE 與統計分析，實績包含 Yield 提升 30% 與 Cost Down 40k。</p>
            </div>
          </div>

          <div className="bg-orange-50 p-5 rounded-xl border border-orange-100 flex items-start">
            <div className="bg-orange-500 text-white p-2 rounded-full mr-4 text-lg font-bold w-10 h-10 flex items-center justify-center flex-shrink-0">3</div>
            <div>
              <h3 className="font-bold text-orange-800 text-lg">跨部門協作與當責</h3>
              <p className="text-slate-600 text-sm mt-1">具備 Cross-process 敏銳度 (WAT案例) 與領導自動化專案能力。</p>
            </div>
          </div>

          <div className="bg-purple-50 p-5 rounded-xl border border-purple-100 flex items-start">
            <div className="bg-purple-600 text-white p-2 rounded-full mr-4 text-lg font-bold w-10 h-10 flex items-center justify-center flex-shrink-0">4</div>
            <div>
              <h3 className="font-bold text-purple-800 text-lg">持續學習潛力</h3>
              <p className="text-slate-600 text-sm mt-1">TOEIC 740 / JLPT N2，積極精進 AI 與 Python 數據分析。</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8 pt-6 border-t border-slate-200">
          <h2 className="text-2xl font-bold text-slate-800">Thank You For Your Attention</h2>
          <p className="text-slate-500 mt-2">黃勤 Chin Huang | 2025.12.09</p>
        </div>
      </div>
    )
  }
];
