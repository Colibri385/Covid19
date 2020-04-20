"use strict"

const success = (data) => {

  const dataDonnees = JSON.parse(data)
  let departement = select.value

  for (var i = 0; i < dataDonnees.length; i++) {

    if (dataDonnees[i].code === departement) {
      $('#contenu').append('<tr>')
      $('#contenu').append('<td>' + dataDonnees[i].date + '</td>')
      $('#contenu').append('<td>' + dataDonnees[i].source.nom + '</td>')
      $('#contenu').append('<td>' + dataDonnees[i].nom + '</td>')
      $('#contenu').append('<td>' + dataDonnees[i].code + '</td>')
      $('#contenu').append('<td>' + dataDonnees[i].casConfirmes + '</td>')
      $('#contenu').append('<td>' + dataDonnees[i].deces + '</td>')
    }
    $('#contenu').append('</tr>')
  }
}

function recuperervaleur() {

  const url = "https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json"

  $.get(url, success).done(() => {})
    .fail(function () {
      alert("error")
    })
    .always(() => {})
}

