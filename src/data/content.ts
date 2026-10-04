import { ServiceItem, LocationItem } from '../types/index.ts';

export const BRAND_NAME = 'MIND & BODY MASTERY';
export const FOUNDER_NAME = 'Katharina Tschurtschenthaler';
export const LEGAL_NAME = 'Katharina Tschurtschenthaler LLC';
export const TAGLINE = 'Unleash your full potential.';

export const CONTACT_INFO = {
  emails: [
    { label: 'Primary Consultation', address: 'katharina@mindandbodymastery.at' },
    { label: 'Studio Bookings (Yoga Villa Steyr)', address: 'katharina@yogavillasteyr.at' },
  ],
  phones: [
    { country: 'United States', number: '+1 864 365 7606', display: '+1 864 365 7606' },
    { country: 'Europe / Austria', number: '+43 7252 24701', display: '+43 7252 24701' },
  ],
  locations: [
    { city: 'Greenville', state: 'SC', country: 'USA' },
    { city: 'Landshut', state: 'DE', country: 'Europe' },
    { city: 'Steyr', state: 'AT', country: 'Europe' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'private-training',
    name: 'Private Training 60min.',
    duration: '1 Std. (60 min)',
    price: '$95',
    priceNote: 'Tailored 1-on-1 Session',
    shortDesc: 'Personalized private yoga and nervous-system regulation tailored to your unique physical, mental, and emotional goals.',
    fullDesc: 'At Mind and Body Mastery, each private session is uniquely tailored to cater to your personal biomechanics, energy levels, and life aspirations. Blending ancient yogic alignment with modern nervous-system management tools, this 1-on-1 experience builds resilience, restores vital mobility, and enhances physical and mental clarity.',
    highlights: [
      'Tailored biomechanical alignment & breathwork',
      'Personalized nervous-system regulation exercises',
      'Harmonization of physical stamina and calm focus',
      'Customized homework protocol for sustainable daily vitality'
    ],
    image: '/assets/service_training_opt.webp',
    idealFor: 'Individuals seeking bespoke physical refinement, profound stress alleviation, or personal mastery.',
  },
  {
    id: 'business-workshop',
    name: 'Workshop / Yoga for Business Group',
    duration: 'Half-day / Full-day / Series',
    price: "Let's Talk",
    priceNote: 'Custom Executive Proposal',
    shortDesc: 'Executive wellness, corporate group yoga, and stress-resilience workshops tailored for high-stakes leadership teams.',
    fullDesc: 'Katharina combines over 20 years of international corporate business leadership with advanced yogic science to deliver high-impact workshops for teams, executives, and organizations. Learn actionable stress-relief techniques, group mindfulness protocols, and somatic tools that dismantle executive burnout, elevate strategic focus, and inspire team coherence.',
    highlights: [
      'Executive stress-management & nervous-system recalibration',
      'Ergonomic mobility and postural decompression for desk-bound leaders',
      'Group mindfulness practices that enhance decision-making and cognitive flow',
      'Corporate wellness retreat curation and leadership offsites'
    ],
    image: '/assets/service_group_opt.webp',
    idealFor: 'Corporate teams, executive leadership groups, and high-performance workplaces aiming for sustainable brilliance.',
  },
  {
    id: 'reiki-session',
    name: 'Reiki Session 60min.',
    duration: '1 Std. (60 min)',
    price: '$95',
    priceNote: 'Energy Healing Therapy',
    shortDesc: 'A gentle, traditional Japanese energy healing therapy to dissolve emotional blockages and restore profound equilibrium.',
    fullDesc: 'Reiki is a Japanese form of energy healing therapy that involves a practitioner transferring universal energy through their palms to promote stress reduction, relaxation, and encouraged healing in the recipient. Enter a tranquil sanctuary of stillness as subtle energetic flow clears accumulated tension, soothes the nervous system, and re-establishes internal harmony.',
    highlights: [
      'Non-invasive, deeply restorative palm-placement therapy',
      'Dissolution of chronic subtle tension and energetic fatigue',
      'Profound autonomic nervous-system down-regulation',
      'Restoration of emotional clarity, peace, and inner equilibrium'
    ],
    image: '/assets/feature_photo_opt.webp',
    idealFor: 'Anyone feeling emotionally exhausted, energetically depleted, or seeking deep restorative stillness.',
  },
  {
    id: 'teacher-mentoring',
    name: 'Yoga Teacher Mentoring 90min.',
    duration: '1 Std. 30 Min. (90 min)',
    price: '$130',
    priceNote: 'Strategic 1-on-1 Guidance',
    shortDesc: 'Comprehensive guidance on business management, marketing strategy, alignment methodology, and professional teaching craft.',
    fullDesc: 'Drawing on her Master’s Degree in International Business, 20+ years of marketing experience, and success as owner of a celebrated yoga studio and school, Katharina mentors yoga teachers and wellness entrepreneurs. Elevate your teaching sequencing, master ethical business growth, clarify your authentic brand voice, and build a flourishing, sustainable practice.',
    highlights: [
      'Business management & sustainable studio operations',
      'Strategic marketing, positioning, and authentic client acquisition',
      'Refining alignment cues, thematic class sequencing, and student adjustments',
      'Cultivating professional confidence and longevity in the wellness space'
    ],
    image: '/assets/yoga_pose_1_opt.webp',
    idealFor: 'Certified yoga instructors, studio founders, and wellness practitioners looking to scale their business and art.',
  },
];

export const LOCATIONS_DATA: LocationItem[] = [
  {
    city: 'Steyr',
    region: 'Upper Austria',
    country: 'Austria, Europe',
    tag: 'European Studio & School',
    description: 'Home of Katharina’s celebrated studio and school, Yoga Villa Steyr. In-person private immersions, group sessions, and teacher trainings.',
    timezone: 'Europe/Vienna',
    phone: '+43 7252 24701',
  },
  {
    city: 'Landshut',
    region: 'Bavaria',
    country: 'Germany, Europe',
    tag: 'Bavarian Practice Hub',
    description: 'Serving clients, executives, and wellness retreats throughout southern Germany with customized coaching and masterclasses.',
    timezone: 'Europe/Berlin',
    phone: '+43 7252 24701',
  },
  {
    city: 'Greenville',
    region: 'South Carolina',
    country: 'United States',
    tag: 'US Headquarters',
    description: 'Headquarters of Katharina Tschurtschenthaler LLC. Private executive coaching, bespoke retreats, and North American engagements.',
    timezone: 'America/New_York',
    phone: '+1 864 365 7606',
  },
  {
    city: 'Worldwide',
    region: 'Global',
    country: 'Virtual Sanctuary',
    tag: 'Live Online 1-on-1',
    description: 'High-definition private virtual sessions connecting clients around the globe from the comfort of their home or private office.',
    timezone: 'UTC',
    phone: '+1 864 365 7606',
  },
];

export const CREDENTIALS = [
  { value: '20+', label: 'Years of Business & Marketing', detail: 'Executive management experience in international enterprise' },
  { value: '500h', label: 'Yoga Alliance Certified', detail: 'Highest international standard of teacher training accreditation' },
  { value: 'Advanced', label: 'Reiki Practitioner', detail: 'Certified Japanese energetic healing & subtle somatic balance' },
  { value: 'Founder', label: 'Studio & School Owner', detail: 'Proud founder of Yoga Villa Steyr, educating teachers & seekers' },
];

export const TRANSFORMATION_PILLARS = [
  {
    title: 'SERENITY & STRENGTH',
    tagline: 'Find space within.',
    description: 'Discover the profound intersection where effortless inner calmness meets unwavering physical groundedness. Cultivate deep structural resilience that stays steady throughout life’s demands.',
    symbol: 'I',
    accentColor: '#C5A059',
  },
  {
    title: 'CLARITY & RESILIENCE',
    tagline: 'Build resilience under pressure.',
    description: 'Harness practical nervous-system management tools to calm the autonomic fire. Learn how to down-regulate acute stress in real time, restoring laser focus and strategic composure.',
    symbol: 'II',
    accentColor: '#7B8E78',
  },
  {
    title: 'FLUIDITY & FOCUS',
    tagline: 'Move with conscious intention.',
    description: 'Dissolve mental static through intentional physical flow and synchronized breath. Experience a state of effortless presence where mind and body operate in unbroken harmony.',
    symbol: 'III',
    accentColor: '#C5A059',
  },
  {
    title: 'UNWIND & RECHARGE',
    tagline: 'Reconnect with your innate rhythm.',
    description: 'Step beyond traditional fitness boundaries. Release layers of accumulated corporate fatigue, honor your natural biological cadence, and watch your vitality organically evolve.',
    symbol: 'IV',
    accentColor: '#7B8E78',
  },
];
