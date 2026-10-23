import { useEffect, useState } from "react";
import { RemoveScroll } from "react-remove-scroll";
import bacik from '../images/rosszbaci-per-jobaci.png';
import iksz from '../images/iksz.png';
import eloadas from '../images/popup_dw2026.jpg';

type PopupProps = {
    language: 'hu' | 'en';
    pathRoot: string;
};

const Popup = ({ language, pathRoot }: PopupProps) => {
    const [visible, setVisible] = useState(window.sessionStorage.getItem('isPopupVisible-'+language) !== 'false');

    const onClose = () => {
        setVisible(false);
        window.sessionStorage.setItem('isPopupVisible-'+language, 'false');
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
                <div className={language === 'hu' ? 'popup popup--news' : 'popup'}>
                    {language === 'hu' ? (
                        <>
                            <img src={eloadas} width="560" height="187" alt="Dr. Noszticzius Zoltán előadása" />
                            <h2>Solumium szájvíz:<br />új prevenciós stratégia</h2>
                            <p>
                                Dr. Noszticzius Zoltán professzor előadása a Dental World 2026 kongresszuson.<br />
                                Az előadás megtekinthető a <a href={`${pathRoot}tudomanyos-hatter`} onClick={() => onClose()}>TUDOMÁNYOS HÁTTÉR</a> menüpontban.
                            </p>
                            <button className="popup__continue" onClick={() => onClose()}>
                                &gt;&gt; <span>TOVÁBB A HONLAPRA</span> &gt;&gt;
                            </button>
                        </>
                    ) : (
                        <>
                            <h2>CAN A MOUTHWASH BE SELECTIVE?</h2>
                            <h3>CAN IT MAKE A DIFFERENCE BETWEEN HARMFUL AND USEFUL BACTERIA?</h3>
                            <img src={bacik} width="164" height="81" />
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
                            <a href="https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078" target="_blank" rel="noopener noreferrer">https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078</a>
                        </>
                    )}
                    <button aria-label='Close popup' onClick={() => onClose()}>
                        <img src={iksz} width="24" height="25" />
                    </button>
                </div>
            </div>
        </RemoveScroll>

    );
};

export default Popup;