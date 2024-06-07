import { useExtensionSetting } from "@Core/Hooks";
import { Section } from "@Core/Settings/Section";
import { SectionList } from "@Core/Settings/SectionList";
import { Switch } from "@fluentui/react-components";
import { FileExtensions } from "./FileExtensions";
import { Folders } from "./Folders";

export const WindowsSettings = () => {
    const { value: includeWindowsStoreApps, updateValue: setIncludeWindowsStoreApps } = useExtensionSetting<boolean>({
        extensionId: "ApplicationSearch",
        key: "includeWindowsStoreApps",
    });

    return (
        <SectionList>
            <Section>
                <Folders />
            </Section>
            <Section>
                <FileExtensions />
            </Section>
            <Section>
                <Switch
                    label="Include Apps from Windows Store"
                    checked={includeWindowsStoreApps}
                    onChange={(_, { checked }) => setIncludeWindowsStoreApps(checked)}
                />
            </Section>
        </SectionList>
    );
};
