import { useState, useEffect, useRef } from 'react';
import './index.css';

function Chatbot1() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    try {
      const response = await fetch("https://1ec30cbdf7e91049fc.gradio.live/api/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: [input] })
      });
      const result = await response.json();
      const botReply = result.data[0];
      setMessages(prev => [...prev, "You: " + input, "Bot: " + botReply]);
      setInput("");
    } catch (error) {
      setMessages(prev => [...prev, "Error: ไม่สามารถเชื่อมต่อ API ได้"]);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">PoomBOT Chat</h1>
      <div className="border p-2 h-64 overflow-y-auto">
        {messages.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>
      <div className="mt-2 flex">
        <input
          className="border flex-1 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 ml-2"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export { Chatbot1 };

// Icons as SVG components
const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3v18h18M7 16l4-4 4 4 5-5" />
  </svg>
);

const MoneyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const RocketIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);

const DataIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>
);

const AIIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MarketingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
  </svg>
);

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const ChevronDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

// Background Animation Component
const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="grid-pattern absolute inset-0" />
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        />
      ))}
      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#00FFFF" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1="0"
            y1={`${20 + i * 20}%`}
            x2="100%"
            y2={`${20 + i * 20}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            style={{
              animation: `circuitPulse ${2 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
};

// Hero Section
const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-bungee text-4xl md:text-6xl lg:text-7xl mb-6 gradient-text neon-text leading-tight">
          เปลี่ยนการตลาดของคุณ
          <br />
          <span className="text-[#FF851B]">ให้ทรงพลังกว่าเดิม</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
          บริการที่ปรึกษาด้านการตลาดระดับมืออาชีพ ผสานเทคโนโลยี AI และ Data Analytics
          เพื่อผลลัพธ์ที่วัดผลได้จริง
        </p>
        <button className="magnetic-btn text-lg md:text-xl px-8 py-4">
          นัดหมายรับคำปรึกษาฟรี
        </button>
        <div className="mt-16 flex justify-center gap-8 text-gray-400">
          <div className="text-center">
            <div className="text-3xl font-bold text-[#00FFFF]">500+</div>
            <div>ลูกค้าที่ไว้วางใจ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FF851B]">95%</div>
            <div>ความพึงพอใจ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#7FFF00]">10+ ปี</div>
            <div>ประสบการณ์</div>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00FFFF] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00FFFF] rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Problem Solved Grid
