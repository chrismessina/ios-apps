import { ActionPanel, Action, Icon } from "@raycast/api";
import { AppDetails } from "../types";
import { downloadIPA } from "../ipatool";
import { downloadScreenshots } from "../utils/itunes-api";

interface AppActionsProps {
  app: AppDetails;
  onDownload?: (app: AppDetails) => Promise<string | null | undefined>;
  onDownloadScreenshots?: (app: AppDetails) => Promise<string | null | undefined>;
}

/**
 * Reusable component for app-related actions
 */
export function AppActions({ app, onDownload, onDownloadScreenshots }: AppActionsProps) {
  // Create a fallback App Store URL if trackViewUrl is not available
  const appStoreUrl = app.trackViewUrl || `https://apps.apple.com/app/id${app.id}`;

  // Default download handler if none provided
  const handleDownload = async () => {
    if (onDownload) {
      return onDownload(app);
    }

    // Fall back to direct download if no handler provided
    return downloadIPA(app.bundleId, app.name, app.version, app.price);
  };

  const handleDownloadScreenshots = async () => {
    if (onDownloadScreenshots) {
      return onDownloadScreenshots(app);
    }

    // Fall back to direct download if no handler provided
    return downloadScreenshots(app.bundleId, app.name, app.version, app.price);
  };

  return (
    <ActionPanel.Section title="App Actions">
      <Action title="Download App" icon={Icon.Download} onAction={handleDownload} />
      <Action title="Download Screenshots" icon={Icon.Image} onAction={handleDownloadScreenshots} />
      <Action.OpenInBrowser title="View in App Store" icon={Icon.AppWindow} url={appStoreUrl} />
      {app.artistViewUrl && <Action.OpenInBrowser title="View Developer" icon={Icon.Person} url={app.artistViewUrl} />}
    </ActionPanel.Section>
  );
}
