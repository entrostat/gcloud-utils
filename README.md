gcloud-utils
============

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gcloud-utils.svg)](https://npmjs.org/package/gcloud-utils)
[![Downloads/week](https://img.shields.io/npm/dw/gcloud-utils.svg)](https://npmjs.org/package/gcloud-utils)
[![License](https://img.shields.io/npm/l/gcloud-utils.svg)](https://github.com/Kerren-Entrostat/gcloud-utils/blob/master/package.json)

If you work with multiple GCP projects and Kubernetes clusters, I'm sure you have hit the same problem as me where you have to continually switch projects and clusters throughout the day. It's really annoying if you don't remember the project and cluster names as well as their regions. So I've created a small "wrapper" CLI around `gcloud` that caches the information about your projects and clusters to make it faster and easier to switch between them at any given time. It's simple to get started:

```bash
npm install -g gcloud-utils
gcu sync
gcu switch:cluster
```

The sync may take a minute or two and **you'll need to re-sync whenever you add a new project or cluster**. For more details about the commands, see below.

<br>
<br>
<br>

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g gcloud-utils
$ gcu COMMAND
running command...
$ gcu (-v|--version|version)
gcloud-utils/1.1.2 linux-x64 node-v12.16.3
$ gcu --help [COMMAND]
USAGE
  $ gcu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gcu help [COMMAND]`](#gcu-help-command)
* [`gcu info`](#gcu-info)
* [`gcu switch:cluster`](#gcu-switchcluster)
* [`gcu sync`](#gcu-sync)

## `gcu help [COMMAND]`

display help for gcu

```
USAGE
  $ gcu help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.1/src/commands/help.ts)_

## `gcu info`

Prints the current info around the selected project and cluster.

```
USAGE
  $ gcu info

ALIASES
  $ gcu i
  $ gcu print
  $ gcu p
```

_See code: [src/commands/info.ts](https://github.com/entrostat/gcloud-utils/blob/v1.1.2/src/commands/info.ts)_

## `gcu switch:cluster`

Switch the active Kubernetes cluster.

```
USAGE
  $ gcu switch:cluster

ALIASES
  $ gcu sc
```

_See code: [src/commands/switch/cluster.ts](https://github.com/entrostat/gcloud-utils/blob/v1.1.2/src/commands/switch/cluster.ts)_

## `gcu sync`

Stores all of the projects and clusters so that the switch is a lot faster.

```
USAGE
  $ gcu sync

EXAMPLE
  $ gcu sync
```

_See code: [src/commands/sync.ts](https://github.com/entrostat/gcloud-utils/blob/v1.1.2/src/commands/sync.ts)_
<!-- commandsstop -->
