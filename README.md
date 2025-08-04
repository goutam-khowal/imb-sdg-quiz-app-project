# [Zero Hunger Interactive Website](https://imb-sdg-quiz-app-project.vercel.app/) 🌍🍽️

An interactive, educational single-page application (SPA) focused on **SDG Goal 2: Zero Hunger**. This Next.js project aims to raise awareness about global hunger issues and engage users through interactive learning experiences.

## 🌟 Problem It Solves

### The Challenge

- **735 million people** faced hunger in 2023
- **1 in 9 people** worldwide lack sufficient food for a healthy life
- **149 million children** under 5 are stunted due to malnutrition
- Limited awareness and engagement on hunger-related issues

### Our Solution

This interactive website addresses the challenge by:

🎓 **Education**: Providing comprehensive, up-to-date statistics and facts about global hunger
📊 **Data Visualization**: Making complex hunger statistics accessible through interactive cards and visualizations
🧠 **Knowledge Testing**: Interactive quizzes to test and improve understanding of hunger-related issues
🗳️ **Community Engagement**: Polls to gauge public opinion on effective hunger-fighting strategies
💡 **Action Inspiration**: Clear pathways for users to understand how they can contribute to solving hunger
📱 **Accessibility**: Responsive design ensuring information reaches users across all devices

## ✨ Features

### 🎯 Interactive Components

- **Dynamic Quiz System**: 4-question quiz with real-time feedback and scoring
- **Community Polling**: Live voting on most effective hunger-fighting approaches
- **Animated Fact Cards**: Engaging data presentation with hover effects
- **Smooth Navigation**: Seamless scrolling between sections

### 🎨 Modern Design

- **Gradient Backgrounds**: Eye-catching visual design
- **Glass Morphism Effects**: Contemporary UI elements
- **Responsive Layout**: Mobile-first design approach
- **Micro-animations**: Enhanced user experience with subtle animations

### 📊 Data & Statistics

- Real-world hunger statistics and facts
- Visual representation of global impact
- Interactive data exploration
- Educational content backed by research

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd zero-hunger-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website in action.

### Project Structure

```
├── app/
│   ├── page.tsx          # Main page component (imports all components)
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global
├── components/           # Individual component files
│   ├── Navbar.tsx       # Navigation component with scroll effects
│   ├── Hero.tsx         # Hero section with animations
│   ├── FactsCards.tsx   # Facts display container
│   ├── FactCard.tsx     # Individual fact card component
│   ├── Quiz.tsx         # Interactive quiz component
│   ├── Poll.tsx         # Community poll with voting
│   ├── Impact.tsx       # Impact and action section
│   └── Footer.tsx       # Footer with links and resources
├── lib/                 # Utility functions (if needed)
├── types/               # TypeScript type definitions (if needed)
├── public/              # Static assets
└── README.md
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect)
- **Animations**: CSS transitions and transforms
- **Font**: Geist font family (optimized with next/font)

## 🎯 Key Components

### 📊 Facts Cards Component

Displays critical hunger statistics in an engaging, visual format:

- Global hunger numbers
- Regional impact data
- Children affected statistics
- Food production requirements

### 🧠 Interactive Quiz

- 4 comprehensive questions about Zero Hunger
- Real-time feedback system
- Progress tracking
- Score calculation and results display

### 🗳️ Community Poll

- Opinion gathering on effective hunger-fighting strategies
- Live results with animated progress bars
- Community engagement features

### 🎨 Hero Section

- Compelling call-to-action
- Smooth scroll navigation
- Gradient background animations
- Mobile-responsive design

## 🌍 Impact & Goals

### Educational Impact

- Increase awareness about global hunger statistics
- Educate users on SDG Goal 2 objectives
- Provide actionable information for getting involved

### User Engagement

- Interactive learning through quizzes and polls
- Community participation in discussions
- Mobile-accessible education platform

### Long-term Vision

- Inspire action toward achieving Zero Hunger
- Build a community of informed advocates
- Support UN Sustainable Development Goal 2

## 🚀 Deployment

### Deploy on Vercel (Recommended)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with zero configuration

### Alternative Deployment Options

- **Netlify**: Connect your GitHub repository
- **AWS Amplify**: Deploy with AWS integration
- **Docker**: Use the included Dockerfile for containerization

## 🤝 Contributing

We welcome contributions to improve the Zero Hunger website! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Areas for Contribution

- Additional quiz questions
- More comprehensive statistics
- Accessibility improvements
- Performance optimizations
- New interactive features

## 📚 Learn More About Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - interactive Next.js tutorial
- [Next.js GitHub repository](https://github.com/vercel/next.js) - feedback and contributions welcome

## 📞 Support & Resources

### Related Organizations

- [UN World Food Programme](https://www.wfp.org/)
- [Food and Agriculture Organization (FAO)](https://www.fao.org/)
- [UN Sustainable Development Goals](https://sdgs.un.org/goals/goal2)

### Get Involved

- Volunteer with local food banks
- Support sustainable agriculture initiatives
- Advocate for policy changes
- Donate to hunger-fighting organizations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- UN Sustainable Development Goals for inspiration
- World Food Programme for statistics and data
- Next.js team for the amazing framework
- Tailwind CSS for the styling system
- Lucide React for beautiful icons

---

**Together, we can achieve Zero Hunger by 2030.** 🌍✨

_Built with ❤️ for a world without hunger_
