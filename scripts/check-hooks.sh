#!/bin/sh
# Suggest git hooks setup (runs once via prepare)

HOOKS_PATH=$(git config core.hooksPath 2>/dev/null)

if [ "$HOOKS_PATH" != ".githooks" ]; then
  echo ""
  echo "  Tip: This project has pre-commit hooks (lint, typecheck, tests)."
  echo "  To enable them, run:  bun run setup:hooks"
  echo ""
fi
