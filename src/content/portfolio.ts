export type PortfolioCategoryId =
  | 'digital-marketing'
  | 'web-development'
  | 'saas-products'
  | 'shopify'
  | 'wordpress';

export type PortfolioPlatform =
  | 'Website'
  | 'Facebook'
  | 'Instagram'
  | 'LinkedIn'
  | 'Web App'
  | 'Shopify'
  | 'WordPress'
  | 'SaaS';

export type PortfolioLinkType = 'live' | 'social' | 'staging' | 'login';

export interface PortfolioEntry {
  title: string;
  url: string;
  category: PortfolioCategoryId;
  industry: string;
  platform: PortfolioPlatform;
  linkType: PortfolioLinkType;
  isStaging: boolean;
  requiresLogin: boolean;
}

export interface PortfolioCategory {
  id: PortfolioCategoryId;
  title: string;
  description: string;
  dashboardVariant: 'marketing' | 'web' | 'saas' | 'commerce' | 'wordpress';
  accent: string;
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    description: 'Social media, community, campaign, and brand-channel work across Facebook, Instagram, and LinkedIn.',
    dashboardVariant: 'marketing',
    accent: '#f79009',
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Public websites, product interfaces, and customer-facing web experiences built for credibility and conversion.',
    dashboardVariant: 'web',
    accent: '#155eef',
  },
  {
    id: 'saas-products',
    title: 'SaaS Products',
    description: 'Subscription products and software platforms designed around repeatable digital workflows.',
    dashboardVariant: 'saas',
    accent: '#7f56d9',
  },
  {
    id: 'shopify',
    title: 'Shopify',
    description: 'Commerce storefronts spanning consumer products, lifestyle brands, electronics, food, and wellness.',
    dashboardVariant: 'commerce',
    accent: '#0f9f8f',
  },
  {
    id: 'wordpress',
    title: 'WordPress',
    description: 'Content, corporate, commerce, agency, creator, healthcare, and real-estate experiences.',
    dashboardVariant: 'wordpress',
    accent: '#2e90fa',
  },
];

type RawPortfolioEntry = {
  url: string;
  title: string;
  industry: string;
};

