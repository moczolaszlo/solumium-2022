import citation5en from '../docs/disinfectants-table_20221209_EN.pdf';
import citation5hu from '../docs/disinfectants-table_20221209_HU.pdf';

import citation18hu from '../docs/Koronavirus_es_ClO2_Physiol_Int_HU.pdf';

type Language = 'hu' | 'en';

type CitationProps = {
    lang: Language;
};

const Citation = ({ lang }: CitationProps) => {
    if (lang === 'en') {
        return (
            <>
                <h2>REFERENCES:</h2>
                <ol className="citation">
                    <li>
                        [1] WO/2008/035130 Patent Cooperation Treaty (PCT ): Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, International Preliminary Report on Patentability: 12. 02. 2009.<br />
                        <a href="https://patentscope.wipo.int/search/en/WO2008035130" target="_blank" rel="noopener noreferrer">https://patentscope.wipo.int/search/en/WO2008035130</a><br />
                        Based on Hungarian patent P 06 00735: Permeációs eljárás és berendezés nagytisztaságú klór-dioxidot tartalmazó fluidumok előállításához, published: 2009. 04. 28. Szabadalmi Közlöny 114, 4/II P122.
                    </li>
                    <li>
                        [2] USA patent US 8,512,671 B1: Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, 2013.08. 20.<br />
                        <a href="https://pdfpiw.uspto.gov/.piw?docid=08512671" target="_blank" rel="noopener noreferrer">https://pdfpiw.uspto.gov/.piw?docid=08512671</a>
                    </li>
                    <li>
                        [3] Chinese patent CN 101605720 B: Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, 2013. 09. 04.<br />
                        <a href="https://patents.google.com/patent/CN101605720B" target="_blank" rel="noopener noreferrer">https://patents.google.com/patent/CN101605720B</a>
                    </li>
                    <li>
                        [4] Noszticzius Z., Wittmann M., Kály-Kullai K., Beregvári Z., Kiss I., Rosivall L., Szegedi J.: Chlorine dioxide is a size-selective antimicrobial agent, PLOS ONE 8(11), e79157 2013.<br />
                        <a href="https://doi.org/10.1371/journal.pone.0079157" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pone.0079157</a>
                    </li>
                    <li>
                        [5] Wilson, C. L.; Droby, C. L. Microbal Food Contamination, CRC Press Boca Raton 2001, ISBN: 0849322294, p.12<br />
                        <a href={citation5en} target="_blank">For a table illustrating the effectiveness of chlorine dioxide click here.</a>
                    </li>
                    <li>
                        [6] Tanner, R.: Comparative testing and evaluation of hard-surface disinfectants, J. Ind. Microbiol., 4, p. 145–154, 1989.<br />
                        <a href="https://link.springer.com/article/10.1007/BF01569799" target="_blank" rel="noopener noreferrer">https://link.springer.com/article/10.1007/BF01569799</a>
                    </li>
                    <li>
                        [7] Sanekata T., Fukuda T., Miura T., Morino H., Lee C., Maeda K., Araki K., Otake T., Kawahata T., Shibata T.: Evaluation of the antiviral activity of chlorine dioxide and sodium hypochlorite against feline calicivirus, human influenza virus, measles virus, canine distemper virus, human herpesvirus, human adenovirus, canine adenovirus and canine parvovirus, Biocontrol Sci. 201015(2):45-9, 2010. <br />
                        <a href="https://doi.org/10.4265/bio.15.45" target="_blank" rel="noopener noreferrer">https://doi.org/10.4265/bio.15.45</a>
                    </li>
                    <li>
                        [8] Morino H., Fukuda T., Miura T., Lee C., Shibata T., Sanekata T.: Inactivation of feline calicivirus, a Norovirus surrogate, by chlorine dioxide gas, Biocontrol Sci; 14: 147–53, 2009.<br />
                        <a href="https://doi.org/10.4265/bio.14.147" target="_blank" rel="noopener noreferrer">https://doi.org/10.4265/bio.14.147</a>
                    </li>
                    <li>
                        [9] Junli H., Li W., Nenqi R., Li L. X., Fun S. R., Guanle Y.: Disinfection effect of chlorine dioxide on viruses, algae and animal planktons in water, Water Research, Vol. 31, Issue 3, p. 455-460, 1997.<br />
                        <a href="https://doi.org/10.1016/S0043-1354(96)00276-X" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/S0043-1354(96)00276-X</a>
                    </li>
                    <li>
                        [10] Simpson G. D., Miller R. F., Laxton G. D., Clements W. R. A focus on chlorine dioxide: the "ideal" biocide, Corrosion 93. New Orleans, La, March 8-12. paper No. 472., 1993.<br />
                        <a href="http://www.clo2.gr/en/pdf/secure/chlorinedioxideidealbiocide.pdf" target="_blank" rel="noopener noreferrer">http://www.clo2.gr/en/pdf/secure/chlorinedioxideidealbiocide.pdf</a>
                    </li>
                    <li>
                        [11] Kim J. S., Park J. W., Kim D. J., Kim Y. K., Lee J. Y.: Direct effect of chlorine dioxide, zinc chloride and chlorhexidine solution on the gaseous volatile sulfur compounds, Acta odontologica Scandinavica, 72(8), p. 645–650, 2014.<br />
                        <a href="https://doi.org/10.3109/00016357.2014.887770" target="_blank" rel="noopener noreferrer">https://doi.org/10.3109/00016357.2014.887770</a>
                    </li>
                    <li>
                        [12] Lubbers, J. R., Chauan, S. R. & Bianchine, J. R. Controlled clinical evaluations of chlorine dioxide, chlorite and chlorate in man, Env. Health Persp. 46, p. 57–62, 1982.<br />
                        <a href="https://www.sciencedirect.com/science/article/pii/S0272059081800425" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S0272059081800425</a>
                    </li>
                    <li>
                        [13] Ison A., Odeh I. N., Margerum D. W.: Kinetics and Mechanisms of Chlorine Dioxide and Chlorite Oxidations of Cysteine and Glutathione, Inorganic Chemistry 45, p. 8768-8775, 2006.<br />
                        <a href="https://doi.org/10.1021/ic0609554" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ic0609554</a>
                    </li>
                    <li>
                        [14] Napolitano M. J., Green B. J., Nicoson J. S., Margerum D. W.: Chlorine Dioxide Oxidations of Tyrosine, N-Acetyltyrosine, and Dopa, Chemical Research in Toxicology 18, p. 501-508, 2005.<br />
                        <a href="https://doi.org/10.1021/tx049697i" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/tx049697i</a>
                    </li>
                    <li>
                        [15] Stewart D. J., Napolitano M. J., Bakhmutova-Albert E. V., Margerum D. W.: Kinetics and Mechanisms of Chlorine Dioxide Oxidation of Tryptophan, Inorganic Chemistry 47, p. 1639-1647, 2008.<br />
                        <a href="https://doi.org/10.1021/ic701761p" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ic701761p</a>
                    </li>
                    <li>
                        [16] ATSDR (Agency for Toxic Substances & Disease Registry): Toxicological Profile for Chlorine Dioxide and Chlorite, U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES, Public Health Service, Agency for Toxic Substances and Disease Registry, September 2004.<br />
                        <a href="http://www.atsdr.cdc.gov/toxprofiles/tp160.pdf" target="_blank" rel="noopener noreferrer">http://www.atsdr.cdc.gov/toxprofiles/tp160.pdf</a>
                    </li>
                    <li>
                        [17] USA patent US 8,623,392 B2: Morino H., Shibata T.: Allergen inactivating agent, 2014. 01. 07.<br />
                        <a href="https://pdfpiw.uspto.gov/.piw?PageNum=0&docid=08623392" target="_blank" rel="noopener noreferrer">https://pdfpiw.uspto.gov/.piw?PageNum=0&docid=08623392</a>
                    </li>
                    <li>
                        [18] Kály-Kullai K., Wittmann M., Noszticzius Z., Rosivall L.: Can chlorine dioxide prevent the spreading of coronavirus or other viral infections? Medical hypotheses, Physiology International Vol. 107 Issue 1, 2020.<br />
                        <a href="https://dx.doi.org/10.1556/2060.2020.00015" target="_blank" rel="noopener noreferrer">https://dx.doi.org/10.1556/2060.2020.00015</a>
                    </li>
                    <li>
                        [19] REGULATION (EC) No 1272/2008 OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL on classification, labelling and packaging of substances and mixtures, amending and repealing Directives 67/548/EEC and 1999/45/EC, and amending Regulation (EC) No 1907/2006<br />
                        <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R1272&from=en" target="_blank" rel="noopener noreferrer">https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32008R1272&from=en</a>
                    </li>
                    <li>
                        [20] Ishi G.: Solubility of chlorine dioxide, Chemical Engineering Japan, Volume 22, Issue 3, p. 153–4, 1958 (in Japanese).<br />
                        <a href="https://doi.org/10.1252/kakoronbunshu1953.22.153" target="_blank" rel="noopener noreferrer">https://doi.org/10.1252/kakoronbunshu1953.22.153</a>
                    </li>
                    <li>
                        [21] Synan J. F., MacMahon J. D., & Vincent G. P.: Chlorine Dioxide, A Development in the Treatment of Potable Water, Water Works & Sewer, 91:423, 1944.
                    </li>
                    <li>
                        [22] Block S. S.: Disinfection, Sterilization, and Preservation (5th ed.), Lippincott, Williams & Wilkins 2001, ISBN 0-683-30740-1, p. 215.
                    </li>
                    <li>
                        [23] Chen, Z.: A Focus on Chlorine Dioxide: The Promising Food Preservative, Journal of Experimental Food Chemistry, Vol. 3, Issue 1, 2017.<br />
                        <a href="https://doi.org/10.4172/2472-0542.1000e107" target="_blank" rel="noopener noreferrer">https://doi.org/10.4172/2472-0542.1000e107</a>
                    </li>
                    <li>
                        [24] Noszticzius, Z., Rosivall, L., Wittmann, M.: Universal weapon against microbes? - hyperpure chlorine dioxide, Természet Világa Magazine, Volume 141, Number 4, 2010 (in Hungarian).<br />
                        <a href="https://www.termvil.hu/archiv/szamok/tv2010/tv1004/noszti.html" target="_blank" rel="noopener noreferrer">https://www.termvil.hu/archiv/szamok/tv2010/tv1004/noszti.html</a>
                    </li>
                    <li>
                        [25] Silwood, C. J. L., Grootveld, M. C., Lynch, E.: A multifactorial investigation of the ability of oral health care products (OHCPs) to alleviate oral malodour, Journal of Clinical Periodontology, Vol. 28, Issue 7, p. 634–641, 2001.<br />
                        <a href="https://doi.org/10.1034/j.1600-051x.2001.028007634.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1034/j.1600-051x.2001.028007634.x</a>
                    </li>
                    <li>
                        [26] Kerémi B. et al.: Effects of Chlorine Dioxide on Oral Hygiene - A Systematic Review and Meta-analysis, Current Pharmaceutical Design, Vol. 26, Issue 25, p. 3015-3025, 2020.<br />
                        <a href="https://doi.org/10.2174/1381612826666200515134450" target="_blank" rel="noopener noreferrer">https://doi.org/10.2174/1381612826666200515134450</a>
                    </li>
                    <li>
                        [27] It should be noted that sodium chlorite is also commonly referred to as "stabilized chlorine dioxide". This is a very misleading name that could make one think that sodium chlorite is actually chlorine dioxide, but it is somehow "stabilized". This is of course a complete mistake. An even bigger problem is that even the adjective "stabilized" is very often omitted. Sodium chlorite is obviously not chlorine dioxide. Trying to counterbalance this naming problem, manufacturers who use real chlorine dioxide in their products have started using the term "active chlorine dioxide" to emphasize the presence of actual chlorine-dioxide.
                    </li>
                    <li>
                        [28] Noszticzius Z. et al.: How to check the purity of an unknown chlorine dioxide product?, Magyar Fogorvos Magazine, Volume 26, 2017/3, p. 132-137, 2017 (in Hungarian).<br />
                        <a href="https://www.kamara.fogorvos.hu/?module=news&action=getfile&aid=41196" target="_blank" rel="noopener noreferrer">https://www.kamara.fogorvos.hu/?module=news&action=getfile&aid=41196</a>
                    </li>
                    <li>
                        [29] Shellis, R. P., Featherstone, J. D., Lussi, A.: Understanding the chemistry of dental erosion, Monographs in oral science, 25, p. 163–179, 2014.<br />
                        <a href="https://doi.org/10.1159/000359943" target="_blank" rel="noopener noreferrer">https://doi.org/10.1159/000359943</a>
                    </li>
                    <li>
                        [30] Ablal M. A., Adeyemi A. A., Jarad F. D.:The whitening effect of chlorine dioxide—An in vitro study, Journal of Dentistry, Vol. 41, Supplement 5, p. e76-e81, 2013.<br />
                        <a href="https://doi.org/10.1016/j.jdent.2013.05.006" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jdent.2013.05.006</a>
                    </li>
                    <li>
                        [31] Csikány, Cs., Várnai, G., Noszticzius, Z. SOLUMIUM DENTAL: the hyperpure chlorine dioxide solution and its application in dental practice I.-II.-III. Dental Hírek Magazine, issue 4, p. 30-33, issue 5, p. 36-38, issue 6, p. 56-57, 2009 (in Hungarian).<br />
                    </li>
                    <li>
                        [32] Noszticzius Z., Wittmann M., Kály-Kullai K., Beregvári Z., Kiss I., Rosivall L., Szegedi J.: Demonstrating that chlorine dioxide is a size-selective antimicrobial agent and high purity ClO2 can be used as a local antiseptic, arXiv: Other Quantitative Biology, 2013.<br />
                        <a href="https://arxiv.org/pdf/1304.5163.pdf" target="_blank" rel="noopener noreferrer">https://arxiv.org/pdf/1304.5163.pdf</a>
                    </li>
                    <li>
                        [33] Daniel, F. B., Condie, L. W., Robinson, M., Stober, J. A., York, R. G., et al.: Comparative 90-day subchronic toxicity studies on three drinking water disinfectants, chlorine, monochloramine and chlorine dioxide in the Sprague-Dawley rats, Journal of American Water Works Association,Volume 82, Issue 10, p. 61–69, 1990.<br />
                        <a href="https://doi.org/10.1002/j.1551-8833.1990.tb07038.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/j.1551-8833.1990.tb07038.x</a>
                    </li>
                    <li>
                        [34] Kály-Kullai, K., Zsembery, Á., Shahbazi, A., Rosivall, L., Megyesi, M., Lawson, T. B., Wittmann, M., Noszticzius, Z.:<br />
                        Selective Effects of a Mouthwash Based on Pure Chlorine Dioxide. I. Effect on the Oral Mucosa and the Plaque Bacteria. Focused Review and Model Calculations, ChemRxiv, 2025<br />
                        <a href="https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078" target="_blank" rel="noopener noreferrer">https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078</a>
                    </li>
                </ol>
            </>
        );
    }

    return (
        <>
            <h2>IRODALOM:</h2>
            <ol className="citation">
                <li>
                    [1] P 06 00735 lajstromszámú magyar találmányi bejelentés: Permeációs eljárás és berendezés nagytisztaságú klór-dioxidot tartalmazó fluidumok előállításához, Közzétéve: 2009. 04. 28. Szabadalmi Közlöny 114, 4/II P122., továbbá WO/2008/035130 lajstromszámú Patent Cooperation Treaty (PCT ) bejelentés: Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, International Preliminary Report on Patentability: 12. 02. 2009.<br />
                    <a href="https://patentscope.wipo.int/search/en/WO2008035130" target="_blank" rel="noopener noreferrer">https://patentscope.wipo.int/search/en/WO2008035130</a>
                </li>
                <li>
                    [2] US 8,512,671 B1 lajstromszámú USA szabadalom: Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, 2013. 08. 20.<br />
                    <a href="https://pdfpiw.uspto.gov/.piw?docid=08512671" target="_blank" rel="noopener noreferrer">https://pdfpiw.uspto.gov/.piw?docid=08512671</a>
                </li>
                <li>
                    [3] CN 101605720 B lajstromszámú kínai szabadalom: Permeation method and apparatus for preparing fluids containing high purity chlorine dioxide, 2013. 09. 04.<br />
                    <a href="https://patents.google.com/patent/CN101605720B" target="_blank" rel="noopener noreferrer">https://patents.google.com/patent/CN101605720B</a>
                </li>
                <li>
                    [4] Noszticzius Z., Wittmann M., Kály-Kullai K., Beregvári Z., Kiss I., Rosivall L., Szegedi J.: Chlorine dioxide is a size-selective antimicrobial agent, PLOS ONE 8(11), e79157 2013.<br />
                    <a href="https://doi.org/10.1371/journal.pone.0079157" target="_blank" rel="noopener noreferrer">https://doi.org/10.1371/journal.pone.0079157</a>
                </li>
                <li>
                    [5] Wilson, C. L.; Droby, C. L. Microbal Food Contamination, CRC Press Boca Raton 2001, ISBN: 0849322294, p.12<br />
                    <a href={citation5hu} target="_blank">A klór-dioxid hatékonyságát illusztráló táblázat megnyitásához kattintson ide.</a>
                </li>
                <li>
                    [6] Tanner, R.: Comparative testing and evaluation of hard-surface disinfectants, J. Ind. Microbiol., 4, p. 145–154, 1989.<br />
                    <a href="https://link.springer.com/article/10.1007/BF01569799" target="_blank" rel="noopener noreferrer">https://link.springer.com/article/10.1007/BF01569799</a>
                </li>
                <li>
                    [7] Sanekata T., Fukuda T., Miura T., Morino H., Lee C., Maeda K., Araki K., Otake T., Kawahata T., Shibata T.: Evaluation of the antiviral activity of chlorine dioxide and sodium hypochlorite against feline calicivirus, human influenza virus, measles virus, canine distemper virus, human herpesvirus, human adenovirus, canine adenovirus and canine parvovirus. Biocontrol Sci. 201015(2):45-9, 2010.<br />
                    <a href="https://doi.org/10.4265/bio.15.45" target="_blank" rel="noopener noreferrer">https://doi.org/10.4265/bio.15.45</a>
                </li>
                <li>
                    [8] Morino H., Fukuda T., Miura T., Lee C., Shibata T., Sanekata T.: Inactivation of feline calicivirus, a Norovirus surrogate, by chlorine dioxide gas. Biocontrol Sci; 14: 147–53, 2009.<br />
                    <a href="https://doi.org/10.4265/bio.14.147" target="_blank" rel="noopener noreferrer">https://doi.org/10.4265/bio.14.147</a>
                </li>
                <li>
                    [9] Junli H., Li W., Nenqi R., Li L. X., Fun S. R., Guanle Y.: Disinfection effect of chlorine dioxide on viruses, algae and animal planktons in water, Water Research, Vol. 31, Issue 3, p. 455-460, 1997. <br />
                    <a href="https://doi.org/10.1016/S0043-1354(96)00276-X" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/S0043-1354(96)00276-X</a>
                </li>
                <li>
                    [10] Simpson G. D., Miller R. F., Laxton G. D., Clements W. R. A focus on chlorine dioxide: the "ideal" biocide, Corrosion 93. New Orleans, La, March 8-12. paper No. 472., 1993.<br />
                    <a href="http://www.clo2.gr/en/pdf/secure/chlorinedioxideidealbiocide.pdf" target="_blank" rel="noopener noreferrer">http://www.clo2.gr/en/pdf/secure/chlorinedioxideidealbiocide.pdf</a>
                </li>
                <li>
                    [11] Kim J. S., Park J. W., Kim D. J., Kim Y. K., Lee J. Y.: Direct effect of chlorine dioxide, zinc chloride and chlorhexidine solution on the gaseous volatile sulfur compounds, Acta odontologica Scandinavica, 72(8), p. 645–650, 2014.<br />
                    <a href="https://doi.org/10.3109/00016357.2014.887770" target="_blank" rel="noopener noreferrer">https://doi.org/10.3109/00016357.2014.887770</a>
                </li>
                <li>
                    [12] Lubbers, J. R., Chauan, S. R. & Bianchine, J. R. Controlled clinical evaluations of chlorine dioxide, chlorite and chlorate in man, Env. Health Persp. 46, p. 57–62, 1982.<br />
                    <a href="https://www.sciencedirect.com/science/article/pii/S0272059081800425" target="_blank" rel="noopener noreferrer">https://www.sciencedirect.com/science/article/pii/S0272059081800425</a>
                </li>
                <li>
                    [13] Ison A., Odeh I. N., Margerum D. W.: Kinetics and Mechanisms of Chlorine Dioxide and Chlorite Oxidations of Cysteine and Glutathione, Inorganic Chemistry 45, 8768-8775, 2006.<br />
                    <a href="https://doi.org/10.1021/ic0609554" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ic0609554</a>
                </li>
                <li>
                    [14] Napolitano M. J., Green B. J., Nicoson J. S., Margerum D. W.: Chlorine Dioxide Oxidations of Tyrosine, N-Acetyltyrosine, and Dopa, Chemical Research in Toxicology 18, p. 501-508, 2005.<br />
                    <a href="https://doi.org/10.1021/tx049697i" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/tx049697i</a>
                </li>
                <li>
                    [15] Stewart D. J., Napolitano M. J., Bakhmutova-Albert E. V., Margerum D. W.: Kinetics and Mechanisms of Chlorine Dioxide Oxidation of Tryptophan, Inorganic Chemistry 47, 1639-1647, 2008.<br />
                    <a href="https://doi.org/10.1021/ic701761p" target="_blank" rel="noopener noreferrer">https://doi.org/10.1021/ic701761p</a>
                </li>
                <li>
                    [16] ATSDR (Agency for Toxic Substances & Disease Registry): Toxicological Profile for Chlorine Dioxide and Chlorite, U.S. DEPARTMENT OF HEALTH AND HUMAN SERVICES, Public Health Service, Agency for Toxic Substances and Disease Registry, September 2004.<br />
                    <a href="http://www.atsdr.cdc.gov/toxprofiles/tp160.pdf" target="_blank" rel="noopener noreferrer">http://www.atsdr.cdc.gov/toxprofiles/tp160.pdf</a>
                </li>
                <li>
                    [17] US 8,623,392 B2 lajstromszámú USA szabadalom: Morino H., Shibata T.: Allergen inactivating agent, 2014. 01. 07.<br />
                    <a href="https://pdfpiw.uspto.gov/.piw?PageNum=0&docid=08623392" target="_blank" rel="noopener noreferrer">https://pdfpiw.uspto.gov/.piw?PageNum=0&docid=08623392</a>
                </li>
                <li>
                    [18] Kály-Kullai K., Wittmann M., Noszticzius Z., Rosivall L.: Can chlorine dioxide prevent the spreading of coronavirus or other viral infections? Medical hypotheses, Physiology International Vol. 107 Issue 1, 2020.<br />
                    <a href="https://dx.doi.org/10.1556/2060.2020.00015" target="_blank" rel="noopener noreferrer">https://dx.doi.org/10.1556/2060.2020.00015</a>< br />
                    <a href={citation18hu} target="_blank">A cikk magyar fordításának megnyitásához katintson ide.</a>
                </li>
                <li>
                    [19] AZ EURÓPAI PARLAMENT ÉS A TANÁCS 1272/2008/EK RENDELETE az anyagok és keverékek osztályozásáról, címkézéséről és csomagolásáról, a 67/548/EGK és az 1999/45/EK irányelv módosításáról és hatályon kívül helyezéséről, valamint az 1907/2006/EK rendelet módosításáról.<br />
                    <a href="https://publications.europa.eu/resource/cellar/67f046c8-1adc-11ec-b4fe-01aa75ed71a1.0013.02/DOC_2" target="_blank" rel="noopener noreferrer">https://publications.europa.eu/resource/cellar/67f046c8-1adc-11ec-b4fe-01aa75ed71a1.0013.02/DOC_2</a>
                </li>
                <li>
                    [20] Ishi G.: Solubility of chlorine dioxide, Chemical Engineering Japan, Volume 22, Issue 3, 153–4, 1958.<br />
                    <a href="https://doi.org/10.1252/kakoronbunshu1953.22.153" target="_blank" rel="noopener noreferrer">https://doi.org/10.1252/kakoronbunshu1953.22.153</a>
                </li>
                <li>
                    [21] Synan J. F., MacMahon J. D., & Vincent G. P.: Chlorine Dioxide, A Development in the Treatment of Potable Water, Water Works & Sewer, 91:423, 1944.
                </li>
                <li>
                    [22] Block S. S.: Disinfection, Sterilization, and Preservation (5th ed.), Lippincott, Williams & Wilkins 2001, ISBN 0-683-30740-1, p. 215.
                </li>
                <li>
                    [23] Chen, Z.: A Focus on Chlorine Dioxide: The Promising Food Preservative, Journal of Experimental Food Chemistry, Vol. 3, Issue 1, 2017.<br />
                    <a href="https://doi.org/10.4172/2472-0542.1000e107" target="_blank" rel="noopener noreferrer">https://doi.org/10.4172/2472-0542.1000e107</a>
                </li>
                <li>
                    [24] Noszticzius, Z., Rosivall, L., Wittmann, M.: Univerzális fegyver a mikrobák ellen? – a hipertiszta klór-dioxid, Természet Világa, 141. évfolyam, 4. szám, 2010.<br />
                    <a href="https://www.termvil.hu/archiv/szamok/tv2010/tv1004/noszti.html" target="_blank" rel="noopener noreferrer">https://www.termvil.hu/archiv/szamok/tv2010/tv1004/noszti.html</a>
                </li>
                <li>
                    [25] Silwood, C. J. L., Grootveld, M. C., Lynch, E.: A multifactorial investigation of the ability of oral health care products (OHCPs) to alleviate oral malodour, Journal of Clinical Periodontology, Vol. 28, Issue 7, p. 634–641, 2001.<br />
                    <a href="https://doi.org/10.1034/j.1600-051x.2001.028007634.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1034/j.1600-051x.2001.028007634.x</a>
                </li>
                <li>
                    [26] Kerémi B. et al.: Effects of Chlorine Dioxide on Oral Hygiene - A Systematic Review and Meta-analysis, Current Pharmaceutical Design, Vol. 26, Issue 25, p. 3015-3025, 2020.<br />
                    <a href="https://doi.org/10.2174/1381612826666200515134450" target="_blank" rel="noopener noreferrer">https://doi.org/10.2174/1381612826666200515134450</a>
                </li>
                <li>
                    [27] Megjegyzendő, hogy a nátrium-kloritot szokás „stabilizált klór-dioxid”-ként is emlegetni. Ez nagyon félrevezető elnevezés, hiszen ennek alapján azt lehetne gondolni, hogy a nátrium –klorit is tulajdonképpen klór-dioxid, csak valahogy „stabilizálva” van. Ez persze teljes tévedés. Még ennél is nagyobb gond, hogy a „stabilizált” jelzőt igen gyakran elhagyják. Márpedig a nátrium klorit nem klór-dioxid. Ennek a problémának az ellensúlyozásaként azok a gyártók, akik nem „stabilizált” hanem igazi klór-dioxidot használnak a készítményeikben, ennek a hangsúlyozására „aktív” klórdioxidról szoktak beszélni.
                </li>
                <li>
                    [28] Noszticzius Z. et al.: Hogyan ellenőrizhető egy ismeretlen klór-dioxid termék tisztasága?, Magyar Fogorvos, XXVI. évfolyam, 2017/3, 132-137. o., 2017.<br />
                    <a href="https://www.kamara.fogorvos.hu/?module=news&action=getfile&aid=41196" target="_blank" rel="noopener noreferrer">https://www.kamara.fogorvos.hu/?module=news&action=getfile&aid=41196</a>
                </li>
                <li>
                    [29] Shellis, R. P., Featherstone, J. D., Lussi, A.: Understanding the chemistry of dental erosion, Monographs in oral science, 25, p. 163–179, 2014.<br />
                    <a href="https://doi.org/10.1159/000359943" target="_blank" rel="noopener noreferrer">https://doi.org/10.1159/000359943</a>
                </li>
                <li>
                    [30] Ablal M. A., Adeyemi A. A., Jarad F. D.:The whitening effect of chlorine dioxide—An in vitro study, Journal of Dentistry, Vol. 41, Supplement 5, p. e76-e81, 2013.<br />
                    <a href="https://doi.org/10.1016/j.jdent.2013.05.006" target="_blank" rel="noopener noreferrer">https://doi.org/10.1016/j.jdent.2013.05.006</a>
                </li>
                <li>
                    [31] Csikány, Cs., Várnai, G., Noszticzius, Z. SOLUMIUM DENTAL: a hipertiszta klórdioxid oldat és alkalmazása a fogorvosi gyakorlatban I.-II.-III. Dental Hírek 2009, 4.szám 30-33.o., 5.szám 36-38.o., 6.szám 56-57.o.
                </li>
                <li>
                    [32] Noszticzius Z., Wittmann M., Kály-Kullai K., Beregvári Z., Kiss I., Rosivall L., Szegedi J.: Demonstrating that chlorine dioxide is a size-selective antimicrobial agent and high purity ClO2 can be used as a local antiseptic, arXiv: Other Quantitative Biology, 2013.<br />
                    <a href="https://arxiv.org/pdf/1304.5163.pdf" target="_blank" rel="noopener noreferrer">https://arxiv.org/pdf/1304.5163.pdf</a>
                </li>
                <li>
                    [33] Daniel, F. B., Condie, L. W., Robinson, M., Stober, J. A., York, R. G., et al.: Comparative 90-day subchronic toxicity studies on three drinking water disinfectants, chlorine, monochloramine and chlorine dioxide in the Sprague-Dawley rats, Journal of American Water Works Association,Volume 82, Issue 10, p. 61-69, 1990.<br />
                    <a href="https://doi.org/10.1002/j.1551-8833.1990.tb07038.x" target="_blank" rel="noopener noreferrer">https://doi.org/10.1002/j.1551-8833.1990.tb07038.x</a>
                </li>
                <li>
                    [34] Kály-Kullai, K., Zsembery, Á., Shahbazi, A., Rosivall, L., Megyesi, M., Lawson, T. B., Wittmann, M., Noszticzius, Z.:<br />
                    Selective Effects of a Mouthwash Based on Pure Chlorine Dioxide. I. Effect on the Oral Mucosa and the Plaque Bacteria. Focused Review and Model Calculations, ChemRxiv, 2025<br />
                    <a href="https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078" target="_blank" rel="noopener noreferrer">https://chemrxiv.org/engage/chemrxiv/article-details/6866954c3ba0887c337e1078</a>
                </li>
            </ol>
        </>
    );

};

export default Citation;