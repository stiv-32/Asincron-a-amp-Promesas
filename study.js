document.querySelector("#btn_jsn").addEventListener("click", datesfuntion);

function datesfuntion() {
  const line = new XMLHttpRequest();

  line.open("GET", "study.json", true);

  line.send();

  line.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      
        let dates = JSON.parse(this.responseText);
   

    let resp = document.querySelector('#resp');
    resp.innerHTML = '';

      for(let item of dates) {
       
        resp.innerHTML += `
        <tr>
        <th>${item.title}</th>
        <th>${item.priority}</th>
        </tr>`
      }
    }
  }
}






