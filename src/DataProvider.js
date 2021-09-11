import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [projects, setProjects] = useState([
        {
            id: 1,
            img: '/assets/author-site.jpg',
            title: 'Website',
            description: 'This is a website for a crime author. Lee Wood who has published over 10 books and has sold over 50,000 copies of his books.',
            icons: [
                {
                    img: '/assets/react-icon.png',
                }
            ],
            links: [
                {
                    icon: '/assets/website-icon.svg',
                    link: '#',
                    text: 'Website'
                },
                {
                    icon: '/assets/github-icon.svg',
                    link: '#',
                    text: 'GitHub'
                },
            ]
        },
        {
            id: 2,
            img: '/assets/coffee-site.jpg',
            title: 'Website',
            description: 'This is a website for a coffee shop. This is a demo project for my portfolio.',
            icons: [
                {
                    img: '/assets/html-icon.png',
                },
                {

                    img: '/assets/css-icon.png',
                },
                {

                    img: '/assets/js-icon.png',
                }

            ],
            links: [
                {
                    icon: '/assets/website-icon.svg',
                    link: '#',
                    text: 'Website'
                },
                {
                    icon: '/assets/github-icon.svg',

                    link: '#',
                    text: 'GitHub'
                },
            ]
        },
        {
            id: 3,
            img: '/assets/belfast-branding.jpg',
            title: 'Branding',
            description: 'This is a web design project I did for a local bed shop. Belfast beds.',
            icons: [
                {
                    img: '/assets/ps-icon.png',
                },
                {

                    img: '/assets/ai-icon.png',
                },
                {

                    img: '/assets/xd-icon.svg',
                }
            ],
            links: [
                {
                    icon: '/assets/behance-icon.svg',
                    link: '#',
                    text: 'behance'
                }
            ]
        },
        {
            id: 4,
            img: '/assets/belfast-webdesign.jpg',
            title: 'Web Design',
            description: 'This is a web design project I did for a local bed shop. Belfast beds.',
            icons: [
                {
                    img: '/assets/ps-icon.png',
                },
                {

                    img: '/assets/ai-icon.png',
                },
                {

                    img: '/assets/xd-icon.svg',
                }
            ],
            links: [
                {
                    icon: '/assets/behance-icon.svg',
                    link: '#',
                    text: 'behance'
                }
            ]
        },
        {
            id: 5,
            img: '/assets/my-portfolio-site.jpg',
            title: 'React site',
            description: 'This is a web design project I did for my portfolio react site.',
            icons: [
                {
                    img: '/assets/ps-icon.png',
                },
                {

                    img: '/assets/ai-icon.png',
                },
                {

                    img: '/assets/xd-icon.svg',
                }
            ],
            links: [
                {
                    icon: '/assets/behance-icon.svg',
                    link: '#',
                    text: 'behance'
                }
            ]
        },
        {
            id: 6,
            img: '/assets/hewtech-branding.jpg',
            title: 'Branding',
            description: 'This is a branding project I did for a tech company.',
            icons: [
                {
                    img: '/assets/ps-icon.png',
                },
                {

                    img: '/assets/ai-icon.png',
                },
                {

                    img: '/assets/xd-icon.svg',
                }
            ],
            links: [
                {
                    icon: '/assets/behance-icon.svg',
                    link: '#',
                    text: 'behance'
                }
            ]
        },
        {
            id: 7,
            img: '/assets/leopardi-branding.jpg',
            title: 'Branding',
            description: 'This is a branding project I did for a fashion company.',
            icons: [
                {
                    img: '/assets/ps-icon.png',
                },
                {

                    img: '/assets/ai-icon.png',
                },
                {

                    img: '/assets/xd-icon.svg',
                }
            ],
            links: [
                {
                    icon: '/assets/behance-icon.svg',
                    link: '#',
                    text: 'behance'
                }
            ]
        },

    ]
    )
    return (
        <DataContext.Provider value={[projects, setProjects]}>
            {props.children}
        </DataContext.Provider>
    )
}
