// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_projects.js` rather than `projects.js`, because
// we don't want to create an `/portfolio/projects` route — the leading
// underscore tells Sapper not to do that.

const projectDetails = [
	{
		title: 'IBMiX/Aperto',
		slug: 'ibmix-aperto',
		subtitle: 'Corporate Website',
		shortDesc: 'A leading digital agency at the intersection of strategy, creativity and technology.',
		link: 'View Project',
		projectHref: 'https://www.aperto.com/en',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Projects Overview</h3>
				<p>Created Web Apps and Webpages with documented components and design system for various clients.</p>
				<h4>Role</h4>
				<p>FE Developer</p>
				<h4>Team</h4>
				<p>POs, TPMs, UI/UX Designers, BE Devs, QAs, FE Devs, DevOps, Marketing, Content Strategists</p>
				<h4>Tools</h4>
				<p>ReactJS, VueJS, VEAMS, Nikita, ES5/ES6, VanillaJS, SASS, Handlebars, Grunt, Webpack, GitHub, Gitlab, Sketch, Zeplin, Jira, Trello Board</p>
				<h4>Solutions</h4>
				<p>Worked closely together with UI/UX designers and BE Developers to translate designs into code, ensuring that the usability worked well in different browsers while keeping in mind the maintainability, scalability and reliability of the products or projects.</p>
				<p>Developed and documented components and into a design system for each project and product. Components being fully responsive, ensuring accessibility standards optimized for mobile, and optimized for performance, later to be tested across devices and browsers to deliver the best user experience to users./p>
			</div>
			<img src="./images/aptoix.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.aperto.com/en'>Aperto/IBM iX</a> - Responsive Mobile and Desktop Website</figcaption>
					<img src="./images/apert-web.png" alt="Desktop UI & UX for Dashboard">
			</figure>
			<figure>
					<figcaption>2017 <a href='https://www.vw.co.za/en/volkswagen-experience/spirit-of-amarok.html'>Spirit of Amarok</a> - VW Rally Desktop</figcaption>
					<img src="./images/samarok-web.png" alt="iOS Logo, Icons, UI Mobile Experience">
			</figure>
			<figure>
					<figcaption><a href='https://www.staat-digital.de/de'>Staat Digital</a> - Responsive Mobile and Desktop Website</figcaption>
					<img src="./images/staatd-web.png" alt="Desktop UI & UX for Dashboard">
			</figure>
		</div>
		`
	},
	{
		title: 'Eyevinn - Video Dev Team',
		slug: 'video-dev-team',
		subtitle: 'Company Team Website',
		shortDesc: 'A video development team with experience on building streaming services',
		link: 'View Project',
		projectHref: 'https://video-dev.team/',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Created a video dev team landing page to present video streaming services offer.</p>
				<h4>Role</h4>
				<p>UI Designer / FE Developer</p>
				<h4>Team</h4>
				<p>Media Consultant, Solution Architect, Media Solution Consultant</p>
				<h4>Tools</h4>
				<p>React, NextJS, CSS3, Webpack, Figma, Material-UI, Github</p>
				<h4>Solutions</h4>
				<p>Designed a complete landing page with sections about the team, services they provide, client work, process of contributing to open source, tech stacks and tools used.</p>
				<p>Created a product logo. Translated designs into coded components and build a responsive landing page.</p>
			</div>
			<img src="./images/eyevn.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://video-dev.team/'>Eyevinn - Video Dev Team</a> - Figma Design Screens Mobile/Desktop</figcaption>
					<img src="./images/eyvn-design.png" alt="Figma Design Screens Mobile/Desktop">
			</figure>
			<figure>
					<figcaption><a href='https://video-dev.team/'>Eyevinn - Video Dev Team</a> - Responsive Web and Mobile Site</figcaption>
					<img src="./images/eyvn-web.png" alt="Responsive Web and Mobile Site">
			</figure>
		</div>
		`
	},
	{
		title: 'Stream Corruptor',
		slug: 'corruptor',
		subtitle: 'Video Product',
		shortDesc: 'A digitized simulator that corrupts video streams effectively',
		link: 'View Project',
		projectHref: 'https://corruptor.io/',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Built a product landing page that explains use cases about simulating corrupted video streams.</p>
				<h4>Role</h4>
				<p>UI Designer / FE Developer</p>
				<h4>Team</h4>
				<p>Media Consultant, Solution Architect, FE Developer, PM</p>
				<h4>Tools</h4>
				<p>React, NextJS, CSS3, Webpack, NodeJS, Docker, Figma, Material-UI, GitHub</p>
				<h4>Solutions</h4>
				<p>Created a user flow between the site page and product page. Designed a logo that represents the product.</p>
				<p>Translated designs into coded components and build the responsive website.</p>
				<p>Built reusable components to build the responsive landing page. Login and registration. And collaborated with BE to implement login and registration.</p>
			</div>
			<img src="./images/crupt.png">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://corruptor.io/'>Corruptor</a> - Desktop Landing Page</figcaption>
					<img src="./images/corupt-web.png" alt="Corruptor Desktop Website">
			</figure>
			<figure>
					<img src="./images/corupt-web-2.png" alt="Corruptor Desktop Registration">
					<figcaption><a href='https://corruptor.io/'>Corruptor</a> - Desktop Registration</figcaption>
			</figure>
			<figure>
					<figcaption><a href='https://corruptor.io/'>Corruptor</a> - Mobile Login and Logo</figcaption>
					<img src="./images/corupt-web-3.png" alt="Corruptor Mobile Login and Logo">
			</figure>
		</div>
		`
	},
	{
		title: 'BTV',
		slug: 'btv',
		subtitle: 'Corporate Website',
		shortDesc: 'An organization for the Bavarian Tennis Clubs in Germany',
		link: 'View Project',
		projectHref: 'https://btv.de',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Implemented a content management system to allow multiple users to create, read, update and delete content.</p>
				<h4>Role</h4>
				<p>FE Developer</p>
				<h4>Team</h4>
				<p>POs, TPMs, UI/UX Designers, BE Devs, QAs, FE Devs, DevOps</p>
				<h4>Tools</h4>
				<p>CMS Magnolia, VEAMS, ES5/ES6, VanillaJS, SASS, Handlebars, Webpack, Sketch, Zeplin, Jira, Jenkins</p>
				<h4>Solutions</h4>
				<p>Built, documented and implemented components into the product design system.</p>
				<p>Worked together with other FE devs, UI/UX Designers, and BE Developers to translate UI designs into code and conducted device and browser test, user test and UI test to make sure designs were properly implemented.</p>
			</div>
			<img src="./images/bta.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.btv.de/de'>BTV</a> - Desktop Website</figcaption>
					<img src="./images/bta-web.png" alt="BTV Desktop Website">
			</figure>
			<figure>
					<figcaption><a href='https://www.btv.de/de'>BTV</a> - Mobile Website</figcaption>
					<img src="./images/bta-mobile.png" alt="BTV Mobile Website">
			</figure>
		</div>
		`
	},
	{
		title: 'DIHK',
		slug: 'dihk',
		subtitle: 'Corporate Website',
		shortDesc: 'Is an organisation for 81 Chambers of Industry and Commerce in Germany',
		link: 'View Project',
		projectHref: 'https://www.dihk.de/de',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Implemented the UI designs into a website for the German Chamber of Commerce, this was a content management system to allow admin users to create, read, update and delete content.</p>
				<h4>Role</h4>
				<p>FE Developer</p>
				<h4>Team</h4>
				<p>POs, TPMs, UI/UX Designers, BE Devs, QAs, FE Devs, DevOps</p>
				<h4>Tools</h4>
				<p>CoreMedia CMS, VEAMS, ES5/ES6, VanillaJS, SASS, Handlebars, Webpack, Sketch, Zeplin, Jira, Jenkins</p>
				<h4>Solutions</h4>
				<p>Implemented high  accessibility standard and documented components and ensured scalability for "new featured" modules needed in the future, conducted device and browser test, user test and UI test to make sure designs were properly implemented.</p>
			</div>
			<img src="./images/dk.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.dihk.de/de'>DIHK</a> - Mobile Screens</figcaption>
					<img src="./images/dk-web.png" alt="DIHK Mobile site">
			</figure>
			<figure>
					<figcaption><a href='https://www.dihk.de/de'>DIHK</a> - Desktop Site</figcaption>
					<img src="./images/dk-web-2.png" alt="DIHK Desktop site">
			</figure>
		</div>
		`
	},
	{
		title: 'Consuo',
		slug: 'consuo',
		subtitle: 'A Video Product Landing Page',
		shortDesc: 'A library that stitches pre-transcoded VOD assets into linear video stream',
		link: 'View Project',
		projectHref: 'https://consuo.tv/',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Designed and implemented a landing page about an open source library that stitches pre-transcoded VOD assets into a linear video stream.</p>
				<h4>Role</h4>
				<p>FE Developer</p>
				<h4>Team</h4>
				<p>Media Consultant, Solution Architect, FE Developer, PM</p>
				<h4>Tools</h4>
				<p>React, NextJS, CSS3, Webpack, NodeJS, Docker, MongoDB, Figma, Material-UI</p>
				<h4>Solutions</h4>
				<p>Created the product logo.</p>
				<p>Enhanced and ensured design consistency and styles across the site, documentation and B2B portal.</p>
				<p>Created and developed a form to request a trial.</p>
			</div>
			<img src="./images/cso.png">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://consuo.tv/'>Consuo TV</a> - Desktop Site</figcaption>
					<img src="./images/cso-web.png" alt="Desktop Site">
			</figure>
			<figure>
					<figcaption><a href='https://consuo.tv/'>Consuo TV</a> - Mobile Site & Logo</figcaption>
					<img src="./images/cso-web-2.png" alt="Mobile & Logo">
			</figure>
		</div>
		`
	},
	{
		title: 'Signum',
		slug: 'signum-consulting',
		subtitle: 'Corporate Website',
		shortDesc: 'Services provider in Pre-Employment Screening, Risk Management and Compliance in Germany.',
		link: 'View Project',
		projectHref: 'https://www.signum-consult.com/index.html',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Redesigned and Rebuilt Company's Webpage while ensuring scalability of the site and implemented analytics to improve SEO.</p>
				<h4>Role</h4>
				<p>UI Designer / FE Developer</p>
				<h4>Team</h4>
				<p>Founder, Managing Director, Pre-Employment Analyst, Risk Compliance Analyst, Pre-Business Analyst</p>
				<h4>Tools</h4>
				<p>jQuery, HTML5, CSS3, Bootstrap, Illustrator, Antetype, Google Sheets</p>
				<h4>Solutions</h4>
				<p>Together with the Signum Consulting team created a plan and strategy to redesign the site.</p>
				<p>Designed UI and different elements (logos, images, etc) and coded the full site.</p>
				<p>Included Google Analytics to improve SEO, created information architecture, navigation, site map. Translated designs into a full developed responsive website.</p>
			</div>
			<img src="./images/sgnum.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.signum-consult.com/index.html'>Signum-Consult</a> - Responsive Web and Mobile Site</figcaption>
					<img src="./images/sgnum-web.png" alt="Responsive Web and Mobile Site">
			</figure>
			<figure>
					<figcaption><a href='https://www.signum-consult.com/index.html'>Signum-Consult</a> -Service Logos</figcaption>
					<img src="./images/sgnum-web-2.png" alt="Service Logos">
			</figure>
		</div>
		`
	},
	{
		title: 'Consus',
		slug: 'consus',
		subtitle: 'Corporate Website',
		shortDesc: 'A German Real Estate with a focus on Residential properties.',
		link: 'View Project',
		projectHref: 'https://www.consus.ag/consus-investment-highlights',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Implemented new pages to highlight insights in the real state existing pages</p>
				<h4>Role</h4>
				<p>FE Developer</p>
				<h4>Team</h4>
				<p>POs, TPMs, UI/UX Designers, BE Devs, QAs, FE Devs, DevOps, Marketing, Content Strategists</p>
				<h4>Tools</h4>
				<p>VEAMS, ES5/ES6, VanillaJS, SASS, Handlebars, PHP, Webpack, Docker, WordPress CMS, Themify, Trello Board</p>
				<h4>Solutions</h4>
				<p>Built and updated themify components into a content management system in close collaboration with UI/UX Designers</p>
			</div>
			<img src="./images/csus.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.consus.ag/consus-investment-highlights'>Consus AG</a> - Desktop Website</figcaption>
					<img src="./images/csus-web.png" alt="Consus Desktop">
			</figure>
			<figure>
					<figcaption><a href='https://www.consus.ag/consus-investment-highlights'>Consus AG</a> - Mobile Website</figcaption>
					<img src="./images/csus-web-2.png" alt="Consus Mobile">
			</figure>
		</div>
		`
	},
	{
		title: 'Cemex',
		slug: 'cemex',
		subtitle: 'Web Dashboard & IOS Hybrid App',
		shortDesc: 'A provider of building ready-mix concrete for exterior in Germany.',
		link: 'View Project',
		projectHref: 'https://www.cemex.de/',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Digitized a manual process to do inspections on client sites and cement trucks for the Cemex Health & Safety department in Germany, designed and implemented a dashboard for admins users to view, edit, upload and delete conducted inspections that employees performed on field site.</p>
				<h4>Role</h4>
				<p>UI/UX Designer and FE Developer</p>
				<h4>Team</h4>
				<p>PO, UI/UX Designer, FE Developer, BE Developer</p>
				<h4>Tools</h4>
				<p>Adobe Illustrator, HTML5, CSS3, jQuery, PHP, </p>
				<h4>Solutions</h4>
				<p>Worked closely with BE Developer and PO to develop the apps and dashboard.</p>
				<p>Created user flows and site map navigation, icons to describe actions, and built mobile app and logos.</p>
				<p>Designed and developed iteratively layouts for Admin Dashboards and hybrid apps.</p>
			</div>
			<img src="./images/cemx.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<img src="./images/cx-web.png" alt="Cemex Web App">
					<figcaption>Desktop Dashboard for admins</figcaption>
			</figure>
			<figure>
					<figcaption>iOS & Android Logos and Mobile App for H&S Employees</figcaption>
					<img src="./images/cx-mobile.png" alt="Cemex Mobile Apps">
			</figure>
			<figure>
					<figcaption>Logistic Logo and Department Icons</figcaption>
					<img src="./images/cx-logos.png" alt='Cemex Logos'>
			</figure>
		</div>
		`
	},
	{
		title: 'Qualmity',
		slug: 'qualmity',
		subtitle: 'Company Website',
		shortDesc: 'Develops software, mobile apps, IT security, consultation, and technical support.',
		link: 'View Project',
		projectHref: 'https://www.qualmity.com/',
		projectLink: "Visit Site",
		html: `
		<div class="project-detail__overview">
			<div class="project-detail__overview-content">
				<h3>Project Overview</h3>
				<p>Designed and built products for various clients, Rebuilt and redesigned the company's website to offer company services.</p>
				<h4>Role</h4>
				<p>UI Designer / FE Developer</p>
				<h4>Team</h4>
				<p>CEO, UI Designer, FE Developer, BE Developer</p>
				<h4>Tools</h4>
				<p>jQuery, HTML5, CSS3, Bootstrap, Illustrator, Antetype</p>
				<h4>Solutions</h4>
				<p>Together with the CEO created site map and components needed to develop into the web page.</p>
				<p>Redesigned company's logo and drew stage image, designed the responsive webpage.</p>
			</div>
			<img src="./images/qlmty.svg">
		</div>
		<div class="project-detail__content-imgs">
			<figure>
					<figcaption><a href='https://www.qualmity.com/'>Qualmity</a> - Responsive Website</figcaption>
					<img src="./images/qlmy-web.png" alt="Desktop Website">
			</figure>
		</div>
		`
	},
];

projectDetails.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projectDetails;