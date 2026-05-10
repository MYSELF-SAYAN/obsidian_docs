# Obsidian SDK Documentation

Comprehensive documentation for the Obsidian SDK - a powerful CLI tool and TypeScript library for interacting with Obsidian vaults programmatically.

## What is Obsidian SDK?

Obsidian SDK enables developers to programmatically interact with Obsidian through a REST API and TypeScript library. Whether you want to automate note creation, manage vault settings, search content, or integrate Obsidian with other tools, this SDK provides everything you need.

### Features

- **REST API** - Full-featured API server with 23+ service endpoints
- **TypeScript Library** - Easy-to-use TypeScript wrapper for all API methods
- **Vault Management** - List, open, and manage Obsidian vaults
- **File Operations** - Read, write, create, move, rename, and delete notes
- **Search** - Full-text search across your vault
- **Metadata Management** - Work with frontmatter, aliases, tags, and properties
- **Task Management** - Create and track tasks within notes
- **Link Analysis** - Explore backlinks, outgoing links, and orphans
- **Plugin & Theme Management** - Install and manage Obsidian plugins and themes
- **Developer Tools** - Debug mode, DOM inspection, and screenshots

## Quick Start

### Prerequisites

- **Node.js** 18.x or higher
- **npm** 9.x or higher
- **Obsidian** installed on your system
- **Obsidian CLI** available in your PATH

### Installation

```bash
git clone https://github.com/MYSELF-SAYAN/obsidian_cli_sdk.git
cd obsidian-sdk
npm install
```

### Start the Server

```bash
npm run server
# or
npx obsidian server
```

The API server starts on `http://localhost:3000`.

### Using the SDK

```typescript
import { Obsidian } from "obsidian-sdk";

// Connect to your vault
const obsidian = new Obsidian({ vault: "myVault" });

// List all files
const files = await obsidian.files.list();
console.log(files);

// Search for notes
const results = await obsidian.search.query("project");
console.log(results);
```

## API Services

### Files & Vault (8 services)
- **Vault** - Vault configuration and management
- **File** - File read, write, and operations
- **Daily** - Daily notes creation and management
- **Templates** - Note template operations
- **Workspace** - Workspace and tab management
- **Search** - Full-text search functionality
- **Tags** - Tag management and operations
- **Outline** - Document outline/navigation

### Note Relationships (2 services)
- **Backlinks** - View and manage incoming links
- **Links** - Internal link operations

### Content & Metadata (4 services)
- **Properties** - Frontmatter and note properties
- **Aliases** - Note alias management
- **Tasks** - Task and todo management
- **Random** - Random note selection

### Platform Configuration (5 services)
- **Plugins** - Plugin management
- **Themes** - Theme installation and management
- **Snippets** - CSS snippet management
- **Sync** - Obsidian Sync configuration
- **Publish** - Obsidian Publish site management

### System & Utilities (4 services)
- **History** - File history and recovery
- **Diff** - Compare file versions
- **Dev** - Developer tools and debugging
- **Misc** - Version, word count, app control

## Documentation

For full documentation, visit our [documentation site](http://localhost:3000/docs).

## Repository Structure

```
obsidian-sdk/
├── content/docs/          # Documentation source
│   ├── api/              # API reference documentation
│   └── core/             # Core concept documentation
├── src/
│   ├── app/              # Next.js application
│   └── lib/              # Shared libraries
└── package.json
```

## Contributing

Contributions are welcome! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on how to get involved.

## License

MIT License - see individual repositories for details.

## Links

- [SDK Repository](https://github.com/MYSELF-SAYAN/obsidian_cli_sdk)
- [API Repository](https://github.com/MYSELF-SAYAN/obsidian_cli_api)
- [Issues](https://github.com/MYSELF-SAYAN/obsidian_cli_sdk/issues)
