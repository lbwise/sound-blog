---
title: "Sine generator (C++)"
started: 2026-04-18
status: wip
summary: "The simplest possible audio project: a command-line tool that writes a pure sine tone to a WAV file. A forcing function for learning C++ build, WAV file format, and basic DSP arithmetic."
tags: ["cpp", "dsp", "wav"]
---

## Why this one

Every DSP book starts with a sine wave. Every audio toolchain starts with a WAV writer. Doing both at once kills two birds and forces me to set up a real C++ project from scratch &mdash; `CMakeLists.txt`, a compiler flag I've actually thought about, a test I can run. I need those habits for anything downstream.

## Scope

- Accept `--freq`, `--duration`, `--amplitude`, `--sample-rate` on the CLI.
- Generate a mono 16-bit PCM sine.
- Write a valid WAV file to stdout or a path.
- No dependencies beyond the standard library.

## Open questions

- Do I handle denormals / clipping now, or later? (Later.)
- CMake or just a Makefile? (CMake. Pay the tax once.)
- Test with what &mdash; `assert` and a binary diff? (Fine for now.)

## Status

Project started. Haven't written the first line of C++ yet. That's the next entry.
