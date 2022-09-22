import uniqid from 'uniqid';

const exampleSkills = [" JavaScript", 
                       " React",
                       " HTML",
                       " CSS",
                       " Bootstrap",
                       " Webpack",
                       " npm",
                       " Jest"
                    ];

const ExampleCV = {

    personalInfo: [
        {
          name: "firstName",
          value: "Halil",
          id: uniqid()
        },
        {
          name: "lastName",
          value: "Bilgil",
          id: uniqid()
        },
        {
          name: "address",
          value: "Eskisehir, TURKEY",
          id: uniqid()
        },
        {
          name: "website",
          value: "www.github.com/hbilgil",
          id: uniqid()
        },
        {
          name: "email",
          value: "hbilgil@gmail.com",
          id: uniqid()
        },
        {
          name: "phone",
          value: "+90 555 555 5555",
          id: uniqid()
        },
        {
          name: "details",
          value: `I am an industrial engineer and I have been learning web development tools and
            languages including HTML, CSS; JavaScript through open-sourced project The Odin
            Project (TOP). This has been my personal target in my life so far and I did start this
            journey 6 month ago at the end. I am about to complete all the courses and projects
            within these platforms as a self-taught developer in 2022. Please see my portfolio:
            GitHub.com/hbilgil`,
          id: uniqid()
        },
      ],

    educationInfo: [
        {
          name: "universityName1",
          value: "Marmara University",
          id: uniqid()
        },
        {
          name: "universityDegree1",
          value: "Bachelor of Science",
          id: uniqid()
        },
        {
          name: "universityDate1",
          value: "2002 - 2007",
          id: uniqid()
        },
        {
          name: "universityName2",
          value: "University of Liverpool",
          id: uniqid()
        },
        {
          name: "universityDegree2",
          value: "Postgraduate Diploma",
          id: uniqid()
        },
        {
          name: "universityDate2",
          value: "2010 - 2012",
          id: uniqid()
        },
    ],

    experienceInfo: [
        { 
          company: "The Odin Project",
          position: "Self-taught Frontend Developer",
          task: `I am following the Odin Project Curriculum to learn web development (Full Stack) since March
            2022. And I am building projects during self-taught courses`,
          start: "2022",
          end: "Present",
          id: uniqid(),
        },
    ],

    skillsInfo: [
        { 
          skill: `${exampleSkills[0]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[1]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[2]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[3]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[4]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[5]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[6]}`,
          id: uniqid()
        },
        { 
          skill: `${exampleSkills[7]}`,
          id: uniqid()
        }
    ]
}

export default ExampleCV;