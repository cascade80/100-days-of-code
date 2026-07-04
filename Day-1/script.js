const moviePool = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Fight Club",
    "Inception",
    "Interstellar",
    "The Matrix",
    "The Lord of the Rings: The Fellowship of the Ring",
    "The Lord of the Rings: The Two Towers",
    "The Lord of the Rings: The Return of the King",
    "The Prestige",
    "Memento",
    "Dunkirk",
    "Tenet",
    "Oppenheimer",
    "Batman Begins",
    "The Dark Knight Rises",
    "Joker",

    "Parasite",
    "Oldboy",
    "Memories of Murder",
    "Train to Busan",
    "Spirited Away",
    "Princess Mononoke",
    "Howl's Moving Castle",
    "My Neighbor Totoro",
    "Akira",
    "Your Name",

    "Whiplash",
    "La La Land",
    "The Social Network",
    "The Wolf of Wall Street",
    "The Grand Budapest Hotel",
    "The Truman Show",
    "The Green Mile",
    "The Pianist",
    "Schindler's List",
    "12 Angry Men",

    "The Silence of the Lambs",
    "Se7en",
    "Gone Girl",
    "Prisoners",
    "Shutter Island",
    "Zodiac",
    "Nightcrawler",
    "No Country for Old Men",
    "The Departed",
    "The Usual Suspects",

    "Gladiator",
    "Braveheart",
    "300",
    "Troy",
    "Kingdom of Heaven",
    "The Last Samurai",
    "Saving Private Ryan",
    "1917",
    "Black Hawk Down",
    "Hacksaw Ridge",

    "Mad Max: Fury Road",
    "John Wick",
    "John Wick: Chapter 2",
    "John Wick: Chapter 3 - Parabellum",
    "Mission: Impossible",
    "Mission: Impossible II",
    "Mission: Impossible III",
    "Mission: Impossible - Ghost Protocol",
    "Mission: Impossible - Rogue Nation",
    "Mission: Impossible - Fallout",

    "Die Hard",
    "Speed",
    "Heat",
    "The Equalizer",
    "Edge of Tomorrow",
    "Top Gun",
    "Top Gun: Maverick",
    "Casino Royale",
    "Skyfall",
    "No Time to Die",

    "Iron Man",
    "Iron Man 2",
    "Iron Man 3",
    "The Avengers",
    "Avengers: Age of Ultron",
    "Avengers: Infinity War",
    "Avengers: Endgame",
    "Captain America: The First Avenger",
    "Captain America: The Winter Soldier",
    "Captain America: Civil War",

    "Thor",
    "Thor: Ragnarok",
    "Doctor Strange",
    "Black Panther",
    "Spider-Man",
    "Spider-Man 2",
    "Spider-Man 3",
    "Spider-Man: Homecoming",
    "Spider-Man: Far From Home",
    "Spider-Man: No Way Home",

    "Spider-Man: Into the Spider-Verse",
    "Spider-Man: Across the Spider-Verse",
    "Logan",
    "Deadpool",
    "Deadpool 2",
    "X-Men: Days of Future Past",
    "The Batman",
    "Man of Steel",
    "Wonder Woman",
    "Aquaman",

    "Toy Story",
    "Toy Story 2",
    "Toy Story 3",
    "Toy Story 4",
    "Finding Nemo",
    "Finding Dory",
    "Up",
    "Inside Out",
    "Coco",
    "Soul",

    "Monsters, Inc.",
    "Ratatouille",
    "WALL-E",
    "The Incredibles",
    "The Incredibles 2",
    "Shrek",
    "Shrek 2",
    "Kung Fu Panda",
    "Kung Fu Panda 2",
    "How to Train Your Dragon",

    "Frozen",
    "Moana",
    "Zootopia",
    "Encanto",
    "The Lion King",
    "Aladdin",
    "Beauty and the Beast",
    "Mulan",
    "Tangled",
    "Big Hero 6",

    "The Conjuring",
    "The Conjuring 2",
    "Insidious",
    "Sinister",
    "Hereditary",
    "The Babadook",
    "A Quiet Place",
    "It",
    "It Chapter Two",
    "The Ring",

    "The Exorcist",
    "Get Out",
    "Us",
    "Nope",
    "The Witch",
    "Smile",
    "Talk to Me",
    "Saw",
    "Saw II",
    "Final Destination",

    "The Hangover",
    "The Hangover Part II",
    "Superbad",
    "21 Jump Street",
    "22 Jump Street",
    "We're the Millers",
    "Step Brothers",
    "The Nice Guys",
    "Free Guy",
    "Game Night",

    "Knives Out",
    "Glass Onion",
    "The Menu",
    "Everything Everywhere All at Once",
    "The Imitation Game",
    "Arrival",
    "Blade Runner",
    "Blade Runner 2049",
    "Ex Machina",
    "Her",

    "Gravity",
    "The Martian",
    "Moon",
    "Looper",
    "Source Code",
    "Children of Men",
    "Minority Report",
    "I Am Legend",
    "Ready Player One",
    "Pacific Rim",

    "Pirates of the Caribbean: The Curse of the Black Pearl",
    "Pirates of the Caribbean: Dead Man's Chest",
    "Pirates of the Caribbean: At World's End",
    "National Treasure",
    "Indiana Jones and the Raiders of the Lost Ark",
    "Indiana Jones and the Last Crusade",
    "Back to the Future",
    "Back to the Future Part II",
    "Back to the Future Part III",
    "The Goonies",

    "The Sixth Sense",
    "Catch Me If You Can",
    "The Terminal",
    "Cast Away",
    "The Curious Case of Benjamin Button",
    "American Beauty",
    "Good Will Hunting",
    "A Beautiful Mind",
    "The Revenant",
    "Once Upon a Time in Hollywood"
];
const posterContainer = document.querySelector('.movie-poster');
const detailsContainer = document.querySelector('.movie-details');
const pickButton = document.getElementById('pick-random');
let previousMovieIndexs = [];
async function fetchRandomMovie() {
    let randomIndex = null;
    let isRepetedIndex = false;

    do {
    isRepetedIndex = false;

    randomIndex = Math.floor(Math.random() * moviePool.length);

    isRepetedIndex = previousMovieIndexs.includes(randomIndex);
    

} while (isRepetedIndex);
    previousMovieIndexs.push(randomIndex);
    const randomTitle = moviePool[randomIndex];
    console.log(randomIndex);

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(randomTitle)}&apikey=f7b92347`;
    try {
        detailsContainer.innerHTML = "<p style='color: white;'>Loading movie...</p>";

        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            displayMovie(data);
        } else {
            detailsContainer.innerHTML = `<p style='color: red;'>Error: ${data.Error}</p>`;
        }
    } catch (error) {
        console.error("Failed to fetch movie data:", error);
        detailsContainer.innerHTML = "<p style='color: red;'>Network error. Try again!</p>";
    }
}


function displayMovie(movie) {

    const posterSrc = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available";

    posterContainer.innerHTML = `
        <img src="${posterSrc}" alt="${movie.Title} Poster" style="width: 100%; height: 100%; object-fit: cover; border-radius: 25px;">
    `;

    detailsContainer.innerHTML = `
        <h2 style="color: white; margin-bottom: 5px; font-size: 1.3rem;">${movie.Title} (${movie.Year})</h2>
        <h3 style="color: white; margin-bottom: 5px; font-size: 1.3rem;">${movie.Genre} </h3>
        <p style="color : white;"> ${movie.Plot}</p>
    `;
}

pickButton.addEventListener('click', fetchRandomMovie);

fetchRandomMovie();