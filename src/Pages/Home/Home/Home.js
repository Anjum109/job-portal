import React from 'react';
import Cover from '../Cover/Cover';
import ExperienceJob from '../ExperiencedJob/ExperienceJob';
import ItCompanies from '../ItCompanies/ItCompanies';
import JobsCard from '../JobsCard/JobsCard';

const Home = () => {
    return (
        <div>
            <Cover></Cover>
            <JobsCard></JobsCard>
            <ExperienceJob></ExperienceJob>
            <ItCompanies></ItCompanies>
        </div>
    );
};

export default Home;