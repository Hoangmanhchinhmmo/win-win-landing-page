
import React, { useState } from 'react';

// --- SVG Icon Components ---

const SparklesIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
  </svg>
);

const RocketLaunchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.82m5.84-2.56a16.5 16.5 0 0 0-2.63-8.82A16.5 16.5 0 0 0 9.17 2.22a16.5 16.5 0 0 0-1.03 2.56m-2.22 8.82a16.5 16.5 0 0 0 8.82 2.63m-8.82-2.63a16.5 16.5 0 0 0-2.63-8.82a16.5 16.5 0 0 0-8.82-2.63a16.5 16.5 0 0 0-2.56 1.03a16.5 16.5 0 0 0-8.82 2.63a16.5 16.5 0 0 0 2.63 8.82m5.84-2.56a16.5 16.5 0 0 0-2.63-8.82" />
  </svg>
);

const InfinityIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 11.667 0l3.181-3.183m-4.991-2.691v4.992" />
  </svg>
);

const TrophyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 0 0 9 0Zm-4.5-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12 12.75V15m0 0v1.125c0 .621.504 1.125 1.125 1.125h1.5a1.125 1.125 0 0 0 1.125-1.125V15m-4.5 0v1.125c0 .621-.504 1.125-1.125 1.125h-1.5A1.125 1.125 0 0 1 6 16.125V15m12-3a.75.75 0 0 1 0-1.5h-1.5a.75.75 0 0 1 0 1.5h1.5Zm-15 0a.75.75 0 0 1 0-1.5H4.5a.75.75 0 0 1 0 1.5H6Z" />
  </svg>
);

const ChevronDownIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const ChatBubbleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
    </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.001 10.001 0 0022 12z" />
    </svg>
);

const ClockIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const KeyIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
  </svg>
);

const UserGroupIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
);

const LightBulbIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c-1.451.982-3.171 1.229-4.755.516a.75.75 0 0 1 .472-1.42m6.03-6.42a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.75-.75v-.008Z" />
  </svg>
);

const PlayCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
    </svg>
);

const CreditCardIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.5 3.75h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 21Z" />
  </svg>
);

const VideoCameraIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" />
  </svg>
);

const ArrowsRightLeftIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
);


// --- Section Components ---

const Header = () => (
  <header className="absolute top-0 left-0 right-0 z-10 bg-transparent">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20">
        <div className="flex items-center space-x-3">
          <svg className="h-8 w-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197m0 0A12.005 12.005 0 0112 12c4.257 0 7.893 2.66 9.336 6.316M12 12c-4.257 0-7.893-2.66-9.336-6.316m0 0a12.005 12.005 0 0112 0c-4.257 0-7.893 2.66-9.336 6.316m0 0a12.005 12.005 0 0112 0" />
          </svg>
          <span className="text-white text-xl font-bold">We Team</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white transition-colors">Quyền lợi</a>
          <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Chi phí</a>
           <a href="#process" className="text-gray-300 hover:text-white transition-colors">Quy Trình</a>
          <a href="#faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Liên Hệ</a>
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Đăng Ký Ngay
        </a>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative bg-slate-900 text-white overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-slate-900"></div>
    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"52\" height=\"26\" viewBox=\"0 0 52 26\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23FFF\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95L29.5 12.5l3.536 3.536-1.414 1.414L28.086 14l-3.536 3.536-1.414-1.414L26.672 12l-3.536-3.536 1.414-1.414L28.086 10l3.536-3.536 1.414 1.414z\" /%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40 pb-24 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        <span className="block">Chương Trình Hợp Tác <span className="text-blue-500">Win-Win</span></span>
        <span className="block text-blue-400 mt-2">Cùng Veo 3 Studio & We Team</span>
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        Khai phá tiềm năng sáng tạo, phát triển kênh bền vững và tối đa hóa doanh thu với phần mềm Veo 3 Studio. Chia sẻ lợi nhuận 50% từ doanh thu Google.
      </p>
      <div className="mt-10 flex justify-center">
        <a href="#contact" className="bg-blue-600 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300">
          Bắt Đầu Hợp Tác Ngay
        </a>
      </div>
    </div>
  </section>
);

