class Place {
  constructor(title, imageUri, address, location) {
    (this.title = title),
      (this.imageUri = imageUri),
      (this.address = address),
      (this.location = location), // { lat: 98.421232, lng: 83.343232 }
      (this.id = new Date().toString() + Math.random().toString());
  }
}
