class Event {
  constructor() {
    this.proj = document.querySelectorAll(".proj");
  }



  addEvent () {
    for (let i = 0; i < this.proj.length; i++) {
      this.proj[i].addEventListener('mouseenter', this.eventChangeOver);
      this.proj[i].addEventListener('mouseleave', this.eventChangeOut);
    }
  }

  eventChangeOver (e) {
    e.currentTarget.style.background = 'no-repeat url("assets/white.png")';
    e.currentTarget.style.backgroundSize = 'contain';
    e.currentTarget.style.width = '400px';
    e.currentTarget.style.height = '200px';
    e.currentTarget.style.transitionDuration = '.5s';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].style.transitionDuration = '1s';
      e.currentTarget.children[i].style.opacity = '1';
    }
  }

  eventChangeOut (e) {
    if (e.currentTarget.className[0] === 'k') {
      e.currentTarget.style.background = 'no-repeat url("assets/kb.png")';
    } else if (e.currentTarget.className[0] === 'a') {
      e.currentTarget.style.background = 'no-repeat url("assets/dog-app.png")';
    } else if (e.currentTarget.className[0] === 'f') {
      e.currentTarget.style.background = 'no-repeat url("assets/forkids.png")';
    } else if (e.currentTarget.className[0] === 'c') {
      e.currentTarget.style.background = 'no-repeat url("assets/covid.png")';
    } else {
      e.currentTarget.style.background = 'no-repeat url("assets/game.png")';
    }
    e.currentTarget.style.backgroundSize = 'contain';
    e.currentTarget.style.width = '450px';
    e.currentTarget.style.height = '250px';
    for (let i = 0; i < e.currentTarget.children.length; i++) {
      e.currentTarget.children[i].style.opacity = '0';
    }
  }

  init() {
    this.addEvent();
  }
}

const projects = new Event;
projects.init();