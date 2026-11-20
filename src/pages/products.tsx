import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';
import Partners from '../components/Partners';

import productCoral from '../images/product_coral.jpg';
import productPental from '../images/product_pental.jpg';

import manualCoral from '../docs/Solumium_SC-250_User-Instructions_20230714d.pdf';
import manualPental from '../docs/Solumium_SP-30_User-Instructions_20230714d2.pdf';

const Page = () => {
    return (
        <Layout activePage="products" anotherLanguagePage="termekeink" requestedLanguage="en">
            <section className="product">
                <img src={productCoral} alt="Solumium Coral" width="425" height="425" />
                <div>
                    <h2>SOLUMIUM CORAL</h2>
                    <p>
                        MOUTHWASH CONCENTRATE 0,03%<br />
                        250 ml<br />
                        FOR UP TO 200 ORAL RINSINGS
                    </p>
                    <p>
                        The chlorine dioxide in Solumium Coral is highly effective in reducing malodor in the mouth.<br />
                        Bad smell of the mouth is generally due to the volatile sulfur compounds produced by bacteria. Solumium fights malodor in two ways: it neutralizes the above compounds, and it also greatly reduces the number of bacteria, thereby blocking the production of the compounds.<br />
                        The product does not stain teeth, and is not allergenic.<br />
                        Dilute before use.
                    </p>
                    <p>
                        <a href={manualCoral} target="_blank">Solumium Coral 250ml User Instructions</a>
                    </p>
                    <p>
                        BUY:<br />
                        Solumium Coral is available or can be ordered at any pharmacy in the country.<br />
                        Our key partners:<br />
                        <Partners lang="en" />
                    </p>
                </div>
            </section>
            <section className="product">
                <img src={productPental} alt="Solumium Pental" width="425" height="429" />
                <div>
                    <h2>SOLUMIUM PENTAL</h2>
                    <p>
                        MOUTHWASH CONCENTRATE 0,12%<br />
                        FOR TRAVELLING<br />
                        30 ml<br />
                        FOR UP TO 75 ORAL RINSINGS
                    </p>
                    <p>
                        The chlorine dioxide in Solumium Pental is highly effective in reducing malodor in the mouth.<br />
                        Bad smell of the mouth is generally due to the volatile sulfur compounds produced by bacteria. Solumium fights malodor in two ways: it neutralizes the above compounds, and it also greatly reduces the number of bacteria, thereby blocking the production of the compounds.<br />
                        The product does not stain teeth, and is not allergenic.<br />
                        Dilute before use.
                    </p>
                    <p>
                        <a href={manualPental} target="_blank">Solumium Pental 30ml User Instructions</a><br />
                    </p>
                    <p>
                        BUY:<br />
                        Solumium Pental is available or can be ordered at any pharmacy in the country.<br />
                        Our key partners:<br />
                        <Partners lang="en" />
                    </p>
                </div>
            </section>
        </Layout>
    );
};

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(<Page />);