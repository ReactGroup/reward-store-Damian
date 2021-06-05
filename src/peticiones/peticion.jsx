function Peticion() {
  const peticion = fetch("https://coding-challenge-api.aerolab.co/user/me", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGIwNTJkZTliNzc4MTAwMjA5YzVhYWMiLCJpYXQiOjE2MjIxNjgyODZ9.Obpv18l_ZSIBKTmtszPDVFqwQssHdlw_zT2VJq7jo-c"
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZWRkOWU5OTQ0NGZlNDAwNmRhOTkyNGQiLCJpYXQiOjE1OTE1ODIzNjF9.-f40dyUIGFsBSB_PTeBGdSLI58I21-QBJNi9wkODcKk",
    },
  });
  peticion
    .then((respuesta) => {
      return respuesta.json();
    })
    .then((data) => {
      return data;
    });
}
export default Peticion;
