export interface DevelopEntry {
  title: string
  description: string
  date: string // YYYY-MM-DD
  version: string
  tag: string
  changes: string[]
  features?: string[]
  fixes?: string[]
  links?: {
    title: string
    href: string
  }[]
}

export const DEVELOP_DATA: DevelopEntry[] = [
  {
    title: "Portfolio v2 — Tối ưu & Cập nhật giao diện",
    description:
      "Tái thiết kế toàn bộ portfolio với giao diện hiện đại, thêm hiệu ứng 3D và tối ưu hiệu năng cho thiết bị yếu.",
    date: "2026-06-28",
    version: "v2.0.0",
    tag: "release",
    changes: [
      "Thiết kế lại trang chủ với hiệu ứng Aurora Text và Sparkles",
      "Thêm component Lanyard 3D tương tác được (Three.js + Rapier physics)",
      "Xây dựng trang Develop — changelog theo dõi tiến độ dự án",
      "Tích hợp chế độ sáng/tối với next-themes",
      "Scroll to top button",
    ],
    features: [
      "Tự động phát hiện cấu hình thiết bị — ẩn hiệu ứng 3D trên máy yếu",
      "Timeline cho Work Experience với animation mượt",
      "MagicUI components: Aurora Text, Sparkles, BlurFade, Highlighter",
      "SEO optimization với Open Graph và structured data (JSON-LD)",
    ],
    fixes: [
      "Fix Lanyard physics lag — dùng frameloop='demand' + tier-based rendering",
      "Tối ưu bundle — xoá file không dùng (blog.ts, mdx.tsx, hello-world.mdx)",
      "Sửa lỗi DPR type mismatch trên Canvas",
    ],
    links: [
      { title: "View on GitHub", href: "https://github.com/phanduykhai05/portfolioVip" },
      { title: "Live Demo", href: "https://dkhaidev.vercel.app" },
    ],
  },
  {
    title: "Json Tree — Trực quan hoá dữ liệu",
    description:
      "Công cụ giúp visualize JSON dạng Graph/Tree, hỗ trợ kéo thả và tìm kiếm node.",
    date: "2026-01-15",
    version: "v1.0.0",
    tag: "release",
    changes: [
      "Render JSON dạng cây thư mục với cấu trúc phân cấp",
      "Chế độ Graph view chuyển đổi linh hoạt",
      "Tìm kiếm và filter node theo tên",
      "Copy path đến node chỉ với một click",
      "Responsive design — hoạt động tốt trên mobile",
    ],
    links: [
      { title: "Website", href: "https://json-tree-rouge.vercel.app/" },
      { title: "GitHub", href: "https://github.com/phanduykhai05/Json-Tree" },
    ],
  },
  {
    title: "POWES — Nền tảng quản lý dịch vụ",
    description:
      "Hệ thống toàn diện cho quản lý ADS, Marketing, VPS/Hosting với backend Laravel.",
    date: "2025-09-20",
    version: "v1.1.0",
    tag: "update",
    changes: [
      "Thêm module quản lý VPS tự động provisioning",
      "Tích hợp dashboard thống kê real-time",
      "Hệ thống thanh toán và xuất hoá đơn tự động",
      "Cải thiện tốc độ tải trang với Next.js App Router",
    ],
    fixes: [
      "Fix lỗi hiển thị bảng trên mobile",
      "Sửa lỗi caching dữ liệu dashboard",
    ],
    links: [
      { title: "Website", href: "https://pwsdata.vn/" },
    ],
  },
  {
    title: "POWES — Release đầu tiên",
    description:
      "MVP của nền tảng quản lý và marketing dành cho doanh nghiệp vừa và nhỏ.",
    date: "2025-05-01",
    version: "v1.0.0",
    tag: "release",
    changes: [
      "Giao diện quản lý dịch vụ với Next.js + TypeScript",
      "Backend API với Laravel + MySQL",
      "Tích hợp cổng thanh toán",
      "Hệ thống tạo và quản lý tài khoản VPS/Hosting",
      "Module Marketing cơ bản (email, SMS)",
    ],
    links: [
      { title: "Website", href: "https://pwsdata.vn/" },
    ],
  },
  {
    title: "AndroRAT — Remote Administration Tool",
    description:
      "Ứng dụng client/server cho phép quản lý thiết bị Android từ xa. Mục đích nghiên cứu bảo mật.",
    date: "2024-02-01",
    version: "v1.0.0",
    tag: "release",
    changes: [
      "Kết nối TCP/IP giữa Android client và Java Swing server",
      "Điều khiển thiết bị từ xa: camera, mic, SMS, GPS",
      "Mã hóa toàn bộ kết nối bằng SSL/TLS",
      "Giao diện server trực quan với real-time log",
    ],
    links: [
      { title: "GitHub", href: "https://github.com/phanduykhai05/AndoidRAT" },
    ],
  },
]
