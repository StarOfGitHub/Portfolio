import D_FB_1 from './FB Case Studies/D_FB 1.jpeg';
import D_FB_2 from './FB Case Studies/D_FB 2.jpeg';
import D_GooAD_1 from './Google Ads Case Studies/Google1.jpeg';
import D_GooAD_2 from './Google Ads Case Studies/Google2.jpeg';
import D_GooAD_3 from './Google Ads Case Studies/Google3.jpeg';
import D_GooAD_4 from './Google Ads Case Studies/Google4.jpg';
import P_inte_1 from './P-Interest/P-Interest 1.jpeg';
import P_inte_2 from './P-Interest/P-Interest 2.jpeg';
import P_inte_3 from './P-Interest/P-Interest 3.jpeg';

const logotext = "Dennis";
const meta = {
    title: "Dennis Mwenda",
    description: "I’m dennis mwenda _ Email Marketing Business Man,currently working in Kenya",
};

const introdata = {
    title: "I’m Dennis Mwenda",
    animated: {
        first: "I love Email Marketing",
        second: "I code cool websites",
        third: "I develop mobile apps",
    },
    description: "Welcome to my portfolio website"
};

const dataabout = {
    title: "abit about my self",
    aboutme: "I am an experienced Email Marketing Expert with over 5 years.",
};
const worktimeline = [{
        jobtitle: "Designer of week",
        where: "YAdfi",
        date: "2020",
    },
    {
        jobtitle: "Designer of week",
        where: "Jamalya",
        date: "2019",
    },
    {
        jobtitle: "Designer of week",
        where: "ALquds",
        date: "2019",
    },
];

const skills = [{
        name: "aaa",
        value: 90,
    },
    {
        name: "aaa",
        value: 85,
    },
    {
        name: "aaa",
        value: 80,
    },
    {
        name: "aaa",
        value: 60,
    },
    {
        name: "aaa",
        value: 85,
    },
];

const services = [{
        title: "UI & UX Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
    {
        title: "Wordpress Design",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
    },
];

const dataportfolio = [
    {
        img: `${D_FB_1}`,
        description: "This is my Facebook advertisement.", 
    },
    {
        img: `${D_FB_2}`,
        description: "This is my Facebook advertisement.",
    },
    {
        img: `${D_GooAD_1}`,
        description: "This is my Google Advertisement",
    },
    {
        img: `${D_GooAD_2}`,
        description: "This is my Google Advertisement.",
    },
    {
        img: `${D_GooAD_3}`,
        description: "This is my Google Advertisement.",
    },
    {
        img: `${D_GooAD_4}`,
        description: "This is my Google Advertisement.",
    },
    {
        img: `${P_inte_1}`,
        description: "This is my P-interest Activity.",
    },
    {
        img: `${P_inte_2}`,
        description: "This is my P-interest Activity.",
    },
    {
        img: `${P_inte_3}`,
        description: "This is my P-interest Activity.",
    },
    
];

const contactConfig = {
    YOUR_EMAIL: "dennismwenda9054@gmail.com",
    YOUR_FONE: "254710469376",
    description: "I am an experienced email marketing expert with 6 years.", 
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofils = {
    facebook: "https://www.facebook.com/dennis.mwenda.10236/",
    linkedin: "https://www.linkedin.com/in/dmwenda/",
    twitter: "https://twitter.com/OnyaDennis",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};