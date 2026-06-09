import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          nav: {
            about: 'About',
            skills: 'Skills',
            experience: 'Experience',
            projects: 'Projects',
            contact: 'Contact',
            cta: 'Let\'s Connect'
          },
          hero: {
            badge: 'Software Developer',
            location: 'Ho Chi Minh City, Vietnam',
            name: 'Dang Ngoc Tram',
            role: 'Full-Stack .NET Developer',
            desc: 'A software engineer dedicated to crafting efficient and meaningful digital solutions. With over 5 years of experience, I focus on the harmony between robust backend logic and intuitive user experiences, always striving to integrate modern AI advancements to solve real-world problems.',
            viewProjects: 'View Projects',
            contactMe: 'Contact Me',
            scroll: 'Scroll Down'
          },
          about: {
            title: 'About Me',
            bio: 'My journey in software development has been driven by a simple goal: building systems that are both reliable and maintainable. While my core strength lies in the **.NET ecosystem**, I see myself as a lifelong learner, constantly refining my approach to software architecture and the art of clean code.',
            bio2: 'I believe the most impactful software is born from curiosity and collaboration. Whether it\'s fine-tuning system performance or exploring the potential of AI, I approach every project with a commitment to delivering practical value and growing alongside my peers.',
            exp: 'Years of Experience',
            netExp: 'Years in .NET',
            projectsCount: 'Major Projects',
            team: 'Team Members Led',
            workStatus: 'Open to new opportunities',
            contact: {
              phone: 'Phone',
              email: 'Email',
              address: 'Address',
              addressVal: 'Phu Nhuan, HCM City'
            }
          },
          skills: {
            title: 'Technical Skills',
            fe: { title: 'Front-end Development', desc: 'Core & State RxJS, component-driven architecture, and legacy AngularJS system migrations.' },
            be: { title: 'Back-end Development', desc: 'Design and engineering of web APIs and microservices using .NET 9, .NET 8, and real-time SignalR.' },
            db: { title: 'Database & Search', desc: 'Advanced indexing and administration of SQL Server, PostgreSQL, MongoDB, and ElasticSearch.' },
            perf: { title: 'Performance & Data Access', desc: 'Hybrid data access (EF Core + Dapper), native .NET 9 HybridCache, and query tuning for Big Data.' },
            arch: { title: 'Architecture & Patterns', desc: 'Clean Architecture, Domain-Driven Design (DDD), CQRS with MediatR vertical slices, and SOLID.' },
            ai: { title: 'Advanced Expertise', desc: 'System performance tuning, enterprise AI integration, scalable system design, and distributed systems.' }
          },
          experience: {
            title: 'Work Experience',
            company: 'Lac Viet Computing Corp',
            role: 'Software Developer',
            duration: '2020 – PRESENT',
            items: [
              { title: 'Product Development', desc: 'Collaborated with cross-functional teams to develop and deploy new features based on business requirements.' },
              { title: 'System Optimization', desc: 'Improved system performance by optimizing database queries and refactoring legacy code.' },
              { title: 'AI Integration', desc: 'Implemented AI-driven analytics modules to enhance data visualization and business insights.' },
              { title: 'System Architecture', desc: 'Contributed to the design and development of core application infrastructure.' }
            ]
          },
          projects: {
            title: 'Professional Projects',
            list: [
              {
                id: 'erp',
                name: 'Enterprise Resource Planning (ERP)',
                period: '2022 – 2025',
                role: 'Full-Stack Developer',
                team: '20 Developers',
                desc: [
                  'Architected and implemented a comprehensive suite of enterprise modules including Project Management (PM), Customer Relationship Management (CRM), Human Resources (HR), Official Dispatch (OD), Document Management (DM), E-Sign, Accounting (AC), Dynamic Process (DP), and various other management solutions.',
                  'Developed a real-time notification and collaboration system using SignalR, improving cross-departmental communication efficiency by 40%.',
                  'Designed complex data analytics pipelines that process millions of transactions daily to provide actionable business intelligence.',
                  'Executed deep database optimization strategies (indexing, partitioning) that reduced report generation time from minutes to seconds.'
                ],
                tags: ['.NET Core', 'C#', 'SQL Server', 'SignalR', 'Redis', 'Angular', 'Microservices']
              },
              {
                id: 'dms',
                name: 'Document Management System',
                period: '2020 – 2022',
                role: 'Full-Stack Developer',
                team: '5 Engineers',
                desc: [
                  'Engineered the transformation of physical documents into digitized assets, securely stored and managed via private NAT server infrastructure.',
                  'Implemented an advanced full-text search engine that significantly improved document retrieval speed and accuracy for 10,000+ users.',
                  'Built sophisticated administrative workflows with granular permission controls and audit logging for sensitive government documents.',
                  'Optimized front-end rendering for document previews, enhancing the user experience on low-bandwidth connections.'
                ],
                tags: ['.NET Core', 'JavaScript', 'ElasticSearch', 'PostgreSQL', 'Cloud Storage', 'IdentityServer']
              }
            ]
          },
          sideProjects: {
            title: 'Personal Projects',
            list: [
              {
                name: 'AI Fanpage Manager (Agentic AI)',
                repo: 'ai-fanpage-manager',
                role: 'Full-Stack Developer',
                desc: 'An intelligent content management and automation platform for Facebook Fanpages. Integrates Gemini AI copywriting, automated stock image search, AutoReels video creation, Cloudinary CDN, visual Node-based marketing workflows, and real-time state synchronization via Redis Streams.',
                tags: ['TypeScript', 'React 19', 'Tailwind CSS 4', 'Express', 'PostgreSQL', 'Prisma', 'Redis Streams', 'Gemini AI', 'Cloudinary']
              },
              {
                name: 'FloraCore (Enterprise Template)',
                repo: 'flora-core',
                role: 'Backend Developer',
                desc: 'An enterprise-grade .NET 9 REST API boilerplate. Adheres strictly to Clean Architecture and DDD principles. Features CQRS with MediatR, native HybridCache (L1 Memory + L2 Redis), Outbox pattern with Hangfire for atomic operations, Polly resilience policies, and distributed tracing with OpenTelemetry.',
                tags: ['.NET 9', 'EF Core 9', 'Dapper', 'Clean Architecture', 'CQRS', 'MediatR', 'HybridCache', 'Redis', 'Polly', 'Outbox Pattern']
              },
              {
                name: 'Auto Reels AI (Media Pipeline)',
                repo: 'autoreels',
                role: 'Full-Stack Developer',
                desc: 'A distributed AI-powered portrait short-form video studio. Scrapes content feeds, drafts scripts using Gemini, synthesizes voices via ElevenLabs and Microsoft Edge TTS, dynamically designs bespoke Bento grid HTML layouts using Gemini Flash, renders 1080x1920 vertical videos via HyperFrames (headless Chromium) and FFmpeg, managed by an Upstash Redis Streams queue with automatic TikTok publishing.',
                tags: ['Node.js', 'TypeScript', 'React 19', 'Tailwind CSS 4', 'Redis Streams', 'Gemini AI', 'HyperFrames', 'FFmpeg', 'TikTok API']
              },
              {
                name: 'ChinChin Floral Digital (3D E-commerce)',
                repo: 'chinchin-floral',
                role: 'Frontend Developer',
                desc: 'A premium e-commerce platform for high-end floral arts and gifts. Features interactive 3D product visualizations using Three.js and React Three Fiber, playfair typography, dynamic shopping cart, role-based authentication, and a full-featured admin dashboard for CRUD operations on products and categories synced with LocalStorage and REST APIs.',
                tags: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS 4', 'Framer Motion', 'LocalStorage', 'Vite']
              },
              {
                name: 'Nông Y AI (Agri-AI Mobile App)',
                repo: 'agri-ai',
                role: 'Mobile Developer',
                desc: 'A smart mobile application helping farmers diagnose crop diseases from camera photos in real-time. Powered by Gemini 3.1 Pro, it offers immediate symptom analysis and treatment plans. Features hands-free AI voice calls, image-assisted chat, a technical farming handbook, GPS weather integration, and offline diagnosis history built with Capacitor.',
                tags: ['React 19', 'TypeScript', 'Capacitor 8', 'Gemini Pro/Vision', 'Speech-to-Text (STT)', 'Text-to-Speech (TTS)', 'Android']
              },
              {
                name: 'Wake-on-LAN over Internet (WoL)',
                repo: 'WoL',
                role: 'Full-Stack Developer',
                desc: 'A modern web dashboard to manage and boot computers remotely via the Wake-on-LAN (WoL) protocol. Supports Wake over WAN (via Public IP or DDNS with Router Port Forwarding), local device list caching via LocalStorage, animated micro-interactions with Framer Motion, and a lightweight Express backend serving magic packet broadcasts.',
                tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Express', 'Node-WoL', 'Framer Motion']
              }
            ]
          },
          education: {
            title: 'Education',
            school: 'Ho Chi Minh City University of Technology (HUTECH)',
            period: '2015 – 2020',
            dept: 'Information Technology',
            degree: 'Bachelor of Engineering'
          },
          interests: {
            title: 'Interests',
            items: ['Technology Trends', 'Music & Audio', 'Strategy Games']
          },
          contact: {
            title: "Get In Touch",
            desc: "I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.",
            email: 'Email',
            website: 'Resume',
            github: 'Github'
          },
          footer: {
            copy: '© 2026 Dang Ngoc Tram.'
          }
        }
      },
      vi: {
        translation: {
          nav: {
            about: 'Giới thiệu',
            skills: 'Kỹ năng',
            experience: 'Kinh nghiệm',
            projects: 'Dự án',
            contact: 'Liên hệ',
            cta: 'Kết nối'
          },
          hero: {
            badge: 'Lập trình viên phần mềm',
            location: 'TP. Hồ Chí Minh',
            name: 'Đặng Ngọc Trầm',
            role: 'Full-Stack .NET Developer',
            desc: 'Một kỹ sư phần mềm luôn nỗ lực tạo ra những giải pháp số hiệu quả và có ý nghĩa. Với hơn 5 năm kinh nghiệm, tôi tập trung vào sự kết hợp giữa tư duy hệ thống vững chắc và trải nghiệm người dùng tinh tế, đồng thời không ngừng học hỏi để tích hợp các tiến bộ của AI vào thực tế.',
            viewProjects: 'Xem dự án',
            contactMe: 'Liên hệ',
            scroll: 'Kéo xuống'
          },
          about: {
            title: 'Về tôi',
            bio: 'Hành trình phát triển phần mềm của tôi bắt đầu từ mong muốn xây dựng những sản phẩm thực sự hữu ích và bền vững. Với thế mạnh cốt lõi là hệ sinh thái **.NET**, tôi luôn coi mình là một người học hỏi trọn đời, không ngừng trau dồi về kiến trúc hệ thống và nghệ thuật viết mã sạch.',
            bio2: 'Tôi tin rằng những sản phẩm có sức ảnh hưởng nhất được tạo ra từ sự tò mò và tinh thần cộng tác. Dù là tối ưu hóa hiệu năng hay khám phá tiềm năng của AI, tôi luôn tiếp cận mọi thử thách với cam kết mang lại giá trị thực tế và cùng phát triển với đội ngũ.',
            exp: 'Năm kinh nghiệm',
            netExp: 'Năm với .NET',
            projectsCount: 'Dự án lớn',
            team: 'Quản lý nhóm',
            workStatus: 'Sẵn sàng đón nhận cơ hội mới',
            contact: {
              phone: 'Điện thoại',
              email: 'Email',
              address: 'Địa chỉ',
              addressVal: 'Quận Phú Nhuận, TP. HCM'
            }
          },
          skills: {
            title: 'Kỹ năng chuyên môn',
            fe: { title: 'Phát triển Front-end', desc: 'Quản lý trạng thái với RxJS, kiến trúc định hướng thành phần, và di trú hệ thống cũ AngularJS.' },
            be: { title: 'Phát triển Back-end', desc: 'Thiết kế và phát triển Web API, microservices sử dụng .NET 9, .NET 8, và thời gian thực SignalR.' },
            db: { title: 'Cơ sở dữ liệu & Tìm kiếm', desc: 'Quản trị và tối ưu hóa chỉ mục SQL Server, PostgreSQL, MongoDB, và ElasticSearch.' },
            perf: { title: 'Hiệu năng & Truy xuất dữ liệu', desc: 'Truy cập dữ liệu lai (EF Core + Dapper), .NET 9 HybridCache và tối ưu hóa truy vấn Big Data.' },
            arch: { title: 'Kiến trúc & Mẫu thiết kế', desc: 'Clean Architecture, Thiết kế hướng tên miền (DDD), CQRS với MediatR vertical slices, và SOLID.' },
            ai: { title: 'Chuyên môn nâng cao', desc: 'Tinh chỉnh hiệu năng hệ thống, tích hợp AI doanh nghiệp, thiết kế hệ thống phân tán mở rộng.' }
          },
          experience: {
            title: 'Kinh nghiệm làm việc',
            company: 'Công ty Cổ phần Tin học Lạc Việt',
            role: 'Software Developer',
            duration: '2020 – HIỆN TẠI',
            items: [
              { title: 'Phát triển sản phẩm', desc: 'Phối hợp với các nhóm để phát triển và triển khai tính năng mới theo yêu cầu nghiệp vụ.' },
              { title: 'Tối ưu hệ thống', desc: 'Cải thiện hiệu năng hệ thống thông qua việc tối ưu câu truy vấn cơ sở dữ liệu và tái cấu trúc mã nguồn.' },
              { title: 'Tích hợp AI', desc: 'Triển khai các module phân tích sử dụng AI để nâng cao khả năng trực quan hóa dữ liệu.' },
              { title: 'Kiến trúc hệ thống', desc: 'Tham gia thiết kế và xây dựng hạ tầng cốt lõi cho các ứng dụng.' }
            ]
          },
          projects: {
            title: 'Dự án chuyên nghiệp',
            list: [
              {
                id: 'erp',
                name: 'Hệ thống Quản trị Doanh nghiệp (ERP)',
                period: '2022 – 2025',
                role: 'Full-Stack Developer',
                team: '20 Lập trình viên',
                desc: [
                  'Thiết kế kiến trúc và triển khai hệ thống các phân hệ Quản lý dự án (PM), CRM, HR, Công văn (OD), Quản lý tài liệu (DM), Chữ ký số (E-Sign), Kế toán (AC), Quy trình động (DP) và các module quản trị doanh nghiệp khác.',
                  'Phát triển hệ thống thông báo và cộng tác thời gian thực bằng SignalR, giúp tăng 40% hiệu quả giao tiếp giữa các phòng ban.',
                  'Xây dựng các luồng phân tích dữ liệu phức tạp, xử lý hàng triệu giao dịch mỗi ngày để cung cấp báo cáo quản trị thông minh.',
                  'Thực hiện các chiến lược tối ưu hóa cơ sở dữ liệu chuyên sâu (indexing, partitioning) giúp giảm thời gian truy xuất báo cáo từ vài phút xuống còn vài giây.'
                ],
                tags: ['.NET Core', 'C#', 'SQL Server', 'SignalR', 'Redis', 'Angular', 'Microservices']
              },
              {
                id: 'dms',
                name: 'Hệ thống Quản lý Tài liệu (DMS)',
                period: '2020 – 2022',
                role: 'Full-Stack Developer',
                team: '5 Kỹ sư',
                desc: [
                  'Chuyển đổi tài liệu vật lý thành tài liệu số hóa được lưu trữ bảo mật bởi hệ thống Private NAT Server.',
                  'Triển khai công cụ tìm kiếm toàn văn (full-text search) tiên tiến, giúp cải thiện đáng kể tốc độ và độ chính xác khi tra cứu cho hơn 10.000 người dùng.',
                  'Xây dựng quy trình xử lý tài liệu phức tạp với phân quyền chi tiết và nhật ký kiểm soát (audit log) cho các tài liệu chính phủ nhạy cảm.',
                  'Tối ưu hóa việc hiển thị bản xem trước tài liệu trên giao diện web, nâng cao trải nghiệm người dùng ngay cả với kết nối mạng băng thông thấp.'
                ],
                tags: ['.NET Core', 'JavaScript', 'ElasticSearch', 'PostgreSQL', 'Cloud Storage', 'IdentityServer']
              }
            ]
          },
          sideProjects: {
            title: 'Dự án cá nhân',
            list: [
              {
                name: 'Quản lý Fanpage AI (Agentic AI)',
                repo: 'ai-fanpage-manager',
                role: 'Full-Stack Developer',
                desc: 'Nền tảng quản lý & tự động hóa nội dung Facebook Fanpage thông minh. Tích hợp hệ sinh thái AI sinh văn bản (Gemini AI), tìm kiếm hình ảnh tự động, dựng video tự động (AutoReels), quản lý thư viện truyền thông CDN (Cloudinary), thiết kế chiến dịch trực quan bằng Node-Based Workflows và đồng bộ trạng thái thời gian thực qua Event Bus (Redis Streams).',
                tags: ['TypeScript', 'React 19', 'Tailwind CSS 4', 'Express', 'PostgreSQL', 'Prisma', 'Redis Streams', 'Gemini AI', 'Cloudinary']
              },
              {
                name: 'FloraCore (Enterprise Template)',
                repo: 'flora-core',
                role: 'Backend Developer',
                desc: 'Mẫu kiến trúc REST API cấp doanh nghiệp xây dựng trên .NET 9 và C# 13. Tuân thủ nghiêm ngặt nguyên lý Clean Architecture và DDD, tích hợp CQRS với MediatR, bộ nhớ đệm kép HybridCache (L1 Memory + L2 Redis), mẫu Outbox kết hợp Hangfire đảm bảo nhất quán dữ liệu, cơ chế chống lỗi Polly và giám sát phân tán qua OpenTelemetry.',
                tags: ['.NET 9', 'EF Core 9', 'Dapper', 'Clean Architecture', 'CQRS', 'MediatR', 'HybridCache', 'Redis', 'Polly', 'Outbox Pattern']
              },
              {
                name: 'Auto Reels AI (Media Pipeline)',
                repo: 'autoreels',
                role: 'Full-Stack Developer',
                desc: 'Hệ thống sản xuất video ngắn (Reels) tự động hóa đa nền tảng. Tự động thu thập nguồn tin, dùng Gemini viết kịch bản, chuyển đổi văn bản thành giọng nói mượt mà (ElevenLabs/Edge TTS), thiết kế bố cục Bento HTML/CSS độc bản bằng Gemini Flash, kết xuất video dọc 1080x1920 bằng HyperFrames (Chromium không đầu) và FFmpeg, điều phối qua hàng đợi Upstash Redis Streams và xuất bản trực tiếp lên TikTok.',
                tags: ['Node.js', 'TypeScript', 'React 19', 'Tailwind CSS 4', 'Redis Streams', 'Gemini AI', 'HyperFrames', 'FFmpeg', 'TikTok API']
              },
              {
                name: 'ChinChin Floral Digital (3D E-commerce)',
                repo: 'chinchin-floral',
                role: 'Frontend Developer',
                desc: 'Nền tảng thương mại điện tử hoa tươi và quà tặng cao cấp. Nổi bật với hoạt cảnh 3D tương tác chân thực sử dụng Three.js và React Three Fiber, giao diện tinh tế mang phong cách sang trọng với Playfair & Inter, giỏ hàng động, hệ thống phân quyền đăng nhập và bảng quản trị Admin quản lý CRUD sản phẩm/danh mục đồng bộ tức thời qua LocalStorage/API.',
                tags: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS 4', 'Framer Motion', 'LocalStorage', 'Vite']
              },
              {
                name: 'Nông Y AI (Agri-AI Mobile App)',
                repo: 'agri-ai',
                role: 'Mobile Developer',
                desc: 'Ứng dụng di động thông minh hỗ trợ nông dân Việt Nam chẩn đoán sâu bệnh cây trồng tức thời qua ảnh chụp camera. Sử dụng Gemini 3.1 Pro cung pháp giải pháp điều trị chi tiết. Nổi bật với tính năng gọi thoại rảnh tay (hands-free) trò chuyện trực tiếp với AI, nhắn tin kết hợp gửi ảnh, cẩm nang canh tác kỹ thuật, thời tiết GPS thực tế và lưu trữ lịch sử ngoại tuyến bằng Capacitor.',
                tags: ['React 19', 'TypeScript', 'Capacitor 8', 'Gemini Pro/Vision', 'Speech-to-Text (STT)', 'Text-to-Speech (TTS)', 'Android']
              },
              {
                name: 'Wake-on-LAN qua Internet (WoL)',
                repo: 'WoL',
                role: 'Full-Stack Developer',
                desc: 'Bảng điều khiển hiện đại giúp quản lý và khởi động máy tính từ xa qua giao thức Wake-on-LAN (WoL). Hỗ trợ Wake over WAN (qua IP Public hoặc tên miền DDNS kết hợp Port Forwarding trên Router), lưu trữ danh sách thiết bị cục bộ qua LocalStorage, giao diện tương tác mượt mạc với Framer Motion và máy chủ Express tích hợp gửi Magic Packet UDP.',
                tags: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Express', 'Node-WoL', 'Framer Motion']
              }
            ]
          },
          education: {
            title: 'Học vấn',
            school: 'Đại học Công nghệ TP.HCM (HUTECH)',
            period: '2015 – 2020',
            dept: 'Công nghệ thông tin',
            degree: 'Kỹ sư CNTT'
          },
          interests: {
            title: 'Sở thích',
            items: ['Công nghệ mới', 'Âm nhạc', 'Game chiến thuật']
          },
          contact: {
            title: "Liên hệ",
            desc: "Tôi luôn sẵn sàng trao đổi về các dự án mới, ý tưởng sáng tạo hoặc cơ hội hợp tác cùng bạn.",
            email: 'Email',
            website: 'Resume',
            github: 'Github'
          },
          footer: {
            copy: '© 2026 Đặng Ngọc Trầm.'
          }
        }
      }
    }
  });

export default i18n;