// Source: docs/Social_Profiles_Research.xlsx, rows 2-34 (real client social channels).
// Clients with multiple platform links appear as one raw entry per link.
const digitalMarketing: RawPortfolioEntry[] = [
  { title: 'Shan e Arab Restaurant', industry: 'Food & Beverage', url: 'https://www.instagram.com/_shanearab_' },
  { title: 'Maxkemp Building Group', industry: 'Home Improvement', url: 'https://www.instagram.com/maxkempgroup' },
  { title: 'Global Hill Construction', industry: 'Construction', url: 'https://www.instagram.com/globalhillct' },
  { title: 'IT Centre RYK (ICR)', industry: 'IT Training', url: 'https://www.facebook.com/ITCentreRYK' },
  { title: 'IT Centre RYK (ICR)', industry: 'IT Training', url: 'https://www.instagram.com/itcentreryk/' },
  { title: 'SkillSprint30', industry: 'EdTech', url: 'https://www.facebook.com/skillsprint30/' },
  { title: 'SkillSprint30', industry: 'EdTech', url: 'https://www.instagram.com/skill_sprint30' },
  { title: 'Cubicle Coworking Space', industry: 'Coworking Space', url: 'https://www.facebook.com/cubiclecoworking/' },
  { title: 'Cubicle Coworking Space', industry: 'Coworking Space', url: 'https://www.instagram.com/cubicle.cowork/' },
  { title: 'Cubicle Coworking Space', industry: 'Coworking Space', url: 'https://www.linkedin.com/in/cubicle-coworking-space/' },
  { title: 'Hello World Technologies (HWT)', industry: 'Software Development', url: 'https://www.facebook.com/hwtryk/' },
  { title: 'Hello World Technologies (HWT)', industry: 'Software Development', url: 'https://www.instagram.com/hwtechnologiez' },
  { title: 'Consultancy Gateway', industry: 'Visa Consultancy', url: 'https://www.instagram.com/consultancygateway' },
  { title: 'Amid E-Commerce', industry: 'Retail', url: 'https://www.facebook.com/AmidECommerce/' },
  { title: 'Amid E-Commerce', industry: 'Retail', url: 'https://www.instagram.com/amid.pk/' },
  { title: 'Fajira App', industry: 'Mobile Application', url: 'https://www.facebook.com/FajiraApp/' },
  { title: 'Fajira App', industry: 'Mobile Application', url: 'https://www.instagram.com/fajiraapp/' },
  { title: 'Zobish Bags', industry: 'Fashion & Accessories', url: 'https://www.facebook.com/zobishbags/' },
  { title: 'Zobish Bags', industry: 'Fashion & Accessories', url: 'https://www.instagram.com/__zobish__/' },
  { title: 'Central College Public High School', industry: 'School', url: 'https://www.facebook.com/ccphs.ryk/' },
  { title: 'Central College Public High School', industry: 'School', url: 'https://www.instagram.com/centralcollegeryk/' },
  { title: 'Spit Expo Pakistan', industry: 'Trade Shows & Exhibitions', url: 'https://www.facebook.com/spite.pk/' },
  { title: 'Spit Expo Pakistan', industry: 'Trade Shows & Exhibitions', url: 'https://www.instagram.com/spitexpo.pk/' },
  { title: 'Growing RYK', industry: 'Community Development', url: 'https://www.facebook.com/GrowingRYK/' },
  { title: 'Growing RYK', industry: 'Community Development', url: 'https://www.instagram.com/growingryk/' },
  { title: 'Plan Hundred', industry: 'Productivity', url: 'https://www.facebook.com/planhundred/' },
  { title: 'Binof App', industry: 'Mobile Application', url: 'https://www.facebook.com/BinofApp/' },
  { title: 'Binof App', industry: 'Mobile Application', url: 'https://www.instagram.com/binof.app/' },
  { title: 'Alpha STP', industry: 'Forex', url: 'https://www.facebook.com/Alphastp/' },
  { title: 'HWT IT Jobs', industry: 'IT Hiring', url: 'https://www.facebook.com/hwtitjobs/' },
  { title: 'Women in Tech RYK', industry: 'Technology', url: 'https://www.facebook.com/womenintechryk/' },
  { title: 'ABK Foods Pulpy', industry: 'Food & Beverage', url: 'https://www.facebook.com/Abkfoodspulpy/' },
  { title: 'ABK Foods Pulpy', industry: 'Food & Beverage', url: 'https://www.instagram.com/abkpulpy/' },
  { title: 'Lets Hire Pro', industry: 'HR & Recruitment', url: 'https://www.facebook.com/LetsHirePro/' },
  { title: 'Lets Hire Pro', industry: 'HR & Recruitment', url: 'https://www.instagram.com/lets_hirepro/' },
  { title: 'Fitness Together', industry: 'Health & Fitness', url: 'https://www.facebook.com/fitnesstogether' },
  { title: 'Eagle King Construction LLC', industry: 'Construction', url: 'https://www.facebook.com/eaglekingconstructionllc' },
  { title: 'Southeast Building and Shed', industry: 'Building Solutions', url: 'https://www.facebook.com/southeastbuildingandshed' },
  { title: "Rob's Auto", industry: 'Auto Repair', url: 'https://www.facebook.com/robsauto1' },
  { title: 'SG Attractions', industry: 'Attractions', url: 'https://www.facebook.com/SGAttractions' },
  { title: 'Never Ride Dirty LLC', industry: 'Auto Detailing', url: 'https://www.facebook.com/NeverRideDirtyCT' },
  { title: 'The Runway Looks', industry: 'Fashion', url: 'https://www.instagram.com/therunwaylookstm' },
  { title: 'Living in Windsor', industry: 'Lifestyle', url: 'https://www.instagram.com/living_in_windsor' },
  { title: 'Sweet Institute', industry: 'Baking Institute', url: 'https://www.instagram.com/sweet_institute' },
  { title: 'Redneckin Trucker', industry: 'Trucking', url: 'https://www.facebook.com/redneckingtrucker' },
  { title: "Chelsea's House Sober Living", industry: 'Recovery Housing', url: 'https://www.facebook.com/chelseashousesoberliving' },
  { title: 'Backstage Hotel Stockholm', industry: 'Hotel', url: 'https://www.facebook.com/backstagehotelsthlm' },
  { title: 'Driving Rich', industry: 'Automotive', url: 'https://www.facebook.com/DrivingRich' },
];

