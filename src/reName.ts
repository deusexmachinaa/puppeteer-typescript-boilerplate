// import fs from 'fs';
// import path from 'path';

// // JSON 파일 읽기
// fs.readFile('rowsData.json', 'utf8', (err, jsonString) => {
//   if (err) {
//     console.log('File read failed:', err);
//     return;
//   }
//   const data = JSON.parse(jsonString);

//   for (let item of data) {
//     const { name, imageUrl } = item;

//     // 파일 이름 정제하기 (특수문자 제거)
//     const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

//     // 이미지 URL로부터 원본 파일 이름 추출
//     const originalFileName = path.basename(imageUrl);

//     // 이미지 파일 이름 바꾸기
//     fs.rename(
//       path.join('../images', originalFileName),
//       path.join('../images', `${safeName}.jpg`),
//       err => {
//         if (err) console.log('ERROR:', err);
//       },
//     );
//   }
// });
