export class Place {
  constructor(title, imageUri, location) {
    (this.title = title),
      (this.imageUri = imageUri),
      (this.address = location.address),
      (this.location = { lat: location.lat, lng: location.lng }), // { lat: 98.421232, lng: 83.343232 }
      (this.id = new Date().toString() + Math.random().toString());
  }
}
