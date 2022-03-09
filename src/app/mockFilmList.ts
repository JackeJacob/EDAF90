export interface Movie {
    id: number;
    name: string;
    year: number;
    runtime: number;
    genre: string[];
    director: string[];
    plot: string;
    poster: string;
    rating: string;
    note: string;
}

export const movies= [
 {
    id:1,
    name: "Skyfall",
    year: 2012,
    runtime: 143,
    genre: ["Action","Adventure","Thriller"],
    director:["Sam Mendes"],
    plot: "James Bond's loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.",
    poster: 'https://m.media-amazon.com/images/M/MV5BMWZiNjE2OWItMTkwNy00ZWQzLWI0NTgtMWE0NjNiYTljN2Q1XkEyXkFqcGdeQXVyNzAwMjYxMzA@._V1_SX300.jpg',
 },
 {
     id:2,
     name:"Avenger",
     year: 2006,
     runtime: 92,
     genre: ["Thriller"],
     director: ["Robert Markowitz"],
     plot: "A C.I.A. Agent steps in to stop a former Special Forces Operative on a for-hire mission that poses a global threat.",
     poster: "https://m.media-amazon.com/images/M/MV5BMTMzMjMwMjcyNl5BMl5BanBnXkFtZTcwNTA1NDgzMQ@@._V1_SX300.jpg"
     
 }
]