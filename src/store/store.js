import { observable, action } from 'mobx';

export default class Store {
  @observable data = [
    {
      id: 1,
      answers: ['Hot', 'Cold'],
      correct: 1,
      active: 2
    },
    {
      id: 2,
      answers: ['Option 1', 'Option 2'],
      correct: 2,
      active: 1
    },
    {
      id: 3,
      answers: ['active', 'not active'],
      correct: 1,
      active: 2
    }
  ]
  @observable allCorrect = false;

  @action setActive(id, index) {
    this.data.map((dataset) => {
      if (dataset.id === id) {
        dataset.active = index;
      }
    })
  }

  @action check() {
    this.data.map((dataset) => {
      if (dataset.correct === dataset.active) {
        this.allCorrect = true;
      } else {
        this.allCorrect = false;
      }
    })
  }
}
