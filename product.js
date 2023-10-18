const elaveEtmekDuymesi = document.getElementById("add");
const idinput = document.getElementById("idInputu");
const adInputu = document.getElementById("nameInputu");
const qiymetInputu = document.getElementById("priceInputu");
const endirimliQiymetInputu = document.getElementById("disPriceInputu");
const kataqoriyaInputu = document.getElementById("categoryInputu");
const sekil = document.getElementById("picture");
const silDuymesi = document.getElementById("deleteButton");

let mehsullarArr = [];
let id = 0;
elaveEtmekDuymesi.addEventListener("click", function () {
  if (
    adInputu.value == "" ||
    qiymetInputu.value == "" ||
    endirimliQiymetInputu.value == ""
  ) {
    alert("xanalari doldurun");
  } else {
    id++;
    mehsullarArr.push({
      id: id,
      ad: adInputu.value,
      qiymet: qiymetInputu.value,
      endirimliQiymet: endirimliQiymetInputu.value,
      Kataqoriya: kataqoriyaInputu.value,
    });
    mehsullariGetir();
  }
});
const mehsullariGetir = () => {
  tbody.innerHTML = "";
  mehsullarArr.forEach(function (va, index) {
    tbody.innerHTML += ` <tr>
    <td> ${index + 1}</td>
    <td>${va.ad}</td>
    <td>${va.qiymet}</td>
    <td>${va.endirimliQiymet}</td>
    <td>${va.Kataqoriya}</td>
    <td>
        <button onclick="myFunctionEdit(${va.id})">edit</button>
        <button onclick="myFunction(${va.id})">sil</button>
    </td>
    

    
</tr>`;
  });
};

mehsullariGetir();

const myFunction = (id) => {
  mehsullarArr = mehsullarArr.filter((item) => item.id != id);
  mehsullariGetir();
};
const myFunctionEdit = (id) => {
  const tapilanId = mehsullarArr.find((item) => item.id == id);
  console.log(id);
  console.log(tapilanId);
};
