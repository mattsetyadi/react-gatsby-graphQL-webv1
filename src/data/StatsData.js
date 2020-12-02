import React from "react"
import { GiEarthAmerica } from "react-icons/gi"
import { FaMoneyCheck } from "react-icons/fa"
import { MdAirplanemodeActive, MdTimer } from "react-icons/md"

export const StatsData = [
  {
    icon: (
      <GiEarthAmerica
        css={`
          color: #1787ff;
        `}
      />
    ),
    title: "Over 100 Destinations",
    desc: "Traver to over 100 unique places",
  },
  {
    icon: (
      <MdAirplanemodeActive
        css={`
          color: #f59300;
        `}
      />
    ),
    title: "1 Million Trips Made",
    desc: "Over 1 million trips completed last year",
  },
  {
    icon: (
      <MdTimer
        css={`
          color: #2b2b01;
        `}
      />
    ),
    title: "Fastest Support",
    desc: "Access our support team 24/7",
  },
  {
    icon: (
      <FaMoneyCheck
        css={`
          color: #00eb66;
        `}
      />
    ),
    title: "Best Deals",
    desc: "We offer the best prices",
  },
]
