export default class Paginado {
  constructor(numberCardsByPag, stateOfCards, page, filterOfCards, filterOfCardsSelect = "Any", pagSelect = 1) {
    this.numberCardsByPag = numberCardsByPag // numero de card a renderizar por pagina
    this.stateOfCards = stateOfCards //estado global de cards 
    this.filterOfCardsSelect = filterOfCardsSelect
    this.filterOfCards = filterOfCards // estado global de cards filtrado
    this.page = page // estado local cards a renderizar
    this.pagSelect = pagSelect // pagina seleccionada por el usuario
    this.setLocalState = {
      renderCards: [],
      pag: 1,
    }

  }
  buttons = () => {
    let totalPages = []
    if (this.filterOfCardsSelect !== "Any") {
      let arrayFilterOfCards = this.filterOfCards
      totalPages = Math.ceil(arrayFilterOfCards.length / this.numberCardsByPag)
    } else {
      totalPages = Math.ceil(this.stateOfCards.length / this.numberCardsByPag)
    }
    const totalPagesArray = []
    for (let i = 1; i < totalPages + 1; i++) {
      totalPagesArray.push(i)
    }
    if (totalPagesArray.length > 1) {
      totalPagesArray.unshift("Previous")
      totalPagesArray.push("Next")
    }
    return totalPagesArray
  }
  changePages = () => {
    let range = (this.pagSelect * this.numberCardsByPag) - this.numberCardsByPag
    let arrayCards = []
    if ((this.filterOfCardsSelect !== "Any")) {
      for (let i = range; i < range + this.numberCardsByPag; i++) {
        arrayCards.push(this.filterOfCards[i])
      }
    } else {
      for (let i = range; i < range + this.numberCardsByPag; i++) {
        arrayCards.push(this.stateOfCards[i])
      }
    }
    this.setLocalState = {
      ...this.setLocalState,
      renderCards: [...arrayCards],
      pag: this.pagSelect,
    }
  }
  conditionByChange = () => {
    if (this.pagSelect === "Previous") {
      if (this.page < 2) {
        this.pagSelect = 1
        this.changePages()
      }
      else {
        this.pagSelect = this.page - 1
        this.changePages()
      }
    } else if (this.pagSelect === "Next") {
      if (this.page > this.buttons().length - 3) {
        this.pagSelect = this.buttons().length - 2
        this.changePages()
      }
      else {
        this.pagSelect = this.page + 1
        this.changePages()
      }
    } else {
      this.changePages()
    }
  }
  paginar = (selectPag = this.pagSelect, selectFilter = this.filterOfCardsSelect) => {
    this.filterOfCardsSelect = selectFilter
    this.pagSelect = selectPag
    this.conditionByChange()

    return this.setLocalState
  }


}