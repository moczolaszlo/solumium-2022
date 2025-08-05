import { createRoot } from 'react-dom/client';
import Citation from '../components/Citation';
import Layout from '../components/Layout';

import team from '../images/team.jpg';

const Page = () => {
    return (
        <Layout activePage="rolunk" anotherLanguagePage="about-us" requestedLanguage="hu">
            <h2>"TALÁLJ FEL VALAMIT, ZOLIKÁM!"</h2>
            <p>
                A fenti mondatot dr Noszticzius Zoltán professzornak a Szentkirályi Ásványvíz Kft alapító igazgatója, Balogh Sándor mondta, aki korábban Zoltán évfolyamtársa volt a Budapesti Műszaki Egyetemen. És valóban, ez a mondat volt az egyik inspiráció a hipertiszta klór-dioxid oldat feltalálása mögött.
            </p>
            <img src={team} alt="Solumium team" width="600" height="400" className="team" />
            <h2>CÉGÜNK TÖRTÉNETE</h2>
            <h2 className="year">2007.</h2>
            <p>
                A hipertiszta klór-dioxid találmány hasznosítására a Solumium Kft. 2007-ben alakult.
            </p>
            <h2 className="year">2008.</h2>
            <p>
                Cégünk első terméke a Solumium Dental fogászati fertőtlenítőszer volt.<br />
                Sikerére jellemző, hogy 2008-ban - a világon elsőként - Magyarországon bevezették a klór-dioxid hipertiszta oldatának alkalmazását a fogorvosi gyakorlatban.
            </p>
            <p>
                A Solumium Dental gyorsan ismertté és népszerűvé vált a magyar fogorvosok körében, mivel fogászati és szájsebészeti alkalmazásokban, valamint bőr- és nyálkahártya fertőtlenítésre más termékeknél hatékonyabbnak és szelídebbnek (mellékhatásoktól mentesnek) találták.<br />
                Szívesen alkalmazták mindenekelőtt a gyökércsatorna fertőtlenítésére (a nátrium-hipoklorit helyett), valamint afta, herpesz és más szájfertőzések kezelésére, továbbá gyulladások csökkentésére is.<br />
                A kedvező tapasztalatokról a Dental Hírek magazin cikksorozatban számolt be. [31]
            </p>
            <p>
                A Solumium termékeknek külföldön is híre ment: a szert alkalmazni kezdték osztrák, svájci és amerikai fogászok is.
            </p>
            <h2 className="year">2009.</h2>
            <p>
                Második termékünk a Solumium Oral bőr- és nyálkahártya fertőtlenítő szer volt, melyet orvosok és páciensek is sikerrel alkalmaztak többek között megfázás, torokgyulladás tüneteinek enyhítésére, valamint gombás és egyéb bőrfertőzések, felfekvések, hámsérülések [32] kezelésére.
            </p>
            <h2 className="year">2012.</h2>
            <p>
                A Solumium Orallal sikeres klinikai vizsgálat folyt nehezen gyógyuló sebek klór-dioxiddal történő kezelésére. [32]
            </p>
            <h2 className="year">2015.</h2>
            <p>
                A Solumium 2015-ben elnyerte a Svéd Kereskedelmi Testület "Gran Prize" díját.
            </p>
            <h2 className="year">2016.</h2>
            <p>
                A változó jogszabályi környezethez alkalmazkodva a Solumium termékeket 2016-ban orvostechnikai eszközként regisztráltuk.
            </p>
            <p>
                Nagy örömünkre szolgált, hogy felhasználóink tábora és termékeink népszerűsége<br />
                mind az orvosok, mind az otthoni felhasználók körében folyamatosan nőtt.
            </p>
            <h2 className="year">2021.</h2>
            <p>
                2021. májusában az OGYÉI elrendelte a Solumium Dental és Solumium Oral termékek forgalmazásának megszüntetését, mivel álláspontjuk szerint ezen termékek nem feleltek meg az orvostechnikai eszköz definíciójának.<br />
                Azonnal nagy erőkkel dolgozni kezdtünk azon, hogy a hipertiszta klór-dioxid oldat Solumium termék formájában ismét elérhető legyen.
            </p>
            <h2 className="year">2022.</h2>
            <p>
                Új termékeink: Solumium Coral és Solumium Pental.<br />
                A hipertiszta klór-dioxidot immár szájvíz-koncentrátumként gyártjuk és forgalmazzuk.
            </p>
            <h2>A JELEN</h2>
            <p>
                A hipertiszta klór-dioxid oldatot jelenleg szájvízként forgalmazzuk. Termékeink: Solumium Coral és Solumium Pental szájvíz-koncentrátumok.
            </p>
            <p>
                Ezúton mondunk ismét köszönetet azon orvosoknak, és otthoni felhasználóinknak, akik kitartottak, és jelenleg is kitartanak mellettünk. Köszönjük lelkes és hasznos visszajelzéseiket, melyekkel segítik termékeink fejlesztését és sikerét.
            </p>
            <h2>A FELTALÁLÓK</h2>
            <p>
                A találmányhoz kapcsolódó tudományos kutatást és kísérleteket dr. Noszticzius Zoltán professzor és munkatársai végezték, akiket alább mutatunk be:
            </p>
            <p>
                <strong>Dr. Noszticzius Zoltán</strong><br />
                A Solumium projekt vezetője. Vegyészmérnök, a kémiai tudomány doktora, Széchenyi-, Polányi- és Svéd Gran-Prize díjas egyetemi tanár. Szakterülete az oszcillációs reakciók témaköre. Jelenleg a BME Professor Emeritusa.
            </p>
            <p>
                <strong>Dr. Wittmann Marian, PhD</strong><br />
                Biológusmérnök, a BME docense. Szakterülete a kémiai mechanizmusok vizsgálata,<br />
                reakciórendszerek modellezése.
            </p>
            <p>
                <strong>Dr. Kály-Kullai Kristóf, PhD</strong><br />
                Mérnök-fizikus. Ösztöndíjas kutatóként két évet töltött Heidelbergben, a Német Rákkutató Központban. A Solumium hatásmechanizmusának vizsgálatakor hasznosnak bizonyult, hogy Kristóf fő szakterülete a biokémiai rendszerek modellezése.
            </p>
            <p>
                <strong>Megyesi Marianna</strong><br />
                A BME-n végzett, vegyészmérnökként. A kémiai analízis szakértője.<br />
                A találmányhoz kapcsolódó kísérletsorozat egyik legaktívabb résztvevője.
            </p>
            <p>
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