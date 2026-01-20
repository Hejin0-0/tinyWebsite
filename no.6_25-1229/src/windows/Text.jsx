import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const TextFile = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data;

    // Strict Extension Validation & Null Safety
    if (!data || !data.name || !data.name.endsWith('.txt')) {
        return null;
    }

    const { name, image, subtitle, description } = data;

    return (
        <div className="w-[750px] h-[600px] bg-white rounded-lg shadow-2xl overflow-hidden flex flex-col font-serif text-gray-900">
            {/* Window Header */}
            <header className="flex items-center px-4 py-3 bg-gray-50 border-b border-gray-100 flex-none select-none">
                <WindowControls target="txtfile" />
                <span className="font-sans font-medium text-xs ml-4 text-gray-400 uppercase tracking-widest flex-1 text-center pr-12 line-clamp-1">
                    {name}
                </span>
            </header>

            {/* Scrollable Content Container - STRICT CONTAINMENT */}
            <div className="flex-1 overflow-y-auto h-full w-full bg-white">
                {/* Content Wrapper with Consistent Padding */}
                <article className="p-8 max-w-3xl mx-auto">

                    {/* Hero Visual - Anti-Clipping */}
                    {image && (
                        <div className="mb-8 w-full flex justify-center bg-gray-50 rounded-lg border border-gray-100 py-4">
                            <img
                                src={image}
                                alt=""
                                className="max-w-full h-auto object-contain shadow-sm"
                                style={{ maxHeight: '300px' }}
                            />
                        </div>
                    )}

                    {/* Document Header */}
                    <div className="mb-8 border-b border-gray-100 pb-6">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 mb-2 break-words">
                            {name}
                        </h1>
                        {subtitle && (
                            <div className="text-lg text-gray-500 font-sans">
                                {subtitle}
                            </div>
                        )}
                    </div>

                    {/* Text Content - Typography & Overflow Protection */}
                    <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                        {description && Array.isArray(description) && description.map((paragraph, index) => (
                            <p
                                key={index}
                                className="whitespace-pre-wrap"
                                style={{ wordBreak: 'keep-all', overflowWrap: 'break-word' }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
};

const TextWindow = WindowWrapper(TextFile, 'txtfile');
export default TextWindow;
