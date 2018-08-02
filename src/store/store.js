import { observable, computed, action } from 'mobx';

export default class Store {
  @observable data = [
    {
      id: 1,
      answers: ['Option 1', 'Option 2'],
      correct: 1,
      active: 1,
    },
    {
      id: 2,
      answers: ['Queen Elizabeth', 'Charles Darwin'],
      correct: 2,
      active: 2,
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

  @computed get check() {
    this.data.map((dataset) => {
      if (dataset.correct === dataset.active) {
        this.allCorrect = true;
      } else {
        this.allCorrect = false;
      }
    })
  }
}
