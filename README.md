# BitBucket to Gogs Migration Script
This repository holds a simple Node.js script that when executed will find all repositories for a given user or team on BitBucket, and migrate all of the repositories found over to the Gogs installation provided.

## Installation
1. Clone this repository to your local machine and `cd` into it
2. Run `npm install` inside that repository

## Usage
1. Copy the example config file, `cp config.js.example config.js`
2. Provide your credentials in the `config.js` file, adjust the user IDs to map to your Gogs installations, and provide the Gogs URL
3. Run `npm start` to begin the migration
