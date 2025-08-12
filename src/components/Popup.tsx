import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import bacik from '../images/rosszbaci-per-jobaci.png';
import iksz from '../images/iksz.png';

const Popup = ({ language }: { language: 'hu' | 'en' }) => {
    const [visible, setVisible] = useState(window.sessionStorage.getItem('isPopupVisible') !== 'false');

    const onClose = () => {
        setVisible(false);
        // window.sessionStorage.setItem('isPopupVisible', 'false');
    };

    // Close modal on Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose()
            }
        };

        if (visible) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [visible]);

    if (!visible) return null;

    return (
        <RemoveScroll forwardProps>
            <div className="overlay" data-lang={language}>
                <div className="popup">
                    <h2>{language === 'hu' ? 'VÁLOGATHAT-E EGY SZÁJVÍZ?' : 'CAN A MOUTHWASH BE SELECTIVE?'}</h2>
                    <h3>{language === 'hu' ? 'TEHET-E KÜLÖNBSÉGET KÁROS ÉS HASZNOS BAKTÉRIUMOK KÖZÖTT?' : 'CAN IT MAKE A DIFFERENCE BETWEEN HARMFUL AND USEFUL BACTERIA?'}</h3>
                    <img src={bacik} width="164" height="81" />
                    {language === 'hu' ? (
                        <p>
                            Mint kiderült, igen!<br />
                            Arról a különleges és előnyös jelenségről van szó, hogy a tisztán klór-dioxid alapú szájvíz<br />
                            használata elsősorban a káros baktériumokat irtja, a hasznos baktériumokat kevésbé.<br />
                            Ennek a szelektív hatásnak a tudományos hátterét mutatta most be egy magyar fizikusokból,<br />
                            vegyészekből és orvosokból álló kutatócsoport.<br />
                            Az általuk publikált (angol nyelvű) digitális kézirat 2025. júliusában került fel a ChemRxiv<br />
                            kémiai tudományos portálra, és onnan letölthető a lenti linken.<br />
                            A világpiacon jelenleg egyetlen ilyen, tisztán klór-dioxid alapú szájvíz kapható: a Solumium.<br />
                        </p>                        
                    ): (
                        <p>
                            As it turns out, yes!<br />
                            It is a special and beneficial phenomenon that the use of a mouthwash based on<br />
                            pure chlorine dioxide primarily kills harmful bacteria, and kills less of the beneficial bacteria.<br />
                            The scientific background of this selective effect has now been presented by a Hungarian research<br />
                            group consisting of physicists, chemists and doctors. They published the digital manuscript on the<br />
                            chemical science portal ChemRxiv in July 2025. The document can be downloaded from the link below.<br />
                            There is only one such mouthwash based on pure chlorine dioxide on the world market today,<br />
                            and that is Solumium.
                        </p>
                    )}
                    <a href="https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078" target="_blank" rel="noopener noreferrer">https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078</a>
                    <button aria-label='Close popup' onClick={() => onClose()}>
                        <img src={iksz} width="24" height="25" />
                    </button>
                </div>
            </div>
        </RemoveScroll>

    );
};

export default Popup;