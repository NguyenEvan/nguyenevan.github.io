// src/Course.jsx
import { useParams, Link } from 'react-router-dom';
import '../pages/Courses.css'; // reuse typography + variables

const COURSE_DB = {
  // ---- existing ----
  'cse-101': {
    title: 'CSE 101 ⭐: Introduction to Data Structures and Algorithms',
    term: 'Fall 2024',
    description:
        'Introduction to abstract data types and basics of algorithms. Linked lists, stacks, queues, hash tables, trees, heaps, and graphs will be covered. Students will also be taught how to derive big-Oh analysis of simple algorithms. All assignments will be in C/C++.',
    projects: [
        {
        title: 'List ADT',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa1',
        details: 'Implemented using a doubly linked list in C with cursor ops (insertBefore/After, movePrev/Next) & deep copy.'
        },
        {
        title: 'Graph ADT (BFS)',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa2',
        details: 'Implements a graph via the adjacency list representation. Breadth-First Search computes shortest paths (parent tree, levels, path reconstruction).'
        },
        {
        title: 'Graph ADT (DFS)',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa3',
        details: 'Implements a graph via the adjacency list representation. Depth-First Search with discovery/finish times; classification of edges and forest construction.'
        },
        {
        title: 'Matrix ADT',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa4',
        details: 'Implements a sparse matrix using a one-dimension array of Lists. Performs various matrix operations including multiplication, transpose, addition, subtraction, and scalar multiplication'
        },
        {
        title: 'List ADT (C++)',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa5',
        details: 'C++ version of the List ADT. Also implemented using a doubly linked list. Cursor instead stands in between elements instead of "under" them. Allows for similar cursor operations.'
        },
        {
        title: 'BigInteger ADT',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa6',
        details: 'Implements an arbitrarily large integer using a List of longs. Represents a signed integer using a sign and a List of non-negative longs representing its magnitude. Each List element is a single digit in the base b positional numbering system, where b is a power of 10. Allows for addition, subtraction, multiplication, division, exponentiation, and modulo between BigIntegers.'
        },
        {
        title: 'Dictionary ADT #1',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa7',
        details: 'Implements a Dictionary via a Binary Search Tree. Operations include BST insert/find/remove, in-order traversal, predecessor/successor.'
        },
        {
        title: 'Dictionary ADT #2',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE101/pa8',
        details: 'Implements a Dictionary via a Red-Black Tree. Self-balancing RB tree with rotations and recoloring to guarantee a worst-case runtime of O(log n) for its operations rather than O(n).'
        },
    ],
    notes: [
        'Big O Analysis','Djikstra\'s', 'Bellman-Ford', 'DFS', 'BFS', 'Linked Lists', 'Hash Tables', 'Binary Search Trees', 'Red Black Trees',
        'First four projects are in C, latter four are in C++',
    ],
    },


  'cse-107': {
    title: 'CSE 107 ⭐: Probability and Statistics for Engineers',
    term: 'Fall 2024',
    description:
      'Introduction to fundamental tools of stochastic analysis. Probability, conditional probability; Bayes Theorem; random variables and transforms; independence; Bernoulli trials. Statistics, inference from limited data; outcomes of repeated experiments; law of large numbers; precision of measurements. Elements of stochastic processes, Poisson processes; Markov chains.',
    projects: [
      { title: 'CDF of the sum of exponential random variables',
        details: `Constructs the CDF of a random variable 𝑍 = 𝑌1 + 𝑌2,  where both 𝑌1 and 𝑌2 are exponential random variables with parameter 𝜆 = 1. CDF is presented as a table similar in form to the Standard Normal CDF table. Performed 20,000 trials of the following simple experiment: Obtain samples 𝑌1 and 𝑌2 from the exponential distribution, then compute the sum 𝑍 = 𝑌1 + 𝑌2.  Using these trials, compute the relative frequencies of the events {𝑍 ≤ 𝑧} for all 𝑧 ∈ {0.0,0.1,0.2,0.3,……,9.7,9.8,9.9}, which are 100 equally spaced points in the range 0.0 to 9.9, at distance 0.1 apart.`, 
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE107/Lab5' 
      },
      {
        title: 'Central Limit Theorem Simulation (Loaded Dice)',
        details: `Simulates i.i.d. loaded-die rolls with n=500 per trial over 20,000 trials. Builds an empirical CDF table for 𝑍n, computed from the sum of the weighted die. Computes the relative frequencies of the events {𝑍n ≤ z} for all 𝑧∈{0.00,0.01,0.02,…,3.47,3.48,3.49} to compare against the standard normal CDF.`,
        link: `https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE107/Lab6`,
      }
    ],
  },

  'cse-120': {
    title: 'CSE 120: Computer Architecture',
    term: 'Fall 2024',
    description:
      'Introduction to computer architecture: performance, digital building blocks, instruction set architectures (MIPS/RISC), and CPU microarchitecture evolution from single-cycle to pipelined designs; memory hierarchy and its effect on performance.',
    projects: [],
  },

  // ---- new additions ----
  'cse-12': {
    title: 'CSE 12: Computer Systems and Assembly Language and Lab',
    term: 'Winter 2024',
    description:
      'Introduction to computer systems and assembly language and how computers compute in hardware and software. Topics include digital logic, number systems, data structures, compiling/assembly process, basics of the system software, and computer architecture. Course is 7 credits with integrated laboratories illustrating concepts covered in lecture.',
    projects: [],
  },

  'cse-30': {
    title: 'CSE 30: Programming Abstractions: Python',
    term: 'Fall 2023',
    description:
      'Introduction to software development in Python focusing on structuring software in terms of objects endowed with primitive operations. Introduces concepts and techniques via a sequence of concrete case studies. Coursework consists of programming assignments and a final examination.',
    projects: [],
  },

  'cse-13s': {
    title: 'CSE 13S ⭐: Computer Systems and C Programming',
    term: 'Spring 2024',
    description:
      'Focuses on C programming, command line, shell programming, editors, debuggers, source code control, and other tools. Examines basic computer systems, algorithm design, and development, data types, and program structures. Develops understanding of process model, compile-link-execute build cycle, language-machine interface, memory, and data representation.',
    projects: [
        {
            title: 'Mini Text Editor',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE13S/hw4',
            details: 'A command-line text editor that supports line-numbered display, inserting, replacing, and deleting lines, undo, clearing the buffer, and saving to disk. Implemented using a singly linked list for the text buffer. Uses a stack of snapshots for the undo/revert functionality, using deep copies on edits and simple file IO for loading and saving',
        },
        {
            title: 'Wordle Game',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE13S/hw5',
            details: 'A command-line version of Wordle, with an additional option for the user to play in hard mode',
        },
        {
            title: 'Wordle Solver',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE13S/hw6',
            details: `A Wordle solver that works in two different ways -- either the secret word may be
known to the user and specified to the program (useful for testing purposes, so
that the program can whittle down the search space until it finds the specified
word), or the solver can iteratively suggest guesses to the user, so as to
search for solutions to a live problem.`,
        },
        {
            title: 'Business Database',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE13S/hw7',
            details: 'Implementation of a simple database that keeps track of customers, and their associated information. Built an interface around this database, which gives the user the ability to read a database file from the disk, add customers, delete customers, and save the database back to the file. Implemented via a hashmap.',
        }
    ],
  },

  'cse-140': {
    title: 'CSE 140 ⭐: Artificial Intelligence',
    term: 'Winter 2025',
    description:
      'Introduction to the contemporary concepts and techniques of artificial intelligence, including any or all of: machine perception and inference, machine learning, optimization problems, computational methods and models of search, game playing and theorem proving. Emphasis may be on any formal method of perceiving, learning, reasoning, and problem solving which proves to be effective. This includes both symbolic and neural network approaches to artificial intelligence. Issues discussed include symbolic versus nonsymbolic methods, local versus global methods, hierarchical organization and control, and brain modeling versus engineering approaches. Lisp or Prolog may be introduced. Involves one major project or regular programming assignments.',
    projects: [
        {
        title: 'Pacman AI Agent',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE140/CSE140-FinalProject',
        details: `Built a CTF Pacman agent (two Pacman + two ghosts) that balances offense and defense. We use Minimax with alpha-beta pruning. As is standard in the Minimax algorithm, MaxValue() calculates the maximum utility of the current state and MinValue() caluclates the minimum utility The chooseAction() step keeps scores/positions/distances updated and does dynamic food assignment by splitting food left/right and picking the closer half (via Manhattan distance), enabling coordinated, real-time play.`
        },
    ],
    notes: ['Search Algorithms: A* Search, Uniform Cost Search, DFS, BFS', 'Heuristics: Admissibility and Consistency',
        'State Representation', 'Problem Formulation', "Constraint Satisfaction Problems", 
        'Adversarial Search: Minimax, Alpha/Beta Pruning, Expectimax',
        'Markov Decision Processes', 'Q-Learning', 'Value Iteration',
        'Propositional/First Order Logic', 'Bayesian Networks'
    ]
  },

  'cse-150': {
    title: 'CSE 150 ⭐: Introduction to Computer Networks',
    term: 'Spring 2025',
    description:
      'Addresses issues arising in organizing communications among autonomous computers. Network models and conceptual layers; Internet-working; characteristics of transmission media; switching techniques (packet switching, circuit switching, cell switching); medium access control (MAC) protocols and local area networks; error-control strategies and link-level protocols; routing algorithms for bridges and routers; congestion control mechanisms; transport protocols; application of concepts to practical wireless and wireline networks and standard protocol architectures. Lab component provides students with hands-on experience in computer networks.',
    projects: [
        {
        title: 'Simple IPv4 Router',
        link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE150',
        details: 'Constructs a network for a LLM startup company building with two floors, with each floor having its own switches and subnets. The configured firewall blocks all IP traffic from an untrusted host to the company\'s LLM server, and blocks the Internet from discovering internal IP addresses by blocking all ICMP traffic from the untrusted host to any internal host. The Mininet or network topology includes 4 hosts for Department A, 4 hosts for Department B, an LLM server, and 2 external hosts, which are all connected via switches (2 for each department, 1 for the server, and a core switch) and links that define subnets. The POX controller is used to install the appropriate rules on the OpenFlow switches, which ultimately configures the firewall.'
        },
    ],
    notes: [
        "Application Layer: HTTP, SMTP, POP3, IMAP, DNS", "Transport Layer: UDP, TCP", "Network Layer: IPv4, ICMP, IPv6, RIP, OSPF, BGP", "Link Layer: ARP, MAC, ALOHA, CSMA/CD, CSMA/CA",
    ]
  },

  'cse-180': {
    title: 'CSE 180: Database Systems I',
    term: 'Fall 2025',
    description:
      'Introduction to the concepts, approaches, tools, and methodology of database design. Covers the entity-relationship model, the relational model, relational algebra, relational calculus, commercial languages (such as SQL and QBE), functional dependencies, normal forms, and design theory. Other topics may include knowledge-bases, constraint databases, and alternative database models.',
    projects: [],
  },

  'cse-144': {
    title: 'CSE 144: Applied Machine Learning (Deep Learning)',
    term: 'Winter 2026',
    description:
      'Provides a practical and project-oriented introduction to deep learning techniques. Starts with a review of basic elements of machine learning: training and testing, loss function, gradient descent, linear regression, and logistic regression. Moves on to common deep learning models: feedforward networks, convolutional networks for image recognition, recurrent networks and LSTM for temporal and sequential data, attention models and transformers. Some practical concepts for deep learning, including how to find model parameters, how to train large scale models, techniques for regularization and avoid overfitting, are also covered. A very basic introduction to more complex techniques such as deep reinforcement learning, neural symbolic models and diffusion models is provided in week 9. Selected student teams present their course projects in the last week.',
    projects: [],
  },

  'cse-186': {
    title: 'CSE 186: Full Stack Web Development I',
    term: 'Winter 2026',
    description:
      'Examines current uses of the World Wide Web for delivery of the sophisticated interactive applications used daily. Web applications offer several advantages over traditional, locally installable binaries including heterogeneous deployment, instantaneous access, continuous updates, and the possibility of collaboration at scale. These full stack web applications are typically more complex than their traditional counterparts, requiring the seamless integrating of numerous related technologies if end users are to have a productive experience and the system is to remain robust, performant, and secure.',
    projects: [],
  },

  'lit-81i': {
    title: 'LIT 81I: Engineering California',
    term: 'Spring 2024',
    description:
      'Online course using literary and artistic texts to investigate the history and engineering of California, and to imagine a virtual, material, and cultural infrastructure for California\'s future. Course begins and ends with the Internet, and includes topics such as cyberspace, the Gold Rush, Spanish/Mexican missions, wartime development, and early cybernetics.',
    projects: [],
  },

  'cmpm-198f': {
    title: 'CMPM 198F: Individual Study or Research',
    term: 'Spring 2025',
    description:
      'Independent study or research for majors by petition to a sponsoring faculty member; repeatable for credit.',
    projects: [],
  },

  'cmpm-17-f23': {
    title: 'CMPM 17: Design Build Experience (Electrical Circuit Design)',
    term: 'Fall 2023',
    description:
      'Introduction to design thinking and the engineering design cycle via a design-build-evaluate-iterate process, resulting in a functional artifact. Students work in groups while learning discipline-specific standards of good engineering practice. Specific project details and disciplines explored vary with instructor. This module is designed to teach the basic concepts of circuit design as a manufacturing process using the Electronic Design Automation workflow. Students will walk through the complete design cycle, from circuit design, testing, soldering, and ultimately produce a printed circuit board to power and control a rotating desk fan. The actual printing of the board will depend on lab accessibility during the quarter. By the end of the module, participants will be able to design, prototype and assemble electrical circuits for their own projects.',
    projects: [],
  },
  'cmpm-17-w24': {
    title: 'CMPM 17: Design Build Experience (Intro to Hacking Competitions)',
    term: 'Winter 2024',
    description:
      'Introduction to design thinking and the engineering design cycle via a design-build-evaluate-iterate process, resulting in a functional artifact. Students work in groups while learning discipline-specific standards of good engineering practice. Specific project details and disciplines explored vary with instructor. Introduction to Hacking Competitions is a course centered around introducing students to cybersecurity through a competitive aspect. Students will learn and demonstrate their skills in various cybersecurity categories, with a final project centered around a team based hacking competition. These skills can be transferred to cybersecurity related opportunities and competitions alike and will also boost technical literacy with everyday computer usage.',
    projects: [],
  },

  'cmpm-118': {
    title: 'CMPM 118 ⭐: Collaborative Research Experience in Engineering',
    term: 'Spring 2024',
    description:
      'Guides small student teams through the performance of a quarter-long research project. Provides an overview of the process of performing research, research communities, and processes for finding and presenting research results.',
    projects: [],
  },

  'cmpm-15': {
    title: 'CMPM 15: Research Explorations',
    term: 'Winter 2024',
    description:
      'Students explore ideas with like-minded peers and position themselves to join research labs. They read, present, and discuss research ideas in low time-commitment reading groups related to an active research area of UCSC faculty, diving into the creative, societally impactful, and cutting-edge aspects of technology. Course is designed for students of all backgrounds and majors, those just starting undergraduate work, about to graduate, considering research, or simply curious. To browse themes, visit the Exploratory Reading Groups website',
    projects: [],
  },

  'cse-130': {
    title: 'CSE 130 ⭐: Principles of Computer Systems Design',
    term: 'Winter 2025',
    description:
      'Covers the principles governing computer-systems design and complexity; familiarity with memory, storage, and networking; concurrency and synchronization; layering (abstraction and modularity); naming; client-server and virtualized system models; and performance. Requires significant programming projects demonstrating mastery of these concepts',
    projects: [
        {
            title: 'Command-line Memory',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE130/asgn1',
            details: `Provides a get/set memory abstraction for
files in a Linux directory. Takes a command from stdin and carries out the command
in the current working directory. Handles invalid commands for robustness. Uses unbuffered I/O and system calls`
        },
        {
            title: 'HTTP Server',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE130/asgn2',
            details: `Implements a single-connection HTTP/1.1 server supporting GET and PUT on files in the working directory.
Parses request line/headers strictly, reads Content-Length, and returns the appropriate HTTP status codes. Utilizes unbuffered POSIX I/O with retry loops for partial/EINTR.
Handles malformed input safely, enforces path constraints, and emits exact Content-Length responses.`,
        },
        {
            title: 'Concurrent Data Structures',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE130/asgn3',
            details: `Implements a thread-safe bounded buffer and a reader-writer lock with configurable priority. READERS: readers proceed first, WRITERS: writers proceed first, N_WAY: allows n readers to proceed between each writer.
The functions queue_push() and queue_pop() block when the queue is full/empty, preserves FIFO, and ensures validity/completeness under concurrent producers/consumers.
Utilizes mutexes and condition variables from pthreads.`,
        },
        {
            title: 'Multithreaded HTTP Server',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE130/asgn4',
            details: `Implements a multithreaded HTTP/1.1 server with one dispatcher and N worker threads (-t), using a thread-safe queue to serve concurrent GET/PUT requests while synchronizing to ensure a single, coherent linearization of all requests.
Emits an atomic audit log to stderr as <Oper,URI,Status-Code,RequestID>, which preserves order consistent with non-overlapping arrivals.`,
        },
        {
            title: 'Forward HTTP Proxy',
            link: 'https://github.com/NguyenEvan/UCSC-CSE/tree/main/CSE130/asgn5',
            details: `Implements a forward HTTP caching proxy, which receives client requests and forwards them to servers. Caches pages that clients request, using either a FIFO or LRU cache eviction policy. Utilizes a hash table to store each request based on the host, port number, and uri`,
        }
    ],
  },

  'cse-102': {
    title: 'CSE 102: Introduction to Analysis of Algorithms',
    term: 'Spring 2025',
    description:
      'Methods for the systematic construction and mathematical analysis of algorithms. Order notation, the RAM model of computation, lower bounds, and recurrence relations are covered. The algorithm design techniques include divide-and-conquer, branch and bound, and dynamic programming. Applications to combinatorial, graph, string, and geometric algorithms.',
    projects: [],
    notes: ['Comparison Based Sorts: Insertion Sort, Quick Sort, Merge Sort', 
        'Linear Sorts: Radix Sort, Counting Sort, Bucket Sort', 
        'Big O notation and analysis: O (upper), Ω (lower), Θ (tight); little-o/ω for strict bounds.',
        'Recurrence analysis: Master method, Substitution method (induction), Recursion tree',
        'Binary Heaps: Heapify, Build Heap, Heapsort, Priority Queues',
        'Graphs: DFS, BFS, Djikstra\'s, Bellman-Ford, Floyd-Warshall',
        'Dynamic Programming: 0/1 Knapsack, LCS, Rod Cutting',
        'Greedy Algorithms: Activity Selection, Fractional Knapsack, Huffman Codes',
        'Divide and Conquer: Quick Sort, Merge Sort, Strassen algorithm',
        'Probabilistic Analysis: Expected runtimes',
        'Medians and order statistics'
    ]
  },
    'cse-16': {
    title: 'CSE 16: Applied Discrete Mathematics',
    term: 'Winter 2024',
    description:
      'Introduction to applications of discrete mathematical systems. Topics include sets, functions, relations, graphs, predicate calculus, mathematical proof methods (induction, contraposition, contradiction), counting methods (permutations, combinations), and recurrences. Examples are drawn from computer science and computer engineering.',
    projects: [],
  },

  'cse-114a': {
    title: 'CSE 114A: Foundations of Programming Languages',
    term: 'Winter 2025',
    description:
      'Problem solving emphasizing recursion, data abstraction, and higher-order functions. Introduction to types and type checking, modular programming, and reasoning about program correctness',
    projects: [],
  },

  'cse-115a': {
    title: 'CSE 115A: Software Engineering',
    term: 'Fall 2025',
    description:
      'Emphasizes the characteristics of well-engineered software systems. Topics include requirements analysis and specification, design, programming, verification and validation, maintenance, and project management. Practical and research methods are studied. Imparts an understanding of the steps used to effectively develop computer software.',
    projects: [],
  },

  'cse-132': {
    title: 'CSE 132: Computer Security',
    term: 'Fall 2025',
    description:
      'Principles and practice of computer and network security: threats, cryptographic primitives, secure systems, vulnerabilities, and defenses.',
    projects: [],
  },

  'cse-101m': {
    title: 'CSE 101M: Mathematical Thinking for Computer Science',
    term: 'Winter 2026',
    description:
      'Introduction to problem-solving and proof techniques for computer science: modeling CS problems using mathematical concepts; solving problems and inventing mathematical arguments; writing rigorous, understandable proofs using LaTeX. Applications in all CS areas with focus on analyzing algorithms, programs, and protocols.',
    projects: [],
  },

  'crsn-1': {
    title: 'CRSN 1: Academic Literacy and Ethos: Environment and Society',
    term: 'Fall 2023',
    description:
      'Teaches foundational concepts for intellectual exploration and personal development within an academic community: analysis, critical thinking, metacognition, engagement with others across difference, and self-efficacy. Engages students in Rachel Carson\'s intellectual tradition of investigating relationships between environment and society.',
    projects: [],
  },

  'am-30': {
    title: 'AM 30: Multivariate Calculus for Engineers',
    term: 'Spring 2024',
    description:
      'Advanced multivariate calculus for engineering majors. Coordinate systems, parametric curves, and surfaces; partial derivatives, gradient, Taylor expansion, stationary points, constrained optimization; integrals in multiple dimensions; integrals over curves and surfaces. Applications to engineering form an integral part of the course.',
    projects: [],
  },

  'ece-30': {
    title: 'ECE 30: Engineering Principles of Electronics',
    term: 'Spring 2025',
    description:
      'Suitable for sophomores pursuing computer science and engineering careers. Aims at deriving basic engineering principles directly from examples relevant to computing and electronics: 1) Newton\'s Laws and related fundamental mechanics; 2) basic thermodynamics and heat/energy transfer; 3) key electromagnetic principles, including Coulomb\'s Law, Gauss\'s Law, and basic circuit analysis using Kirchoff\'s Laws/Rules; and 4) Ray optics for fiber optic communications and camera electronics.',
    projects: [],
  },

  'cowl-52': {
    title: 'COWL 52: Personal Finance and Investing',
    term: 'Winter 2025',
    description:
      'Overview of the financial responsibilities that young adults take on after college. Topics include: taxes, budgeting, student loans, credit, and investing in the stock market. Ubiquitous terms, such as 401(k), are defined, and financial principles are used to develop a framework for personal financial decision-making.',
    projects: [],
  },

 
};

