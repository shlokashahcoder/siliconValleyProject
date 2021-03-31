class Form {

  constructor() {
   this.button1 = createButton('Summer Fruits');
   this.button2 = createButton('Winter Fruits');
   this.button3 = createButton('Monsoon Fruits')
   this.title = createElement('h2');
   this.resetState = createButton('ResetState')
  }
  hide(){
 this.title.hide();
 this.button1.hide();
 this.button2.hide()
 this.button3.hide()

  }

  display(){
    this.title.html("weekly fruit keeper");
    this.title.position(displayWidth/2 - 50, 0);
    this.button1.position(displayWidth/2 + 400, displayHeight/2+100);
    this.button2.position(displayWidth/2+400,displayHeight/2);
    this.button3.position(displayWidth/2+400,displayHeight/2-100);
    this.resetState.position(displayWidth/2+400,displayHeight/2-300)

    this.button1.mousePressed(()=>{
      this.title.hide();
      this.button2.hide();
      this.button1.hide()
      this.button3.hide()
      game.update(1)
    })

    this.button2.mousePressed(()=>{
      this.title.hide();
      this.button2.hide()
      this.button1.hide()
      this.button3.hide()
      game.update(2)

    })

    this.button3.mousePressed(()=>{
      this.title.hide();
      this.button2.hide()
      this.button1.hide()
      this.button3.hide()
      game.update(3)
    })

    this.resetState.mousePressed(()=>{
      game.update(0)
      game.start()
      game.getState()
    })

    

    };
  }

