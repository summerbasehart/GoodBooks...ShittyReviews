$( document ).ready(function() {
    var votes = ["One", "Two", "Three"]
    for (var i = 0; i < characters.length; i++) {
        var button = $("<button>")
        button.addClass("vote")
        button.attr("votes", votes[i])
        button.text(votes[i])
        $('#buttons').append(button)
    }
  
    $(document).on("click", ".vote", function() {
        console.log("button was clicked")
        if($('#poll').css('display')!='none'){
          $('#cast').html('Thank You for Your Vote!!').show().siblings('div').hide();
          }else if($('#cast').css('display')!='none'){
              $('#poll').show().siblings('div').hide();
          }
        var query= $(this).attr("votes")
        getResults(query)
    })
    function getResults(term) {
      $("#counter").append(`${term}!`)
      const {appendFile, readFile} = require('fs')
  
      const voteCast = _ => {
        appendFile("votes.txt", query())
      }
      
      const getTotal = _ => {
          readFile('votes.txt', utf8, (e, data) => {
              if (e) {
                  console.log(e)
              } else {
                  let total = 0
                  let dataArr = data.split(', ')
                  dataArr.pop()
                  dataArr.forEach(num => {
                      total += parsefloat(num)
                  });
                  console.log(` You have a balance of $${total} `)
              }
          })
      }
      
      switch (command) {
          case deposit:
              transaction(amount, true)
              break;
          case withdraw:
              transaction(amount, false)
              break;
          case lotto:
              runLotto()
              break;
          case total:
              getTotal()
              break;
      }
    }
  });
  
  // db.collection('votes').onSnapshot( ({ docs }) => {
  //     document.querySelector('#counter').innerHTML = ''
  //     snap.docs.forEach( doc => {
  //         let { One, Two, Three } = doc.data()
  //         let docElem = document.createElement('div')
  //         docElem.innerHTML = `
  //          <h3>${One}</h3>
  //          <h3>${Two}</h3>
  //          <h3>${Three}</h3>
  //          `
  //         document.querySelector('#counter').append(docElem)
  //     })
  // })

  window.onload = function() {
    initApp()
  };  

  function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }  