import GeneratorForm from "./GeneratorForm";
import { useStoredGuidesContext } from '../StoredGuidesContext/useStoredGuidesContext';

function Home() {
    const { storedGuides, removeGuide, setCurrentGuide } = useStoredGuidesContext()
    console.log(storedGuides);

    return (
        <div className="min-h-screen relative bg-slate-600 flex flex-col items-center px-6 py-8 gap-6 ">
            <div className=" text-3xl md:text-6xl text-white font-extralight ">
                Side Guide Generator
            </div>
            <div className="flex flex-col md:flex-row gap-3">
                <div className="flex flex-col h-auto gap-3">
                    <div className="bg-black text-bold w-full rounded-[3px] text-white text-center">
                        Saved decks
                    </div>
                    <div className="w-full md:w-[300px] flex flex-row gap-3">
                        {storedGuides.map((guide) => (
                            <>
                                <button className="w-full bg-yellow-200 rounded-[3px]" key={guide.name} onClick={() => setCurrentGuide(guide)}>
                                    {guide.name}
                                </button>
                                <button className="bg-red-500 px-3 rounded-[3px]" onClick={() => removeGuide(guide.name)}>X</button>
                            </>
                        ))}
                    </div>
                </div>
                <GeneratorForm />
            </div>

        </div>
    );
}

export default Home;
