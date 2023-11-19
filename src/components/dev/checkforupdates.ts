import semver from 'semver';

export interface VersionDetails {
    currentVersion: string;
    latestVersion: string;
    isLatestVersion: boolean;
    releasesUrl: string;
}

export async function checkForUpdates(): Promise<VersionDetails | null> {
    const repoOwner = 'muhammad-fiaz';
    const repoName = 'portfolio';

    try {
        const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/releases/latest`);
        const data = await response.json();

        const latestVersion: string = data.tag_name.replace(/^v/, '');
        const currentVersion: string = '1.0.6'; // Set this to your current project version, remove 'v' if present

        const isLatestVersion = semver.gt(currentVersion, latestVersion);

        const releasesUrl = `https://github.com/${repoOwner}/${repoName}/releases/tag/v${latestVersion}`;

        if (isLatestVersion) {
            console.log('Your project is up to date.');
        } else {
            console.log(`Update available! Your version: ${currentVersion}, Latest version: ${latestVersion}`);
            console.log('Visit the releases page for more information:', releasesUrl);
        }

        return { currentVersion, latestVersion, isLatestVersion, releasesUrl };
    } catch (error) {
        console.error('Error checking for updates:', error);
        return null;
    }
}
