import {
  BikeHourFieldContainer,
  BikeHourFieldButton,
  BikeHourFieldText,
} from "./styles";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";
import { useEffect, useState } from "react";

interface BikeHourFieldProps {
  price: number;
  handleUpdatePrice: (data: number) => void;
}

export const BikeHourField = ({
  handleUpdatePrice,
  price,
}: BikeHourFieldProps) => {
  const [hour, setHour] = useState(1);

  const increaseHour = () => {
    setHour(hour + 1);
  };

  const decreaseHour = () => {
    const result = hour - 1;

    if (result >= 1) {
      setHour(result);
    }
  };

  useEffect(() => {
    handleUpdatePrice(hour * price);
  }, [hour]);

  return (
    <BikeHourFieldContainer>
      <BikeHourFieldButton onClick={decreaseHour}>
        <FiMinusCircle />
      </BikeHourFieldButton>
      <BikeHourFieldText>{hour}/horas</BikeHourFieldText>
      <BikeHourFieldButton onClick={increaseHour}>
        <FiPlusCircle />
      </BikeHourFieldButton>
    </BikeHourFieldContainer>
  );
};

export default BikeHourField;
