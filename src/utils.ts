export type Column = {
  id: string;
  label: string;
  sortable?: boolean;
};

export type Sort = "asc" | "desc";

export type Status = "Draft"| "Published"

export function createData(
  title: string,
  author: string,
  content:string,
  date: string,
  status: Status
) {
  return { id:crypto.randomUUID(), title, author,content, date, status };
}

export const columns: Column[] = [
  { id: "title", label: "Title", sortable: true },
  { id: "author", label: "Author", sortable: true },
  { id: "date", label: "Date", sortable: true },
  { id: "status", label: "Status", sortable: true },
  { id: "actions", label: "", sortable: false },
];

export type BlogData = {
  id: string,
  title: string,
  author: string,
  date: string,
  content:string
  status: Status
}

export const initialRows: BlogData[] = [
  createData(
    "How to Start a Blog in 2025",
    "Alice Johnson",
    "Starting a blog in 2025 is easier than ever.\nChoose your niche, pick a reliable platform, and craft a content plan.\nFocus on providing value and be consistent.",
    "2025-01-05",
    "Published"
  ),
  createData(
    "10 Tips for Better SEO",
    "Michael Smith",
    "Search Engine Optimization is key for visibility.\nUse keyword research tools, optimize meta tags, and write compelling headlines.\nDon’t forget to build quality backlinks.",
    "2025-01-12",
    "Draft"
  ),
  createData(
    "Top 5 Web Development Trends",
    "Sarah Lee",
    "From AI-powered design tools to JAMstack architecture, 2025 brings exciting trends.\nProgressive Web Apps and motion UI are also on the rise.\nAdapt early to stay competitive.",
    "2025-01-20",
    "Published"
  ),
  createData(
    "Content Marketing Strategies",
    "David Kim",
    "Content is king, but strategy is queen.\nIdentify your audience, choose the right formats, and repurpose old content.\nMeasure results to refine your approach.",
    "2025-01-28",
    "Draft"
  ),
  createData(
    "How to Monetize Your Blog",
    "Emma White",
    "Once you have traffic, monetization becomes possible.\nTry affiliate marketing, display ads, or selling digital products.\nAlways maintain audience trust.",
    "2025-02-02",
    "Published"
  ),
  createData(
    "The Power of Storytelling",
    "Liam Brown",
    "Humans connect with stories more than facts.\nUse emotional arcs, relatable characters, and personal experiences in your blogs.\nKeep your readers coming back for more.",
    "2025-02-10",
    "Draft"
  ),
  createData(
    "Boosting Blog Traffic Fast",
    "Sophia Wilson",
    "Promote your posts on multiple channels.\nCollaborate with other bloggers and optimize headlines.\nEngage with your audience through comments and email lists.",
    "2025-02-15",
    "Published"
  ),
  createData(
    "Must-Have Blogging Tools",
    "James Taylor",
    "Tools can make blogging easier.\nUse Grammarly for grammar checks, Canva for visuals, and WordPress plugins for SEO.\nTest and choose what fits your workflow.",
    "2025-02-22",
    "Published"
  ),
  createData(
    "Beginner's Guide to WordPress",
    "Olivia Green",
    "WordPress powers millions of websites.\nLearn to install themes, add plugins, and customize layouts.\nMaster content creation to maintain steady growth.",
    "2025-03-01",
    "Published"
  ),
  createData(
    "Social Media Marketing for Bloggers",
    "Benjamin Lewis",
    "Social media is a traffic goldmine.\nPost consistently, use trending hashtags, and engage with followers.\nTrack analytics to refine your campaigns.",
    "2025-03-08",
    "Draft"
  ),
  createData(
    "Improving Blog Engagement",
    "Chloe Martin",
    "Encourage comments, host polls, and reply to readers.\nAdd interactive content like quizzes or surveys.\nThe more your audience interacts, the better.",
    "2025-03-15",
    "Published"
  ),
  createData(
    "Email Marketing Basics",
    "Daniel Hall",
    "Email is one of the highest-converting channels.\nOffer a lead magnet to grow your subscriber list.\nSend valuable content, not just promotions.",
    "2025-03-22",
    "Draft"
  ),
  createData(
    "How to Write Viral Blog Posts",
    "Grace Allen",
    "Viral posts are share-worthy and emotional.\nPick trending topics, craft irresistible headlines, and add visuals.\nMake the content easy to read and share.",
    "2025-03-29",
    "Published"
  ),
  createData(
    "Blog Design Best Practices",
    "Lucas Walker",
    "A clean design improves readability.\nUse a consistent color palette and typography.\nTest mobile responsiveness for better user experience.",
    "2025-04-05",
    "Draft"
  ),
  createData(
    "Growing Your Blog Audience",
    "Ella Scott",
    "Organic growth takes time.\nNetwork with other bloggers, create guest posts, and use SEO effectively.\nFocus on content that solves real problems.",
    "2025-04-12",
    "Published"
  ),
  createData(
    "Passive Income Through Blogging",
    "Henry Adams",
    "Passive income streams include digital products, memberships, and evergreen content.\nAutomate processes to minimize effort.\nStay consistent to keep earnings steady.",
    "2025-04-19",
    "Published"
  ),
  createData(
    "Avoiding Blogger Burnout",
    "Isabella King",
    "Burnout is common among bloggers.\nPlan breaks, batch your content, and delegate when possible.\nRemember to maintain a healthy work-life balance.",
    "2025-04-26",
    "Published"
  ),
  createData(
    "Analyzing Blog Metrics",
    "Jack Hill",
    "Track your blog's performance using analytics.\nFocus on traffic sources, bounce rate, and conversion rate.\nUse the data to improve your strategy.",
    "2025-05-02",
    "Draft"
  ),
  createData(
    "Collaborations and Guest Posts",
    "Amelia Wright",
    "Collaborations expand your reach.\nPartner with bloggers in your niche for guest posts and joint campaigns.\nIt’s a win-win for both audience and traffic.",
    "2025-05-09",
    "Published"
  ),
  createData(
    "Creating a Content Calendar",
    "Ethan Young",
    "A content calendar keeps you organized.\nPlan topics, set deadlines, and track your publishing schedule.\nIt ensures consistent, high-quality posting.",
    "2025-05-16",
    "Published"
  ),
];

