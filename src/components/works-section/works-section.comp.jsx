import React, { useContext } from 'react';
import { DataContext } from '../../DataProvider';
import './works-section.styles.scss';
import WorksItem from './works-item/works-item.comp';
import Title from '../title/title.comp';

export default function WorksSection(props) {
    const [projects, setProjects] = useContext(DataContext);

    return (
        <div className="works">
            <Title>All Works</Title>
            <div className="works__section">
                {
                    projects.map(({ img, title, icons, links, id, description }) => (

                        <WorksItem id={id} img={img} title={title} icons={icons} links={links} description={description} />

                    ))
                }
            </div>
        </div>
    )
}