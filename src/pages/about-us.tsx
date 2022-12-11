import React from 'react';
import { createRoot } from 'react-dom/client';
import Citation from '../components/Citation';
import Layout from '../components/Layout';

import team from '../images/team.jpg';

const Page = () => {
    return (
        <Layout activePage="about-us" anotherLanguagePage="rolunk" requestedLanguage="en">
            <h2>"GO AND INVENT SOMETHING, ZOLI!"</h2>
            <p>
                This call to Professor Zoltán Noszticzius came from his old university classmate and friend, Sándor Balogh, founding director of Szentkirályi Ásványvíz Kft. And indeed, this call was one of the inspirations behind the invention of the hyperpure chlorine dioxide solution.
            </p>
            <img src={team} alt="Solumium team" width="600" height="400" className="team" />
            <h2>COMPANY HISTORY</h2>
            <h2 className="year">2007</h2>
            <p>
                Solumium Kft. Was established in 2007 to utilize the new Hungarian invention for producing hyperpure chlorine dioxide.
            </p>
            <h2 className="year">2008</h2>
            <p>
                The first product of our company was Solumium Dental, a professional dental disinfectant.<br />
                It was a big success: as a world-first, the use of hyperpure chlorine dioxide solution in dental practice was introduced in Hungary in 2008.
            </p>
            <p>
                Solumium Dental quickly became popular among Hungarian dentists as they found it to be more effective and gentler (free of side effects) than other products in dental and oral surgery applications, as well as skin and mucosal disinfection.
            </p>
            <p>
                They used it primarily to disinfect the root canal, an application in which Solumium replaced sodium hypochlorite products. They also used Solumium to treat aphthous, herpes and other oral infections, and to reduce inflammation. The positive experiences were published in a series of articles in the Hungarian professional journal Dental Hírek (Dental News). [31]
            </p>
            <p>
                Solumium has also gained a reputation abroad, with Austrian, Swiss, and American doctors and dentists among those integrating it in their professional practice.
            </p>
            <h2 className="year">2009</h2>
            <p>
                Our second product was Solumium Oral skin and mucous membrane disinfectant, which was used successfully by physicians and patients to relieve the symptoms of colds, sore throats, fungal and other skin infections, bedsores, and epithelial injuries, among others. [32]
            </p>
            <h2 className="year">2012</h2>
            <p>
                Solumium Oral was used in a successful clinical trial for the treatment of difficult-to-heal wounds. [32]
            </p>
            <h2 className="year">2015</h2>
            <p>
                In 2015, Solumium won the "Gran Prize" of the Swedish Chamber of Commerce.
            </p>
            <h2 className="year">2016</h2>
            <p>
                Adapting to the changing regulatory environment, Solumium products were registered as a medical device in 2016.
            </p>
            <p>
                We were very pleased to see the number of our customers growing and the popularity of our products rising steadily among both physicians and home users.
            </p>
            <h2 className="year">2021</h2>
            <p>
                In May 2021, OGYÉI ordered the withdrawal of our products Solumium Dental and Solumium Oral from the market because, in their view, the products did not meet the definition of medical device.<br />
                We immediately started working on new Solumium products to make hyperpure chlorine dioxide available again.
            </p>
            <h2 className="year">2022</h2>
            <p>
                Our new products are: Solumium Coral and Solumium Pental.<br />
                Hyperpure chlorine dioxide is now manufactured and marketed as a mouthwash concentrate.
            </p>
            <h2>THE PRESENT</h2>
            <p>
                The hyperpure chlorine dioxide solution is currently marketed as a mouthwash. Our products are Solumium Coral and Solumium Pental mouthwash concentrates.
            </p>
            <p>
                Once again, we would like to thank the doctors and our many users who have persevered and continue to put their trust in us. Thank you for your enthusiastic and useful feedback to help us improve our products and ensure the success of Solumium.
            </p>
            <h2>THE INVENTORS</h2>
            <p>
                The scientific research and experiments related to the invention were conducted by Professor Zoltán Noszticzius and his colleagues, who are presented below:
            </p>
            <p>
                <strong>Dr. Zoltán Noszticzius</strong><br />
                Solumium project manager. Chemical engineer, doctor of chemical science, Széchenyi-, Polányi- and Swedish Gran Prize Laureate. He is a specialist in oscillating reactions.<br />
                He is currently Professor Emeritus at the Budapest University of Technology and Economics.
            </p>
            <p>
                <strong>Dr. Wittmann Marian, PhD</strong><br />
                Biological engineer, associate professor at BME. She is a specialist in chemical mechanisms, and modeling of reaction systems.
            </p>
            <p>
                <strong>Dr. Kristóf Kály-Kullai, PhD</strong><br />
                Engineering physicist. He spent two years as a postdoctoral fellow researcher at the German Cancer Research Center in Heidelberg. Kristóf's expertise in the modeling of biochemical systems proved to be useful when studying the mechanism of action of Solumium.
            </p>
            <p>
                <strong>Marianna Megyesi</strong><br />
                She graduated from BME in chemical engineering. She is an expert in chemical analysis.<br />
                She is one of the most active participants in the series of experiments related to the invention.
            </p>
            <p>
                <strong>Dr. András Volford, PhD</strong><br />
                Chemical engineer, programmer. He graduated as a pharmaceutical engineer at BME.<br />
                He participated in the Solumium project primarily as an IT professional.<br />
                He is currently an employee of ChemAxon as a chemical computer scientist.
            </p>
            <Citation lang="en" />
        </Layout>
    );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Page />);