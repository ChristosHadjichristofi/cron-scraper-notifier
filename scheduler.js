const { CronJob } = require('cron');
const { scraper } = require('./scraper');
const { sendMail } = require('./sendEmail');

require('dotenv').config();
const MINUTES = process.env.MINUTES;

const ScraperJob = new CronJob(`*/${ MINUTES } * * * *`, async () => {
    let result;
    console.log("Scraper Job running...");
    result = await scraper();

    if (result.found) {
        let subject = "<Subject>";
        let text =  "<Text>";
        sendMail(
            subject,
            text,
            `<a href="${ result.url }">${ subject }</a>`
        );
        ScraperJob.stop();
    }
    else console.log('Still nothing...');
});

ScraperJob.start();