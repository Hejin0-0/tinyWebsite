import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data;

    if (!data) return null;

    const { name, imageUrl } = data;

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col font-sans">
            <div id="window-header" className="flex-none">
                <WindowControls target="imgfile" />
                <span className="font-semibold text-sm ml-4 text-gray-700">{name}</span>
            </div>

            <div className="flex-1 p-2 flex items-center justify-center bg-gray-100">
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={name}
                        className="max-w-full max-h-[80vh] object-contain rounded-md shadow-sm"
                    />
                ) : (
                    <div className="p-10 text-gray-500">No Image Found</div>
                )}
            </div>
        </div>
    );
};

const ImageWindow = WindowWrapper(Image, 'imgfile');
export default ImageWindow;
