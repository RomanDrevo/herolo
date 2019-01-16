export default class Movie {
  constructor(data) {
    Object.assign(this, data)
  }

  static reconstituteFrom(json) {
    const state = {
      id: json.id,
      category: json.category,
      name: json.name,
      year: json.year,

    }
    return new Movie(state)
  }
}
