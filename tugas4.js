let siswa1 = 174;
let siswa2 = 152;
let siswa3 = 160;

if (siswa1 < siswa2) {
  if (siswa1 < siswa3) {
    if (siswa2 > siswa3) {
      console.log(siswa2, siswa3, siswa1);
    } else {
      console.log(siswa3, siswa2, siswa1);
    }
  }
} else if (siswa1 > siswa2) {
  if (siswa1 > siswa3) {
    if (siswa2 > siswa3) {
      console.log(siswa1, siswa2, siswa3);
    } else {
      console.log(siswa1, siswa3, siswa2);
    }
  }
} else {
  if (siswa1 > siswa2) {
    console.log(siswa3, siswa1, siswa2);
  } else {
    console.log(siswa2, siswa1, siswa3);
  }
}
