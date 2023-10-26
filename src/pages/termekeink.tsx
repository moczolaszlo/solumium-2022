import React from 'react';
import { createRoot } from 'react-dom/client';
import Layout from '../components/Layout';

import productCoral from '../images/product_coral.jpg';
import productPental from '../images/product_pental.jpg';

import manualCoral from '../docs/Solumium_SC-250_HasznalatiUtasitas_20230714d.pdf';
import manualPental from '../docs/Solumium_SP-30_HasznalatiUtasitas_20230714d2.pdf';

const Page = () => {
    return (
        <Layout activePage="termekeink" anotherLanguagePage="products" requestedLanguage="hu">
            <section className="product">
                <img src={productCoral} alt="Solumium Coral" width="425" height="425" />
                <div>
                    <h2>SOLUMIUM CORAL</h2>
                    <p>
                        SZÁJVÍZ KONCENTRÁTUM 0,03%<br />
                        250 ml<br />
                        AKÁR 200 SZÁJÖBLÍTÉSHEZ
                    </p>
                    <p>
                        A Solumium Coral a klór-dioxidnak köszönhetően két módon is csökkenti<br />
                        a kellemetlen szájszagot: egyrészt semlegesíti a baktériumok által termelt, illékony<br />
                        kéntartalmú vegyületeket, melyek a szájszagot okozzák, másrészt nagymértékben<br />
                        csökkenti a baktériumok számát is, ezáltal is gátolva a fenti vegyületek<br />
                        termelését.<br />
                        A termék  nem színezi a fogakat, és nem allergén.<br />
                        Hígítva alkalmazandó.
                    </p>
                    <p>
                        <a href={manualCoral} target="_blank">Solumium Coral 250ml Használati utasítás</a>
                    </p>
                    <p>
                        VÁSÁRLÁS:<br />
                        A Solumium Coral kapható vagy megrendelhető az ország bármely gyógyszertárában.<br />
                        Kiemelt partnereink:<br />
                        <a href="https://sanitaria.hu/solumium_coral_250_ml" target="_blank" rel="noopener noreferrer">Sanitaria Kft</a>, 1024 Budapest, Rómer Flóris u. 34. &nbsp;tel: (+36-1) 3360884<br />
                        <a href="https://www.lagymanyospatika.hu/termekeink/results,1-24?keyword=solumium" target="_blank" rel="noopener noreferrer">Lágymányos Patika</a>, 1111 Budapest, Budafoki út 47. &nbsp;tel: (+36-1) 4666246<br />
                        <a href="http://www.medmarket.hu/szfgyt/" target="_blank" rel="noopener noreferrer">Szent Ferenc Gyógyszertár</a>, 1024 Budapest, Retek u. 3. &nbsp;tel: (+36-1) 2124196<br />
                        <a href="http://www.medmarket.hu/szbgyt/" target="_blank" rel="noopener noreferrer">Szent Bernát Gyógyszertár</a>, 1126 Budapest, Böszörményi út 3a &nbsp;tel: (+36-1) 3555931
                    </p>
                </div>
            </section>
            <section className="product">
                <img src={productPental} alt="Solumium Pental" width="425" height="429" />
                <div>
                    <h2>SOLUMIUM PENTAL</h2>
                    <p>
                        SZÁJVÍZ KONCENTRÁTUM 0,12%<br />
                        UTAZÁSHOZ<br />
                        30 ml<br />
                        AKÁR 75 SZÁJÖBLÍTÉSHEZ
                    </p>
                    <p>
                        A Solumium Pental a klór-dioxidnak köszönhetően két módon is csökkenti<br />
                        a kellemetlen szájszagot: egyrészt semlegesíti a baktériumok által termelt, illékony<br />
                        kéntartalmú vegyületeket, melyek a szájszagot okozzák, másrészt nagymértékben<br />
                        csökkenti a baktériumok számát is, ezáltal is gátolva a fenti vegyületek<br />
                        termelését.<br />
                        A termék  nem színezi a fogakat, és nem allergén.<br />
                        Hígítva alkalmazandó.
                    </p>
                    <p>
                        <a href={manualPental} target="_blank">Solumium Pental 30ml Használati utasítás</a><br />
                    </p>
                    <p>
                        VÁSÁRLÁS:<br />
                        A Solumium Pental kapható vagy megrendelhető az ország bármely gyógyszertárában.<br />
                        Kiemelt partnereink:<br />
                        <a href="https://sanitaria.hu/solumium_pental_30ml" target="_blank" rel="noopener noreferrer">Sanitaria Kft</a>, 1024 Budapest, Rómer Flóris u. 34. &nbsp;tel: (+36-1) 3360884<br />
                        <a href="https://www.lagymanyospatika.hu/termekeink/results,1-24?keyword=solumium" target="_blank" rel="noopener noreferrer">Lágymányos Patika</a>, 1111 Budapest, Budafoki út 47. &nbsp;tel: (+36-1) 4666246<br />
                        <a href="http://www.medmarket.hu/szfgyt/" target="_blank" rel="noopener noreferrer">Szent Ferenc Gyógyszertár</a>, 1024 Budapest, Retek u. 3. &nbsp;tel: (+36-1) 2124196<br />
                        <a href="http://www.medmarket.hu/szbgyt/" target="_blank" rel="noopener noreferrer">Szent Bernát Gyógyszertár</a>, 1126 Budapest, Böszörményi út 3a &nbsp;tel: (+36-1) 3555931
                    </p>
                </div>
            </section>
        </Layout>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);