*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: consolas;
}

body{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #edf1f4;
}

.dark{
    background: #282c2f;
}

.calculator{
    position: relative;
    width: 340px;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 15px 15px 20px rgba(0,0,0,0.1),
               -15px -15px 20px #fffb;
}

.dark .calculator{
    background: #33393e;
    box-shadow: 15px 15px 20px rgba(0,0,0,0.25),
               -15px -15px 20px rgba(255,255,255,0.1);
}

.calculator .buttons{
    position: relative;
    display: grid;
}

.calculator .buttons #value{
    position: relative;
    grid-column: span 4;
    user-select: none;
    overflow: none;
    width: 100%;
    text-align: end;
    color: #ff0000;
    height: 100px;
    line-height: 100px;
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1),
    inset -5px -5px 20px #fff;
    border-radius: 15px;
    margin-bottom: 12px;
    padding: 0 20px;
    font-size: 2em;
    font-weight: 500;
}

.dark .calculator .buttons #value{
    background: #33393e;
    color: #eee;
    box-shadow: inset 15px 15px 20px rgba(0,0,0,0.5),
               inset -15px -15px 20px rgba(255,255,255,0.1);
}

.calculator .buttons span{
    position: relative;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
               -5px -5px 20px #fff;
    margin: 10px;
    cursor: pointer;
    user-select: none;
    min-width: 40px;
    display: flex;
    justify-content: center; 
    align-items: center;
    font-size: 1.2em;
    color: #666;
    border: 2px solid #edf1f4;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
               -5px -5px 10px #fff;

}

.dark .calculator .buttons span{
    color: #eee;
    border: 2px solid #333;
    box-shadow: 5px 5px 20px rgba(0,0,0,0.25),
                -5px -5px 20px rgba(255,255,255,0.1);
}

.calculator .buttons span:active{
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1),
                inset -5px -5px 10px #fff;
    color: #ff0000;            
}

.dark .calculator .buttons span:active{
    box-shadow: inset 5px 5px 20px rgba(0,0,0,0.25),
                inset -5px -5px 20px rgba(255,255,255,0.1); 
}

.calculator .buttons span#clear{
    grid-column: span 2;
    background: #ff0000;
    color: #fff;
    border: 2px solid #edf1f4;
}

.calculator .buttons span#plus{
    grid-row: span 2;
    background: #032adb;
    color: #fff;
    border: 2px solid #edf1f4;
}

.calculator .buttons span#equal{
    grid-row: span 2;
    background: #04d3d3;
    color: #fff;
    border: 2px solid #edf1f4;
}

.calculator .buttons span#clear:active,
.calculator .buttons span#plus:active,
.calculator .buttons span#equal:active{
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
               -5px -5px 10px #fff,
               inset 5px 5px 10px rgba(0,0,0,0.1);
}

.dark .calculator .buttons span#clear:active,
.dark .calculator .buttons span#plus:active,
.dark .calculator .buttons span#equal:active{
    box-shadow: inset 5px 5px 10px rgba(0,0,0,0.1);
}

.dark .calculator .buttons span#clear,
.dark .calculator .buttons span#plus,
.dark .calculator .buttons span#equal{
    border: 2px solid #333;
}

.toggleBtn{
    position: fixed;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #555;
    cursor: pointer;
    border: 2px solid #edf1f4;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.1),
               -5px -5px 10px #fff;
}

.dark .toggleBtn{
    background: #edf1f4;
    border: 2px solid #333;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.25),
               -5px -5px 10px rgba(255,255,255,0.1);
}
