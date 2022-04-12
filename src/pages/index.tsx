import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';

import hero from '../images/hero.jpg';

const requestedLanguage = window.localStorage.getItem('language') === 'en' ? 'en' : 'hu';

const Title = () => {
    if (requestedLanguage === 'hu') {
        return <h1>A Solumium<br />visszatért.</h1>;
    }
    return <></>;
}

const Content = () => {
    if (requestedLanguage === 'hu') {
        return (
            <section className="index__content">
                <h2>ÚJ TERMÉKEINK: SOLUMIUM CORAL ÉS SOLUMIUM PENTAL</h2>
                <p>
                    A hipertiszta klór-dioxidot immár szájvíz-koncentrátumként gyártjuk és forgalmazzuk.<br />
                    ( bővebben ld: TERMÉKEINK menü )
                </p>
                <h2>HIPERTISZTA LEHELET</h2>
                <p>
                    A Solumium a világon az egyetlen szájvíz, mely a klór-dioxidot hipertiszta formában tartalmazza.<br />
                    A klór-dioxid semlegesíti a szájszagot okozó, illékony kéntartalmú vegyületeket (VSC), és elpusztítja a baktériumokat, melyek e vegyületeket termelik.<br />
                    A klór-dioxid egyedülálló hatóanyag: egyrészt a termékeinkben található koncentrációban nincs ismert káros mellékhatása, másrészt nem színezi a fogakat.
                </p>
                <h2>MAGYAR TALÁLMÁNY</h2>
                <p>
                    A hipertiszta klór-dioxid oldat gyártási eljárását magyar tudósok fejlesztették ki.<br />
                    Az eljárást nemzetközi szabadalom védi többek között az Egyesült Államokban és Kínában is.<br />
                    A klór-dioxidról és a találmányról bővebben a TUDOMÁNYOS HÁTTÉR menüpontban olvashat.
                </p>
            </section>
        );
    }
    return <>EN</>;
}

const Page = () => {
    return (
        <Layout activePage="index" requestedLanguage={requestedLanguage} withBadges>
            <Title />
            <img src={hero} alt="Solumium products" className="index__hero" width="769" height="464" />
            <Content />
        </Layout>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);