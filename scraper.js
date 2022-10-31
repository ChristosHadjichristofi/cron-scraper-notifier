const axios = require('axios');
const cheerio = require('cheerio');
require('dotenv').config();

const URL_TO_SCRAPE = process.env.URL_TO_SCRAPE;
const DOM_TRAVERSAL = process.env.DOM_TRAVERSAL;
// in env file a string of words seperated with comma is defined
// (those are the words we are looking for in each announcement - every single one of them must exist)
const words = process.env.WORDS.split(", ");

let isMatch = (str) => {
    let matched = true;
    for (let i = 0; i < words.length; i++) {
        if (str.indexOf(words[i]) == -1) {
            matched = false;
            break;
        }
    }

    return matched;
}

async function scraper() {
    const { data } = await axios.get(URL_TO_SCRAPE);
    
    const $ = cheerio.load(data);
    const announcements = {};

    $(DOM_TRAVERSAL).each((_idx, el) => {
        let name = el.children[0].parent.children[0].data;
        let url = el.children[0].parent.attribs.href
        announcements[name] = url;
    })

    let result = {};
    let found = false;
    for (const [key, value] of Object.entries(announcements)) {
        if (isMatch(key)) {
            result.found = true;
            result.url = value;
            break;
        }
        result.found = found;
        result.url = '';
    }

    return result;
}

module.exports = { scraper };