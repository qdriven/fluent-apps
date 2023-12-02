import ora from "ora";
import { collector, logInstallationInfo } from "../collector";
import { chalk } from "zx";
import { asyncRun } from "../executors/shellExecutor";

const oraInstall = ora("start to install different app ....");

type AppInstallInfo = {
  appName: string;
  brewName: string;
  desc?: string;
};

const apps: AppInstallInfo[] = [
  { brewName: "google-chrome", appName: "Google Chrome.app" },
  { brewName: "lark", appName: "Lark.app" },
  { brewName: "visual-studio-code", appName: "Visual Studio Code.app" },
  // { brewName: 'iterm2', appName: 'iTerm.app' },
  { brewName: "warp", appName: "Warp.app" },
  { brewName: "figma", appName: "Figma.app" },
  { brewName: "postman", appName: "Postman.app" },
  // { brewName: 'docker', appName: 'Docker.app' },
  // { brewName: 'sogouinput', appName: 'Sougou Input.app' },
  { brewName: "github", appName: "GitHub Desktop.app" },
];

async function checkAppInstalledByBrew(app: AppInstallInfo) {
  let installedByBrew = false;
  let existedInApplicationDir = false;

  const bst = await asyncRun<string>(`brew list --cask`);
  installedByBrew = (bst || "").includes(app.brewName);

  if (!installedByBrew) {
    const ast = await asyncRun<string>(`ls /Applications`);
    existedInApplicationDir = (ast || "").includes(app.appName);
  }

  return installedByBrew || existedInApplicationDir;
}
async function abInstall(app: AppInstallInfo) {
  const installed = await checkAppInstalledByBrew(app);
  if (installed) {
    collector.setSkipped(app.brewName);
    return;
  }

  try {
    console.log(chalk.blue(`\ninstall ${app.appName}...`));
    await asyncRun(`brew install --cask ${app.brewName}`);
    collector.setInstalled(app.appName);
  } catch (error) {
    collector.setFailed(app.brewName);
  }
}
export async function installApps() {
  while (apps.length) {
    const app = apps.shift() as AppInstallInfo;
    oraInstall.start(`install ${app.brewName}`);

    await abInstall(app);
    oraInstall.succeed("processed " + app.brewName);
  }
  oraInstall.stop();
  logInstallationInfo();
}

export const listAllApps = () => {
  console.log(
    `\n${chalk.blue(
      "weapon command: `weapon use app` will install below apps:"
    )}`
  );
  console.table(apps);
};
