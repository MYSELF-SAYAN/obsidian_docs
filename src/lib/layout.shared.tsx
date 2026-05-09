import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2 font-semibold text-white">
          {/* <div className="size-3 rounded-full bg-violet-500 shadow-[0_0_20px_rgba(139,92,246,0.8)]" /> */}
          Obsidian SDK
        </div>
      ),
    },

   

    githubUrl: `https://github.com/MYSELF-SAYAN/obsidian_cli_sdk`,
  };
}