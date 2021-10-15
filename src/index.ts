#!/usr/bin/env node

import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";

import { printCron } from "./cron";

const argv = yargs(hideBin(process.argv)).parseSync();

const input = argv._[0] as string;

printCron(input);