type Language = 'hu' | 'en';

type Partner = {
    name: Record<Language, string>;
    address: string;
    shop?: string;
    contact: string;
};

const partners: Partner[] = [
    {
        name: { hu: 'Dentline.hu (webshop)', en: 'Dentline.hu (webshop)' },
        address: '',
        shop: 'https://www.dentline.hu/index.php?route=product/list&keyword=solumium',
        contact: 'https://www.dentline.hu/index.php?route=information/contact',
    },
    {
        name: { hu: 'Sanitaria Kft (céges vásárlás)', en: 'Sanitaria Kft (business customers only)' },
        address: 'Budapest, Rómer Flóris u. 34.',
        shop: 'https://sanitaria.hu/jolisearch?s=solumium',
        contact: 'https://sanitaria.hu/content/17-kapcsolat',
    },
    {
        name: { hu: 'Lágymányos Patika', en: 'Lágymányos Patika Pharmacy' },
        address: '1111 Budapest, Budafoki út 47.',
        shop: 'https://lagymanyospatika.hu/component/virtuemart/results,1-24?keyword=solumium',
        contact: 'https://lagymanyospatika.hu/nyitva-tartas',
    },
    {
        name: { hu: 'Szent Ferenc Gyógyszertár', en: 'Szent Ferenc Pharmacy' },
        address: '1024 Budapest, Retek u. 3.',
        contact: 'https://www.ferencpatika.hu/kapcsolat.html',
    },
    {
        name: { hu: 'Szent Bernát Gyógyszertár', en: 'Szent Bernát Pharmacy' },
        address: '1126 Budapest, Böszörményi út 3a',
        contact: 'https://www.bernatpatika.hu/kapcsolat.html',
    },
];

const contactLabel: Record<Language, string> = { hu: 'KAPCSOLAT', en: 'CONTACT' };

type PartnersProps = {
    lang: Language;
};

const Partners = ({ lang }: PartnersProps) => (
    <>
        {partners.map((partner) => (
            <span key={partner.contact} className="partner">
                {partner.address ? `${partner.name[lang]}, ${partner.address}` : partner.name[lang]}
                {partner.shop && <a href={partner.shop} target="_blank" rel="noopener noreferrer">SHOP</a>}
                <a href={partner.contact} target="_blank" rel="noopener noreferrer">{contactLabel[lang]}</a>
            </span>
        ))}
    </>
);

export default Partners;
