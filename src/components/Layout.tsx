import Popup from './Popup';

import '../index.css';
import solumiumLogo from '../images/solumium_logo.png';

import badge7csillagosHu from '../images/badge_7csillagos_hu.png';
import badge7csillagosEn from '../images/badge_7csillagos_en.png';
import badgeForbes from '../images/badge_forbes.png';
import badgeGranprize from '../images/badge_granprize.png';
import badgeDw2024 from '../images/badge_dw2024.png';

import badge7csillagosDocHu from '../docs/solumium_7csillagos_20231119_w1200.jpg';
import badge7csillagosDocEn from '../docs/solumium_7csillagos_EN_20231129b_w1200.jpg';
import badgeForbesDoc from '../docs/ForbesNext_2017Tel_Solumium.pdf';
import badgeGranprizeDoc from '../docs/Swedish_GranPrize_2015_Dr_Noszticzius_Zoltan.pdf';
import badgeDw2024Doc from '../docs/Dental_World_2024_cikk.pdf';
import { useEffect } from 'react';

type Language = 'hu' | 'en';

type PageId = 'index' | 'termekeink' | 'tudomanyos-hatter' | 'rolunk' | 'products' | 'about-us' | 'scientific-background';

type LayoutProps = {
    activePage: PageId;
    anotherLanguagePage: PageId;
    children: React.ReactNode | string;
    requestedLanguage: Language;
    withBadges?: boolean;
};

type Pages = {
    [language in Language]: {
        id: string;
        name: string;
    }[]
};

const PAGES: Pages = {
    hu: [
        {
            id: 'tudomanyos-hatter',
            name: 'Tudományos háttér'
        },
        {
            id: 'termekeink',
            name: 'Termékeink',
        },
        {
            id: 'rolunk',
            name: 'Rólunk',
        },
    ],
    en: [
        {
            id: 'scientific-background',
            name: 'Scientific background'
        },
        {
            id: 'products',
            name: 'Products',
        },
        {
            id: 'about-us',
            name: 'About us',
        },

    ],
}
const onChangeLanguage = (language: Language) => {
    window.localStorage.setItem('language', language);
};

const pathRoot = window.location.host === 'moczolaszlo.github.io' ? '/solumium-2022/' : '/';

const Layout = ({ activePage, anotherLanguagePage, children, requestedLanguage, withBadges }: LayoutProps) => {
    const mainClassName = activePage === 'termekeink' || activePage === 'products' ? 'products' : null;

    useEffect(() => {
        if (requestedLanguage === 'en') {
            document.documentElement.lang = requestedLanguage;
        }
    }, [requestedLanguage]);

    return (
        <>
            <div id="wrapper" className={requestedLanguage}>
                <header>
                    <a href={pathRoot} aria-current={activePage === 'index' ? 'page' : null}>
                        <img src={solumiumLogo} width="181" height="48" alt="Solumium" />
                    </a>
                    <nav className="menu">
                        <ul>
                            {PAGES[requestedLanguage].map(({ id, name }, index) => (
                                <li className={`menu_${index}`} key={index}>
                                    <a href={`${pathRoot}${id}`} aria-current={activePage === id ? 'page' : null}>{name}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <nav className="languageSelector">
                        <ul>
                            {Object.keys(PAGES).map((lang: Language) => {
                                let href = '';
                                const index = PAGES[requestedLanguage].findIndex(({ id }) => id === activePage);
                                if (index > -1) {
                                    href = `${pathRoot}${anotherLanguagePage}`;
                                }
                                return (
                                    <li>
                                        <a href={href} aria-current={requestedLanguage === lang} lang={lang} onClick={() => onChangeLanguage(lang)}>{lang}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </header>
                <main className={mainClassName}>{children}</main>
                <footer>
                    {withBadges && (
                        <>
                            <a href={badgeForbesDoc} target="_blank">
                                <img src={badgeForbes} alt="Forbes interjú" width="90" height="90" />
                            </a>
                            <a href={badgeGranprizeDoc} target="_blank">
                                <img src={badgeGranprize} alt="Gran Prize winner 2015" width="90" height="90" />
                            </a>
                            <a href={requestedLanguage === 'en' ? badge7csillagosDocEn : badge7csillagosDocHu} target="_blank">
                                <img src={requestedLanguage === 'en' ? badge7csillagosEn : badge7csillagosHu} alt={requestedLanguage === 'en' ? "The 7-star mouthwash" : "A 7 csillagos szájvíz"} width="90" height="90" />
                            </a>
                            {requestedLanguage === 'hu' && (
                                <a href={badgeDw2024Doc} target="_blank">
                                    <img src={badgeDw2024} alt="Dental World 2024" width="90" height="90" />
                                </a>
                            )}
                        </>
                    )}
                    <div>
                        <span>&copy; {new Date().getFullYear()} Solumium Kft</span>
                        <span>email: info@solumium.com</span>
                        <span>tel: +3620-4700597</span>
                        <span>web: solumium.com</span>
                    </div>
                </footer>
            </div>
            <Popup language={requestedLanguage} />
        </>
    )
};

export default Layout;