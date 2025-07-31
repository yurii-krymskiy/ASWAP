import CustomDropdown from "../../../components/ui/CustomDropdown";
import CustomTextArea from "../../../components/ui/CustomTextArea";
import CustomCheckboxLabel from "../../../components/ui/CustomCheckboxLabel";
import ToggleButtons from "./ToggleCheckButtons";
import BorderButton from "../../../components/ui/BorderButton";
import CustomButton from "../../../components/ui/CustomButton";
import TagInput from "./TagInput";
import { usePlaceOrder } from "../../../context/PlaceOrder/usePlaceOrder";
import useCreateOrder from "../../../hooks/useCreateOrder";

const ThirdStep = ({ onPrev }: { onPrev: () => void }) => {
  const { tags,
    setTags,
    regions,
    setRegions,
    counterParty,
    setCounterParty,
    holdings,
    setHoldings,
    refferals,
    setRefferals,
    autoReply,
    setAutoReply,
  } = usePlaceOrder(v => v);

  const { handleSubmit } = useCreateOrder();

  return (
    <div className="p-3 pt-4 md:p-4">
      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Terms Tags (Optional)</p>
        <TagInput tags={tags} setTags={setTags} />
      </div>

      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Refferals (Optional)</p>
        <CustomTextArea
          value={refferals}
          onChange={setRefferals}
          placeholder="Add referral code..."
        />
      </div>

      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Auto Reply (Optional)</p>
        <CustomTextArea
          value={autoReply}
          onChange={setAutoReply}
          placeholder="Auto reply message..."
        />
      </div>

      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Display to Users in</p>
        <CustomDropdown
          height="45px"
          selectedText={regions}
          options={["Ukraine", "USA", "Europe"]}
          setSelectedType={setRegions}
          className="w-full bg-[#1D1D1D] border-[#181818] text-[#7B7B7B]"
        />
      </div>

      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Counterparty Conditions</p>
        <div className="flex flex-row gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <CustomCheckboxLabel
              isChecked={counterParty}
              onChange={setCounterParty}
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
              isChecked={holdings}
              onChange={setHoldings}
              label="Holdings more than"
            />
            <div className="bg-[#1D1D1D] border-[#181818] border rounded-[8px] h-[38px] px-4 p1 text-[#7B7B7B] flex items-center justify-start w-[151px]">
              0.00
            </div>
            <p className="p2 text-[#7B7B7B]">BTC</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col mb-4 md:mb-8">
        <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
        <ToggleButtons options={["Online", "Offline", "Privat"]} />
      </div>
      <div className="flex flex-row items-center justify-between mb-6 md:mb-8">
        <p className="p2 text-[#7B7B7B]">Estimated Fee</p>
        <p className="p1 text-[#E5FFF2]">0.003 UAH</p>
      </div>
      <div className="flex flex-row gap-4">
        <BorderButton
          text="Previous"
          className="h-[40px] w-[50%] flex items-center justify-center text-[14px] md:text-[16px]"
          variant="gray"
          onClick={onPrev}
        />
        <CustomButton
          onClick={handleSubmit}
          text="Post"
          className="w-[50%] text-[14px] md:text-[16px]"
        />
      </div>
    </div>
  );
};

export default ThirdStep;
