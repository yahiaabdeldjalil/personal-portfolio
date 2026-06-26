export const AnalyticsEvents = {
  // NAVBAR
  NAVBAR_GITHUB_CLICK: "Navbar Github Clicked",
  NAVBAR_LINKEDIN_CLICK: "Navbar Linkedin Clicked",
  NAVBAR_CV_DOWNLOAD: "Navbar CV Download",
  // HERO
  HERO_PROJECTS: "Hero Projects",
  HERO_CONTACT: "Hero Contact",
  CV_DOWNLOAD: "CV Download",

  // ABOUTME
  ABOUTME_VIEW: "About Me Viewed",

  // SKILLS
  SKILLS_VIEW: "Skills Viewed",
  // PROJECTS
  PROJECTS_VIEW: "Projects Viewed",

  PROJECT_CARD_CLICK: "Project Card Click",
  PROJECT_TAB: "Project Tab Click",
  PROJECT_GITHUB: "Project Github",
  // GITHUB ACTIVITY
  GITHUB_CLICK: "Github Click",
  GITHUB_ACTVITY_VIEW: "Github Activity Viewed",

  // CONTACT
  CONTACT_VIEW: "Contact Viewed",

  CONTACT_EMAIL: "ContactEmail Click",
  CONTACT_WHATSAPP: "Contact WhatsApp Click",
  CONTACT_FACEBOOK: "Contact Facebook Click",
  CONTACT_LINKEDIN: "Contact LinkedIn Click",
  CONTACT_GITHUB: "Contact Github Click",
  START_CONVERSATION: "Start a Conversation Click"
} as const;

export function track(
  event: string,
  data?: Record<string, string | number>
) {
  if (typeof window === "undefined") return;

  if ("umami" in window) {
    (window as any).umami.track(event, data);
  }
}