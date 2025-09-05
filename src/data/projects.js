export const PROJECTS = [
  {
    id: 'slothlab',
    title: 'LLM Bias Research',
    org: 'UCSC',
    period: 'Spring 2025 - Present',
    location: 'Santa Cruz, CA',
    bullets: [
        'Collaborating under Professor Markus Eger to develop new means to efficiently evaluate LLM bias, specifically in the context of assessing personal and application essays for university admissions',
        'Refactoring Professor Eger’s existing frameworks to perform essay evaluation, integrating Python-based automation and data pipelining with qualitative analysis of data visualizations for large-scale testing.',
    ],
    details: `I have been involved in undergraduate research with Professor Markus Eger,
     which has focused on LLM bias evaluation. More specifically, we are assessing how
      LLM models evaluate college application essays for university admissions on 
      different axes, or personal qualities (leadership, intrinsic motivation, etc.),
       based on a paper about the use of LLMs in college admissions by the University of Pennsylvania.
        Our data pipeline is summarized as follows: essays are collected from online via web scraping and manual data entry, 
        prompts are then constructed for each essay
        using gendered pronouns (he, she, they), these results are fed to the LLM model, then aggregated for later data analysis and visualization.
        We are most interested in analyzing the inconsistencies among the gendered prompts (e.g. prompts with "female" pronouns scored better for "Leadership" than prompts with "male" pronouns).
       Professor Markus Eger and I hope to publish a paper next quarter about our 
       results. `,
    stack: ['Python', 'Data Visualization', 'matplotlib', 'Web Scraping', 'Data Pipelining'],
    links: [
      { label: 'Professor Eger\'s Framework', href: 'https://github.com/yawgmoth/ChatGPTBias/tree/main' },
      { label: 'More info about the lab', href: 'https://slothlab.info/'}
    ],
    // images: ['/img/pacman1.png', '/img/pacman2.png'],
  },
  {
    id: 'and101final',
    title: 'MooVee',
    org: 'CodePath',
    period: 'Summer 2025',
    location: 'Remote',
    stack: ['Kotlin', 'APIs', 'Git', 'Mobile (Android) Development'],    
    bullets: [
        'Contributed to MooVee, an Android app written in Kotlin, implementing multi-criteria movie filtering (genre, release year default, keyword) and a responsive RecyclerView/adapter UI to surface results.',
        'Built API-driven discovery features using the TMDB API to parse movie data, fixed keyword search by hitting an additional endpoint, and added a long-press interaction to fetch/display recommended titles with overviews, improving UX for exploration.',
    ],
    details: `As part of CodePath\'s Android Development Course, our team created
     a movie recommendation app that utilizes the TMDB API. This app allows the user
      to discover new movies by filtering by genre, year, and keywords. The app 
      also recommends movies to watch based on a selected movie.`,
    links: [
        { label: "Repo", href: "https://github.com/AND101-Pod18/MooVee"},
        { label: "Presentation", href: "https://docs.google.com/presentation/d/1z0AsWz4b4Vnaem_VrvO-4xx8mOKQW2hQZT_AjXVwvao/edit?usp=sharing"}
    ]
  },
  {
    id: 'cruzhacks25',
    title: 'Slouching Slugs',
    org: 'CruzHacks',
    period: 'Spring 2025',
    location: 'Santa Cruz, CA',
    stack: ['Python', 'tkinter', 'Pillow', 'Gemini', 'MediaPipe', 'OpenCV'],
    bullets: [
        'Developed a real-time posture detection desktop app that analyzes webcam feeds and alerts users when slouching is detected',
        'Used OpenCV + MediaPipe for landmark detection; modularized logic with object-oriented Python and multi-threaded processing.',
        'Integrated Google Gemini API to evaluate posture data and provide intelligent feedback and alert decisions.',
    ],
    details: 'This project was made during CruzHacks 2025. See the linked repo.',
    links: [
        {label: "Repo", href: "https://github.com/NguyenEvan/slouching-slugs/tree/main"},
        {label: "Devpost", href: "https://devpost.com/software/slouching-slugs"}
    ]
  },
   {
    id: 'web102final',
    title: 'ChefHub',
    org: 'CodePath',
    // period: 'Spring 2025',
    location: 'Remote',
    stack: ['React', 'HTML', 'Supabase', 'CSS', 'JavaScript'],
    bullets: [
        'Designed and shipped a single-page forum for chefs/home cooks that lets users create, edit, delete, and view posts with comments and upvotes, including sort (by time or upvotes) and title search for discovery.',
        'Developed per-post detail pages that display full content, image, and comments, with users able to leave comments under each post.',
        'Implemented upvoting on the post page with instant counter updates, allowing users to upvote any post multiple times.'
    ],
    details: 'As part of CodePath\'s Intermediate Web Development course, I created a dashboard/forum page using React with Supabase backing, in order to implementing CRUD posts, comments, upvotes, and title search/sort. Some possible next steps would be to incorporate user authentication and unique styling.',
    links: [
        { label: 'Repo', href: 'https://github.com/NguyenEvan/ChefHub' },
    ]
  },
   {
    id: 'ncg',
    title: 'Neuromorphic Computing Group',
    org: 'UCSC',
    period: 'Spring 2024',
    location: 'Santa Cruz, CA',
    stack: ['Python', 'Rust', 'Data Pipelining', 'Bash', 'Git'],
    bullets: [
        'Collaborated on creating a dataset that tracks facial movements, paired with audio clips',
        'Developed audio processing pipelines for converting audio recordings into spikes using the Lauscher library, enabling the integration of spiking neural networks using the dataset.',
        'Created and visualized pixel clustering algorithms using Python, facilitating the identification of key points of interest',
    ],
    details: 'I, Noah Meisel, and Issac To worked on creating a dataset that emulates motion capture technology to track ground-truth pixels as they move along a person\'s face frame-by-frame. These video samples will be paired with audio recordings to match each movement. We have worked on audio processing to transform audio recordings into spikes using the lauscher library.',
    links: [
      { label: 'Repo', href: 'https://github.com/NguyenEvan/NCG' },
    ],
  },
   {
    id: 'secanal',
    title: 'Security Analysis - CAIDA DDoS Attack Dataset',
    org: 'CodePath',
    // period: 'Spring 2025',
    location: 'Remote',
    stack: ['Python', 'Pandas', 'Splunk', 'Catalyst'],
    bullets: [
        'Simulated a full incident response and analysis utilizing the IRM DDOS Playbook, presenting the results to 30 students and instructors at CodePath',
        'Leveraged industry-standard tools like Wireshark, Pandas, and Splunk to perform exploratory data analysis on the provided event and network logs',
        'Gained experience in blue-team activities such as impact analysis and threat intelligence and communicating these technical findings to a broader audience',
    ],
    details: 'As part of CodePath\'s Intermediate Cybersecurity Course, my team performed a full security analysis of the CAIDA DDoS Attack Dataset, following the incident-response IRM DDOS Playbook. Our group leveraged tools like Splunk, Wireshark, and Pandas to inspect the data and presented our findings at Demo Day.',
    links: [
      { label: 'CAIDA DDoS Attack Dataset', href: 'https://www.unb.ca/cic/datasets/ids-2017.html' },
      { label: 'IRM DDoS Playbook', href: 'https://slothlab.info/'},
      { label: 'Presentation', href: 'https://docs.google.com/presentation/d/14o2f6bmc9TdtSiLvIPsV3GAXvruQGSnhUBgDlLoMVm4/edit?usp=sharing'},
    ],
  },
  {
    id: 'scaiisnolimit',
    title: 'Hedge Fund Analysis',
    org: 'Santa Cruz AI',
    location: 'Santa Cruz, CA',
    stack: ['PyTorch', 'pandas', 'matplotlib', 'EDA'],
    bullets: [
        'Analyzed the effectiveness of thirteen hedge fund strategies as indicated by the EDHEC-Risk Institute',
        'Utilized the PyTorch deep learning framework to design and evaluate LSTM models for the purpose of univariate time series prediction',
        'Obtained third place in a competition hosted by Santa Cruz Artificial Intelligence',
    ],
    details: 'I, Al Wen, Eric Kimbrell, and Stanley Hung utilized the PyTorch deep learning framework to design and evaluate LSTM models for the purpose of univariate time series prediction to analyze the effectiveness of thirteen hedge fund strategies as indicated by the EDHEC-Risk Institute. We competed in a competition hosted by Santa Cruz Artificial Intelligence, obtaining third place with our project and presentation.',
    links: [
      { label: 'Repo', href: 'https://github.com/NguyenEvan/scai_2023' },
      { label: 'Presentation', href: 'https://docs.google.com/presentation/d/1tNuL78csEJBzyERqOOybNSzdDWl2xdLvAVRhFKbw2j0/edit?usp=sharing'},
      { label: 'Competition Winners (See Fall 2023)', href: 'https://santacruzai.net/competition'},
    ],
  },
  {
    id: 'pantrytracker',
    title: 'Pantry Tracker',
    stack: ['Firebase', 'Next.js', 'Material UI'],
    bullets: [
        'Implemented a Firebase backend for secure, real-time storage and retrieval of pantry data, allowing logged-in users to add, update, and delete items',
        'Built a responsive frontend using Next.js and Material UI that dynamically displays pantry items, providing a clean and user-friendly design'
    ],
    links: [
        {label: 'Repo', href: 'https://github.com/NguyenEvan/PantryTracker/tree/main'}
    ]
  }

]

export const getProject = (id) => PROJECTS.find(p => p.id === id) || null
