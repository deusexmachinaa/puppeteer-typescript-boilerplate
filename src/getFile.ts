// import fs from 'fs';
// import path from 'path';

// // JSON 파일 읽기
// fs.readFile('rowsData.json', 'utf8', async (err, jsonString) => {
//   if (err) {
//     console.log('File read failed:', err);
//     return;
//   }
//   const data = JSON.parse(jsonString);

//   for (let item of data) {
//     const { name, imageUrl } = item;

//     // 파일 이름 정제하기 (특수문자 제거)
//     const safeName = name.replace(/[^a-z0-9]/gi, '_').toLowerCase();

//     // 이미지 다운로드
//     const response = await fetch(imageUrl);
//     const buffer = await response.blob();

//     // 이미지 파일 이름 바꾸기
//     fs.writeFile(path.join(__dirname, `${safeName}.jpg`), buffer, () =>
//       console.log('finished downloading!'),
//     );
//   }
// });

// 아마 될것도 같은데 안해봤어요~
