export class Guitar {
  constructor(brand = 'not known') {
    this.brand = brand;
  }

  getBrand() {
    return this.brand;
  }
}

export class Mandoline extends Guitar {
  constructor(brand = 'not Knows', cordes = 0) {
    super(brand);
    this.cordes = cordes;
  }

  getCordes() {
    return this.cordes;
  }
}

//------------------- Class

//let guitar = new Guitar("PRS");
//document.write("<Br>"+guitar.getBrand());
/*

let guitar = new Mandoline('PRS', 12);
console.log(guitar);
console.log(guitar.getCordes());*/
