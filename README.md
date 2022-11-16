# cron-scraper-notifier

<p align="center">
  <b>This simple scheduler makes a get request to a website, scrapers announcements and if any of this announcements include some specific words, a mail is sent. When these words are found, the scheduler stops. **It is possible that the scraper logic on how the words are found might need modifications, depending on what you want to scrape.**.</b> </br>
  <img alt="Byte Code Size" src="https://img.shields.io/github/languages/code-size/ChristosHadjichristofi/cron-scraper-notifier?color=red" />
	<img alt="# Lines of Code" src="https://img.shields.io/tokei/lines/github/ChristosHadjichristofi/cron-scraper-notifier?color=red" />
	<img alt="# Languages Used" src="https://img.shields.io/github/languages/count/ChristosHadjichristofi/cron-scraper-notifier?color=yellow" />
	<img alt="Top language" src="https://img.shields.io/github/languages/top/ChristosHadjichristofi/cron-scraper-notifier?color=yellow" />
	<img alt="Last commit" src="https://img.shields.io/github/last-commit/ChristosHadjichristofi/cron-scraper-notifier?color=important" />
</p>

## .ENV format
```
MINUTES="<Every X minutes the scheduler runs>"
URL_TO_SCRAPE="<The website you want to scrape>"
DOM_TRAVERSAL="<The elements to be traversed and scraped in the HTML>"
WORDS="<List of words to be found, given as string separated by commas>"
SENDGRID_API_KEY="<Sendgrid api key>"
RECIPIENTS="<List of recipients, given as string separated by space>"
SENDER="<Mail which sends the notification>"
```
