const projects = [
	{
		name: 'Scrumbs',
		technologies: ['Angular', 'MongoDb', 'TypeScript', 'NodeJs', 'Express'],
		description:
			'Scrumbs is an <span class="text-green-400">interactive web app</span> for project managment. It simulates a virtual Scrum board that teams (and stakeholders) can use to create, read, update, and delete tasks, as well as monitor the progression of the project. Scrumbs also features an admin panel for managing users and teams.',
        collaborators: ['@dsm1015', '@lukemcelligott'],
        images: ['images/scrumbs1.png', 'images/scrumbs2.png', 'images/scrumbs3.png'],
        icon: "fa-solid fa-list-check",
        href: "/projects/scrumbs",
		url: 'https://github.com/dsm1015/scrumbs'
	},
	{
		name: 'Offerly',
		technologies: ['Springboot', 'Maven', 'Java', 'Bootstrap', 'MySQL', 'HTML5', 'Docker'],
		description:
			'Offerly was developed to be an online auction platform. Offerly provides users with a central platform for buying products secondhand',
        collaborators: ['@dsm1015', '@lukemcelligott', '@tth1003'],
        images: ['images/offerly1.png', 'images/offerly2.png', 'images/offerly3.png'],
        icon: "fa-solid fa-cart-shopping",
        href: "/projects/offerly",
		url: 'https://github.com/dsm1015/Offerly'
	},
    {
		name: 'TrafficSim',
		technologies: ['Java', 'Maven'],
		description: 
            'An interactive traffic simulation project for urban grid systems. It incorporates zoning areas, road systems, and citizen movement.',
        collaborators: ['@dsm1015'],
        images: ['images/trafficsim1.png', 'images/trafficsim2.png', 'images/trafficsim3.png'],
        icon: "fa-solid fa-diagram-project",
        href: "/projects/trafficsim",
		url: 'https://github.com/dsm1015/TrafficSim'
	},
];

const technologies = [
    {
        name: "Docker",
        icon: "/images/tech-icons/docker.png"
    },
    {
        name: "HTML5",
        icon: "/images/tech-icons/html5.png"
    },
    {
        name: "Angular",
        icon: "/images/tech-icons/angular.png"
    },
    {
        name: "MongoDb",
        icon: "/images/tech-icons/mongodb.png"
    },
    {
        name: "TypeScript",
        icon: "/images/tech-icons/typescript.png"
    },
    {
        name: "NodeJs",
        icon: "/images/tech-icons/nodejs.png"
    },
    {
        name: "Springboot",
        icon: "/images/tech-icons/springboot.png"
    },
    {
        name: "Maven",
        icon: "/images/tech-icons/maven.png"
    },
    {
        name: "Java",
        icon: "/images/tech-icons/java.png"
    },
    {
        name: "Bootstrap",
        icon: "/images/tech-icons/bootstrap.png"
    },
    {
        name: "MySQL",
        icon: "/images/tech-icons/mysql.png"
    },
    {
        name: "Express",
        icon: "/images/tech-icons/express.png"
    },
];

export default projects;
export { technologies };