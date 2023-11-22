import semver from 'semver';
import settings from '../../../src/content/_settings.json';

// Define the VersionDetails interface
export interface VersionDetails {
    currentVersion: string;
    latestVersion: string;
    isLatestVersion: boolean;
    releasesUrl: string;
}

// Define the checkForUpdates function
export async function checkForUpdates(): Promise<VersionDetails | null> {
    // Extract the current version from settings.json
    const currentVersion: string = settings.version || '1.0.0';

    // Define the GitHub repository details
    const repoOwner = 'muhammad-fiaz';
    const repoName: string = settings?.repository?.repoName || 'portfolio';

    try {
        // Fetch the latest release information from GitHub API
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
        const data = await response.json();

        // Extract the latest version from the GitHub response
        const latestVersion: string = data.tag_name.replace(/^v/, '');

        // Check if the current version is equal to the latest version
        const isLatestVersion = semver.eq(currentVersion, latestVersion);
        // Define the releases URL
        const releasesUrl = `https://github.com/${repoOwner}/${repoName}/releases/tag/v${latestVersion}`;

        // Log messages based on the update status
        if (isLatestVersion) {
            console.log('Your project is up to date.');
        } else {
            console.log(`Update available! Your version: ${currentVersion}, Latest version: ${latestVersion}`);
            console.log('Visit the releases page for more information:', releasesUrl);
        }

        // Return the VersionDetails object
        return { currentVersion, latestVersion, isLatestVersion, releasesUrl };
    } catch (error) {
        // Log an error if there is an issue fetching updates
        console.error('Error checking for updates:', error);
        return null;
    }
}
