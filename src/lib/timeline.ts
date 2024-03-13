export type Event = {
    title: string,
    description: string,
    location: string,
    icon: string,
    image: string,
    time: {year: number, month: string}
    type: "event"
}

export type Job = {
    title: string,
    description: string,
    company: string,
    location: string,
    icon: string,
    image: string,
    range: {start: {year: number, month: string}, end: {year: number, month: string}},
    type: "job"
}

const events: Event[] = [
    {
        title: "Graduate College (Expected)",
        description: "Excited to graduate and begin my career :).",
        location: "Slippery Rock, PA",
        icon: "fa-solid fa-graduation-cap",
        image: "/images/rocky.png",
        time: {year: 2024, month: "May"},
        type: "event"
    },
    {
        title: "Started College",
        description: "I started my college career at Slippery Rock Unviersity from my grandma's attic.",
        location: "Slippery Rock, PA",
        icon: "fa-solid fa-school",
        image: "/images/rocky.png",
        time: {year: 2020, month: "August"},
        type: "event"
    },
    {
        title: "Graduated High School",
        description: "I graduated high school as salutatorian during the COVID-19 pandemic.",
        location: "Sandy Lake, PA",
        icon: "fa-solid fa-user-graduate",
        image: "/images/lakeview.png",
        time: {year: 2020, month: "June"},
        type: "event"
    }
]

const jobs: Job[] = [
    {
        title: "Teaching Assistant - Python",
        description: "I worked as a teaching assistant for the Python programming course at Slippery Rock University.",
        company: "Slippery Rock University",
        location: "Slippery Rock, PA",
        icon: "fa-brands fa-python",
        image: "/images/tech-icons/python.png",
        range: {start: {year: 2024, month: "January"}, end: {year: 2024, month: "May"}},
        type: "job"
    },
    {
        title: "AI Operations Engineer, Co-op",
        description: "I worked as an AI Ops Engineer at <a href='https://www.collinsaerospace.com'>Collins Aerospace</a>.",
        company: "Collins Aerospace",
        location: "Cedar Rapids, IA",
        icon: "fa-solid fa-code-branch",
        image: "/images/collins.png",
        range: {start: {year: 2023, month: "May"}, end: {year: 2023, month: "December"}},
        type: "job"
    },
    {
        title: "Data Science Intern",
        description: "I worked as a data science intern at <a href='https://agoc.com'>Armstrong Group</a>.",
        company: "Armstrong Group of Companies",
        location: "Butler, PA",
        icon: "fa-solid fa-chart-line",
        image: "/images/agoc.png",
        range: {start: {year: 2022, month: "May"}, end: {year: 2022, month: "August"}},
        type: "job"
    },
    {
        title: "Student Web Developer",
        description: "During my first semester, I was lucky enough to work as a remote student web developer. This later became an on-campus job when the pandemic settled. I worked on <a href='https://sru.edu'>sru.edu</a>.",
        company: "Slippery Rock University",
        location: "Slippery Rock, PA",
        icon: "fa-solid fa-code",
        image: "/images/sru.png",
        range: {start: {year: 2021, month: "January"}, end: {year: 2024, month: "May"}},
        type: "job"
    }
]

//combine jobs and events
const timeline = [...events, ...jobs];
//sort jobs and events by data. Use the type to determine the method of sorting
timeline.sort((a, b) => {
    if (a.type === "event" && b.type === "event") {
        if (a.time.year === b.time.year) {
            return a.time.month.localeCompare(b.time.month);
        }
        return a.time.year - b.time.year;
    } else if (a.type === "job" && b.type === "job") {
        if (a.range.start.year === b.range.start.year) {
            return a.range.start.month.localeCompare(b.range.start.month);
        }
        return a.range.start.year - b.range.start.year;
    } else if (a.type === "event" && b.type === "job") {
        if (a.time.year === b.range.start.year) {
            return a.time.month.localeCompare(b.range.start.month);
        }
        return a.time.year - b.range.start.year;
    } else if (a.type === "job" && b.type === "event") {
        if (a.range.start.year === b.time.year) {
            return a.range.start.month.localeCompare(b.time.month);
        }
        return a.range.start.year - b.time.year;
    }
    return 0; // Add this line to return a default value
});

export {timeline};