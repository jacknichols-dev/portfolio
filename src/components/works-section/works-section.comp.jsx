import React, { useContext } from 'react';
import { DataContext } from '../../DataProvider';
import './works-section.styles.scss';
import ScrollAnimation from 'react-animate-on-scroll';
import WorksItem from './works-item/works-item.comp';
import Title from '../title/title.comp';

export default function WorksSection(props) {
    const [projects, setProjects] = useContext(DataContext);

    return (
        <div className="works">
            <Title>Projects</Title>
            <div className="works__section">
                {
                    projects.map(({ img, title, icons, links, id, description }) => (
                        <ScrollAnimation animateIn="fadeIn" duration="1" animateOnce>
                            <WorksItem id={id} img={img} title={title} icons={icons} links={links} description={description} />
                        </ScrollAnimation>

                    ))
                }
            </div>
        </div>
    )
}