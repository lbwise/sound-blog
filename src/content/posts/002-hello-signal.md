---
title: "Hello, signal."
number: 2
date: 2026-04-18
summary: "A sine wave is a real thing you can describe with four numbers. That's a starting point."
tags: ["dsp", "notes"]
---

A sine wave is the simplest thing in audio. It's also the thing every other sound can be decomposed into, which is the entire premise of Fourier analysis. So it's a good first object of study &mdash; it's trivial enough to hold in your head and deep enough to take seriously.

You need four numbers to describe a sine:

- **frequency** &mdash; how many cycles per second. Hertz. Pitch.
- **amplitude** &mdash; how tall the wave is. Loudness.
- **phase** &mdash; where in the cycle it starts.
- **sample rate** &mdash; how often you're measuring it, when you digitise.

Everything starts getting interesting when you add two sines together and notice that the result is a new shape you can describe either as a waveform (the shape it traces) or as a spectrum (the frequencies it contains). Those are the same information in two different representations, and the translation between them is the Fourier transform.

That's the headline. The arithmetic comes next.

```python
import numpy as np
sr = 44_100
t = np.arange(sr) / sr       # one second of time
y = 0.5 * np.sin(2 * np.pi * 440 * t)
```

Four lines. 440Hz. A full second. This is already a real audio signal &mdash; write it to a WAV and it plays an A.

No deep insight yet. Just: got started.
