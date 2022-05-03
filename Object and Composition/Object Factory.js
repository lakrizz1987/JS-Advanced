function factory(library,orders){
    let arrResult = [];

    for (let obj of orders) {
        let objTemp = {
            name: obj.template.name
        }

       obj.parts.forEach(func => {

        objTemp[func] = library[func]

       });

        arrResult.push(objTemp)
    }

    return arrResult;
}


const library = {
    print: function () {
      console.log(`${this.name} is printing a page`);
    },
    scan: function () {
      console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
      console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
  };
  
  const orders = [
    {
      template: { name: 'ACME Printer'},
      parts: ['print']      
    },
    {
      template: { name: 'Initech Scanner'},
      parts: ['scan']      
    },
    {
      template: { name: 'ComTron Copier'},
      parts: ['scan', 'print']      
    },
    {
      template: { name: 'BoomBox Stereo'},
      parts: ['play']      
    }
  ];

  const products = factory(library, orders);
  console.log(products);
  