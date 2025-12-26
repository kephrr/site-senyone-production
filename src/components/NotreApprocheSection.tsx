import ProcessusSection from "./ProcessusSection";

export const NotreApprocheSection = () => {
    return (
        <section id="approche" className="py-16 max-w-5xl px-4 sm:px-6 lg:px-8 mx-auto">
            <div className="mb-4">
                <h2 className="text-xl md:text-3xl font-neue-plak font-bold text-gray-900 mb-2">Notre Approche</h2>
                <p className="md:text-lg">Méthode RAPID - Des étapes claires vers l’excellence</p>
            </div>
            <ProcessusSection/>
        </section>
    );
};