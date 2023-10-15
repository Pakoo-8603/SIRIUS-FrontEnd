const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const config = require("./config");

// Import routes
const cuentas = require("./models/cuentas/routes");
const auth = require("./models/auth/routes");
const portada = require("./models/portada/routes");
const sintesis = require("./models/sintesis/routes");
const indicadores = require("./models/indicadores/routes");
const evidencias = require("./models/evidencias/routes");
const evidenciasR = require("./models/evidenciasR/routes");
const expedientes = require("./models/expedientes/routes");

// Import error handling middleware
const error = require("./network/errors");

// Create express app
const app = express();

// Use middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de multer para almacenar archivos
// Crea una carpeta con el nombre del indicador en la carpeta uploads
// El destino de los archivos es la carpeta req.body.indicador
// Si existe req.body.recomendacion, se crea una carpeta con el nombre de la recomendación dentro de la carpeta del indicador
// el destino de los archivos es la carpeta req.body.indicador/req.body.recomendacion
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = path.join(__dirname, "uploads", req.body.indicador);
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (req.body.recomendacion) {
        const dir = path.join(__dirname, "uploads", req.body.indicador, req.body.recomendacion);
        fs.mkdir(dir, { recursive: true }, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
          }
          cb(null, dir);
        });
      }
      else {
        cb(null, dir);
      }
    });
  },
  filename: (req, file, cb) => {
    cb(null, req.body.filename + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Ruta para subir archivos
// Si existe req.body.recomendacion, se sube el archivo a la carpeta req.body.indicador/req.body.recomendacion
// Si no existe req.body.recomendacion, se sube el archivo a la carpeta req.body.indicador
// la url de la imagen es http://${config.app.ip}:3000/uploads/req.body.indicador/req.body.recomendacion/req.file.filename
app.post("/api/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  if (!req.body.indicador) {
    return res.status(400).json({ error: "No indicador provided" });
  }
  if (!req.body.filename) {
    return res.status(400).json({ error: "No filename provided" });
  }
  if (req.body.recomendacion) {
    return res.json({ url: `http://${config.app.ip}:${config.app.port}/uploads/${req.body.indicador}/recomendacion/${req.file.filename}` });
  }
  else {
    return res.json({ url: `http://${config.app.ip}:${config.app.port}/uploads/${req.body.indicador}/${req.file.filename}` });
  }
});

// Ruta para eliminar archivos sin saber la extensión del archivo
app.delete("/api/upload/:indicador/:filename", (req, res) => {
  const dir = path.join(__dirname, "uploads", req.params.indicador);
  const filenameBase = req.params.filename;
  // Crea una carpeta con el nombre del indicador en la carpeta uploads si no existe
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    
    const matchingFiles = files.filter(file => path.parse(file).name === filenameBase);
    
    if (matchingFiles.length === 0) {
      console.error("No matching files");
    }
    else {

      // Eliminar todos los archivos que coincidan
      matchingFiles.forEach(file => {
        const filePath = path.join(dir, file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
          }
        });
      });
    }

    res.json({ message: "File(s) deleted" });
  });
});

// Ruta para eliminar archivos sin saber la extensión del archivo
app.delete("/api/uploads/:indicador/recomendacion/:filename", (req, res) => {
  const dir = path.join(__dirname, "uploads", req.params.indicador, "recomendacion");
  const filenameBase = req.params.filename;
  // Crea una carpeta con el nombre del indicador en la carpeta uploads si no existe
  fs.mkdir(dir, { recursive: true }, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    
    const matchingFiles = files.filter(file => path.parse(file).name === filenameBase);
    
    if (matchingFiles.length === 0) {
      console.error("No matching files");
    }
    else {

      // Eliminar todos los archivos que coincidan
      matchingFiles.forEach(file => {
        const filePath = path.join(dir, file);
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(err);
            return res.status(500).json({ error: "Internal server error" });
          }
        });
      });
    }

    res.json({ message: "File(s) deleted" });
  });
});

// Ruta para descargar archivos (no se usa) ya que considero que es mejor servir los archivos estáticos
//app.get("/api/download/:indicador/:filename", (req, res) => {
//  const file = path.join(__dirname, "uploads", req.params.indicador, req.params.filename);
//  res.download(file);
//});

// Servir archivos estáticos desde la carpeta uploads (para descargar)
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Use routes
app.use("/api/cuentas", cuentas);
app.use("/api/auth", auth);
app.use("/api/portada", portada);
app.use("/api/sintesis", sintesis);
app.use("/api/indicadores", indicadores);
app.use("/api/evidencias", evidencias);
app.use("/api/evidencias_r", evidenciasR);
app.use("/api/expedientes", expedientes);

// Use error handling middleware
app.use(error);

// Set port
app.set("port", config.app.port);

// Export app
module.exports = app;