import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
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
            fe: { title: 'Modern Frontend Ecosystems', desc: 'Crafting immersive and highly responsive user experiences using cutting-edge JavaScript frameworks and motion design.' },
            be: { title: 'Robust Backend Engineering', desc: 'Engineering secure, high-performance RESTful services and microservices designed for enterprise-scale reliability.' },
            db: { title: 'Data Modeling & Management', desc: 'Designing optimized data schemas and high-throughput storage solutions for complex business environments.' },
            perf: { title: 'System Hardening & Optimization', desc: 'Identifying performance bottlenecks and fine-tuning applications for maximum responsiveness and scalability.' },
            arch: { title: 'Software Foundations & Design', desc: 'Implementing maintainable architectures using SOLID principles, Clean Code, and proven industry design patterns.' },
            ai: { title: 'Applied AI & LLM Integration', desc: 'Bridging the gap between software and intelligence by integrating modern AI capabilities and LLM-driven solutions.' }
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
                desc: 'A sophisticated multi-agent system designed to fully automate Facebook Fanpage management. It utilizes LLMs (Gemini Pro) to analyze viral trends, generate contextually relevant posts, and perform automated scheduling. The system includes an intelligent image search engine and high-fidelity asset generation, reducing human content creation effort by 90%.',
                tags: ['TypeScript', 'Gemini AI', 'Facebook Graph API', 'Node.js', 'Docker', 'Vite', 'Agentic Design']
              },
              {
                name: 'FloraCore',
                repo: 'flora-core',
                role: 'Backend Developer',
                desc: 'A production-ready REST API architecture built on .NET 9. This project serves as a master template for high-performance CMS and E-commerce platforms. It strictly adheres to Clean Architecture and DDD principles, featuring CQRS with MediatR, advanced caching with Redis, a robust Outbox pattern for data consistency, and comprehensive Global Exception Handling.',
                tags: ['.NET 9', 'EF Core', 'Clean Architecture', 'CQRS', 'MediatR', 'Redis', 'Docker', 'PostgreSQL']
              },
              {
                name: 'Auto Reels AI (Media Pipeline)',
                repo: 'autoreels',
                role: 'Full-Stack Developer',
                desc: 'An end-to-end automated media production pipeline. The system monitors global news feeds, uses LLMs to transform news into engaging short-form scripts, synthesizes natural voice-overs using ElevenLabs, and programmatically renders 1080x1920 vertical videos using FFmpeg and GSAP. Designed for rapid scale in the automated entertainment industry.',
                tags: ['Node.js', 'TypeScript', 'React 19', 'Prisma', 'Gemini AI', 'FFMPEG', 'GSAP', 'Cloudinary']
              },
              {
                name: 'ChinChin Floral Digital (3D E-commerce)',
                repo: 'chinchin-floral',
                role: 'Frontend Developer',
                desc: 'A next-generation e-commerce experience for a luxury floral brand. It features interactive 3D product visualization using Three.js and React Three Fiber, allowing customers to view arrangements from every angle. The UI is built with a focus on "Neumorphism" and "Glassmorphism" aesthetics, powered by Framer Motion for liquid-smooth transitions.',
                tags: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vite', '3D Graphics']
              },
              {
                name: 'Nông Y AI (Agri-AI Mobile App)',
                repo: 'agri-ai',
                role: 'Mobile Developer',
                desc: 'A smart mobile application helping Vietnamese farmers modernize crop protection. It integrates advanced Vision AI to diagnose plant diseases from camera photos in real-time. Features include hands-free voice commands, AI-driven technical manual search, and location-based weather alerts. Built as a high-performance cross-platform app using Capacitor.',
                tags: ['React 19', 'TypeScript', 'Capacitor', 'Gemini Vision AI', 'Android', 'PWA']
              },
              {
                name: 'Wake-on-LAN over Internet (WoL)',
                repo: 'WoL',
                role: 'Full-Stack Developer',
                desc: 'A lightweight yet secure utility to solve the challenge of remote hardware management. It allows users to wake up home or office computers from anywhere via a web-based dashboard. Implements magic packet broadcasting across subnets and provides a simplified secure gateway for personal infrastructure management.',
                tags: ['TypeScript', 'Express', 'Node.js', 'React', 'Vite', 'Network Protocols']
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
            fe: { title: 'Hệ sinh thái Frontend hiện đại', desc: 'Kiến tạo trải nghiệm người dùng tinh tế, phản hồi nhanh và tương tác mượt mà trên nền tảng các framework JS hiện đại.' },
            be: { title: 'Kỹ thuật Backend vững chắc', desc: 'Xây dựng các dịch vụ RESTful và microservices an toàn, hiệu năng cao, đáp ứng tiêu chuẩn khắt khe của doanh nghiệp.' },
            db: { title: 'Mô hình hóa & Quản trị Dữ liệu', desc: 'Thiết kế lược đồ dữ liệu tối ưu và các giải pháp lưu trữ thông lượng lớn cho môi trường kinh doanh phức tạp.' },
            perf: { title: 'Tối ưu hóa & Củng cố Hệ thống', desc: 'Phân tích điểm nghẽn hiệu năng và tinh chỉnh hệ thống để đạt tốc độ phản hồi và khả năng mở rộng tối đa.' },
            arch: { title: 'Nền tảng Kiến trúc & Thiết kế', desc: 'Triển khai mã nguồn dễ bảo trì dựa trên nguyên lý SOLID, Clean Code và các mẫu thiết kế chuẩn mực của ngành.' },
            ai: { title: 'Trí tuệ Nhân tạo thực thi', desc: 'Kết nối phần mềm với sức mạnh của trí tuệ nhân tạo thông qua việc tích hợp các mô hình LLM và giải pháp AI thông minh.' }
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
                desc: 'Hệ thống đa tác nhân (multi-agent) tinh vi giúp tự động hóa hoàn toàn việc quản lý Fanpage Facebook. Sử dụng các mô hình ngôn ngữ lớn (Gemini Pro) để phân tích xu hướng thị trường, tự động tạo bài viết có tính tương tác cao và lên lịch đăng bài tối ưu. Tích hợp bộ máy tìm kiếm và tạo hình ảnh thông minh, giúp giảm 90% nỗ lực sáng tạo nội dung của con người.',
                tags: ['TypeScript', 'Gemini AI', 'Facebook Graph API', 'Node.js', 'Docker', 'Vite', 'Agentic Design']
              },
              {
                name: 'FloraCore (Enterprise Template)',
                repo: 'flora-core',
                role: 'Backend Developer',
                desc: 'Kiến trúc REST API sẵn sàng cho sản xuất xây dựng trên .NET 9. Dự án đóng vai trò là mẫu chuẩn cho các hệ thống CMS và Thương mại điện tử hiệu năng cao. Tuân thủ nghiêm ngặt các nguyên tắc Clean Architecture và DDD, tích hợp CQRS với MediatR, cơ chế bộ nhớ đệm nâng cao với Redis, mẫu Outbox để đảm bảo nhất quán dữ liệu và xử lý lỗi tập trung toàn hệ thống.',
                tags: ['.NET 9', 'EF Core', 'Clean Architecture', 'CQRS', 'MediatR', 'Redis', 'Docker', 'PostgreSQL']
              },
              {
                name: 'Auto Reels AI (Media Pipeline)',
                repo: 'autoreels',
                role: 'Full-Stack Developer',
                desc: 'Quy trình sản xuất nội dung đa phương tiện tự động khép kín. Hệ thống theo dõi luồng tin tức toàn cầu, sử dụng LLM để chuyển hóa tin tức thành kịch bản video ngắn hấp dẫn, tổng hợp giọng nói tự nhiên qua ElevenLabs và tự động render video dọc 1080x1920 bằng FFmpeg và GSAP. Được thiết kế để mở rộng quy mô nhanh chóng trong ngành giải trí tự động.',
                tags: ['Node.js', 'TypeScript', 'React 19', 'Prisma', 'Gemini AI', 'FFMPEG', 'GSAP', 'Cloudinary']
              },
              {
                name: 'ChinChin Floral Digital (3D E-commerce)',
                repo: 'chinchin-floral',
                role: 'Frontend Developer',
                desc: 'Trải nghiệm thương mại điện tử thế hệ mới cho thương hiệu hoa cao cấp. Nổi bật với tính năng hiển thị sản phẩm 3D tương tác sử dụng Three.js và React Three Fiber, cho phép khách hàng quan sát sản phẩm từ mọi góc độ. Giao diện được thiết kế theo phong cách Neumorphism và Glassmorphism, kết hợp với Framer Motion để tạo ra các hiệu ứng chuyển cảnh mượt mà.',
                tags: ['React 19', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vite', '3D Graphics']
              },
              {
                name: 'Nông Y AI (Agri-AI Mobile App)',
                repo: 'agri-ai',
                role: 'Mobile Developer',
                desc: 'Ứng dụng di động thông minh hỗ trợ nông dân Việt Nam hiện đại hóa quy trình bảo vệ cây trồng. Tích hợp Vision AI tiên tiến để chẩn đoán sâu bệnh từ ảnh chụp thực tế trong thời gian thực. Các tính năng bao gồm điều khiển bằng giọng nói rảnh tay, tra cứu cẩm nang kỹ thuật bằng AI và cảnh báo thời tiết cục bộ. Xây dựng như một ứng dụng đa nền tảng hiệu năng cao bằng Capacitor.',
                tags: ['React 19', 'TypeScript', 'Capacitor', 'Gemini Vision AI', 'Android', 'PWA']
              },
              {
                name: 'Wake-on-LAN qua Internet (WoL)',
                repo: 'WoL',
                role: 'Full-Stack Developer',
                desc: 'Tiện ích nhỏ gọn nhưng bảo mật giúp giải quyết bài toán quản lý phần cứng từ xa. Cho phép người dùng đánh thức máy tính tại nhà hoặc văn phòng từ bất cứ đâu thông qua bảng điều khiển web. Triển khai cơ chế phát gói tin magic packet qua các lớp mạng con và cung cấp cổng kết nối bảo mật đơn giản cho hạ tầng cá nhân.',
                tags: ['TypeScript', 'Express', 'Node.js', 'React', 'Vite', 'Network Protocols']
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
