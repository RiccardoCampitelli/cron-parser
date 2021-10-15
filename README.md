# cron-parser

Hey! 👋
This is what I managed to put together within the given time limit.
Unfortunately I didn't have any time left to add tests.

## How it works
It's a simple cli application which takes in a single string as input
and returns a formatted table with the times as a space-separated list

For example given an input of: 
<pre>
'*/15 0 1,15 * 1-5 /usr/bin/find'
</pre>

You can expect a result of:

<pre>
minute        0 15 30 45
hour          0
day of month  1 15
month         1 2 3 4 5 6 7 8 9 10 11 12
day of week   1 2 3 4 5
command       /usr/bin/find
</pre>

## Prerequisites:

To be able to run this you will need to have the following installed:

- Nodejs -> https://nodejs.org/en/

## How to install cli:

 - npm install
 - npm run build ( compiles the typescript code )
 - npm run local ( installs the script globally )

You will now be able to run the cli command like so:
 - cron-cli '*/15 0 1,15 * 1-5 /usr/bin/find'

## How to run without installing script locally:

 - npm install
 - npm run dev '*/15 0 1,15 * 1-5 /usr/bin/find'