// ...imports and COURSE_DB stay the same...

export default function Course() {
  const { courseId } = useParams();
  const course = COURSE_DB[courseId];

  if (!course) {
    return (
      <main className="courses">
        <h1 className="courses-title">Course Not Found</h1>
        <p className="courses-caption">No course page exists for “{courseId}”.</p>
        <p><Link to="/courses" className="course-link">← Back to Course List</Link></p>
      </main>
    );
  }

  const starred = /⭐/u.test(course.title || '');
  const hasProjects = starred && course.projects && course.projects.length > 0;
  const hasNotes = Array.isArray(course.notes) && course.notes.length > 0;

  return (
    <main className="courses">
      <h1 className="courses-title">{course.title}</h1>
      <h2 className="courses-subtitle">{course.term}</h2>
      <p className="courses-caption">{course.description}</p>

      {/* Topics & Notes (always appears above Projects) */}
      { hasNotes && (
      <section className="section">
        <h3 className="courses-title">Topics &amp; Notes</h3>
        {hasNotes ? (
          <ul className="notes-list">
            {course.notes.map((n, i) => <li key={i}>{n}</li>)}
          </ul>
        ) : (
          <p className="courses-caption">No notes yet.</p>
        )}
      </section>)
        }

     {hasProjects && (
        <section className="section">
            <h3 className="courses-title">Projects</h3>
            <ul className="notes-list">
            {course.projects.map((p, i) => (
                <li key={i} className="project-item">
                <a className="course-link" href={p.link} target="_blank" rel="noreferrer">
                    {p.title}
                </a>
                {p.details && (
                    <div className="project-details">{p.details}</div>
                )}
                </li>
            ))}
            </ul>
        </section>
    )}

      <p style={{ marginTop: '1.5rem' }}>
        <Link to="/courses" className="course-link">← Back to Course List</Link>
      </p>
    </main>
  );
}
