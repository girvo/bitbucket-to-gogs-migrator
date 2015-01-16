# BitBucket to Gogs Migration Script
This repository holds a simple Node.js script that when executed will find all repositories for a given user or team on BitBucket, and migrate all of the repositories found over to the Gogs installation provided.

## Installation
1. Clone this repository to your local machine and `cd` into it
2. Run `npm install` inside that repository

## Usage
1. Copy the example config file, `cp config.json.example config.json`
2. Provide your gogs credentials in the `config.json` file, adjust the user IDs to map to your Gogs installations, and provide the Gogs URL
3. Edit the `config.json` file and add the BitBucket username and password, and a team name if you're migrating a team (leave null if not)
3. Run `npm start` to begin the migration
5. Go have a tea and biscut, and wait!

## Notes
I have yet to implement `check_exists`, so if there is an existing repository under that user in Gogs, it will likely ignore it and create a new one. It's not asynchronous (I didn't want to DDoS the BitBucket and Gogs servers), so there are some major performance speedups that can be gained by doing so within reason -- feel free to send a pull request through. There is some error checking that isn't as robust as I'd like, but it's fine for the most part; I'd still suggest taking a back-up of your Gogs installation first.

## Author
I (Josh Girvin, also known as girvo) can be found at my website (http://jgirvin.com/), email (josh@ my website address), Twitter (http://twitter.com/girvo) and right here on GitHub.
