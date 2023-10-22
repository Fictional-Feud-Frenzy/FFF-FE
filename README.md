# Fictional-Feud-Frenzy (Front end Repo)



## About This Project
### Important to Note
This is an SOA app and needs both this repo (front end) AND [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Fictional-Feud-Frenzy/FFF-BE) (back end) in order to be fully functioning.


### Overview
This project is built to satisfy the requirements of the Turing School of Software and Design's [Capstone Project](https://mod4.turing.edu/projects/capstone/). Students come up with their own idea for an application and build it as a group project. Front end students and Back end students work together to simulate working on a full stack team

<img src="app/assets/fff-logo-white.png">
                    
## Purpose

The purpose of the frontend for the FFF app is to support the overall functionality and effectiveness of the backend application. Here are some key purposes of the front end in relation to the project:

<b><u>Data management:</u></b> The Frontend serves as the central hub for selecting, filtering, and displaying the data associated with characters and fight logic for the backend

<b><u>Flexible Data Retrieval:</u></b> GraphQL allows the frontend to request exactly the data they need and nothing more

Overall, the purpose of the front end in the Fictional-Feud_Frenzy app is to support seamless data management and AI story prompts. It plays a vital role in ensuring the app's functionality and user satisfaction, ultimately enhancing the daily lives of its users.

## Technologies Used
- React
- Router
- JavaScript (ES6)
- CSS
- HTML
- Cypress
- Fetch API
- Vercel Deployment


## Running On
  - Vercel

## <b>Getting Started</b>

To get a local copy, follow these simple instructions

### <b>Installation</b>

1. Fork the Project
2. Clone the repo 
``` 
git clone git@github.com:your_username/Fictional-Feud-Frenzy/FFF-FE.git
```
3. Install NPM
```
npm install
```
4. Start The App
```
npm start
```

## Response
```
Character Response:

{
  "id": 70,
  "name": "Batman", - req
  "intelligence": 100, - req
  "strength": 26, -req
  "speed": 27, -req
  "durability": 50, -req
  "power": 47, -req
  "combat": 100, -req
  "full-name": "Bruce Wayne",
  "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
  "publisher": "DC Comics",
  "alignment": "good",
  "gender": "Male",
  "race": "Human",
  "height":  "6'2",
  "weight": "210 lb",
  "eye-color": "blue",
  "hair-color": "black"
  "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps"
  "image": "httpss://www.superherodb.com/pictures2/portraits/10/100/639.jpg" -req
}

CHUCK NORRIS RESPONSE:

"Chuck Norris was supposed the be the main character for the LOST series. He turned down the role because he didnt want to be the only one FOUND"

AI RESPONSE:

"In the darkness of a desolate city, Batman and Superman faced each other with unwavering determination. The air crackled with tension as their contrasting silhouettes cast long shadows against the moonlit skyline.\n\nBatman, relying on his mastery of strategy and gadgetry, swiftly launched a barrage of smoke pellets, enveloping the area in a thick fog. Using this momentary advantage, he unleashed a series of calculated strikes, testing Superman's invulnerability.\n\nSuperman, however, was no ordinary opponent. He possessed godlike strength and unyielding determination."


```

## Schema
```
create_table "characters", force: :cascade do |t|
  t.string "name"
  t.integer "intelligence"
  t.integer "strength"
  t.integer "speed"
  t.integer "durability"
  t.integer "power"
  t.integer "combat"
  t.string "full_name"
  t.string "place_of_birth"
  t.string "publisher"
  t.string "alignment"
  t.string "gender"
  t.string "race"
  t.string "height"
  t.string "weight"
  t.string "eye_color"
  t.string "hair_color"
  t.string "group_affiliation"
  t.string "image"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.float "power_stats_weighted_average"
end

create_table "battles", force: :cascade do |t|
  t.bigint "character1_id", null: false
  t.bigint "character2_id", null: false
  t.bigint "winner_id", null: false
  t.text "description"
  t.datetime "created_at", null: false
  t.datetime "updated_at", null: false
  t.index ["character1_id"], name: "index_battles_on_character1_id"
  t.index ["character2_id"], name: "index_battles_on_character2_id"
  t.index ["winner_id"], name: "index_battles_on_winner_id"
end
```

## Contributing  [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Fictional-Feud-Frenzy/FFF-BE/issues)
Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## Thoughts for future contributions:


If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

## API's Used
[![OpenAI Badge](https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=for-the-badge)](https://platform.openai.com/)<br>
Chuck Norris API: https://api.chucknorris.io </br>
Superhero API: https://superheroapi.com


## FFF TEAM


- Jeff Nelson [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/jpnelson85) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/jeff-nelson-307aba45/)
- Christopher Cullinane [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/topher-nullset) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/chris-cullinane-be/)
- Nick Sacco [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/sicknacco) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/nick-sacco/)
- Bradley Milton [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/brad2412) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/bradley-milton-01a814132/)
- Ben Holden [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/BenHolden010) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/ben-holden-5115b8183)
- Denzel Turambi [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/Denzel-Turambi) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white) ](https://www.linkedin.com/in/denzel-turambi-71a298267/)

## Planning Tools
![Miro Board](https://img.shields.io/badge/Miro-050038?style=for-the-badge&logo=Miro&logoColor=white)</br>
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white) ](https://github.com/orgs/Fictional-Feud-Frenzy/projects/1)</br>
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)
