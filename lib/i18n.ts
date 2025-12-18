export const locales = ['en', 'zh'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

const dictionary = {
  en: {
    nav: {
      home: 'Home',
      blog: 'Blog',
      tags: 'Tags',
      projects: 'Projects',
      about: 'About',
    },
    common: {
      publishedOn: 'Published on',
      readMore: 'Read more',
      allPosts: 'All Posts',
      previous: 'Previous',
      next: 'Next',
      of: 'of',
      search: 'Search',
      toggleMenu: 'Toggle Menu',
      backToHomepage: 'Back to homepage',
      themeSwitcher: 'Theme switcher',
      light: 'Light',
      dark: 'Dark',
      system: 'System',
    },
    home: {
      latest: 'Latest',
      noPostsFound: 'No posts found.',
    },
    tags: {
      title: 'Tags',
      noTagsFound: 'No tags found.',
      description: 'Things I blog about',
      viewPostsTagged: 'View posts tagged',
    },
    blog: {
      title: 'Blog',
      allPostsTitle: 'All Posts',
    },
    projects: {
      title: 'Projects',
      description: 'Showcase your projects with a hero image (16 x 9)',
    },
    about: {
      title: 'About',
    },
    notFound: {
      title: "Sorry we couldn't find this page.",
      subtitle: 'But dont worry, you can find plenty of other things on our homepage.',
    },
    post: {
      previousArticle: 'Previous Article',
      nextArticle: 'Next Article',
      backToBlog: 'Back to the blog',
      discussOnTwitter: 'Discuss on Twitter',
      viewOnGitHub: 'View on GitHub',
      previousPost: 'Previous post',
      nextPost: 'Next post',
    },
  },
  zh: {
    nav: {
      home: '首页',
      blog: '博客',
      tags: '标签',
      projects: '项目',
      about: '关于我',
    },
    common: {
      publishedOn: '发布于',
      readMore: '阅读全文',
      allPosts: '所有文章',
      previous: '上一页',
      next: '下一页',
      of: '共',
      search: '搜索',
      toggleMenu: '切换菜单',
      backToHomepage: '返回首页',
      themeSwitcher: '主题切换',
      light: '浅色',
      dark: '深色',
      system: '跟随系统',
    },
    home: {
      latest: '最新',
      noPostsFound: '暂无文章。',
    },
    tags: {
      title: '标签',
      noTagsFound: '暂无标签。',
      description: '我写过的主题',
      viewPostsTagged: '查看该标签的文章',
    },
    blog: {
      title: '博客',
      allPostsTitle: '所有文章',
    },
    projects: {
      title: '项目',
      description: '用封面图展示你的项目（16×9）',
    },
    about: {
      title: '关于我',
    },
    notFound: {
      title: '抱歉，未找到该页面。',
      subtitle: '别担心，你可以在首页找到更多内容。',
    },
    post: {
      previousArticle: '上一篇',
      nextArticle: '下一篇',
      backToBlog: '返回博客',
      discussOnTwitter: '在 X 上讨论',
      viewOnGitHub: '在 GitHub 查看',
      previousPost: '上一篇文章',
      nextPost: '下一篇文章',
    },
  },
} as const

export function getLocale(value: unknown): Locale {
  if (value === 'zh') return 'zh'
  return 'en'
}

export function getDictionary(locale: unknown) {
  return dictionary[getLocale(locale)]
}

export function getPostLocale(post: unknown): Locale {
  const language = (post as { language?: unknown })?.language
  return getLocale(language)
}
