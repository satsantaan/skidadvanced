# SKIDS Advanced - Child Health & Development Platform

**A comprehensive digital platform for child health monitoring, behavioral assessment, and educational content delivery.**

[![Next.js](https://img.shields.io/badge/Next.js-14-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC)](https://tailwindcss.com/)
[![PWA](https://img.shields.io/badge/PWA-Ready-green)](https://web.dev/progressive-web-apps/)

---

## 🎯 **Project Overview**

SKIDS Advanced is a modern web platform designed to revolutionize child healthcare through:

- **Interactive Discovery Journeys**: Educational exploration of body systems
- **Behavioral Assessments**: AI-powered SKIDS Clinic Chatter for emotional wellness
- **Tiered Care Plans**: Essential (₹299), Comprehensive (₹499), Premium (₹799) monthly subscriptions
- **Provider Dashboard**: Healthcare provider management and campaign tools
- **PWA Capabilities**: Mobile-first progressive web application
- **Educational Integration**: Partnerships with Kurzgesagt, TED-Ed, BrainPOP, Khan Academy

---

## 🏗️ **Architecture Summary**

### **Technology Stack**
- **Frontend**: Next.js 14 with App Router, React 18, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion for smooth interactions
- **Authentication**: Clerk (production) / Mock system (development)
- **Payments**: Razorpay integration for Indian market
- **Database**: PostgreSQL with Supabase (production)
- **Deployment**: Vercel with edge functions

### **Key Features**
- ✅ **6 Interactive Discovery Journeys** (Cardiovascular, Respiratory, Digestive, Nervous, Musculoskeletal, Immune)
- ✅ **Behavioral Assessment System** (SKIDS Clinic Chatter, Digital Wellness)
- ✅ **Three-Tier Care Plans** with educational content integration
- ✅ **Provider Dashboard** with campaign management
- ✅ **PWA Infrastructure** with offline capabilities
- ✅ **Mock Authentication** for development testing
- ✅ **Responsive Design** optimized for mobile devices

---

## 🚀 **Quick Start**

### **Prerequisites**
- Node.js 18+ installed
- npm or yarn package manager
- Git for version control
- Modern web browser (Chrome, Firefox, Safari, Edge)

### **Installation**

```bash
# Clone the repository
git clone <repository-url>
cd skids-advanced

# Switch to development branch
git checkout internal-deployment-v1

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### **Access the Application**
- **Local Development**: http://localhost:3000
- **Staging Environment**: https://skids-advanced-internal.vercel.app
- **Access Code**: `SKIDS2024` (for internal testing)

---

## ⚙️ **Environment Configuration**

### **Environment Variables**

Create a `.env.local` file in the root directory:

```env
# =============================================================================
# DEPLOYMENT CONFIGURATION
# =============================================================================
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_DEPLOYMENT_ENV=development
NEXT_PUBLIC_DEPLOYMENT_TYPE=local

# =============================================================================
# AUTHENTICATION (Clerk) - OPTIONAL FOR DEVELOPMENT
# =============================================================================
# Uncomment when ready for production authentication
# NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_actual_key_here
# CLERK_SECRET_KEY=sk_test_your_actual_key_here

# =============================================================================
# PAYMENT GATEWAY (Razorpay) - OPTIONAL FOR DEVELOPMENT
# =============================================================================
# Uncomment when ready for payment integration
# NEXT_PUBLIC_RAZORPAY_KEY_ID=rzp_test_your_key_here
# RAZORPAY_KEY_SECRET=your_secret_key_here

# =============================================================================
# DATABASE - OPTIONAL FOR DEVELOPMENT
# =============================================================================
# Uncomment when ready for database integration
# DATABASE_URL=postgresql://user:password@host:port/database

# =============================================================================
# INTERNAL TESTING CONFIGURATION
# =============================================================================
NEXT_PUBLIC_TESTING_MODE=true
NEXT_PUBLIC_MOCK_DATA=true
NEXT_PUBLIC_INTERNAL_ACCESS_CODE=SKIDS2024
```

---

## 📜 **Available Scripts**

### **Development Scripts**
```bash
# Start development server with hot reload
npm run dev

# Build application for production
npm run build

# Start production server (after build)
npm start

# Run type checking
npm run type-check

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Format code with Prettier
npm run format
```

### **Testing Scripts**
```bash
# Run unit tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run end-to-end tests
npm run test:e2e
```

---

## 🛠️ **Local Development Workflow**

### **Daily Development Process**

1. **Start Development Server**
   ```bash
   npm run dev
   ```

2. **Make Changes**
   - Edit files in `src/` directory
   - Changes auto-reload in browser
   - TypeScript errors shown in terminal

3. **Test Changes**
   - Test in browser at http://localhost:3000
   - Test on mobile devices using network IP
   - Verify PWA functionality

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "feat: describe your changes"
   git push origin feature-branch-name
   ```

### **Development Best Practices**

- **Component Structure**: Use functional components with TypeScript
- **Styling**: Use Tailwind CSS classes, avoid custom CSS when possible
- **State Management**: Use React hooks and context for state
- **Performance**: Implement lazy loading and code splitting
- **Accessibility**: Follow WCAG 2.1 guidelines
- **Mobile First**: Design for mobile, enhance for desktop

---

## 📁 **Project Structure**

```
src/
├── app/                         # Next.js 14 App Router
│   ├── layout.tsx               # Root layout with providers
│   ├── page.tsx                 # Homepage
│   ├── dashboard/               # Parent/Provider dashboard
│   ├── discovery/               # Discovery journeys
│   ├── behavioral/              # Behavioral assessments
│   ├── care-plans/              # Care plans system
│   ├── provider/                # Provider dashboard
│   └── api/                     # API routes
├── components/                  # Reusable components
│   ├── layout/                  # Layout components
│   ├── discovery/               # Discovery journey components
│   ├── behavioral/              # Assessment components
│   ├── care-plans/              # Care plan components
│   ├── provider/                # Provider components
│   └── ui/                      # Base UI components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility libraries
└── styles/                      # Global styles
```

---

## 🔧 **Troubleshooting**

### **Common Setup Issues**

#### **Issue**: `npm install` fails
```bash
# Solution: Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

#### **Issue**: TypeScript errors on startup
```bash
# Solution: Check TypeScript configuration
npm run type-check
# Fix any type errors in the codebase
```

#### **Issue**: PWA features not working
```bash
# Solution: Verify HTTPS and service worker
# PWA requires HTTPS (works on localhost)
# Check browser developer tools for service worker registration
```

---

## 📚 **Additional Resources**

### **Documentation**
- [Architecture Overview](./ARCHITECTURE.md)
- [Database Schema](./DATABASE_SCHEMA.sql)
- [Implementation Timeline](./IMPLEMENTATION_TIMELINE.md)
- [Production Setup Guide](./PRODUCTION_SETUP.md)
- [Testing Guidelines](./TESTING_GUIDELINES.md)

### **External Resources**
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

---

## 🤝 **Contributing**

### **Development Guidelines**
1. Follow TypeScript best practices
2. Use conventional commit messages
3. Write tests for new features
4. Ensure mobile responsiveness
5. Maintain accessibility standards

---

## 📞 **Support**

### **Team Contacts**
- **Project Lead**: [Contact for project direction and priorities]
- **Technical Lead**: [Contact for architecture and technical decisions]
- **DevOps Lead**: [Contact for deployment and infrastructure]

---

## 📄 **License**

This project is proprietary software developed for SKIDS Advanced platform.

---

**🚀 READY FOR DEVELOPMENT - COMPREHENSIVE PLATFORM FOR CHILD HEALTH & EDUCATION**
