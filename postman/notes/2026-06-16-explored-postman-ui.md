# Explored the Postman UI and sent my first request

> First-day scratch notes — just opened Postman and clicked around.

I opened Postman today. The UI has a sidebar with collections on the left, a big request builder in the middle, and a response viewer at the bottom. The top bar has a "New" button that opens a quick menu for requests, collections, environments, and mocks.

I created a new request and set the method to `GET`. I typed `https://jsonplaceholder.typicode.com/todos/1` into the URL bar and hit "Send". The response popped up in the bottom panel with a `200 OK` status.

The body tab showed the raw JSON:
{
  "userId": 1,
  "id": 1,
  "title": "delectus aut autem",
  "completed": false
}

I noticed Postman auto-formats JSON in the response viewer, which was nice. The "Tests" tab at the top of the request builder lets you write JavaScript assertions — I tried setting `pm.test("Status is 200", () => pm.response.code === 200)` and it showed a green pass in the Tests Results tab.

I also saved the request into a new collection called "Tutorial" so I could find it again later. Collections seem like folders for organizing requests.

After that, I messed with the "Environments" feature and added a variable called `baseUrl` set to `https://jsonplaceholder.typicode.com`. Then I changed the request URL to use `{{baseUrl}}/todos/1` and it still worked — cool, that saves typing when I switch between dev/staging.

What I'd try next: maybe look at the Collection Runner to batch-send a few requests, and check out the "Monitor" feature for scheduled runs.
