import { InputAdornment, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useGetUserInfo } from "../../../hooks/useGetUserInfo";
import { Bike } from "../../../typescript/bikes";
import BikeHourField from "./bike-hour-field";
import {
  RentCheckoutButton,
  RentCheckoutCardInfoContainer,
  RentCheckoutContaienr,
  RentCheckoutNotes,
  RentCheckoutTitle,
  RentCheckoutUserInfoFormContainer,
  RentCheckoutCardInfoTitle,
} from "./styles";
import { RiVisaFill } from "react-icons/ri";
import { useRouter } from "next/router";
import { validatePaymentForm } from "../../../helpers/validation";
import { rentBike } from "../../../services/rent";
import { User } from "../../../typescript/user";
import GenericModal from "../GenericModal";

interface RentCheckoutProps {
  bike: Bike;
}

const RentCheckout = ({ bike }: RentCheckoutProps) => {
  const { user } = useGetUserInfo();
  const router = useRouter();
  const [checkoutData, setCheckoutData] = useState({
    address: "",
    deveryEstimation: "Janeiro, 6 de 2023",
    totalPrice: 0,
    deliveryCost: 10,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cvc: "",
    name: "",
    date: "",
  });

  useEffect(() => {
    console.log(user?.address);

    setCheckoutData({
      ...checkoutData,
      totalPrice: bike?.price * 1,
      address: user?.address as string,
    });
  }, []);

  const handleChange = (event: React.ChangeEvent) => {
    const target = event.target as HTMLInputElement;

    setCardInfo({
      ...cardInfo,
      [target.name]: target.value,
    });
  };

  const { deliveryCost, deveryEstimation, totalPrice, address } = checkoutData;

  const handleRentBike = async () => {
    const result = validatePaymentForm(cardInfo);

    if (result) {
    } else {
      if (user && bike) {
        setLoading(true);
        try {
          const response = await rentBike({
            user,
            bike,
            status: "paid",
            address,
            hours: totalPrice / bike.price,
            totalPrice: totalPrice + deliveryCost,
          });

          setShowModal(true);
          setLoading(false);
        } catch (error: any) {
          console.log();
          setLoading(false);
        }
      }
    }
  };

  const cancelRentBike = () => {
    router.push(`/bike/${bike.id}`);
  };

  return (
    <RentCheckoutContaienr>
      <RentCheckoutTitle>Checkout</RentCheckoutTitle>
      <RentCheckoutUserInfoFormContainer>
        <TextField
          placeholder="Endereço de entrega"
          value={address}
          onChange={(event) => {
            setCheckoutData({
              ...checkoutData,
              address: event.target.value,
            });
          }}
          className="ipt-checkout"
        />
        <div className="grid-row">
          <div className="title">Entrega</div>
          <div className="data">{deveryEstimation}</div>
        </div>

        <div className="grid-row">
          <div className="title">
            <img src={bike?.cover} alt="" />
            <BikeHourField
              price={bike?.price}
              handleUpdatePrice={(price) =>
                setCheckoutData({
                  ...checkoutData,
                  totalPrice: price,
                })
              }
            />
          </div>
          <div className="data">${totalPrice}</div>
        </div>

        <div className="grid-row">
          <div className="title">Custo da entrefa</div>
          <div className="data">${deliveryCost}</div>
        </div>

        <div className="grid-row">
          <div className="title">Total</div>
          <div className="data">${totalPrice + deliveryCost}</div>
        </div>
      </RentCheckoutUserInfoFormContainer>
      <RentCheckoutNotes>
        Get your Buzzbike-CTY for just £25.99 per month Your first month’s
        subscription is charged the day before delivery Your delivery date is 6
        January 2023 You can cancel anytime, just give 30 days notice £10
        collection fee will be added to your final bill along with a prorated
        payment to cover your 30 days’ notice
      </RentCheckoutNotes>
      <RentCheckoutCardInfoTitle>
        Informações do cartão
      </RentCheckoutCardInfoTitle>
      <RentCheckoutCardInfoContainer>
        <div>
          <TextField
            name="cardNumber"
            placeholder="1234  1234  1234  1234  1234"
            value={cardInfo.cardNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="cvc"
            placeholder="CVC"
            value={cardInfo.cvc}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="name"
            placeholder="Nome do cartão"
            value={cardInfo.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <TextField
            name="date"
            placeholder="MM/YY"
            value={cardInfo.date}
            onChange={handleChange}
          />
        </div>
      </RentCheckoutCardInfoContainer>
      <div className="btn-group">
        <RentCheckoutButton isOutlined onClick={cancelRentBike}>
          CANCELAR
        </RentCheckoutButton>
        <RentCheckoutButton onClick={handleRentBike}>
          {loading ? "carregando..." : "CHECKOUT"}
        </RentCheckoutButton>
      </div>
      {showModal && (
        <GenericModal
          buttonPrimaryText="Arrendar mais"
          buttonSecondaryText="Fechar"
          type="success"
          handleCancel={() => setShowModal(false)}
          handleConfirm={() => router.push("/bikes")}
          description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora fugiat repudiandae minima sunt sed dignissimos dolor. Officia ad explicabo quos quidem, dolor voluptates?`}
          title="Bicicleta arrendada com sucesso"
        />
      )}
    </RentCheckoutContaienr>
  );
};

export default RentCheckout;
