const mongoose = require('mongoose')
const Movie = require('../models/movie.model')
const User = require('../models/user.model')

const dbtitle = 'movie-database'
mongoose.connect(`mongodb://localhost/${dbtitle}`, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
// mongoose.connect("mongodb+srv://diegort:asmadrid@cluster0.vtc7n.mongodb.net/test?authSource=admin&replicaSet=atlas-kn71d2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true")

Movie.collection.drop()

const listMovies = [{
        poster: 'https://m.media-amazon.com/images/M/MV5BY2NkZjEzMDgtN2RjYy00YzM1LWI4ZmQtMjIwYjFjNmI3ZGEwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX667_CR0,0,667,999_AL_.jpg',
        title: 'Goodfellas',
        director: 'Martin Scorsese',
        duration: 146,
        cast: ['Robert De Niro, Ray Liotta, Joe Pesci, ...'],
        synopsis: 'The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito in the Italian-American crime syndicate.',
        rating: 8.7
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SY1000_SX675_AL_.jpg',
        title: 'Interstellar',
        director: 'Christopher Nolan',
        duration: 169,
        cast: ['Matthew McConaughey, Anne Hathaway, Jessica Chastain, ...'],
        synopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        title: 'Love Actually',
        director: 'Richard Curtis',
        duration: 135,
        cast: ['Hugh Grant, Martine McCutcheon, Liam Neeson, ...'],
        synopsis: 'Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.',
        rating: 7.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZWI2NjliOTYtZjE1OS00YzAyLWJjYTQtYWNmZTQzMTQzNzVjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        title: 'Happy Gilmore',
        director: 'Dennis Dugan',
        duration: 92,
        cast: ['Adam Sandler, Christopher McDonald, Julie Bowen, ...'],
        synopsis: 'A rejected hockey player puts his skills to the golf course to save his grandmothers house.',
        rating: 7.0
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg',
        title: 'Django Unchained',
        director: 'Quentin Tarantino',
        duration: 165,
        cast: ['Jamie Foxx, Christoph Waltz, Leonardo DiCaprio, ...'],
        synopsis: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
        rating: 8.4
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY1200_CR89,0,630,1200_AL_.jpg',
        title: 'The Shawshank Redemption',
        director: 'Frank Darabont',
        duration: 144,
        cast: ['Tim Robbins, Morgan Freeman, Bob Gunton, ...'],
        synopsis: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        rating: 9.3
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
        title: 'The Dark Knight',
        director: 'Christopher Nolan',
        duration: 152,
        cast: ['Christian Bale, Heath Ledger, Aaron Eckhart , ...'],
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        rating: 9.0
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        title: 'The Godfather',
        director: 'Francis Ford Coppola',
        duration: 175,
        cast: ['Marlon Brando, Al Pacino, James Caan , ...'],
        synopsis: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        rating: 9.2
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMWMwMGQzZTItY2JlNC00OWZiLWIyMDctNDk2ZDQ2YjRjMWQ0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        title: 'The Godfather: Part II',
        director: 'Francis Ford Coppola',
        duration: 202,
        cast: ['Al Pacino, Robert De Niro, Robert Duvall, ...'],
        synopsis: 'The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.',
        rating: 9.0
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg',
        title: '12 Angry Men',
        director: 'Sidney Lumet',
        duration: 156,
        cast: ['Henry Fonda, Lee J. Cobb, Martin Balsam , ...'],
        synopsis: 'A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.',
        rating: 8.9
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: "Schindler's List",
        director: 'Steven Spielberg',
        duration: 195,
        cast: ['Liam Neeson, Ralph Fiennes, Ben Kingsley, ...'],
        synopsis: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        rating: 8.9
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
        title: 'Pulp Fiction',
        director: 'Quentin Tarantino',
        duration: 154,
        cast: ['John Travolta, Uma Thurman, Samuel L. Jackson, ...'],
        synopsis: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        rating: 8.9
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_.jpg',
        title: 'The Good, the Bad and the Ugly',
        director: 'Sergio Leone',
        duration: 178,
        cast: ['Clint Eastwood, Eli Wallach, Lee Van Cleef, ...'],
        synopsis: 'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
        rating: 8.8
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg',
        title: 'Fight Club',
        director: 'David Fincher',
        duration: 139,
        cast: ['Brad Pitt, Edward Norton, Meat Loaf, ...'],
        synopsis: 'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
        rating: 8.8
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BOWNmNzdjYjQtZjIyOS00MDhiLTg4ZWUtZGZkZDE4ZDQwZTY1XkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
        title: 'Forrest Gump',
        director: 'Robert Zemeckis',
        duration: 142,
        cast: ['Tom Hanks, Robin Wright, Gary Sinise, ...'],
        synopsis: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate and other historical events unfold through the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        rating: 8.8
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR84,0,630,1200_AL_.jpg',
        title: 'The Matrix',
        director: 'The Wachowski Brothers',
        duration: 136,
        cast: ['Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, ...'],
        synopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        rating: 8.7
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR88,0,630,1200_AL_.jpg',
        title: "One Flew Over the Cuckoo's Nest",
        director: 'Milos Forman',
        duration: 133,
        cast: ['Jack Nicholson, Louise Fletcher, Will Sampson, ...'],
        synopsis: 'A criminal pleads insanity and is admitted to a mental institution, where he rebels against the oppressive nurse and rallies up the scared patients.',
        rating: 8.7
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MDMxODMyN15BMl5BanBnXkFtZTgwNjM2OTE4MzE@._V1_.jpg',
        title: 'Seven Samurai',
        director: 'Akira Kurosawa',
        duration: 207,
        cast: ['Toshirô Mifune, Takashi Shimura, Keiko Tsushima , ...'],
        synopsis: 'A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: 'Se7en',
        director: 'David Fincher',
        duration: 127,
        cast: ['Morgan Freeman, Brad Pitt, Kevin Spacey, ...'],
        synopsis: 'Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his motives.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
        title: 'La vita è bella',
        director: 'Roberto Benigni',
        duration: 116,
        cast: ['Roberto Benigni, Nicoletta Braschi, Giorgio Cantarini, ...'],
        synopsis: 'When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNDJiNTEwMjMtOGQ1ZC00OTczLWFjZjctZWQ0MGJjZmFkMjcwXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: 'Cidade de Deus',
        director: 'Fernando Meirelles',
        duration: 130,
        cast: ['Alexandre Rodrigues, Leandro Firmino, Matheus Nachtergaele, ...'],
        synopsis: "In the slums of Rio, two kids' paths diverge as one struggles to become a photographer and the other a kingpin.",
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR91,0,630,1200_AL_.jpg',
        title: 'The Silence of the Lambs',
        director: 'Jonathan Demme',
        duration: 118,
        cast: ['Jodie Foster, Anthony Hopkins, Lawrence A. Bonney, ...'],
        synopsis: 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_UY1200_CR93,0,630,1200_AL_.jpg',
        title: 'Saving Private Ryan',
        director: 'Steven Spielberg',
        duration: 169,
        cast: ['Tom Hanks, Matt Damon, Tom Sizemore, ...'],
        synopsis: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg',
        title: 'Parasite',
        director: 'Bong Joon Ho',
        duration: 132,
        cast: ['Kang-ho Song, Sun-kyun Lee, Yeo-jeong Jo, ...'],
        synopsis: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UY1200_CR90,0,630,1200_AL_.jpg',
        title: 'The Green Mile',
        director: 'Frank Darabont',
        duration: 189,
        cast: ['Tom Hanks, Michael Clarke Duncan, David Morse, ...'],
        synopsis: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        rating: 8.6
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZDAwYTlhMDEtNTg0OS00NDY2LWJjOWItNWY3YTZkM2UxYzUzXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR111,0,630,1200_AL_.jpg',
        title: 'Léon: The Professional',
        director: 'Luc Besson',
        duration: 110,
        cast: ['Jean Reno, Gary Oldman, Natalie Portman, ...'],
        synopsis: "Mathilda, a 12-year-old girl, is reluctantly taken in by Léon, a professional assassin, after her family is murdered. An unusual relationship forms as she becomes his protégée and learns the assassin's trade.",
        rating: 8.5
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BYTViNjMyNmUtNDFkNC00ZDRlLThmMDUtZDU2YWE4NGI2ZjVmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg',
        title: 'The Usual Suspects',
        director: 'Bryan Singer',
        duration: 106,
        cast: ['Kevin Spacey, Gabriel Byrne, Chazz Palminteri, ...'],
        synopsis: 'A sole survivor tells of the twisty events leading up to a horrific gun battle on a boat, which began when five criminals met at a seemingly random police lineup.',
        rating: 8.5
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg',
        title: 'The Lion King',
        director: 'Roger Allers',
        duration: 88,
        cast: ['Matthew Broderick, Jeremy Irons, James Earl Jones, ...'],
        synopsis: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
        rating: 8.5
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR71,0,630,1200_AL_.jpg',
        title: 'Back to the Future',
        director: 'Robert Zemeckis',
        duration: 116,
        cast: ['Michael J. Fox, Christopher Lloyd, Lea Thompson, ...'],
        synopsis: 'Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the eccentric scientist Doc Brown.',
        rating: 8.5
    },
    {
        poster: 'https://m.media-amazon.com/images/M/MV5BOWRiZDIxZjktMTA1NC00MDQ2LWEzMjUtMTliZmY3NjQ3ODJiXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UY1200_CR119,0,630,1200_AL_.jpg',
        title: 'The Pianist',
        director: 'Roman Polanski',
        duration: 106,
        cast: ['Adrien Brody, Thomas Kretschmann, Frank Finlay, ...'],
        synopsis: 'A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.',
        rating: 8.5
    },
]



Movie.create(listMovies)
    .then(allMovies => console.log("These movies have been created: ", allMovies))
    .then(() => mongoose.connection.close(() => console.log("Conection closed after the seed")))
    .catch(err => console.log("There was an error creating the movies.", err))