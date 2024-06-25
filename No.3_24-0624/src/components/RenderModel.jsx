"use client";

import React, { Suspense } from "react";
import clsx from "clsx";
import { Environment } from "@react-three/drei";

const RenderModel = ({ children, className }) => {
	return (
		<div>
			<Canvas
				className={clsx("w-screen h-screen -z-10 relative", className)}
			>
				<Suspense fallback={null}>{children}</Suspense>
				<Environment preset="dawn" /> // 조명 (캐릭터 모델 밝기)
			</Canvas>
		</div>
	);
};

export default RenderModel;
