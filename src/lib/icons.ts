import mail from 'lucide-static/icons/mail.svg?raw';
import sun from 'lucide-static/icons/sun.svg?raw';
import moon from 'lucide-static/icons/moon.svg?raw';
import menu from 'lucide-static/icons/menu.svg?raw';
import x from 'lucide-static/icons/x.svg?raw';
import languages from 'lucide-static/icons/languages.svg?raw';
import arrowRight from 'lucide-static/icons/arrow-right.svg?raw';
import download from 'lucide-static/icons/download.svg?raw';
import externalLink from 'lucide-static/icons/external-link.svg?raw';
import globe from 'lucide-static/icons/globe.svg?raw';
import cpu from 'lucide-static/icons/cpu.svg?raw';
import link from 'lucide-static/icons/link.svg?raw';
import printer from 'lucide-static/icons/printer.svg?raw';
import gitBranch from 'lucide-static/icons/git-branch.svg?raw';

const raw = { mail, sun, moon, menu, x, languages, 'arrow-right': arrowRight, download, 'external-link': externalLink, globe, cpu, link, printer, 'git-branch': gitBranch };
export type IconName = keyof typeof raw;
export const iconSvg = (name: IconName): string =>
  raw[name].replace('<svg', '<svg aria-hidden="true" focusable="false"').replace(/<!--[\s\S]*?-->/g, '');