// Source: docs/All_Projects_List.xlsx, rows 85-179 (real client work), classified into
// web-development / saas-products / shopify / wordpress by Technologies/Category column.
const webDevelopment: RawPortfolioEntry[] = [
  { title: 'Allbirds', industry: 'Footwear', url: 'https://www.allbirds.com/' },
  { title: 'Mike McAlister', industry: 'Design / Indie Hacking', url: 'https://mikemcalister.com' },
  { title: 'TransferGo', industry: 'Fintech', url: 'https://www.transfergo.com' },
  { title: 'Aspen Institute', industry: 'Policy / Education', url: 'https://www.aspeninstitute.org' },
  { title: 'EC English', industry: 'Education', url: 'https://www.ecenglish.com' },
  { title: 'Porter & York', industry: 'Food', url: 'https://porterandyork.com' },
  { title: 'Juan Falibene', industry: 'Design', url: 'https://juanfalibene.com' },
  { title: 'Morning Train', industry: 'Branding / Design', url: 'https://morningtrain.dk' },
  { title: 'Pyle USA', industry: 'Electronics', url: 'https://pyleusa.com' },
  { title: 'N1 Enterprises', industry: 'Business Services', url: 'https://staging.n1-ent.com' },
  { title: 'Global Commerce UK', industry: 'E-commerce', url: 'https://globalcommerce.uk' },
  { title: 'NoBroker Romania', industry: 'Real Estate', url: 'https://nobroker.ro' },
  { title: 'SB Productions', industry: 'Media Production', url: 'https://sbproductions.online' },
  { title: 'Nexovant', industry: 'Technology', url: 'https://nexovant.co' },
  { title: 'Gateway Consultancy', industry: 'Visa Consultancy', url: 'https://gatewayconsultancy.co' },
  { title: 'The Rich Money Models', industry: 'Finance / Education', url: 'https://therichmoneymodels.com' },
  { title: 'West Lafayette Auto Detailing', industry: 'Auto Detailing', url: 'https://westlafayetteautodetailing.com' },
  { title: 'Varsova IT', industry: 'IT Services', url: 'https://varsovait.site' },
  { title: 'Affinity Services Agency', industry: 'Business Services', url: 'https://affinityservicesagency.com' },
  { title: 'Makam-e-Abwa Tours & Travels', industry: 'Travel', url: 'https://makam-e-abwa-tours-travels.ai.studio' },
  { title: 'Giang Vo Agency', industry: 'Agency', url: 'https://giangvoagency.com' },
  { title: 'Freshora Cleaning', industry: 'Cleaning Services', url: 'https://freshoracleaning.co.uk' },
  { title: 'DM Alpha', industry: 'Digital Marketing', url: 'https://dm-alpha.com' },
  { title: 'NSH Solutions Inc', industry: 'Business Services', url: 'https://nshsolutionsinc.com' },
  { title: 'Bright Consultants', industry: 'Consulting', url: 'https://brightconsultants.net' },
];

