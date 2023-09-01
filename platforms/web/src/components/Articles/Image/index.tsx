import { selectThemeKey } from "@web/providers/Theme/selectors";
import { useMemo } from "react";
import { useSelector } from "@web/core";
import { ThemeEnum } from "@web/providers/Theme/types";
import { selectExperimentalInvert } from "@web/slices/persisted/selectors";

export default function Image({ src }: { src: string }): JSX.Element {
    const themeKey = useSelector(selectThemeKey);
    const experimentalInvertEnabled = useSelector(selectExperimentalInvert);

    const filter = useMemo(() => {
        if(!experimentalInvertEnabled){
            return undefined;
        }
        const isPng = src.startsWith("data:image/png") || src.endsWith(".png");
        if (!isPng) {
            return undefined;
        }
        return themeKey === ThemeEnum.Dark ? "invert(1)" : "invert(0)";
    }, [themeKey, experimentalInvertEnabled]);

    return <div className="img" style={{
        backgroundImage: `url(` + src + `)`,
        filter: filter
    }}></div>
}