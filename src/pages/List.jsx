import React, { useState } from 'react'
import "../styles/List.css"

const books = [
    // Magnus Chase
    {
        id: 1,
        title: "Magnus Chase, The Sword of Summer",
        img: "./src/assets/magnuschasesos.png",
        author: "Rick Riordan",
        blurb: "Magnus Chase discovers he's the son of a Norse god, dies, and is taken to Valhalla, where he must reclaim a magical sword to stop Ragnarok."
    },
    {
        id: 2,
        title: "Magnus Chase, The Hammer of Thor",
        img: "./src/assets/182015-ml-1645983.jpg",
        author: "Rick Riordan",
        blurb: "Thor’s hammer is missing, and Magnus and his friends must retrieve it before giants invade and Loki's schemes unfold.",
    },
    {
        id: 3,
        title: "Magnus Chase, The Ship of the Dead",
        img: "./src/assets/magnus-chase-and-the-ship-of-the-dead-book-3-original-imah6qrhfzvryhws.webp",
        author: "Rick Riordan",
        blurb: " Magnus and his crew set sail to stop Loki from launching Ragnarok, battling gods and monsters along the way.",
    },

    // Kane Chronicles
    {
        id: 4,
        title: "Kane Chronicles, The Red Pyramid",
        img: "./src/assets/images.jpeg",
        author: "Rick Riordan",
        blurb: "Siblings Carter and Sadie Kane discover they are powerful magicians and must stop the chaos god Set from destroying the world.",
    },
    {
        id: 5,
        title: "Kane Chronicles, The Throne of Fire",
        img: "./src/assets/1bo02010080271xxx.webp",
        author: "Rick Riordan",
        blurb: "Carter and Sadie race against time to find the Book of Ra and awaken the sun god to prevent Apophis from rising",
    },
    {
        id: 6,
        title: "Kane Chronicles, The Serpant's Shadow",
        img: "./src/assets/images (1).jpeg",
        author: "Rick Riordan",
        blurb: "With Apophis threatening to destroy all of existence, the Kanes must find a way to defeat him before it's too late.",
    },
    // Random Books
    {
        id: 7,
        title: "Animal Farm",
        img: "./src/assets/b104e9d668267dc8bd8c3a3d739eb00d.jpg",
        author: "George Orwell",
        blurb: "A group of farm animals overthrow their human owner, seeking equality, but their society gradually becomes a dictatorship under the pigs, led by Napoleon.",
    },
    {
        id: 8,
        title: "Gone",
        img: "./src/assets/images (2).jpeg",
        author: "Michael Grant",
        blurb: " In a small town, everyone over the age of 15 suddenly vanishes, leaving kids to survive on their own as they develop mysterious powers and face rising chaos.",
    },
    {
        id: 9,
        title: "Sick",
        img: "./src/assets/17290253.jpg",
        author: "Tom Leveen",
        blurb: "A group of high school students must survive a terrifying outbreak that turns people into violent, flesh-craving monsters while trapped inside their school.",
    },
    {
        id: 10,
        title: "A Series of Unfortunate Events",
        img: "./src/assets/9781405226738__08608.jpg",
        author: "Lemony Snicket",
        blurb: "Orphans Violet, Klaus, and Sunny Baudelaire face endless misfortunes as they try to escape the evil Count Olaf, who schemes to steal their family fortune.",
    },
    {
        id: 11,
        title: "Maximum Ride",
        img: "./src/assets/images (3).jpeg",
        author: "James Patterson",
        blurb: " A group of genetically engineered kids with wings escape from a secret lab and must fight to survive while uncovering the truth about their origins.",
    },
    {
        id: 12,
        title: "Twilight Eclipse",
        img: "./src/assets/images (4).jpeg",
        author: "Stephenie Meyer",
        blurb: " As Bella struggles between her love for Edward and friendship with Jacob, a vengeful vampire builds an army to destroy her, forcing vampires and werewolves to unite.",
    },
    // Manga
    {
        id: 13,
        title: "Oyasumi PunPun",
        img: "./src/assets/images (6).jpeg",
        author: "Inio Asano",
        blurb: "A dark, coming-of-age manga following Punpun, a boy depicted as a bird-like figure, as he navigates trauma, love, and the harsh realities of life in a deeply emotional and surreal journey.",
    },
    {
        id: 14,
        title: "Berserk",
        img: "./src/assets/images (5).jpeg",
        author: "Kentaro Miura",
        blurb: " A dark fantasy manga following Guts, a lone mercenary with a tragic past, as he battles demons, fate, and his former friend-turned-nemesis, Griffith, in a brutal world of war and betrayal.",
    },
    {
        id: 15,
        title: "Tomodachi Game",
        img: "./src/assets/tomodachi_game_1.webp",
        author: "Mikoto Yamaguchi, Yuki Sato",
        blurb: " A group of friends is forced into a mysterious psychological game testing their trust, friendship, and morals, where betrayal can mean financial ruin or worse.",
    },
]


function List() {
    const [selectedBookId, setSelectedBookId] = useState(null);

    return (
        <div className='main'>
            <div className='container'>
                <h1>Books and Manga</h1>
                <ul className='books'>
                    {books.map((book) => (
                        <li key={book.id}>
                            <h2>{book.title}</h2>
                            <img
                                src={book.img}
                                alt={book.title}
                                width={300}
                                height={400}
                                onClick={() => setSelectedBookId(book.id === selectedBookId ? null : book.id)}
                            />

                            {selectedBookId === book.id && (
                                <div className="book-info">
                                    <h2><strong>Author:</strong> {book.author}</h2>
                                    <p>{book.blurb}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default List