import React, { useState } from 'react'
import "../styles/List.css"

const books = [
    // Magnus Chase
    {
        id: 1,
        title: "Magnus Chase, The Sword of Summer",
        img: "./src/assets/magnuschasesos.png",
        author: "Rick Riordan",
        blurb: "Magnus Chase discovers he's the son of a Norse god, dies, and is taken to Valhalla, where he must reclaim a magical sword to stop Ragnarok.",
        link: "https://www.amazon.com/The-Sword-of-Summer-Rick-Riordan-audiobook/dp/B013XCVZWI/ref=sr_1_3?crid=1CYN3UFX338O2&dib=eyJ2IjoiMSJ9._4w_pwf_t4eDhAD40h4lmhNMP_TIEmEE2-zRYvTrDxTBH0Xk-UWbDiT_jcJiRsn-E-rYJWRoVXGbX1wVs-DhvH05ubL9u9DBPoWs0CZba5SAy1ymQSx2dH2HTm-JTS_5BTXOvfDNSzsSlkQMMPQpE2pY7ONZ0Zf2ThpufwdcavKXU1ah5s8KLRA6yNp1svl8FoyBXCoBmo-pSbCmJyCI6QgoxMNLsdGi9NYZhjFZ-AeEbdEspGdVaUDxaLYLu19gRwknWa6ukrqPZhjo9b25ZSBJJH_oBc9xhcSP036l8dTBpf62pHnRlFm2JXBjmS9uIxc_Cp1v81iABVdXh7YH_1ERRCT5_QIMma6_PGZnSbfm2-hHcX3WbwtX2fGW3JR0DwePEGIJXQ7B7N4Vb-EM1g7nAjGv_i6ilhqN_-vR1kIcUWXvYa6Nw-DcKeTcTb3M.UfGEu7_Ywap7JTzx8kt6PYDlKScQO9RuCgGyCB90ZYw&dib_tag=se&keywords=Magnus+Chase&qid=1741243401&sprefix=magnus+chase%2Caps%2C360&sr=8-3"
    },
    {
        id: 2,
        title: "Magnus Chase, The Hammer of Thor",
        img: "./src/assets/182015-ml-1645983.jpg",
        author: "Rick Riordan",
        blurb: "Thor’s hammer is missing, and Magnus and his friends must retrieve it before giants invade and Loki's schemes unfold.",
        link: "https://www.amazon.com/The-Hammer-of-Thor-Rick-Riordan-audiobook/dp/B01JKBU47S/ref=sr_1_5?crid=1CYN3UFX338O2&dib=eyJ2IjoiMSJ9._4w_pwf_t4eDhAD40h4lmhNMP_TIEmEE2-zRYvTrDxTBH0Xk-UWbDiT_jcJiRsn-E-rYJWRoVXGbX1wVs-DhvH05ubL9u9DBPoWs0CZba5SAy1ymQSx2dH2HTm-JTS_5BTXOvfDNSzsSlkQMMPQpE2pY7ONZ0Zf2ThpufwdcavKXU1ah5s8KLRA6yNp1svl8FoyBXCoBmo-pSbCmJyCI6QgoxMNLsdGi9NYZhjFZ-AeEbdEspGdVaUDxaLYLu19gRwknWa6ukrqPZhjo9b25ZSBJJH_oBc9xhcSP036l8dTBpf62pHnRlFm2JXBjmS9uIxc_Cp1v81iABVdXh7YH_1ERRCT5_QIMma6_PGZnSbfm2-hHcX3WbwtX2fGW3JR0DwePEGIJXQ7B7N4Vb-EM1g7nAjGv_i6ilhqN_-vR1kIcUWXvYa6Nw-DcKeTcTb3M.UfGEu7_Ywap7JTzx8kt6PYDlKScQO9RuCgGyCB90ZYw&dib_tag=se&keywords=Magnus+Chase&qid=1741243401&sprefix=magnus+chase%2Caps%2C360&sr=8-5"
    },
    {
        id: 3,
        title: "Magnus Chase, The Ship of the Dead",
        img: "./src/assets/magnus-chase-and-the-ship-of-the-dead-book-3-original-imah6qrhfzvryhws.webp",
        author: "Rick Riordan",
        blurb: " Magnus and his crew set sail to stop Loki from launching Ragnarok, battling gods and monsters along the way.",
        link: "https://www.amazon.com/The-Ship-of-Dead-Rick-Riordan-audiobook/dp/B074CLV32L/ref=sr_1_6?crid=1CYN3UFX338O2&dib=eyJ2IjoiMSJ9._4w_pwf_t4eDhAD40h4lmhNMP_TIEmEE2-zRYvTrDxTBH0Xk-UWbDiT_jcJiRsn-E-rYJWRoVXGbX1wVs-DhvH05ubL9u9DBPoWs0CZba5SAy1ymQSx2dH2HTm-JTS_5BTXOvfDNSzsSlkQMMPQpE2pY7ONZ0Zf2ThpufwdcavKXU1ah5s8KLRA6yNp1svl8FoyBXCoBmo-pSbCmJyCI6QgoxMNLsdGi9NYZhjFZ-AeEbdEspGdVaUDxaLYLu19gRwknWa6ukrqPZhjo9b25ZSBJJH_oBc9xhcSP036l8dTBpf62pHnRlFm2JXBjmS9uIxc_Cp1v81iABVdXh7YH_1ERRCT5_QIMma6_PGZnSbfm2-hHcX3WbwtX2fGW3JR0DwePEGIJXQ7B7N4Vb-EM1g7nAjGv_i6ilhqN_-vR1kIcUWXvYa6Nw-DcKeTcTb3M.UfGEu7_Ywap7JTzx8kt6PYDlKScQO9RuCgGyCB90ZYw&dib_tag=se&keywords=Magnus+Chase&qid=1741243401&sprefix=magnus+chase%2Caps%2C360&sr=8-6"
    },

    // Kane Chronicles
    {
        id: 4,
        title: "Kane Chronicles, The Red Pyramid",
        img: "./src/assets/images.jpeg",
        author: "Rick Riordan",
        blurb: "Siblings Carter and Sadie Kane discover they are powerful magicians and must stop the chaos god Set from destroying the world.",
        link: "https://www.amazon.com/Red-Pyramid-Kane-Chronicles-Book/dp/B0BGYHQ874/ref=sr_1_5?crid=3KHPU004KMXE7&dib=eyJ2IjoiMSJ9.nk5gVUF7EPL9wyOqNAHj6fhdL88qRud8gnP_qbYmkMgx6f13QLQh_YeGB4UeFq8JVHgw-j27sHhNcYWqOZYGZByapaHoTIf9qYrrbED8OBtChKxmVH8XUTVQjqxQ7Mmj-uu4fhzMFwVXIkydGHQisu7gUiD-PouRI06RzoblpyMnr38AnXWXdf0pmwQykI1N8juqb6i16dsmi7MgBUVZ-Dh5s1mD6Bc3H-gtXFBq4qw.935lE5V6cSOhfJVzQdauiuKI2_0fq2p08AqbW69Sb8Y&dib_tag=se&keywords=kane+chronicles&qid=1741243462&sprefix=Kane+Chr%2Caps%2C303&sr=8-5"
    },
    {
        id: 5,
        title: "Kane Chronicles, The Throne of Fire",
        img: "./src/assets/1bo02010080271xxx.webp",
        author: "Rick Riordan",
        blurb: "Carter and Sadie race against time to find the Book of Ra and awaken the sun god to prevent Apophis from rising",
        link: "https://www.amazon.com/Throne-Fire-Kane-Chronicles-Book/dp/B0BDSV76TN/ref=sr_1_13?crid=3KHPU004KMXE7&dib=eyJ2IjoiMSJ9.nk5gVUF7EPL9wyOqNAHj6fhdL88qRud8gnP_qbYmkMgx6f13QLQh_YeGB4UeFq8JVHgw-j27sHhNcYWqOZYGZByapaHoTIf9qYrrbED8OBtChKxmVH8XUTVQjqxQ7Mmj-uu4fhzMFwVXIkydGHQisu7gUiD-PouRI06RzoblpyMnr38AnXWXdf0pmwQykI1N8juqb6i16dsmi7MgBUVZ-Dh5s1mD6Bc3H-gtXFBq4qw.935lE5V6cSOhfJVzQdauiuKI2_0fq2p08AqbW69Sb8Y&dib_tag=se&keywords=kane+chronicles&qid=1741243462&sprefix=Kane+Chr%2Caps%2C303&sr=8-13"
    },
    {
        id: 6,
        title: "Kane Chronicles, The Serpant's Shadow",
        img: "./src/assets/images (1).jpeg",
        author: "Rick Riordan",
        blurb: "With Apophis threatening to destroy all of existence, the Kanes must find a way to defeat him before it's too late.",
        link: "https://www.amazon.com/Kane-Chronicles-Book-Three-Serpents-ebook/dp/B006UJXG8S/ref=sr_1_10?crid=3KHPU004KMXE7&dib=eyJ2IjoiMSJ9.nk5gVUF7EPL9wyOqNAHj6fhdL88qRud8gnP_qbYmkMgx6f13QLQh_YeGB4UeFq8JVHgw-j27sHhNcYWqOZYGZByapaHoTIf9qYrrbED8OBtChKxmVH8XUTVQjqxQ7Mmj-uu4fhzMFwVXIkydGHQisu7gUiD-PouRI06RzoblpyMnr38AnXWXdf0pmwQykI1N8juqb6i16dsmi7MgBUVZ-Dh5s1mD6Bc3H-gtXFBq4qw.935lE5V6cSOhfJVzQdauiuKI2_0fq2p08AqbW69Sb8Y&dib_tag=se&keywords=kane+chronicles&qid=1741243462&sprefix=Kane+Chr%2Caps%2C303&sr=8-10"
    },
    // Random Books
    {
        id: 7,
        title: "Animal Farm",
        img: "./src/assets/b104e9d668267dc8bd8c3a3d739eb00d.jpg",
        author: "George Orwell",
        blurb: "A group of farm animals overthrow their human owner, seeking equality, but their society gradually becomes a dictatorship under the pigs, led by Napoleon.",
        link: "https://www.amazon.com/Animal-Farm-George-Orwell/dp/0451526341/ref=sr_1_1?crid=3RXIFF6TVAED6&dib=eyJ2IjoiMSJ9.Vkg7IbhQtex1N0QinrghsAA6tdOfVk0hSLgYda6mU5yNrKVu5ZGn1pS-GdsAnw7l4Nmutsg__BRvLtyPHkNTSZ0gLChOPd6pR4QtnUD9Dye2GeMAjkLgrzd-Fs_yr7WE-DfdWdMRYssAnF0sJett4myukrkHEAuwcctknCBYhaBPtBfPaoVu53DLfxXC7n8Wrr15WDzZHMZWpnZN9wtilHOYtCwuvE8r4Qnz3sPT29M.DgjmC9Zt00v13qmxf8rPH2BJfJHOJdtMRUyZ9MjkSTQ&dib_tag=se&keywords=animal+farm&qid=1741243517&sprefix=animal+fa%2Caps%2C308&sr=8-1"
    },
    {
        id: 8,
        title: "Gone",
        img: "./src/assets/images (2).jpeg",
        author: "Michael Grant",
        blurb: " In a small town, everyone over the age of 15 suddenly vanishes, leaving kids to survive on their own as they develop mysterious powers and face rising chaos.",
        link: "https://www.amazon.com/Gone-Michael-Grant/dp/0061448788/ref=sr_1_9?crid=WJ3O6Z2EB4UJ&dib=eyJ2IjoiMSJ9.Oa1TRPULXE8Nb_lfiuZ5ao50dSNLS15Sr7pKMmIUp-g4Jl2dQV-26e3ew_7COj8zhdqQJP4TNFY3mr1Sr5aA1m8MDJlhzWn5-AC_pc6vZDMOPgSis74bcpVpYnDIpDs2YW1Fo9n3izKSCpmTI_X3Rqe9SE31p1ZJoazGWMVeLxlbsyseqVd1MwhwFvS7bj8KHcbOFOfd2vjuWa108gHITupqul17Ag4jz1mQvQkW1vc.741MUdGqRqAFDbl91U0NuLq9hLE-A33YC_tTuhCurlg&dib_tag=se&keywords=Gone&qid=1741243539&sprefix=gone%2Caps%2C307&sr=8-9"
    },
    {
        id: 9,
        title: "Sick",
        img: "./src/assets/17290253.jpg",
        author: "Tom Leveen",
        blurb: "A group of high school students must survive a terrifying outbreak that turns people into violent, flesh-craving monsters while trapped inside their school.",
        link: "https://www.amazon.com/Sick-Tom-Leveen/dp/1419708058/ref=sr_1_1?crid=1FK123RZBXKLO&dib=eyJ2IjoiMSJ9.uELrHXvhbHmsUPBc-ZO7FtONq_nPVkNRUO2lDsCsZWZpkP4WCWjaLZLw1o_ua-QU5M-gqNKbjs7wyxc1fV-EaUCKGmxokSbXr59DXK3jQuMf703iMbE5i4xYL8GElhyYXVKs8f4CbP3iMuGPP38vvg.AXqrVQoOU_snuLrRDDgIHS_BXTIrFaQIuMu9bnGq3S4&dib_tag=se&keywords=sick+tom+leveen&qid=1741243574&sprefix=sick+Tom+%2Caps%2C301&sr=8-1"
    },
    {
        id: 10,
        title: "A Series of Unfortunate Events",
        img: "./src/assets/9781405226738__08608.jpg",
        author: "Lemony Snicket",
        blurb: "Orphans Violet, Klaus, and Sunny Baudelaire face endless misfortunes as they try to escape the evil Count Olaf, who schemes to steal their family fortune.",
        link: "https://www.amazon.com/Unfortunate-Collection-Beginning-Miserable-Penultimate/dp/B00NHYPQQO/ref=sr_1_1?crid=3MTW856HRT78C&dib=eyJ2IjoiMSJ9.czjrIcWv0YeNgW0eBqgsdaqO7BFluxQgBZWAc00ef19sI7fK9nym0PTPNE3UwY5Z56YKFmx3DAqLyjeoeQjZ3DK_i0UD4Ka5dg7dOLXNR5ZUhStV5XSzB6hU0Zq9rI1WviekkcnKVEVoEn9CRhm7dZvKTVXPR3J8oIdZ0oWpcWo0G2oz_QXRYENutL60n_pnz9D93pTnIyyG_orXcfhbYVuCj_-5VBLTSe8uGZpVaoA.sT-PoW0uLdr3LojsL2JhTlb0-QRgjKeYPBaDnqPJLJU&dib_tag=se&keywords=a+series+of+unfortunate+events+books&qid=1741243590&sprefix=a+ser%2Caps%2C312&sr=8-1"
    },
    {
        id: 11,
        title: "Maximum Ride",
        img: "./src/assets/images (3).jpeg",
        author: "James Patterson",
        blurb: " A group of genetically engineered kids with wings escape from a secret lab and must fight to survive while uncovering the truth about their origins.",
        link: "https://www.amazon.com/Angel-Experiment-Maximum-Ride-Novel/dp/0316067954/ref=sr_1_1?crid=1ZGXLE2J9JVKC&dib=eyJ2IjoiMSJ9.T37tCMvDxcDcGCkKct9iH8RnI6lh5EJX79SpsX5-7tpBN4lH_2ikRS4JCcKIDrguKnQcmNvXogGmfWMxQKx_XJ8_uhgUmwgd3usHX6RhBiwEmsoKSEjgaibJLoR1E9UFCdl6eQVuh-wcm0mEZwyVNwj_-YeFRBFKMxrqconsjvPj7jzsESogLFcgQFCozKaJ5X_luBYAI8rLtOHg5DfOelirlLE7wsMbscRCggVBipI.8K1wGb5L4oxK9o1JzjLjvT2-1Mz0SujHWKkz5qdU1Bo&dib_tag=se&keywords=maximum+ride&qid=1741243612&sprefix=Maximum%2Caps%2C322&sr=8-1"
    },
    {
        id: 12,
        title: "Twilight Eclipse",
        img: "./src/assets/images (4).jpeg",
        author: "Stephenie Meyer",
        blurb: " As Bella struggles between her love for Edward and friendship with Jacob, a vengeful vampire builds an army to destroy her, forcing vampires and werewolves to unite.",
        link: "https://www.amazon.com/Eclipse-Twilight-Saga-Book-3/dp/B000UW50LW/ref=sr_1_1?crid=19CJ5VC3KVBMD&dib=eyJ2IjoiMSJ9.tfxUXJxY5IG5yqDx1zyvqkh4LMaQH3HOiGuiibhyfkCjY6f6ZS_6KnOMYvGQ_TwPRems5Zp5btAMpZYN4JFAamw_KylY2Sb7_0RQzommYMiz7SUNs0P1j80z1SUc2c9fWY0Q0B5kElZ2ps5EJbEVTAinPOV8kp_b3KCMlWM8LDUYRBwz9FpwS_rFuNmAIjaIYhZukNEmCFAoKUD39dsfgbhmOCkQurhTBmg9iUxN8dQ.3KDwq-kI50neT9up4pSxyRu0wT7XYxRxGREqccKxFpw&dib_tag=se&keywords=twilight+eclipse&qid=1741243282&sprefix=Twilight+Ec%2Caps%2C335&sr=8-1"
    },
    // Manga
    {
        id: 13,
        title: "Oyasumi PunPun",
        img: "./src/assets/images (6).jpeg",
        author: "Inio Asano",
        blurb: "A dark, coming-of-age manga following Punpun, a boy depicted as a bird-like figure, as he navigates trauma, love, and the harsh realities of life in a deeply emotional and surreal journey.",
        link: "https://www.amazon.com/Goodnight-Punpun-Vol-Inio-Asano/dp/1421586207/ref=sr_1_2?crid=39CC5Z30XC7UE&dib=eyJ2IjoiMSJ9.CqGFbxhy6N2DgznfoSARcXh4dsseaT7xqcIY0dG4He1L8d9FwOYaYkHLbYUuRRgXbqk3qVrv8LfyAtQObL7NcqJ8e0t_5XN4kjtSZ68ina8H1u0IAAvzXaLZMz0P0qLfDRiX42Ckq7g33b79YwUDTNE4g_BdSVyLfrvCQ1ZXuLGYfWyKxiWmUZ2XYk_hIdUkxff70dMtJdkIpZmzCC6P1qK5G30oeQIyerAIIdy0JVA.0PaeeUKEV0tQ4W1LLb1UMssFF91jBOWKm98OPmE4z2I&dib_tag=se&keywords=oyasumi+punpun&qid=1741243241&sprefix=Oyasu%2Caps%2C408&sr=8-2"
    },
    {
        id: 14,
        title: "Berserk",
        img: "./src/assets/images (5).jpeg",
        author: "Kentaro Miura",
        blurb: " A dark fantasy manga following Guts, a lone mercenary with a tragic past, as he battles demons, fate, and his former friend-turned-nemesis, Griffith, in a brutal world of war and betrayal.",
        link: "https://www.amazon.com/Berserk-Vol-1-Kentaro-Miura/dp/1593070209/ref=sr_1_4?crid=2EZ2VAW8CQK6J&dib=eyJ2IjoiMSJ9.--L7C-qgPCf5-bMkQMVjlu26yX6s_-jMdh8Ock-MDcmeBi_3QHkqEHH_cevJu_lXhSCOcmmLlCIZDNvV23eJRyWbpD5Jd5eCEby1_1_xN16dHefcL6l0oqzt-vztR9unhIERfDqHEMG4zxISoMrYYFPVYpb5wa9GCjJTqkWPOyqXLuU5nvHxEGbZ1mXLB-wrCRPXJrW0FiXB-AXVEhdMSHQ6xhqRlX-Uy5s7_4rHms4.-0Y_vVIRO_qo3d8NLsclOq8rhjqHiG4khFlBnIkVafE&dib_tag=se&keywords=Berserk&qid=1741243161&sprefix=berser%2Caps%2C453&sr=8-4"
    },
    {
        id: 15,
        title: "Tomodachi Game",
        img: "./src/assets/tomodachi_game_1.webp",
        author: "Mikoto Yamaguchi, Yuki Sato",
        blurb: " A group of friends is forced into a mysterious psychological game testing their trust, friendship, and morals, where betrayal can mean financial ruin or worse.",
        link: "https://www.amazon.com/Tomodachi-Game-Friend-Shonen-Magazine/dp/4063950514/ref=sr_1_2?crid=U05C5LO9V4PG&dib=eyJ2IjoiMSJ9.QOaG33FFaCYy2_blNW-WuiVnqKZ_Xn6-NzGkj_d0oCIjVzJxJT4N9udNUHs6YucuWR8HicGZV7yrWf_8SsxJ2cBoXgtx02gSBsUGZKTl-gKhzVDplPQXZY0j1V164IRi8CLFgjXz5kkaLnTABeLk4nXZSBfZ5dXeN-ATTnow8rpPW-pjeawo369WhzEYbAR1VBYsiafWoLnLAeWNbro_rhhYL9L4r71uXVEqdKQTu-U.-4YERkio-zAVv6As7ExLVrZblnAfFKLpEgUygHxrjJo&dib_tag=se&keywords=Tomodachi+game&qid=1741242609&sprefix=tomodachi+ga%2Caps%2C409&sr=8-2",
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
                                    <a href={book.link} target="_blank" rel="noopener noreferrer">Buy Now!</a>
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