const saasProducts: RawPortfolioEntry[] = [
  { title: 'Engineered With AI', industry: 'AI Tools', url: 'https://engineeredwith.ai/' },
  { title: 'Cloudways', industry: 'Hosting', url: 'https://www.cloudways.com' },
  { title: 'Ko-fi', industry: 'Creator Tools', url: 'https://ko-fi.com' },
  { title: 'RunOnFlux', industry: 'Cloud / Web3', url: 'https://runonflux.com' },
  { title: 'Fountain', industry: 'HR Tech', url: 'https://www.fountain.com' },
  { title: 'Ditto', industry: 'Developer Tools', url: 'https://trustditto.com' },
  { title: 'Wonde', industry: 'EdTech', url: 'https://www.wonde.com' },
  { title: 'MicroSaaS HQ', industry: 'SaaS', url: 'https://microsaashq.com/' },
  { title: 'Small SaaS Tools', industry: 'SaaS', url: 'https://smallsaastools.com/' },
  { title: 'SaaS Niche', industry: 'SaaS', url: 'https://www.saasniche.com/' },
  { title: 'SocialBu', industry: 'Marketing', url: 'https://socialbu.com/' },
  { title: 'PinCatch', industry: 'Marketing', url: 'https://www.pincatch.com/' },
  { title: 'Zenvoice', industry: 'Invoicing', url: 'https://zenvoice.io/' },
  { title: 'Habits Garden', industry: 'Productivity', url: 'https://habitsgarden.com/' },
  { title: 'WorkbookPDF', industry: 'Education Tools', url: 'https://workbookpdf.com/' },
  { title: 'ByeDispute', industry: 'FinTech', url: 'https://byedispute.com/' },
  { title: 'Unicor', industry: 'SaaS', url: 'https://www.unicor.ne/' },
  { title: 'TradeHand', industry: 'Trades / Field Service', url: 'https://tradehand.com/' },
  { title: 'JobKeepr', industry: 'Field Service', url: 'https://jobkeepr.com/' },
  { title: 'SoloDesks', industry: 'Productivity', url: 'https://solodesks.com/' },
  { title: 'Mucka AI', industry: 'AI Tools', url: 'https://mucka.ai/' },
  { title: 'CleanPilot Pro', industry: 'Cleaning Services', url: 'https://cleanpilotpro.com/' },
  { title: 'Book24Seven', industry: 'Booking / Scheduling', url: 'https://book24seven.com/' },
  { title: 'PosteAhora', industry: 'Marketing', url: 'https://posteahora.com/' },
  { title: 'ReplyGain', industry: 'Marketing', url: 'https://replygain.com/' },
  { title: 'Stalkr AI', industry: 'AI Tools', url: 'https://www.stalkr.ai/' },
  { title: 'Bordful', industry: 'Job Boards', url: 'https://bordful.com/' },
  { title: 'GoJobee', industry: 'HR Tech', url: 'https://gojobee.com/en' },
  { title: 'LeaveWise', industry: 'HR Tech', url: 'https://leavewise.app/' },
];

const shopify: RawPortfolioEntry[] = [
  { title: 'Aliman Home', industry: 'Home Goods', url: 'https://alimanhome.com/' },
  { title: 'Gul Attire', industry: 'Fashion', url: 'https://gulattire.com/' },
  { title: 'Craftier', industry: 'Crafts', url: 'https://craftier.ae/' },
  { title: 'ShapeWow', industry: 'Shapewear', url: 'https://shapewow.com/' },
  { title: 'Nata', industry: 'Footwear', url: 'https://www.nata.co.nz' },
  { title: 'Manly T-Shirt', industry: 'Apparel', url: 'https://manlytshirt.com/' },
  { title: 'Kaliteas', industry: 'Tea / Beverage', url: 'https://kaliteas.com' },
  { title: 'Streaming Boxes', industry: 'Electronics', url: 'https://streamingboxes.com/' },
  { title: 'Kaged', industry: 'Fitness / Supplements', url: 'https://www.kaged.com' },
  { title: 'D-Signe', industry: 'Fashion', url: 'https://d-signe.com/' },
  { title: 'Smokai', industry: 'BBQ / Outdoor', url: 'https://www.smokai.com' },
  { title: 'Happy and Polly', industry: 'Pet Care', url: 'https://happyandpolly.com/' },
  { title: 'Master & Dynamic', industry: 'Audio / Electronics', url: 'https://www.masterdynamic.com/' },
  { title: 'Neom Wellbeing', industry: 'Wellness', url: 'https://neomwellbeing.com' },
  { title: 'Jaimen', industry: 'General Retail', url: 'https://jaimen.com.au/' },
  { title: 'One Sixty Bakes', industry: 'Food', url: 'https://www.onesixtybakes.com/' },
  { title: 'Buy By Auron', industry: 'General Retail', url: 'https://buybyauron.com/' },
  { title: 'Ochaia', industry: 'Tea / Beverage', url: 'https://ochaia.co.uk/' },
  { title: 'VizioLux SA', industry: 'General Retail', url: 'https://www.vizioluxsa.com/' },
  { title: 'Fadaura', industry: 'Fashion', url: 'https://fadaura.com' },
  { title: 'Simodi Emeralds', industry: 'Jewelry', url: 'https://simodiemeralds.com' },
  { title: 'Makkah Nutra Noble', industry: 'Health / Wellness', url: 'https://makkahnutranoble.com' },
  { title: 'Vanta Tools', industry: 'Tools / Hardware', url: 'https://vantatools.com' },
  { title: 'Ova Water', industry: 'Beverages / Wellness', url: 'https://ovawater.com' },
];

