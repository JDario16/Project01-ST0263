export class Post {

  constructor(_id = '', name = '', altitud = 0, latitud = 0) {
    this._id = _id;
    this.name = name;
    this.altitud = altitud;
    this.latitud = latitud;
  }

  _id: string;
  name: string;
  altitud: number;
  latitud: number;
}
