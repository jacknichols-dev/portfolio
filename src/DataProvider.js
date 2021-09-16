import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      img: "/assets/author-site.jpg",
      title: "Website",
      description:
        "Commercial project built in React for a crime fiction author's website.",
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
      description: "Project which was more for practicing and learning new technologies.",
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
      description: "Branding project for a local furniture store.",
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
        "Commercial ecommerce web design project for a local bed shop.",
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
