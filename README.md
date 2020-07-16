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
gcloud-utils/0.0.0 linux-x64 node-v12.16.3
$ gcu --help [COMMAND]
USAGE
  $ gcu COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`gcu hello [FILE]`](#gcu-hello-file)
* [`gcu help [COMMAND]`](#gcu-help-command)

## `gcu hello [FILE]`

describe the command here

```
USAGE
  $ gcu hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ gcu hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/Kerren-Entrostat/gcloud-utils/blob/v0.0.0/src/commands/hello.ts)_

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
<!-- commandsstop -->
