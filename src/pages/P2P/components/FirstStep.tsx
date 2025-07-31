import ButtonToggle from "../../../components/ui/ButtonToggle";
import CustomDropdown from "../../../components/ui/CustomDropdown";
import ToggleButtons from "./ToggleCheckButtons";
import CustomButton from "../../../components/ui/CustomButton";
import { useModal } from "../../../context/Modal/useModal";
import { usePlaceOrder } from "../../../context/PlaceOrder/usePlaceOrder";
import InputAmount from "./InputAmount";

const FirstStep = ({ onNext }: { onNext: () => void }) => {
  const {
    setAsset,
    setFiat,
    side,
    setSide,
    priceType,
    setPriceType,
    asset,
    fiat,
    price,
    setPrice
  } = usePlaceOrder(v => v);

  const openModal = useModal(v => v.openModal);

  const dropdownSetters = {
    asset: setAsset,
    fiat: setFiat,
  };

  const handleDropdownClick = (type: "asset" | "fiat") => {
    openModal(type === "asset" ? "selectCoin" : "selectFiat", {
      setValue: dropdownSetters[type],
    });
  };

  return (
    <div className="p-3 pt-4 md:p-4">
      <div className="h-[44px] mb-4 md:mb-6">
        <ButtonToggle
          options={["I want to buy", "I want to sell"]}
          defaultValue={side}
          onChange={(val) => setSide(val)}
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <div className="flex flex-col flex-1">
          <p className="p2 text-[#7B7B7B] mb-2">Asset</p>
          <CustomDropdown
            height="45px"
            selectedText={asset.code}
            options={[]}
            setSelectedType={() => { }}
            icon={asset.img}
            className="w-full bg-[#1D1D1D] border-[#181818]"
            onModalOpen={() => handleDropdownClick("asset")}
            dropdownEnabled={false}
          />
        </div>

        <div className="flex flex-col flex-1">
          <p className="p2 text-[#7B7B7B] mb-2">With Fiat</p>
          <CustomDropdown
            height="45px"
            selectedText={fiat.code}
            options={[]}
            setSelectedType={() => { }}
            icon={fiat.img}
            className="w-full bg-[#1D1D1D] border-[#181818]"
            onModalOpen={() => handleDropdownClick("fiat")}
            dropdownEnabled={false}
          />
        </div>
      </div>
      <div className="flex flex-col mb-4">
        <p className="p2 text-[#7B7B7B] mb-2">Price Type</p>
        <ToggleButtons
          options={["fixed", "floating"]}
          initialActive={priceType}
          onChange={setPriceType}
        />
      </div>
      {priceType === "fixed" ? (
        <div className="flex flex-col mb-4 md:mb-8">
          <p className="p2 text-[#7B7B7B] mb-2">Fixed Amount</p>
          <InputAmount amount={price} setAmount={setPrice} />
          <p className="p3 text-[#7B7B7B]">The fixed price should be between 33.44 - 55.33</p>
        </div>
      ) : (
        <div className="flex flex-col mb-4 md:mb-8">
          <p className="p2 text-[#7B7B7B] mb-2">Floating Amount</p>
          <InputAmount amount={price} setAmount={setPrice} />
          <p className="p3 text-[#7B7B7B]">The fixed price should be between 33.44 - 55.33</p>
        </div>
      )}
      <div className="flex flex-row justify-between items-center py-4 pb-6 md:py-8 border-t border-[#181818]">
        <div className="flex flex-col gap-1">
          <p className="p2 text-[#7B7B7B]">Your Price</p>
          <p className="text-[18px] md:text-[24px] text-[#E5FFF2]">${price}</p>
        </div>
        <div className="flex flex-col gap-1 items-end">
          <p className="p2 text-[#7B7B7B]">Highest Order Price</p>
          <p className="text-[18px] md:text-[24px] text-[#E5FFF2]">$33.55</p>
        </div>
      </div>
      <CustomButton
        text="Next"
        className="h-[40px] w-full text-[14px] md:text-[16px]"
        onClick={onNext}
      />

      <div className="flex flex-row mt-4 items-center justify-center gap-1">
        <img src="/icons/shield-tick-gray.svg" alt="shield-tick" />
        <p className="p2 text-[#7B7B7B]">24h Withdrawal Protection in effect</p>
      </div>
    </div>
  );
};

export default FirstStep;
