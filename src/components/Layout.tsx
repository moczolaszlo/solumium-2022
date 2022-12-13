import React from 'react';

import '../index.css';
import solumiumLogo from '../images/solumium_logo.png';

import badge7csillagos from '../images/badge_7csillagos.png';
import badgeForbes from '../images/badge_forbes.png';
import badgeGranprize from '../images/badge_granprize.png';

import badge7csillagosDoc from '../docs/solumium_7csillagos_20220315b_w1200.jpg';
import badgeForbesDoc from '../docs/ForbesNext_2017Tel_Solumium.pdf';
import badgeGranprizeDoc from '../docs/Swedish_GranPrize_2015_Dr_Noszticzius_Zoltan.pdf';


const isNew = window.location.hostname.includes('solumium');

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

const Layout = ({ activePage, anotherLanguagePage, children, requestedLanguage, withBadges }: LayoutProps) => {
    const mainClassName = activePage === 'termekeink' || activePage === 'products' ? 'products' : null;

    return (
        <div id="wrapper" className={requestedLanguage}>
            <header>
                <a href={isNew ? '/new/' : '/'} aria-current={activePage === 'index' ? 'page' : null}>
                    <img src={solumiumLogo} width="181" height="48" alt="Solumium" />
                </a>
                <nav className="menu">
                    <ul>
                        {PAGES[requestedLanguage].map(({id, name}, index) => (
                            <li className={`menu_${index}`} key={index}>
                                <a href={`/${isNew ? 'new/' : ''}${id}`} aria-current={activePage === id ? 'page' : null}>{name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <nav className="languageSelector">
                    <ul>
                        {Object.keys(PAGES).map((lang: Language) => {
                            let href = `/${isNew ? 'new/' : ''}`;
                            const index = PAGES[requestedLanguage].findIndex(({id}) => id === activePage);
                            if (index > -1) {
                                href = `/${isNew ? 'new/' : ''}${anotherLanguagePage}`
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
                        <a href={badge7csillagosDoc} target="_blank">
                            <img src={badge7csillagos} alt="7 csillagos" width="90" height="90" />
                        </a>                    
                    </>
                )}
                <div>
                    <span>&copy; {new Date().getFullYear()} Solumium Kft</span>
                    <span>email: info@solumium.com</span>
                    <span>tel: +3620-4700597</span>
                    <span>web: www.solumium.hu</span>
                </div>
            </footer>
        </div>
    )
};

export default Layout;