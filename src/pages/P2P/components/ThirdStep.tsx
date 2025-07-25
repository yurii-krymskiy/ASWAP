import { useState } from "react";
import Tabs from "../../../components/ui/Tabs";
import { p2pTabs } from "../static/tabs";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import CustomTextArea from "../../../components/ui/CustomTextArea";
import CustomCheckboxLabel from "../../../components/ui/CustomCheckboxLabel";
import ToggleButtons from "./ToggleCheckButtons";
import BorderButton from "../../../components/ui/BorderButton";
import CustomButton from "../../../components/ui/CustomButton";

const ThirdStep = () => {
  const [activeTab, setActiveTab] = useState("P2P");
  const [asstetType, setAsstetType] = useState("Add Tags");
  const [regions, setRegions] = useState("");
  const [active, setActive] = useState(false);

  return (
    <div className="flex flex-col bg-[#0F0F0F] border border-[#181818] rounded-[12px] w-[600px]">
      <Tabs
        tabs={p2pTabs}
        activeKey={activeTab}
        onChange={setActiveTab}
        className="pt-4"
      />
      <div className="p-4">
        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Terms Tags (Optional)</p>
          <CustomDropdown
            height="45px"
            selectedText={asstetType}
            options={["0"]}
            setSelectedType={setAsstetType}
            className="w-full bg-[#1D1D1D] border-[#181818] text-[#7B7B7B]"
          />
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Refferals (Optional)</p>
          <CustomTextArea />
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Auto Reply (Optional)</p>
          <CustomTextArea />
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Display to Users in</p>
          <CustomDropdown
            height="45px"
            selectedText={regions}
            options={["0"]}
            setSelectedType={setRegions}
            className="w-full bg-[#1D1D1D] border-[#181818] text-[#7B7B7B]"
          />
        </div>

        <div className="flex flex-col mb-4">
          <p className="p2 text-[#7B7B7B] mb-2">Counterparty Conditions</p>
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <CustomCheckboxLabel
                isChecked={active}
                onChange={setActive}
                label="Registered"
              />
              <div className="bg-[#1D1D1D] border-[#181818] border rounded-[8px] h-[38px] px-4 p1 text-[#7B7B7B] flex items-center justify-start w-[80px]">
                0
              </div>
              <p className="p2 text-[#7B7B7B]">day(s) ago</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex flex-row gap-4 items-center">
            <div className="flex flex-row gap-2 items-center">
              <CustomCheckboxLabel
                isChecked={active}
                onChange={setActive}
                label="Holdings more than"
              />
              <div className="bg-[#1D1D1D] border-[#181818] border rounded-[8px] h-[38px] px-4 p1 text-[#7B7B7B] flex items-center justify-start w-[151px]">
                0.00
              </div>
              <p className="p2 text-[#7B7B7B]">BTC</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-8">
          <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
          <ToggleButtons options={["Online", "Offline", "Privat"]} />
        </div>
        <div className="flex flex-row items-center justify-between mb-8">
          <p className="p2 text-[#7B7B7B]">Estimated Fee</p>
          <p className="p1 text-[#E5FFF2]">0.003 UAH</p>
        </div>
        <div className="flex flex-row gap-4">
          <BorderButton
            text="Previous"
            className="h-[40px] w-[50%] flex items-center justify-center"
            variant="gray"
          />
          <CustomButton
            text="Post"
            className="w-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdStep;
