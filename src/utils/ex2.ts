import { isRgbColor } from "class-validator";

interface IStudent {
  name: string
  score: number
}

interface IStore {
  subject: string
  students: IStudent[]
}

interface IStudentUpdateScore {
  name: string
  scores: Record<string, number>
}

interface IRemoveStudentScore {
  name: string
  subject: string
}
interface IStudentScore {
  [key: string]: any
}

export const updateStudentScore = (store: IStore[], update: IStudentUpdateScore): IStore[] => {

  for (const keySubject in update.scores) {
    const foundSubject = store.find(f => f.subject === keySubject);
    if (foundSubject) {
      const fountName = foundSubject.students.find(f => f.name == update.name);
      if (fountName) {
        fountName.score = update.scores[keySubject];
      } else {
        const obj = { name: update.name, score: update.scores[keySubject] };
        foundSubject.students.push(obj);
      }
    } else {
      const obj = {
        subject: keySubject,
        students: [{ name: update.name, score: update.scores[keySubject] }]
      }
      store.push(obj);
    }
  }
  //console.log(store);

  return store;
}

export const removeStudentScoreBySubject = (store: IStore[], record: IRemoveStudentScore): IStore[] => {
  var a = store.find(f => f.subject === record.subject);
  var b = a.students;
  var c = a.students.findIndex(function (o) { return o.name === record.name });
  if (c > -1) b.splice(c, 1);

  //console.log(store);
  return store
}

export const getStudentScoreBySubject = (store: IStore[], subjects: string[]): IStudentScore[] => {

  let item = [];
  subjects.forEach(sub => {
    store.forEach(store => {
      if (store.subject == sub) {
        store.students.forEach(student => {

          if (!item.find(item => item.name == student.name) && sub == store.subject) item.push({ name: student.name, [sub]: student.score });
          else if (item.find(item => item.name == student.name) && sub == store.subject) item.find(item => item.name == student.name)[sub] = student.score;

        })

        item.forEach(i => {
          let hasStudentName = store.students.find(f => f.name == i.name);
          if (!hasStudentName) i[sub] = null;
        })
      }

    })
  })

  //console.log(item);
  return item
}