const wordpress: RawPortfolioEntry[] = [
  { title: 'Funded King', industry: 'Trading Education', url: 'https://fundedking.com/' },
  { title: 'NextGen Migration', industry: 'Immigration Consulting', url: 'https://nextgenmigrationcs.com.au/' },
  { title: 'Ameteck MEP Services', industry: 'Construction / Engineering', url: 'https://ametechmepservices.com/' },
  { title: 'Cardiff Pest Control', industry: 'Pest Control', url: 'https://cardiffpest.co.uk/' },
  { title: '10up', industry: 'Web Development', url: 'https://10up.com' },
  { title: 'Human Made', industry: 'Web Development', url: 'https://humanmade.com' },
  { title: 'rtCamp', industry: 'Web Development', url: 'https://rtcamp.com' },
  { title: 'Modern Tribe', industry: 'Web Development', url: 'https://moderntribe.com' },
  { title: 'WP Site Care', industry: 'Web Maintenance', url: 'https://wpsitecare.com' },
  { title: 'Ali Abdaal', industry: 'Productivity / Education', url: 'https://aliabdaal.com' },
  { title: 'Tim Ferriss', industry: 'Self Improvement', url: 'https://tim.blog' },
  { title: 'Chris Lema', industry: 'WordPress / Business', url: 'https://chrislema.com' },
  { title: 'Adam Enfroy', industry: 'Blogging / Marketing', url: 'https://adamenfroy.com' },
  { title: 'ICC World Business Organization', industry: 'Trade Body', url: 'https://www.iccwbo.org' },
  { title: 'WooCommerce', industry: 'E-commerce Platform', url: 'https://woocommerce.com' },
  { title: 'Astra (WP Astra)', industry: 'WordPress Themes', url: 'https://wpastra.com' },
  { title: 'Flatsome (UX Themes)', industry: 'WordPress Themes', url: 'https://flatsome3.uxthemes.com' },
  { title: 'Anchour', industry: 'Branding / Web', url: 'https://anchour.com' },
  { title: 'Block Layouts', industry: 'Web Design', url: 'https://blocklayouts.com' },
  { title: 'Twentig', industry: 'Web Development', url: 'https://twentig.com' },
  { title: 'Hangry Woman', industry: 'Food / Wellness', url: 'https://hangrywoman.com' },
  { title: 'Plant Powered with Kristina', industry: 'Health / Wellness', url: 'https://plantpoweredwithkristina.com' },
  { title: 'Thyme and Joy', industry: 'Food / Wellness', url: 'https://thymeandjoy.com' },
  { title: 'Stray Curls', industry: 'Beauty / Hair Care', url: 'https://www.straycurls.com' },
  { title: 'Fork in the Road', industry: 'Food / Lifestyle', url: 'https://www.forkintheroad.co' },
  { title: 'Jill Szeder', industry: 'Real Estate', url: 'https://www.jillszeder.com' },
  { title: 'Homes by Marco', industry: 'Real Estate', url: 'https://www.homesbymarco.com' },
  { title: 'Gregory Real Estate Group', industry: 'Real Estate', url: 'https://www.gregoryrealestategroup.com' },
  { title: 'Luxury Homes Realty', industry: 'Real Estate', url: 'https://www.luxuryhomesrealty.com' },
  { title: 'Richard Evans Foundation', industry: 'Non-profit', url: 'https://richardevansfoundation.org' },
  { title: 'LR Aesthetic', industry: 'Beauty / Aesthetics', url: 'https://lraesthetic.com' },
];

