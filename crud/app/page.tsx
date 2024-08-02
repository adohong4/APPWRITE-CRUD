import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="p-4 my-2 rounded-md border-b leading-8">
        <div className="font-bold">Natural Language Processing (NLP) </div>
        <div>
          Employs AI algorithm to understand and interpret human Language,
          enabling the app to comprehend user inputs, provide relevant reponses,
          and offer a more intuitive and conversational user interface.
        </div>

        <div className="flex gap-4 mt-4 justify-end">
          <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest" href={'/edit'}>
            Edit
          </Link>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm font-bold tracking-widest">
            Delete
          </button>
        </div>

      </div>

    </div>
  );
}
