import * as Tone from 'tone'

const samples = [
  'Samples\ALT Altered 01 Clave Grain.wav',
  'Samples\ALT Altered 01 Clave Grain.wav',
  'Samples\ALT Altered 02 CH Closed Hat Smear.wav',
  'Samples\ALT Altered 02 CH Closed Hat Smear.wav',
  'Samples\ALT Altered 03 BD Bass Drum Comb.wav',
  'Samples\ALT Altered 03 BD Bass Drum Comb.wav',
  'Samples\ALT Altered 04 BD Bass Drum Impact.wav',
  'Samples\ALT Altered 04 BD Bass Drum Impact.wav',
  'Samples\ALT Altered 05 BD Bass Drum Bongo.wav',
  'Samples\ALT Altered 05 BD Bass Drum Bongo.wav',
  'Samples\ALT Altered 06 CP Clap Whip.wav',
  'Samples\ALT Altered 06 CP Clap Whip.wav',
  'Samples\ALT Altered 07 CY Cymbal Beat Up Vinyl.wav',
  'Samples\ALT Altered 07 CY Cymbal Beat Up Vinyl.wav',
  'Samples\ALT Altered 08 MA Maraca Metal.wav',
  'Samples\ALT Altered 08 MA Maraca Metal.wav',
  'Samples\ALT Altered 09 MA Maraca Metal.wav',
  'Samples\ALT Altered 09 MA Maraca Metal.wav',
  'Samples\ALT Altered 10 RS Rim Shot Tic Toc.wav',
  'Samples\ALT Altered 10 RS Rim Shot Tic Toc.wav',
  'Samples\ALT Altered 11 RS Rim Shot Tic Toc.wav',
  'Samples\ALT Altered 11 RS Rim Shot Tic Toc.wav',
  'Samples\ALT Altered 12 RS Rim Shot Downgrade.wav',
  'Samples\ALT Altered 12 RS Rim Shot Downgrade.wav',
  'Samples\ALT Altered 13 LT Low Tom Lossy.wav',
  'Samples\ALT Altered 13 LT Low Tom Lossy.wav',
  'Samples\ALT Altered 14 LT Low Tom Lossy.wav',
  'Samples\ALT Altered 14 LT Low Tom Lossy.wav',
  'Samples\ALT Altered 15 SD Snare Drum Dubplate.wav',
  'Samples\ALT Altered 15 SD Snare Drum Dubplate.wav',
  'Samples\ALT Altered 16 RS Rim Shot Rev.wav',
  'Samples\ALT Altered 16 RS Rim Shot Rev.wav',
]

function createBuffer(path) {
  const sample = new Tone.Buffer(path, () => {
    const buff = sample.get()
  })

  return sample
}

function loadSamples() {
  const loadedSamples = []

  samples.forEach((path, i) => {
    const loadedSample = createBuffer(path)
    loadedSamples.push(loadedSample)
  })

  return loadedSamples
}

export { loadSamples }
