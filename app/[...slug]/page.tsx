import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return [{ slug: ["foo"]}, { slug: ["bar"]}]
};

export default function CatchAll({params}: {params: {slug: string[]}}) {
    if (params.slug.length !== 1 || !["foo", "bar"].includes(params.slug[0])) {
        return notFound();
    }

    return (
      <div>
        A catch all slug for {params.slug?.join(", ")}
      </div>
    );
  }