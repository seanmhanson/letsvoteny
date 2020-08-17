// addresses should be prefaced with `Attn: ${countyName} Board of Elections`
interface Address {
  streetAddress: String;
  streetAddress2?: String;
  streetAddress3?: String;
  city: String;
  zipcode: String;
}

interface County {
  alias?: String;
  address: Address;
  phone: String;
  fax: String;
  fax2?: String;
  email?: String;
  absenteeEmail?: String; // these may be out of date due to the primaries
}

interface BoardsOfElections {
  [key: string]: County;
}

const boardsOfElections: BoardsOfElections = {
  "Albany County": {
    address: {
      streetAddress: "260 South Pearl Street",
      city: "Albany",
      zipcode: "12202",
    },
    phone: "518-487-5060",
    fax: "518-487-5077",
    email: "boardofelections@albanycounty.com",
  },
  "Allegany County": {
    address: {
      streetAddress: "8 Willetts Avenue",
      city: "Belmont",
      zipcode: "14813",
    },
    phone: "585-268-9294",
    fax: "585-268-9406",
    email: "ACBOE@alleganyco.com",
  },
  "Bronx County": {
    address: {
      streetAddress: "1780 Grand Concourse, 5th Floor",
      city: "Bronx",
      zipcode: "10457",
    },
    phone: "718-299-9017",
    fax: "718-299-2140",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Broome County": {
    address: {
      streetAddress: "60 Hawley Street, Government Plaza",
      streetAddress2: "P.O. Box 1766",
      city: "Binghamton",
      zipcode: "13902",
    },
    phone: "607-778-2172",
    fax: "607-778-2174",
    email: "bcboe@co.broome.ny.us",
  },
  "Cattaraugus Couty": {
    address: {
      streetAddress: "207 Rock City Street, Suite 100",
      city: "Little Valley",
      zipcode: "14755",
    },
    phone: "716-938-2400",
    fax: "716-938-2775",
    email: "BOE-Support@cattco.org",
  },
  "Cayuga County": {
    address: {
      streetAddress: "157 Genesee Street, Basement Floor",
      city: "Auburn",
      zipcode: "13021",
    },
    phone: "315-253-1285",
    fax: "315-253-1289",
    email: "election@cayugacounty.us",
  },
  "Chautauqua Couny": {
    address: {
      streetAddress: "7 North Erie Street",
      city: "Mayville",
      zipcode: "14757",
    },
    phone: "716-753-4580",
    fax: "716-753-4111",
    email: "vote@co.chautauqua.ny.us",
  },
  "Chemung County": {
    address: {
      streetAddress: "378 South Main Street",
      streetAddress2: "P.O. Box 588",
      city: "Elmira",
      zipcode: "14902-0588",
    },
    phone: "607-737-5475",
    fax: "607-737-5499",
    email: "votechemung@chemungcountyny.gov",
  },
  "Chenango County": {
    address: {
      streetAddress: "5 Court Street",
      city: "Norwich",
      zipcode: "13815",
    },
    phone: "607-337-1760",
    fax: "607-337-176",
    email: "boe@co.chenango.ny.us",
  },
  "Clinton County": {
    address: {
      streetAddress: "County Government Center, Suite 104",
      streetAddress2: "137 Margaret Street",
      city: "Plattsburgh",
      zipcode: "12901",
    },
    phone: "518-565-4740",
    fax: "518-565-4508",
    email: "BOE@clintoncountygov.com",
  },
  "Columbia County": {
    address: {
      streetAddress: "401 State Street",
      city: "Hudson",
      zipcode: "12534",
    },
    phone: "518-828-3115",
    fax: "518-828-2624",
    email: "elections@columbiacountyny.com",
  },
  "Cortland County": {
    address: {
      streetAddress: "112 River Street, Suite 1",
      city: "Cortland",
      zipcode: "13045-2828",
    },
    phone: "607-753-5032",
    fax: "607-758-5513",
    email: "elections@cortland-co.org",
  },
  "Delaware County": {
    address: {
      streetAddress: "3 Gallant Avenue",
      city: "Delhi",
      zipcode: "13753",
    },
    phone: "607-832-5321",
    fax: "607-832-6077",
    email: "boe.move@co.delaware.ny.us",
  },
  "Dutchess County": {
    address: {
      streetAddress: "47 Cannon Street",
      city: "Poughkeepsie",
      zipcode: "12601",
    },
    phone: "845-486-2473",
    fax: "845-486-2483",
    email: "dutchesselections@dutchessny.gov",
  },
  "Erie County": {
    address: {
      streetAddress: "134 West Eagle Street",
      city: "Buffalo",
      zipcode: "14202",
    },
    phone: "716-858-8891",
    fax: "716-858-8282",
  },
  "Essex County": {
    address: {
      streetAddress: "7551 Court Street",
      streetAddress2: "P.O. Box 217",
      city: "Elizabethtown",
      zipcode: "12932",
    },
    phone: "518-873-3474",
    fax: "518-873-3479",
    email: "elections@essexcountyny.gov",
  },
  "Franklin County": {
    address: {
      streetAddress: "355 West Main Street, Suite 161",
      city: "Malone",
      zipcode: "12953-1823",
    },
    phone: "518-481-1663",
    fax: "518-481-6018",
    email: "boe@franklincony.org",
  },
  "Fulton County": {
    address: {
      streetAddress: "2714 STHWY 29, Suite 1",
      city: "Johnstown",
      zipcode: "12095-9946",
    },
    phone: "518-736-5526",
    fax: "518-736-1612",
    email: "boe@fultoncountyny.gov",
  },
  "Genesee County": {
    address: {
      streetAddress: "County Building One",
      streetAddress2: "15 Main Street",
      city: "Batavia",
      zipcode: "14020",
    },
    phone: "585-815-7804",
    fax: "585-344-8562",
    email: "election@co.genesee.ny.us",
  },
  "Greene County": {
    address: {
      streetAddress: "411 Main Street, Suite 437",
      city: "Catskill",
      zipcode: "12414",
    },
    phone: "518-719-3550",
    fax: "518-719-3784",
    email: "elections@discovergreene.com",
    absenteeEmail: "absentee@discovergreene.com",
  },
  "Hamilton County": {
    address: {
      streetAddress: "Route 8",
      streetAddress2: "P.O. Box 175",
      city: "Lake Pleasant",
      zipcode: "12108",
    },
    phone: "518-548-4684",
    fax: "518-548-6345",
    email: "elections@hamiltoncountyny.gov",
  },
  "Herkimer County": {
    address: {
      streetAddress: "109 Mary Street, Suite 1306",
      city: "Herkimer",
      zipcode: "13350",
    },
    phone: "315-867-1102",
    fax: "315-867-1106",
    email: "HCBoe@herkimercounty.org",
    absenteeEmail: "boeabsentee@herkimercounty.org",
  },
  "Jefferson Count": {
    address: {
      streetAddress: "175 Arsenal Street",
      city: "Watertown",
      zipcode: "13601",
    },
    phone: "315-785-3027",
    fax: "315-785-5197",
    email: "elections@co.jefferson.ny.us",
  },
  "Kings County": {
    address: {
      streetAddress: "345 Adams Street, 4th Floor",
      city: "Brooklyn",
      zipcode: "11201",
    },
    alias: "Brooklyn",
    phone: "718-797-8800",
    fax: "718-246-5958",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Lewis County": {
    address: {
      streetAddress: "7660 North State Street",
      city: "Lowville",
      zipcode: "13367",
    },
    phone: "315-376-5329",
    fax: "315-376-2860",
    email: "elections@lewiscountyny.org",
  },
  "Livingston Couny": {
    address: {
      streetAddress: "County Government Center",
      streetAddress2: "6 Court Street, Room 104",
      city: "Geneseo",
      zipcode: "14454-1043",
    },
    phone: "585-243-7090",
    fax: "585-243-7015",
    email: "election@co.livingston.ny.us",
  },
  "Madison County": {
    address: {
      streetAddress: "North Court Street - County Office Building",
      streetAddress2: "P.O. Box 666",
      city: "Wampsville",
      zipcode: "13163",
    },
    phone: "315-366-2231",
    fax: "315-366-2532",
    email: "BOEcommissioners@madisoncounty.ny.gov",
  },
  "Monroe County": {
    address: {
      streetAddress: "39 Main Street West",
      city: "Rochester",
      zipcode: "14614",
    },
    phone: "585-753-1550",
    fax: "585-324-1612",
    email: "mcboe@monroecounty.gov",
  },
  "Montgomery Couny": {
    address: {
      streetAddress: "Old Courthouse, 9 Park Street",
      streetAddress2: "P.O. Box 1500",
      city: "Fonda",
      zipcode: "12068-1500",
    },
    phone: "518-853-8180",
    fax: "518-853-8392",
    email: "boe@co.montgomery.ny.us",
  },
  "Nassau County": {
    address: {
      streetAddress: "240 Old Country Road, 5th Floor",
      streetAddress2: "P.O. Box 9002",
      city: "Mineola",
      zipcode: "11501",
    },
    phone: "516-571-8683",
    fax: "516-571-2058",
    email: "InfoBOE@nassaucountyny.gov",
  },
  "New York County": {
    address: {
      streetAddress: "200 Varick Street, 10th Floor",
      city: "New York",
      zipcode: "10014",
    },
    alias: "Manhattan",
    phone: "212-886-2100",
    fax: "646-638-2047",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Niagara County": {
    address: {
      streetAddress: "111 Main Street, Suite 100",
      city: "Lockport",
      zipcode: "14094",
    },
    phone: "716-438-4040",
    fax: "716-438-4054",
    email: "ncboe@niagaracounty.com",
  },
  "Oneida County": {
    address: {
      streetAddress: "Union Station",
      streetAddress2: "321 Main Street, 3rd Floor",
      city: "Utica",
      zipcode: "13501",
    },
    phone: "315-798-5765",
    fax: "315-798-6412",
    email: "BoardofElections@ocgov.net",
  },
  "Onondaga County": {
    address: {
      streetAddress: "1000 Erie Boulevard West",
      city: "Syracuse",
      zipcode: "13204",
    },
    phone: "315-435-3312",
    fax: "315-435-8451",
    email: "elections@ongov.net",
    absenteeEmail: "absentee@ongov.net",
  },
  "Ontario County": {
    address: {
      streetAddress: "74 Ontario Street",
      city: "Canandaigua",
      zipcode: "14424",
    },
    phone: "585-396-4005",
    fax: "585-393-2941",
    email: "BOE@co.ontario.ny.us",
  },
  "Orange County": {
    address: {
      streetAddress: "75 Webster Avenue",
      streetAddress2: "P.O. Box 30",
      city: "Goshen",
      zipcode: "10924",
    },
    phone: "845-360-6500",
    fax: "845-291-2437",
    email: "elections@orangecountygov.com",
  },
  "Orleans County": {
    address: {
      streetAddress: "14016 State Route 31 West",
      streetAddress2: "Suite 140",
      city: "Albion",
      zipcode: "14411",
    },
    phone: "585-589-3274",
    fax: "585-589-2771",
    email: "Elections@orleansny.com",
  },
  "Oswego County": {
    address: {
      streetAddress: "185 East Seneca Street, Box 9",
      city: "Oswego",
      zipcode: "13126",
    },
    phone: "315-349-8350",
    fax: "315-349-8357",
    email: "OswegoCounty.BOE@oswegocounty.com",
  },
  "Otsego County": {
    address: {
      streetAddress: "140 County Highway 33 West",
      streetAddress2: "Suite 2",
      city: "Cooperstown",
      zipcode: "13326",
    },
    phone: "607-547-4247",
    fax: "607-547-4248",
    email: "boe@otsegocounty.com",
  },
  "Putnam County": {
    address: {
      streetAddress: "25 Old Route 6",
      city: "Carmel",
      zipcode: "10512",
    },
    phone: "845-808-1300",
    fax: "845-808-1920",
    email: "PutnamCountyElections@putnamcountyny.gov",
  },
  "Queens County": {
    address: {
      streetAddress: "118-35 Queens Boulevard",
      city: "Forest Hills",
      zipcode: "11375",
    },
    phone: "718-730-6730",
    fax: "718-459-3384",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Rensselaer Couny": {
    address: {
      streetAddress: "Ned Pattison Government Center",
      streetAddress2: "1600 Seventh Avenue",
      city: "Troy",
      zipcode: "12180",
    },
    phone: "518-270-2990",
    fax: "518-270-2909",
    email: "RenscoBOE@rensco.com",
  },
  "Richmond County": {
    address: {
      streetAddress: "1 Edgewater Plaza, 4th Floor",
      city: "Staten Island",
      zipcode: "10305",
    },
    alias: "Staten Island",
    phone: "718-876-0079",
    fax: "718-876-0912",
    email: "voterreg@boe.nyc.ny.us",
    absenteeEmail: "AbsenteeJune2020@boe.nyc",
  },
  "Rockland County": {
    address: {
      streetAddress: "11 New Hempstead Road",
      city: "New City",
      zipcode: "10956",
    },
    phone: "845-638-5172",
    fax: "845-638-5196",
    email: "voterinfo@co.rockland.ny.us",
  },
  "Saint Lawrence County": {
    address: {
      streetAddress: "80 State Highway 310",
      city: "Canton",
      zipcode: "13617",
    },
    phone: "315-379-2202",
    fax: "315-386-2737",
    email: "slcballot@stlawco.org",
  },
  "Saratoga County": {
    address: {
      streetAddress: "50 West High Street",
      city: "Ballston Spa",
      zipcode: "12020",
    },
    phone: "518-885-2249",
    fax: "518-884-4751",
    email: "elections@saratogacountyny.gov",
    absenteeEmail: "absenteeballot@saratogacountyny.gov",
  },
  "Schenectady Couty": {
    address: {
      streetAddress: "2696 Hamburg Street",
      city: "Schenectady",
      zipcode: "12303",
    },
    phone: "518-377-2469",
    fax: "518-377-2716",
    email: "boe@schenectadycounty.com",
  },
  "Schoharie Count": {
    address: {
      streetAddress: "County Office Building - 284 Main Street",
      streetAddress2: "P.O. Box 99",
      city: "Schoharie",
      zipcode: "12157",
    },
    phone: "518-295-8388",
    fax: "518-295-8419",
    email: "boe@co.schoharie.ny.us",
  },
  "Schuyler County": {
    address: {
      streetAddress: "County Office Building",
      streetAddress2: "105 9th Street, Unit 13",
      city: "Watkins Glen",
      zipcode: "14891-9972",
    },
    phone: "607-535-8195",
    fax: "607-535-8364",
    email: "elections@co.schuyler.ny.us",
  },
  "Seneca County": {
    address: {
      streetAddress: "One DiPronio Drive",
      city: "Waterloo",
      zipcode: "13165",
    },
    phone: "315-539-1760",
    fax: "315-539-3710",
    email: "boe@co.seneca.ny.us",
  },
  "Steuben County": {
    address: {
      streetAddress: "3 East Pulteney Square",
      city: "Bath",
      zipcode: "14810",
    },
    phone: "607-664-2260",
    fax: "607-664-2376",
    email: "elections@SteubenCountyNY.gov",
  },
  "Suffolk County": {
    address: {
      streetAddress: "Yaphank Avenue",
      streetAddress2: "P.O. Box 700",
      city: "Yaphank",
      zipcode: "11980",
    },
    phone: "631-852-4500",
    fax: "631-852-4590",
    email: "BOEinfo@suffolkcountyny.gov",
  },
  "Sullivan County": {
    address: {
      streetAddress: "Government Center, 100 North Street",
      streetAddress2: "P.O. Box 5012",
      city: "Monticello",
      zipcode: "12701-5192",
    },
    phone: "845-807-0400",
    fax: "845-807-0410",
    email: "scboe@co.sullivan.ny.us",
  },
  "Tioga County": {
    address: {
      streetAddress: "1062 State Route 38",
      streetAddress2: "P.O. Box 306",
      city: "Owego",
      zipcode: "13827",
    },
    phone: "607-687-8261",
    fax: "607-687-6348",
    email: "votetioga@co.tioga.ny.us",
  },
  "Tompkins County": {
    address: {
      streetAddress: "Court House Annex",
      streetAddress2: "128 East Buffalo Street",
      city: "Ithaca",
      zipcode: "14850",
    },
    phone: "607-274-5522",
    fax: "607-274-5533",
    email: "elections@tompkins-co.org",
  },
  "Ulster County": {
    address: {
      streetAddress: "284 Wall Street",
      city: "Kingston",
      zipcode: "12401",
    },
    phone: "845-334-5470",
    fax: "845-334-5434",
    email: "elections@co.ulster.ny.us",
  },
  "Warren County": {
    address: {
      streetAddress: "County Municipal Center",
      streetAddress2: "1340 State Route 9",
      streetAddress3: "3rd Floor, Human Services",
      city: "Lake George",
      zipcode: "12845",
    },
    phone: "518-761-6456",
    fax: "518-761-6480",
    email: "boe@warrencountyny.gov",
  },
  "Washington Couny": {
    address: {
      streetAddress: "383 Broadway",
      city: "Fort Edward",
      zipcode: "12828",
    },
    phone: "518-746-2180",
    fax: "518-746-2179",
    email: "BoardofElections@Washingtoncountyny.gov",
  },
  "Wayne County": {
    address: {
      streetAddress: "7376 State Route 31",
      streetAddress2: "P.O. Box 636",
      city: "Lyons",
      zipcode: "14489",
    },
    phone: "315-946-7400",
    fax: "315-946-7409",
    email: "elections@co.wayne.ny.us",
  },
  "Westchester County": {
    address: {
      streetAddress: "25 Quarropas Street",
      city: "White Plains",
      zipcode: "10601",
    },
    phone: "914-995-5700",
    fax: "914-995-3190",
    fax2: "914-995-7753",
    email: "BOE-West@westchestergov.com",
  },
  "Wyoming County": {
    address: {
      streetAddress: "4 Perry Avenue",
      city: "Warsaw",
      zipcode: "14569",
    },
    phone: "585-786-8931",
    fax: "585-786-8843",
    email: "boewyoming@wyomingco.net",
  },
  "Yates County": {
    address: {
      streetAddress: "417 Liberty Street, Suite 1124",
      streetAddress2: "",
      city: "Penn Ya",
      zipcode: "14527",
    },
    phone: "315-536-5135",
    fax: "315-536-5523",
    email: "boardofelections@yatescounty.org",
  },
};

export default boardsOfElections;
