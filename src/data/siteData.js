export const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Smart Dairy', path: '/smart-dairy' },
  { name: 'Technology', path: '/technology' },
  { name: 'Dairy & Foods', path: '/dairy-foods' },
  { name: 'Nutrition', path: '/nutrition' },
  { name: 'Genetics', path: '/genetics' },
  { name: 'Agriculture', path: '/agriculture' },
  { name: 'Sustainability', path: '/sustainability' },
  { name: 'Innovation', path: '/innovation' },
  { name: 'Business', path: '/business' },
  { name: 'Campus', path: '/campus' },
  { name: 'Contact', path: '/contact' }
]

export const pillars = [
  {
    number: '01',
    title: 'Integrated Excellence',
    description: 'A connected ecosystem that aligns genetics, feed, dairy operations, nutrition, and long-term strategy in one coherent model.',
    icon: 'FaNetworkWired'
  },
  {
    number: '02',
    title: 'Intelligent Operations',
    description: 'Technology-led planning and monitoring create more informed processes across herd, infrastructure, logistics, and resource management.',
    icon: 'FaBrain'
  },
  {
    number: '03',
    title: 'Nutritional Innovation',
    description: 'Future-focused dairy and nutrition solutions are designed to support value-added products and performance-oriented ingredients.',
    icon: 'FaFlask'
  },
  {
    number: '04',
    title: 'Sustainable by Design',
    description: 'Circular systems are planned to connect agriculture, energy, water, and food production into a more resilient value chain.',
    icon: 'FaLeaf'
  }
]

export const ecosystemNodes = [
  'Genetics',
  'Feed',
  'Smart Dairy',
  'Milk',
  'Processing',
  'Dairy Products',
  'Cheese',
  'Whey',
  'Nutrition'
]

export const featureCards = [
  {
    title: 'Animal Identification',
    text: 'Traceability and herd management through digital identification frameworks.',
    badge: 'Proposed / Future capability'
  },
  {
    title: 'Automated Feeding',
    text: 'Precision feed planning designed to improve resource efficiency and consistency.',
    badge: 'Planned'
  },
  {
    title: 'Health Monitoring',
    text: 'Early insight and monitoring for health, comfort, and herd performance.',
    badge: 'AI enabled'
  },
  {
    title: 'Milk Monitoring',
    text: 'Integrated quality, flow, and yield observations for operational intelligence.',
    badge: 'Data-driven'
  },
  {
    title: 'Environmental Monitoring',
    text: 'Climate and resource visibility to support sustainable infrastructure decisions.',
    badge: 'Conceptual'
  },
  {
    title: 'Animal Comfort',
    text: 'Barn and environment orchestration designed around welfare and care routines.',
    badge: 'Proposed'
  }
]

export const techModules = [
  'Herd',
  'Feed',
  'Milk',
  'Processing',
  'Energy',
  'Water',
  'Inventory',
  'Logistics'
]

