import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';

import productCoral from '../images/product_coral.jpg';
import productPental from '../images/product_pental.jpg';

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
                        <a href="#" target="_blank">Solumium Coral 250ml User Instructions</a>
                    </p>
                    <p>
                        BUY:<br />
                        Solumium Coral is available or can be ordered at any pharmacy in the country.<br />
                        Our key partners:<br />
                        <a href="https://sanitaria.hu/solumium_coral_250_ml" target="_blank" rel="noopener noreferrer">Sanitaria Kft</a>, 1024 Budapest, Rómer Flóris u. 34. &nbsp;phone: (+36-1) 3360884<br />
                        <a href="https://www.lagymanyospatika.hu/termekeink/results,1-24?keyword=solumium" target="_blank" rel="noopener noreferrer">Lágymányos Patika Pharmacy</a>, 1111 Budapest, Budafoki út 47. &nbsp;phone: (+36-1) 4666246<br />
                        <a href="http://www.medmarket.hu/szfgyt/" target="_blank" rel="noopener noreferrer">Szent Ferenc Pharmacy</a>, 1024 Budapest, Retek u. 3. &nbsp;phone: (+36-1) 2124196<br />
                        <a href="http://www.medmarket.hu/szbgyt/" target="_blank" rel="noopener noreferrer">Szent Bernát Pharmacy</a>, 1126 Budapest, Böszörményi út 3a &nbsp;phone: (+36-1) 3555931
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
                        <a href="#" target="_blank">Solumium Pental 30ml User Instructions</a><br />
                    </p>
                    <p>
                        BUY:<br />
                        Solumium Pental is available or can be ordered at any pharmacy in the country.<br />
                        Our key partners:<br />
                        <a href="https://sanitaria.hu/solumium_pental_30ml" target="_blank" rel="noopener noreferrer">Sanitaria Kft</a>, 1024 Budapest, Rómer Flóris u. 34. &nbsp;phone: (+36-1) 3360884<br />
                        <a href="https://www.lagymanyospatika.hu/termekeink/results,1-24?keyword=solumium" target="_blank" rel="noopener noreferrer">Lágymányos Patika Pharmacy</a>, 1111 Budapest, Budafoki út 47. &nbsp;phone: (+36-1) 4666246<br />
                        <a href="http://www.medmarket.hu/szfgyt/" target="_blank" rel="noopener noreferrer">Szent Ferenc Pharmacy</a>, 1024 Budapest, Retek u. 3. &nbsp;phone: (+36-1) 2124196<br />
                        <a href="http://www.medmarket.hu/szbgyt/" target="_blank" rel="noopener noreferrer">Szent Bernát Pharmacy</a>, 1126 Budapest, Böszörményi út 3a &nbsp;phone: (+36-1) 3555931
                    </p>
                </div>
            </section>
        </Layout>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);