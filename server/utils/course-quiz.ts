export const staticAnswerKeys: Record<number, Record<string, string[]>> = {
  1: { m1q1: ['a'], m1q2: ['true'], m1q3: ['respect-law', 'vote'] },
  2: { m2q1: ['be-registered'], m2q2: ['true'] },
  3: { m3q1: ['evidence'], m3q2: ['consultation', 'petition'] },
  4: { m4q1: ['transparency'], m4q2: ['true'] },
}

export function getStaticAnswers(moduleId: number) {
  return staticAnswerKeys[moduleId] ?? {}
}
