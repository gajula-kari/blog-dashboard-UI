import type { Status, BlogData } from "../common/type";

export function createData(
  title: string,
  author: string,
  content: string,
  date: string,
  status: Status
) {
  return { id: crypto.randomUUID(), title, author, content, date, status };
}


export const initialRows: BlogData[] = [
  createData(
    "How to Start a Blog in 2025",
    "Alice Johnson",
    `Starting a blog in 2025 is easier than ever.
Choose your niche, pick a reliable platform, and craft a content plan.
Focus on providing value and be consistent.

Before you start writing, define your target audience and understand their needs.
Research competitors in your niche to spot content gaps and find your unique voice.
Create a clear mission statement for your blog so every post aligns with your purpose.

Invest time in learning SEO fundamentals — keyword research, backlink strategies, and on-page optimization — to maximize discoverability.
Consider experimenting with multiple content formats: written posts, videos, and interactive elements like quizzes.

Lastly, remember that blogging is a long-term game.
Engage consistently with your readers via comments, newsletters, and social media.
Track your analytics, adapt to what works, and stay patient — real success is built over time.

In addition, think carefully about your blog's branding. A memorable name, professional logo, and cohesive color palette help establish credibility. Don’t underestimate the power of a strong “About” page — it’s often one of the most visited sections of a site. Consider starting with a few cornerstone articles that thoroughly cover your main topics, as these can serve as a foundation for all future posts. Build a publishing rhythm you can realistically maintain — even one high-quality post per week can outperform daily low-quality content. Engage in networking by commenting on other blogs and collaborating with influencers. Over time, these relationships can lead to backlinks, shares, and increased exposure. The earlier you focus on delivering genuine value and connecting with your audience, the stronger your blog's long-term growth will be.`,
    "2025-01-05",
    "Published"
  ),
  createData(
    "10 Tips for Better SEO",
    "Michael Smith",
    `Search Engine Optimization is key for visibility.
Use keyword research tools, optimize meta tags, and write compelling headlines.
Don't forget to build quality backlinks.

Start by identifying your audience's search intent, focusing on what problems they want solved.
Long-tail keywords can help you rank faster with less competition.

Ensure your website is technically sound with fast load times, mobile optimization, and secure HTTPS hosting.
Add structured data markup so search engines better understand your content.

SEO is not a one-and-done process — schedule periodic audits, update old articles, and monitor rankings.
Stay informed about algorithm changes and adjust strategies quickly to avoid traffic drops.
A well-planned SEO approach delivers compounding rewards over months and years.`,
    "2025-01-12",
    "Draft"
  ),
  createData(
    "Top 5 Web Development Trends",
    "Sarah Lee",
    `From AI-powered design tools to JAMstack architecture, 2025 brings exciting trends.
Progressive Web Apps and motion UI are also on the rise.
Adapt early to stay competitive.

WebAssembly lets developers build high-performance apps in languages other than JavaScript and run them in the browser.
Serverless computing reduces DevOps overhead and scales automatically with demand.

Accessibility is moving from “nice to have” to mandatory, especially with increasing legal requirements.
Design systems are evolving to offer highly customizable components that still maintain brand consistency.

Meanwhile, no-code and low-code platforms are empowering more people to build apps than ever before, accelerating the pace of innovation.`,
    "2025-01-20",
    "Published"
  ),
  createData(
    "Content Marketing Strategies",
    "David Kim",
    `Content is king, but strategy is queen.
Identify your audience, choose the right formats, and repurpose old content.
Measure results to refine your approach.

Set SMART goals for each campaign and build detailed buyer personas.
Diversify distribution channels by publishing on your blog, guest posting, and leveraging video platforms.

Repurposing is a must: turn webinars into blog articles, blog articles into Twitter threads, and so on.
Encourage engagement through polls, comments, and interactive media.

Review analytics regularly to refine your strategy — remove what's not working, double down on what is.
A well-executed plan turns content into a powerful growth engine.`,
    "2025-01-28",
    "Draft"
  ),
  createData(
    "How to Monetize Your Blog",
    "Emma White",
    `Once you have traffic, monetization becomes possible.
Try affiliate marketing, display ads, or selling digital products.
Always maintain audience trust.

Diversify your income streams for stability — courses, memberships, sponsorships, and consulting.
Set clear price points and value propositions for your paid offerings.

Track conversions and ROI to focus on the most profitable areas.
Maintain transparency with disclosures for any sponsored or affiliate content.

By providing consistent value and aligning monetization with audience needs, your earnings can grow naturally over time without eroding trust.`,
    "2025-02-02",
    "Published"
  ),
  createData(
    "The Power of Storytelling",
    "Liam Brown",
    `Humans connect with stories more than facts.
Use emotional arcs, relatable characters, and personal experiences in your blogs.
Keep your readers coming back for more.

Blend storytelling into instructional posts by using personal anecdotes to make complex topics easier to grasp.
Draw from customer success stories and real-world experiences to add authenticity.

Maintain a consistent brand voice and narrative style — this helps readers feel connected across multiple posts.
Good storytelling not only informs but inspires, making your content memorable long after reading.`,
    "2025-02-10",
    "Draft"
  ),
  createData(
    "Boosting Blog Traffic Fast",
    "Sophia Wilson",
    `Promote your posts on multiple channels.
Collaborate with other bloggers and optimize headlines.
Engage with your audience through comments and email lists.

Use a mix of organic and paid channels for rapid visibility.
Participate in online communities where your audience spends time.

Refresh old posts with better headlines, updated data, and new visuals to attract renewed attention.
Measure traffic sources to double down on the most effective channels.`,
    "2025-02-15",
    "Published"
  ),
  createData(
    "Must-Have Blogging Tools",
    "James Taylor",
    `Tools can make blogging easier.
Use Grammarly for grammar checks, Canva for visuals, and WordPress plugins for SEO.
Test and choose what fits your workflow.

Leverage project management apps like Trello or Notion to organize content calendars.
Analytics suites like Google Analytics or Matomo help track performance and growth trends.

Choosing and learning the right tools saves time, improves consistency, and raises content quality for the long term.`,
    "2025-02-22",
    "Published"
  ),
  createData(
    "Beginner's Guide to WordPress",
    "Olivia Green",
    `WordPress powers millions of websites.
Learn to install themes, add plugins, and customize layouts.
Master content creation to maintain steady growth.

Begin with a lightweight theme for speed and mobile responsiveness.
Install must-have plugins for security, SEO, and backups.

Understanding categories, tags, and permalinks early on will make managing content much easier in the long run.`,
    "2025-03-01",
    "Published"
  ),
  createData(
    "Social Media Marketing for Bloggers",
    "Benjamin Lewis",
    `Social media is a traffic goldmine.
Post consistently, use trending hashtags, and engage with followers.
Track analytics to refine your campaigns.

Tailor posts for each platform: short, punchy for Twitter; polished visuals for Instagram; longer discussions for LinkedIn.

Experiment with live streams, polls, and interactive stories to engage followers in real time.
Healthy social media activity can become a consistent referral source to your blog.`,
    "2025-03-08",
    "Draft"
  ),
  createData(
    "Improving Blog Engagement",
    "Chloe Martin",
    `Encourage comments, host polls, and reply to readers.
Add interactive content like quizzes or surveys.
The more your audience interacts, the better.

Ask open-ended questions at the end of posts to spark discussion.
Reward loyal readers by featuring their comments or profiles.

High engagement levels signal to algorithms that your content is valuable, boosting visibility.`,
    "2025-03-15",
    "Published"
  ),
  createData(
    "Email Marketing Basics",
    "Daniel Hall",
    `Email is one of the highest-converting channels.
Offer a lead magnet to grow your subscriber list.
Send valuable content, not just promotions.

Segment your audience to send targeted content and offers.
A/B test your subject lines and calls-to-action to find what resonates most.

Track open rates, click rates, and unsubscribe trends to continuously improve campaigns.`,
    "2025-03-22",
    "Draft"
  ),
  createData(
    "How to Write Viral Blog Posts",
    "Grace Allen",
    `Viral posts are share-worthy and emotional.
Pick trending topics, craft irresistible headlines, and add visuals.
Make content easy to read and share.

Find the emotional hook — surprise, inspire, make them laugh, or even provoke thought.
Include share buttons prominently.

Blend snackable elements like infographics or short videos so content is more shareable on multiple platforms.`,
    "2025-03-29",
    "Published"
  ),
  createData(
    "Blog Design Best Practices",
    "Lucas Walker",
    `A clean design improves readability.
Use a consistent color palette and typography.
Test mobile responsiveness for better user experience.

Limit pop-ups and avoid clutter.
Organize content logically with clear headings and spacing.

A user-friendly design reflects professionalism and invites readers to stay longer.`,
    "2025-04-05",
    "Draft"
  ),
  createData(
    "Growing Your Blog Audience",
    "Ella Scott",
    `Organic growth takes time.
Network with other bloggers, create guest posts, and use SEO effectively.
Focus on content that solves real problems.

Collaborate with influencers and participate in industry events.
Encourage social shares by integrating easy-click share buttons.

Over time, valuable content builds trust — and trust builds a loyal audience.`,
    "2025-04-12",
    "Published"
  ),
  createData(
    "Passive Income Through Blogging",
    "Henry Adams",
    `Passive income streams include digital products, memberships, and evergreen content.
Automate processes to minimize effort.
Stay consistent to keep earnings steady.

Consider affiliate programs for products you trust.
Repurpose high-performing content into paid resources.

With the right systems, your blog can generate income with minimal daily involvement.`,
    "2025-04-19",
    "Published"
  ),
  createData(
    "Avoiding Blogger Burnout",
    "Isabella King",
    `Burnout is common among bloggers.
Plan breaks, batch your content, and delegate when possible.
Maintain a healthy work-life balance.

Set realistic expectations for publishing frequency.
Mix light content with deep-dive articles to avoid mental fatigue.

Remember, consistency matters — but so does your well-being.`,
    "2025-04-26",
    "Published"
  ),
  createData(
    "Analyzing Blog Metrics",
    "Jack Hill",
    `Track your blog's performance using analytics.
Focus on traffic sources, bounce rate, and conversion rate.
Use the data to improve your strategy.

Identify which content types and topics perform best.
Experiment with posting times and formats.

Analytics help guide you toward data-informed decisions instead of guesswork.`,
    "2025-05-02",
    "Draft"
  ),
  createData(
    "Collaborations and Guest Posts",
    "Amelia Wright",
    `Collaborations expand your reach.
Partner with bloggers in your niche for guest posts and joint campaigns.
It's a win-win for both audience and traffic.

Look for collaborations that bring unique value to both readerships.
Share promotional duties and cross-link content to maximize visibility.

Strong professional relationships in your niche can pay dividends long-term.`,
    "2025-05-09",
    "Published"
  ),
  createData(
    "Creating a Content Calendar",
    "Ethan Young",
    `A content calendar keeps you organized.
Plan topics, set deadlines, and track your publishing schedule.
It ensures consistent, high-quality posting.

Schedule around key industry events for relevance.
Include time for content updates, not just new creation.

A well-maintained content calendar reduces stress and improves planning accuracy.`,
    "2025-05-16",
    "Published"
  ),
];
