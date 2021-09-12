import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      img: "/assets/author-site.jpg",
      title: "Website",
      description:
        "Website for an author. Lee Wood is a published crime fiction writer.",
      icons: [
        {
          img: "/assets/react-icon.png",
        },
      ],
      links: [
        {
          icon: "/assets/website-icon.svg",
          link: "#",
          text: "Website",
        },
        {
          icon: "/assets/github-icon.svg",
          link: "#",
          text: "GitHub",
        },
      ],
    },
    {
      id: 2,
      img: "/assets/coffee-site.jpg",
      title: "Website",
      description: "Fictional website for a coffee shop.",
      icons: [
        {
          img: "/assets/html-icon.png",
        },
        {
          img: "/assets/css-icon.png",
        },
        {
          img: "/assets/js-icon.png",
        },
      ],
      links: [
        {
          icon: "/assets/website-icon.svg",
          link: "#",
          text: "Website",
        },
        {
          icon: "/assets/github-icon.svg",

          link: "#",
          text: "GitHub",
        },
      ],
    },
    {
      id: 3,
      img: "/assets/belfast-branding.jpg",
      title: "Branding",
      description: "A commercial ecommerce web design for a local bed shop.",
      icons: [
        {
          img: "/assets/ps-icon.png",
        },
        {
          img: "/assets/ai-icon.png",
        },
        {
          img: "/assets/xd-icon.svg",
        },
      ],
      links: [
        {
          icon: "/assets/behance-icon.svg",
          link: "#",
          text: "behance",
        },
      ],
    },
    {
      id: 4,
      img: "/assets/belfast-webdesign.jpg",
      title: "Web Design",
      description:
        "This is a web design project I did for a local bed shop. Belfast beds.",
      icons: [
        {
          img: "/assets/ps-icon.png",
        },
        {
          img: "/assets/ai-icon.png",
        },
        {
          img: "/assets/xd-icon.svg",
        },
      ],
      links: [
        {
          icon: "/assets/behance-icon.svg",
          link: "#",
          text: "behance",
        },
      ],
    },
    {
      id: 5,
      img: "/assets/my-portfolio-site.jpg",
      title: "React site",
      description: "This website... React portfolio site.",
      icons: [
        {
          img: "/assets/ps-icon.png",
        },
        {
          img: "/assets/ai-icon.png",
        },
        {
          img: "/assets/xd-icon.svg",
        },
      ],
      links: [
        {
          icon: "/assets/behance-icon.svg",
          link: "#",
          text: "behance",
        },
      ],
    },
    {
      id: 6,
      img: "/assets/hewtech-branding.jpg",
      title: "Branding",
      description: "Branding project for a tech company.",
      icons: [
        {
          img: "/assets/ps-icon.png",
        },
        {
          img: "/assets/ai-icon.png",
        },
        {
          img: "/assets/xd-icon.svg",
        },
      ],
      links: [
        {
          icon: "/assets/behance-icon.svg",
          link: "#",
          text: "behance",
        },
      ],
    },
    {
      id: 7,
      img: "/assets/leopardi-branding.jpg",
      title: "Branding",
      description: "Branding project for a womens clothing business.",
      icons: [
        {
          img: "/assets/ps-icon.png",
        },
        {
          img: "/assets/ai-icon.png",
        },
        {
          img: "/assets/xd-icon.svg",
        },
      ],
      links: [
        {
          icon: "/assets/behance-icon.svg",
          link: "#",
          text: "behance",
        },
      ],
    },
  ]);
  return (
    <DataContext.Provider value={[projects, setProjects]}>
      {props.children}
    </DataContext.Provider>
  );
};