const benefits = [
  {
    icon: <SparklesIcon className="h-8 w-8 text-white" />,
    title: "Mẫu Prompts Chuyên Nghiệp",
    description: "Bạn sẽ được thiết kế các mẫu prompts độc quyền, tối ưu hóa cho chủ đề video bạn muốn thực hiện, giúp tạo ra nội dung chất lượng cao và thu hút."
  },
  {
    icon: <RocketLaunchIcon className="h-8 w-8 text-white" />,
    title: "Phát Triển & SEO Kênh",
    description: "Chúng tôi sẽ đồng hành cùng bạn trong việc SEO, phát triển và định hướng kênh một cách bài bản, đảm bảo đi đúng hướng và tăng trưởng bền vững."
  },
  {
    icon: <InfinityIcon className="h-8 w-8 text-white" />,
    title: "Cung Cấp Kênh Không Giới Hạn",
    description: "Bạn sẽ được cấp kênh không giới hạn để tự do sáng tạo và mở rộng quy mô, không còn lo lắng về việc quản lý hay tạo kênh mới."
  },
  {
    icon: <TrophyIcon className="h-8 w-8 text-white" />,
    title: "Quy Trình SEO Tỷ Lệ Thắng 90%",
    description: "Áp dụng quy trình SEO kênh chuyên nghiệp đã được kiểm chứng, mang lại tỷ lệ thành công lên đến 90%, giúp kênh của bạn nhanh chóng đạt được thứ hạng cao."
  }
];

