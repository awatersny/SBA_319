# Splatoon 3 Team Organizer API
An API that allows full CRUD on splatoon players and competitive teams.  It also lists map/mode combinations and provides images of callouts by combination.
## Routes
- /api - HATEOAS Links
  
- /callouts - Renders a list of images showing callouts for each map/mode combination

- /callouts/:id - Renders an individual image showing callouts for the map/mode combination corresponding to the ":id" parameter.

- GET: /api/teams - Endpoint showing all teams

- GET: /api/teams/:id - Endpoint showing individual team corresponding to the :id parameter

- GET: /api/teams/:id/members - Endpoint showing all members of the team whose id corresponds with the value in the :id parameter if any

- GET: /api/teams/:id/members/:playerId - Endpoint showing a member of the specified team if their id corresponds with the value in the :playerId parameter

- GET: /api/players - Endpoint showing all players

- GET: /api/players/:id - Endpoint showing individual player corresponding to the :id parameter

- GET: /api/mapmodes - Endpoint showing all map/mode combinations

- GET: /api/mapmodes/:id - Endpoint showing tem map/mode combination that corresponds with the value in the :id parameter

- POST: "/players"<br>
req.body: {<br>
  "name": "String max 10 chars",<br>
  "splashTag": "String max 5 chars",<br>
  "role": ["slayer", "skirmisher", "support", "anchor", "frontline", "midline"],<br>
}

- POST: "/teams"<br>
req.body: {<br>
  "name": "Team name"<br>
}

- POST: "/teams/:id/members"<br>
req.body: {<br>
  "player": "Player ObjectId"<br>
}

- PUT: "/players/:id"

- PATCH: "/teams/:id"

- DELETE: /api/players/:id

- DELETE: /api/teams/:id

- DELETE: /api/teams/:id/members/:playerId
