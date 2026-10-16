// src/data/solfa.ts
// The eight notes of the tonic sol-fa scale (do re mi fa so la ti do), in C major.
// `step` is the note's height on a treble staff, counted in half-spaces up from the bottom line (E).
export type SolfaNote = {
  syllable: string
  letter: string // how tonic sol-fa writes it
  freq: number // Hz
  step: number
  color: string
  tint: string
  text: string // readable text colour on `color`
}

export const SOLFA: SolfaNote[] = [
  { syllable: 'do', letter: 'd', freq: 261.63, step: -2, color: '#1F8A7A', tint: '#DCEDE9', text: '#FFFFFF' },
  { syllable: 're', letter: 'r', freq: 293.66, step: -1, color: '#58A867', tint: '#E0EEDF', text: '#14202B' },
  { syllable: 'mi', letter: 'm', freq: 329.63, step: 0, color: '#B9C23A', tint: '#EEF0D0', text: '#14202B' },
  { syllable: 'fa', letter: 'f', freq: 349.23, step: 1, color: '#E7B53B', tint: '#F8EACA', text: '#14202B' },
  { syllable: 'so', letter: 's', freq: 392.0, step: 2, color: '#EE8A3F', tint: '#FBE2D0', text: '#14202B' },
  { syllable: 'la', letter: 'l', freq: 440.0, step: 3, color: '#E5624E', tint: '#F8D9D3', text: '#14202B' },
  { syllable: 'ti', letter: 't', freq: 493.88, step: 4, color: '#5B83BE', tint: '#DBE5F2', text: '#14202B' },
  { syllable: 'do', letter: "d'", freq: 523.25, step: 5, color: '#3A58A4', tint: '#D8DFEF', text: '#FFFFFF' },
]

// Short, well-known tunes (all in the public domain) written as [note index, beats].
export type Tune = { name: string; notes: Array<[number, number]> }

export const TUNES: Tune[] = [
  {
    name: 'Twinkle, twinkle',
    notes: [
      [0, 1], [0, 1], [4, 1], [4, 1], [5, 1], [5, 1], [4, 2],
      [3, 1], [3, 1], [2, 1], [2, 1], [1, 1], [1, 1], [0, 2],
    ],
  },
  {
    name: 'Ode to Joy',
    notes: [
      [2, 1], [2, 1], [3, 1], [4, 1], [4, 1], [3, 1], [2, 1], [1, 1],
      [0, 1], [0, 1], [1, 1], [2, 1], [2, 1.5], [1, 0.5], [1, 2],
    ],
  },
  {
    name: 'Joy to the World',
    notes: [[7, 1], [6, 1], [5, 1], [4, 1], [3, 1], [2, 1], [1, 1], [0, 2]],
  },
]