const data = [
  {
    coursecode: "DCIT 101",
    title: "Introduction to Computer Science",
    data: "This course provides a broad survey introducing the key areas the computer science discipline and information technology discipline. It introduces computers and how they work, their classification and historical development. Topics covered will include Application of computers; Data representation in Computers; Peripherals; Files; Systems Engineering; Databases; Computer architecture; Assembly language; Data Communications and networking; Systems software; Programming concepts in very accessible language Python; Algorithms and data structures; The internet and Web Technology. Programming assignments are inspired by real-world domains of cryptography, forensics, gaming and finance.",
  },

  {
    coursecode: "DCIT 102",
    title: "Computer Hardware and Circuits  ",
    data: "It provides comprehensive understanding of the essential components associated with computers with a focus on PCs. Topics include: The microprocessor, motherboard, memory, graphics and sound adapters, I/O devices storage and circuit theory. An overview of operating systems and other software, as well as the various methods used to connect computers to each other and the Internet, are presented. The course also addresses recent advances in computer architectures and computer hardware and how they affect computer performance. Presentations of actual hardware are included so that students can gain experience in identifying the various internal and external components of a PC.",
  },

  {
    coursecode: "DCIT103",
    title: "Office Productivity Tools",
    data: "This course teaches use of office productivity tools. Microsoft Office 2016 software products  Word, Excel, Outlook, and PowerPoint will be taught in depth. Topics include: Word– creating documents text editing, formatting, saving, and printing, creating table of contents; commenting tools, proofing, tracking; Excel- creating spreadsheets, data entry, formatting, formulas, functions, tables and performing calculations on data, charts and graphics, dynamic worksheets using pivot tables, macros; Outlook- setting up Outlook server, managing email messages, contacts, appointments and tasks, and efficiency and customization; PowerPoint- creating slide presentations using design templates, formatting, graphics, animations, presentation, add sounds and graphics, visual elements, and tables.",
  },

  {
    coursecode: "DCIT 104",
    title: "Programming Fundamentals",
    data: "Problem Solving and Programming are essential skills for IT students and IT professionals. Learning how to solve a problem using a structured programming language provides a strong foundation for a successful career. Designing of solutions to problems using procedural techniques and deciding on an appropriate repetition and/or selection structures for given problems will be covered. Topics Include: The importance of algorithms in the problem-solving process; Properties of good algorithms, Algorithms for solving simple problems; the use of a programming language to implement, test, and debug algorithms for solving simple problems, data definition, control structures, functions, arrays, pointers and strings.",
  },

  {
    coursecode: "CSIT 104",
    title: " Mathematics for IT Professionals",
    data: "This course will cover some particularly important concepts used in computer science. Graph theory concepts are used in networks, operating systems, and compilers. Set theory concepts are used in software engineering and in databases. Topics to be covered include Sets Venn diagrams, Cartesian product, Power sets, Cardinality of finite sets; Relations, Reflexivity, symmetry, partial orders; Functions, Surjections, injections, bijections, Inverses, Composition; Trees, Properties, Traversal strategies, Undirected graphs, Directed graphs, Weighted graphs, Spanning trees/forests, Graph isomorphism; Counting arguments, Set cardinality and counting, Sum and product rule, Inclusion-exclusion principle, Arithmetic and geometric progressions, The pigeonhole principle, Permutations and combinations, Pascal’s identity. ",
  },

  {
    coursecode: "MATH 121",
    title: "Algebra and Trigonometry",
    data: "This course is a precalculus course which aims to develop the students’ ability to think logically, use sound mathematical reasoning and understand the geometry in algebra. It includes advanced levels of topics addressed in high school such as arrangements, selections and the binomial theorem. Sequences and series. Logic and Proof.  Set theory. Indices, logarithms and the algebra of surds. Concept of a function. Trigonometric functions, their inverses, their graphs, circular measure and trigonometric identities.  ",
  },

  {
    coursecode: "MATH 123",
    title: "Vectors and Geometry",
    data: "Vectors may be used very neatly to prove several theorems of geometry. This course is about applying vector operations and the method of mathematical proof (of MATH 121) to geometric problems. The areas of study include: vector operations with geometric examples; components of a vector and the scalar product of vectors. Coordinate geometry in the plane including normal vector to a line, angle between intersecting lines, reflection in a line, angle bisectors and the equation of a circle, the tangent and the normal at a point.",
  },

  {
    coursecode: "MATH 122",
    title: " Calculus I  ",
    data: "Elementary idea of limit, continuity and derivative of a function. Rules of differentiation. Applications of differentiation. Derivative of the elementary and transcendental functions. Methods of integration. Improper integrals. Applications of integration. Formation of differential equations and solution of first order differential equations both separable variable type and using an integrating factor.",
  },

  {
    coursecode: "MATH 126",
    title: "Algebra and Geometry",
    data: "This is a course which highlights the interplay of algebra and geometry.  It includes topics such as: polar coordinates; conic sections. Complex numbers, Argand diagram, DeMoivre's theorem, roots of unity. Algebra of matrices and determinants, linear transformations. Transformations of the complex plane.  Sketching polar curves and some coordinate geometry in 3 dimensions. Vector product and triple products.  ",
  },

  {
    coursecode: "STAT 111",
    title: " Introduction to Statistics and Probability I",
    data: "This course introduces students to basic principles in Statistics and Probability. The definition, reduction and interpretation of data. Introduction to basic concepts of Probability; Random Events and Random Variables, and Bayes Theorem. Students will be given overview of computational statistics and an introduction to the computing environment. The statistical software (R, Minitab and Stata) will be used to execute concepts learned in class. Methods of data description and analysis using R, Minitab and Stata: emphasis on learning statistical methods and concepts through hands-on experience with real data. One-hour Lab session a week will be organized for students.",
  },

  {
    coursecode: "DCIT 200",
    title: " Internship",
    data: "Student in is now being recognized as adding value to student education. This non-scoring course provides students with opportunity to gain practical insight into the working world. Students will be encouraged to seek internship opportunities with companies. The idea is that this will help them come up with practical ideas for their project work.",
  },

  {
    coursecode: "DCIT 201",
    title: " Programming I",
    data: "This course is expected to give students the understanding of object-oriented methodology, the approach to modular and reusable software systems. Object orientation will be discussed from ground up, pointing out and explaining key concepts of object orientation, its justification and how it is applied in Software Engineering. Students will be exposed to at least four language implementation to the covered principles and concepts- Java, C#, Python and PHP. Topics include: Classes and Objects, Object Design and Programming – Encapsulation, Abstraction, Inheritance, Polymorphism, Composition, Aggregation, Method overloading, Interfaces, Exception Handling, Collections, etc. This course will ensure that students have adequate practical exposure.",
  },

  {
    coursecode: "DCIT 202",
    title: " Mobile Application Development",
    data: "This course studies the design and implementation of mobile applications for popular platforms including Blackberry, Android and Apple devices. The course will provide an overview of the various mobile platforms but will focus on developing applications for iPhone, iPod Touch and iPad. Programming topics covered will include an introduction to Objective-C, the XCode IDE and will focus on designing, implementing and running applications using the simulator for the various Apple devices. Students will leverage their object oriented programming skills for such things classes, objects, inheritance, exception handling, and graphical user interface design. ",
  },

  {
    coursecode: "DCIT 203",
    title: " Digital and Logic Systems Design",
    data: "This course will provide an overview of principles and Techniques of modern digital systems. This course exposes individuals to a wide array of classic as well as state of the art digital electronics technology. Topics Include: Introduction to numbers systems and codes, logics circuits, combinational and sequential logic, storage elements, digital arithmetic, integrated circuit logic families. An Overview of Technologies and Application of wide array of digital components used within state of the art IT Systems. An understanding of the applications of such digital devices embedded within telecommunications systems, storage systems, computing systems, multimedia systems, and computer networks.",
  },

  {
    coursecode: "DCIT 204",
    title: "Data Structures and Algorithms I",
    data: "This course focuses on the fundamentals of computer algorithms, emphasizing methods useful in practice. Using the big-O notation, algorithms are classified by their efficiency. We look into basic algorithm strategies and approaches to problem solving. Some of these approaches include the divide and conquer method, dynamic programming, and greedy programming paradigms. Sorting and searching algorithms are discussed in detail as they form part of a solution to a large number of problems solved using computers. The course also provides an introduction to the graph theory and graph algorithms as they are also used in many computer-based applications today.",
  },

  {
    coursecode: "DCIT 205",
    title: " Multimedia and Web Design",
    data: "This course delivers sound training in the latest web technologies that are relevant to build modern and feature-rich web applications. It provides insight into state-of-the-art web design practice and introduces emerging topics in web development, such as package management and version control. The course features an introduction to the building blocks of the web – HTML, CSS and JavaScript. Topic include: Introduction to HTML, CSS and JavaScript, understanding frameworks and tools for modern web development, exploring CSS frameworks – bootstrap and foundation, exploring JavaScript frameworks – VueJS, AngularJS, ReactJS, NodeJS, package management with npm and a gentle introduction to version control using github.",
  },

  {
    coursecode: "DCIT 206",
    title: " Systems Administration ",
    data: "This course provides students with the skills and concepts that are essential to the administration of operating systems, networks, software, file systems, file servers, web systems, database systems, and system documentation, policies, and procedures. This also includes education and support of the users of these systems. Topics include: Installation,Configuration,Maintenance (service packs, patches) Server services, Client services Support, Installation Configuration, Server services (database, web, network services, Content management and deployment, Server administration and management,User and group management,Backup management,Security management,Disaster recovery,Resource management,Automation management.",
  },

  {
    coursecode: "DCIT 207",
    title: " Computer Organization and Architecture",
    data: "Students will acquire an understanding and appreciation of a computer system’s functional components, their characteristics, performance, interactions and in particular, the challenge of harnessing parallelism to sustain performance improvements now and into the future. In selecting a system to use, students should be able to understand the tradeoff among various components, such as CPU clock speed, cycles per instruction, memory size, and average memory access time. Topics include: Basic organization of von Neumann machine, Instruction sets, format and types, Assembly/machine language programming, Addressing modes, Subroutine call and return mechanisms, I/O and interrupts, Shared memory multiprocessors/multicore organization, Memory Organization and Architecture.",
  },

  {
    coursecode: "DCIT 208",
    title: " Software Engineering",
    data: "The course covers the basics of software engineering. The basic foundation and concepts are to be covered. This course covers the software development process, from software characteristics to programming practices. A variety of concepts, principles, techniques, and tools are presented, encompassing topics are Characteristics of Software, software environments, major players in software engineering, software myths, software realities, product vs processes, Risks, project lifecycles, software processes, project management, people management, software requirements, analysis and specification, design software requirements, system models, architectural and detailed design, user interface design, programming practices.",
  },

  {
    coursecode: "DCIT209",
    title: "E-Business Architectures",
    data: "This course will introduce the concepts, vocabulary, and procedures associated with E-Commerce and the Internet. Student shall be introduced to the fundamentals of e-buisness and its relevance to modern business. Topics will include: the evolution of the Internet and E-Commerce, features of Web sites and the tools used to build an E-Commerce web site, marketing issues, payment options, security issues, and customer service. B2B, B2C, E-commerce, supply-chain, emerging business models shall also be discussed.",
  },

  {
    coursecode: "DCIT 101",
    title: " CSCD 314:      Research Methods in Computing    ",
    data: "This  course  examines  different  methods  of  acquiring  knowledge,  role  ofeconomic  research, identification of a research problem and stating of research questions and hypotheses. Also review of literature, meaning, purpose and principles of research designs and the measurement design will be examined. The course further acquaints students with the method of data collection and analysis; descriptive and inferential statistics; interpretation of data and proposal and research writing.   ",
  },

  {
    coursecode: "DCIT 212",
    title: " Numerical and Computational Methods  ",
    data: "This course will study iterative methods for solving nonlinear equations; direct and iterative methods for solving linear systems; approximations of functions, derivatives, and integrals; error analysis. The course will take students through Solving Numerical Algebraic and Transcendental Equations, Bisection Methods, False Position Method, Newton Raphson Method, Successive Approximation Method, Simultaneous Linear Algebraic Equations, Gauss Elimination Method, Jacobi Method. There will also be a significant programming component in the course. Students will be expected to implement a range of numerical methods in homework assignments to get hands-on experience with modern scientific computing. In-class demos will be performed with Matlab and/or Python.  ",
  },

  {
    coursecode: "DCIT 214",
    title: " Information Modeling and Specification",
    data: "The course introduces the area of database systems. The course will tackle modeling issues and the translation of models into relational tables. We will introduce the basics of querying databases and, in particular we will see the syntax and composition of SQL queries. At the end of this course students should understand the role of analysis and design in the software engineering lifecycle, develop object-oriented designs by applying established design principles, develop use-case and scenario descriptions of the requirements, develop descriptions of design models using UML diagrams, understand the role and influence of design patterns and frameworks in software design.",
  },

  {
    coursecode: "DCIT 301",
    title: " Operating Systems ",
    data: "This course will study basic principles of operating systems: addressing modes, indexing, relative addressing, indirect addressing, stack maintenance; implementation of multitask systems; control and coordination of tasks, deadlocks, synchronization, mutual exclusion; storage management, segmentation, paging, virtual memory; protection, sharing, access control; file systems; resource management; evaluation and prediction of performance. Introduction to operating systems. Topics Include:  Threads and Processes; Interprocess Communication, Synchronization; CPU Scheduling; Memory Management; File and I/0 Systems; Protection and Security; Distributed System Structures; Distributed Coordination; Fault Tolerance, Real-time Computing. ",
  },

  {
    coursecode: "DCIT 302",
    title: " Human-Computer Interaction (HCI)",
    data: "This  course  will  introduce  the  student  to  the  basics  of  high-performance  parallel  computing and the national cyber-infrastructure. This course is designed to provide an introduction to the field   of   parallel   computation.   Topics   Include:   Architectural,   algorithmic,   and   language requirements for parallel computing and the lectures will emphasize the relationships between these  requirements.  Parallel  algorithm  design  and  analysis  as  well  as  parallel  programming languages will be examined in the context of specificHuman-Computer Interaction (HCI) is concerned with designing interactions between human activities and the computational systems that support them, and with constructing interfaces to afford those interactions. This course illustrates the principles of user interface design, development, and programming. Topics Include: User psychology and cognitive science, menu system design, command language design, icon and window design, graphical user interfaces, web-based user interfaces. Principles of user interface design. Concepts for objectively and quantitatively assessing the usability of software user interfaces, designing Interaction, Programming Interactive Systems, User-Centered Design and Testing, New Interactive Technologies, emerging technologies are discussed. parallel systems and models.",
  },

  {
    coursecode: "DCIT 303",
    title: "Computer Networks",
    data: "This course covers both the Introduction to Networks and Routing and Switching Essentials in CCNA. The principles of IP addressing and fundamentals of Ethernet concepts, media, and operations are introduced to provide a foundation for the curriculum. At the end of the course students will be able to build simple LANs, perform basic configurations for routers and switches, and implement IP addressing schemes, configure and troubleshoot routers and switches and resolve common issues with RIPv1, RIPv2, single-area and multi-area OSPF, virtual LANs, and inter-VLAN routing in both IPv4 and IPv6 networks.",
  },

  {
    coursecode: "DCIT 304",
    title: "Research Methods",
    data: "This course examines different methods of acquiring knowledge, role of economic research, identification of a research problem and stating of research questions and hypotheses. Also review of literature, meaning, purpose and principles of research designs and the measurement design will be examined. The course further acquaints students with the method of data collection and analysis; descriptive and inferential statistics; interpretation of data and proposal and research writing.",
  },

  {
    coursecode: "DCIT 305",
    title: "Database Fundamentals",
    data: "In this course, students will be introduced to relational database concepts, E/R diagrams, normalization, structured query language (SQL). Students will write and execute queries and sub-queries, create database objects (tables. views, indices, sequences, functions, triggers, stored procedures), and manipulate data in tables. Topics covered in this course will include: Database Concepts and Architecture, Database Modelling and Design, Entity-Relationship Model, Normalization, Data Manipulation Language (DML), Data Definition Language (DDL), Data Control Language (DCL), Sub-queries, Multiple Tables, Database Views, Database Triggers, Stored Procedures, Decision and Control Structures, PL/SQL, and Transaction Processing.",
  },

  {
    coursecode: "DCIT 306",
    title: "Cloud Computing",
    data: "This course provides a hands-on comprehensive study of Cloud concepts and capabilities across the various Cloud service models IaaS, PaaS, SaaS, and Business Process as a Service (BPaaS). IaaS topics start with a detailed study the evolution of infrastructure migration approaches from VMWare/Xen/KVM virtualization, to adaptive virtualization, and Cloud Computing/on-demand resources provisioning. Mainstream Cloud infrastructure services and related vendor solutions are also covered in detail. PaaS topics cover a broad range of Cloud vendor platforms including AWS, Google App Engine, Microsoft Azure, Eucalyptus, OpenStack as well as storage services that leverage Google Storage, Amazon S3, Amazon Dynamo. ",
  },

  {
    coursecode: "DCIT 307",
    title: " Mini-Project",
    data: "Students use information technology as a tool to redesign business processes so the enterprise can achieve its objectives. Student teams analyze the business processes of real organizations, quantify the negative impact caused by current process challenges, then develop and present a compelling Business Case for Change. Students develop skills critical for preparing and delivering effective verbal briefings and presentations.",
  },

  {
    coursecode: "DCIT 308",
    title: " Data Structures and Algorithms II",
    data: "This course covers further topics in data structures and the algorithms required for their implementation. Data structures include heaps and search, splay, and spanning trees. Analysis techniques include asymptotic worst case, expected time, amortized analysis, and reductions between problems. Include Generic types, Linked lists, Stacks and queues, Binary trees, Balanced binary trees, Multi-way trees, B-trees and B+-trees, File organization, Searching and sorting, Hashing. Running time analysis of algorithms and their implementations, one-dimensional data structures, trees, heaps, additional sorting algorithms, binary search trees, hash tables, graphs, directed graphs, weighted graph algorithms.",
  },

  {
    coursecode: "DCIT 309",
    title: " Embedded Systems and Internet of Things",
    data: "This course aims at teaching students the fundamental principles underpinning the design and construction of devices through the theory and practice of embedded systems. Topics Include: Embedded Systems Architecture and design; Middleware and Application Software; Embedded software; Embedded hardware; Embedded Processor, Board Memory, Board Buses, Board Input/Output. Students will learn about sensor operation, signal acquisition, the role of measurement uncertainty and noise, common sensor communication interfaces and how they interact with modern embedded microcontrollers Other topics in this course are components of IoT devices, IoT design considerations and constraints, design trade-offs between hardware and software, IoT device and the Internet.",
  },

  {
    coursecode: "DCIT 311",
    title: " Machine Learning",
    data: "In this introductory course covers the basic theory and algorithms that form the core of machine learning. Machine Learning draws on concepts and results from many fields and forms a key technology in Big Data, and in many financial, medical, commercial, and scientific applications. Topics covered in this course are The Learning Problem, The Linear Model I, Error and Noise, Training versus Testing, Theory of Generalization, The VC Dimension, Bias-Variance Tradeoff, Neural Networks, Overfitting, Regularization, Validation, Support Vector Machines, decision trees, Kernel Methods, Radial Basis Functions, Learning Principles, Deep Learning, Epilogue.",
  },

  {
    coursecode: "DCIT 312",
    title: "Information Security Management",
    data: "This course covers the range of concepts, approaches and techniques that are applicable in Information Security Management Principles. Students are required to demonstrate their knowledge and understanding of these aspects in Information Security Management Principles.  It provides the opportunity for those already within these roles to enhance or refresh their knowledge. Key areas are: Knowledge of the concepts relating to information security management, Understanding of current national legislation and regulations which impact upon information security management, Awareness of current national and international standards, frameworks and organizations which facilitate the management of information security.",
  },

  {
    coursecode: "DCIT 313",
    title: "Introduction to Artificial Intelligence",
    data: "This course will cover the theory and practice of developing systems that exhibit the characteristics we associate with intelligence in human behavior such as reasoning, planning and problem solving, learning and adaptation, natural language processing, and perception. Basic problem-solving strategies, heuristic search, problem reduction and AND/OR graphs, knowledge representation, uncertainty reasoning, game playing, planning, machine learning, computer vision, and programming systems such as Lisp or Prolog. Topics include state space search, logic, and resolution theorem proving. Application areas may include expert systems, natural language understanding, planning, machine learning, or machine perception.",
  },

  {
    coursecode: "DCIT 314",
    title: "Game Engine Architecture",
    data: "This course provides students with an introduction to the theory and practice of video game programming. Students will participate in individual hands-on lab exercises, and also work together like a real game development team to design and build their own functional game using an existing game engine (e.g. XNA) and also by designing and implementing engine subsystems and integrating 3rd party components. Topics would include real-time programming and the game loop, human interface devices, 3D rendering, collision detection, skeletal animation, rigid body dynamics, game object models, event-driven programming, game scripting languages.",
  },

  {
    coursecode: "DCIT 315",
    title: "Principles of 3D Environment",
    data: "This an introductory course focusing on 3D concepts for game play, modeling, and programming with a view on current and future technologies for electronic game design. Topics include graphics, game scripting, game engines, motion control, narrative in games, game interfaces, artificial intelligence, music and sound,Serious Games and social and interface issues of game development. The course explores game engine software framework to design and implement games, animation techniques, physics simulation, user controls, graphical methods, and intelligent behaviors. Students will finally be introduced to Game Studio for control of objects and interactions in 2D and 3D game worlds. ",
  },

  {
    coursecode: "DCIT 316",
    title: "Computational models for Social Media Mining",
    data: "This course will introduce students to computational methods for extracting social and interactional meaning from large volumes of text and speech (both traditional media and social media). The use of computational techniques to model social phenomena and the use of data analytics to learn models of (and to predict) social phenomena using real data will be taught. Topics will include: Sentiment Analysis, Emotion and Mood Analysis, Belief Analysis and Hedging, Deception Detection, Argumentation Mining and Social Power analysis.",
  },

  {
    coursecode: "DCIT 317",
    title: "IT Project Management ",
    data: "This course is mainly designed to prepare IT project managers, novice or experienced, with project management skills needed to better manage IT projects. Built along the IT project management lifecycle, this course covers detailed topics of the basic concepts of IT project management, including initiating, planning, controlling, executing, and closing projects. The course also shows how IT projects should be managed, from inception to post implementation review.   The audience who take this course will likely improve their management skills and abilities to define the project scope, create a workable project plan, and manage within the budget and schedule.",
  },

  {
    coursecode: "DCIT 318",
    title: "Programming II",
    data: "The course introduces students to advanced application software development using Microsoft application development platform. It teaches students how to design desktop and web based application software using the design tools available in Microsoft Visual Studio. Topics to covered in this course are introduction to C# Syntax, Methods, Classes and Inheritance, Exceptions handling and Monitoring, UI design using windows forms, controls, menus, and toolbar, Reading and writing files on to local disk and Accessing a Database using ADO.Net, LINQ and Entity Data Models, Accessing Remote Data using the types in the System.Net namespace, and WCF Data Services, UI design using XAML. ",
  },

  {
    coursecode: "DCIT 319",
    title: "Discrete Structures",
    data: "The goal of this course is to     introduce students to ideas and techniques from discrete mathematics that are widely used in science and engineering. Students will learn logic and proof, sets, functions, as well as algorithms and mathematical reasoning. Key topics to be covered include Propositional Logic, Predicate Logic and Quantification, Methods of Proof, Sets and Functions, Arithmetic Algorithms, Growth of Functions, Computational Complexity of Algorithms, Integer properties and Matrices, Mathematical Induction, Recursion, Sequences and Summations, Program Correctness, Graphs and its Applications, Trees and its Applications, Languages and Grammars, Finite-State Machines, Automata and Language Recognition and Turing Machines.",
  },

  {
    coursecode: "DCIT 321",
    title: "Software Evolution",
    data: "Software evolution plays a key role in software development. In most case programmers do not build software from scratch as rather they modify existing software to provide new features to customers and fix defects in existing software. Evolving software systems is often a time-consuming and error-prone process. This course will focus on the fundamentals of state-of-the art methods, tools, and techniques for evolving software based on the current software engineering research literature. Students will be expected to read current literature on software evolution since the course will be discussion based.",
  },
  {
    coursecode: "DCIT 322",
    title: "Database Management Administration",
    data: "This course will study overview of database systems, Introduction to Database Design; The Relational Model   Relational Algebra SQL Database Application Development; Storage and Indexing; Tree-Structured Indexing;  Hash-Based Indexing;  Schema Refinement and Normalisation  object oriented database languages; the relational database model with introductions to SQL and DBMS; hierarchical models and network models with introductions to HDDL, HDML, and DBTG Codasyl; data mining; data warehousing; database connectivity; distributed databases; the client/server paradigm; middleware, including ODBC, JDBC, CORBA, and MOM. ",
  },
  {
    coursecode: "DCIT 321",
    title: "Software Evolution",
    data: "Software evolution plays a key role in software development. In most case programmers do not build software from scratch as rather they modify existing software to provide new features to customers and fix defects in existing software. Evolving software systems is often a time-consuming and error-prone process. This course will focus on the fundamentals of state-of-the art methods, tools, and techniques for evolving software based on the current software engineering research literature. Students will be expected to read current literature on software evolution since the course will be discussion based.",
  },
  {
    coursecode: "DCIT 400",
    title: "Project",
    data: "The project work provides students with experience in carrying out a significant computer science project from conception to completion with minimal supervision and assistance. It comprises of the design, implementation and documentation of a significant software or hardware system, but theoretical investigations are equally valid. Other project ideas which do not fall into any of these categories are also possible. A faculty member and the student will agree on a topic and appropriate scope of work before the project begins. All project work must be done independently by individual students. ",
  },
  {
    coursecode: "DCIT 401",
    title: "Social, Legal, Ethical and Professional Issues",
    data: "This course will study legal, social, and ethical issues surrounding software development and computer use. It will give an overview of the subject aimed at raising students’ awareness about ethics in Information Technology and in research. Professional conduct, social responsibility and rigorous standards for software testing and reliability will be stressed. Issues such as Cyberspace Privacy Laws and Issues, Cyberspace Free Speech Laws and Issues, liability, intellectual property laws and issues, security and crime will be examined in the context of computer use, Professionalism and Work Place issues in the IT field, Contracts and Leadership",
  },
  {
    coursecode: "DCIT 402",
    title: "Management Principles in Computing",
    data: "This course presents the basics of the theory and science of management. Students will understand the fact that managing is a part of a larger system interacting with a manager’s total environment – economic, technological, social, political and ethnical. The functions of management – planning, organizing, staffing and leading, and controlling will provide the conceptual framework for students to increase their understanding of Ghanaian and global management challenges, ethical decision-making, technology management and emerging workplace issues. This course lays the foundation for an understanding of the nature and importance of managing and of management as a developed and important science.",
  },
  {
    coursecode: "DCIT 403",
    title: "Designing Intelligent Agents ",
    data: "This course provides an overview of robot mechanisms, dynamics, and intelligent controls. It will cover: basic components of robotic systems; selection of coordinate frames; homogeneous transformations; solutions to kinematic equations; velocity and force/torque relations; manipulator dynamics in Lagrange's formulation; digital simulation of manipulator motion; motion planning; obstacle avoidance; controller design using the computed torque method; and classical controllers for manipulators of mobile robots, multi-rigid-body dynamics, 3D graphic simulation; control design, actuators, and sensors; wireless networking, task modeling, human-machine interface, and embedded software. Students will design and fabricate working robotic systems in a group-based term project.",
  },
  {
    coursecode: "DCIT 404",
    title: "Advanced Databases",
    data: "This course introduces students to the skills necessary to become a Database administrator. Students will learn how to create an operational database and manage the structures in an effective and efficient manner, including performance monitoring, database security, user management, performance tuning, and backup/recovery techniques. Oracle Database management system will be used.  Topics covered in this course will include: Database Architecture, installation configuration of the Oracle Network Environment, Managing Database Storage Structures, Administering User and Database Security, Oracle object management, Managing Concurrency & Locks, Undo Data, Network environment: oracle shared servers, performance monitoring & management, etc.",
  },
  {
    coursecode: "DCIT 405",
    title: "Statistical Models and Methods for Data Science",
    data: "The course shall cover intermediate topics in probability and statistics required for data scientists to analyze and interpret data. Topics to be covered include : The probability theory and statistical inference used in data science; Probabilistic models, random variables, useful distributions, expectations, law of large numbers, central limit theorem; Statistical inference; point and confidence interval estimation, hypothesis tests, linear regression. Students shall use statistical tools such as XLMiner, SPSS, Ms Excel during lab sections.",
  },
  {
    coursecode: "DCIT 406",
    title: "Advanced Computer Networks",
    data: "This course covers Scaling Networks and Connecting Networks in CCNA. Scaling Networks describes the architecture, components, and operations of routers and switches in a large and complex network. Connecting Network discusses the WAN technologies and network services required by converged applications in a complex network. The course enables you to understand the selection criteria of network devices and WAN technologies to meet network requirements. Students will learn to configure routers and switches for advanced functionality, configure and troubleshoot network devices and resolve common issues with data link protocols how to implement IPSec and virtual private network operations in complex networks.",
  },
  {
    coursecode: "DCIT 407",
    title: "Image Processing",
    data: "The course will cover techniques and tools for digital image processing, and finally also introduce image analysis techniques in the form of image segmentation. The course is primarily meant to develop on-hand experience in applying these tools to process these images. Hence the programming assignments form a key component of this course. The topics to be covered are: Digital image fundamentals: representation, sampling and quantization, image acquisition, basic relationships between pixels, imaging geometry; Image transforms: discrete Fourier transform, discrete cosine transform, Walsh and Hadamard transforms, Hotelling transform; Image enhancement: in spatial domain and in frequency domain, image smoothing and sharpening. ",
  },
  {
    coursecode: "DCIT 408",
    title: "Compilers",
    data: "This course will provide introduction to the field of compilers, which translate programs written in high-level languages to a form that can be executed. Students will learn the core ideas behind compilation and how to use software tools such as lex/flex, yacc/bison to build a compiler for a non-trivial programming language. The theory and practice of programming language translation, compilation, and run-time systems, organized around a significant programming project to build compiler for simple but nontrivial programming language. Modules, interfaces, tools. Topics Include: Compiler Design; Lexical Analysis; Syntax Analysis- grammars, LL(1) parsers, LR(1) parsers; Semantic Processing; Code generation and optimization. ",
  },
  {
    coursecode: "DCIT 409",
    title: "Digital Forensics",
    data: "This course covers computer crime, relevant laws, agencies, and standards. It presents auditing, logging, forensics, and related software. It also explores legal principles such as chain of evidence, electronic document discovery, eavesdropping, and entrapment. Students get hands-on experience with forensics tools. Topics Include: The legal and technical aspects of computer forensics.  Applicable laws and the roles of legal authorities. How to obtain and handle digital evidence and will have been exposed to a range of freeware forensic tools.",
  },
  {
    coursecode: "DCIT 411",
    title: "BioInformatics",
    data: "The aim of this course is to introduce students to the computational techniques used in the field of bioinformatics. To reinforce the theory underlying the concepts and techniques of sequence analysis and post-genomic bioinformatics. The course introduces basic concepts of molecule biology, sequence analysis and genomic era biology. It introduces a number of many different tools and their usage, as well as the analysis algorithms behind some of them. Topics include: Basic concepts of molecular biology: genomes, transcripomes, proteomes. Sequence analysis: genome annotation, sequence alignment, multiple sequence alignment, Phylogenetic analysis, Protein families, Database searching tools.",
  },
  {
    coursecode: "DCIT 412",
    title: "Computer Vision",
    data: "This course will cover essentials of computer vision. Students will learn basic principles of image formation, image processing algorithms and different algorithms for 3D reconstruction and recognition from single or multiple images (video). Applications to 3D modelling, video analysis, video surveillance, object recognition and vision based control will be discussed.",
  },
  {
    coursecode: "DCIT 413",
    title: "Play and Games",
    data: "This course shall introduce students to the underlining principles of video games. It will examine the concept of play using methods from literary criticism, cultural anthropology, poststructuralism, and cinema studies. The philosophy of action, ludology, and theories of machinic and gamic visuality shall be discussed. Themes will include simulation, social realism, and war games. Topics will include: what is “Play, formal criticism, Poststructuralism:Narrative, Authorship and Play, CounterGaming: The Politics of Play and artist game mods, Ideology and War, and Gamic Vision.",
  },
  {
    coursecode: "DCIT 414",
    title: "Data Mining and Warehousing",
    data: "This course is an introduction to data mining and motivating challenges, types of data, measures of similarity and distance, data exploration and warehousing, supervised learning, bias and variance. Classification techniques and their evaluation. Clustering, Association and sequence rule mining. The course aims to provide students with viable alternatives for managers rather than replacing judgment with an optimized solution. It also aims to enable students to acquire an understanding of the basic concepts and skills associated with decision-making and the modelling of business decisions using data.",
  },
  {
    coursecode: "DCIT 415",
    title: " Advanced Software Engineering",
    data: "The course aims to develop the broad understanding of the discipline of software engineering (gained in the earlier Software Engineering course). Additional topics that will be covered include verification and validation, Testing and inspection, Reliability, software evolution, advanced design topics such as system architecture design, object oriented design and functional-oriented design, and finally, Business aspect of software engineering. Although the emphasis will be on modern approaches some more traditional software engineering techniques will also be discussed. The course will also provide an on-going project clinic to directly support a group project work.",
  },
  {
    coursecode: "DCIT 416",
    title: " Digital Signal Processing",
    data: "This course provides an introduction to digital signal processing for both undergraduate. In this course, a detailed examination of basic digital signal processing operations including sampling/reconstruction of continuous time signals, Fourier and Z-transforms will be given. The Fourier and Z-transforms will be used to analyze the stability of systems, and to find the system transfer function. The discrete Fourier transform (DFT) and fast Fourier transform (FFT) will be studied, etc. Further, computer simulation exercises are intended to familiarize the student with implementation aspects and the application of theoretical knowledge to practical problems.",
  },
  {
    coursecode: "DCIT 417",
    title: " Network Performance Analysis and Modeling",
    data: "This course aims to develop an understanding of the tools and technologies for understanding and improving the performance of communication networks such as the Internet. It will introduce students to quantitative methods for loss and delay analysis in packet networks, using techniques from stochastic traffic modelling, Markov chains, and queueing theory. It will expose students to frameworks for optimization and orchestration of network performance, including emerging paradigms such as SDN. The quantitative methods studied in this course will be applied to practical examples from network architecture and design, in different network domains.",
  },
  {
    coursecode: "DCIT 418",
    title: "Systems and Network Security",
    data: "This course provides a comprehensive study of security principles and practices in computer and network systems. Topics include computer security concepts, attack techniques, security policies, basic cryptographic tools, authentication, access control, network intrusion detection, software security, operating system security, network security, legal and ethical issues in computer security. Combined with the experiences that they obtain from the course projects, students would improve their skills of developing secured network applications and systems that detect and defend against malicious attacks. Students will be prepared to evaluate the security of real network systems, and to develop strategies to detect and defend against attacks.",
  },
  {
    coursecode: "DCIT 419",
    title: "Agile Methods",
    data: "This course will address what agile methods are, how they are implemented and their impact on software engineering. A variety of agile methods will be described, but the focus will be on Scrum and Extreme Programming. Issues associated with planning and controlling agile projects, along with the implications of empowered teams on the customer-supplier dynamic, will give a fuller picture of how the agile practices are realized. Assignments and projects are designed to help students apply agile principles and practices in their own professional context. Additional subthemes include enterprise agility, team dynamics, collaboration, software quality, and metrics for reporting progress.",
  },
  {
    coursecode: "DCIT 421",
    title: "Persuasive Systems and Design",
    data: "In this course students will be introduced to the philosophy underpinning human computer persuasion. They will explore latest research results, best practices and guidelines for the use of persuasive applications. Student teams will work on real-world projects in which they will design and implement persuasive technology applications. In addition, the course will host several expert guest speakers from industry and higher education institutions who will share their latest findings. Topics include, persuasive technologies, modeling human attitude behavior change, persuasive system features, technology, design perspectives, methods for designing persuasive systems, ethical issues and unexpected effects of persuasive technologies and disruptive technologies.",
  },
  {
    coursecode: "DCIT 422",
    title: "Information Visualization",
    data: "This course will study the principles of computer graphics and interactive graphical methods for problem solving. Emphasis placed on both development and use of graphical tools for various display devices. Several classes of graphics hardware considered in detail. Topics include pen plotting, storage tubes, refresh, dynamic techniques, three dimensions, color, modeling of geometry, and hidden surface removal. Part of the laboratory involves use of an interactive minicomputer graphics system. Introduces the fundamentals of three-dimensional computer graphics: rendering, modeling, and animation. Students learn how to represent three-dimensional objects (modeling) and the movement of those objects over time (animation).",
  },
  {
    coursecode: "DCIT 423",
    title: "Network Servers and Infrastructure",
    data: "Covers IP networking concepts and practices for using DHCP, DNS, secure communication, routing, remote address services, web servers, and network connectivity between operating systems. Students learn TCP/IP, routing architecture, and understand application-level services used in Internet. Through networking lab sessions, students focus on using switches and routers connected in LANs and WANs.",
  },
  {
    coursecode: "DCIT 424",
    title: "Entertainment Software Development ",
    data: "Education is experiencing innovation with various new technologies incorporated into classrooms. Technology incorporated edutainment plays as a motivator or facilitator in learning. In this course students will be introduced to how educational content can be deliberately incorporated into digital entertainment such as digital games, cartoons, etc.  The course will provide an overview of the new generation's traits, locating and searching for instructional elements in cartoons, TV programs, movies, and digital games. New emerging forms of edutainment for on mobile devices shall also be discussed. Student shall be given projects to develop applications that combines learning and fun.",
  },
  {
    coursecode: "DCIT 426",
    title: "Telecommunication Systems",
    data: "This course focuses on Third generation mobile systems: WCDMA concepts, Multi-User Detection, Antenna Array techniques, MIMO, high speed packet access, long term evolution, radio resource management, packet scheduling, core network evolution. Multimedia: Image and video representation and transmission. Competing technologies: WiFi, WiMAX, FttX. Emerging techniques: may include MANET, cognitive radio. At the end of this course, students will be able to: Demonstrate a broad understanding of Third generation mobile systems, Multimedia representation and the interaction with telecommunications protocols, Other contemporary and emerging wide area data technologies, Emerging research areas in telecommunications, and the interaction between commercial interests and technology standards.",
  },
  {
    coursecode: "DCIT 428",
    title: "Wireless Systems & Networks",
    data: "This course covers fundamental principles underlying wireless data communications. Topics include wireless transmission basics, radio propagation issues, antennas, digital modulation, spread spectrum techniques and their applications, and popular standards: WiFi, WiMAX and Bluetooth. Also presents practical knowledge to enable the design, testing, deployment, debugging and commissioning of WiFi, WiMAX networks and point-to-point microwave systems. Discussions on cellular network technologies are also included.",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const searchField = document.getElementById("search-course-search");
  const resultDiv = document.getElementById("results-search");
  const courseTitle = document.getElementById("title-search");
  const courseCode = document.getElementById("coursecode");
  const description = document.getElementById("description-search");

  searchField.addEventListener("input", () => {
    searchDisplay(searchField.value.toLowerCase());
  });

  const searchDisplay = (filter) => {
    let filteredCourse = performFilter(filter);
    displayResults(filteredCourse);
  };

  const performFilter = (filterBy) => {
    return data.filter((datum) => datum.title.toLowerCase().includes(filterBy));
  };

  const displayResults = (filteredCourse) => {
    resultDiv.innerHTML = ``;
    filteredCourse.slice(0, 14).forEach((course, index) => {
      let courseDiv = document.createElement("div");
      let courseCodeItem = document.createElement("a");
      let courseTitleItem = document.createElement("a");
      courseCodeItem.textContent = course.coursecode;
      courseTitleItem.textContent = course.title;
      courseCodeItem.style.cursor = "pointer";
      courseTitleItem.style.cursor = "pointer";
      // courseCodeItem.href = "";
      courseTitleItem.href = "#title-search";
      courseCodeItem.addEventListener("click", () => displayDescription(index));
      courseTitleItem.addEventListener("click", () =>
        displayDescription(index)
      );
      courseDiv.appendChild(courseCodeItem);
      courseDiv.appendChild(courseTitleItem);
      resultDiv.appendChild(courseDiv);
    });
  };

  const displayDescription = (id) => {
    let selectedCourse = data[id];
    courseTitle.textContent = selectedCourse.title;
    courseCode.textContent = selectedCourse.coursecode;
    description.textContent = selectedCourse.data;
  };

  // Initial display
  displayResults(data);

  // What's next?
});