const Benefits = () => (
  <section id="features" className="bg-slate-800 py-20 sm:py-28">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Quyền Lợi Vượt Trội Dành Cho Đối Tác</h2>
        <p className="mt-4 text-lg text-gray-400">Tất cả những gì bạn cần để thành công, chúng tôi đều có.</p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-slate-900/50 p-8 rounded-2xl shadow-lg border border-slate-700 transform hover:-translate-y-2 transition-transform duration-300 flex flex-col items-center text-center">
            <div className="flex items-center justify-center h-16 w-16 rounded-xl bg-blue-600">
              {benefit.icon}
            </div>
            <h3 className="mt-6 text-xl font-bold text-white">{benefit.title}</h3>
            <p className="mt-2 text-base text-gray-400">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="bg-slate-900 py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-extrabold">Mô Hình Hợp Tác Rõ Ràng</h2>
            <p className="mt-2 text-blue-200 text-lg">Đầu tư nhỏ, tiềm năng lớn. Chia sẻ thành công cùng nhau.</p>
          </div>
          <div className="mt-8 md:mt-0 flex-shrink-0">
             <a href="#contact" className="inline-block w-full text-center md:w-auto bg-white text-blue-600 font-bold text-lg px-10 py-4 rounded-lg shadow-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300">
              Tham Gia Ngay
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-blue-500/50 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-200">CHI PHÍ ĐẦU TƯ</h3>
            <p className="mt-2 text-4xl font-bold">600.000đ<span className="text-xl font-medium text-blue-200">/ tháng</span></p>
            <p className="mt-2 text-blue-200">Để sử dụng phần mềm Veo 3 Studio và toàn bộ quyền lợi hỗ trợ.</p>
          </div>
          <div className="bg-white/10 p-6 rounded-xl">
            <h3 className="text-lg font-semibold text-blue-200">TỶ LỆ ĂN CHIA</h3>
            <p className="mt-2 text-4xl font-bold">50% / 50%</p>
            <p className="mt-2 text-blue-200">Từ tổng doanh thu Google. Minh bạch, công bằng và cùng có lợi.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const processSteps = [
  {
    icon: <ClockIcon className="h-5 w-5 text-white" />,
    step: "Bước 1",
    title: "Cam Kết Thời Gian",
    description: "Hãy chắn chắn bạn có thời gian 2-3 tiếng / ngày để làm việc nghiêm túc với Team.",
  },
  {
    icon: <KeyIcon className="h-5 w-5 text-white" />,
    step: "Bước 2",
    title: "Đăng Ký & Kích Hoạt",
    description: "Đăng ký tài khoản và Kích hoạt tài khoản ở đây: https://veo3studio.top/auth",
  },
  {
    icon: <CreditCardIcon className="h-5 w-5 text-white" />,
    step: "Bước 3",
    title: "Thanh Toán Phí",
    description: "Thanh toán tiền thuê tool cho bên đối tác We Team. Thanh toán tự động 600.000 đ / tháng.",
  },
  {
    icon: <UserGroupIcon className="h-5 w-5 text-white" />,
    step: "Bước 4",
    title: "Kết Nối Với Team",
    description: "Liên hệ Zalo, FaceBook để Join team.",
  },
  {
    icon: <LightBulbIcon className="h-5 w-5 text-white" />,
    step: "Bước 5",
    title: "Học Dựng Video",
    description: "Bắt đầu học dựng video chuyên nghiệp từ các Leader trong nhóm.",
  },
  {
    icon: <PlayCircleIcon className="h-5 w-5 text-white" />,
    step: "Bước 6",
    title: "Bắt Đầu Kiếm Tiền",
    description: "Nhận kênh về Upload và bắt đầu hành trình kiếm tiền với Youtube và We Team.",
  }
];

const Process = () => (
  <section id="process" className="bg-slate-800 py-20 sm:py-28">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Quy Trình Hợp Tác</h2>
        <p className="mt-4 text-lg text-gray-400">Lộ trình rõ ràng để bạn bắt đầu và thành công.</p>
      </div>
      <ol className="relative border-l border-slate-700">
        {processSteps.map((item, index) => (
          <li key={index} className="mb-10 ml-8">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full -left-5 ring-8 ring-slate-800">
              {item.icon}
            </span>
            <h3 className="flex items-center mb-1 text-xl font-semibold text-white">
              {item.step} - {item.title}
            </h3>
            <p className="text-base font-normal text-gray-400">
               {item.description.includes('https://veo3studio.top/auth') ? 
                <>
                  Đăng ký tài khoản và Kích hoạt tài khoản ở đây: <a href="https://veo3studio.top/auth" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">https://veo3studio.top/auth</a>
                </>
                : item.description
              }
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-16 text-center">
        <h3 className="text-3xl font-extrabold text-white sm:text-4xl">Cam Kết Hợp Tác Win-Win</h3>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6 items-center max-w-3xl mx-auto">
          
          {/* Left Panel: Your Role */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center h-full">
            <VideoCameraIcon className="h-10 w-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-white">Bạn Sản Xuất Video</h4>
            <p className="mt-2 text-gray-400 flex-grow">Tập trung vào thế mạnh sáng tạo của bạn để tạo ra những nội dung chất lượng.</p>
          </div>

          {/* Center Icon */}
          <div className="md:col-span-1 flex justify-center">
            <ArrowsRightLeftIcon className="h-12 w-12 text-slate-500" />
          </div>

          {/* Right Panel: Our Role */}
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-700 rounded-2xl p-6 flex flex-col items-center h-full">
            <RocketLaunchIcon className="h-10 w-10 text-blue-400 mb-4" />
            <h4 className="text-xl font-semibold text-white">We Team SEO & Đẩy Kênh</h4>
            <p className="mt-2 text-gray-400 flex-grow">Chúng tôi lo phần kỹ thuật, tối ưu và quảng bá để kênh của bạn vươn xa.</p>
          </div>

        </div>

        <p className="mt-10 text-lg text-gray-300">
          Chúng ta cùng nhau phát triển, cùng nhau chia sẻ thành công.
        </p>
      </div>
    </div>
  </section>
);


const faqData = [
  {
    question: "Veo 3 Studio là phần mềm gì?",
    answer: "Veo 3 Studio là một công cụ mạnh mẽ hỗ trợ tạo và chỉnh sửa video bằng công nghệ AI, giúp bạn sản xuất nội dung video chất lượng cao một cách nhanh chóng và hiệu quả, tối ưu cho các nền tảng như YouTube."
  },
  {
    question: "Doanh thu được chia sẻ như thế nào?",
    answer: "Toàn bộ doanh thu từ quảng cáo Google trên các kênh do bạn quản lý sẽ được tổng kết hàng tháng. Sau đó, lợi nhuận sẽ được chia đều 50% cho bạn và 50% cho We Team. Quy trình hoàn toàn minh bạch."
  },
  {
    question: "Tôi chưa có kinh nghiệm làm YouTube có tham gia được không?",
    answer: "Chắc chắn là được! Chương trình được thiết kế để hỗ trợ cả những người mới bắt đầu. Với Mẫu Prompts chuyên nghiệp và sự đồng hành về SEO, định hướng, bạn sẽ nhanh chóng nắm bắt và phát triển kênh hiệu quả."
  },
  {
    question: "Tôi sẽ nhận được sự hỗ trợ cụ thể như thế nào?",
    answer: "Bạn sẽ được hỗ trợ toàn diện: từ việc cung cấp phần mềm, mẫu prompts, cấp kênh không giới hạn cho đến tư vấn chiến lược, phân tích và tối ưu SEO liên tục để đảm bảo kênh phát triển đúng hướng."
  }
];

const FAQItem: React.FC<{ item: typeof faqData[0]; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => (
  <div className="border-b border-slate-700">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left py-6">
      <span className="text-lg font-medium text-white">{item.question}</span>
      <ChevronDownIcon className={`h-6 w-6 text-gray-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="pb-6 text-gray-300">
        {item.answer}
      </div>
    </div>
  </div>
);


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-slate-800 py-20 sm:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Câu Hỏi Thường Gặp</h2>
          <p className="mt-4 text-lg text-gray-400">Những điều bạn có thể đang thắc mắc.</p>
        </div>
        <div className="mt-12">
          {faqData.map((item, index) => (
            <FAQItem 
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
    <section id="contact" className="bg-slate-900 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Sẵn Sàng Cho Mối Quan Hệ Hợp Tác <span className="text-blue-500">Win-Win</span>?
            </h2>
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
                Đừng chần chừ! Hãy liên hệ ngay với chúng tôi để bắt đầu hành trình phát triển kênh và tạo ra nguồn thu nhập bền vững. We Team luôn sẵn sàng đồng hành cùng bạn.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                    href="https://zalo.me/0979758587" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full sm:w-auto bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105"
                >
                    <ChatBubbleIcon className="h-6 w-6" />
                    <span>Chat qua Zalo</span>
                </a>
                <a 
                    href="https://www.facebook.com/hoangmanhchinh86/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center gap-3 w-full sm:w-auto bg-white text-slate-800 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors shadow-lg transform hover:scale-105"
                >
                    <FacebookIcon className="h-6 w-6 text-[#1877F2]" />
                    <span>Kết nối Facebook</span>
                </a>
            </div>
        </div>
    </section>
);


const Footer = () => (
  <footer className="bg-slate-900 border-t border-slate-800">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-3">
            <svg className="h-8 w-auto text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197m0 0A12.005 12.005 0 0112 12c4.257 0 7.893 2.66 9.336 6.316M12 12c-4.257 0-7.893-2.66-9.336-6.316m0 0a12.005 12.005 0 0112 0c-4.257 0-7.893 2.66-9.336 6.316m0 0a12.005 12.005 0 0112 0" />
            </svg>
            <span className="text-white text-xl font-bold">We Team</span>
        </div>
         <div className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a href="https://zalo.me/0979758587" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <ChatBubbleIcon className="h-5 w-5" />
                  Zalo: 0979758587
              </a>
              <a href="https://www.facebook.com/hoangmanhchinh86/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <FacebookIcon className="h-5 w-5" />
                  Facebook
              </a>
          </div>
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2024 We Team Partnership Program. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);


export default function App() {
  return (
    <div className="bg-slate-900">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
