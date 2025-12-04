import { Guide } from "./ui/article";

export default function Guides() {
  return <div className="max-w-5xl mx-auto my-8">
    <h2 className="text-2xl font-neue-plak font-bold my-8">Guides téléchargeables</h2>
    <div className="grid grid-cols-1 
    sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
        <Guide></Guide>
    </div>
  </div>;
}