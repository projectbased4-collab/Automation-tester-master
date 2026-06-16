# Postman — first run and sending a request

I opened Postman for the first time today and sent a GET request. Here's what happened.

## Setup

Downloaded the desktop app from postman.com/downloads. Just ran the installer — no dependencies beyond having Node already on my system (though the app bundles its own runtime, so I didn't need to check). After signing in (or skipping with the free tier), I landed on the dashboard.

The UI has a sidebar on the left with History and Collections, a top bar with method dropdown + URL input + Send button, and a bottom panel that shows Response.

## My first request

Clicked New > Request. It dropped a blank request into a collection named "Untitled" (I renamed it to "playground").

Set method to GET and pasted this URL:

```
https://jsonplaceholder.typicode.com/todos/1
```

That's a fake REST API used in tutorials. I'd heard about it before.

Hit Send.

## What I saw

Response came back pretty fast. Status was `200 OK`. The Body tab showed JSON:

```json
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}
```

Headers were there too under the Headers tab. The pretty-printed JSON view was nice — no raw string parsing needed.

## Next thing I tried

I changed the method to PUT and added a JSON body with `"completed": true`. Sent again, got `200 OK` back (the fake API accepts anything). That confirmed Postman handles bodies without extra setup.

## What confused me

The URL input field is bigger than it looks — I kept thinking I needed a separate params table, but the query string can live right in the URL. Also the difference between Params (query string), Headers, and Body took a minute to parse visually. The labels are clear enough, I was just slow.

## What I want to try next

- Save variables and use them in the URL
- Write a test script in the Tests tab
- Chain a POST that creates something then a GET that reads it back
