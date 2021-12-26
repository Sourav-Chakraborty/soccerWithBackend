const redirect=()=>{
    var u=10
  setInterval(() => {
      document.getElementById('second').innerText=u
      u--
      if(u===0)
        document.getElementById('home').click()

  }, 1000);
}
redirect()