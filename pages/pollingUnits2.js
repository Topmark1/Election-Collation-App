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
    wardNo: 2,
    wardName: "IFKO/SOLUYI",
  };

  const pollingUnits = [
    {
      PU_No: "001",
      PU_Name: "JUNCTION OF DIYA ST./IDOWU AJAYI ST.",
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
      PU_Name: "JUNCTION OF DIYA ST./ODUWAIYE ST.",
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
      PU_Name: "ORA EKPEN ST. IN FRONT OF HOUSE NO. 8",
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
      PU_Name: "JUNCTION OF OYEDELE HABEEB ST./TWINS OBASA ST.",
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
      PU_Name: "CHURCH ST., IN FORNT OF HOUSE NO. 4",
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
      PU_Name: "AYODELE OKEOWO ST., IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "HABEEB O. OYEWOLE ST. IN FRONT OF HOUSE NO. 13",
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
      PU_Name: "JUNCTION OF ADEOLA ST./OSHINOWO ST. (SQUARE IN MEDINA ESTATE)",
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
      PU_Name: "DAPO ADEOYE ST. IN FRONT OF HOUSE NO. 4A",
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
      PU_Name: "ADEREMI AKEJU ST. IN FRONT OF HOUSE NO. 1A",
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
      PU_Name: "OLABISI OSHO-AYINDE ST IN FRONT OF HOUSE NO. 5",
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
      PU_Name: "ARAROMI PRY. SCH. AKERELE ST.",
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
      PU_Name: "JOHNSON OGUNTUYO CRESCENT, IN FRONT OF HOUSE NO. 13",
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
      PU_Name: "JOHNSON OGUNTUYO CRESCENT, IN FRONT OF HOUSE NO. 19",
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
      PU_Name: "POPOOLA ST. IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "SINATU LANE, IN FRONT OF HOUSE NO. 5",
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
      PU_Name: "ESTAPORT AVENUE, IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "OKUN ST. IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "AJAYI AINA ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "AJAYI AINA ST. IN FRONT OF HOUSE NO. 38",
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
      PU_Name: "JUNCTION OF BALOGUN AGBAJE CLOSE/JIMOH BAJULAIYE STREET",
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
      PU_Name: "LATEEF ONIGEMO STREET, IN FRONT OF HOUSE NO .3",
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
      PU_Name: "IFAKO COMPREHENSIVE JUNIOR HIGH SCHOOL I",
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
      PU_Name: "IFAKO COMPREHENSIVE SENIOR HIGH SCHOOL II",
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
      PU_Name: "WALTER SIFRE ST. IN FRONT OF HOUSE NO. 3",
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
      PU_Name: "WALTER SIFRE ST. IN FRONT OF HOUSE NO. 30",
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
      PU_Name: "YETUNDE BROWN ST. IN FRONT OF HOUSE NO. 2A (AFTER NEPA)",
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
      PU_Name: "YETUNDE BROWN ST. IN FRONT OF HOUSE NO. 12",
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
      PU_Name: "ABIODUN ODESEYE ST. IN FRONT OF HOUSE NO. 10 (OLD NO.12)",
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
      PU_Name: "ABIODUN ODESEYE ST. IN FRONT OF HOUSE NO. 9",
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
      PU_Name: "JUNCTION OF ASAFA TIJANI ST./LATEEF DOSUNMU ST.",
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
      PU_Name: "JUNCTION OF IBRAHIM ONASOKUN ST/BAALE CLOSE",
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
      PU_Name: "JUNCTION OF IBRAHIM ONASOKUN ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "AKINWUNMI ST. IN FRONT OF HOUSE NO. 18",
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
      PU_Name: "SALAWU ONIKOYI ST IN FRONT OF HOUSE NO. 4",
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
      PU_Name: "SALAWU ONIKOYI ST IN FRONT OF HOUSE NO. 13",
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
      PU_Name: "SALAWU ONIKOYI ST IN FRONT OF HOUSE NO. 32",
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
      PU_Name: "SALAWU ONIKOYI STREET IN FRONT OF HOUSE NO 36",
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
      PU_Name: "OLAWALE DAWODU ST. IN FRONT OF HOUSE NO. 25",
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
      PU_Name: "JUNCTION OF OLUDELE FAKUNLE ST./OLADIPO ST.",
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
      PU_Name: "OLUWOLE ST/JESUS STREET, IN FRONT OF HOUSE NO. 6",
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
      PU_Name: "ADEDOKUN ST/JESUS STREET, IN FRONT OF HOUSE NO. 7",
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
      PU_Name: "KINIUN IFA ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "JUNCTION OF OBAZOR ST./KINIUN IFA ST.",
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
      PU_Name: "WILLIAMS ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "WILLIAMS ST. IN FRONT OF HOUSE NO. 16",
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
      PU_Name: "WILLIAMS ST. IN FRONT OF HOUSE NO. 20",
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
      PU_Name: "IFEATELUDO ST. IN FRONT OF HOUSE NO. 20",
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
      PU_Name: "JUNCTION OF ESURO CLOSE/BOLAJIDE ST.",
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
      PU_Name: "JUNCTION OF OKEOWO ST./TITILAYO SHOETAN ST.",
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
      PU_Name: "OKEOWO ST. IN FRONT OF HOUSE NO. 15",
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
      PU_Name: "OLALEYE ST. IN FRONT OF HOUSE NO. 3",
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
      PU_Name: "JUNCTION OF OLALEYE ST./OKANLAWON STREET",
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
      PU_Name: "OLALEYE ST. IN FRONT OF HOUSE NO. 10",
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
      PU_Name: "ADELEYE ST. IN FRONT OF HOUSE NO. 8",
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
      PU_Name: "ADEITE OGUNSANYA ST. IN FRONT OF HOUSE NO. 2",
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
      PU_Name: "ADEITE OGUNSANYA ST. IN FRONT OF HOUSE NO. 20",
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
      PU_Name: "JUNCTION OF ADEITE OGUNSANYA ST/ADELEYE ST.",
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
      PU_No: "059",
      PU_Name: "JUNCTION OF ORIOLA ST/MINI MARKET",
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
      PU_No: "060",
      PU_Name: "JUNCTION OF RAMOT OLUWAKEMI ST./SAINAB ST.",
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
      PU_No: "061",
      PU_Name: "JUNCTION OF ALHAJI OLADEINDE ST./ALBERT ADEKOYA CLOSE",
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
      PU_No: "062",
      PU_Name: "IDOWU AJAYI ST. IN FRONT OF HOUSE NO. 10",
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
      PU_No: "063",
      PU_Name: "IFELODUN/ORA EPKEN ST. IN FRONT OF HOUSE NO. 1",
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
      PU_No: "064",
      PU_Name: "INSIDE ATUNRASE ESTATE PHASE II",
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
      PU_No: "065",
      PU_Name: "JUNCTION OF ROSENJE ST./ AKINOLA ADENIYI ST.",
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
      PU_Name:
        "JUNCTION OF ERNEST ORACHIRI CLOSE / ADEOLA RAJI AVENUE, ARAROMI LAGOS, NIGERIA",
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
      PU_Name: "CHURCH ST, HOUSE NO 12 GBAGADA, LAGOS, NIGERIA",
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
      PU_Name: "OSHINOWO STR, HOUSE NO 7IFAKO GBAGADA, LAGOS, NIGERIA",
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
      PU_Name: "WILLIAMS ST, HOUSE NO 9 IFAKO GBAGADA LAGOS",
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
      PU_Name: "SOLARU ST, HOUSE NO 9 IFAKO 100242, LAGOS, NIGERIA",
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
      PU_Name: "DEJI OLAMIJU ST, HOUSE NO 1 IFAKO 100242, LAGOS, NIGERIA",
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
      PU_Name: "AJAYI AINA ST HOUSE NO 15 IFAKO LAGOS, NIGERIA",
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
      PU_Name:
        "JUNCTION OF OMOYELE PRATT/YETUNDE BROWN ST, IFAKO 100242, LAGOS, NIGERIA",
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
      PU_Name: "ILAWE ST, HOUSE NO 5 IFAKO GBAGADA LAGOS, NIGERIA",
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
      PU_Name: "WALTER SIEFFRE ST HOUSE NO 20 IFAKO GBAGADA LAGOS, NIGERIA",
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
      PU_Name: "ADEGBENRO ST, HOUSE NO 11 IFAKO 100242, LAGOS, NIGERIA",
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
      PU_Name: "JUNCTION OF DELE AKINGBOYE ST /YETUNDE BROWN ST, IFAKO LAGOS",
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
      PU_Name: "TIJANI ASHSAFA ST, HOUSE NO 8 IFAKO LAGOS",
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
      PU_Name: "SAKIRU ST,HOUSE NO 3/5 OFF MOSHALASHI STREET GBAGADA LAGOS",
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
