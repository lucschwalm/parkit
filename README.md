##GraphQL/GraphQL is a query language for your API, and a server-side runtime for executing queries using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.
##Google Maps Static API/The Maps Static API lets you embed a Google Maps image on your web page without requiring JavaScript or any dynamic page loading. The Maps Static API service creates your map based on URL parameters sent through a standard HTTP request and returns the map as an image you can display on your web page. 
# National Park Finder Service

![Alt text](<Screenshot 2023-10-17 212459-1.png>)

## Project Overview

The National Park Finder Service is a web-based application that helps users discover and locate national parks based on their input. This README provides essential information for developers, collaborators, and users to understand and work with this API.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you can start using the National Park Finder API, you'll need the following:

- [Node.js](https://nodejs.org/) installed on your local machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/national-park-finder-api.git
cd national-park-finder-api
npm install
npm start
Your API should now be up and running.

Usage
The National Park Finder API allows you to interact with the service to search for national parks based on user input. You can use this API to integrate the service into your own applications or websites.

Endpoints
The following endpoints are available:

GET /api/parks: Retrieve a list of national parks based on user input parameters.
Example Request:
GET /api/parks?location=Texas&activity=hiking
Example Response:
{
  "results": [
    {
      "name": "Big Bend National Park",
      "location": "Texas",
      "activities": ["Hiking", "Camping", "Bird Watching"],
     <!-- Add more park details here -->
    },
     <!-- Add more parks here -->
  ]
}
