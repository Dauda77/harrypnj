import express from 'express';
const router = express.Router();
import { v4 as uuidv4 } from 'uuid';



const users = [
        {
            "id": 1,
            "character": "Harry James Potter",
            "nickname": "Harry",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Daniel Radcliffe",
            "child": [
                "James Sirius Potter",
                "Albus Severus Potter",
                "Lily Luna Potter"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/harry_potter.png"
        },
        {
            "id": 2,
            "character": "Hermione Jean Granger",
            "nickname": "Hermione",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Emma Watson",
            "child": [
                "Rose Granger-Weasley",
                "Hugo Granger-Weasley"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/hermione_granger.png"
        },
        {
            "id": 3,
            "character": "Ron Weasley",
            "nickname": "Ron",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Rupert Grint",
            "child": [
                "Rose Granger-Weasley",
                "Hugo Granger-Weasley"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/ron_weasley.png"
        },
        {
            "id": 4,
            "character": "Fred Weasley",
            "nickname": "Fred",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "James Phelps",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/fred_weasley.png"
        },
        {
            "id": 5,
            "character": "George Weasley",
            "nickname": "George",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Oliver Phelps",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/george_weasley.png"
        },
        {
            "id": 6,
            "character": "Bill Weasley",
            "nickname": "Bill",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Domhnall Gleeson",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/bill_weasley.png"
        },
        {
            "id": 7,
            "character": "Percy Weasley",
            "nickname": "Percy",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Chris Rankin",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/percy_weasley.png"
        },
        {
            "id": 8,
            "character": "Charlie Weasley",
            "nickname": "Charlie",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "ninguno",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/charlie_weasley.png"
        },
        {
            "id": 9,
            "character": "Ginny Weasley",
            "nickname": "Ginny",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Bonnie Right",
            "child": [
                "James Sirius Potter",
                "Albus Severus Potter",
                "Lily Luna Potter"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/ginny_weasley.png"
        },
        {
            "id": 10,
            "character": "Molly Weasley",
            "nickname": "Molly",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Julie Walters",
            "child": [
                "Ron Weasley",
                "Fred Weasley",
                "George Weasley",
                "Bill Weasley",
                "Percy Weasley",
                "Charlie Weasley",
                "Ginny Weasley"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/molly_weasley.png"
        },
        {
            "id": 11,
            "character": "Arthur Weasley",
            "nickname": "Arthur",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Mark Williams",
            "child": [
                "Ron Weasley",
                "Fred Weasley",
                "George Weasley",
                "Bill Weasley",
                "Percy Weasley",
                "Charlie Weasley",
                "Ginny Weasley"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/arthur_weasley.png"
        },
        {
            "id": 12,
            "character": "Neville Longbottom",
            "nickname": "Neville",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Matthew Lewis",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/neville_longbottom.png"
        },
        {
            "id": 13,
            "character": "Luna Lovegood",
            "nickname": "Luna",
            "hogwartsStudent": true,
            "hogwartsHouse": "Ravenclaw",
            "interpretedBy": "Evanna Lynch",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/luna_lovegood.png"
        },
        {
            "id": 14,
            "character": "Draco Malfoy",
            "nickname": "Draco",
            "hogwartsStudent": true,
            "hogwartsHouse": "Slytherin",
            "interpretedBy": "Tom Felton",
            "child": [
                "Scorpius Malfoy"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/draco_malfoy.png"
        },
        {
            "id": 15,
            "character": "Albus Percival Wulfric Brian Dumbledore",
            "nickname": "Dumbledore",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Richard Harris",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/albus_dumbledore.png"
        },
        {
            "id": 16,
            "character": "Minerva McGonagall",
            "nickname": "Minerva",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Maggie Smith",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/minerva_mcgonnagall.png"
        },
        {
            "id": 17,
            "character": "Remus Lupin",
            "nickname": "Lupin",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "David Thewils",
            "child": [
                "Ted Lupin"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/remus_lupin.png"
        },
        {
            "id": 18,
            "character": "Rubeus Hagrid",
            "nickname": "Hagrid",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Robbie Coltrane",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/rubeus_hagrid.png"
        },
        {
            "id": 19,
            "character": "Sirius Black",
            "nickname": "Sirius",
            "hogwartsStudent": true,
            "hogwartsHouse": "Gryffindor",
            "interpretedBy": "Gary Oldman",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/sirius_black.png"
        },
        {
            "id": 20,
            "character": "Severus Snape",
            "nickname": "Snape",
            "hogwartsStudent": true,
            "hogwartsHouse": "Slytherin",
            "interpretedBy": "Alan Rickman",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/severus_snape.png"
        },
        {
            "id": 21,
            "character": "Bellatrix Lestrange",
            "nickname": "Bella",
            "hogwartsStudent": true,
            "hogwartsHouse": "Slytherin",
            "interpretedBy": "Helena Bonham Carter",
            "child": [
                "Delphi"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/bellatrix_lestrange.png"
        },
        {
            "id": 22,
            "character": "Lord Voldemort",
            "nickname": "Voldemort",
            "hogwartsStudent": true,
            "hogwartsHouse": "Slytherin",
            "interpretedBy": "Ralph Fiennes",
            "child": [
                "Delphi"
            ],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/lord_voldemort.png"
        },
        {
            "id": 23,
            "character": "Argus Filch",
            "nickname": "Filch",
            "hogwartsStudent": false,
            "hogwartsHouse": "ninguna",
            "interpretedBy": "David Bradley",
            "child": [],
            "image": "https://raw.githubusercontent.com/fedeperin/harry-potter-api-english/main/images/argus_filch.png"
        }
    ];


    // Get all users
router.get('/', (req, res) => {
     res.send(users);
})


// update user list
router.post('/', (req, res) => {
    const user = req.body;

    users.push({...user, id: uuidv4() });

    res.send(`${user.id} has been added to the DB`)
})


// get specific user
router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    const foundUser = users.find((user) => user.id === id)

      if (!foundUser) {
        res.send("L'id n'existe pas")
    }

    res.send(foundUser)
});

// delete specific user
router.delete('/:id', (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === id)
   if (!user) {
    res.send("Pas d'utilisateur à supprimé")
   } else {
    users.splice(user.id);
    res.send(`${user.id} deleted successfully from database`);
   }

    
});


export default router