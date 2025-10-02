import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import rpa from "@/assets/images/rpa2.jpg";

type ArticleCardProps = {
  title: string;
  description: string;
  image: string; // chemin de l'image depuis @/assets/images
  content: React.ReactNode; // contenu complet de l'article (peut être du texte ou JSX)
};

export default function ArticleCard({
  title,
  description,
  image,
  content,
}: ArticleCardProps) {
  return (
    <div className="w-64 rounded-lg overflow-hidden shadow-md border bg-white">
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu card */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-xs text-muted-foreground">{description}</p>

        {/* Bouton du Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mt-2 w- bg-[#00929E] text-white">Lire l'article en entier</Button>
          </DialogTrigger>

          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>

            {/* Contenu article */}
            <div className="mt-4 space-y-4 text-sm text-gray-700 max-h-[60vh] overflow-y-auto pr-2">
              {content}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export const Guide =() =>{
  return(
    <div className="w-64 rounded-lg overflow-hidden shadow-md border bg-white">
      {/* Image */}
      <div className="w-full h-40">
        <img
          src={rpa}
          alt="image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenu card */}
      <div className="p-4 flex flex-col gap-2">
        <h3 className="font-semibold text-sm">Guide téléchargeable</h3>
        <p className="text-xs text-muted-foreground">Document PDF</p>
        <Button className="mt-2 w- bg-[#00929E] text-white">Télécharger</Button>
      </div>
    </div>
)}
