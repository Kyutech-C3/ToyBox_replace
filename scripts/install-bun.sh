#!/bin/bash

source scripts/version-source.sh

curl -fsSL https://bun.sh/install | bash -s "bun-v$bun_version"