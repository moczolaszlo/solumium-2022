import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';

const Page = () => {
    return <Layout activePage="about-us" requestedLanguage="en">About us</Layout>;
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);