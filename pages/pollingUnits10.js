import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Style from "../styles/wards.module.css";
import resultStyle from "../styles/resultStyle.module.css";
import apc from "../public/apc.png";

const pollenUnits1 = () => {
  const [dropResult, setDropResult] = useState(null);

  const openResults = (i) => {
    if (!dropResult) {
      setDropResult(i);
    } else if (dropResult === i) {
      setDropResult(null);
    } else setDropResult(i);
    console.log(dropResult);
  };
  const ward1 = {
    wardNo: 10,
    wardName: "OWODE ONIRIN/AJEGUNLE/ODO‐OGUN",
  };

  const pollingUnits = [
    {
      PU_No: "001",
      PU_Name: "ESINLOKUN ST., BETWEEN HOUSE NOS. 1 & 3",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "002",
      PU_Name: "IN FRONT OF SHONIBARE COMPOUND",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "003",
      PU_Name: "ZION ROAD, IN FRONT OF HOUSE NO. 1",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "004",
      PU_Name: "ZION ROAD, IN FRONT OF HOUSE NO. 21",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "005",
      PU_Name: "ZION ROAD, IN FRONT OF HOUSE NO. 10",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "006",
      PU_Name: "IRAWO ROAD, IN FRONT OF HOUSE NO. 10",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "007",
      PU_Name: "IRAWO ROAD, IN FRONT OF HOUSE NO. 20",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "008",
      PU_Name: "ANGLICAN PRIMARY SCH., ODO-OGUN",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "009",
      PU_Name: "ESOMOJUMI CLOSE, IN FRONT OF HOUSE NO. 7",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "010",
      PU_Name: "OLAKUNLE ST. IN FRONT OF HOUSE NOS. 9 & 11",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "011",
      PU_Name: "LAWAL ST. BETWEEN HOUSE NOS. 6 & 8",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "012",
      PU_Name: "RAJI BALOGUN ST. IN FRONT OF HOUSE NO. 1",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "013",
      PU_Name: "JUNCTION OF THOMAS LANIYAN ST./ASSOCIATION AVENUE",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "014",
      PU_Name: "JUNCTION OF THOMAS LANIYAN ST./SONUBI ST.",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "015",
      PU_Name: "JUNCTION OF THOMAS LANIYAN ST./ARIYO ST.",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "016",
      PU_Name: "OLORUNSOGO ST. IN FRONT OF HOUSE NO. 10",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "017",
      PU_Name: "BAALE CRESCENT, IN FRONT OF HOUSE NO. 3",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "018",
      PU_Name: "BAALE CRESCENT, IN FRONT OF HOUSE NO. 9",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "019",
      PU_Name: "BAALE CRESCENT, IN FRONT OF HOUSE NO. 20",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "020",
      PU_Name: "IKORODU ROAD, BETWEEN HOUSE NOS. 44 & 46",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "021",
      PU_Name: "RASCO ST., IN FRONT OF HOUSE NO. 1",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "022",
      PU_Name: "OPEN SPACE WITHIN IDERA VILLAGE",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "023",
      PU_Name: "OPEN SPACE WITHIN KIOKIO VILLAGE",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "024",
      PU_Name: "OTENUBI OGIDAN ST. BETWEEN HOUSE NOS. 1 & 3",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "025",
      PU_Name: "VICTORIA ANIBABA ST., IN FRONT OF HOUSE NO. 2",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "026",
      PU_Name: "OLALUSI ST., IN FRONT OF HOUSE NO. 10",
      Remark: "EXISTING PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "027",
      PU_Name: "4/6 ESHINLOKUN STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "028",
      PU_Name: "IN FRONT OF MOSQUE, SHONIBARE COMPOUND",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "029",
      PU_Name: "7, ZION STR, AJEGUNLE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "030",
      PU_Name: "005B, COLLEGE ROAD OFF ZION ROAD",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "031",
      PU_Name: "ENTRANCE OF RUFUS LANIYAN ESTATE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "032",
      PU_Name: "HOUSE 17, ONDO STR, IRAWO",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "033",
      PU_Name: "FADAYOMI JUNCTION, OWULADE IRAWO",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "034",
      PU_Name: "5/6 CHURCH STR, AJEGUNLE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "035",
      PU_Name: "10, ESOMOJUMI STR, AJEGUNLE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "036",
      PU_Name: "OLANIRAN JUNCTION, BILLYWAY OJOMO",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "037",
      PU_Name: "BASHORUN COMPUND OFF WHITE HOUSE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "038",
      PU_Name: "IN FRONT OF LAYO HOSPITAL, LAWAL STR JUNCTION, OFF ZION ROAD",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "039",
      PU_Name: "JUNCTION OF FATA AYINDE/ IBADAN STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "040",
      PU_Name: "SALVATION JUNCTION, BESIDE TRANSFORMER",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "041",
      PU_Name: "JUNCTION OF PRINCE MOYOSORE BAKO/ ADESANYA STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "042",
      PU_Name: "IN FRONT OF OLAKUNLE HOUSE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "043",
      PU_Name: "OGBEBO HOUSE OFF ADEKEYE STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "044",
      PU_Name: "JUNCTION OF THOMAS LANIYAN/IKORODU ROAD",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "045",
      PU_Name: "8, IFELODUN STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "046",
      PU_Name: "IKORODU ROAD, OPPOSITE UNCLE BEN BUS STOP",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "047",
      PU_Name: "ILE ANU COMPOUND",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "048",
      PU_Name: "IKORODU ROAD, OPPOSITE RASCO JUNCTION",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "049",
      PU_Name: "7, ADURAGBEMI STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "050",
      PU_Name: "FRONT OF PLOT 1, UNITY ESTATE WAY",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "051",
      PU_Name: "IKORODU ROAD, OPPOSITE AJEGUNLE BUS STOP BESIDE ILE EPO",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "052",
      PU_Name: "OTERUBI OGIDAN BY WEIGHBRIDGE BUS STOP",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "053",
      PU_Name: "25, OTERUBI OGIDAN STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "054",
      PU_Name: "JUNCTION OF OTERUBI OGIDAN/OLUFUWA CRESCENT",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "055",
      PU_Name: "HOUSE NO 1, DURU AVENUE, OWODE ELEDE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "056",
      PU_Name: "JUNCTION OF AIYENUWA STR/IKORODU ROAD",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "057",
      PU_Name: "JUNCTION OF SUNMOLA BAKO STR/ANIBABA STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "058",
      PU_Name: "JUNCTION OF OTERUBI OGIDAN/COMMUNITY CLOSE",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
    {
      PU_No: "059",
      PU_Name: "JUNCTION OF BOLA KAZEEM/IFELODUN STR",
      Remark: "NEW PU",
      Result: {
        Presidential: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        LagosEastSenatorial: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
        HouseOfRepresentative: {
          APC: 0,
          PDP: 0,
          LP: 0,
          NNPP: 0,
          ADC: 0,
        },
      },
    },
  ];

  return (
    <div className={Style.wards}>
      <div className={Style.wards_box}>
        <div className={Style.wards_box_head}>
          <Image
            className={Style.wards_box_head_img}
            src={apc}
            alt="apc-logo"
            width={50}
            height={50}
          />
          <h2>{ward1.wardName} Polling Units</h2>
        </div>
        <div className={Style.wards_box_wards}>
          {pollingUnits.map((pollingUnit, i) => (
            <p
              className={Style.wards_box_ward}
              onClick={() => openResults(i + 1)}
            >
              {pollingUnit.PU_No}
              {"."} {"  "} {pollingUnit.PU_Name}
              {dropResult === i + 1 ? (
                <div className={resultStyle.resultDisplay}>
                  <h3>{pollingUnit.PU_Name} RESULT SUMMARY</h3>

                  <div className={resultStyle.pres}>
                    <h4>PRESIDENTIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.Presidential.APC}, PDP:{" "}
                      {pollingUnit.Result.Presidential.PDP}, LP:
                      {pollingUnit.Result.Presidential.LP}, NNPP:{" "}
                      {pollingUnit.Result.Presidential.NNPP}, ADC:{" "}
                      {pollingUnit.Result.Presidential.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>LAGOS EAST SENETORIAL</h4>
                    <p>
                      APC: {pollingUnit.Result.LagosEastSenatorial.APC}, PDP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.PDP}, LP:
                      {pollingUnit.Result.LagosEastSenatorial.LP}, NNPP:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.NNPP}, ADC:{" "}
                      {pollingUnit.Result.LagosEastSenatorial.ADC},
                    </p>
                  </div>

                  <div className={resultStyle.pres}>
                    <h4>HOUSE OF REPRESENTATIVE</h4>
                    <p>
                      APC: {pollingUnit.Result.HouseOfRepresentative.APC}, PDP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.PDP}, LP:
                      {pollingUnit.Result.HouseOfRepresentative.LP}, NNPP:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.NNPP}, ADC:{" "}
                      {pollingUnit.Result.HouseOfRepresentative.ADC},
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default pollenUnits1;
