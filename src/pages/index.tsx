import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';

import hero from '../images/hero.jpg';

const requestedLanguage = window.localStorage.getItem('language') === 'en' ? 'en' : 'hu';

const Title = () => {
    if (requestedLanguage === 'hu') {
        return <h1>Solumium<br /><span>A hipertiszta lehelet</span></h1>;
    }
    return <h1>Solumium<br /><span>For a hyperpure breath</span></h1>;
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
                    A Solumium a világon az egyetlen szájvíz, mely a klór-dioxidot (ClO<sub>2</sub>) hipertiszta formában tartalmazza.
                </p>
                <p>
                    A klór-dioxid semlegesíti a szájszagot okozó, illékony kéntartalmú vegyületeket (VSC),<br />
                    és csökkenti a baktériumok számát, melyek e vegyületeket termelik.
                </p>
                <p>
                    Gátolja a plakk (bakteriális lepedék) képződését, és ezáltal segít megelőzni<br />
                    a fogszuvasodást és az ínygyulladást.
                </p>
                <p>
                    A Solumium hatékony: koncentrátumként sokkal több öblítést tesz lehetővé, mint a hagyományos szájvizek.
                </p>
                <p>
                    A klór-dioxid biztonságos: a termékeinkben található koncentrációban nincs ismert káros mellékhatása.
                </p>
                <p>
                    A klór-dioxid nem színezi a fogakat.
                </p>
                <p>
                    Minderről bővebben a TUDOMÁNYOS HÁTTÉR menüpontban olvashat.
                </p>
                <h2>MAGYAR TALÁLMÁNY</h2>
                <p>
                    A hipertiszta klór-dioxid oldat gyártási eljárását magyar tudósok fejlesztették ki.<br />
                    A találmányt szabadalom védi a világ számos országában, pl. az Egyesült Államokban<br />
                    és Kínában is.
                </p>
                <p>
                    A klór-dioxidról és a találmányról bővebben a TUDOMÁNYOS HÁTTÉR menüpontban olvashat.
                </p>
            </section>
        );
    }
    return (
        <section className="index__content">
            <h2>OUR NEW PRODUCTS: SOLUMIUM CORAL AND SOLUMIUM PENTAL</h2>
            <p>
                Hyperpure chlorine dioxide is now available as a mouthwash concentrate.<br />
                (for more information, see: PRODUCTS menu)
            </p>
            <h2>FOR A HYPERPURE BREATH</h2>
            <p>
                Solumium is the only mouthwash in the world that contains chlorine dioxide (ClO<sub>2</sub>) in hyperpure form.
            </p>
            <p>
                Chlorine dioxide neutralizes volatile sulfur-containing compounds (VSCs) that cause mouth malodor and reduces the number of bacteria that produce those compounds.
            </p>
            <p>
                It inhibits the formation of bacterial plaque and thus helps prevent tooth decay and gingivitis.
            </p>
            <p>
                Solumium is a cost-effective concentrate: you can rinse using a single bottle of Solumium many more times than with a regular mouthwash.
            </p>
            <p>
                Chlorine-dioxide is safe: in the concentrations available in our products it has no known harmful side-effects.
            </p>
            <p>
                Chlorine-dioxide does not stain teeth.
            </p>
            <p>
                For more information please see our SCIENTIFIC BACKGROUND menu.
            </p>
            <h2>HUNGARIAN INVENTION</h2>
            <p>
                The production method of the hyperpure chlorine dioxide solution was developed by Hungarian scientists. The invention is protected by patents in many countries around the world, e.g. in the United States and China.
            </p>
            <p>
                You can read more about chlorine dioxide and the invention in our SCIENTIFIC BACKGROUND menu.
            </p>
        </section>
    );
}

const Page = () => {
    return (
        <Layout activePage="index" anotherLanguagePage='index' requestedLanguage={requestedLanguage} withBadges>
            <Title />
            <img src={hero} alt="Solumium products" className="index__hero" width="769" height="464" />
            <Content />
        </Layout>
    )
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);