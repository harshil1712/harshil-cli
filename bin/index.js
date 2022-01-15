#!/usr/bin/env node
const chalk = require('chalk');
const boxen = require('boxen');
// import boxen from 'boxen';

const name = chalk.white('Name') + ': ' + chalk.green('Harshil Agrawal');
const website =
	chalk.white('Webiste') + ': ' + chalk.green('https://harshil.dev');
const twitter =
	chalk.white('Twitter') +
	': ' +
	chalk.green('https://twitter.com/harshil1712');
const github =
	chalk.white('GitHub') + ': ' + chalk.green('https://github.com/harshil1712');

const box = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
	borderColor: 'green',
};

const message = boxen(`${name}\n${website}\n${twitter}\n${github}`, box);

console.log(message);
