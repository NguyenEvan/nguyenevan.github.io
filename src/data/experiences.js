export const EXPERIENCES = [
  {
    id: 'baskinengineering',
    company: 'Baskin Engineering',
    role: 'Tutor and Grader/Reader',
    period: 'Jan 2025 - Present',
    location: 'Santa Cruz, CA',
    bullets: [
      'Evaluating the quality and correctness of 8 assignments and 3 exams for multiple engineering courses of around 150 students, reinforcing my knowledge of the topic(s) in computer science',
      'Teaching basic programming concepts in Python and DSA to groups of 5-10 students',
      'Communicating weekly with professor(s) and TAs to discuss workload, address pedagogical issues in their respective fields, review student progress from tutoring, and enhance the working relationship',
    ],
    stack: ['Python', 'Haskell', 'RISC-V', 'Teaching', 'Algorithms', 'Probability', 'Data Structures'],
    details:
      `Over the past year, I have worked closely with numerous professors to help tutor and/or grade, 
      in order to facilitate their courses and to support students by providing feedback
       on exams/assignments or by going through problems step-by-step during group tutoring
        sessions. I\'m grateful to have worked with numerous UCSC professors to discuss teaching practices
         and practical challenges of running a university course. It has also let me review and solidify some
          of the core concepts I had learned in my undergraduate studies in computer science.
           Special thanks to Professor Lindsey Kuper, who really cares about her students. 
           `,
    // NEW: split into two lists
    coursesTutored: [
      { label: 'CSE 20 — Beginning Programming in Python', href: '/courses/cse-30' },
      { label: 'CSE 102 — Introduction to Analysis of Algorithms', href: '/courses/cse-102' },
    ],
    coursesGraded: [
      { label: 'CSE 114A — Foundations of Programming Languages', href: '/courses/cse-114a' },
      { label: 'CSE 120 — Computer Architecture', href: '/courses/cse-120' },
      { label: 'CSE 16 — Applied Discrete Mathematics', href: '/courses/cse-16' },
      { label: 'STAT 131 — Introduction to Probability Theory', href: '/courses/cse-107' }, // create later if you like
    ],
  },
  {
    id: 'dataannotation',
    company: 'DataAnnotation',
    role: 'AI Trainer - Programming',
    period: 'June 2025 - Present',
    location: 'Remote',
    bullets: [
        'Evaluating the quality of LLM-generated responses and code across multiple domains, programming languages, and frameworks such as Python, Java, C/C++, and JavaScript using unit tests and Docker containers',
        'Authoring comprehensive criteria and documentation to guide improvements and maintain coding standards to improve the reliability and performance of custom Large Language Models'
    ],
    stack: ['Python', 'C++', 'Unit Testing', 'Docker', 'Backend', 'Machine Learning', 'LLMs', 'JavaScript', 'Java', 'APIs/Tool Calling', 'Documentation'],
    details: 'My work at DataAnnotation has informed me of the many applications of LLMs in coding and other real-world tasks, especially in regards to ensuring the quality of AI responses and setting practical and ethical guidelines for different use cases. Due to DataAnnotation\'s Code of Conduct, I am unable to list specific details.'
  },
  {
    id: 'codepath',
    company: 'CodePath',
    role: 'Tech Fellow - Intermediate Cybersecurity',
    period: 'July 2024 - Dec 2024',
    location: 'Remote',
    certificate: {
        label: 'Certificate of Leadership',
        href: '/codepath.pdf'
    },
    bullets: [
        'Managed logistics across several breakout rooms while logging overall student engagement and participation, addressing the immediate technical needs of 50 students simultaneously',
        'Mentored students on fundamental concepts and practical use cases in Linux, terminal usage, and cybersecurity, earning a certificate of leadership for helping CodePath adjust material and maintain class participation',
    ],
    stack: ['Linux', 'Splunk (SPL)', 'Catalyst', 'Bash', 'Wireshark'],
    details: 'Prior to becoming a Tech Fellow at CodePath, I was a student in their Intermediate Cybersecurity course. After passing the course, they encouraged me to apply to help them offer the same no-cost learning opportunities for other students and to develop my leadership skills. As a Tech Fellow, I had the opportunity to work and speak with college students across the United States of different backgrounds. Our goal was to introduce students to key concepts and ideas in cybersecurity, help students develop the fundamental technical skills they need to have a successful career in the tech industry, and develop students’ ability to communicate about their code, problem solve, and collaborate with others in a technical environment.'
  }
]

// New: OTHER experiences (clubs, volunteering, competitions, teaching, etc.)
export const OTHER_EXPERIENCES = [
  // example shape (add your real data)
  {
    id: 'icpc-ucsc',
    company: 'Competitive Programming Club',
    role: 'ICPC 2024 - Div. 2',
    period: 'Fall 2024',
    location: 'Santa Cruz, CA',
    bullets: [
    //   'Planned weekly tech talks and coding sessions for 80+ students',
    //   'Coordinated hackathon logistics and sponsorship outreach',
        'Top 3 in California - http://acmicpc-pacnw.org/scoreboard/2024/group_California_-_D2.html',
        'Top 5 in the Pacific Northwest Region - http://acmicpc-pacnw.org/scoreboard/2024/index_D2.html'
    ],
    stack: ['Leadership', 'Community', 'Problem Solving', "Algorithms"],
    details: 'Special thanks to my teammates Justin Valdez and Liam Manley and Professor Vaggos Chatziafratis for mentoring the club.',
    images: [
      { src: '/ICPC24_0.jpg', alt: 'ICPC 24_0' },
      { src: '/ICPC24_1.jpg', alt: 'ICPC 24_1' },
    ],
  },
]

// Updated getter: searches BOTH arrays by id
export const getExperience = (id) =>
  [...EXPERIENCES, ...OTHER_EXPERIENCES].find(x => x.id === id) || null

