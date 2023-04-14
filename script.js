console.log('Hello!');
const FAC=2;
let width= prompt('nhap chieu dai:');
let heght= prompt('nhap chieu rong');
let chuvi= FAC*(Number(width)+ Number(heght));
let dientich= width*heght;
let message = '
<pre>
chieu dai hinh chu nhat: ${a}
chieu rong hinh chu nhat: ${b}
chu vi hinh chu nhat: ${chuvi}
dien tich chu nhat: ${dientich}
</pre>
';
Document.wirte(message);