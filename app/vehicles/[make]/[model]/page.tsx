export const dynamicParams = false;

export const vehicles = [
  { make: "Nissan", model: "Altima" },
  { make: "Toyota", model: "Camry" },
  { make: "Honda", model: "Civic" },
  { make: "Jeep", model: "Grand Cherokee" },
  { make: "Ford", model: "F150" },
  { make: "Jeep", model: "Wrangler" },
];


export function generateStaticParams() {
  return vehicles.map(({ make, model }) => ({
    make,
    model,
  }));
}

export default function Home(
  {
    params,
  }: {
    params: {
      make: string;
      model: string;
    };
  }
) {
  return (
    <div>{params.make} - {params.model}</div>
  );
}
