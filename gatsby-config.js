module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://emilylynnchen.netlify.app/`,
    // Your Name
    name: 'Hi, I\'m Emily Chen 👋',
    // Main Site Title
    title: `Emily Chen`,
    // Description that goes under your name in main bio
    description: `Student at the University of British Columbia.`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/emilyychenn`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/emily-c-55680b124/`,
    // Content of the About Me section
    about: `I'm a motivated second year student currently studying Cellular, Physiological & Anatomical Sciences and Computer Science, with experience building and scaling web applications and services in various domains. I'm also passionate about open-source contributions, working in high impact environments, and helping growing development teams build great products.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'DianthUS',
        description:
          'An application designed to help caretakers manage and effectively support kids with special needs. \nWinner of Kabam\'s Best UX/UI Design \n Winner of Hootsuite’s #SocialForGood award \n Winner of Telus\'s \'Leverage technology to manage/improve any mental health related issue\' award \nCreated at the CMD-F Hackathon at UBC. Find the project on [Devpost](https://devpost.com/software/dianthus) or on [Github](https://github.com/emilyychenn/DIANTHUS)',
        link: 'https://github.com/emilyychenn/DIANTHUS',
      },
      {
        name: 'PyLeafletTiler',
        description:
          'Application to create tiles of histo images to allow display using the <a href=\'https://leafletjs.com/\'>Leaflet Javascript Library</a>',
        link: 'https://git.sarlab.ca/DrSAR/pyleaflettiler',
      },
      {
        name: 'ArduCryoFridge',
        description:
          'Arduino control of the PT410 Cryorefrigerator which is used to keep the lab\'s 7T Bruker Magnet running.',
        link: 'https://git.sarlab.ca/DrSAR/arducryofridge',
      },
      {
        name: 'Lendr',
        description:
          'Money Loaning Tracker. View a [video walkthrough](https://www.youtube.com/watch?v=aqcrxWnILhY&feature=youtu.be&ab_channel=EmilyChen).',
        link: 'https://github.com/emilyychenn/lendr',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'CPSC 110 Undergraduate Teaching Assistant - Department of Computer Science',
        description: 'University of British Columbia, September 2020 - Present',
        link: 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-course&dept=CPSC&course=110',
      },
      {
        name: 'Research Assistant - SAR Lab',
        description: 'University of British Columbia, May 2020 - August 2020',
        link: 'https://pfeifer.phas.ubc.ca/wiki/doku.php?id=wiki:user:stefan',
      },
      {
        name: 'Volunteer Scratch and Web Development Instructor',
        description: 'C.O.D.E. Initiative, July 2020 - Present',
        link: 'https://www.thecodeinitiative.ca/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Frontend',
        description:
          'HTML, CSS, JavaScript, Bootstrap, Wordpress, Responsive Design',
      },
      {
        name: 'Backend',
        description: 'Java (+ JUnit Testing), Python, C++, C (learning), Git',
      },
      {
        name: 'Other',
        description:
          'MATLAB, Arduino, Racket, R (learning)',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/Non-Coding-Experiences`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
