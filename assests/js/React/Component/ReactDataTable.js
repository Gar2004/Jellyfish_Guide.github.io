(() => {

    const Filters = (props) => {
        let updateOrder = (clickEvent) => {
            props.updateFormState({
                order: clickEvent.target.value,
            });
        }

        let updateIsFatal = (clickEvent) => {
            props.updateFormState({
                isFatal: clickEvent.target.checked,
            });
        }

        return (
            <React.Fragment>
                <div className='container'>
                    <div className='col-md-3'>
                        <b>Jellyfish Type</b>
                    </div>
                    <div className='col-md-3'>
                        <select
                            onChange={updateOrder}>
                            <option value=''>&nbsp;</option>
                            <option value='Crown'>Crown</option>
                            <option value='Stemmed'>Stemmed</option>
                            <option value='Fused'>Fused</option>
                            <option value='Lobed comb'>Lobed comb</option>
                            <option value='Rounded comb'>Rounded comb</option>
                            <option value='Zip-lock'>Zip-lock</option>
                            <option value='Belt'>Belt</option>
                            <option value='Unbranched box'>Unbranched box</option>
                            <option value='Branch box'>Branch box</option>
                            <option value='Complex colonial'>Complex colonial</option>
                            <option value='Flag mouth'>Flag mouth</option>
                            <option value='Ringed'>Ringed</option>
                            <option value='Chitinous colonial'>Chitinous colonial</option>
                            <option value='Non-chitinous colonial'>Non-chitinous colonial</option>
                            <option value='Harpoon'>Harpoon</option>
                        </select>
                    </div>
                    <div className='col-md-6'>

                    </div>
                </div>
            </React.Fragment >
        );

    }
    const DataTable = (props) => {
        return (
            <div className="table-responsive">
                <table className="table">
                    <tbody>
                        <tr>
                            <th>Common Name</th>
                            <th>Scientific Name</th>
                            <th>Order</th>
                            <th>Size</th>
                            <th>Date of Discovery</th>
                            <th>Body of Water</th>
                            <th>Depth in Water</th>
                            <th>Fatal</th>
                        </tr>

                        {props.dataToDisplay.map((row, i) => {
                            return (
                                <tr key={i}>
                                    <td>{row.common}</td>
                                    <td>{row.scientific}</td>
                                    <td>{row.order}</td>
                                    <td>{row.size}</td>
                                    <td>{row.date}</td>
                                    <td>{row.location}</td>
                                    <td>{row.depth}</td>
                                    <td>{row.fatal ? 'Yes' : 'No'}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    const lolData = [
        {
            "common": "Crystal Jellyfish",
            "scientific": "Aequorea victoria",
            "order": "chitinous colonial",
            "size": "10 in (25.4cm) in diameter",
            "date": 1902,
            "location": "found from spring to autumn in the Pacific waters off the coast of North America, from the Bering Sea to southern California.",
            "depth": "200 to 5000m (pelagic zone)",
            "fatal": "No"
        },
        {
            "common": "Atolla Jellyfish",
            "scientific": "Atolla wyvillei",
            "order": "crown",
            "size": "1-8 inches in diameter & 1.5in -12 ft in length",
            "date": 1880,
            "location": "All Over In the twilight zone",
            "depth": "1,000- to 4,000 m",
            "fatal": "No"
        },
        {
            "common": "Deep Sea Crown Jellyfish",
            "scientific": "Atolla Reynoldsi",
            "order": "crown",
            "size": "up to 5.1 in (13 cm) in diameter",
            "date": 2022,
            "location": "Monterey Bay (North east Pacific)",
            "depth": "1,013, to 3,189 meters",
            "fatal": "No"
        },
        {
            "common": "Cauliflower Jellyfish",
            "scientific": "Cephea cephea",
            "order": "fused",
            "size": "up to 60 cm in diameter",
            "date": 1775,
            "location": "Indo-West Pacific: Eastern Atlantic and the Red Sea, north to Russia and east to Marquesas Islands",
            "depth": "over 3,000 ft (twilight zone)",
            "fatal": "No"
        },
        {
            "common": "Black sea nettle",
            "scientific": "Chrysaora achlyos",
            "order": "flag mouth",
            "size": "up to 3 feet (.9m) diameter & 20 feet (6m) length",
            "date": 1997,
            "location": "Mexico and coasts of Southern and Baja California",
            "depth": "Fall and winter: shallow harbors and bays Spring and summer: large swarms in deep ocean water",
            "fatal": "No"
        },
        {
            "common": "Enigmatic Bag Jellyfish",
            "scientific": "Deepstaria enigmatica",
            "order": "flag mouth",
            "size": "up to 60cm (2ft) body size",
            "date": 1967,
            "location": "Antarctic and near-Antarctic seas",
            "depth": "Around 3,000ft (910 m)",
            "fatal": "No"
        },
        {
            "common": "Flower hat Jelly",
            "scientific": "Olindias formosus",
            "order": "non-chitinous colonial",
            "size": "up to 6in (15cm) in diameter",
            "date": 1903,
            "location": "off southern Japan, Brazil and Argentina",
            "depth": "35 to 55m",
            "fatal": "No"
        },
        {
            "common": "Psychedelic Jelly",
            "scientific": "Crossota millsae",
            "order": "ringed",
            "size": "up to 2.8cm (1in) in diameter",
            "date": 2003,
            "location": "North Pacific Ocean (from the Arctic Ocean and Caribbean Sea)",
            "depth": "1,000-3,300m (midnight zone)",
            "fatal": "No"
        },
        {
            "common": "Nomura's Jellyfish",
            "scientific": "Nemopilema nomurai",
            "order": "fused",
            "size": "up to 2m (6ft 7in) in diameter and 200kg (440 ibs)",
            "date": 1922,
            "location": "Yellow Sea and East China Sea",
            "depth": "Epipelagic zone",
            "fatal": "No"
        },
        {
            "common": "Deep Red Jellyfish",
            "scientific": "Crossota norvegica",
            "order": "ringed",
            "size": "up to 2cm in body size",
            "date": 1902,
            "location": "Arctic Ocean",
            "depth": "Bathypelagic (below 1000m near the seafloor)",
            "fatal": "No"
        },
        {
            "common": "Helmet jellyfish",
            "scientific": "Periphylla periphylla",
            "order": "crown jellyfish",
            "size": "18-35cm in diameter and up to 50cm (20in) in length",
            "date": 1810,
            "location": "all oceans except the arctic",
            "depth": "up to 2700 meters (day-night migratory pattern)",
            "fatal": "No"
        },
        {
            "common": "Sea gooseberry",
            "scientific": "Pleurobrachia pileus",
            "order": "rounded comb",
            "size": "1-2.5 cm with two 50cm long tentacles",
            "date": 1776,
            "location": "Northern Atlantic Ocean and along the northwestern coasts of Europe (North Sea)",
            "depth": "Epipelagic zone (day-night migratory pattern in North Sea)",
            "fatal": "No"
        },
        {
            "common": "Sea walnut",
            "scientific": "Mnemiopsis leidyi",
            "order": "lobed comb",
            "size": "7-12 cm (3-5 in) length and 2.5cm (1in) diameter",
            "date": 1865,
            "location": "Altantic coast of North and South America, Black Sea, Azov, Marmara, Aegean Seas and Caspian Sea.",
            "depth": "Coastal to deep sea Epipelagic - Hadal zone (0m-9000m)",
            "fatal": "No"
        },
        {
            "common": "Venus girdle",
            "scientific": "Cestum veneris",
            "order": "belt",
            "size": "1m (40in) long & 5cm (2in) wide",
            "date": 1813,
            "location": "Mediterranean Sea",
            "depth": "138.58m (sunlight to twilight zone)",
            "fatal": "No"
        },
        {
            "common": "Bloody-belly comb jelly",
            "scientific": "Lampocteis cruentiventer",
            "order": "lobed comb",
            "size": "1.5 - 16 cm long & 1.2 - 10 cm wide",
            "date": 2001,
            "location": "North Pacific Ocean (Canada to Baja California, Japan)",
            "depth": "250-1,500m (820-4,900 feet)",
            "fatal": "No"
        },
        {
            "common": "Melon comb jelly",
            "scientific": "Beroe cucumis",
            "order": "zip-lock",
            "size": "up to 15cm (6in) in length",
            "date": 1780,
            "location": "North Atlantic Ocean, North sea, Skagerrak and Kattegat",
            "depth": "0-880m",
            "fatal": "No"
        },
        {
            "common": "Stalked trumpet jelly",
            "scientific": "Depastromorpha africana",
            "order": "stemmed",
            "size": "1 to 2cm in length",
            "date": 1935,
            "location": "South African coast (Cape Peninsula to Hermanus)",
            "depth": "Unknown",
            "fatal": "No"
        },
        {
            "common": "Kaleidoscope jellyfish",
            "scientific": "Haliclystus auricula",
            "order": "stemmed",
            "size": "2-2.5 in length",
            "date": 1863,
            "location": "West coast of Britain and Ireland and the Channel Isles",
            "depth": "up to 200m",
            "fatal": "No"
        },
        {
            "common": "Stalked jellyfish",
            "scientific": "Haliclystus sanjuanensis",
            "order": "stemmed",
            "size": "up to 4cm in length",
            "date": 1940,
            "location": "Pacific Ocean along the west coast of North America",
            "depth": "Demersal (ocean floor)",
            "fatal": "No"
        },
        {
            "common": "Barrel jellyfish",
            "scientific": "Rhizostoma pulmo",
            "order": "fused",
            "size": "60cm - 90cm in diameter",
            "date": 1778,
            "location": "Mediterranean Sea(Alboran Sea to Libya) & Black Sea(East to Russia and north to Ukraine)",
            "depth": "0-40m",
            "fatal": "No"
        },
        {
            "common": "Blue blubber jelly",
            "scientific": "Catostylus mosaicus",
            "order": "fused",
            "size": "35cm in diameter",
            "date": 1824,
            "location": "coastal parts of Indo-Pacific and Queensland, New South Wales and Victoria",
            "depth": "0-200m",
            "fatal": "No"
        },
        {
            "common": "Upside-down jellyfish",
            "scientific": "Cassiopea andromeda",
            "order": "fused",
            "size": "up to 30cm in diameter",
            "date": 1775,
            "location": "Indo-Pacific and Hawaiian Islands",
            "depth": "Intertidal zone (shallow waters)",
            "fatal": "No"
        },
        {
            "common": "Spotted jelly",
            "scientific": "Mastigias papua",
            "order": "fused",
            "size": "3-10cm in length & 2-7cm in diameter",
            "date": 1830,
            "location": "Indo-Pacific Ocean between Japan and Australia",
            "depth": "Shallow waters",
            "fatal": "No"
        },
        {
            "common": "White-spotted jellyfish",
            "scientific": "Phyllorhiza punctata",
            "order": "fused",
            "size": "Up to 50cm (20in) in diameter",
            "date": 1884,
            "location": "Australia, Hawaiian Islands, Caribbean, Gulf of Mexico.",
            "depth": "0-20m",
            "fatal": "No"
        },
        {
            "common": "Upside-down jellyfish",
            "scientific": "Cassiopea xamachana",
            "order": "fused",
            "size": "Up to 25cm (10in)",
            "date": 1892,
            "location": "Western Atlantic Ocean, Caribbean Sea and the Gulf of Mexico",
            "depth": "0-10m",
            "fatal": "No"
        },
        {
            "common": "Saucer Jelly",
            "scientific": "Aurelia Aurita",
            "order": "flag mouth",
            "size": "Average of 3in in length & 7-8in in diameter",
            "date": 1758,
            "location": "Coast of North America and Europe",
            "depth": "600ft-3,300ft",
            "fatal": "No"
        },
        {
            "common": "Lion's Mane Jellyfish",
            "scientific": "Cyanea capillata",
            "order": "flag mouth",
            "size": "30-120feet tentacle length & 1in-10ft in diameter",
            "date": 1758,
            "location": "North & Irish Seas, the English Channel, Kattegat and Oresund",
            "depth": "0-66ft",
            "fatal": "No"
        },
        {
            "common": "Egg-yolk jelly",
            "scientific": "Phacellophora camtschatica",
            "order": "flag mouth",
            "size": "50-60cm in diameter & 20ft(6m) in tentacle length",
            "date": 1835,
            "location": "Gulf of Alaska to Chile, Eastern Pacific, the Atlantic and the Mediterranean",
            "depth": "50-330m",
            "fatal": "No"
        },
        {
            "common": "Atlantic sea nettle",
            "scientific": "Chrysaora quinquecirrha",
            "order": "flag mouth",
            "size": "up to 40cm (16 in) in diameter & up to 25cm in length",
            "date": 1848,
            "location": "Pacific, Atlantic and Indian Oceans (East Coast & Gulf of Mexico)",
            "depth": "0-85m",
            "fatal": "No"
        },
        {
            "common": "Purplestriped jelly",
            "scientific": "Pelagia noctiluca",
            "order": "flag mouth",
            "size": "up to 9cm in length and 6.5cm in diameter",
            "date": 1775,
            "location": "North Atlantic region (4th parallel north to north sea and atlantic Canada, Mediterranean and Gulf of Mexico)",
            "depth": "0-1600m",
            "fatal": "No"
        },
        {
            "common": "Pacific sea nettle",
            "scientific": "Chrysaora fuscescens",
            "order": "flag mouth",
            "size": "Up to 30cm(1ft) in diameter",
            "date": 1835,
            "location": "Coastal waters of California and Oregon",
            "depth": "shallow bays and harbors",
            "fatal": "No"
        },
        {
            "common": "Australian box jellyfish",
            "scientific": "Chironex fleckeri",
            "order": "branch box",
            "size": "16-24cm in diameter & up to 3m in length",
            "date": 1956,
            "location": "Indian Ocean, Pacific Ocean and the Great Barrier Reef",
            "depth": "39-56m",
            "fatal": "Yes"
        },
        {
            "common": "Cannonball jellyfish",
            "scientific": "Stomolophus meleagris",
            "order": "fused",
            "size": "Up to 25cm (10in) in diameter",
            "date": 1860,
            "location": "Southeastern coast of US including the Gulf Coast",
            "depth": "Coastal",
            "fatal": "No"
        },
        {
            "common": "Mediterranean jelly",
            "scientific": "Cotylorhiza tuberculata",
            "order": "fused",
            "size": "Up to 40cm in diameter",
            "date": 1778,
            "location": "Mediterranean sea: Italy, Greece and Monaco",
            "depth": "0-7m",
            "fatal": "No"
        },
        {
            "common": "Four-handed box jellyfish",
            "scientific": "Chiropsalmus quadrumanus",
            "order": "branch box",
            "size": "average of 14cm in diameter & 10cm in length",
            "date": 1859,
            "location": "East coast of North America North Carolina-Mexico and Pacific Ocean (western atlantic & indo-west pacific)",
            "depth": "0-85m",
            "fatal": "Yes"
        },
        {
            "common": "Diplulmaris antarctica",
            "scientific": "Diplulmaris antarctica",
            "order": "flag mouth",
            "size": "Up to 18cm in diameter & length",
            "date": 1908,
            "location": "Southwest Atlantic and the Antarctic",
            "depth": "0-500m",
            "fatal": "No"
        },
        {
            "common": "Blue jellyfish",
            "scientific": "Cyanea lamarckii",
            "order": "flag mouth",
            "size": "Up to 30cm in diameter",
            "date": 1810,
            "location": "West coast of Scotland, the North Sea, the English Channel, and the Irish Sea",
            "depth": "Coastal",
            "fatal": "No"
        },
        {
            "common": "Compass jellyfish",
            "scientific": "Chrysaora hysoscella",
            "order": "flag mouth",
            "size": "3-43cm in diameter",
            "date": 1767,
            "location": "Northeast Atlantic Ocean (Celtic, Irish, North seas), Mediterranean Sea and coastal regions of South Africa",
            "depth": "2-30m",
            "fatal": "No"
        },
        {
            "common": "Sea thimble",
            "scientific": "Linuche unguiculata",
            "order": "crown",
            "size": "13 to 20mm in length",
            "date": 1788,
            "location": "Western tropical Atlantic Ocean, West Indian and Bahama regions.",
            "depth": "0 to 5000m",
            "fatal": "No"
        },
        {
            "common": "Nomad jellyfish",
            "scientific": "Rhopilema nomadica",
            "order": "fused",
            "size": "40 to 60cm in diameter",
            "date": 1990,
            "location": "Indian Ocean, Pacific Oceans, Mediterranean Sea and Eastern Mediterranean (coast of Lebanon, Israel, Turkey and Aegean Sea.)",
            "depth": "Tropical coastal warm waters",
            "fatal": "No"
        },
        {
            "common": "Moon Jellyfish",
            "scientific": "Aurelia labiata",
            "order": "flag mouth",
            "size": "100 to 450mm in diameter",
            "date": 1821,
            "location": "Coastal regions of Pacific Ocean (from San Diego, California, Prince William Sound, to Alaska)",
            "depth": "0 to 1000m",
            "fatal": "No"
        },
        {
            "common": "Pink meanie",
            "scientific": "Drymonema dalmatinum",
            "order": "flag mouth",
            "size": "50-100cm in diameter & 75cm in diameter",
            "date": 1880,
            "location": "Western Atlantic and the Mediterranean: Puerto Rico, Brazil, Canada and USA",
            "depth": "0 to 20m",
            "fatal": "No"
        },
        {
            "common": "Jelly blubber",
            "scientific": "Catostylus tagi",
            "order": "fused",
            "size": "Up to 65cm (26in) in diameter",
            "date": 1869,
            "location": "East Atlantic Ocean and the Mediterranean Sea",
            "depth": "Pelagic. Tropical",
            "fatal": "No"
        },
        {
            "common": "Clinging Jellyfish",
            "scientific": "Gonionemus vertens",
            "order": "non-chitinous colonial",
            "size": "1-3cm (.4-1.2cm) in diameters can expand to 3in",
            "date": 1862,
            "location": "Coastal regions throughout the Northern Hemisphere",
            "depth": "coastal",
            "fatal": "No"
        },
        {
            "common": "Flame Jellyfish",
            "scientific": "Rhopilema esculentum",
            "order": "fused",
            "size": "Up to 45cm in diameter",
            "date": 1891,
            "location": "Western Japan, the Bohai Sea, The Yellow sea, East China Sea and the North Malayan Sea.",
            "depth": "10-20m",
            "fatal": "No"
        },
        {
            "common": "Portuguese man-of-war",
            "scientific": "Physalia physalis",
            "order": "complex colonial",
            "size": "9 to 30cm in length & up to 12.7cm (5 in) wide",
            "date": 1758,
            "location": "Gulf Stream of northern Atlantic Ocean and in Tropical & subtropical regions of the Indian and Pacific Oceans.",
            "depth": "Surface of ocean",
            "fatal": "Yes"
        },
        {
            "common": "by-the-wind sailor",
            "scientific": "Velella velella",
            "order": "harpoon",
            "size": "up to 10cm in length",
            "date": 1758,
            "location": "Pelagic water world wide, (commonly in the north american West coast and the British and Irish coasts)",
            "depth": "Surface of warmer ocean water",
            "fatal": "No"
        },
        {
            "common": "Blue button",
            "scientific": "Porpita porpita",
            "order": "harpoon",
            "size": "up to 30mm in diameter",
            "date": 1758,
            "location": "Tropical and sub-tropical water of the Pacific, Atlantic, Indian oceans also Mediterranean and eastern Arabian seas.",
            "depth": "Passive drifter on surface of ocean",
            "fatal": "No"
        },
        {
            "common": "Immortal jellyfish",
            "scientific": "Turritopsis dohrnii",
            "order": "harpoon",
            "size": "up to 4.5mm in diameter and length",
            "date": 1883,
            "location": "Temperate to tropical regions in all of the world's ocean",
            "depth": "marinas and on the ocean floor salinity range of polyhaline (18-30 PSU) and euhaline (30-40 PSU).",
            "fatal": "No"
        },
        {
            "common": "Irukandji jellyfish",
            "scientific": "Carukia barnesi",
            "order": "unbranched box",
            "size": "1-2cm in bell diameter, up to 1m tentacles",
            "date": 1967,
            "location": "Offshore water of northern Australia for Western Australia to Queensland",
            "depth": "5-40m",
            "fatal": "Yes"
        },
        {
            "common": "Carybdea sivickisi",
            "scientific": "Carybdea sivickisi",
            "order": "unbranched box",
            "size": "1-14mm in bell diameter and an average of 7mm in height",
            "date": 1985,
            "location": "Western Pacific (from Japan in the north, the Indo-Pacific, to New Zealand in the south)",
            "depth": "Shallower waters Pelagic (for mating rituals in summer) and deep open marine waters Benthic (for food)",
            "fatal": "No"
        },
        {
            "common": "Mangrove box jelly",
            "scientific": "Tripedalia cystophora",
            "order": "unbranched box",
            "size": "Up to 1 cm (0.4in) in diameter",
            "date": 1897,
            "location": "North Coast of South America in the Atlantic Ocean",
            "depth": "0-20cm",
            "fatal": "No"
        },
        {
            "common": "Sea Wasp",
            "scientific": "Alatina alata",
            "order": "unbranched box",
            "size": "up to 5cm in length",
            "date": 1830,
            "location": "Pacific Ocean, Atlantic Ocean, Indian Ocean and the Arabian Sea along Pakistan beaches.",
            "depth": "55-2282m",
            "fatal": "No"
        },
        {
            "common": "The jimble",
            "scientific": "Carybdea rastoni",
            "order": "unbranched box",
            "size": "15-40mm in bell diameter",
            "date": 1810,
            "location": "Commonly found in the warm waters of Hawaii, Australia, Japan, and the Philippines",
            "depth": "Coastal waters, estuaris and oceans",
            "fatal": "No"
        },
        {
            "common": "The giant",
            "scientific": "Keesingia gigas",
            "order": "unbranched box",
            "size": "about arm length",
            "date": 2014,
            "location": "North-west coast of Western Australia",
            "depth": "",
            "fatal": "Yes"
        },
        {
            "common": "Malo bella",
            "scientific": "Malo bella",
            "order": "unbranched box",
            "size": "1.9cm in length",
            "date": 2014,
            "location": "Eastern Indian Ocean: Australia",
            "depth": "Pelagic. Tropical",
            "fatal": "No"
        },
        {
            "common": "Tomato jellyfish",
            "scientific": "Crambione mastigophora Maas",
            "order": "fused",
            "size": "Up to 40cm wide",
            "date": 1903,
            "location": "Indo-West Pacific: Australia and Marshall Islands",
            "depth": "Pelagic. Tropical",
            "fatal": "No"
        },
        {
            "common": "Manania handi",
            "scientific": "Manania handi",
            "order": "stemmed",
            "size": "Up to 4cm in length and 2cm in diameter",
            "date": 1989,
            "location": "Pacfic Ocean along the west coast of North America",
            "depth": "up to 200m",
            "fatal": "No"
        },
        {
            "common": "Goblet stalked-jellyfish",
            "scientific": "Craterolophus convolvulus",
            "order": "stemmed",
            "size": "1.5 to 2.5 cm wide & 2.5 to 3cm high",
            "date": 1835,
            "location": "Atlantic Ocean",
            "depth": "1000m-4000m",
            "fatal": "No"
        },
        {
            "common": "Lucernaria janetae",
            "scientific": "Lucernaria janetae",
            "order": "stemmed",
            "size": "Umbrella Up to 100mm wide and 50mm deep",
            "date": 2005,
            "location": "East Pacific Rise",
            "depth": "2500-2700m",
            "fatal": "No"
        },
        {
            "common": "Pink helmet",
            "scientific": "Aglantha digitale",
            "order": "ringed",
            "size": "10 to 22mm in height and 5 to 11mm in width",
            "date": 1776,
            "location": "Northern parts of the Atlantic and Pacific Oceans, North sea of Skagerrak, the Arctic Ocean, Dvina Bay, Onega Bay, Hudson Bay, and Hudson Basin and Kandalaksha Bay in the White Sea.",
            "depth": "25 to 700m",
            "fatal": "No"
        },
        {
            "common": "Mushroom cap jellyfish",
            "scientific": "Rhopilema verrilli",
            "order": "fused",
            "size": "35 to 51cm in bell diameter",
            "date": 1887,
            "location": "coast in the northern Gulf of Mexico, and between North Carolina and New England",
            "depth": "",
            "fatal": "Unknown"
        },
        {
            "common": "Aurelia solida",
            "scientific": "Aurelia solida",
            "order": "flag mouth",
            "size": "Up to 10.5 cm wide",
            "date": 1905,
            "location": "Atlantic Ocean and Indian Ocean: from Bermuda to Portugal, south to South Africa and east to Australia.",
            "depth": "3,000m to 5,000m",
            "fatal": "No"
        },
        {
            "common": "Blob-top jelly",
            "scientific": "Neoturris breviconis",
            "order": "harpoon",
            "size": "Up to 4.5cm in height",
            "date": 1902,
            "location": "Arctic, Northern Atlantic and Northern Pacific. Mostly polar, but also in tropical and boreal.",
            "depth": "0-500m",
            "fatal": "No"
        },
        {
            "common": "Leuckartiara octona",
            "scientific": "Leuckartiara octona",
            "order": "harpoon",
            "size": "Up to 2cm in height",
            "date": 1823,
            "location": "Atlantic Ocean, Mediterranean, Sub-Antarctic and temperate waters of the northern hemisphere.",
            "depth": "0-210m",
            "fatal": "No"
        },
        {
            "common": "Many-ribbed jellyfish",
            "scientific": "Aequorea forskalea",
            "order": "chitinous colonial",
            "size": "Up to 175mm in diameter",
            "date": 1810,
            "location": "Mid-continental shelf",
            "depth": "deeper than 150m",
            "fatal": "No"
        },
        {
            "common": "Pandea conica",
            "scientific": "Pandea conica",
            "order": "harpoon",
            "size": "Up to 1cm in length",
            "date": 1827,
            "location": "Southwest Atlantic and the Mediterranean: Italy, Brazil and Spain.",
            "depth": "Demersal.  Tropical",
            "fatal": "No"
        },
        {
            "common": "Nausithoe aurea",
            "scientific": "Nausithoe aurea",
            "order": "crown",
            "size": "Average of 10.5mm in diameter",
            "date": 1997,
            "location": "Southwest Atlantic: Brazil.",
            "depth": "1-6m Tropical",
            "fatal": "No"
        },
        {
            "common": "gold-spotted crown jelly",
            "scientific": "Atorella vanhoeffeni",
            "order": "crown",
            "size": "3-5mm in bell length and 4.5-7mm in bell width",
            "date": 1909,
            "location": "Atlantic and Pacific Oceans: Canada, Ireland and USA.",
            "depth": "0-1000m",
            "fatal": "No"
        },
        {
            "common": "Bumpy Jelly",
            "scientific": "Stellamedusa ventana",
            "order": "flag mouth",
            "size": "Up to 10cm in diameter and 20cm in total length",
            "date": 2004,
            "location": "Monterey Bay, California and the Gulf of California",
            "depth": "150-500m",
            "fatal": "No"
        },
        {
            "common": "Parumbrosa polylobata",
            "scientific": "Parumbrosa polylobata",
            "order": "flag mouth",
            "size": "Up to 16cm wide",
            "date": 1910,
            "location": "Northwest Pacific: Japan",
            "depth": "Pelagic.  Subtropical",
            "fatal": "No"
        },
        {
            "common": "Eight-strand jelly",
            "scientific": "Melicertum octocostatum",
            "order": "chitinous colonial",
            "size": "up to 1.4cm wide",
            "date": 1835,
            "location": "Arctic, Northern Atlantic and Pacific Ocean.",
            "depth": "0-102m Polar",
            "fatal": "No"
        },
        {
            "common": "Viper Jellyfish",
            "scientific": "Chironex yamaguchii",
            "order": "branch box",
            "size": "Up to 110mm in bell height and 95mm in bell diameter",
            "date": 2009,
            "location": "Found in coastal waters around Japan, on Okinawa and the Ryukyu Islands, and in the Philippines.",
            "depth": "unknown",
            "fatal": "Yes"
        },
        {
            "common": "Sea nut",
            "scientific": "Mertensia ovum",
            "order": "rounded comb",
            "size": "Up to 10cm (3.9in)",
            "date": 1780,
            "location": "Arctic and adjacent polar seas",
            "depth": "Up to 50m (160ft)",
            "fatal": "No"
        }
    ];




    class ReactDataTable extends React.Component {
        constructor(props) {
            super(props);
            this.originalData = props.originalData;
            this.state = {
                order: '',
                isFatal: false,
            };

            this.updateFormState = this.updateFormState.bind(this);
        }
        updateFormState(specification) {
            this.setState(specification);
        }

        render() {
            let filteredData = this.originalData;

            if (this.state.order !== '') {
                filteredData = filteredData.filter(
                    (row) => row.order === this.state.order
                );
            }

            if (this.state.isFatal) {
                filteredData = filteredData.filter(
                    (row) => row.isFatal === true
                );
            }

            return (
                <React.Fragment>
                    <Filters
                        order={this.state.order}
                        isFatal={this.state.isFatal}
                        updateFormState={this.updateFormState}
                    />

                    <hr />
                    <Input
                        type='checkbox'
                        checked={this.state.isFatal}
                        onChange={updateIsFatal}
                    />

                    <DataTable
                        dataToDisplay={filteredData}
                    />
                </React.Fragment>
            );
        }
    }

    const container = document.getElementById('react-data-table');
    const root = ReactDOM.createRoot(container);
    root.render(<ReactDataTable originalData={lolData} />);
})();