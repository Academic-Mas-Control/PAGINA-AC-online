function enviarFormulario() {
  $.ajax({
      type: 'POST',
      url: "https://ventasapi.academiccontrol.mx/api/Values/ACSP3",
      contentType: 'application/json',
      data: JSON.stringify({
          "spName": "MensajesContacto_acin",
          "spParams": [
              {
                  "spParamName": "Nombre",
                  "spParamValue": $('#name').val(),
                  "spParamType": "string"
              },
              {
                  "spParamName": "Email",
                  "spParamValue": $('#email').val(),
                  "spParamType": "string"
              },
              {
                  "spParamName": "Telefono",
                  "spParamValue": $('#phone').val(),
                  "spParamType": "string"
              },
              {
                  "spParamName": "Titulo",
                  "spParamValue": $('#subject').val(),
                  "spParamType": "string"
              },
              {
                  "spParamName": "Mensaje",
                  "spParamValue": $('#message').val(),
                  "spParamType": "string"
              },
              {
                  "spParamName": "Tipo",
                  "spParamValue": "Info",
                  "spParamType": "string"
              },
          ]
      }),
      dataType: 'json',
      success: function (data) {
          console.log("200");
          // Puedes agregar más código aquí para manejar la respuesta exitosa si es necesario.
      },
      error: function (data) {
          console.log("404");
          console.log(data);
          // Puedes agregar más código aquí para manejar la respuesta de error si es necesario.
      }
  });
}
