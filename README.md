# Splatoon 3 Team Organizer API
An API that allows for full CRUD operations on players and competitive teams of the Nintendo Switch title "Splatoon 3".  It also lists map/mode combinations and provides images of callouts by combination.
## Routes
- **/api** - HATEOAS Links
<br><br>
  
- **/callouts** - Renders a list of images showing callouts for each map/mode combination
<br><br>

- **/callouts/:id** - Renders an individual image showing callouts for the map/mode combination corresponding to the ":id" parameter
<br><br>

- **GET: /api/teams** - Endpoint showing all teams
<br><br>

- **GET: /api/teams/:id** - Endpoint showing individual team corresponding to the :id parameter
<br><br>

- **GET: /api/teams/:id/members** - Endpoint showing all members of the team whose id corresponds with the value in the :id parameter if any
<br><br>

- **GET: /api/teams/:id/members/:playerId** - Endpoint showing a member of the specified team if their id corresponds with the value in the :playerId parameter
<br><br>

- **GET: /api/players** - Endpoint showing all players
<br><br>

- **GET: /api/players/:id** - Endpoint showing individual player corresponding to the :id parameter
<br><br>

- **GET: /api/mapmodes** - Endpoint showing all map/mode combinations
<br><br>

- **GET: /api/mapmodes/:id** - Endpoint showing tem map/mode combination that corresponds with the value in the :id parameter
<br><br>

- **POST: "/players"** - Endpoint for creating a new player<br>
**request body:**
  - "name": "String max 10 chars"
  - "splashTag": "Unique string max 5 chars"
  - "role": ["slayer", "skirmisher", "support", "anchor", "frontline", "midline"]
<br><br>

- **POST: "/teams"** - Endpoint for creating a new team<br>
**request body:**
  - "name": "Unique string max 20 chars"
<br><br>

- **POST: "/teams/:id/members"** - Endpoint for adding an existing player to an existing team specified by the :id parameter<br>
**request body:**
  - "player": "Player ObjectId"
<br><br>

- **PUT: "/players/:id"** - <br>
**request body:**
  - "name": "String max 10 chars"
  - "splashTag": "Unique string max 5 chars"
  - "role": ["slayer", "skirmisher", "support", "anchor", "frontline", "midline"]
<br><br>

- **PATCH: "/teams/:id"** - Endpoint to chenge the name of the team specified by the :id parameter<br>
**request body:**
  - "name": "Unique string max 20 chars"
<br><br>

- **DELETE: /api/players/:id** - Endpoint to delete the player specified by the id parameter
<br><br>

- **DELETE: /api/teams/:id** - Endpoint to delete the team specified by the id parameter
<br><br>

- **DELETE: /api/teams/:id/members/:playerId** - Endpoint for removing the player with the id specified by the :playerId parameter from the existing team specified by the :id parameter
<br><br>