export const campusFacilities = [
  {
    id: 'smart-dairy',
    name: 'SMART DAIRY',
    phase: '2,000 milking cows',
    details: ['Climate-controlled barns', 'Automated feeding', 'Animal identification', 'Health monitoring', 'Cow comfort'],
    status: 'CONCEPT / PLANNED INFRASTRUCTURE'
  },
  {
    id: 'milking-centre',
    name: 'MILKING CENTRE',
    phase: 'Planned asset cluster',
    details: ['Automated milking zones', 'Robotic handling', 'Flow optimization', 'Quality tracking', 'Hygiene systems'],
    status: 'PLANNED / FUTURE CAPABILITY'
  },
  {
    id: 'calf-village',
    name: 'CALF VILLAGE',
    phase: 'Early-stage animal care hub',
    details: ['Separated care zones', 'Growth monitoring', 'Nutritional pathways', 'Comfort systems', 'Health oversight'],
    status: 'CONCEPT / PLANNED'
  },
  {
    id: 'veterinary-genetics',
    name: 'VETERINARY & GENETICS',
    phase: 'Research and breeding support',
    details: ['Genomic screening', 'Herd development', 'Disease prevention', 'Breeding analytics', 'Selection protocols'],
    status: 'PLANNED / FUTURE CAPABILITY'
  },
  {
    id: 'feed-centre',
    name: 'FEED CENTRE',
    phase: 'Agriculture-to-feed linkage',
    details: ['Feed formulation', 'Precision blending', 'Resource optimization', 'Circular inputs', 'Smart inventory'],
    status: 'PLANNED INFRASTRUCTURE'
  },
  {
    id: 'processing-plant',
    name: 'PROCESSING PLANT',
    phase: 'Value-added conversion hub',
    details: ['Milk processing', 'Cold chain flow', 'Quality control', 'Automation', 'Packaging readiness'],
    status: 'PLANNED / UPCOMING'
  },
  {
    id: 'cheese-whey',
    name: 'CHEESE & WHEY',
    phase: 'Focused product stream',
    details: ['Cheese production', 'Whey handling', 'Recovery loops', 'Nutrition pathways', 'Processing integration'],
    status: 'PLANNED / FUTURE CAPABILITY'
  },
  {
    id: 'nutrition',
    name: 'NUTRITION',
    phase: 'Next-generation formulation',
    details: ['Whey-based nutrition', 'Protein innovation', 'Precision blending', 'R&D labs', 'Product development'],
    status: 'UPCOMING'
  },
  {
    id: 'biogas',
    name: 'BIOGAS',
    phase: 'Waste-to-energy conversion',
    details: ['Anaerobic digestion', 'Energy capture', 'Organic nutrient recovery', 'Circular systems', 'Resource efficiency'],
    status: 'PROPOSED / PLANNED'
  },
  {
    id: 'solar',
    name: 'SOLAR',
    phase: 'Renewable generation',
    details: ['Site energy support', 'Lower emissions', 'Load balancing', 'Sustainability integration', 'Potential battery storage'],
    status: 'PROPOSED / POTENTIAL'
  },
  {
    id: 'water-treatment',
    name: 'WATER TREATMENT',
    phase: 'Resource recovery network',
    details: ['Rainwater harvesting', 'ETP/STP', 'Precision irrigation', 'Water recycling', 'Process efficiency'],
    status: 'PLANNED / POTENTIAL'
  },
  {
    id: 'warehouse',
    name: 'WAREHOUSE',
    phase: 'Supply chain support',
    details: ['Inventory staging', 'Cold storage planning', 'Logistics support', 'Traceability integration', 'Operational flow'],
    status: 'PLANNED'
  },
  {
    id: 'rd',
    name: 'R&D',
    phase: 'Innovation platform',
    details: ['AI experimentation', 'Nutrition research', 'Food technology', 'Sustainability testing', 'Data applications'],
    status: 'PROPOSED / FUTURE CAPABILITY'
  }
]

export const dairyProducts = [
  { name: 'Milk', status: 'Planned', accent: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' },
  { name: 'Paneer', status: 'Planned', accent: 'bg-teal-500/15 text-teal-700 dark:text-teal-300' },
  { name: 'Ghee', status: 'Upcoming', accent: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
  { name: 'Butter', status: 'Planned', accent: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' },
  { name: 'Curd', status: 'Planned', accent: 'bg-teal-500/15 text-teal-700 dark:text-teal-300' },
  { name: 'Greek Yogurt', status: 'Upcoming', accent: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
  { name: 'Cheese', status: 'Planned', accent: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300' },
  { name: 'Whey', status: 'Planned', accent: 'bg-teal-500/15 text-teal-700 dark:text-teal-300' }
]

export const nutritionProducts = [
  { name: 'Protein', status: 'Planned' },
  { name: 'WPC', status: 'Upcoming' },
  { name: 'WPI', status: 'Planned' },
  { name: 'Whey-based Nutrition', status: 'Upcoming' }
]

export const sustainabilityFlow = ['Manure', 'Anaerobic Digestion', 'Biogas', 'Energy', 'Fertilizer', 'Agriculture', 'Feed', 'Dairy']

export const smartDairyFeatures = [
  'Animal Identification',
  'Automated Feeding',
  'Health Monitoring',
  'Milk Monitoring',
  'Environmental Monitoring',
  'Animal Comfort',
  'Data-driven Management'
]

export const aiIoT = [
  'RFID',
  'Wearable Sensors',
  'Rumination Monitoring',
  'Activity Monitoring',
  'Heat Detection',
  'Health Alerts',
  'Milk Yield Monitoring',
  'Environmental Sensors'
]

export const computerVision = [
  'Lameness Detection',
  'Body Condition',
  'Feeding Behaviour',
  'Animal Movement',
  'Calving Alerts',
  'Welfare Monitoring'
]

export const innovationAreas = ['AI', 'IoT', 'Automation', 'Food Technology', 'Nutrition', 'Sustainability', 'R&D']

export const businessStreams = ['Dairy', 'Food Processing', 'Nutrition', 'Agritech', 'Sustainability']

export const roadmap = [
  'Vision',
  'Mission',
  'Our Approach',
  'Integrated Ecosystem',
  'Long-term Scalability'
]
