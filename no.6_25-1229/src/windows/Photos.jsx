import { Mail, Search } from "lucide-react";

import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";
import useWindowStore from "#store/window";
import { gallery, photosLinks } from "#constants";

const Photos = () => {
    const { openWindow } = useWindowStore();

    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />
                <div className="w-full flex justify-end items-center gap-3 text-gray-500">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            {/* h-full과 flex를 통해 윈도우 전체 높이를 사용 */}
            <div className="flex w-full h-full overflow-hidden" >
                <div className="sidebar shrink-0" > {/* 사이드바 크기 고정 */}
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} className="w-4" />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* 갤러리 영역: flex-1로 남은 공간을 모두 차지 */}
                <div className="gallery flex-1 overflow-y-auto p-4" >
                    {/* grid를 사용하여 윈도우 너비에 따라 이미지 배치 조절 */}
                    <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {gallery.map(({ id, img }) => (
                            <li
                                key={id}
                                className="cursor-pointer group"
                                onClick={() => openWindow('imgfile', {
                                    id,
                                    name: "Gallery image",
                                    icon: "/imgaes/image.png",
                                    kind: 'file',
                                    fileType: 'img',
                                    imageUrl: img,
                                })}
                            >
                                {/* aspect-video 또는 aspect-square로 비율 고정 */}
                                <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100">
                                    <img
                                        src={img}
                                        alt={`Gallery Image ${id}`}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                    />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

const FinderWindow = WindowWrapper(Photos, 'photos');

export default FinderWindow;