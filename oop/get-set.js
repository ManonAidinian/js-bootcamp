const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(value) {
    this._location = value.trim();
    this.locations.push(this._location);
  },
};
data.location = "   Bali   ";
data.location = "   Paris";
console.log(data);
console.log(data.location);
