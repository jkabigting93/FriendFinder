// Dummy list of friends as a JSON array
var friends = [
    {
        "name": "Gemma",
        "photo": "https://images.unsplash.com/photo-1570500091894-635e2730c151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 3, 4, 4, 5, 5, 3, 5, 5, 4]
    },
    {
        "name": "Johan",
        "photo": "https://images.unsplash.com/photo-1572432975513-7fa9735df9c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 2, 4, 3, 3, 3, 5, 4, 1]
    },
    {
        "name": "Guillaume",
        "photo": "https://images.unsplash.com/photo-1571237129746-c78963372046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 4, 2, 4, 2, 2, 4, 5, 2, 3]
    },
    {
        "name": "Humphrey",
        "photo": "https://images.unsplash.com/photo-1553629842-816e52ba1f8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 1, 2, 2, 2, 2, 4, 3, 2]
    },
    {
        "name": "Tayla",
        "photo": "https://images.unsplash.com/photo-1566642370281-6b60081a9017?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        "scores": [2, 1, 1, 2, 2, 1, 1, 4, 2, 3]
    },
    {
        "name": "Devon",
        "photo": "https://images.unsplash.com/photo-1566786859080-6cffae6abf9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 1, 4, 3, 2, 5, 4, 3, 1]
    },
    {
        "name": "Freshh",
        "photo": "https://images.unsplash.com/photo-1568350923666-9bb6ea42f181?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 5, 5, 2, 4, 3, 5, 3, 1]
    },
    {
        "name": "David",
        "photo": "https://images.unsplash.com/photo-1553198006-8f63e9ee0ae9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 5, 5, 5, 2, 4, 3, 5, 4, 1]
    },
    {
        "name": "Stehanie",
        "photo": "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 5, 5, 1, 5, 5, 1, 5, 5, 1]
    },
    {
        "name": "Artem",
        "photo": "https://images.unsplash.com/photo-1567071421696-da30b74734d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 5, 5, 5, 5, 4, 5, 5, 1]
    },
    {
        "name": "Marie-Michele",
        "photo": "https://images.unsplash.com/photo-1563310035-a7ade6111c6c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [1, 1, 3, 3, 4, 5, 2, 5, 5, 1]
    },
    {
        "name": "Jackson",
        "photo": "https://images.unsplash.com/photo-1566253594228-5638ded7c8e9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [5, 1, 1, 3, 5, 5, 1, 1, 3, 1]   
    },
    {
        "name": "Phuong",
        "photo": "https://images.unsplash.com/photo-1547878261-0da0df0c626c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores:": [1, 5, 3, 2, 2, 4, 2, 3,	5, 2]
    },
    {
        "name": "Joseph",
        "photo": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [5, 4, 3, 3, 1, 1, 4, 4, 2, 1]
    },
    {
        "name": "Jessica",
        "photo": "https://images.unsplash.com/photo-1543720753-e38e393b71c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [4, 2, 4, 3, 1, 1, 3, 3, 4, 4]
    },
    {
        "name": "Harry",
        "photo": "https://images.unsplash.com/photo-1545559301-f96a342cd104?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "scores": [2, 2, 2, 2, 2, 1, 3, 3, 4, 4]
    }
];

module.exports = friends;