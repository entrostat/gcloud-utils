gcloud-utils
============

Additional utilities to speed up standard GCP workflows

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/gcloud-utils.svg)](https://npmjs.org/package/gcloud-utils)
[![Downloads/week](https://img.shields.io/npm/dw/gcloud-utils.svg)](https://npmjs.org/package/gcloud-utils)
[![License](https://img.shields.io/npm/l/gcloud-utils.svg)](https://github.com/Kerren-Entrostat/gcloud-utils/blob/master/package.json)

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
gcloud-utils/1.0.0 linux-x64 node-v14.15.0
$ gcu --help [COMMAND]
USAGE
  $ gcu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gcu debug:print`](#gcu-debugprint)
* [`gcu help [COMMAND]`](#gcu-help-command)
* [`gcu info`](#gcu-info)
* [`gcu switch:cluster`](#gcu-switchcluster)
* [`gcu sync`](#gcu-sync)

## `gcu debug:print`

Print the current config.

```
USAGE
  $ gcu debug:print

EXAMPLE
  $ gcu print
```

_See code: [src/commands/debug/print.ts](https://github.com/Kerren-Entrostat/gcloud-utils/blob/v1.0.0/src/commands/debug/print.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.0/src/commands/help.ts)_

## `gcu info`

Prints the current info around the selected project and cluster.

```
USAGE
  $ gcu info
```

_See code: [src/commands/info.ts](https://github.com/Kerren-Entrostat/gcloud-utils/blob/v1.0.0/src/commands/info.ts)_

## `gcu switch:cluster`

Switch the active Kubernetes cluster.

```
USAGE
  $ gcu switch:cluster

EXAMPLE
  $ gcu switch:cluster
```

_See code: [src/commands/switch/cluster.ts](https://github.com/Kerren-Entrostat/gcloud-utils/blob/v1.0.0/src/commands/switch/cluster.ts)_

## `gcu sync`

Stores all of the projects and clusters so that the switch is a lot faster.

```
USAGE
  $ gcu sync

EXAMPLE
  $ gcu sync
```

_See code: [src/commands/sync.ts](https://github.com/Kerren-Entrostat/gcloud-utils/blob/v1.0.0/src/commands/sync.ts)_
<!-- commandsstop -->
