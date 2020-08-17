// addresses should be prefaced with `${countyName} Board of Elections`
interface Address {
  streetAddress: String;
  streetAddress2?: String;
  city: String;
  zipcode: String;
}

interface County {
  address: Address;
  phone: String;
  fax: String;
  email: String;
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
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Cayuga County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Chautauqua Couny": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Chemung County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Chenango County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Clinton County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Columbia County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Cortland County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Delaware County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Dutchess County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Erie County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Essex County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Franklin County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Fulton County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Genesee County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Greene County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Hamilton County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Herkimer County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Jefferson Count": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Kings County (Booklyn)": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Lewis County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Livingston Couny": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Madison County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Monroe County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Montgomery Couny": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Nassau County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "New York County (Manhattan)": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Niagara County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Oneida County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Onondaga County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Ontario County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Orange County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Orleans County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Oswego County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Otsego County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Putnam County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Queens County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Rensselaer Couny": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Richmond County (Staten Island)": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Rockland County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Saint Lawrence County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Saratoga County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Schenectady Couty": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Schoharie Count": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Schuyler County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Seneca County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Steuben County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Suffolk County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Sullivan County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Tioga County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Tompkins County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Ulster County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Warren County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Washington Couny": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Wayne County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Westchester Couty": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Wyoming County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
  "Yates County": {
    address: {
      streetAddress: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    fax: "",
    email: "",
    absenteeEmail: "",
  },
};

export default boardsOfElections;
