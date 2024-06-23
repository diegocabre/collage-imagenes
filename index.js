const express = require("express");
const fileUpload = require("express-fileupload");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

// Configurar middleware para manejo de archivos
app.use(
  fileUpload({
    limits: { fileSize: 5 * 1024 * 1024 }, // Limite de 5MB para carga de archivos
  })
);

// Middleware para servir archivos estáticos
app.use("/imgs", express.static(path.join(__dirname, "public/imgs")));

// Ruta para mostrar el formulario
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "formulario.html"));
});

// Ruta para mostrar el collage
app.get("/collage", (req, res) => {
  res.sendFile(path.join(__dirname, "collage.html"));
});

// Ruta POST para cargar una imagen
app.post("/imagen", (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No se cargó ningún archivo.");
  }

  let sampleFile = req.files.target_file;
  let posicion = req.body.posicion;
  let uploadPath = path.join(
    __dirname,
    "public/imgs",
    `imagen-${posicion}.jpg`
  );

  // Mover el archivo a la carpeta deseada
  sampleFile.mv(uploadPath, (err) => {
    if (err) return res.status(500).send(err);

    res.redirect("/collage");
  });
});

// Ruta DELETE para eliminar una imagen
app.get("/deleteImg/:nombre", (req, res) => {
  let imageName = req.params.nombre;
  let filePath = path.join(__dirname, "public/imgs", imageName);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error al eliminar la imagen.");
    }

    res.redirect("/collage");
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
