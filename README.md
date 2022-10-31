# cron-scraper-notifier

This simple scheduler makes a get request to a website, scrapers announcements and if any of this announcements include some specific words, a mail is sent. When these words are found, the scheduler stops. **It is possible that the scraper logic on how the words are found might need modifications, depending on what you want to scrape.**

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
