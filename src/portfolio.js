/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Splash disabled so header logo and routes work normally.
};

//SEO Related settings
const seo = {
  title: "Ubaid Ur Rehman | Senior Android Developer",
  description:
    "Senior Android Developer and Android Technical Lead for Zindigi at Roha Tech. 5+ years building secure branchless banking, core banking, and fintech apps with Kotlin, Jetpack Compose, and Clean Architecture.",
  og: {
    title: "Ubaid Ur Rehman Portfolio",
    type: "website",
    url: "https://ubaidurrehman583.github.io/My-Portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Ubaid Ur Rehman",
  logo_name: "Ubaid Ur Rehman",
  // nickname: "layman_brother",
  subTitle:
    "Senior Android Developer | Android Technical Lead (Zindigi) at Roha Tech. I lead Kotlin and Jetpack Compose delivery for regulated digital banking: transfers, QR, remittance, and secure releases for 200K+ MAU fintech products.",
  resumeLink:
    "https://ubaidurrehman583.github.io/My-Portfolio/Ubaid_Resume.pdf",
  portfolio_repository: "https://github.com/UbaidUrRehman583/My-Portfolio.git",
  githubProfile: "https://github.com/UbaidUrRehman583",
};

const socialMediaLinks = [
  {
    name: "WhatsApp",
    link: "https://wa.me/923145837626",
    fontAwesomeIcon: "fa-whatsapp",
    backgroundColor: "#25D366",
  },

  {
    name: "Github",
    link: "https://github.com/UbaidUrRehman583",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ubaid-ur-rehman-27645a140",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:abbasiubaid80@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1FywwYhre7/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/ibaad_abbasi95?utm_source=qr&igsh=MXRlMncxdmd2andr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Android Development",
      fileName: "AndroidDevImg",
      skills: [
        "Leading Zindigi Android: multi-module Clean Architecture, Jetpack Compose, MVVM, Hilt, Coroutines, and Flow",
        "Regulated payments: IBFT, QR, wallet transfers, remittance integrations, step-up auth, and SBP-aligned flows",
        "Production hardening: ProGuard, DexGuard, encryption, secure storage, Firebase Crashlytics, Jenkins CI/CD",
        "End-to-end delivery across JS Mobile, Aik Digital Wallet, Zindigi, and conversational banking assistant UX",
      ],
      softwareSkills: [
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "logos:kotlin",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Jetpack Compose",
          fontAwesomeClassname: "simple-icons:jetpackcompose",
          style: {
            backgroundColor: "transparent",
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos:firebase",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Dagger Hilt",
          fontAwesomeClassname: "simple-icons:dagger",
          style: {
            backgroundColor: "white",
            color: "#A41E11",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "logos:android-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/laymanbrother",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "PMAS-Arid Agriculture University Rawalpindi",
      subtitle: "B.S. in Information Technology",
      logo_path: "arid_logo.png",
      //alt_name: "IIITDM Kurnool",
      duration: "2017 - 2021",
      descriptions: [
        "Covered core BSIT subjects including Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Java, .NET, Database Management Systems (DBMS), Calculus etc.",
        "Gained hands-on experience through semester projects involving Android app development, database design, and full-stack web applications.",
      ],

      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    " I have worked as an Android Developer, contributing to secure, scalable, and user-centric mobile apps. My experience spans mobile architecture design, UI development with Jetpack Compose, SDK integration, and code optimization. I also actively engage with tech communities and enjoy contributing to open-source initiatives and knowledge sharing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Android App Developer Intern",
          company: "Innovagic Technologies",
          //company_url: "https://www.tiktok.com/en/",
          logo_path: "innovagic_logo.png",
          duration: "May 2021 - Oct 2021",
          location: "Rawalpindi, Pakistan",
          description:
            "Developed 5+ production-ready Android applications targeting utility and personalization categories. Apps included Software Update, WhatsClone, Number Locator, Gold Rate Live, and Offline Maps. Integrated AdMob for monetization, implemented custom UI using XML, and handled offline capabilities and location services. Gained hands-on experience with publishing apps, crash reporting, and performance optimization.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Senior Android Developer / Android Technical Lead (Zindigi)",
          company: "Roha Tech",
          company_url: "",
          logo_path: "appinsnap_logo.png",
          duration: "Aug 2025 - Present",
          location: "Islamabad, Pakistan",
          description:
            "Lead Android for Zindigi branchless banking: architecture, code reviews, and production releases. Own Jetpack Compose, MVVM, Hilt, and multi-module Clean Architecture. Deliver QR, remittance, and secure payment flows; ProGuard/DexGuard and Firebase Crashlytics. Support Aik Digital Wallet and related banking modules.",
          color: "#0F9D58",
        },
        {
          title: "Android Developer",
          company: "App in Snap",
          company_url: "https://www.appinsnap.com/",
          logo_path: "appinsnap_logo.png",
          duration: "Nov 2021 - Jul 2025",
          location: "Islamabad, Pakistan",
          description:
            "Built fintech and core banking apps (JS Mobile, Zindigi, Aik Digital Wallet, eChallan, railway POS). Modular MVVM + Clean Architecture, REST/SDK integrations, biometrics, Jenkins CI/CD, Play Store releases.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production Android apps for branchless banking and digital wallets: Kotlin, Jetpack Compose, secure payments, and regulated fintech delivery.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. Reach out for Android architecture, fintech mobile development, Jetpack Compose, or banking app integrations. I usually reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://github.com/UbaidUrRehman583",
    avatar_image_path: "blogs_image.svg",
  },

  addressSection: {
    title: "Contact Location",
    subtitle: "Street 0, Model Colony, Rawalpindi, Punjab 44000, Pakistan",
    locality: "Rawalpindi",
    country: "Pakistan",
    region: "Punjab",
    postalCode: "44000",
    streetAddress: "Street 04",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Model+Colony+Dhoke+Kala+Khan,+Rawalpindi,+Pakistan/@33.6467731,73.0897411,19.42z/data=!4m6!3m5!1s0x38dfead6a77e521d:0x7ccd9a01003c7da8!8m2!3d33.6457008!4d73.0938354!16s%2Fg%2F1ptxvrrwg?entry=ttu&g_ep=EgoyMDI1MDYyNi4wIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+92 314 5837626 | WhatsApp: https://wa.me/923145837626",
  },
};

const bigProjects = {
  title: "Featured Projects",
  subtitle: "Banking and fintech Android apps I build and lead",
  projects: [
    {
      image: "projects_image.svg",
      projectName: "Zindigi (Branchless Banking)",
      projectDesc:
        "Android lead for digital banking: transfers, QR, remittance, trading, and in-app security (Kotlin, Compose, Clean Architecture).",
      footerLink: [
        { name: "GitHub", url: "https://github.com/UbaidUrRehman583" },
      ],
    },
    {
      image: "projects_image.svg",
      projectName: "Aik Digital Wallet (Bank Islami)",
      projectDesc:
        "Wallet transfers, bill pay, top-ups, card integrations with DexGuard/ProGuard hardening.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/UbaidUrRehman583" },
      ],
    },
    {
      image: "projects_image.svg",
      projectName: "JS Mobile (Core Banking)",
      projectDesc:
        "Core banking mobile: accounts, payments, utility bills, BVS biometric SDK, analytics.",
      footerLink: [
        { name: "GitHub", url: "https://github.com/UbaidUrRehman583" },
      ],
    },
  ],
};

const openSource = {
  githubConvertedToken: "",
  githubUserName: "UbaidUrRehman583",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  bigProjects,
  openSource,
};
