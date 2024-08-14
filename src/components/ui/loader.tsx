import { LoaderCircle } from "lucide-react";
import React from "react";

export function Loader(): React.ReactNode {
	return (
		<div className="absolute left-0 top-0 z-50 flex max-h-full min-h-screen w-full items-center justify-center bg-gray-50/75">
			<LoaderCircle className="h-40 w-40 animate-spin" />
		</div>
	);
}
