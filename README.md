# BedrockForge

BedrockForge is a comprehensive and beautifully designed learning portal I built to master AWS Bedrock Foundation Models. This project helps users understand generative AI with hands-on tutorials, model playgrounds, and practical production-ready guidance for working with Amazon Bedrock. I developed this application to strengthen my AWS skills and showcase my ability to integrate AI/ML services with modern web technologies.

## 🚀 Features

- **Visually Rich Hero Section** with animated gradients
- **Collapsible Sidebar** with step navigation (powered by shadcn/ui)
- **Responsive Design** for seamless experience on all devices
- **Step-by-Step Labs** covering text generation, image generation, model comparisons, safety implementations, and more
- **Project Highlights** showcasing practical AWS skills
- **Modern UI/UX** with glassmorphism design
- Integration with the latest **Lucide icons**
- Built with **TypeScript**, **React**, **Tailwind CSS**, and **shadcn/ui**
- Easy navigation and professional presentation

---

## 🌟 Project Overview

BedrockForge serves as both a learning platform and a demonstration of my technical capabilities with AWS Bedrock. The application provides:

- **Interactive Learning Labs**: Step-by-step tutorials covering various AWS Bedrock models
- **Model Playground**: Hands-on testing environment for text and image generation
- **Comparison Tools**: Side-by-side analysis of different foundation models
- **Safety & Best Practices**: Implementation of responsible AI practices
- **Production Guidance**: Real-world deployment scenarios and optimization techniques

This project showcases my understanding of AWS AI/ML services, modern web development practices, and my ability to create educational content for complex technical topics.

## 🛠️ Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)
- [@tanstack/react-query](https://tanstack.com/query)
- [React Router](https://reactrouter.com/)
- [Sonner](https://sonner.emilkowal.ski/) (toasts & notifications)

---

## ✨ Getting Started

### 1. **Clone the repository**
```bash
git clone <YOUR_REPO_URL>
cd bedrockforge
```

### 2. **Install dependencies**
```bash
npm install
```

### 3. **Start the development server**
```bash
npm run dev
```

Visit [http://localhost:8080](http://localhost:8080) in your browser.

---

## 🧩 Folder Structure

```
.
├── src/
│   ├── components      # UI and layout components
│   ├── pages           # Route-level page components
│   ├── App.tsx         # Main entry point
│   └── index.css       # Tailwind & custom styles
├── public/
├── README.md
├── package.json
└── ...
```

---

## ✅ Deployment

This project can be deployed using various methods:

### AWS Native Deployment
```bash
# Build the project
npm run build

# Deploy to S3 + CloudFront
aws s3 sync dist/ s3://your-bucket-name
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

### Alternative Platforms
- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **AWS Amplify**: Full CI/CD pipeline with AWS integration

---

## 🪄 Customization

- Modify navigation in `src/components/AppSidebar.tsx`
- Update hero and theme design in `src/components/Hero.tsx` and `src/index.css`
- Add new AWS labs or sections in `src/pages/Index.tsx`
- Customize AWS service integrations as needed

---

## 🎯 Learning Objectives

This project demonstrates proficiency in:
- AWS Bedrock foundation models
- AI/ML service integration
- Modern React development
- TypeScript implementation
- Responsive web design
- Component-based architecture

---

## 💡 Contributing

This is a personal learning project that I'm continuously improving. If you find it helpful or have suggestions for enhancement, feel free to:
- Open an issue to report bugs or suggest features
- Submit a pull request with improvements
- Share feedback on the learning content or user experience

I welcome constructive feedback as I continue to expand my AWS expertise!

---

## 📄 License

This project is for educational and portfolio purposes.

---

## 🙏 Credits

- Developed by Sarankumar @2025
- Built as part of my AWS cloud skills development journey
- Inspired by the need for practical, hands-on AWS Bedrock learning resources
