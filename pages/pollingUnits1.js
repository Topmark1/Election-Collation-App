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
    wardNo: 1,
    wardName: "OWORONSHOKI WARD",
  };

  const pollingUnits = [
    {
      PU_No: "001",
      PU_Name: "JUNCTION OF OLUSOGA ST./ADESHEKE STREET",
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
      PU_Name: "ADEOKUN ST., IN FRONT OF HOUSE NO, 15",
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
      PU_Name: "IDERA ST., IN FRONT OF HOUSE NO. 17",
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
      PU_Name: "JUNCTION OF ADAMS ST./PELUOLA ST.",
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
      PU_Name: "OGUNNOIKI ST., IN FRONT OF HOUSE NO. 18",
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
      PU_Name: "ADEBARE ST., IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "ADEBARE ST., IN FRONT OF HOUSE NO. 16",
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
      PU_Name: "OWORONSHOKI ROAD, IN FRONT OF HOUSE NO. 3",
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
      PU_Name: "OWORONSHOKI ROAD, IN FRONT OF HOUSE NO. 86",
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
      PU_Name: "OWORONSHOKI ROAD, IN FRONT OF HOUSE NO. 40",
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
      PU_Name: "JUNCTION OF AKERELE ST./OWORO ROAD",
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
      PU_Name: "OLABODE ALUKO ST., IN FRONT OF HOUSE NO. 1",
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
      PU_Name: "ONABANJO ST., IN FRONT OF HOUSE NO. 13",
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
      PU_Name: "ODUGBEMI ST., IN FRONT OF HOUSE NO. 18",
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
      PU_Name: "ALH. AYOOLA ST., IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "MIYAKI ST. IN FRONT OF HOUSE NO. 3",
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
      PU_Name: "ATANDA ALONGE ST. IN FORNT OF HOUSE NO. 31",
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
      PU_Name: "MIYAKI ST. IN FRONT OF HOUSE NO. 36",
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
      PU_Name: "OSOSA ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "OSOSA ST. IN FRONT OF HOUSE NO. 26",
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
      PU_Name: "JUNCTION OF ONDO ST./IPETU IJESHA ST.",
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
      PU_Name: "OWORONSHOKI PLAYING GROUND I",
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
      PU_Name: "OWOROSHOKI PLAYING GROUND II",
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
      PU_Name: "AWOLOWO ROAD, IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "AWOLOWO ROAD, IN FRONT OF HOUSE NO. 6",
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
      PU_Name: "JUNCTION OF ALABI OWOYEMI ST/MIYAKI ST.",
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
      PU_Name: "M,USLIM MISSION PRY. SCH. AWANATU LANE",
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
      PU_No: "028",
      PU_Name: "SURULERE ST. IN FRONT OF HOUSE NO. 2A",
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
      PU_No: "029",
      PU_Name: "MUSLIM COLLEGE, AKINPELU ST.",
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
      PU_No: "030",
      PU_Name: "IBADAN ST. IN FORNT OF HOUSE NO. 14",
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
      PU_No: "031",
      PU_Name: "MABAWONKU ST. IN FRONT OF HOUSE NO. 9",
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
      PU_No: "032",
      PU_Name: "SANYAOLU ST. IN FRONT OF HOUSE NO. 2",
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
      PU_No: "033",
      PU_Name: "SANYAOLU ST. IN FRONT OF HOUSE NO. 9",
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
      PU_No: "034",
      PU_Name: "OLORUNFUNMI ST. IN FRONT OF HOUSE NO. 2",
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
      PU_No: "035",
      PU_Name: "JUNCTION OF OLUWASEUN ST./OLORUNFUNMI ST.",
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
      PU_No: "036",
      PU_Name: "OLORUNFUNMI ST. IN FRONT OF HOUSE NO. 38",
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
      PU_No: "037",
      PU_Name: "JUNCTION OF SALAMI ST./UGBALE ST.",
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
      PU_No: "038",
      PU_Name: "JUNCTION OF OLAYIWOLA OWOIYA ST./BABAYEMI ST.",
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
      PU_No: "039",
      PU_Name: "OLAYIWOLA ST. IN FRONT OF HOUSE NO. 20",
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
      PU_No: "040",
      PU_Name: "ADEBANWO ST. IN FRONT OF HOUSE NO. 4",
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
      PU_No: "041",
      PU_Name: "ADEBANWO ST. IN FRONT OF HOUSE NO. 32",
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
      PU_No: "042",
      PU_Name: "AJAYI KUTI ST. IN FRONT OF HOUSE NO. 2",
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
      PU_No: "043",
      PU_Name: "AJAYI KUTI ST. IN FRONT OF HOUSE NO. 16",
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
      PU_No: "044",
      PU_Name: "IREKU ST. IN FO FRONT OF HOUSE NO. 18",
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
      PU_No: "045",
      PU_Name: "AGBERIN ST. IN FRONT OF HOUSE NO. 4",
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
      PU_No: "046",
      PU_Name: "ALABA ST. IN FRONT OF HOUSE NO. 2",
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
      PU_No: "047",
      PU_Name: "AKEWUSOLA ST. IN FRONT OF HOUSE NO. 18",
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
      PU_No: "048",
      PU_Name: "ABIOLA ST. IN FRONT OF HOUSE NO. 16",
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
      PU_No: "049",
      PU_Name: "IDOWU ADEBADE ST. IN FRONT OF HOUSE NO. 14",
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
      PU_No: "050",
      PU_Name: "JUNCTION OF OPELOYERO ST./OGUNYOMI ST.",
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
      PU_No: "051",
      PU_Name: "JUNCTION OF ODUDUWA ST./ADENIJI ST. I",
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
      PU_No: "052",
      PU_Name: "ODUDUWA ST IN FRONT OF HOUSE NO 23",
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
      PU_No: "053",
      PU_Name: "JUNCTION OF UNITY WAY/OGUNLANA ST.",
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
      PU_No: "054",
      PU_Name: "JUNCTION OF TOLUWALASE ST./OJILERU ST.",
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
      PU_No: "055",
      PU_Name: "JUNCTION OF SALAMI ST./IKUOMOLA ST.",
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
      PU_No: "056",
      PU_Name: "OWORONSHOKI ROAD, IN FRONT OF HOUSE NO. 40",
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
      PU_No: "057",
      PU_Name: "ADENIJI STREET, IN FRONT OF HOUSE NO. 10",
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
      PU_No: "058",
      PU_Name: "IDERA ST, HOUSE 1, OWOROSOKI",
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
      PU_Name: "OJILERU ST, HOUSE 30, OWOROSOKI",
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
      PU_No: "060",
      PU_Name: "OJILERU STREET, HOUSE 21, OWOROSOKI",
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
      PU_No: "061",
      PU_Name: "AKERELE STREET, HOUSE 25, OWOROSOKI",
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
      PU_No: "062",
      PU_Name: "OLABODE ALUKO STR, HOUSE 38, OWOROSOKI",
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
      PU_No: "063",
      PU_Name: "ONABANJO ST, HOUSE 10, OWOROSOKI",
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
      PU_No: "064",
      PU_Name: "ABIKE CL, HOUSE 2 OWOROSOKI",
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
      PU_No: "065",
      PU_Name: "ATANDA ALONGE ST, HOUSE 19, OWOROSOKI",
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
      PU_No: "066",
      PU_Name: "MAYAKI/OLAOSEBIKAN CLOSE OWOROSOKI",
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
      PU_No: "067",
      PU_Name: "MIYAKI STREET, HOUSE 41, OWOROSOKI",
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
      PU_No: "068",
      PU_Name: "AKERELE/ARALAMO STR JUNCTION OWORONSHOKI",
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
      PU_No: "069",
      PU_Name: "AGBOBADE OGUNIYI STR HOUSE 79, OWOROSOKI",
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
      PU_No: "070",
      PU_Name: "JUNCTION OF SALAU ORIOLA STR., OWOROSOKI",
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
      PU_No: "071",
      PU_Name: "SURULERE ST, HOUSE 11, OWOROSOKI",
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
      PU_No: "072",
      PU_Name: "SAND BEACH CRESCENT, HOUSE 3, OWOROSOKI",
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
      PU_No: "073",
      PU_Name: "IBADAN ST, HOUSE 7, OWOROSOKI",
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
      PU_No: "074",
      PU_Name: "MABAWONKU ST, HOUSE 22, OWOROSOKI",
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
      PU_No: "075",
      PU_Name: "AKINLABAKE STR, HOUSE 38 AKERELE ESTATE OWOROSOKI.",
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
      PU_No: "076",
      PU_Name: "OLUWASEUN STR. HOUSE 15, OWORONSHOKI",
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
      PU_No: "077",
      PU_Name: "OLORUNFUNMI STR, HOUSE 10, OWOROSOKI.",
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
      PU_No: "078",
      PU_Name: "OLUFEYISANMI/MABAWONKU STR JUNCTION OWORO",
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
      PU_No: "079",
      PU_Name: "OLUWASEUN STR, HOUSE 26 OWORONSHOKI",
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
      PU_No: "080",
      PU_Name: "OWORO ROAD, HOUSE 4, OWOROSOKI.",
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
      PU_No: "081",
      PU_Name: "ADEBANWO STR, HOUSE 9, OWOROSOKI",
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
      PU_No: "082",
      PU_Name: "UNITY STR HOUSE 6/AJANI KUTI STR OWORO JUNCTION",
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
      PU_No: "083",
      PU_Name: "20 AJANI KUTI STR OWOROSOKI",
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
      PU_No: "084",
      PU_Name: "IREKU ST, HOUSE 6, OWOROSOKI",
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
      PU_No: "085",
      PU_Name: "IFELODUN STR/ODUDUWA STR, JUNCTION ORORONSHOKI",
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
      PU_No: "086",
      PU_Name: "OGUNLANA ST, HOUSE 4, OWOROSOKI",
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
      PU_No: "087",
      PU_Name: "MOFOJOYE/FAROJOYE STR. JUNCTION, OWOROSOKI",
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
      PU_No: "088",
      PU_Name: "OWORO RD,/ADEOKUN STR. OWOROSOKI",
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
      PU_No: "089",
      PU_Name: "ADENIJI ST, HOUSE 32, OWOROSOKI",
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
    <div className={Style.ward1}>
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

        <p>WARD SUMMARY</p>
      </div>
    </div>
  );
};

export default pollenUnits1;
