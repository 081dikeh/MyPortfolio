// src/data/tones.ts
// The eight notes of the tonic sol-fa scale, each with a colour.
// The same colours tint the project panels, so the page reads as one system.
export type Tone = {
  syllable: string
  freq: number // Hz, C major
  color: string // full-strength colour
  tint: string // resting (pale) colour
  text: string // readable text colour on `color`
}

export const TONES: Tone[] = [
  { syllable: 'do', freq: 261.63, color: '#1F8A7A', tint: '#DCEDE9', text: '#FFFFFF' },
  { syllable: 're', freq: 293.66, color: '#58A867', tint: '#E0EEDF', text: '#14202B' },
  { syllable: 'mi', freq: 329.63, color: '#B9C23A', tint: '#EEF0D0', text: '#14202B' },
  { syllable: 'fa', freq: 349.23, color: '#E7B53B', tint: '#F8EACA', text: '#14202B' },
  { syllable: 'so', freq: 392.0, color: '#EE8A3F', tint: '#FBE2D0', text: '#14202B' },
  { syllable: 'la', freq: 440.0, color: '#E5624E', tint: '#F8D9D3', text: '#14202B' },
  { syllable: 'ti', freq: 493.88, color: '#5B83BE', tint: '#DBE5F2', text: '#14202B' },
  { syllable: 'do', freq: 523.25, color: '#3A58A4', tint: '#D8DFEF', text: '#FFFFFF' },
]