
function lashList() {
let div = document.getElementById('list');

div.id = 'list';

div.innerHTML = "<h2>Eyelash Extension</h2><h4>Classic Full Set - $70</h4><ul><li>Infill 2 Weeks - $35</li><li>Infill 3 Weeks - $50</li></ul><h4>Hybrid Full Set - $95</h4><ul><li>Infill 2 Weeks - $55</li><li>Infill 3 Weeks - $75</li></ul><h4>Volume Full Set - $105</h4><ul><li>Infill 2 Weeks - $75</li><li>Infill 3 Weeks - $95</li></ul><h4>Eyelash Lift - $50</h4><h4>Eyelash Tint - $22</h4><h4>Eyelash Lift + Tint - $70</h4>";

document.list.appendChild(div);
}





function saverList() {
    let div = document.getElementById('list');
    document.getElementById("list").style.backgroundColor = "yellow";

    div.id = 'list';

    div.innerHTML = "<h2>Our Saver Packs</h2><h4>Brow Wax + Tint + Eyelash Tint - $53</h4><h4>Brow Wax + Tint + Lamination  - $60</h4><h4>Brow Lamination + Eyelash Lift - $80</h4><h4>Brow Lamination + Eyelash Tint + Eyelash Lift- $95</h4><h4>Brow Lamination + Tint + Eyelash Lift + Tint - $120</h4>";

    document.list.appendChild(div);
    

}
    






function browList() {
        let div = document.getElementById('list');
        
        div.id = 'list';
        
        div.innerHTML = "<h2>Eyebrows</h2><h4>Brow Wax - $15</h4><h4>Brow Tint - $18</h4><h4>Brow Henna - $30</h4><h4>Brow Wax + Tint - $35</h4><h4>Brow Wax + Henna - $42</h4><h4>Brow Lamination - $35</h4><h4>Brow Wax + Lamination - $45</h4><h4>Brow Lamination + Tint - $48</h4>";
        
        document.list.appendChild(div);
}