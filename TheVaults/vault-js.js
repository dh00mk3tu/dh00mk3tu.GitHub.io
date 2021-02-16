var load = function () {
    console.log("Funtion Called");
}

document.getElementById('cmd-inpt').onkeypress = function(e){
    if (!e) e = window.event;
    if (e.keyCode == '13'){
      alert(this.value);
      return false;
    }
  }