// addresses should be prefaced with `Attn: ${countyName} Board of Elections`
export interface Address {
  streetAddress: string;
  streetAddress2?: string;
  streetAddress3?: string;
  city: string;
  zipcode: string;
}

export interface County {
  displayName: string;
  address: Address;
  phone: string;
  fax: string;
  fax2?: string;
  email?: string;
  absenteeEmail?: string; // these may be out of date due to the primaries
}

interface BoardsOfElections {
  [key: string]: County;
}

const boardsOfElections: BoardsOfElections = {
  "Albany County": {
    displayName: "Albany County",
    address: {
      streetAddress: "260 South Pearl Street",
      city: "Albany",
      zipcode: "12202",
    },
    phone: "5184875060",
    fax: "5184875077",
    email: "boardofelections@albanycounty.com",
  },
  "Allegany County": {
    displayName: "Allegany County",
    address: {
      streetAddress: "8 Willetts Avenue",
      city: "Belmont",
      zipcode: "14813",
    },
    phone: "5852689294",
    fax: "5852689406",
    email: "ACBOE@alleganyco.com",
  },
  "Bronx County": {
    displayName: "Bronx County",
    address: {
      streetAddress: "1780 Grand Concourse, 5th Floor",
      city: "Bronx",
      zipcode: "10457",
    },
    phone: "7182999017",
    fax: "7182992140",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Broome County": {
    displayName: "Broome County",
    address: {
      streetAddress: "60 Hawley Street, Government Plaza",
      streetAddress2: "P.O. Box 1766",
      city: "Binghamton",
      zipcode: "13902",
    },
    phone: "6077782172",
    fax: "6077782174",
    email: "bcboe@co.broome.ny.us",
  },
  "Cattaraugus County": {
    displayName: "Cattaraugus County",
    address: {
      streetAddress: "207 Rock City Street, Suite 100",
      city: "Little Valley",
      zipcode: "14755",
    },
    phone: "7169382400",
    fax: "7169382775",
    email: "BOE-Support@cattco.org",
  },
  "Cayuga County": {
    displayName: "Cayuga County",
    address: {
      streetAddress: "157 Genesee Street, Basement Floor",
      city: "Auburn",
      zipcode: "13021",
    },
    phone: "3152531285",
    fax: "3152531289",
    email: "election@cayugacounty.us",
  },
  "Chautauqua County": {
    displayName: "Chautauqua County",
    address: {
      streetAddress: "7 North Erie Street",
      city: "Mayville",
      zipcode: "14757",
    },
    phone: "7167534580",
    fax: "7167534111",
    email: "vote@co.chautauqua.ny.us",
  },
  "Chemung County": {
    displayName: "Chemung County",
    address: {
      streetAddress: "378 South Main Street",
      streetAddress2: "P.O. Box 588",
      city: "Elmira",
      zipcode: "14902-0588",
    },
    phone: "6077375475",
    fax: "6077375499",
    email: "votechemung@chemungcountyny.gov",
  },
  "Chenango County": {
    displayName: "Chenango County",
    address: {
      streetAddress: "5 Court Street",
      city: "Norwich",
      zipcode: "13815",
    },
    phone: "6073371760",
    fax: "607337176",
    email: "boe@co.chenango.ny.us",
  },
  "Clinton County": {
    displayName: "Clinton County",
    address: {
      streetAddress: "County Government Center, Suite 104",
      streetAddress2: "137 Margaret Street",
      city: "Plattsburgh",
      zipcode: "12901",
    },
    phone: "5185654740",
    fax: "5185654508",
    email: "BOE@clintoncountygov.com",
  },
  "Columbia County": {
    displayName: "Columbia County",
    address: {
      streetAddress: "401 State Street",
      city: "Hudson",
      zipcode: "12534",
    },
    phone: "5188283115",
    fax: "5188282624",
    email: "elections@columbiacountyny.com",
  },
  "Cortland County": {
    displayName: "Cortland County",
    address: {
      streetAddress: "112 River Street, Suite 1",
      city: "Cortland",
      zipcode: "13045-2828",
    },
    phone: "6077535032",
    fax: "6077585513",
    email: "elections@cortland-co.org",
  },
  "Delaware County": {
    displayName: "Delaware County",
    address: {
      streetAddress: "3 Gallant Avenue",
      city: "Delhi",
      zipcode: "13753",
    },
    phone: "6078325321",
    fax: "6078326077",
    email: "boe.move@co.delaware.ny.us",
  },
  "Dutchess County": {
    displayName: "Dutchess County",
    address: {
      streetAddress: "47 Cannon Street",
      city: "Poughkeepsie",
      zipcode: "12601",
    },
    phone: "8454862473",
    fax: "8454862483",
    email: "dutchesselections@dutchessny.gov",
  },
  "Erie County": {
    displayName: "Erie County",
    address: {
      streetAddress: "134 West Eagle Street",
      city: "Buffalo",
      zipcode: "14202",
    },
    phone: "7168588891",
    fax: "7168588282",
  },
  "Essex County": {
    displayName: "Essex County",
    address: {
      streetAddress: "7551 Court Street",
      streetAddress2: "P.O. Box 217",
      city: "Elizabethtown",
      zipcode: "12932",
    },
    phone: "5188733474",
    fax: "5188733479",
    email: "elections@essexcountyny.gov",
  },
  "Franklin County": {
    displayName: "Franklin County",
    address: {
      streetAddress: "355 West Main Street, Suite 161",
      city: "Malone",
      zipcode: "12953-1823",
    },
    phone: "5184811663",
    fax: "5184816018",
    email: "boe@franklincony.org",
  },
  "Fulton County": {
    displayName: "Fulton County",
    address: {
      streetAddress: "2714 STHWY 29, Suite 1",
      city: "Johnstown",
      zipcode: "12095-9946",
    },
    phone: "5187365526",
    fax: "5187361612",
    email: "boe@fultoncountyny.gov",
  },
  "Genesee County": {
    displayName: "Genesee County",
    address: {
      streetAddress: "County Building One",
      streetAddress2: "15 Main Street",
      city: "Batavia",
      zipcode: "14020",
    },
    phone: "5858157804",
    fax: "5853448562",
    email: "election@co.genesee.ny.us",
  },
  "Greene County": {
    displayName: "Greene County",
    address: {
      streetAddress: "411 Main Street, Suite 437",
      city: "Catskill",
      zipcode: "12414",
    },
    phone: "5187193550",
    fax: "5187193784",
    email: "elections@discovergreene.com",
    absenteeEmail: "absentee@discovergreene.com",
  },
  "Hamilton County": {
    displayName: "Hamilton County",
    address: {
      streetAddress: "Route 8",
      streetAddress2: "P.O. Box 175",
      city: "Lake Pleasant",
      zipcode: "12108",
    },
    phone: "5185484684",
    fax: "5185486345",
    email: "elections@hamiltoncountyny.gov",
  },
  "Herkimer County": {
    displayName: "Herkimer County",
    address: {
      streetAddress: "109 Mary Street, Suite 1306",
      city: "Herkimer",
      zipcode: "13350",
    },
    phone: "3158671102",
    fax: "3158671106",
    email: "HCBoe@herkimercounty.org",
    absenteeEmail: "boeabsentee@herkimercounty.org",
  },
  "Jefferson County": {
    displayName: "Jefferson County",
    address: {
      streetAddress: "175 Arsenal Street",
      city: "Watertown",
      zipcode: "13601",
    },
    phone: "3157853027",
    fax: "3157855197",
    email: "elections@co.jefferson.ny.us",
  },
  "Kings County": {
    displayName: "Kings County (Brooklyn)",
    address: {
      streetAddress: "345 Adams Street, 4th Floor",
      city: "Brooklyn",
      zipcode: "11201",
    },
    phone: "7187978800",
    fax: "7182465958",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Lewis County": {
    displayName: "Lewis County",
    address: {
      streetAddress: "7660 North State Street",
      city: "Lowville",
      zipcode: "13367",
    },
    phone: "3153765329",
    fax: "3153762860",
    email: "elections@lewiscountyny.org",
  },
  "Livingston County": {
    displayName: "Livingston County",
    address: {
      streetAddress: "County Government Center",
      streetAddress2: "6 Court Street, Room 104",
      city: "Geneseo",
      zipcode: "14454-1043",
    },
    phone: "5852437090",
    fax: "5852437015",
    email: "election@co.livingston.ny.us",
  },
  "Madison County": {
    displayName: "Madison County",
    address: {
      streetAddress: "North Court Street - County Office Building",
      streetAddress2: "P.O. Box 666",
      city: "Wampsville",
      zipcode: "13163",
    },
    phone: "3153662231",
    fax: "3153662532",
    email: "BOEcommissioners@madisoncounty.ny.gov",
  },
  "Monroe County": {
    displayName: "Monroe County",
    address: {
      streetAddress: "39 Main Street West",
      city: "Rochester",
      zipcode: "14614",
    },
    phone: "5857531550",
    fax: "5853241612",
    email: "mcboe@monroecounty.gov",
  },
  "Montgomery County": {
    displayName: "Montgomery County",
    address: {
      streetAddress: "Old Courthouse, 9 Park Street",
      streetAddress2: "P.O. Box 1500",
      city: "Fonda",
      zipcode: "12068-1500",
    },
    phone: "5188538180",
    fax: "5188538392",
    email: "boe@co.montgomery.ny.us",
  },
  "Nassau County": {
    displayName: "Nassau County",
    address: {
      streetAddress: "240 Old Country Road, 5th Floor",
      streetAddress2: "P.O. Box 9002",
      city: "Mineola",
      zipcode: "11501",
    },
    phone: "5165718683",
    fax: "5165712058",
    email: "InfoBOE@nassaucountyny.gov",
  },
  "New York County": {
    displayName: "New York County (Manhattan)",
    address: {
      streetAddress: "200 Varick Street, 10th Floor",
      city: "New York",
      zipcode: "10014",
    },
    phone: "2128862100",
    fax: "6466382047",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Niagara County": {
    displayName: "Niagara County",
    address: {
      streetAddress: "111 Main Street, Suite 100",
      city: "Lockport",
      zipcode: "14094",
    },
    phone: "7164384040",
    fax: "7164384054",
    email: "ncboe@niagaracounty.com",
  },
  "Oneida County": {
    displayName: "Oneida County",
    address: {
      streetAddress: "Union Station",
      streetAddress2: "321 Main Street, 3rd Floor",
      city: "Utica",
      zipcode: "13501",
    },
    phone: "3157985765",
    fax: "3157986412",
    email: "BoardofElections@ocgov.net",
  },
  "Onondaga County": {
    displayName: "Onondaga County",
    address: {
      streetAddress: "1000 Erie Boulevard West",
      city: "Syracuse",
      zipcode: "13204",
    },
    phone: "3154353312",
    fax: "3154358451",
    email: "elections@ongov.net",
    absenteeEmail: "absentee@ongov.net",
  },
  "Ontario County": {
    displayName: "Ontario County",
    address: {
      streetAddress: "74 Ontario Street",
      city: "Canandaigua",
      zipcode: "14424",
    },
    phone: "5853964005",
    fax: "5853932941",
    email: "BOE@co.ontario.ny.us",
  },
  "Orange County": {
    displayName: "Orange County",
    address: {
      streetAddress: "75 Webster Avenue",
      streetAddress2: "P.O. Box 30",
      city: "Goshen",
      zipcode: "10924",
    },
    phone: "8453606500",
    fax: "8452912437",
    email: "elections@orangecountygov.com",
  },
  "Orleans County": {
    displayName: "Orleans County",
    address: {
      streetAddress: "14016 State Route 31 West",
      streetAddress2: "Suite 140",
      city: "Albion",
      zipcode: "14411",
    },
    phone: "5855893274",
    fax: "5855892771",
    email: "Elections@orleansny.com",
  },
  "Oswego County": {
    displayName: "Oswego County",
    address: {
      streetAddress: "185 East Seneca Street, Box 9",
      city: "Oswego",
      zipcode: "13126",
    },
    phone: "3153498350",
    fax: "3153498357",
    email: "OswegoCounty.BOE@oswegocounty.com",
  },
  "Otsego County": {
    displayName: "Otsego County",
    address: {
      streetAddress: "140 County Highway 33 West",
      streetAddress2: "Suite 2",
      city: "Cooperstown",
      zipcode: "13326",
    },
    phone: "6075474247",
    fax: "6075474248",
    email: "boe@otsegocounty.com",
  },
  "Putnam County": {
    displayName: "Putnam County",
    address: {
      streetAddress: "25 Old Route 6",
      city: "Carmel",
      zipcode: "10512",
    },
    phone: "8458081300",
    fax: "8458081920",
    email: "PutnamCountyElections@putnamcountyny.gov",
  },
  "Queens County": {
    displayName: "Queens County",
    address: {
      streetAddress: "118-35 Queens Boulevard",
      city: "Forest Hills",
      zipcode: "11375",
    },
    phone: "7187306730",
    fax: "7184593384",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Rensselaer County": {
    displayName: "Rensselaer County",
    address: {
      streetAddress: "Ned Pattison Government Center",
      streetAddress2: "1600 Seventh Avenue",
      city: "Troy",
      zipcode: "12180",
    },
    phone: "5182702990",
    fax: "5182702909",
    email: "RenscoBOE@rensco.com",
  },
  "Richmond County": {
    displayName: "Richmond County (Staten Island)",
    address: {
      streetAddress: "1 Edgewater Plaza, 4th Floor",
      city: "Staten Island",
      zipcode: "10305",
    },
    phone: "7188760079",
    fax: "7188760912",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Rockland County": {
    displayName: "Rockland County",
    address: {
      streetAddress: "11 New Hempstead Road",
      city: "New City",
      zipcode: "10956",
    },
    phone: "8456385172",
    fax: "8456385196",
    email: "voterinfo@co.rockland.ny.us",
  },
  "Saint Lawrence County": {
    displayName: "Saint Lawrence County",
    address: {
      streetAddress: "80 State Highway 310",
      city: "Canton",
      zipcode: "13617",
    },
    phone: "3153792202",
    fax: "3153862737",
    email: "slcballot@stlawco.org",
  },
  "Saratoga County": {
    displayName: "Saratoga County",
    address: {
      streetAddress: "50 West High Street",
      city: "Ballston Spa",
      zipcode: "12020",
    },
    phone: "5188852249",
    fax: "5188844751",
    email: "elections@saratogacountyny.gov",
    absenteeEmail: "absenteeballot@saratogacountyny.gov",
  },
  "Schenectady County": {
    displayName: "Schenectady County",
    address: {
      streetAddress: "2696 Hamburg Street",
      city: "Schenectady",
      zipcode: "12303",
    },
    phone: "5183772469",
    fax: "5183772716",
    email: "boe@schenectadycounty.com",
  },
  "Schoharie County": {
    displayName: "Schoharie County",
    address: {
      streetAddress: "County Office Building - 284 Main Street",
      streetAddress2: "P.O. Box 99",
      city: "Schoharie",
      zipcode: "12157",
    },
    phone: "5182958388",
    fax: "5182958419",
    email: "boe@co.schoharie.ny.us",
  },
  "Schuyler County": {
    displayName: "Schuyler County",
    address: {
      streetAddress: "County Office Building",
      streetAddress2: "105 9th Street, Unit 13",
      city: "Watkins Glen",
      zipcode: "14891-9972",
    },
    phone: "6075358195",
    fax: "6075358364",
    email: "elections@co.schuyler.ny.us",
  },
  "Seneca County": {
    displayName: "Seneca County",
    address: {
      streetAddress: "One DiPronio Drive",
      city: "Waterloo",
      zipcode: "13165",
    },
    phone: "3155391760",
    fax: "3155393710",
    email: "boe@co.seneca.ny.us",
  },
  "Steuben County": {
    displayName: "Steuben County",
    address: {
      streetAddress: "3 East Pulteney Square",
      city: "Bath",
      zipcode: "14810",
    },
    phone: "6076642260",
    fax: "6076642376",
    email: "elections@SteubenCountyNY.gov",
  },
  "Suffolk County": {
    displayName: "Suffolk County",
    address: {
      streetAddress: "Yaphank Avenue",
      streetAddress2: "P.O. Box 700",
      city: "Yaphank",
      zipcode: "11980",
    },
    phone: "6318524500",
    fax: "6318524590",
    email: "BOEinfo@suffolkcountyny.gov",
  },
  "Sullivan County": {
    displayName: "Sullivan County",
    address: {
      streetAddress: "Government Center, 100 North Street",
      streetAddress2: "P.O. Box 5012",
      city: "Monticello",
      zipcode: "12701-5192",
    },
    phone: "8458070400",
    fax: "8458070410",
    email: "scboe@co.sullivan.ny.us",
  },
  "Tioga County": {
    displayName: "Tioga County",
    address: {
      streetAddress: "1062 State Route 38",
      streetAddress2: "P.O. Box 306",
      city: "Owego",
      zipcode: "13827",
    },
    phone: "6076878261",
    fax: "6076876348",
    email: "votetioga@co.tioga.ny.us",
  },
  "Tompkins County": {
    displayName: "Tompkins County",
    address: {
      streetAddress: "Court House Annex",
      streetAddress2: "128 East Buffalo Street",
      city: "Ithaca",
      zipcode: "14850",
    },
    phone: "6072745522",
    fax: "6072745533",
    email: "elections@tompkins-co.org",
  },
  "Ulster County": {
    displayName: "Ulster County",
    address: {
      streetAddress: "284 Wall Street",
      city: "Kingston",
      zipcode: "12401",
    },
    phone: "8453345470",
    fax: "8453345434",
    email: "elections@co.ulster.ny.us",
  },
  "Warren County": {
    displayName: "Warren County",
    address: {
      streetAddress: "County Municipal Center",
      streetAddress2: "1340 State Route 9",
      streetAddress3: "3rd Floor, Human Services",
      city: "Lake George",
      zipcode: "12845",
    },
    phone: "5187616456",
    fax: "5187616480",
    email: "boe@warrencountyny.gov",
  },
  "Washington County": {
    displayName: "Washington County",
    address: {
      streetAddress: "383 Broadway",
      city: "Fort Edward",
      zipcode: "12828",
    },
    phone: "5187462180",
    fax: "5187462179",
    email: "BoardofElections@Washingtoncountyny.gov",
  },
  "Wayne County": {
    displayName: "Wayne County",
    address: {
      streetAddress: "7376 State Route 31",
      streetAddress2: "P.O. Box 636",
      city: "Lyons",
      zipcode: "14489",
    },
    phone: "3159467400",
    fax: "3159467409",
    email: "elections@co.wayne.ny.us",
  },
  "Westchester County": {
    displayName: "Westchester County",
    address: {
      streetAddress: "25 Quarropas Street",
      city: "White Plains",
      zipcode: "10601",
    },
    phone: "9149955700",
    fax: "9149953190",
    fax2: "9149957753",
    email: "BOE-West@westchestergov.com",
  },
  "Wyoming County": {
    displayName: "Wyoming County",
    address: {
      streetAddress: "4 Perry Avenue",
      city: "Warsaw",
      zipcode: "14569",
    },
    phone: "5857868931",
    fax: "5857868843",
    email: "boewyoming@wyomingco.net",
  },
  "Yates County": {
    displayName: "Yates County",
    address: {
      streetAddress: "417 Liberty Street, Suite 1124",
      streetAddress2: "",
      city: "Penn Ya",
      zipcode: "14527",
    },
    phone: "3155365135",
    fax: "3155365523",
    email: "boardofelections@yatescounty.org",
  },
};

export default boardsOfElections;
