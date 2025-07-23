import React, { useState } from "react";
import ProgressLine from "../../../components/ui/ProgressLine";
import Tabs from "../../../components/ui/Tabs";
import { reviewTab } from "../static/tabLists";
import Review from "./Review";

const Reviews = () => {
  const [activeTab, setActiveTab] = useState("All");

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-row gap-20 p-4">
        <div className="flex flex-col gap-1">
          <p className="p2 text-[#7B7B7B]">8491 Reviews</p>
          <p className="p1 text-[#E5FFF2]">89.99%</p>
        </div>

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center gap-3">
            <img src="/icons/like-green.svg" alt="like-green" />
            <div className="w-[113px]">
              <ProgressLine progress={75} height={8} />
            </div>
            <p className="p3 text-[#7B7B7B]">444</p>
          </div>
          <div className="flex flex-row items-center gap-3">
            <img src="/icons/dislike-red.svg" alt="dislike-red" />
            <div className="w-[113px]">
              <ProgressLine progress={12} height={8} color="red" />
            </div>
            <p className="p3 text-[#7B7B7B]">22</p>
          </div>
        </div>
      </div>

      <Tabs tabs={reviewTab} activeKey={activeTab} onChange={setActiveTab} />
      <div className="flex h-[410px] overflow-auto flex-col p-4 pt-6">
        <Review />
        <Review />
        <Review />
        <Review />
        <Review />
      </div>
    </div>
  );
};

export default Reviews;
