import { Guide } from "./ui/article";

export default function Guides() {
  return <div className="max-w-4xl">
    <h2 className="text-2xl font-neue-plak font-bold">Guides téléchargeables</h2>
    <div className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6">
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
    </div>
  </div>;
}