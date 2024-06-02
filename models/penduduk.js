const mongoose = require('mongoose');

const pendudukSchema = new mongoose.Schema({
  nik: { type: String, required: true },
  kk: { type: String, required: true },
  nama: { type: String, required: true },
  dusun: { type: String, required: true },
  rt: { type: String, required: true },
  rw: { type: String, required: true },
  jk: { type: String, required: true },
  tmpt_lhr: { type: String, required: true },
  tgl_lhr: { type: String, required: true },
  agama: { type: String, required: true },
  pddk_akhir: { type: String, required: true },
  pekerjaan: { type: String, required: true },
  status: { type: String, required: true },
  tgl_kwn: { type: String, required: true },
  shdk: { type: String, required: true },
  wn: { type: String, required: true },
  ayah: { type: String, required: true },
  ibu: { type: String, required: true },
  gdr: { type: String, required: true },
  kej: { type: String, required: true },
  tgl_kej: { type: String, required: true },
});

module.exports = mongoose.model('Penduduk', pendudukSchema);