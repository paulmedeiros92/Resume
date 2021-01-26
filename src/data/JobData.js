import slalom1 from '../images/jobs/slalom.webp';
import UNLV1 from '../images/jobs/UNLV.webp';

const slalom = {
  images: [slalom1],
  urlTitle: 'Slalom.com',
  url: 'https://www.slalom.com/home',
  title: 'Consultant',
  from: 'July 2018',
  to: 'May 2020',
  companyDescription: 'Slalom is a modern consulting firm focused on strategy, technology, and business transformation.',
  jobDescription: 'I was happy to work for a high quality consulting firm that advises fortune 500 companies on best practices and building high quality software. While working there I made my way from an "Junior Engineer" to a "Lead Engineer" on multiple projects. My responsibilities included architecting software, mentoring other engineers, and developing and maintaining quality code.',
};

const UNLV = {
  images: [UNLV1],
  urlTitle: 'UNLV',
  url: 'https://www.unlv.edu/',
  title: 'Lead Developer',
  from: 'May 2015',
  to: 'October 2017',
  companyDescription: 'UNLV is a premier metropolitan research university. Its 332-acre main campus, located on the Southern tip of Nevada in a desert valley surrounded by mountains, is home to more than 350 undergraduate and graduate degrees, all accredited by the Northwest Commission on Colleges and Universities.',
  jobDescription: 'I interned at a Bio-Informatics lab parsing and analyzing genetic patterns through software. After graduation I was hired to redesign and implement a 3D model renderer for HIV protein. The HIV protein model viewer dubbed "HIV toolbox" was used in labs throughout the world to help study the protein in new ways and produce life saving drugs.',
};

const jobData = { slalom, UNLV };

export { jobData as default };
