import React from "react";
import { FaEthereum } from "react-icons/fa6";

const PrizePool = () => {
  return (
    <>
      <div className="text-center my-4">
        <h4 className="text-capitalize">current prize pool</h4>
        <div className="d-flex justify-content-center align-items-center text-uppercase text-primary my-3">
          <span>
            <FaEthereum size={40} />
          </span>
          <h1>145.67 eth</h1>
        </div>
        <p>
          <span className="text-muted">Next draw in: </span>23:45:12
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div className="card">
          <div className="card-body p-4">
            <p className="text-capitalize">pick your lucky numbers</p>

            <div className="d-flex gap-4 my-4">
              <div>
                <p className="mb-2 text-capitalize text-muted fs-14">
                  first number
                </p>

                <div className="d-flex gap-1 row-gap-2 align-items-center flex-wrap mb-1 fs-14">
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    0
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    1
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    2
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    3
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    4
                  </span>
                </div>
                <div className="d-flex gap-1">
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    5
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    6
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    7
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    8
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    9
                  </span>
                </div>
              </div>
              <div>
                <p className="mb-2 text-capitalize text-muted fs-14">
                  second number
                </p>

                <div className="d-flex gap-1 row-gap-2 align-items-center flex-wrap mb-1 fs-14">
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    0
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    1
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    2
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    3
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    4
                  </span>
                </div>
                <div className="d-flex gap-1">
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    5
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    6
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    7
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    8
                  </span>
                  <span className="px-3 py-1 rounded inner-card flex-fill cursor-pointer">
                    9
                  </span>
                </div>
              </div>
            </div>

            <div className="inner-card d-flex justify-content-between align-items-center gap-3 p-3 rounded my-3">
              <div>
                <p className="mb-1 text-capitalize text-muted fs-14">
                  ticket price
                </p>
                <div className="d-flex align-items-center fs-14">
                  <p className="mb-0">
                    <FaEthereum size={16} />
                  </p>
                  <p className="mb-0">0.01ETH</p>
                </div>
              </div>
              <div>
                <p className="mb-1 text-capitalize text-muted fs-14">
                  selected numbers
                </p>
                <p className="mb-0 fs-14">--</p>
              </div>
            </div>

            <button className="text-capitalize w-100 py-3 my-3">
              buy ticket
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizePool;
