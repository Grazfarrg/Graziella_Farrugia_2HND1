#pragma strict
function Start () 
{
       Debug.Log("timer popped");
}

//when clicked, timer increases
function OnMouseDown()
{
       Debug.Log("clicked on clock");
       //increment 5 more seconds        
       GameObject.FindGameObjectWithTag("MainCamera").GetComponent(timer).timer += 2;        
       this.renderer.enabled = false;
       
}



function Update () 
{
       
}