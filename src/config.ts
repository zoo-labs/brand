/**
 * Main brand configuration for Zoo NGO
 */

export const brandConfig = {
  // Company Information
  company: {
    name: 'Zoo',
    legalName: 'Zoo NGO',
    tagline: 'Empowering NFT creators and gaming communities',
    description: 'Next-generation NFT marketplace and blockchain gaming infrastructure for the metaverse.',
    founded: 2022,
    headquarters: 'Dubai, UAE',
  },

  // Brand Values
  values: [
    'Innovation',
    'Reliability', 
    'Transparency',
    'Performance',
    'Accessibility'
  ],

  // Contact Information
  contact: {
    email: 'hello@zoo.ai',
    support: 'support@zoo.ai',
    sales: 'sales@zoo.ai',
    press: 'press@zoo.ai',
  },

  // Social Media
  social: {
    twitter: 'https://twitter.com/zooai',
    github: 'https://github.com/zooai',
    linkedin: 'https://linkedin.com/company/zooai',
    discord: 'https://discord.gg/zoo',
    youtube: 'https://youtube.com/@zooai',
  },

  // Domains
  domains: {
    main: 'https://zoo.ai',
    docs: 'https://docs.zoo.ai',
    api: 'https://api.zoo.ai',
    app: 'https://app.zoo.ai',
    brand: 'https://brand.zoo.ai',
    ui: 'https://ui.zoo.ai',
    status: 'https://status.zoo.ai',
  },

  // Legal
  legal: {
    privacy: 'https://zoo.ai/privacy',
    terms: 'https://zoo.ai/terms',
    cookies: 'https://zoo.ai/cookies',
    security: 'https://zoo.ai/security',
  },

  // SEO Defaults
  seo: {
    title: 'Zoo NGO - Enterprise AI Infrastructure',
    description: 'Build, deploy, and scale AI applications with Zoo\'s enterprise-grade infrastructure and tools.',
    keywords: [
      'AI infrastructure',
      'machine learning',
      'artificial intelligence',
      'LLM',
      'enterprise AI',
      'AI platform',
      'ML ops',
      'AI deployment',
    ],
    image: 'https://zoo.ai/og-image.png',
    twitterCard: 'summary_large_image',
    twitterCreator: '@zooai',
  },
} as const

export type BrandConfig = typeof brandConfig