const ProblemSolvedGrid = () => {
  const problems = [
    {
      icon: <ChartIcon />,
      title: 'อัตราการแปลงต่ำ',
      description: 'เพิ่ม Conversion Rate ด้วยกลยุทธ์ที่ออกแบบมาเฉพาะสำหรับธุรกิจของคุณ',
      color: '#FF851B',
    },
    {
      icon: <MoneyIcon />,
      title: 'ค่าโฆษณาสูญเปล่า',
      description: 'ลดค่าใช้จ่ายโฆษณาที่ไม่จำเป็น และเพิ่ม ROI ให้กับทุกบาทที่ลงทุน',
      color: '#00FFFF',
    },
    {
      icon: <RocketIcon />,
      title: 'การเติบโตหยุดชะงัก',
      description: 'ปลดล็อคศักยภาพการเติบโตด้วยกลยุทธ์ใหม่ที่ขับเคลื่อนด้วยข้อมูล',
      color: '#7FFF00',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          ปัญหาที่เราแก้ไขได้
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          ทุกปัญหาทางการตลาดมีทางออก เราพร้อมช่วยคุณ
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="neumorphic p-8 transition-all duration-500 hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 neumorphic-inset transition-all duration-300 group-hover:shadow-lg"
                style={{ color: problem.color }}
              >
                {problem.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: problem.color }}>
                {problem.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ROI Calculator
const ROICalculator = () => {
  const [monthlySpend, setMonthlySpend] = useState(100000);
  const [conversionRate, setConversionRate] = useState(2);
  const [calculated, setCalculated] = useState(false);
  const [animatedSavings, setAnimatedSavings] = useState(0);
  const [animatedGrowth, setAnimatedGrowth] = useState(0);

  const calculateResults = () => {
    setCalculated(true);
    const potentialSavings = monthlySpend * 0.3;
    const projectedGrowth = conversionRate * 2.5;

    // Animate numbers
    let savingsProgress = 0;
    let growthProgress = 0;
    const duration = 1500;
    const steps = 60;
    const savingsStep = potentialSavings / steps;
    const growthStep = projectedGrowth / steps;

    const interval = setInterval(() => {
      savingsProgress += savingsStep;
      growthProgress += growthStep;
      setAnimatedSavings(Math.min(savingsProgress, potentialSavings));
      setAnimatedGrowth(Math.min(growthProgress, projectedGrowth));
      if (savingsProgress >= potentialSavings) clearInterval(interval);
    }, duration / steps);
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          คำนวณศักยภาพการเติบโตของคุณ!
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          กรอกข้อมูลเพื่อดูผลลัพธ์ที่คาดการณ์
        </p>
        <div className="glassmorphic p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                งบประมาณการตลาดต่อเดือน (บาท)
              </label>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={monthlySpend}
                onChange={(e) => setMonthlySpend(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#FF851B]"
              />
              <div className="text-2xl font-semibold text-[#FF851B] mt-2">
                ฿{monthlySpend.toLocaleString()}
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                อัตรา Conversion ปัจจุบัน (%)
              </label>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.5"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-[#00FFFF]"
              />
              <div className="text-2xl font-semibold text-[#00FFFF] mt-2">{conversionRate}%</div>
            </div>
          </div>

          <button onClick={calculateResults} className="magnetic-btn w-full text-lg py-4">
            คำนวณศักยภาพการเติบโตของคุณ!
          </button>

          {calculated && (
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div className="neumorphic p-6 text-center">
                <div className="text-sm text-gray-400 mb-2">ประหยัดค่าใช้จ่ายได้ถึง</div>
                <div className="text-4xl font-bold text-[#7FFF00]">
                  ฿{Math.round(animatedSavings).toLocaleString()}
                </div>
                <div className="text-sm text-gray-400 mt-2">ต่อเดือน</div>
              </div>
              <div className="neumorphic p-6 text-center">
                <div className="text-sm text-gray-400 mb-2">เพิ่ม Conversion Rate เป็น</div>
                <div className="text-4xl font-bold text-[#00FFFF]">{animatedGrowth.toFixed(1)}%</div>
                <div className="text-sm text-gray-400 mt-2">คาดการณ์</div>
              </div>
              {/* Animated Chart */}
              <div className="md:col-span-2 p-6">
                <div className="flex items-end justify-center gap-4 h-40">
                  <div className="text-center">
                    <div
                      className="w-16 bg-gray-600 rounded-t-lg transition-all duration-1000"
                      style={{ height: `${(conversionRate / 10) * 100}%` }}
                    />
                    <div className="text-sm text-gray-400 mt-2">ปัจจุบัน</div>
                  </div>
                  <div className="text-center">
                    <div
                      className="w-16 rounded-t-lg transition-all duration-1000"
                      style={{
                        height: `${(animatedGrowth / 10) * 100}%`,
                        background: 'linear-gradient(180deg, #00FFFF, #FF851B)',
                      }}
                    />
                    <div className="text-sm text-gray-400 mt-2">คาดการณ์</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Success Stream Ticker
const SuccessStream = () => {
  const achievements = [
    { company: 'บริษัท A', result: 'เพิ่มยอดขายได้ 35% ใน 60 วัน', icon: '📈' },
    { company: 'บริษัท B', result: 'ลดค่า CPA ลง 50%', icon: '💰' },
    { company: 'บริษัท C', result: 'เพิ่ม Lead Generation 200%', icon: '🚀' },
    { company: 'บริษัท D', result: 'ROI เพิ่มขึ้น 4 เท่า', icon: '🎯' },
    { company: 'บริษัท E', result: 'Brand Awareness เพิ่ม 150%', icon: '⭐' },
    { company: 'บริษัท F', result: 'Website Traffic เพิ่ม 300%', icon: '📊' },
  ];

  return (
    <section className="py-10 overflow-hidden border-y border-[#00FFFF]/20">
      <div className="flex whitespace-nowrap ticker-track">
        {[...achievements, ...achievements].map((item, index) => (
          <div
            key={index}
            className="inline-flex items-center gap-4 px-8 py-4 mx-4 glassmorphic"
          >
            <span className="w-10 h-10 rounded-full bg-[#FF851B]/20 flex items-center justify-center text-xl glowing">
              {item.icon}
            </span>
            <div>
              <div className="text-sm text-gray-400">ล่าสุด: ช่วย{item.company}</div>
              <div className="text-[#00FFFF] font-medium">{item.result}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Process Roadmap
const ProcessRoadmap = () => {
  const steps = [
    { title: 'Strategy', thai: 'วางกลยุทธ์', desc: 'วิเคราะห์ธุรกิจและวางแผนกลยุทธ์ที่เหมาะสม' },
    { title: 'Automation', thai: 'ระบบอัตโนมัติ', desc: 'นำเทคโนโลยี AI มาช่วยอัตโนมัติกระบวนการ' },
    { title: 'Execution', thai: 'ดำเนินการ', desc: 'ลงมือปฏิบัติตามแผนอย่างมีประสิทธิภาพ' },
    { title: 'Optimization', thai: 'ปรับปรุง', desc: 'วิเคราะห์ผลและปรับปรุงอย่างต่อเนื่อง' },
  ];

  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionHeight = rect.height;
        const scrollProgress = Math.max(0, -rect.top + window.innerHeight / 2);
        const stepIndex = Math.min(
          Math.floor((scrollProgress / sectionHeight) * steps.length),
          steps.length - 1
        );
        setActiveStep(Math.max(0, stepIndex));
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 relative min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          กระบวนการทำงานของเรา
        </h2>
        <p className="text-gray-400 text-center mb-16 text-lg">
          4 ขั้นตอนสู่ความสำเร็จทางการตลาด
        </p>
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-700 -translate-y-1/2 hidden md:block">
            <div
              className="h-full bg-gradient-to-r from-[#FF851B] to-[#00FFFF] transition-all duration-500"
              style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`text-center transition-all duration-500 ${index <= activeStep ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'
                  }`}
              >
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-bold mb-4 transition-all duration-500 ${index <= activeStep
                      ? 'bg-gradient-to-br from-[#FF851B] to-[#00FFFF] scale-110 shadow-lg shadow-[#00FFFF]/30'
                      : 'bg-gray-700'
                    }`}
                >
                  {index + 1}
                </div>
                <div className="font-bungee text-lg text-[#FF851B] mb-1">{step.title}</div>
                <div className="text-xl font-semibold mb-2">{step.thai}</div>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Core Services
const CoreServices = () => {
  const services = [
    {
      icon: <DataIcon />,
      title: 'Data Analytics',
      thai: 'วิเคราะห์ข้อมูล',
      desc: 'ใช้ข้อมูลเชิงลึกในการตัดสินใจทางธุรกิจ',
      features: ['Google Analytics 4', 'Custom Dashboards', 'Predictive Analysis'],
    },
    {
      icon: <AIIcon />,
      title: 'AI Automation',
      thai: 'ระบบอัตโนมัติ AI',
      desc: 'นำ AI มาช่วยอัตโนมัติกระบวนการทางการตลาด',
      features: ['Chatbot', 'Email Automation', 'Smart Bidding'],
    },
    {
      icon: <MarketingIcon />,
      title: 'Performance Marketing',
      thai: 'การตลาดประสิทธิภาพสูง',
      desc: 'โฆษณาที่วัดผลได้และให้ ROI สูงสุด',
      features: ['Google Ads', 'Meta Ads', 'TikTok Ads'],
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          บริการหลักของเรา
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          ครบทุกด้านการตลาดดิจิทัลในที่เดียว
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glassmorphic p-8 tilt-card group cursor-pointer hover:border-[#FF851B]/50"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF851B]/20 to-[#00FFFF]/20 flex items-center justify-center text-[#00FFFF] mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <div className="font-bungee text-lg text-[#FF851B] mb-1">{service.title}</div>
              <h3 className="text-xl font-semibold mb-3">{service.thai}</h3>
              <p className="text-gray-400 mb-6">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFFF]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Tech Stack
const TechStack = () => {
  const techs = [
    { name: 'Google Analytics 4', color: '#FF851B' },
    { name: 'Meta Ads AI', color: '#00FFFF' },
    { name: 'Python', color: '#7FFF00' },
    { name: 'TensorFlow', color: '#FF851B' },
    { name: 'BigQuery', color: '#00FFFF' },
    { name: 'Tableau', color: '#7FFF00' },
    { name: 'HubSpot', color: '#FF851B' },
    { name: 'Salesforce', color: '#00FFFF' },
  ];

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          เทคโนโลยีที่เราใช้
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          เครื่องมือระดับโลกสำหรับผลลัพธ์ระดับโลก
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="glassmorphic px-6 py-4 icon-float cursor-pointer hover:scale-110 transition-all duration-300 group"
              style={{
                animationDelay: `${index * 0.5}s`,
                borderColor: `${tech.color}33`,
              }}
            >
              <span
                className="font-medium transition-colors duration-300"
                style={{ color: tech.color }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Testimonials
const Testimonials = () => {
  const testimonials = [
    {
      name: 'คุณสมชาย',
      company: 'CEO, TechStart Co.',
      text: 'ยอดขายเพิ่มขึ้น 150% ใน 3 เดือน ทีมงานมืออาชีพมาก ให้คำปรึกษาได้ตรงจุด',
      avatar: '👨‍💼',
    },
    {
      name: 'คุณสมหญิง',
      company: 'CMO, RetailPlus',
      text: 'ลดต้นทุนโฆษณาได้ 40% แต่ผลลัพธ์ดีขึ้นกว่าเดิม ประทับใจมากค่ะ',
      avatar: '👩‍💼',
    },
    {
      name: 'คุณวิชัย',
      company: 'Founder, DigitalAgency',
      text: 'ทีมงานเข้าใจธุรกิจจริงๆ ไม่ใช่แค่ทำตามสูตร แต่ปรับให้เหมาะกับเราโดยเฉพาะ',
      avatar: '👨‍💻',
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          เสียงจากลูกค้าของเรา
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          ความสำเร็จของลูกค้าคือความภาคภูมิใจของเรา
        </p>
        <div className="relative">
          <div className="glassmorphic p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${current === index ? 'opacity-100 translate-x-0' : 'opacity-0 absolute inset-0 translate-x-8'
                  }`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF851B] to-[#00FFFF] flex items-center justify-center text-3xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-[#00FFFF] text-sm">{testimonial.company}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="video-bubble bg-gray-800 flex items-center justify-center text-[#FF851B]">
                      <PlayIcon />
                    </div>
                  </div>
                </div>
                <p className="text-xl text-gray-300 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? 'bg-[#FF851B] w-8' : 'bg-gray-600'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Resource Hub
const ResourceHub = () => {
  const resources = [
    {
      title: 'Digital Marketing Trends 2024',
      type: 'Whitepaper',
      desc: 'เทรนด์การตลาดดิจิทัลที่ต้องจับตามอง',
    },
    {
      title: 'AI in Marketing Success Story',
      type: 'Case Study',
      desc: 'กรณีศึกษาการใช้ AI เพิ่มยอดขาย 200%',
    },
    {
      title: 'ROI Calculator Guide',
      type: 'Tool Guide',
      desc: 'คู่มือการคำนวณ ROI ทางการตลาด',
    },
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          ศูนย์ความรู้
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          ดาวน์โหลดเอกสารและเครื่องมือฟรี
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="glassmorphic p-6 group cursor-pointer hover:border-[#FF851B]/50 transition-all duration-300"
            >
              <div className="h-40 bg-gradient-to-br from-[#001F3F] to-[#002a4d] rounded-lg mb-4 flex items-center justify-center">
                <div className="text-6xl text-[#00FFFF]/20">📄</div>
              </div>
              <div className="text-sm text-[#FF851B] mb-2">{resource.type}</div>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-[#00FFFF] transition-colors">
                {resource.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">{resource.desc}</p>
              <button className="flex items-center gap-2 text-[#00FFFF] text-sm group-hover:underline">
                <DownloadIcon />
                ดาวน์โหลดฟรี
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQSection = () => {
  const faqs = [
    {
      q: 'บริการของคุณเหมาะกับธุรกิจขนาดไหน?',
      a: 'เราให้บริการธุรกิจทุกขนาด ตั้งแต่ SME ไปจนถึงองค์กรขนาดใหญ่ โดยมีแพ็คเกจที่ปรับให้เหมาะกับงบประมาณและความต้องการของแต่ละธุรกิจ',
    },
    {
      q: 'ใช้เวลานานแค่ไหนถึงจะเห็นผลลัพธ์?',
      a: 'โดยปกติลูกค้าจะเริ่มเห็นผลลัพธ์ที่ชัดเจนภายใน 30-90 วัน ขึ้นอยู่กับประเภทของแคมเปญและอุตสาหกรรม',
    },
    {
      q: 'มีการรับประกันผลลัพธ์หรือไม่?',
      a: 'เราให้การรับประกันความพึงพอใจ หากไม่เห็นการปรับปรุงใน KPIs ที่ตกลงกันไว้ภายใน 3 เดือน เรายินดีคืนเงินบางส่วน',
    },
    {
      q: 'ราคาเริ่มต้นเท่าไหร่?',
      a: 'แพ็คเกจเริ่มต้นที่ 30,000 บาท/เดือน สำหรับธุรกิจขนาดเล็ก และมีแพ็คเกจ Enterprise สำหรับองค์กรขนาดใหญ่ที่ต้องการบริการครบวงจร',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-bungee text-3xl md:text-4xl text-center mb-4 gradient-text">
          คำถามที่พบบ่อย
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          มีข้อสงสัย? เรามีคำตอบ
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glassmorphic overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <span className="font-medium">{faq.q}</span>
                <span
                  className={`transition-transform duration-300 text-[#FF851B] ${openIndex === index ? 'rotate-180' : ''
                    }`}
                >
                  <ChevronDownIcon />
                </span>
              </button>
              <div className={`accordion-content ${openIndex === index ? 'open' : ''}`}>
                <div className="px-6 pb-4 text-gray-400">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sticky Footer CTA
const StickyFooterCTA = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`sticky-footer ${visible ? 'visible' : ''}`}>
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="hidden md:block">
          <span className="text-gray-400">พร้อมเปลี่ยนธุรกิจของคุณ?</span>
        </div>
        <button className="magnetic-btn">นัดหมายรับคำปรึกษาฟรี</button>
      </div>
    </div>
  );
};

// Scroll Progress Bar
const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(currentProgress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
};

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#001F3F]">
      <ScrollProgress />
      <HeroSection />
      <ProblemSolvedGrid />
      <SuccessStream />
      <ROICalculator />
      <ProcessRoadmap />
      <CoreServices />
      <TechStack />
      <Testimonials />
      <ResourceHub />
      <FAQSection />
      <StickyFooterCTA />
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800 mb-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bungee text-2xl gradient-text mb-4">MarketPro Thailand</div>
          <p className="text-gray-400 mb-6">
            บริการที่ปรึกษาด้านการตลาดดิจิทัลระดับมืออาชีพ
          </p>
          <div className="flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-[#00FFFF] transition-colors">
              Facebook
            </a>
            <a href="#" className="hover:text-[#00FFFF] transition-colors">
              LinkedIn
            </a>
            <a href="#" className="hover:text-[#00FFFF] transition-colors">
              Twitter
            </a>
            <a href="#" className="hover:text-[#00FFFF] transition-colors">
              Email
            </a>
          </div>
          <div className="mt-8 text-sm text-gray-500">
            © 2024 MarketPro Thailand. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
