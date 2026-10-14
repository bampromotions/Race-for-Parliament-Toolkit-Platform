import { collection, getDocs, query, where } from 'firebase/firestore'
import type { CourseMaterial } from '../data/course'

export function createCourseMaterialRepository(firebase: ReturnType<typeof useFirebase>) {
  return {
    async getForModule(courseId: string, moduleId: number): Promise<Array<CourseMaterial & { id: string }>> {
      const { auth, db } = firebase.requireFirebase()
      if (!auth.currentUser) throw new Error('You must be signed in to read course materials.')

      const materialsQuery = query(
        collection(db, 'courseMaterials'),
        where('courseId', '==', courseId),
        where('moduleId', '==', moduleId),
      )
      const snapshot = await getDocs(materialsQuery)
      return snapshot.docs.map((document) => {
        const data = document.data()
        if (typeof data.titleEn !== 'string'
          || typeof data.titleSt !== 'string'
          || typeof data.bodyEn !== 'string'
          || typeof data.bodySt !== 'string') {
          throw new Error(`Course material ${document.id} has invalid data.`)
        }

        return {
          id: document.id,
          titleEn: data.titleEn,
          titleSt: data.titleSt,
          bodyEn: data.bodyEn,
          bodySt: data.bodySt,
        }
      })
    },
  }
}
