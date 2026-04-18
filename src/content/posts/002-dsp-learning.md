---
title: "DSP learning"
number: 1
date: 2026-04-18
summary: "My notes and learning from reading the dsp for engineers book"
tags: ["dsp", "notes"]
---

Okay so im starting to read through the online version of The Scientist and Engineer's Guide to Digital Signal Processing By Steven W. Smith, Ph.D.
I figured theres lots to go through, hopefully Ill get through one chapter at a time, I've been instructed to go through only chapters 1-3, 6, 7, 8, 12, 14 so thats what ill be doing.

# Chapter one
Now I have already read chapter one a month ago, I should have re-read it but I didn't.
The summary is about all the different practical implementation of digital signal processing.
For me Im mostly interested in audio processing but still cool to see how fundamental it is for so many industries

# Chapter two - Statistics, Probability and Noise 2024-04-28
The core statistics in measuring signals is:
- mean: average value
- variance: deviation of signal from the mean
- std dev: the deviation of the power of the mean

- Different signals will have vastly different mean and stdev (square, saw, noise). Noise however when normally distributed will have peak-to-peak dist of 6-8 std dev. which is cool.
- More efficient ways to calculate std dev, mean and N (num samples) is running stats which calculates all three concurrently and each sample step.
- Signal vs underlying process: the difference between the true probability distribution and the actual measured distribution
- Can measure this with typical error formula
- Histograms are more efficient as it reduces ops by a factor of frequency, can also view distribution
- Histogram maps pmf which is the discrete version of pdf
- Binning is a way to create a pdf without infinite points to bucket (bin size is an important parameter like bit rate sample size)
- Random num generation: R = aS + B mod c. If enough are added together it creates a normal distribution which is neat. That can be used to great different noise algorithms. Which makes me curious about how the different noise algos that synths used (brown, pick, white) are created.
- Precision v accuracy: precision is the spread of the data and accuracy is how close the mean is to the truth

Felt good to get back into it, and to be honest am a little scared about the math. Im fine with math but always have a hard time actualizing it and connecting it to real life. Especially probability, however I felt really comfortable with this and go me excited about noise and how that measured.