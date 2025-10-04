# NewGen Strata Services Website

A modern, secure, and feature-rich Next.js website for NewGen Strata Services - a premium strata management company in Melbourne, Australia.

## 🌟 Features

### Design & UI
- **Wimbledon Color Scheme**: Professional green, purple, cream, navy, and gold color palette
- **Modern Design**: Clean, contemporary design with glassmorphism effects
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Accessibility**: WCAG compliant with proper contrast ratios and semantic markup
- **Dark/Light Mode**: Theme switching capability (currently set to light mode)

### Performance & SEO
- **Next.js 14**: Latest version with App Router and React Server Components
- **Optimized Images**: Next.js Image component with WebP/AVIF support
- **SEO Optimized**: Complete meta tags, structured data, and Open Graph
- **Core Web Vitals**: Optimized for excellent performance scores
- **Bundle Analysis**: Built-in bundle analyzer for optimization

### Security
- **Security Headers**: Comprehensive security headers (CSP, HSTS, etc.)
- **Rate Limiting**: API route protection against abuse
- **Input Validation**: Zod schema validation for all forms
- **CSRF Protection**: Built-in protection against CSRF attacks
- **XSS Prevention**: Sanitized inputs and secure headers

### Functionality
- **Contact Forms**: Advanced contact form with validation and email notifications
- **Error Handling**: Comprehensive error boundaries and fallbacks
- **Loading States**: Smooth loading animations and skeleton screens
- **Form Validation**: Real-time validation with helpful error messages
- **Email Integration**: Nodemailer for contact form submissions

## 🚀 Getting Started

### Prerequisites
- Node.js 18.0.0 or later
- npm 8.0.0 or later
- A database (PostgreSQL recommended)
- Email service credentials (SMTP)

### Installation

1. **Clone and setup the project:**
```bash
npx create-next-app@latest newgen-strata-services --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd newgen-strata-services
```

2. **Install dependencies:**
```bash
npm install @next/bundle-analyzer bcryptjs jsonwebtoken @types/bcryptjs @types/jsonwebtoken helmet framer-motion lucide-react react-hook-form @hookform/resolvers zod next-auth prisma @prisma/client nodemailer @types/nodemailer
```

3. **Install shadcn/ui:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input label textarea navigation-menu dropdown-menu dialog toast form avatar badge separator accordion tabs
```

4. **Environment Setup:**
```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key-here
DATABASE_URL=your-database-url-here
EMAIL_SERVER_USER=your-email-user
EMAIL_SERVER_PASSWORD=your-email-password
EMAIL_SERVER_HOST=your-email-host
EMAIL_SERVER_PORT=587
EMAIL_FROM=noreply@newgenstrataservices.com
```

5. **Database Setup:**
```bash
npx prisma generate
npx prisma db push
```

6. **Run Development Server:**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the website.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles with Wimbledon theme
│   ├── layout.tsx           # Root layout with security headers
│   ├── page.tsx             # Homepage
│   ├── about/               # About page
│   ├── services/            # Services page
│   ├── contact/             # Contact page
│   └── api/                 # API routes
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── layout/              # Layout components (Header, Footer)
│   ├── sections/            # Page sections (Hero, About, Services)
│   ├── forms/               # Form components
│   └── common/              # Shared components
├── lib/                     # Utility functions and configurations
├── hooks/                   # Custom React hooks
├── types/                   # TypeScript type definitions
└── styles/                  # Additional stylesheets
```

## 🎨 Design System

### Colors (Wimbledon Theme)
- **Primary Green**: `#006633` - Main brand color
- **Secondary Purple**: `#6B1D7F` - Accent color
- **Gold**: `#FFD700` - Highlighting and CTAs
- **Cream**: `#F7F3E9` - Backgrounds and neutrals
- **Navy**: `#2E2A5B` - Text and contrasts

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Responsive**: Fluid typography scales

### Components
- **Cards**: Glass morphism effects with subtle shadows
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Comprehensive validation and styling
- **Navigation**: Sticky header with smooth scrolling

## 🛠️ Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks
- `npm run analyze` - Analyze bundle size

### Code Quality
- **ESLint**: Configured with Next.js and accessibility rules
- **Prettier**: Code formatting with Tailwind CSS plugin
- **TypeScript**: Strict type checking enabled
- **Husky**: Git hooks for pre-commit checks (optional)

## 🔧 Configuration

### Tailwind CSS
Custom configuration with Wimbledon colors and animations in `tailwind.config.js`.

### Next.js
Performance and security optimizations in `next.config.js`:
- Security headers
- Image optimization
- Bundle optimization
- Compression enabled

### Database
Prisma configuration for database management with type-safe queries.

## 📧 Email Configuration

The contact form uses Nodemailer for email delivery. Configure your SMTP settings:

```env
EMAIL_SERVER_HOST=smtp.gmail.com
EMAIL_SERVER_PORT=587
EMAIL_SERVER_USER=your-email@gmail.com
EMAIL_SERVER_PASSWORD=your-app-password
EMAIL_FROM=noreply@newgenstrataservices.com
```

## 🔒 Security Features

- **CSP Headers**: Content Security Policy protection
- **Rate Limiting**: API endpoint protection
- **Input Sanitization**: XSS prevention
- **CSRF Protection**: Cross-site request forgery protection
- **Secure Headers**: HSTS, X-Frame-Options, etc.

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy automatically

### Other Platforms
- **Netlify**: Works with static export
- **Railway**: Node.js hosting
- **AWS**: Using Amplify or EC2

## 📱 Mobile Optimization

- **Responsive Design**: Mobile-first approach
- **Touch Friendly**: Large tap targets
- **Fast Loading**: Optimized images and code splitting
- **PWA Ready**: Service worker and manifest support

## 🔍 SEO Features

- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Schema Markup**: Structured data for search engines
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine crawling configuration

## 🧪 Testing

Testing setup with Jest and React Testing Library (optional):
```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom
npm run test
```

## 📞 Support

For technical support or questions about this implementation:
- Create an issue in the repository
- Contact the development team

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

---

Built with ❤️ using Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.