function titleCase(value: string) {
  return value
    .replace(/^_+|_+$/g, '')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[._-]+/g, ' ')
    .replace(/\b(app|ai|saas|seo|crm|it|ryk|pk|uk|usa|llc)\b/gi, (match) => match.toUpperCase())
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function titleFromUrl(url: string) {
  const parsed = new URL(url);
  const hostname = parsed.hostname.replace(/^www\./, '');
  const domain = hostname.split('.')[0];
  return titleCase(domain);
}

function portfolioKey(url: string) {
  const parsed = new URL(url);
  const hostname = parsed.hostname.replace(/^www\./, '').toLowerCase();
  const path = parsed.pathname.replace(/\/+$/, '').toLowerCase();
  return `${hostname}${path === '/' ? '' : path}`;
}

function platformFromUrl(url: string, category: PortfolioCategoryId): PortfolioPlatform {
  const hostname = new URL(url).hostname;
  if (hostname.includes('facebook.com')) return 'Facebook';
  if (hostname.includes('instagram.com')) return 'Instagram';
  if (hostname.includes('linkedin.com')) return 'LinkedIn';
  if (category === 'shopify') return 'Shopify';
  if (category === 'wordpress') return 'WordPress';
  if (category === 'saas-products') return 'SaaS';
  if (hostname.startsWith('app.') || hostname.startsWith('stg.') || hostname.startsWith('stg-')) return 'Web App';
  return 'Website';
}

function buildEntry(raw: RawPortfolioEntry, category: PortfolioCategoryId): PortfolioEntry {
  const normalizedUrl = raw.url.replace(/^http:\/\//, 'https://');
  const parsed = new URL(normalizedUrl);
  const isStaging = /(^|\.)stg[.-]|vercel\.app$/i.test(parsed.hostname);
  const requiresLogin = /sign-in|login/i.test(parsed.pathname) || parsed.hostname.startsWith('app.');
  const platform = platformFromUrl(normalizedUrl, category);
  const linkType: PortfolioLinkType =
    platform === 'Facebook' || platform === 'Instagram' || platform === 'LinkedIn'
      ? 'social'
      : isStaging
        ? 'staging'
        : requiresLogin
          ? 'login'
          : 'live';

  return {
    title: raw.title || titleFromUrl(normalizedUrl),
    url: normalizedUrl,
    category,
    industry: raw.industry,
    platform,
    linkType,
    isStaging,
    requiresLogin,
  };
}

export const portfolioEntries: PortfolioEntry[] = [
  ...digitalMarketing.map((entry) => buildEntry(entry, 'digital-marketing')),
  ...webDevelopment.map((entry) => buildEntry(entry, 'web-development')),
  ...saasProducts.map((entry) => buildEntry(entry, 'saas-products')),
  ...shopify.map((entry) => buildEntry(entry, 'shopify')),
  ...wordpress.map((entry) => buildEntry(entry, 'wordpress')),
]
  .filter((entry) => !entry.isStaging && !entry.requiresLogin)
  .filter((entry, index, entries) => entries.findIndex((item) => portfolioKey(item.url) === portfolioKey(entry.url)) === index);

export const portfolioStats = {
  entries: portfolioEntries.length,
  yearsOfExperience: 10,
  trustedClients: new Set(portfolioEntries.map((entry) => entry.title)).size,
  countries: 11,
};
