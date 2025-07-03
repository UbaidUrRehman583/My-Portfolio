/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ubaid Ur Rehman",
  logo_name: "Ubaid Ur Rehman",
  // nickname: "layman_brother",
  subTitle:
    "A passionate Android developer with 4 years of experience building end-to-end fintech applications. Focused on creating sustainable, scalable, and secure mobile solutions that drive real-world impact through thoughtful design and robust architecture.",
  resumeLink:
    "https://drive.google.com/file/d/15tQHc6GrarKBLg9iBFfyNYnWJpLJXL-m/view?usp=drive_link",
  portfolio_repository: "https://github.com/UbaidUrRehman583/My-Portfolio.git",
  githubProfile: "https://github.com/UbaidUrRehman583",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/UbaidUrRehman583",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "www.linkedin.com/in/ubaid-ur-rehman-27645a140",
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
        "⚡ Building scalable and secure Android applications for fintech platforms using Kotlin and Jetpack Compose",
        "⚡ Integrating payment gateways, biometric verification (BVS SDK), and QR code systems aligned with financial regulations",
        "⚡ Implementing clean architecture (MVVM, Use Cases, Repository Pattern) for maintainable and modular codebases",
        "⚡ Optimizing performance and protecting apps using Proguard and Dexguard for code obfuscation and runtime security",
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
        "⚡ Covered core BSIT subjects including Object-Oriented Programming (OOP), Data Structures & Algorithms (DSA), Java, .NET, Database Management Systems (DBMS), Calculus etc.",
        "⚡ Gained hands-on experience through semester projects involving Android app development, database design, and full-stack web applications.",
      ],

      website_link: "http://iiitk.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning",
      subtitle: "- Andrew Ng",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/EB4VJARK8647",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Advanced ML on GCP",
      subtitle: "- GCP Training",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "DL on Tensorflow",
      subtitle: "- Laurence Moroney",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "Fullstack Development",
      subtitle: "- Jogesh Muppala",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Kuberenetes on GCP",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
    {
      title: "Cryptography",
      subtitle: "- Saurabh Mukhopadhyay",
      logo_path: "nptel_logo.png",
      certificate_link:
        "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
      alt_name: "NPTEL",
      color_code: "#FFBB0099",
    },
    {
      title: "Cloud Architecture",
      subtitle: "- Qwiklabs",
      logo_path: "gcp_logo.png",
      certificate_link:
        "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
      alt_name: "GCP",
      color_code: "#4285F499",
    },
  ],
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
          title: "Android Developer",
          company: "AppInSnap",
          company_url: "https://www.appinsnap.com/",
          logo_path: "appinsnap_logo.png",
          duration: "Nov 2021 – Present",
          location: "Islamabad, Pakistan",
          description:
            "Leading the design and development of scalable fintech Android applications. Responsibilities include building secure payment systems, integrating third-party APIs (e.g., QR, BVS SDK), implementing clean architecture (MVVM, Use Cases, Repository Pattern), and managing releases on the Google Play Store. Optimized code using Proguard, and ensured runtime security with Dexguard.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
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
    subtitle: "+92 314 5837626",
  },
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
};
