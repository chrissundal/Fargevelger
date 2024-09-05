let colorBorder;
let colorPicker;
let divPicker;


updateView();
function updateView(){
    let html = `
    <div class="main">
    <div class="grid">
    <div class="greenBox" onclick="fargeVelger(this)" style="background-color: green;">green</div>
    <div class="yellowBox" onclick="fargeVelger(this)" style="background-color: yellow;">yellow</div>
    <div class="redBox" onclick="fargeVelger(this)" style="background-color: red;">red</div>
    <button onclick="bytteFarge()">Bytte farge</button>
    <button onclick="bytteBakgrunn()">Bytte bakgrunn</button>
    </div>
    <div class="boxes">
    <div>
                <div class="box1" onclick="selectDiv(this)">Box1</div>
            </div>
            <div>
            <div class="box2" onclick="selectDiv(this)">Box2</div>
            </div>
            </div>
            </div>        
            `;
            document.getElementById('app').innerHTML = html;
        }
        
        function fargeVelger(divColor) {
            colorBorder = divColor;
            colorPicker = divColor.innerHTML;
            colorBorder.classList.toggle("borderStyle"); 
        }
        function selectDiv(clickedDiv) {
            divPicker = clickedDiv;
            divPicker.classList.toggle("borderStyle");      
        }
        function bytteFarge() {
            divPicker.style.backgroundColor = colorPicker;
            colorBorder.classList.remove("borderStyle");
            divPicker.classList.remove("borderStyle"); 
        }
        function bytteBakgrunn() {
            document.body.style.backgroundColor = colorPicker;  
        }
