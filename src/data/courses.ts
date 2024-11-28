import type { Course } from '../types';

export const courses: Course[] = [
  // Finance Fundamentals
  {
    id: 'traditional-finance-basics',
    title: 'Traditional Finance Fundamentals',
    description: 'Master the core concepts of traditional finance and understand how they relate to cryptocurrency markets.',
    level: 'beginner',
    duration: 240,
    modules: [
      {
        id: 'finance-basics',
        title: 'Financial Markets Overview',
        progress: 0,
        lessons: [
          {
            id: 'markets-intro',
            title: 'Introduction to Financial Markets',
            type: 'article',
            content: `# Understanding Financial Markets\n\nLearn the fundamentals of financial markets, including stocks, bonds, and commodities...`,
            duration: 30,
            completed: false
          }
        ]
      }
    ]
  },
  
  // Cryptocurrency Basics
  {
    id: 'crypto-fundamentals',
    title: 'Cryptocurrency Fundamentals',
    description: 'Learn the essential concepts of cryptocurrency, including wallet management, transactions, and security.',
    level: 'beginner',
    duration: 180,
    modules: [
      {
        id: 'crypto-basics',
        title: 'Understanding Cryptocurrency',
        progress: 0,
        lessons: [
          {
            id: 'what-is-crypto',
            title: 'What is Cryptocurrency?',
            type: 'article',
            content: `# Introduction to Cryptocurrency\n\nDiscover the revolutionary world of digital currencies...`,
            duration: 25,
            completed: false
          }
        ]
      }
    ]
  },

  // Advanced Trading
  {
    id: 'advanced-trading',
    title: 'Advanced Cryptocurrency Trading',
    description: 'Master advanced trading strategies, technical analysis, and risk management in cryptocurrency markets.',
    level: 'advanced',
    duration: 360,
    modules: [
      {
        id: 'trading-strategies',
        title: 'Professional Trading Strategies',
        progress: 0,
        lessons: [
          {
            id: 'advanced-strategies',
            title: 'Advanced Trading Strategies',
            type: 'article',
            content: `# Professional Trading Strategies\n\nLearn sophisticated trading techniques used by professional traders...`,
            duration: 45,
            completed: false
          }
        ]
      }
    ]
  },

  // Blockchain Technology
  {
    id: 'blockchain-deep-dive',
    title: 'Blockchain Technology Deep Dive',
    description: 'Comprehensive exploration of blockchain architecture, consensus mechanisms, and real-world applications.',
    level: 'intermediate',
    duration: 300,
    modules: [
      {
        id: 'blockchain-architecture',
        title: 'Blockchain Architecture',
        progress: 0,
        lessons: [
          {
            id: 'consensus-mechanisms',
            title: 'Consensus Mechanisms Explained',
            type: 'article',
            content: `# Understanding Consensus Mechanisms\n\nExplore different consensus mechanisms and their implications...`,
            duration: 40,
            completed: false
          }
        ]
      }
    ]
  },

  // DeFi
  {
    id: 'defi-masterclass',
    title: 'DeFi Masterclass',
    description: 'Explore decentralized finance protocols, yield farming, liquidity provision, and DeFi security.',
    level: 'intermediate',
    duration: 420,
    modules: [
      {
        id: 'defi-protocols',
        title: 'Understanding DeFi Protocols',
        progress: 0,
        lessons: [
          {
            id: 'defi-basics',
            title: 'DeFi Fundamentals',
            type: 'article',
            content: `# Introduction to DeFi\n\nUnderstand the building blocks of decentralized finance...`,
            duration: 35,
            completed: false
          }
        ]
      }
    ]
  },

  // NFTs & Digital Assets
  {
    id: 'nft-mastery',
    title: 'NFT Creation and Trading',
    description: 'Learn to create, value, and trade NFTs while understanding the technology behind digital collectibles.',
    level: 'intermediate',
    duration: 240,
    modules: [
      {
        id: 'nft-fundamentals',
        title: 'NFT Fundamentals',
        progress: 0,
        lessons: [
          {
            id: 'nft-intro',
            title: 'Introduction to NFTs',
            type: 'article',
            content: `# Understanding NFTs\n\nExplore the world of non-fungible tokens...`,
            duration: 30,
            completed: false
          }
        ]
      }
    ]
  },

  // Memecoin Trading
  {
    id: 'memecoin-trading',
    title: 'Memecoin Trading & Analysis',
    description: 'Master the unique aspects of memecoin trading, including social sentiment analysis and risk management.',
    level: 'intermediate',
    duration: 180,
    modules: [
      {
        id: 'meme-psychology',
        title: 'Memecoin Market Psychology',
        progress: 0,
        lessons: [
          {
            id: 'social-sentiment',
            title: 'Social Media Impact Analysis',
            type: 'article',
            content: `# Understanding Memecoin Psychology\n\nLearn how social media influences memecoin markets...`,
            duration: 25,
            completed: false
          }
        ]
      }
    ]
  },

  // Risk Management
  {
    id: 'risk-management',
    title: 'Crypto Risk Management',
    description: 'Learn essential risk management strategies for cryptocurrency trading and investment.',
    level: 'intermediate',
    duration: 240,
    modules: [
      {
        id: 'risk-basics',
        title: 'Risk Management Fundamentals',
        progress: 0,
        lessons: [
          {
            id: 'position-sizing',
            title: 'Position Sizing and Risk Control',
            type: 'article',
            content: `# Risk Management Essentials\n\nMaster the art of position sizing and risk control...`,
            duration: 30,
            completed: false
          }
        ]
      }
    ]
  },

  // Technical Analysis
  {
    id: 'technical-analysis',
    title: 'Technical Analysis Mastery',
    description: 'Master chart patterns, indicators, and technical analysis tools for cryptocurrency trading.',
    level: 'advanced',
    duration: 300,
    modules: [
      {
        id: 'ta-fundamentals',
        title: 'Technical Analysis Fundamentals',
        progress: 0,
        lessons: [
          {
            id: 'chart-patterns',
            title: 'Understanding Chart Patterns',
            type: 'article',
            content: `# Chart Pattern Analysis\n\nLearn to identify and trade using chart patterns...`,
            duration: 35,
            completed: false
          }
        ]
      }
    ]
  },

  // Regulatory Compliance
  {
    id: 'crypto-compliance',
    title: 'Cryptocurrency Compliance',
    description: 'Understand cryptocurrency regulations, tax implications, and compliance requirements.',
    level: 'intermediate',
    duration: 240,
    modules: [
      {
        id: 'compliance-basics',
        title: 'Regulatory Framework',
        progress: 0,
        lessons: [
          {
            id: 'crypto-regulations',
            title: 'Global Crypto Regulations',
            type: 'article',
            content: `# Cryptocurrency Regulations\n\nNavigate the complex world of cryptocurrency regulations...`,
            duration: 30,
            completed: false
          }
        ]
      }
    ]
  }
];