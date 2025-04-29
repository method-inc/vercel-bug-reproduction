export const dynamicParams = false;

const vehicles = [
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

export default async function Home(
  {
    params,
  }: {
    params: Promise<{
      make: string;
      model: string;
    }>;
  }
) {
  const {make, model} = await params;

  return (
    <div>{make} - {model}</div>
  );
}
