import {EtapeProcessus} from "./ProcessusSection";

const CarteEtape: React.FC<{ etape: EtapeProcessus; estDerniere: boolean }> = ({ etape, estDerniere }) => (
  <div className="relative">
    <div className="bg-white rounded-2xl p-8  border border-gray-100">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center">
            {etape.icone}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4 font-neue-plak">{etape.titre}</h3>
          <p className="text-gray-600 leading-relaxed font-neue-plak-thin">{etape.description}</p>
        </div>
      </div>
    </div>
    
    {!estDerniere && (
      <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-500">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    )}
  </div>
);