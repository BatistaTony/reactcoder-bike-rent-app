export interface HowItWorksItemType {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const data: HowItWorksItemType[] = [
  {
    icon: <img src="./illustrations/illustration2.svg" alt="" />,
    title: "Escolhe um bicicleta perfeita",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
  {
    icon: <img src="./illustrations/illustration1.svg" alt="" />,
    title: "Faz o pagamento",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
  {
    icon: <img src="./illustrations/illustration3.svg" alt="" />,
    title: "Espere ser entrega no seu endereço",
    description:
      "We’re a small team of passionate cycling enthusiasts who believe bikes can unlock some of the biggest challenges facing Cities and a world of possibility for our members.",
  },
];
