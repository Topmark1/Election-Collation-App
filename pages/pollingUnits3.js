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
    wardNo: 3,
    wardName: "ANTHONY/AJAO ESTATE/MENDE/MARYLAND",
  };

  const pollingUnits = [
    {
      PU_No: "001",
      PU_Name: "JUNCTION OF SYLVIA CRESCENT/WILLIAMS CAREW ST.",
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
      PU_Name: "JUNCTION OF FARAMOBI AJIKE ST./LADIPO ADEYEMI",
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
      PU_Name: "OLORUNLOGBON ST. IN FRONT OF HOUSE NO. 7",
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
      PU_Name: "JUNCTION OF OLORUNLOGBON ST./AYANBOYE ST.",
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
      PU_Name: "OLORUNLOGBON ST. BETWEEN HOUSE NOS. 50 & 52",
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
      PU_Name: "OSENI ST. IN FRONT OF HOUSE NO. 12",
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
      PU_Name: "ODUNLAMI ST. IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "OYEDELE OGUNIYI ST. IN FRONT OF HOUSE NO. 46",
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
      PU_Name: "JUNCTION OF OYEDELE OGUNNIYI ST./OKUFOLAMI ST.",
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
      PU_Name: "OLORUNGBON ST. IN FRONT OF HOUSE NO. 37",
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
      PU_Name: "OYEDELE OGUNNIYI ST. IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "ANTHONY VILLAGE HIGH SCH. ADEBAYO MOKUOLU ST.",
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
      PU_Name: "JUNCTION OF IMARIA ST./KUNLE ADEBOWALE ST.",
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
      PU_Name: "SIJI AYANGBADE ST. IN FRONT OF HOUSE NO. 29",
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
      PU_Name: "ALADURA COMPREHENSIVE HIGH SCH.",
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
      PU_Name: "ADENIRAN AJAO CRESCENT, IN FRONT OF HOUSE NO. 6",
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
      PU_Name: "ADENIRAN AJAO CRESCENT, IN FRONT OF HOUSE NO. 25",
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
      PU_Name: "JUNCTION OF OLUNLOYO ST./AKINFE ST.",
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
      PU_Name: "JUNCTION OF AYODEJI OYINLOLA ST./ISOFIAN CRESCENT",
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
      PU_Name: "JUNCTION OF OPEIFA CRESCENT/FOLASHADE AJAYI ST. I",
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
      PU_Name: "OPEIFA CRESCENT IN FRONT OF HOUSE .9",
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
      PU_Name: "KEHINDE ODUSOTE ST. IN FRONT OF HOUSE NO. 12",
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
      PU_Name: "SUNMOLA ST. IN FRONT OF HOUSE NO. 15",
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
      PU_Name: "SUNMOLA ST. IN FRONT OF HOUSE NO. 50",
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
      PU_Name: "ADEJONWO ST. IN FRONT OF HOUSE NO. 18",
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
      PU_Name: "JUNCTION OF OKUNOLA AINA ST./IBIRONKE ST.",
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
      PU_Name: "JUNCTION OF ADESOYE ST./SALAMI ST.",
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
      PU_Name: "ADESOYE ST. IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "ABBI ST. IN FRONT OF HOUSE NO. 15",
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
      PU_Name: "JUNCTION OF RAJI APOYAN ST./TANIMOSE CLOSE",
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
      PU_Name: "RAJI APOYAN ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "SUNMOLA ST. IN FRONT OF HOUSE NO. 3",
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
      PU_Name: "AJOSE ST. IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "AJOSE ST. IN FRONT OF HOUSE NO. 24",
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
      PU_Name: "JUNCTION OF AJOSE ST./IGIDI ST.",
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
      PU_Name: "IMMACULATE HEART COMP. HIGH SCH. MARYLAND",
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
      PU_Name: "ARAROMI MENDE COMMUNITY CENTRE",
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
      PU_Name: "KAJOLA ST. IN FRONT OF HOUSE NO. 18",
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
      PU_Name: "OKUGBADE OKUNNEYE ST. IN FORNT OF HOUSE NO. 20",
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
      PU_Name: "ATIBA OSBORNE ST. IN FORNT OF HOUSE NO. 23",
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
      PU_Name: "JUNCTION OF AKINWUMI ST./BAMIDELE DARAMOLA ST.",
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
      PU_Name: "JUNCTION OF AROWOJOBE ST./SOBO SIFRE ST.",
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
      PU_Name: "SIJI AYANGBADE ST. IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "OKUGADE OKUNNEYE ST. IN FRONT OF HOUSE NO. 13",
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
      PU_Name: "THOMAS OLANIYAN ST, HOUSE NUMBER 8A",
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
      PU_Name: "JUNCTION OF JIDE ADENIYI/OYEDELE OGUNNIYI ST",
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
      PU_Name: "JUNCTION OF ADEBAYO MOKUOLU/ DEJI ODUNNUGA ST",
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
      PU_Name: "ADEDIRAN AJAO CRES, HOUSE NO46 AJAO ESTATE",
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
      PU_Name: "JUNCTION OF MOSES NNOLI DRIVE/IGIDI ST",
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
      PU_Name: "AKINWUMI ST, HOUSE NO 20, MENDE",
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
      PU_Name: "SOBO SIFFRE RD, HOUSE NO 11, MENDE",
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
