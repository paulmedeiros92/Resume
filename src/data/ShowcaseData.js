import saia1 from '../images/projects/Saia/saia.jpeg';
import saia2 from '../images/projects/Saia/landing-bottom.jpeg';
import saia3 from '../images/projects/Saia/login.jpeg';
import saia4 from '../images/projects/Saia/bill-of-lading.jpeg';
import mtgbuddy1 from '../images/projects/mtgbuddy/landing.jpeg';
import mtgbuddy2 from '../images/projects/mtgbuddy/mechanics.jpeg';
import discord1 from '../images/projects/discord/discord.jpeg';
import discord2 from '../images/projects/discord/usage.jpeg';
import discord3 from '../images/projects/discord/leaderboard.jpeg';
import discord4 from '../images/projects/discord/presents.jpeg';
import tilted1 from '../images/projects/tilted/tilted.jpeg';
import tilted2 from '../images/projects/tilted/firstLevel.jpeg';

const saia = {
  images: [saia1, saia2, saia3, saia4],
  urlTitle: 'Saia.com',
  url: 'https://www.saia.com/home',
  title: 'Software Engineer',
  description: 'This project was a full redesign of Saia\'s public web page in Angular. We were also tasked with rebuilding the API that feeds realtime data and provides estimates for customers ont he site in Node. We accomplished complete feature parity between the old site and the new along with many new feature and more accurate real time tracking!',
};

const mtgbuddy = {
  images: [mtgbuddy1, mtgbuddy2],
  urlTitle: 'MtgBuddy.com',
  url: 'https://www.mtgbuddy.com/',
  title: 'Creator',
  description: 'MtgBuddy.com is companion app I created meant to be used as supplemental information while playing Magic The Gathering in the Draft or Sealed formats. This page which was made in React relies on a python script to scrape top picks from a draft site called Draftism. It then is designed to dynamically display all the top picks from each available set to help people draft more consistent draft decks.',
};

const discord = {
  images: [discord1, discord2, discord3, discord4],
  urlTitle: 'GitHub',
  url: 'https://github.com/paulmedeiros92/Santa-Bot',
  title: 'Creator',
  description: 'I have created quite a few Discord bots, most notably is my Santa Bot. Santa Bot is essentially a karma tracking bot that triggers on "naughty" or "nice" callouts within a server. Santa Bot gamifys the experience with a leader-board and a feature to track what people want for X-Mas "Santa\'s List".',
};

const tilted = {
  images: [tilted1, tilted2],
  urlTitle: 'Play Store',
  url: 'https://play.google.com/store/apps/details?id=com.PungMadro.Tilted',
  title: 'Co-Creator',
  description: 'This is a silly game my brother and I made that uses a gyroscope to track how an in game platform should tilt. It was a fun experience made using Unity and I would not recommend using a gyroscope as a control for you first game build. It was a very enlightening and fun experience in game development.',
};

const data = {
  saia, mtgbuddy, discord, tilted,
};

export { data as default };
