import { FaCss3Alt } from 'react-icons/fa'
import { RiOpenaiFill } from 'react-icons/ri'
import { VscVscode } from 'react-icons/vsc'
import {
  SiHtml5, SiJavascript, SiReact, SiTailwindcss, SiReactrouter, SiRedux, SiVite, SiAxios,
  SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, SiMongoose, SiCloudinary, SiGit,
  SiGithub, SiPostman, SiGithubcopilot, SiAppwrite, SiClaude,
} from 'react-icons/si'

const env = import.meta.env
// Only https links are accepted, so a wrong value in .env can never inject a javascript: URL.
const safe = (v) => { try { const u = new URL(v); return u.protocol === 'https:' ? u.href : '' } catch { return '' } }
// Keeps only digits and a leading +, so the tel: link is always valid.
const phoneDigits = (v) => v.replace(/[^\d+]/g, '')

const phone = (env.VITE_PHONE || '').trim()

export const links = {
  github: safe(env.VITE_GITHUB_URL),
  linkedin: safe(env.VITE_LINKEDIN_URL),
  email: (env.VITE_EMAIL || '').trim(),
  phone,
  phoneHref: phone ? `tel:${phoneDigits(phone)}` : '',
  currentAddress: (env.VITE_CURRENT_ADDRESS || 'HSR Layout, Bangalore, Karnataka, India').trim(),
  permanentAddress: (env.VITE_PERMANENT_ADDRESS || 'Dharakote, Berhampur, Ganjam, Odisha - 761107, India').trim(),
}

export const profile = {
  name: 'Debasish Sahu',
  role: 'Full-Stack (MERN) Developer',
  location: 'Berhampur, Odisha, India',
  intro: 'I build responsive web apps with React, Node.js, Express and MongoDB, from the database schema to the screen.',
}

export const projects = [
  {
    title: 'VideoTube', type: 'Video sharing platform', art: 'video',
    summary: 'A full-stack video sharing and social platform where creators upload videos, build a channel and interact with viewers.',
    features: ['Register and login with JWT in HTTP-only cookies', 'Video upload with thumbnail to Cloudinary', 'Search by title or description', 'Likes, comments, subscriptions and channel profiles', 'Avatar and cover image updates, dark/light theme, responsive layout'],
    stack: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Cloudinary'],
    live: safe(env.VITE_VIDEOTUBE_LIVE), repo: safe(env.VITE_VIDEOTUBE_REPO),
  },
  {
    title: 'TaskFlow', type: 'Task management app', art: 'task',
    summary: 'A MERN task manager to plan personal work, track progress, set priorities and keep deadlines in view.',
    features: ['User registration and login with JWT in HTTP-only cookies', 'Create, view, update and delete tasks', 'Status: To Do, In Progress, Done', 'Priority levels and optional due dates', 'Protected routes with user-specific tasks'],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    live: safe(env.VITE_TASKFLOW_LIVE), repo: safe(env.VITE_TASKFLOW_REPO),
  },
  {
    title: 'Mega Blog', type: 'Blog application', art: 'blog',
    summary: 'A dynamic blog app with authentication, full post management and a rich text editor, built on Appwrite.',
    features: ['User authentication and authorization', 'Create, read, update and delete blog posts', 'Rich content writing with TinyMCE', 'Form handling with React Hook Form', 'Responsive across devices'],
    stack: ['React', 'Appwrite', 'Redux Toolkit', 'React Router', 'Tailwind CSS', 'TinyMCE'],
    live: safe(env.VITE_MEGABLOG_LIVE), repo: safe(env.VITE_MEGABLOG_REPO),
  },
  {
    title: 'Weather App', type: 'JavaScript web app', art: 'weather',
    summary: 'A weather app built with JavaScript that shows the weather for a city you search.',
    features: ['Search weather by city', 'Clean, responsive interface', 'Built with plain JavaScript and the browser fetch API'],
    stack: ['HTML5', 'CSS3', 'JavaScript'],
    live: safe(env.VITE_WEATHER_LIVE), repo: safe(env.VITE_WEATHER_REPO),
  },
]

export const skillGroups = [
  { title: 'Languages', items: [['HTML5', SiHtml5, '#e34f26'], ['CSS3', FaCss3Alt, '#1572b6'], ['JavaScript', SiJavascript, '#f7df1e']] },
  { title: 'Frontend', items: [['React', SiReact, '#61dafb'], ['Tailwind CSS', SiTailwindcss, '#38bdf8'], ['React Router', SiReactrouter, '#f44250'], ['Redux Toolkit', SiRedux, '#764abc'], ['Vite', SiVite, '#a855f7'], ['Axios', SiAxios, '#5a29e4']] },
  { title: 'Backend', items: [['Node.js', SiNodedotjs, '#5fa04e'], ['Express', SiExpress, 'currentColor'], ['REST APIs', SiPostman, '#ff6c37'], ['JWT Auth', SiJsonwebtokens, '#d63aff'], ['Appwrite', SiAppwrite, '#f02e65']] },
  { title: 'Database and Cloud', items: [['MongoDB', SiMongodb, '#47a248'], ['Mongoose', SiMongoose, '#c0392b'], ['Cloudinary', SiCloudinary, '#3448c5']] },
  { title: 'Tools', items: [['Git', SiGit, '#f05032'], ['GitHub', SiGithub, 'currentColor'], ['Postman', SiPostman, '#ff6c37'], ['VS Code', VscVscode, '#2f80ed'], ['Claude', SiClaude, '#d97757'], ['ChatGPT', RiOpenaiFill, '#10a37f'], ['GitHub Copilot', SiGithubcopilot, 'currentColor']] },
]

export const learning = [
  ['What LLMs are and how prompts work', 'Started'],
  ['How an AI agent works: think, use a tool, check the result, repeat', 'Started'],
  ['Tool and function calling from a Node.js app', 'Next'],
  ['RAG basics: giving a model your own data', 'Next'],
  ['MCP basics: connecting agents to tools', 'Next'],
  ['Build a small agent project with JavaScript', 'Goal'],
]

export const education = [
  { school: 'Kalam Institute of Technology', degree: 'B.Tech, Computer Science & Engineering', place: 'Berhampur, India', when: 'Dec 2021 - May 2025', score: 'GPA 8.65 / 10' },
  { school: 'Gyana Vikash HS School', degree: 'Intermediate', place: 'Chatrapura, India', when: 'March 2020', score: '59.33%' },
  { school: 'Panchayat High School', degree: 'Matriculation', place: 'Alarigada, India', when: 'February 2018', score: '83.5%' },
]