import React from "react";
import { FaWallet } from "react-icons/fa6";
import { FaBarsProgress } from "react-icons/fa6";

const Header = () => {
  const shortenAddress = (addr) => {
    if (!addr) return "";
    return `${addr.slice(0, 5)}...${addr.slice(-4)}`;
  };

  return (
    <div className="header d-flex justify-content-between py-3">
      <div className="d-flex align-items-center gap-2">
        <span className="text-primary">
          <FaBarsProgress />
        </span>
        <h5 className="mb-0">LuckyPool</h5>
      </div>

      <div className="d-flex gap-4">
        <div className="d-flex align-items-center gap-2 text-muted">
          <span>
            <FaWallet />
          </span>
          <p className="mb-0">
            {shortenAddress("0x913FBf05183eC37aB336C7c05B576E529f1068eD")}
          </p>
        </div>

        <button className="text-capitalize">connect wallet</button>
      </div>
    </div>
  );
};

export default Header;
