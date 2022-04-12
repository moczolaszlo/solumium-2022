import React from 'react';
import { createRoot } from 'react-dom/client';
import Citation from '../components/Citation';
import Layout from '../components/Layout';

const Page = () => {
    return (
        <Layout activePage="rolunk" requestedLanguage="hu">
            <h2>"TALÁLJ FEL VALAMIT, ZOLIKÁM!"</h2>
            <p>
                A fenti mondatot dr Noszticzius Zoltán professzornak a Szentkirályi Ásványvíz Kft alapító igazgatója, a néhai Balogh Sándor mondta, aki korábban Zoltán évfolyamtársa volt a Budapesti Műszaki Egyetemen. És valóban, ez a mondat volt az egyik inspiráció a hipertiszta klór-dioxid oldat feltalálása mögött.
            </p>
            <h2>TÖRTÉNETÜNK</h2>
            <p>
                A találmány hasznosítására 2007-ben alakult a Solumium Kft.<br />
                <br />
                Cégünk első terméke a Solumium Dental fogászati fertőtlenítőszer volt, ami gyorsan ismertté és népszerűvé vált a magyar fogorvosok körében, mivel fogászati és szájsebészeti alkalmazásokban, valamint bőr- és nyálkahártya fertőtlenítésre más termékeknél hatékonyabbnak és szelídebbnek (mellékhatásoktól mentesnek) találták.<br />
                <br />
                A Solumium termékeknek külföldön is híre ment: a szert alkalmazó orvosok és fogorvosok között volt osztrák, svájci és amerikai is.<br />
                <br />
                Második termékünk a Solumium Oral bőr- és nyálkahártya fertőtlenítő szer volt,<br />
                melyet orvosok és páciensek is sikerrel alkalmaztak többek között megfázás, torokgyulladás tüneteinek enyhítésére, valamint gombás és egyéb bőrfertőzések, felfekvések, hámsérülések [17] kezelésére.<br />
                <br />
                A Solumium 2015-ben elnyerte a Svéd Kereskedelmi Testület "Gran Prize" díját.<br />
                <br />
                A változó jogszabályi környezethez alkalmazkodva a Solumium termékeket 2016-ban<br />
                orvostechnikai eszközként regisztráltuk.<br />
                <br />
                Nagy örömünkre szolgált, hogy felhasználóink tábora és termékeink népszerűsége<br />
                mind az orvosok, mind az otthoni felhasználók körében folyamatosan nőtt.<br />
                <br />
                Sajnos 2021. májusában az OGYÉI egyes Solumium termékek forgalmazásának megszüntetését rendelte el, mivel álláspontjuk szerint a termékek nem feleltek meg az orvostechnikai eszköz definíciójának.
            </p>
            <h2>A JELEN</h2>
            <p>
                A hipertiszta klór-dioxid oldatot jelenleg szájvízként forgalmazzuk, Solumium Coral és Solumium Pental szájvíz-koncentrátumok.<br />
                <br />
                Ezúton mondunk ismét köszönetet azon orvosoknak, és otthoni felhasználóinknak    akik kitartottak, és jelenleg is kitartanak mellettünk. Köszönjük lelkes és hasznos visszajelzéseiket, melyekkel segítik termékeink fejlesztését és sikerét.
            </p>
            <h2>A FELTALÁLÓK</h2>
            <p>
                A találmányhoz kapcsolódó tudományos kutatást és kísérleteket dr. Noszticzius Zoltán professzor és munkatársai végezték, akiket alább mutatunk be:<br />
                <br />
                <strong>Dr. Noszticzius Zoltán</strong><br />
                A Solumium projekt vezetője. Vegyészmérnök, a kémiai tudomány doktora, Széchenyi- és Polányi-díjas egyetemi tanár. Szakterülete az oszcillációs reakciók témaköre.<br />
                <strong>Dr. Wittmann Marian, PhD</strong><br />
                Biológusmérnök, a BME docense. Szakterülete a kémiai mechanizmusok vizsgálata,<br />
                reakciórendszerek modellezése.<br />
                <strong>Dr. Kály-Kullai Kristóf, PhD</strong><br />
                Mérnök-fizikus. Ösztöndíjas kutatóként két évet töltött Heidelbergben, a Német Rákkutató Központban. A Solumium hatásmechanizmusának vizsgálatakor hasznosnak bizonyult, hogy Kristóf fő szakterülete a biokémiai rendszerek modellezése.<br />
                <strong>Megyesi Marianna</strong><br />
                A BME-n végzett, vegyészmérnökként. A kémiai analízis szakértője.<br />
                A találmányhoz kapcsolódó kísérletsorozat egyik legaktívabb résztvevője.<br />
                <strong>Dr. Volford András, PhD</strong><br />
                Vegyészmérnök, programozó. Gyógyszervegyészként végzett a BME-n.<br />
                A Solumium projektben elsősorban informatikai szakemberként vett részt.<br />
                Jelenleg kémiai informatikusként a ChemAxon munkatársa.
            </p>
            <Citation lang="hu" />
        </Layout>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);