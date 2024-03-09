The project uses the API of the openweathermap website, for proper operation you need to create an account on the website and generate your own API key. 

To do this, create an account at https://openweathermap.org/ and then go to https://openweathermap.org/api and search for the "Current Weather Data" section. There is a "Subscribe" button in this section - a table with available subscription options will be displayed - you can use the free one, which allows you to query the website for 60 calls/minute or
1,000,000 calls/month.

After selecting a plan, you can generate your own API key, which should be pasted into the config.js file in the place:

'PASTE HERE YOUR API KEY FROM openweathermap.org'

for example:

const API_KEY = 'xyz53443nfds' (no real key used in the example)

After adding the key, you will be able to query the website.
